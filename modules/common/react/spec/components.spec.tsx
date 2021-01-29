import React from 'react';
import {screen, render, fireEvent, act} from '@testing-library/react';

import {composeHooks, createComponent, useForkRef, useLocalRef} from '../lib/utils/components';
import {mergeProps} from '../lib/utils';

describe('createEventMap', () => {
  it('create assign a displayName', () => {
    const Component = createComponent('div')({
      displayName: 'Test',
      Component: () => null,
    });

    expect(Component).toHaveProperty('displayName', 'Test');
  });

  it('should assign sub components', () => {
    const SubComponent = () => null;
    const Component = createComponent('div')({
      Component: () => null,
      subComponents: {
        SubComponent,
      },
    });

    expect(Component).toHaveProperty('SubComponent', SubComponent);
  });

  it('should forward the ref', () => {
    const ref = {current: null};

    const Component = createComponent('div')({
      displayName: 'Test',
      Component: (props, ref) => <div id="test" ref={ref} />,
    });

    render(<Component ref={ref} />);

    expect(ref.current).toHaveAttribute('id', 'test');
  });

  it('should render whatever element is passed through the "as" prop', () => {
    const Component = createComponent('div')({
      displayName: 'Test',
      Component: (props, ref, Element) => <Element data-testid="test" />,
    });

    render(<Component as="button" />);

    expect(screen.getByTestId('test')).toHaveProperty('tagName', 'BUTTON');
  });
});

describe('useForkRef', () => {
  it('should set the current value of the second ref if the first ref is undefined', () => {
    const ref1 = undefined;
    const ref2 = {current: null};

    const ref = useForkRef(ref1, ref2);

    ref('bar');

    expect(ref2).toHaveProperty('current', 'bar');
  });

  it('should set the current value of the first ref if the second ref is undefined', () => {
    const ref1 = {current: null};
    const ref2 = undefined;

    const ref = useForkRef(ref1, ref2);

    ref('bar');

    expect(ref1).toHaveProperty('current', 'bar');
  });

  it('should set the current value of both refs if both refs are RefObjects', () => {
    const ref1 = {current: null};
    const ref2 = {current: null};

    const ref = useForkRef(ref1, ref2);

    ref('bar');

    expect(ref1).toHaveProperty('current', 'bar');
    expect(ref2).toHaveProperty('current', 'bar');
  });

  it('should call the ref function of the second ref if the first ref is undefined', () => {
    const ref1 = undefined;
    const ref2 = jest.fn();

    const ref = useForkRef(ref1, ref2);

    ref('bar');

    expect(ref2).toHaveBeenCalledWith('bar');
  });

  it('should call the ref function of the first ref if the second ref is undefined', () => {
    const ref1 = jest.fn();
    const ref2 = undefined;

    const ref = useForkRef(ref1, ref2);

    ref('bar');

    expect(ref1).toHaveBeenCalledWith('bar');
  });

  it('should call the ref function of both refs if both refs are ref functions', () => {
    const ref1 = jest.fn();
    const ref2 = jest.fn();

    const ref = useForkRef(ref1, ref2);

    ref('bar');

    expect(ref1).toHaveBeenCalledWith('bar');
    expect(ref2).toHaveBeenCalledWith('bar');
  });
});

describe('useLocalRef', () => {
  it('should return a localRef and an elementRef', () => {
    let localRefTest, elementRefTest;
    const CustomComponent = React.forwardRef<HTMLDivElement>((_, ref) => {
      const {localRef, elementRef} = useLocalRef(ref);

      localRefTest = localRef;
      elementRefTest = elementRef;

      return <div ref={ref} />;
    });

    render(<CustomComponent />);

    expect(localRefTest).toHaveProperty('current');
    expect(elementRefTest).toEqual(expect.any(Function));
  });
});

describe('composeHooks', () => {
  let spy1, spy2, hook1, hook2;
  const model = {state: {first: 'first', second: 'second'}, events: {}};
  beforeEach(() => {
    spy1 = jest.fn();
    spy2 = jest.fn();

    hook1 = function(model, props) {
      return mergeProps(
        {
          id: 'hook1',
          hook1: 'hook1',
          first: model.state.first,
          onClick: spy1,
        },
        props
      );
    };

    hook2 = function(model, props) {
      return mergeProps(
        {
          id: 'hook2',
          hook2: 'hook2',
          second: model.state.second,
          onClick: spy2,
        },
        props
      );
    };
  });

  it('should merge properties from both hooks', () => {
    const props = composeHooks(hook1, hook2)(model, {});
    expect(props).toHaveProperty('hook1', 'hook1');
    expect(props).toHaveProperty('hook2', 'hook2');
  });

  it('should overwrite props of the first hook with props from the second hook', () => {
    const props = composeHooks(hook1, hook2)(model, {});
    expect(props).toHaveProperty('id', 'hook2');
  });

  it('should overwrite hook props with props passed in', () => {
    const props = composeHooks(hook1, hook2)(model, {id: 'foo'});
    expect(props).toHaveProperty('id', 'foo');
  });

  it('should set props that are derived from the model on both hooks', () => {
    const props = composeHooks(hook1, hook2)(model, {});
    expect(props).toHaveProperty('first', 'first');
    expect(props).toHaveProperty('second', 'second');
  });

  it('should call hook both callbacks', () => {
    const props = composeHooks(hook1, hook2)(model, {}) as {onClick: Function};
    props.onClick({event: 'foo'});
    expect(spy1).toHaveBeenCalled();
    expect(spy1).toHaveBeenCalledWith({event: 'foo'});
    expect(spy2).toHaveBeenCalled();
    expect(spy2).toHaveBeenCalledWith({event: 'foo'});
  });

  it('should call hook both callbacks and passed in callback', () => {
    const spy3 = jest.fn();
    const props = composeHooks(hook1, hook2)(model, {onClick: spy3}) as {onClick: Function};
    props.onClick({event: 'foo'});
    expect(spy1).toHaveBeenCalled();
    expect(spy1).toHaveBeenCalledWith({event: 'foo'});
    expect(spy2).toHaveBeenCalled();
    expect(spy2).toHaveBeenCalledWith({event: 'foo'});
    expect(spy3).toHaveBeenCalled();
    expect(spy3).toHaveBeenCalledWith({event: 'foo'});
  });

  it('should handle any number of hooks with the correct merging', () => {
    // This test is covering all previous tests, but with more hooks.
    // This test should only fail if the implementation doesn't handle more than 2 hooks
    const model = {state: {foo: 'bar'}};
    const hooks = [1, 2, 3, 4, 5, 6, 7, 8, 9].map(number => (model, props) =>
      mergeProps({id: number, foo: number, [`hook${number}`]: model.state.foo}, props)
    );

    const props = composeHooks.apply(null, hooks)(model, {foo: 'baz'});
    expect(props).toHaveProperty('id', 9);
    expect(props).toHaveProperty('hook1', 'bar');
    expect(props).toHaveProperty('foo', 'baz');
  });
});
