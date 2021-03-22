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
});
