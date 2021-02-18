import React from 'react';

export type Model<State, Events> = {
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
  TGuardMap extends Record<string, keyof TEvents>
> = {
  [K in keyof TGuardMap]: (event: {
    data: Parameters<TEvents[TGuardMap[K]]>[0];
    state: TState;
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

        // call the event (setter)
        eventsRef.current[key](data);

        // Invoke the configured callback if there is one
        const callbackFn = keys(eventMapRef.current.callbacks || {}).find(k => {
          return (eventMapRef.current.callbacks || {})[k] === key;
        });

        if (callbackFn && configRef.current?.[callbackFn]) {
          //@ts-ignore Typescript doesn't like that the call signatures are different
          configRef.current[callbackFn]({data, state: stateRef.current});
        }
      }) as TEvents[keyof TEvents]; // this cast keeps Typescript happy
      return result;
    }, {} as TEvents);
  }, []);
};
