import React from 'react';
import {renderHook, act} from '@testing-library/react-hooks';

import {createEventMap, useEventMap} from '../lib/utils/models';

describe('createEventMap', () => {
  it('should return the original config object', () => {
    expect(
      createEventMap()({
        guards: {},
        callbacks: {},
      })
    ).toEqual({
      guards: {},
      callbacks: {},
    });
  });
});

describe('useEventMap', () => {
  type Events = {
    foo(data: {}): void;
  };
  const eventMap = createEventMap<Events>()({
    guards: {
      shouldFoo: 'foo',
    },
    callbacks: {
      onFoo: 'foo',
    },
  });

  const useModel = (config = {}) => {
    const [foo, setFoo] = React.useState('previous');
    const state = {
      foo,
    };

    const events = useEventMap(eventMap, state, config, {
      foo(data: {value: string}) {
        setFoo(data.value);
      },
    });

    return {state, events};
  };

  it('should call a guard if defined', () => {
    const guard = jest.fn();
    const {result} = renderHook(() =>
      useModel({
        shouldFoo: guard,
      })
    );

    result.current.events.foo({value: 'next'});
    expect(guard).toBeCalledTimes(1);
  });

  it('should call a guard with data and state', () => {
    const guard = jest.fn();

    const {result} = renderHook(() =>
      useModel({
        shouldFoo: guard,
      })
    );

    result.current.events.foo({value: 'next'});
    expect(guard).toBeCalledWith({data: {value: 'next'}, state: {foo: 'previous'}});
  });

  it('should call a callback if defined', () => {
    const callback = jest.fn();

    const {result} = renderHook(() =>
      useModel({
        onFoo: callback,
      })
    );

    act(() => {
      result.current.events.foo({value: 'next'});
      expect(callback).toBeCalledTimes(1);
    });
  });

  it('should call a callback with data and the previous state', () => {
    const callback = jest.fn();
    const {result} = renderHook(() =>
      useModel({
        onFoo: callback,
      })
    );

    // wrap in an `act` since the callback gets called _during_ state setting phase. Otherwise,
    // `prevState` will have next state
    act(() => {
      result.current.events.foo({value: 'next'});
      expect(callback).toBeCalledWith({data: {value: 'next'}, prevState: {foo: 'previous'}});
    });
  });

  it('should call a callback if a guard returns true', () => {
    const callback = jest.fn();
    const {result} = renderHook(() =>
      useModel({
        shouldFoo: () => true,
        onFoo: callback,
      })
    );

    act(() => {
      result.current.events.foo({value: 'next'});
      expect(callback).toBeCalledTimes(1);
    });
  });

  it('should not call a callback if a guard returns false', () => {
    const callback = jest.fn();
    const {result} = renderHook(() =>
      useModel({
        shouldFoo: () => false,
        onFoo: callback,
      })
    );

    act(() => {
      result.current.events.foo({value: 'next'});
      expect(callback).not.toBeCalled();
    });
  });

  describe('useSubscribe', () => {
    it('should call a listener when an event is fired', () => {
      const listener = jest.fn();
      const {result} = renderHook(() => {
        const model = useModel();

        model.events.useSubscription('foo', listener);
        return model;
      });

      act(() => {
        result.current.events.foo({value: 'next'});
        expect(listener).toBeCalledTimes(1);
        expect(listener).toBeCalledWith({data: {value: 'next'}, prevState: {foo: 'previous'}});
      });
    });

    it('should call a listener when a guard returns true', () => {
      const listener = jest.fn();
      const {result} = renderHook(() => {
        const model = useModel({
          shouldFoo: () => true,
        });

        model.events.useSubscription('foo', listener);
        return model;
      });

      act(() => {
        result.current.events.foo({value: 'next'});
        expect(listener).toBeCalledTimes(1);
        expect(listener).toBeCalledWith({data: {value: 'next'}, prevState: {foo: 'previous'}});
      });
    });

    it('should not call a listener when a guard returns false', () => {
      const listener = jest.fn();
      const {result} = renderHook(() => {
        const model = useModel({
          shouldFoo: () => false,
        });

        model.events.useSubscription('foo', listener);
        return model;
      });

      act(() => {
        result.current.events.foo({value: 'next'});
        expect(listener).not.toBeCalled();
      });
    });

    it('should call listeners at each level with the correct state', () => {
      const innerListener = jest.fn();
      const outerListener = jest.fn();

      const useOuterModel = (config = {}) => {
        const [outer, setOuter] = React.useState('previousOuter');
        const innerModel = useModel();

        const state = {
          ...innerModel.state,
          outer,
        };

        const events = useEventMap(eventMap, state, config, {
          ...innerModel.events,
        });

        innerModel.events.useSubscription('foo', innerListener);
        events.useSubscription('foo', outerListener);

        return {state, events};
      };

      const {result} = renderHook(() => useOuterModel());

      act(() => {
        result.current.events.foo({value: 'next'});
        expect(innerListener).toBeCalledWith({
          data: {value: 'next'},
          prevState: {foo: 'previous'},
        });
        expect(outerListener).toBeCalledWith({
          data: {value: 'next'},
          prevState: {foo: 'previous', outer: 'previousOuter'},
        });
      });
    });
  });
});
