/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react';

/**
 * @deprecated The returned model is now inferred from `createModelHook`
 */
export type Model<State, Events extends IEvent> = {
  state: State;
  events: Events;
};

// bivarianceHack is used for force bivariance of the function constraint. Without this, it will fail with `strictFunctionTypes`
type IEvent = {[key: string]: {bivarianceHack(data?: object): void}['bivarianceHack']};

/**
 * A mapping of guards and callbacks and what events they relate to.
 * @template TEvents The model events
 * @template TGuardMap A mapping of guards to events they're associated with
 * @template TCallbackMap A mapping of callbacks to events they're associated with
 */
type EventMap<
  TEvents extends IEvent,
  TGuardMap extends Record<string, keyof TEvents>,
  TCallbackMap extends Record<string, keyof TEvents>
> = {
  guards: TGuardMap;
  callbacks: TCallbackMap;
};

type ToGuardConfig<
  TState extends Record<string, any>,
  TEvents extends IEvent,
  TGuardMap extends Record<string, keyof TEvents>
> = {
  [K in keyof TGuardMap]: (event: {
    data: Parameters<TEvents[TGuardMap[K]]>[0];
    state: TState;
  }) => boolean;
};

type ToCallbackConfig<
  TState extends Record<string, any>,
  TEvents extends IEvent,
  TCallbackMap extends Record<string, keyof TEvents>
> = {
  [K in keyof TCallbackMap]: (event: {
    data: Parameters<TEvents[TCallbackMap[K]]>[0];
    /**
     * Callbacks are called during the `setState` phase in React. This means the state has not
     * resolved yet. This is a good time to add more `setState` calls which will be added to React's
     * state batch updates, but it also means the state provided here hasn't been updated yet.
     */
    prevState: TState;
  }) => void;
};

/**
 * Takes the State and Events of a model along with the event map and creates a model config type that is used
 * to configure the model.
 *
 * @example
 * type ModelConfig = {
 *   // additional config your model requires goes here
 *   id?: string
 * } & Partial<ToModelConfig<State, Events, typeof eventMap>>
 *
 * @deprecated `createModelHook` now infers the config type
 */
export type ToModelConfig<
  TState extends Record<string, any>,
  TEvents extends IEvent,
  TEventMap extends EventMap<TEvents, any, any>
> = ToGuardConfig<TState, TEvents, TEventMap['guards']> &
  ToCallbackConfig<TState, TEvents, TEventMap['callbacks']>;

/**
 * Convenience factory function that extracts type information and encodes it for use with model
 * config and `useEventMap`. Under the hood, it returns the config that was passed in. The real
 * magic is in type extraction and encoding which reduces boilerplate.
 *
 * `createEventMap` is a function that takes an `Events` generic and will return a function that
 * takes in a config object to configure all guards and callbacks. The empty function is used because
 * Typescript does not allow partial specification of generics (either you specify all generics or
 * none of them). Since `Events` cannot be inferred, it is passed to the first function.
 *
 * @example
 * type Events = {
 *   open(data: { eventData: string }): void
 * }
 *
 * const eventMap = createEventMap<Events>()({
 *   guards: {
 *     shouldOpen: 'open'
 *   },
 *   callbacks: {
 *     onOpen: 'open'
 *   }
 * })
 *
 * @deprecated `createModelHook` uses Template Literal Types to create event map types
 */
export const createEventMap = <TEvents extends IEvent>() => <
  TGuardMap extends Record<string, keyof TEvents>,
  TCallbackMap extends Record<string, keyof TEvents>
>(
  config: Partial<EventMap<TEvents, TGuardMap, TCallbackMap>>
): EventMap<TEvents, TGuardMap, TCallbackMap> => {
  // Instruct Typescript that all valid guards and callbacks exist
  return config as EventMap<TEvents, TGuardMap, TCallbackMap>;
};

// small wrapper to get `keyof T` instead of `string | number | symbol`
const keys = <T extends object>(input: T) => Object.keys(input) as (keyof T)[];

