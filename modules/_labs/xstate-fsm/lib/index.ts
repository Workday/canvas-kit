/* eslint-disable compat/compat */
/* eslint-disable no-param-reassign */
import {StateMachine, EventObject, Typestate, InterpreterStatus, InitEvent} from './types';

export {StateMachine, EventObject, InterpreterStatus, Typestate};

const INIT_EVENT: InitEvent = {type: 'xstate.init'};
const ASSIGN_ACTION: StateMachine.AssignAction = 'xstate.assign';

function toArray<T>(item: T | T[] | undefined): T[] {
  return item === undefined ? [] : ([] as T[]).concat(item);
}

function keys<T>(obj: T): Array<keyof T> {
  return Object.keys(obj) as Array<keyof T>;
}

export function assign<TC extends object, TE extends EventObject = EventObject>(
  assignment: StateMachine.Assigner<TC, TE> | StateMachine.PropertyAssigner<TC, TE>
): StateMachine.AssignActionObject<TC, TE> {
  return {
    type: ASSIGN_ACTION,
    assignment,
  };
}

function toActionObject<TContext extends object, TEvent extends EventObject>(
  // tslint:disable-next-line:ban-types
  action:
    | string
    | StateMachine.ActionFunction<TContext, TEvent>
    | StateMachine.ActionObject<TContext, TEvent>,
  actionMap: StateMachine.ActionMap<TContext, TEvent> | undefined
) {
  action =
    typeof action === 'string' && actionMap && actionMap[action] ? actionMap[action] : action;
  return typeof action === 'string'
    ? {
        type: action,
      }
    : typeof action === 'function'
    ? {
        type: action.name,
        exec: action,
      }
    : action;
}

function toGuardObject<TContext extends object, TEvent extends EventObject>(
  // tslint:disable-next-line:ban-types
  guard: string | StateMachine.GuardFunction<TContext, TEvent>,
  guardMap: StateMachine.GuardMap<TContext, TEvent> | undefined
) {
  return typeof guard === 'string'
    ? guardMap && guardMap[guard]
      ? guardMap[guard]
      : () => true
    : guard;
}

//@ts-ignore
const IS_PRODUCTION = process.env.NODE_ENV === 'production';

function createMatcher(value: string) {
  return (stateValue: any) => value === stateValue;
}

function toEventObject<TEvent extends EventObject>(event: TEvent['type'] | TEvent): TEvent {
  return (typeof event === 'string' ? {type: event} : event) as TEvent;
}

function createUnchangedState<TC extends object, TE extends EventObject, TS extends Typestate<TC>>(
  value: string,
  context: TC
): StateMachine.State<TC, TE, TS> {
  return {
    value,
    context,
    actions: [],
    changed: false,
    matches: createMatcher(value),
  };
}

export function createMachine<
  TContext extends object,
  TEvent extends EventObject = EventObject,
  TState extends Typestate<TContext> = {value: any; context: TContext}
