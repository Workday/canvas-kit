import React from 'react';
import {screen, render} from '@testing-library/react';
import {expectTypeOf} from 'expect-type';
import {renderHook} from '@testing-library/react-hooks';

import {
  composeHooks,
  createComponent,
  useForkRef,
  useLocalRef,
  ElementComponent,
  mergeProps,
  createHook,
  BehaviorHook,
  createContainer,
  createSubcomponent,
  createModelHook,
  useModelContext,
  createElemPropsHook,
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
      Component: (props, ref, Element) => <Element data-testid="test" {...props} />,
    });

    render(<Component as="button" />);

    expect(screen.getByTestId('test')).toHaveProperty('tagName', 'BUTTON');
  });

  it('should provide an `as` method that changes the default element', () => {
    const Component = createComponent('div')({
      displayName: 'Test',
      Component: (props, ref, Element) => <Element data-testid="test" {...props} />,
    });

    const ButtonComponent = Component.as('button');

    render(<ButtonComponent />);

    expect(screen.getByTestId('test')).toHaveProperty('tagName', 'BUTTON');
  });

  it('should provide a stable reference `as` method to aid in component render functions without needing to use other hooks', () => {
    const Component = createComponent('div')({
      displayName: 'Test',
      Component: (props, ref, Element) => <Element data-testid="test" {...props} />,
    });

    expect(Component.as('button')).toBe(Component.as('button'));
  });
});

describe('createContainer', () => {
  const modelHook = createModelHook({})(() => ({state: {}, events: {}}));

  it('should provide an `as` method that changes the default element', () => {
    const Component = createContainer('div')({
      displayName: 'Test',
      modelHook,
    })((props, Element) => <Element data-testid="test" {...props} />);

    const ButtonComponent = Component.as('button');

    render(<ButtonComponent />);

    expect(screen.getByTestId('test')).toHaveProperty('tagName', 'BUTTON');
  });

  it('should provide a stable reference `as` method to aid in component render functions without needing to use other hooks', () => {
    const Component = createContainer('div')({
      displayName: 'Test',
      modelHook,
    })((props, Element) => <Element data-testid="test" {...props} />);

    expect(Component.as('button')).toBe(Component.as('button'));
  });

  it('should apply the correct model when multiple model components are used', () => {
    const modelHook1 = createModelHook({})(() => ({state: {foo1: 'bar'}, events: {}}));
    const modelHook2 = createModelHook({})(() => ({state: {foo2: 'bar'}, events: {}}));

    const Component1 = createContainer('div')({
      displayName: 'Test1',
      modelHook: modelHook1,
    })((props, Element, model) => {
      expect(model).toHaveProperty('state.foo1', 'bar');
      return <Element data-testid="test1" {...props} />;
    });

    const Component2 = createContainer('div')({
      displayName: 'Test2',
      modelHook: modelHook2,
    })((props, Element, model) => {
      expect(model).toHaveProperty('state.foo2', 'bar');
      return <Element data-testid="test2" {...props} />;
    });

    const ComposedComponent = () => {
      const model = modelHook2();

      return <Component1 as={Component2} model={model} />;
    };

    render(<ComposedComponent />);
  });

  it('should accept an `ElementComponent`', () => {
    const Component = createComponent('div')({
      Component(props: {requiredProp: number}, ref, Element) {
        return <Element />;
      },
    });

    // There should be no TS error
    const Subcomponent = createContainer(Component);
  });
});