/**
 * This hook creates a stable reference events object to be used in a model. The reference is stable
 * by the use of `React.Memo` and uses React Refs to make sure there are no stale closure values. It
 * takes in an event map, state, model config, and an events object. It will map over each event and
 * add guards and callbacks to the event as configured in the event map.
 *
 * @param eventMap
 * @param state
 * @param config
 * @param events
 *
 * @example
 * const useDiscloseModel = (config: ModelConfig = {}): DiscloseModel => {
 *   const events = useEventMap(eventMap, state, config, {
 *     open() {
 *       // do something
 *     }
 *   }
 * })
 * @deprecated Use `createModelHook` instead
 */
export const useEventMap = <
  TEvents extends IEvent,
  TState extends Record<string, any>,
  TGuardMap extends Record<string, keyof TEvents>,
  TCallbackMap extends Record<string, keyof TEvents>,
  TConfig extends Partial<
    ToModelConfig<TState, TEvents, EventMap<TEvents, TGuardMap, TCallbackMap>>
  >
>(
  eventMap: EventMap<TEvents, TGuardMap, TCallbackMap>,
  state: TState,
  config: TConfig,
  events: TEvents
): TEvents => {
  // use refs so we can memoize the returned `events` object
  const eventMapRef = React.useRef(eventMap);
  const stateRef = React.useRef(state);
  const configRef = React.useRef(config);
  const eventsRef = React.useRef(events);

  // update all the refs with current values
  eventMapRef.current = eventMap;
  stateRef.current = state;
  configRef.current = config;
  eventsRef.current = events;

  return React.useMemo(() => {
    return keys(eventsRef.current).reduce((result, key) => {
      result[key] = (data => {
        // Invoke the configured guard if there is one
        if (!(eventsRef.current[key] as any)._wrapped) {
          const guardFn = keys(eventMapRef.current.guards || {}).find(k => {
            return (eventMapRef.current.guards || {})[k] === key;
          });

          if (
            guardFn &&
            configRef.current?.[guardFn] &&
            //@ts-ignore Typescript doesn't like that the call signatures are different
            !configRef.current[guardFn]({data, state: stateRef.current})
          ) {
            return;
          }
        }

        // call the event (setter)
        eventsRef.current[key](data);

        if (!(eventsRef.current[key] as any)._wrapped) {
          // Invoke the configured callback if there is one
          const callbackFn = keys(eventMapRef.current.callbacks || {}).find(k => {
            return (eventMapRef.current.callbacks || {})[k] === key;
          });

          if (callbackFn && configRef.current?.[callbackFn]) {
            //@ts-ignore Typescript doesn't like that the call signatures are different
            configRef.current[callbackFn]({data, prevState: stateRef.current});
          }
        }
      }) as TEvents[keyof TEvents]; // this cast keeps Typescript happy

      // Mark this function has been wrapped so we can detect wrapped events and not call guards and callbacks multiple times
      (result[key] as any)._wrapped = true;
      return result;
    }, {} as TEvents);
  }, []);
};

type EventCreator = {[key: string]: {bivarianceHack(...args: any[]): object}['bivarianceHack']};
type ToEvent<TEvents extends EventCreator> = {
  [K in keyof TEvents]: (data: ReturnType<TEvents[K]>) => void;
};

// use this?
export const createEvents = <TEvents extends EventCreator>(events: TEvents) => <
  TGuardMap extends Record<string, keyof TEvents>,
  TCallbackMap extends Record<string, keyof TEvents>
>(
  config?: Partial<EventMap<ToEvent<TEvents>, TGuardMap, TCallbackMap>>
) => {
  return {events, eventMap: config as EventMap<ToEvent<TEvents>, TGuardMap, TCallbackMap>};
};

/**
 * Special type that will be a placeholder during development. At build time, this generic will be
 * used to create a real generic type for models. If you use `Generic`, you'll have to create an
 * explicit type for your configs to preserve the `Generic` symbol, otherwise Typescript will
 * convert to `any`.
 */
export type Generic = any