>(
  fsmConfig: StateMachine.Config<TContext, TEvent, TState>,
  options: {
    actions?: StateMachine.ActionMap<TContext, TEvent>;
    guards?: StateMachine.GuardMap<TContext, TEvent>;
  } = {}
): StateMachine.Machine<TContext, TEvent, TState> {
  if (!IS_PRODUCTION) {
    keys(fsmConfig.states).forEach(state => {
      if (fsmConfig.states[state].hasOwnProperty('states')) {
        throw new Error(`Nested finite states not supported.
            Please check the configuration for the "${state}" state.`);
      }
    });
  }

  const machine = {
    config: fsmConfig,
    _options: options,
    initialState: {
      value: fsmConfig.initial,
      actions: toArray(fsmConfig.states[fsmConfig.initial].entry).map(action =>
        toActionObject(action, options.actions)
      ),
      context: fsmConfig.context!,
      matches: createMatcher(fsmConfig.initial),
    },
    transition: (
      state: string | StateMachine.State<TContext, TEvent, TState>,
      event: string | (Record<string, any> & {type: string})
    ): StateMachine.State<TContext, TEvent, TState> => {
      const {value, context} =
        typeof state === 'string' ? {value: state, context: fsmConfig.context!} : state;
      const eventObject = toEventObject(event);
      const stateConfig = fsmConfig.states[value];

      if (!IS_PRODUCTION) {
        if (!stateConfig) {
          throw new Error(
            `State '${value}' not found on machine${fsmConfig.id ? ` '${fsmConfig.id}'` : ''}.`
          );
        }
      }

      if (stateConfig.on) {
        const transitions = toArray(stateConfig.on[eventObject.type as TEvent['type']]);

        for (const transition of transitions) {
          if (transition === undefined) {
            return createUnchangedState(value, context);
          }

          const {target = value, actions = [], cond = []} =
            typeof transition === 'string' ? {target: transition} : transition;

          let nextContext = context;
          const allGuards = ([] as any[])
            .concat(cond)
            .map(guard => toGuardObject(guard, (machine as any)._options.guards))
            .reduce((result, fn) => result && fn(context, eventObject), true);
          if (allGuards) {
            const nextStateConfig = fsmConfig.states[target as TState['value']];
            let assigned = false;
            const allActions = ([] as any[])
              .concat(stateConfig.exit, actions, nextStateConfig.entry)
              .filter(a => a)
              .map<StateMachine.ActionObject<TContext, TEvent>>(action =>
                toActionObject(action, (machine as any)._options.actions)
              )
              .filter(action => {
                if (action.type === ASSIGN_ACTION) {
                  assigned = true;
                  let tmpContext = Object.assign({}, nextContext);

                  if (typeof action.assignment === 'function') {
                    tmpContext = action.assignment(nextContext, eventObject);
                  } else {
                    keys(action.assignment).forEach((key: keyof TContext) => {
                      tmpContext[key] =
                        typeof action.assignment[key] === 'function'
                          ? action.assignment[key](nextContext, eventObject)
                          : action.assignment[key];
                    });
                  }

                  nextContext = tmpContext;
                  return false;
                }
                return true;
              });

            return {
              value: target,
              context: nextContext,
              actions: allActions,
              changed: target !== value || allActions.length > 0 || assigned,
              matches: createMatcher(target),
            };
          }
        }
      }

      // No transitions match
      return createUnchangedState(value, context);
    },
  };
  return machine;
}

const executeStateActions = <
  TContext extends object,
  TEvent extends EventObject = any,
  TState extends Typestate<TContext> = {value: any; context: TContext}
>(
  state: StateMachine.State<TContext, TEvent, TState>,
  event: TEvent | InitEvent
) => state.actions.forEach(({exec}) => exec && exec(state.context, event));

export function interpret<
  TContext extends object,
  TEvent extends EventObject = EventObject,
  TState extends Typestate<TContext> = {value: any; context: TContext}
>(
  machine: StateMachine.Machine<TContext, TEvent, TState>
): StateMachine.Service<TContext, TEvent, TState> {
  let state = machine.initialState;
  let status = InterpreterStatus.NotStarted;
  const listeners = new Set<StateMachine.StateListener<typeof state>>();

  const service = {
    _machine: machine,
    send: (event: TEvent | TEvent['type']) => {
      if (status !== InterpreterStatus.Running) {
        return state;
      }
      state = machine.transition(state, event);
      executeStateActions(state, toEventObject(event));
      listeners.forEach(listener => listener(state));
      return state;
    },
    subscribe: (listener: StateMachine.StateListener<typeof state>) => {
      listeners.add(listener);
      listener(state);

      return {
        unsubscribe: () => listeners.delete(listener),
      };
    },
    start: (initialState?: TState['value'] | {context: TContext; value: TState['value']}) => {
      if (initialState) {
        const resolved =
          typeof initialState === 'object'
            ? initialState
            : {context: machine.config.context!, value: initialState};
        state = {
          value: resolved.value,
          actions: [],
          context: resolved.context,
          matches: createMatcher(resolved.value),
        };

        if (!IS_PRODUCTION) {
          if (!(state.value in machine.config.states)) {
            throw new Error(
              `Cannot start service in state '${state.value}'. The state is not found on machine${
                machine.config.id ? ` '${machine.config.id}'` : ''
              }.`
            );
          }
        }
      }
      status = InterpreterStatus.Running;
      executeStateActions(state, INIT_EVENT);
      return service;
    },
    stop: () => {
      status = InterpreterStatus.Stopped;
      listeners.clear();
      return service;
    },
    get state() {
      return state;
    },
    get status() {
      return status;
    },
  };

  return service;
}