describe('createSubcomponent', () => {
  const modelHook = createModelHook({})(() => ({state: {}, events: {}}));

  it('should provide an `as` method that changes the default element', () => {
    const Component = createSubcomponent('div')({
      displayName: 'Test',
      modelHook,
    })((props, Element) => <Element data-testid="test" {...props} />);

    const ButtonComponent = Component.as('button');

    render(<ButtonComponent />);

    expect(screen.getByTestId('test')).toHaveProperty('tagName', 'BUTTON');
  });

  it('should provide a stable reference `as` method to aid in component render functions without needing to use other hooks', () => {
    const Component = createSubcomponent('div')({
      displayName: 'Test',
      modelHook,
    })((props, Element) => <Element data-testid="test" {...props} />);

    expect(Component.as('button')).toBe(Component.as('button'));
  });

  it('should accept an `ElementComponent`', () => {
    const Component = createComponent('div')({
      Component(props: {requiredProp: number}, ref, Element) {
        return <Element />;
      },
    });

    // There should be no TS error
    const Subcomponent = createSubcomponent(Component);
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
    const hook = createHook((model: any) => ({foo: 'bar'}));
    const props = hook(emptyModel, {bar: 'baz'});

    expectTypeOf(props).toEqualTypeOf<{foo: string} & {bar: string}>();
    expect(props).toEqual({foo: 'bar', bar: 'baz'});
  });

  it('should return props that are merged together correctly when a ref is given', () => {
    const divElement = document.createElement('div');
    const hook = createHook((model: any, ref) => ({foo: 'bar', ref}));

    const props = hook(emptyModel, {bar: 'baz'}, {current: divElement});

    expectTypeOf(props).toEqualTypeOf<
      {foo: string} & {bar: string} & {ref: React.Ref<unknown> | undefined}
    >();
    expect(props).toEqual({foo: 'bar', bar: 'baz', ref: {current: divElement}});
  });

  it('should return the ref if the hook provides a ref and the component does not', () => {
    const ref = {current: 'foo'};
    const hook = createHook((model: any) => ({ref}));

    const props = hook(emptyModel, {}, undefined);

    expect(props).toHaveProperty('ref', ref);
  });

  it('should return the ref if the hook does not provide a ref and the component does', () => {
    const ref = {current: 'foo'};
    const hook = createHook((model: any) => ({}));

    const props = hook(emptyModel, {}, ref);

    expect(props).toHaveProperty('ref', ref);
  });

  it('should return the ref elemProps contains a ref and the hook and component do not', () => {
    const ref = {current: 'foo'};
    const hook = createHook((model: any) => ({}));

    const props = hook(emptyModel, {ref}, null);

    expect(props).toHaveProperty('ref', ref);
  });

  it('should not return the a ref prop if not ref was defined', () => {
    const hook = createHook((model: any) => ({}));

    const props = hook(emptyModel, {}, null);

    expect(props).not.toHaveProperty('ref');
  });

  it('should merge provided props over hook props', () => {
    const hook = createHook((model: any) => ({foo: 'bar'}));
    const props = hook(emptyModel, {foo: 'baz'});

    expect(props).toEqual({foo: 'baz'});
  });
});