export type ModelExtras<TDefaultConfig, TRequiredConfig, TState, TEvents, TModel> = {
  /** Default config of the model. Useful when composing models to reused config */
  defaultConfig: TDefaultConfig;
  /** Required config of the model. Useful when composing models to reused config */
  requiredConfig: TRequiredConfig;
  /**
   * This is only a type and not a value. If you want to
   */
  TConfig: Partial<TDefaultConfig> & TRequiredConfig & ToEventConfig<TState, TEvents>;
  /**
   * The context of the model. This can be used directly, but is mostly used internally by
   * `createContainer` or `createSubcomponent` to handle model context automatically.
   */
  Context: React.Context<TModel>;
  /**
   * This function will separate all elemProps from config props. If a prop is both a config _and_
   * an elemProp, you can manually apply the prop again.
   * */
  getElemProps: <P extends {}>(
    props: P
  ) => Omit<
    P,
    | keyof TDefaultConfig
    | keyof TRequiredConfig
    | keyof ToEventConfig<TState, TEvents>
  >;
  /**
   * A typed function to merge config when composing models together. Guards and Callbacks haven't
   * been resolved yet. `mergeConfig` is a type-attached function that includes guard and callback
   * types of the composed model.
   *
   *
   * @example
   * ```ts
   * const useComposedModel = createModelHook({
   *   defaultConfig: useModel.defaultConfig,
   *   requiredConfig: useModel.requiredConfig,
   * })(config => {
   *   const model = useModel(useModel.mergeConfig(config, {
   *     // runtime will contain config.onUpdateValue, but Typescript can't know about it yet
   *     // luckily `useModel.mergeConfig` knows about the `onUpdateValue` config option
   *     onUpdateValue(data, prevState) {
   *       console.log('onUpdateValue', data, prevState)
   *     }
   *   }))
   *
   *   return model
   * })
   * ```
   */
  mergeConfig: (
    source: Partial<TDefaultConfig> & TRequiredConfig,
    target: Partial<
      TDefaultConfig & TRequiredConfig & ToEventConfig<TState, TEvents>
    >
  ) => TDefaultConfig & TRequiredConfig & ToEventConfig<TState, TEvents>;
};

/**
 * Generic type for all models. It makes `defaultConfig` have optional keys and adds `getElemProps`
 * statically to the model function.
 */
export type ModelFn<
  TDefaultConfig,
  TRequiredConfig,
  TModel
> = TModel extends { state: infer TState; events: infer TEvents }
  ? (<TT_Special_Generic>( // special generic used by post processing to handle generic models
      config?: Partial<TDefaultConfig> &
        TRequiredConfig &
        ToEventConfig<TState, TEvents>
    ) => TModel ) &
      ModelExtras<TDefaultConfig, TRequiredConfig, TState, TEvents, TModel>
  : never;

/**
 * Generic type that adds guards and callbacks to events. The returned type should be applied to the
 * return type of a model's config.
 *
 * For example,
 * ```ts
 * // input
 * ToEventConfig<State, { updateValue: (data: { val: string }) }>
 *
 * //output
 * {
 *   shouldUpdateValue(data: {val:string}, state: State): boolean,
 *   onUpdateValue(data: {val:string}, prevState: State): void
 * }
 * ```
 */
// We use the bivariance hack so models can be considered compatible even if the guard and callbacks
// contain `state` that are incompatible. More info:
// https://github.com/damianc/dev-notes/blob/master/typescript/bivariance-hack.md
export type ToEventConfig<TState, TEvents extends Record<string, any>> = {
  [K in keyof TEvents as `on${Capitalize<string & K>}`]?: {bivarianceHack(
    data: Parameters<TEvents[K]>[0],
    prevState: TState
  ): void}['bivarianceHack'];
} & {
  [K in keyof TEvents as `should${Capitalize<string & K>}`]?: {bivarianceHack(
    data: Parameters<TEvents[K]>[0],
    state: TState
  ): boolean}['bivarianceHack'];
};

function capitalize(string: string) {
  return string[0].toUpperCase() + string.substring(1);
}

function getGuardName(eventName: string) {
  return `should${capitalize(eventName)}`;
}

function getCallbackName(eventName: string) {
  return `on${capitalize(eventName)}`;
}

// Merges config together in a way that is type safe and works at runtime with correct rules and order applied
// to guards and callbacks.
function mergeConfig<TConfig extends Record<string, any>>(
  sourceConfig: Partial<TConfig>,
  newConfig: Partial<TConfig>
): TConfig {
  const result = { ...sourceConfig } as TConfig;
  for (const key in newConfig) {
    if (
      typeof newConfig[key] === "function" &&
      /(on)[A-Z]/.test(key) &&
      typeof sourceConfig[key] === "function"
    ) {
      // merge callbacks and ignore Typescript's errors. We've already tested call signatures
      //  @ts-ignore
      result[key] = (data: any, state: any) => {
        // @ts-ignore
        sourceConfig[key](data, state);
        // @ts-ignore
        newConfig[key](data, state);
      };
    } else if (
      newConfig[key] &&
      /(should)[A-Z]/.test(key) &&
      sourceConfig[key]
    ) {
      // merge guards and ignore Typescript's errors. We've already tested call signatures
      // @ts-ignore
      result[key] = (data: any, state: any) => {
        // @ts-ignore
        return sourceConfig[key](data, state) && newConfig[key](data, state);
      };
    } else {
      // @ts-ignore
      result[key] = newConfig[key]
    }
  }

  return result;
}

