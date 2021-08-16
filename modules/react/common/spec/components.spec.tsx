import React from 'react';
import {screen, render} from '@testing-library/react';
import {expectTypeOf} from 'expect-type';

import {
  composeHooks,
  createComponent,
  useForkRef,
  useLocalRef,
  ElementComponent,
  mergeProps,
  createHook,
  Model,
  BehaviorHook,
} from '@workday/canvas-kit-react/common';

describe('createComponent', () => {
  it('should assign an element-base component as an ElementComponent', () => {
    const component = createComponent('div')({Component: (props: {foo: 'bar'}) => null});
    expectTypeOf(component).toEqualTypeOf<ElementComponent<'div', {foo: 'bar'}>>();
  });

  it('should add sub-components to the signature', () => {
    const component = createComponent('div')({
      Component: (props: {foo: 'bar'}) => null,
      subComponents: {
        Foo: 'bar',
      },
    });
    expectTypeOf(component).toEqualTypeOf<ElementComponent<'div', {foo: 'bar'}> & {Foo: string}>();
  });

  it('should assign ref and Element correctly for element components', () => {
    createComponent('div')({
      Component: (props: {}, ref, Element) => {
        expectTypeOf(ref).toEqualTypeOf<React.Ref<HTMLDivElement>>();
        expectTypeOf(Element).toEqualTypeOf<'div'>();
        return null;
      },
    });
  });

  it('should assign ref and Element correctly for createComponent components', () => {
    const component = createComponent('article')({Component: (props: {}) => null});

    createComponent(component)({
      Component: (props: {}, ref, Element) => {
        expectTypeOf(ref).toEqualTypeOf<React.Ref<HTMLElement>>();
        expectTypeOf(Element).toEqualTypeOf<ElementComponent<'article', {}>>();
        return null;
      },
    });
  });

  it('should allow a valid ref when wrapping components', () => {
    const Component = createComponent('button')({Component: (props: {}) => null});
    const ref: React.RefObject<HTMLButtonElement> = {current: null};

    // No expectation, but the next line will fail if the ref signature isn't valid and it should be
    const temp = <Component ref={ref} />;
  });

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

describe('createHook', () => {
  const emptyModel = {state: {}, events: {}};
  it('should return a BehaviorHook type', () => {
    const useMyHook = createHook((model: typeof emptyModel) => {
      return {
        foo: 'bar',
      };
    });

    expectTypeOf(useMyHook).toEqualTypeOf<BehaviorHook<typeof emptyModel, {foo: string}>>();
  });

  it('should return props that are merged together correctly when no ref is given', () => {
    const props = createHook((model: any) => ({foo: 'bar'}))(emptyModel, {bar: 'baz'});

    expectTypeOf(props).toEqualTypeOf<{foo: string} & {bar: string}>();
    expect(props).toEqual({foo: 'bar', bar: 'baz'});
  });

  it('should return props that are merged together correctly when a ref is given', () => {
    const divElement = document.createElement('div');
    const props = createHook((model: any) => ({foo: 'bar'}))(
      emptyModel,
      {bar: 'baz'},
      {current: divElement}
    );

    expectTypeOf(props).toEqualTypeOf<
      {foo: string} & {bar: string} & {ref: React.Ref<HTMLDivElement>}
    >();
    expect(props).toEqual({foo: 'bar', bar: 'baz', ref: {current: divElement}});
  });

  it('should merge provided props over hook props', () => {
    const props = createHook((model: any) => ({foo: 'bar'}))(emptyModel, {foo: 'baz'});

    expect(props).toEqual({foo: 'baz'});
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
  let spy1, spy2;
  const myModel = {state: {first: 'first', second: 'second'}, events: {}};

  const hook1 = function<P extends {}>(model: typeof myModel, props: P) {
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

  const hook2 = function<P extends {}>(model: typeof myModel, props: P) {
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
  beforeEach(() => {
    spy1 = jest.fn();
    spy2 = jest.fn();
  });

  it('should merge properties from both hooks', () => {
    const props = composeHooks(hook1, hook2)(myModel, {}, null);
    expect(props).toHaveProperty('hook1', 'hook1');
    expect(props).toHaveProperty('hook2', 'hook2');
  });

  it('should overwrite props of the first hook with props from the second hook', () => {
    const props = composeHooks(hook1, hook2)(myModel, {}, null);
    expect(props).toHaveProperty('id', 'hook2');
  });

  it('should overwrite hook props with props passed in', () => {
    const props = composeHooks(hook1, hook2)(myModel, {id: 'foo'}, null);
    expect(props).toHaveProperty('id', 'foo');
  });

  it('should set props that are derived from the model on both hooks', () => {
    const props = composeHooks(hook1, hook2)(myModel, {}, null);
    expect(props).toHaveProperty('first', 'first');
    expect(props).toHaveProperty('second', 'second');
  });

  it('should call hook both callbacks', () => {
    const props = composeHooks(hook1, hook2)(myModel, {}, null) as {onClick: Function};
    props.onClick({event: 'foo'});
    expect(spy1).toHaveBeenCalled();
    expect(spy1).toHaveBeenCalledWith({event: 'foo'});
    expect(spy2).toHaveBeenCalled();
    expect(spy2).toHaveBeenCalledWith({event: 'foo'});
  });

  it('should call both hook callbacks and passed in callback', () => {
    const spy3 = jest.fn();
    const props = composeHooks(hook1, hook2)(myModel, {onClick: spy3}, null) as {onClick: Function};
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
    const model = {state: {foo: 'bar'}, events: {}};
    const hooks = [1, 2, 3, 4, 5, 6, 7, 8, 9].map(number => (myModel, props) =>
      mergeProps({id: number, foo: number, [`hook${number}`]: model.state.foo}, props)
    );

    const props = composeHooks.apply(null, hooks as any)(myModel, {foo: 'baz'}, null);
    expect(props).toHaveProperty('id', 9);
    expect(props).toHaveProperty('hook1', 'bar');
    expect(props).toHaveProperty('foo', 'baz');
  });
});
