import {
  createMachine,
  EventObject,
  StateMachine,
  interpret,
  Typestate,
} from '@workday/canvas-kit-labs-xstate-fsm';
import React from 'react';

type IEvents = Record<string, (...args: any) => EventObject>;
type FlattenIfArray<T> = T extends (infer R)[] ? R : T;
type NarrowEvent<T, N> = T extends {type: N} ? T : never;

/**
 * Returns an object that is the return type of each function
 * Given:
 * ```ts
 * { foo: (a: A) => { type: 'FOO' } }
 * ```
 *
 * Returns:
 * ```ts
 * { foo: { type: 'FOO' } }
 * ```
 */
export type ReturnTypes<T extends Record<string, (...args: any) => {type: string}>> = {
  [P in keyof T]: ReturnType<T[P]>;
  // [P in keyof T]: NarrowEvent<ReturnType<T[P]>, ReturnType<T[P]>['type']>;
};

/**
 * Takes event configuration and returns disjoint union of the returned events
 *
 * Given:
 * ```ts
 * {
 *   foo: () => { type: 'FOO' },
 *   bar: () => { type: 'BAR' }
 * }
 * ```
 * Returns:
 * ```ts
 * { type: 'FOO' } | { type: 'BAR' }
 * ```
 */
export type EventsOf<T extends IEvents> = ReturnTypes<T>[keyof ReturnTypes<T>];

export const createAction = <K extends string, T extends unknown[], R extends object>(
  name: K,
  fn: (...args: T) => R
): ((...args: T) => R & {type: K}) => {
  return (...args: T) => ({...fn(...args), type: name});
};

const createConst = <K extends string>(name: K): K => name;

const foo = {
  activateTab(tab: string) {
    return {
      type: createConst('activateTab'),
      tab,
    };
  },
  // activateTab: createAction('activateTab', (tab: string) => ({tab})),
  initialize(items: string[], activeTab: string) {
    return {
      type: 'initialize',
      items,
      activeTab,
    };
  },
};

type temp = ReturnType<typeof foo['activateTab']>;

export type SchemaToValues<T extends Record<string, any>, TContext extends object> = {
  [P in keyof T]: P extends string ? {value: P; context: TContext} : never; // make sure `P` is _only_ a string
};

type events = EventsOf<typeof foo>;

/**
 * Converts a schema to a valid `Typestate` definition
 *
 * Given:
 * ```ts
 * {
 *   one: {},
 *   two: {},
 * }
 * ```
 * Returns:
 * ```ts
 * {
 *   value: 'one'
 * } | {
 *   value: 'two'
 * }
 * ```
 */
export type StatesOf<T extends Record<string, any>, TContext extends object> = Readonly<
  SchemaToValues<T, TContext>[keyof SchemaToValues<T, TContext>]
>;

const bar = {
  initial: {},
  active: {},
  animating: {},
};

type Test = StatesOf<typeof bar, {activeTab: string}>;

/**
 * Convert a `GuardConfig` to a `StateMachine.GuardFunction`
 *
 * Given:
 * ```ts
 * { guardOpen: 'open', guardToggle: ['open', 'close'] }
 * ```
 *
 * Returns:
 * ```ts
 * {
 *   guardOpen: (context, event: { type: 'OPEN' }, meta) => boolean,
 *   guardToggle: (context, event: { type: 'OPEN' } | { type: 'CLOSE' }, meta) => boolean
 * }
 * ```
 */
type Guards<
  Context extends object,
  Events extends IEvents,
  GuardConfig extends Record<string, keyof Events | Array<keyof Events>>
> = {
  [P in keyof GuardConfig]: StateMachine.GuardFunction<
    Context,
    // Type 'FlattenIfArray<GuardConfig[P]>' cannot be used to index type 'ReturnTypes<Events>'
    // No Typescript, it totally does. Remove the @ts-ignore if we can figure out how to properly type this
    //@ts-ignore
    ReturnTypes<Events>[FlattenIfArray<GuardConfig[P]>]
  >;
};

/**
 * Convert an `ActionConfig` to a `ActionFunction`
 *
 * Given:
 * ```ts
 * { actionOpen: 'open', actionToggle: ['open', 'close'] }
 * ```
 *
 * Returns:
 * ```ts
 * {
 *   actionOpen: (context, event: { type: 'OPEN' }, meta) => void,
 *   actionToggle: (context, event: { type: 'OPEN' } | { type: 'CLOSE' }, meta) => void
 * }
 * ```
 */
type Actions<
  Context extends object,
  Events extends IEvents,
  ActionConfig extends Record<string, keyof Events | Array<keyof Events>>
> = {
  [P in keyof ActionConfig]: StateMachine.ActionFunction<
    Context,
    // Type 'FlattenIfArray<ActionConfig[P]>' cannot be used to index type 'ReturnTypes<Events>'
    // No Typescript, it totally does. Remove the @ts-ignore if we can figure out how to properly type this
    //@ts-ignore
    ReturnTypes<Events>[FlattenIfArray<ActionConfig[P]>]
  >;
};

interface ResultBox<T> {
  v: T;
}

export default function useConstant<T>(fn: () => T): T {
  const ref = React.useRef<ResultBox<T>>();

  if (!ref.current) {
    ref.current = {v: fn()};
  }

  return ref.current.v;
}

const getServiceState = <
  TContext extends object,
  TEvent extends EventObject = EventObject,
  TState extends Typestate<TContext> = {value: any; context: TContext}