export type ExtractModelConfig<T extends (config: any) => any> = T extends (config: infer P) => any ? Required<P> : {}

export type ModelConfig<TDefaultConfig, TRequiredConfig> = {
  /**
   * Optional config with any defaults if applicable. The values will both be used
   * to provide defaults if a config property isn't provided as well as to extract type
   * information about the config option. To make a default config property really optional,
   * provide `undefined` as the value and cast as the desired type.
   *
   * @example
   * defaultConfig: {
   *   // optional config with no default. Your model function will not get a default value
   *   optional: undefined as undefined | string,
   *   // defaulted value of inferred type `string`
   *   defaulted: 'foo',
   *   // defaulted value with a type override of `'foo' | 'bar'`
   *   defaultedOverride: 'foo' as 'foo' | 'bar',
   * }
   */
  defaultConfig?: TDefaultConfig;
  /**
   * Required config that has no default value. Since this is JavaScript, a value needs to be provided
   * but the value is ignored at runtime. The value is used only for Typescript inference. You can
   * use `as` to cast the type to something more specific than the inferred one.
   *
   * @example
   * requiredConfig: {
   *   // The `1` is ignored at runtime, but the type of `size` is `number`
   *   size: 1,
   *   // The value is ignored at runtime, but the type is `'bar' | 'baz'`
   *   foo: 'bar' as 'bar' | 'baz'
   * }
   */
  requiredConfig?: TRequiredConfig;
  /**
   * Use `defaultContext` to set the model passed to components that support rendering without a
   * model or container component.
   */
  defaultContext?: Record<string, any>;
  /**
   * Useful if you want to extend a model, but not create a new model context. This allows models to
   * be compatible with existing compound components. An example might be a modal model extends a
   * popup model, but uses the same context. If you create your own subcomponents or container
   * component that utilize this model, you'll need to set this property. Failure to do so will mean
   * components are not getting the correct context.
   *
   * @example
   * const useMyModel = createModelHook({
   *   defaultConfig: {
   *     ...useModel.defaultConfig, // inherit the same default config
   *     initialValue: '',
   *   },
   *   requiredConfig: useModel.requiredConfig, // inherit the same required config
   *   contextOverride: useModel.Context,
   * })(config => {
   *   // config has all the same config `useModel` has, but also `initialValue`
   *
   *   const model = useModel(config);
   *   const [value, setValue] = React.useState(config.initialValue);
   *   const state = { ...model.state, value } // merge model.state with our state
   *   const events = {
   *     ...model.events, // merge model.events with our events
   *     updateValue(value: string) {
   *       setValue(value)
   *     }
   *   }
   *
   *   return {
   *     ...model, // merge any additional properties added to the model by the `useModel` hook
   *     state,
   *     events
   *   }
   * })
   *
   * const MySubComponent = createSubcomponent('div')({
   *   modelHook: useMyModel, // this tells the component which model and context to use
   * })((elemProps, Element, model) => {
   *   elemProps // { children: React.ReactNode }
   *   model.state.value // `string`
   * })
   */
  contextOverride?: React.Context<any>
};

/**
 * Factory function to create typed models with minimal Typescript required. It is a function that
 * takes `defaultConfig` and `requiredConfig` and returns a function that will become the definition
 * of the model. The config objects will be used to generate a `getElemProps` function that is used
 * to separate model config an element props.
 *
 * Typescript will infer all config from the returned `state`, `events`, and the `defaultConfig` and
 * the `requiredConfig`. `defaultConfig` serves the additional purpose of being a default value if
 * no config value was provided. `requiredConfig` is a little odd in that config values are ignored
 * and only used to extract types.
 *
 * @example
 * const useModel = createModelHook({
 *   defaultConfig: {
 *     optional: 'right' as 'left' | 'right', // optional type casting
 *   },
 *   requiredConfig: {
 *     size: 1, // values are only used for types and are ignored at runtime
 *   }
 * })(config => {
 *   // config is pre-typed for you based on `defaultConfig`
 * })
 */
