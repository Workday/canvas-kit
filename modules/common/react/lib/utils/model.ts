import React from 'react';

export type Model<State, Events> = {
  state: State;
  events: Events;
};

export type EventMap<
  TEvents extends Record<string, (data: object) => void>,
  TGuardMap extends Record<string, keyof TEvents>,
  TActionMap extends Record<string, keyof TEvents>
> = {
  guards: TGuardMap;
  actions: TActionMap;
};

export type ToGuardConfig<
  TState extends Record<string, any>,
  TEvents extends Record<string, (data: object) => void>,
  TGuardMap extends Record<string, keyof TEvents>
> = {
  [K in keyof TGuardMap]: (event: {
    data: Parameters<TEvents[TGuardMap[K]]>[0];
    state: TState;
  }) => boolean;
};

export type ToActionConfig<
  TState extends Record<string, any>,
  TEvents extends Record<string, (data: object) => void>,
  TGuardMap extends Record<string, keyof TEvents>
> = {
  [K in keyof TGuardMap]: (event: {
    data: Parameters<TEvents[TGuardMap[K]]>[0];
    state: TState;
  }) => void;
};

export type ToModelConfig<
  TState extends Record<string, any>,
  TEvents extends Record<string, (data: object) => void>,
  TEventMap extends EventMap<TEvents, any, any>
> = ToGuardConfig<TState, TEvents, TEventMap['guards']> &
  ToActionConfig<TState, TEvents, TEventMap['actions']>;

export const createEventMap = <TEvents extends Record<string, (data: object) => void>>() => <
  TGuardMap extends Record<string, keyof TEvents>,
  TActionMap extends Record<string, keyof TEvents>
>(
  config: EventMap<TEvents, TGuardMap, TActionMap>
) => {
  return config;
};

// small wrapper to get `keyof T` instead of `string | number | symbol`
const keys = <T extends object>(input: T) => Object.keys(input) as (keyof T)[];

export const useEventMap = <
  TEvents extends Record<string, (data: object) => void>,
  TState extends Record<string, any>,
  TGuardMap extends Record<string, keyof TEvents>,
  TActionMap extends Record<string, keyof TEvents>,
  TConfig extends Partial<ToModelConfig<TState, TEvents, EventMap<TEvents, TGuardMap, TActionMap>>>
>(
  eventMap: EventMap<TEvents, TGuardMap, TActionMap>,
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
          configRef.current[guardFn] &&
          //@ts-ignore Typescript doesn't like that the call signatures are different
          !configRef.current[guardFn]({data, state: stateRef.current})
        ) {
          return;
        }

        // call the event (setter)
        eventsRef.current[key](data);

        // Invoke the configured action if there is one
        const actionFn = keys(eventMapRef.current.actions || {}).find(k => {
          return (eventMapRef.current.actions || {})[k] === key;
        });

        if (actionFn && configRef.current[actionFn]) {
          //@ts-ignore Typescript doesn't like that the call signatures are different
          configRef.current[actionFn]({data, state: stateRef.current});
        }
      }) as TEvents[keyof TEvents]; // this cast keeps Typescript happy
      return result;
    }, {} as TEvents);
  }, []);
};