>(
  service: StateMachine.Service<TContext, TEvent, TState>
): StateMachine.State<TContext, TEvent, TState> => {
  let currentValue: StateMachine.State<TContext, TEvent, TState>;
  service
    .subscribe(state => {
      currentValue = state;
    })
    .unsubscribe();
  return currentValue!;
};

export function useMachine<
  TContext extends object,
  TEvent extends EventObject = EventObject,
  TState extends Typestate<TContext> = {value: any; context: TContext}
>(
  stateMachine: StateMachine.Machine<TContext, TEvent, TState>,
  options?: {
    actions?: StateMachine.ActionMap<TContext, TEvent>;
    guards?: StateMachine.GuardMap<TContext, TEvent>;
  }
): [
  StateMachine.State<TContext, TEvent, TState>,
  StateMachine.Service<TContext, TEvent>['send'],
  StateMachine.Service<TContext, TEvent>
] {
  if (process.env.NODE_ENV !== 'production') {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [initialMachine] = React.useState(stateMachine);

    if (stateMachine !== initialMachine) {
      console.warn(
        'Machine given to `useMachine` has changed between renders. This is not supported and might lead to unexpected results.\n' +
          'Please make sure that you pass the same Machine as argument each time.'
      );
    }
  }

  const service = useConstant(() =>
    interpret(
      createMachine(stateMachine.config, options ? options : (stateMachine as any)._options)
    ).start()
  );

  const [state, setState] = React.useState(() => getServiceState(service));

  React.useEffect(() => {
    if (options) {
      (service as any)._machine._options = options;
    }
  });

  React.useEffect(() => {
    service.subscribe(setState);
    return () => {
      service.stop();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return [state, service.send, service];
}

// eslint-disable-next-line no-empty-function
const defaultAction = () => {};
const defaultGuard = () => true;

type ModelConfig<
  TContext extends {},
  TEvents extends IEvents,
  TGuardsToEvents extends Record<string, keyof TEvents | Array<keyof TEvents>>,
  TActionsToEvents extends Record<string, keyof TEvents | Array<keyof TEvents>>
> = {
  context?: Partial<TContext>;
} & Partial<Guards<TContext, TEvents, TGuardsToEvents>> &
  Partial<Actions<TContext, TEvents, TActionsToEvents>>;

type MappedEventCreatorsToSend<
  TEvents extends IEvents,
  TContext extends object,
  TSchema extends Record<string, any>
> = {
  [K in keyof TEvents]: (
    ...args: Parameters<TEvents[K]>
  ) => StateMachine.State<TContext, EventsOf<TEvents>, StatesOf<TSchema, TContext>>;
};

export const createUseModel = <
  TContext extends {},
  TEvents extends IEvents,
  TGuardsToEvents extends Record<string, keyof TEvents | Array<keyof TEvents>>,
  TActionsToEvents extends Record<string, keyof TEvents | Array<keyof TEvents>>,
  TSchema extends Record<string, any>
>({
  context,
  events,
  guards,
  actions,
  schema,
}: {
  context: TContext;
  events: TEvents;
  /**
   * Helps identify states and context associated with a given state
   */
  schema: TSchema;
  guards?: TGuardsToEvents;
  actions?: TActionsToEvents;
}) => (
  machineConfig: StateMachine.Config<TContext, EventsOf<TEvents>, StatesOf<TSchema, TContext>>
) => {
  const model = createMachine({context, ...machineConfig});
  const mapEventCreatorToSend = (
    send: StateMachine.Service<TContext, EventsOf<TEvents>>['send']
  ): MappedEventCreatorsToSend<TEvents, TContext, TSchema> => {
    return Object.keys(events).reduce((result, key) => {
      result[key] = function(...args: any) {
        return send(events[key](...args) as any);
      };
      return result;
    }, {} as any);
  };

  return (
    modelConfig: ModelConfig<TContext, TEvents, TGuardsToEvents, TActionsToEvents> = {}
  ): {
    state: StateMachine.State<TContext, EventsOf<TEvents>, StatesOf<TSchema, TContext>>;
    events: MappedEventCreatorsToSend<TEvents, TContext, TSchema>;
    service: StateMachine.Service<TContext, EventsOf<TEvents>>;
  } => {
    const guardFunctions = Object.keys(guards || {}).reduce((result, guardName) => {
      result[guardName] = (modelConfig as any)[guardName] || defaultGuard;
      return result;
    }, {} as StateMachine.GuardMap<TContext, EventsOf<TEvents>>);

    const actionFunctions = Object.keys(actions || {}).reduce((result, actionName) => {
      result[actionName] = (modelConfig as any)[actionName] || defaultAction;
      return result;
    }, {} as StateMachine.ActionMap<TContext, EventsOf<TEvents>>);

    const config = {
      actions: actionFunctions,
      guards: guardFunctions,
    };

    // console.log('createUseModel', {
    //   model,
    //   guardFunctions,
    //   actionFunctions,
    //   machineConfig,
    //   modelConfig,
    // });

    const machine = useMachine(model, config);
    const [_, send] = machine;
    const mappedEvents = React.useMemo(() => mapEventCreatorToSend(send), [send]);
    // React.useLayoutEffect(() => {
    //   const subscription = machine[2].subscribe(state => {
    //     console.log('state', state);
    //   });
    //   return () => {
    //     subscription.unsubscribe();
    //   };
    // }, []);
    return {
      state: machine[0],
      events: mappedEvents,
      service: machine[2],
    };
  };
};