export const createModelHook = <TDefaultConfig extends {}, TRequiredConfig extends {}>(
  options: ModelConfig<TDefaultConfig, TRequiredConfig>
) => {
  const { defaultConfig = {}, requiredConfig = {}, defaultContext, contextOverride } =
    options;

  // create a bunch of refs so we can define the `wrappedModel` function once.
  const fnRef: { current: any } = { current: null };

  const callbacksRef: { current: string[] } = { current: [] };
  const guardsRef: { current: string[] } = { current: [] };
  const Context = contextOverride || React.createContext<any>(defaultContext || {state: {}, events: {}})

  const getElemProps = (props: object) => {
    // if (eventsRef.current === null) {
    //   throw Error(
    //     `useModel.getElemProps() must be called after useModel(). getElemProps needs to determine the events returned by the model to function correctly.\nExample:\nconst model = useModel();\nconst elemProps = useModel.getElemProps(props);`
    //   );
    // }
    const elemProps = {};
    for (const key in props) {
      if (
        (!defaultConfig.hasOwnProperty(key) &&
        !requiredConfig.hasOwnProperty(key) &&
        !callbacksRef.current.includes(key) &&
        !guardsRef.current.includes(key)) || key === "id"
      ) {
        // @ts-ignore  Typescript complains about index signatures and this type is never exposed in definitions, so suppress the error
        elemProps[key] = props[key];
      }
    }

    return elemProps;
  };

  // we use `any` here because we don't know what the type is here and it is internal. No use
  // slowing down Typescript to bother type checking
  function wrappedModelHook(config: Record<string, any>) {
    const stateRef = React.useRef<Record<string, any>>({})
    const configRef = React.useRef<Record<string, any>>({})
    const eventsRef = React.useRef<Record<string, any>>({})

    const { state, events, ...rest } = fnRef.current({
      ...defaultConfig,
      ...config,
    });

    // update all the refs with current values
    stateRef.current = state;
    configRef.current = config || {};
    eventsRef.current = events;
    if (!callbacksRef.current.length) {
      callbacksRef.current = (keys(events) as string[]).map(getCallbackName);
    }
    if (!guardsRef.current.length) {
      guardsRef.current = (keys(events) as string[]).map(getGuardName);
    }

    const wrappedEvents = React.useMemo(() => {
      return keys(eventsRef.current).reduce((result, key) => {
        result[key] = (data?: any) => {
          // Invoke the configured guard if there is one
          if (!(eventsRef.current[key] as any)._wrapped) {
            const guardFnName = getGuardName(key);

            if (
              configRef.current[guardFnName] &&
              !configRef.current[guardFnName](
                data,
                stateRef.current,
              )
            ) {
              return;
            }
          }

          // call the event (setter)
          eventsRef.current[key](data);

          const callbackFnName = getCallbackName(key);
          if (!(eventsRef.current[key] as any)._wrapped) {

            if (configRef.current[callbackFnName]) {
              configRef.current[callbackFnName](
                data,
                stateRef.current,
              );
            }
          }
        };

        // Mark this function has been wrapped so we can detect wrapped events and not call guards and callbacks multiple times
        (result[key] as any)._wrapped = true;
        return result;
      }, {} as Record<string, any>);
    }, []);

    return { state, events: wrappedEvents, ...rest };
  }

  wrappedModelHook.getElemProps = getElemProps;
  wrappedModelHook.defaultConfig = defaultConfig;
  wrappedModelHook.requiredConfig = requiredConfig;
  wrappedModelHook.mergeConfig = mergeConfig;
  wrappedModelHook.Context = Context;

  return <
    TModelFn extends (config: TDefaultConfig & TRequiredConfig) => {
      state: {};
      events: Record<string, (...args: any) => void>;
    }
  >(
    fn: TModelFn
  ): ModelFn<TDefaultConfig, TRequiredConfig, ReturnType<TModelFn>> => {
    fnRef.current = fn;

    return wrappedModelHook as any; // Typescript complains about the `fn` not matching the signature. It's okay Typescript. It works at runtime
  };
};