describe('useForkRef', () => {
  it('should set the current value of the second ref if the first ref is undefined', () => {
    const ref1 = undefined;
    const ref2 = {current: 'foo'};

    const ref = useForkRef(ref1, ref2);

    ref('bar');

    expect(ref2).toHaveProperty('current', 'bar');
  });

  it('should set the current value of the first ref if the second ref is undefined', () => {
    const ref1 = {current: 'foo'};
    const ref2 = undefined;

    const ref = useForkRef(ref1, ref2);

    ref('bar');

    expect(ref1).toHaveProperty('current', 'bar');
  });

  it('should set the current value of both refs if both refs are RefObjects', () => {
    const ref1 = {current: 'ref1'};
    const ref2 = {current: 'ref2'};

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

  const hook1 = createHook((model: typeof myModel) => {
    return {
      id: 'hook1',
      hook1: 'hook1',
      first: model.state.first,
      onClick: spy1,
    };
  });

  const hook2 = createHook((model: typeof myModel) => {
    return {
      id: 'hook2',
      hook2: 'hook2',
      second: model.state.second,
      onClick: spy2,
    };
  });

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
    const props = composeHooks(hook1, hook2)(myModel, {}, null) as any as {onClick: Function};
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
    const hooks = [1, 2, 3, 4, 5, 6, 7, 8, 9].map(
      number => (myModel, props) =>
        mergeProps({id: number, foo: number, [`hook${number}`]: model.state.foo}, props)
    );

    const props = (composeHooks as any).apply(null, hooks as any)(myModel, {foo: 'baz'}, null);
    expect(props).toHaveProperty('id', 9);
    expect(props).toHaveProperty('hook1', 'bar');
    expect(props).toHaveProperty('foo', 'baz');
  });

  it('should compose hooks where first hook has a ref', () => {
    const ref = {current: 'foo'};
    const hook1 = createHook(() => {
      return {ref};
    });
    const hook2 = createHook(() => {
      return {};
    });

    const props = composeHooks(hook1, hook2)(myModel, {});
    expect(props).toHaveProperty('ref', ref);
  });

  it('should compose hooks where second hook has a ref', () => {
    const ref = {current: 'foo'};
    const hook1 = createHook(() => {
      return {};
    });
    const hook2 = createHook(() => {
      return {ref};
    });

    const props = composeHooks(hook1, hook2)(myModel, {});
    expect(props).toHaveProperty('ref', ref);
  });

  it('should compose hooks where second hook has a ref', () => {
    const ref = {current: 'foo'};
    const hook1 = createHook(() => {
      return {};
    });
    const hook2 = createHook(() => {
      return {};
    });

    const props = composeHooks(hook1, hook2)(myModel, {}, ref);
    expect(props).toHaveProperty('ref', ref);
  });

  it('should type the ref of a class component as `LegacyRef`', () => {
    class Component1 extends React.Component {}
    const Component2 = createComponent(Component1)({
      Component(props, ref, Element) {
        // The `ref` of a class component is LegacyRef
        expectTypeOf(ref).toEqualTypeOf<React.LegacyRef<Component1>>();
        return <div />;
      },
    });
  });

  describe('composeHooks types', () => {
    const hook1 = createHook(() => ({hook1: ''}));
    const hook2 = createHook(() => ({hook2: ''}));
    const hook3 = createHook(() => ({hook3: ''}));
    const hook4 = createHook(() => ({hook4: ''}));
    const hook5 = createHook(() => ({hook5: ''}));
    const hook6 = createHook(() => ({hook6: ''}));

    it('should return the correct prop interface for 2 hooks', () => {
      const props = composeHooks(hook1, hook2)(myModel, {});

      type Expected = {hook1: string; hook2: string};

      expectTypeOf(props).toEqualTypeOf<Expected>();
    });

    it('should return the correct prop interface for 2 hooks with incoming props', () => {
      const props = composeHooks(hook1, hook2)(myModel, {foo: ''});

      type Expected = {hook1: string; hook2: string; foo: string};

      expectTypeOf(props).toEqualTypeOf<Expected>();
    });

    it('should return the correct prop interface for 2 hooks', () => {
      const props = composeHooks(hook1, hook2, hook3)(myModel, {});

      type Expected = {hook1: string; hook2: string; hook3: string};

      expectTypeOf(props).toEqualTypeOf<Expected>();
    });

    it('should return the correct prop interface for 2 hooks with incoming props', () => {
      const props = composeHooks(hook1, hook2, hook3)(myModel, {foo: ''});

      type Expected = {hook1: string; hook2: string; hook3: string; foo: string};

      expectTypeOf(props).toEqualTypeOf<Expected>();
    });

    it('should return the correct prop interface for 2 hooks', () => {
      const props = composeHooks(hook1, hook2, hook3, hook4)(myModel, {});

      type Expected = {hook1: string; hook2: string; hook3: string; hook4: string};

      expectTypeOf(props).toEqualTypeOf<Expected>();
    });

    it('should return the correct prop interface for 2 hooks with incoming props', () => {
      const props = composeHooks(hook1, hook2, hook3, hook4)(myModel, {foo: ''});

      type Expected = {hook1: string; hook2: string; hook3: string; hook4: string; foo: string};

      expectTypeOf(props).toEqualTypeOf<Expected>();
    });

    it('should return the correct prop interface for 2 hooks', () => {
      const props = composeHooks(hook1, hook2, hook3, hook4, hook5)(myModel, {});

      type Expected = {hook1: string; hook2: string; hook3: string; hook4: string; hook5: string};

      expectTypeOf(props).toEqualTypeOf<Expected>();
    });

    it('should return the correct prop interface for 2 hooks with incoming props', () => {
      const props = composeHooks(hook1, hook2, hook3, hook4, hook5)(myModel, {foo: ''});

      type Expected = {
        hook1: string;
        hook2: string;
        hook3: string;
        hook4: string;
        hook5: string;
        foo: string;
      };

      expectTypeOf(props).toEqualTypeOf<Expected>();
    });

    it('should return the correct prop interface for 2 hooks', () => {
      const props = composeHooks(hook1, hook2, hook3, hook4, hook5, hook6)(myModel, {});

      type Expected = {
        hook1: string;
        hook2: string;
        hook3: string;
        hook4: string;
        hook5: string;
        hook6: string;
      };

      expectTypeOf(props).toEqualTypeOf<Expected>();
    });

    it('should return the correct prop interface for 2 hooks with incoming props', () => {
      const props = composeHooks(hook1, hook2, hook3, hook4, hook5, hook6)(myModel, {foo: ''});

      type Expected = {
        hook1: string;
        hook2: string;
        hook3: string;
        hook4: string;
        hook5: string;
        hook6: string;
        foo: string;
      };

      expectTypeOf(props).toEqualTypeOf<Expected>();
    });

    it('should compose hooks with conflicting types with null values, removing null values', () => {
      const useModel = config => ({state: {}, events: {}});
      const useHook1 = createElemPropsHook(useModel)(model => ({foo: 'bar', item: null}));
      const useHook2 = createElemPropsHook(useModel)(model => ({bar: 'baz', item: 'test'}));

      const useHookComposed = composeHooks(useHook1, useHook2);
      const fakeModel = {state: {}, events: {}};

      const elemProps = useHookComposed(useModel({}), {});

      expect(elemProps).toEqual({foo: 'bar', bar: 'baz'});

      expectTypeOf(elemProps).toHaveProperty('foo');
      expectTypeOf(elemProps.foo).toBeString();
      expectTypeOf(elemProps).toHaveProperty('bar');
      expectTypeOf(elemProps.bar).toBeString();
      expectTypeOf(elemProps).toEqualTypeOf<{foo: 'bar'; bar: 'baz'}>();
    });
  });
});

