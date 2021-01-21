import React from 'react';
import {screen, render, fireEvent, act} from '@testing-library/react';

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
    const [foo, setFoo] = React.useState('bar');
    const state = {
      foo,
    };

    const events = useEventMap(eventMap, state, config, {
      foo(data) {
        setFoo('baz');
      },
    });

    return {state, events};
  };

  const TestComponent = config => {
    const model = useModel(config);

    return (
      <div data-testid="test" onClick={() => model.events.foo({value: 'baz'})}>
        {model.state.foo}
      </div>
    );
  };

  it('should call a guard if defined', () => {
    const guard = jest.fn();

    render(<TestComponent shouldFoo={guard} />);
    fireEvent.click(screen.getByTestId('test'));

    expect(guard).toBeCalledTimes(1);
  });

  it('should call a guard with data and state', () => {
    const guard = jest.fn();

    render(<TestComponent shouldFoo={guard} />);
    fireEvent.click(screen.getByTestId('test'));

    expect(guard).toBeCalledWith({data: {value: 'baz'}, state: {foo: 'bar'}});
  });

  it('should call a callback if defined', () => {
    const callback = jest.fn();

    render(<TestComponent onFoo={callback} />);
    fireEvent.click(screen.getByTestId('test'));

    expect(callback).toBeCalledTimes(1);
  });

  it('should call a callback with data and state', () => {
    const callback = jest.fn();

    render(<TestComponent onFoo={callback} />);
    fireEvent.click(screen.getByTestId('test'));

    expect(callback).toBeCalledWith({data: {value: 'baz'}, state: {foo: 'bar'}});
  });

  it('should call a callback if a guard returns true', () => {
    const callback = jest.fn();

    render(<TestComponent onFoo={callback} shouldFoo={() => true} />);
    fireEvent.click(screen.getByTestId('test'));

    expect(callback).toBeCalledTimes(1);
  });

  it('should not call a callback if a guard returns false', () => {
    const callback = jest.fn();

    render(<TestComponent onFoo={callback} shouldFoo={() => false} />);
    fireEvent.click(screen.getByTestId('test'));

    expect(callback).not.toBeCalled();
  });
});