describe('useModelContext', () => {
  const contextValue = {value: 'context'};
  const context = React.createContext(contextValue);
  const createModel = (matchesContext = false) => {
    return {
      value: 'model',
    };
  };
  const createModelWithMatchingContext = () => {
    return {
      value: 'model',
      __UNSTABLE_modelContext: context,
    };
  };

  it('should return the context if no model is provided', () => {
    const {result} = renderHook(() => useModelContext(context));

    expect(result.current).toEqual({value: 'context'});
  });

  describe('when a non-matching context model is provided', () => {
    const model = createModel();

    it('should return the model if no `as` is provided', () => {
      const {result} = renderHook(() => useModelContext(context, model));

      expect(result.current).toEqual(model);
    });

    it('should return the model if the `as` is a string', () => {
      const {result} = renderHook(() => useModelContext(context, model, 'div'));

      expect(result.current).toEqual(model);
    });

    it('should return the model if the `as` is a regular component', () => {
      const Component = () => null;
      const {result} = renderHook(() => useModelContext(context, model, Component));

      expect(result.current).toEqual(model);
    });

    it('should return the context if the `as` is a model component', () => {
      const Component = () => null;
      Component.__hasModel = true;
      const {result} = renderHook(() => useModelContext(context, model, Component));

      expect(result.current).toEqual(contextValue);
    });
  });

  describe('when a context matching model is provided ', () => {
    const model = createModelWithMatchingContext();

    it('should return the model if no `as` is provided', () => {
      const {result} = renderHook(() => useModelContext(context, model));

      expect(result.current).toEqual(model);
    });

    it('should return the model if the `as` is a string', () => {
      const {result} = renderHook(() => useModelContext(context, model, 'div'));

      expect(result.current).toEqual(model);
    });

    it('should return the model if the `as` is a regular component', () => {
      const Component = () => null;
      const {result} = renderHook(() => useModelContext(context, model, Component));

      expect(result.current).toEqual(model);
    });

    it('should return the model if the `as` is a model component', () => {
      const Component = () => null;
      Component.__hasModel = true;
      const {result} = renderHook(() => useModelContext(context, model, Component));

      expect(result.current).toEqual(model);
    });
  });
});
