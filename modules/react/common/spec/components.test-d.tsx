import React from 'react';
import styled from '@emotion/styled';
import {expectTypeOf} from 'expect-type';

import {
  createComponent,
  createContainer,
  createSubcomponent,
  ElementComponent,
  ElementComponentM,
  ExtractProps,
  PropsWithModel,
} from '../lib/utils/components';
import {createModelHook} from '../lib/utils/models';

// expect-type is a very cool library, but failures can be extremely difficult to understand. To
// combat the non-helpful failure messages, try to assign a value or type to a variable instead of
// inlining. This way the variable can be moused over for the tooltip to help determine what went
// wrong. When a test failed, observe the expected value vs the actual type or the Expected type vs
// actual type.

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
    return <Component ref={ref} />;
  });

  it('should extract the correct ref of a styled component', () => {
    const StyledComponent = styled('button')({});
    const Component = createComponent(StyledComponent)({
      Component(props, ref, Element) {
        expectTypeOf(ref).toEqualTypeOf<React.Ref<HTMLButtonElement>>();

        return null;
      },
    });
  });
});

describe('ExtractProps', () => {
  interface Props {
    foo: string;
  }
  const ElementComponent = createComponent('div')({
    Component: (props: Props) => null,
  });

  it('should return the props and HTMLDivElement interface when no element is provided on an `ElementComponent`', () => {
    type Expected = ExtractProps<typeof ElementComponent>;

    expectTypeOf<Expected>().toEqualTypeOf<Props & React.HTMLAttributes<HTMLDivElement>>();
  });

  it('should return the props and HTMLButtonElement when a `button` element is provided on an `ElementComponent`', () => {
    type Expected = ExtractProps<typeof ElementComponent, 'button'>;

    expectTypeOf<Expected>().toEqualTypeOf<Props & React.ButtonHTMLAttributes<HTMLButtonElement>>();
  });

  it('should return only the props when `never` is provided on an `ElementComponent', () => {
    type Expected = ExtractProps<typeof ElementComponent, never>;

    expectTypeOf<Expected>().toEqualTypeOf<Props>();
  });

  it('should return only props on a `Component`', () => {
    const Component = createComponent()({Component: (props: Props) => null});
    type Expected = ExtractProps<typeof Component>;

    expectTypeOf<Expected>().toEqualTypeOf<Props>();
  });

  it('should return props of a class component', () => {
    class Component extends React.Component<Props> {}
    type Expected = ExtractProps<typeof Component>;

    expectTypeOf<Expected>().toEqualTypeOf<Props>();
  });

  it('should return props of a functional component', () => {
    const Component = (props: Props) => null;
    type Expected = ExtractProps<typeof Component>;

    expectTypeOf<Expected>().toEqualTypeOf<Props>();
  });

  describe('nested ElementComponent', () => {
    interface Props2 {
      bar: string;
    }

    it('should return the combined interface of 2 components and HTML attributes when no element override is provided to ExtractProps', () => {
      const Component1 = createComponent('button')({Component: (props: Props) => null});
      const Component2 = createComponent(Component1)({Component: (props: Props2) => null});
      type Expected = ExtractProps<typeof Component2>;

      expectTypeOf<Expected>().toEqualTypeOf<
        Props & Props2 & React.ButtonHTMLAttributes<HTMLButtonElement>
      >();
    });

    it('should return the combined interface of 3 components and HTML attributes when no element override is provided to ExtractProps', () => {
      type Props3 = {baz: string};
      const Component1 = createComponent('button')({Component: (props: Props) => null});
      const Component2 = createComponent(Component1)({Component: (props: Props2) => null});
      const Component3 = createComponent(Component2)({Component: (props: Props3) => null});
      type Expected = ExtractProps<typeof Component3>;

      expectTypeOf<Expected>().toEqualTypeOf<
        Props & Props2 & Props3 & React.ButtonHTMLAttributes<HTMLButtonElement>
      >();
    });

    it('should return only the outer component props when `never` is supplied to ExtractProps', () => {
      const Component1 = createComponent('button')({Component: (props: Props) => null});
      const Component2 = createComponent(Component1)({Component: (props: Props2) => null});
      const Component3 = createComponent(Component2)({Component: (props: {test: number}) => null});
      type Expected = ExtractProps<typeof Component2, never>;

      expectTypeOf<Expected>().toEqualTypeOf<Props2>();
    });

    it('should return the combined interface of all components when an ElementComponent override is provided to ExtractProps', () => {
      const Component1 = createComponent('aside')({Component: (props: Props) => null});
      const Component2 = createComponent('button')({Component: (props: Props2) => null});
      type Expected = ExtractProps<typeof Component1, typeof Component2>;

      expectTypeOf<Expected>().toEqualTypeOf<
        Props & Props2 & React.ButtonHTMLAttributes<HTMLButtonElement>
      >();
    });

    it('should return the combined interface of all components when a React.Component override is provided to ExtractProps', () => {
      const Component1 = createComponent('aside')({Component: (props: Props) => null});
      const Component2 = (props: Props2) => null;
      type Expected = ExtractProps<typeof Component1, typeof Component2>;

      expectTypeOf<Expected>().toEqualTypeOf<Props & Props2>();

      type Foo = ExtractProps<ElementComponent<'div', Props>>;
    });
  });

  describe('with a model', () => {
    type Model = {
      state: {
        foo: string;
      };
      events: {};
    };
    const ElementComponent = createSubcomponent('div')({
      modelHook: createModelHook({})((): Model => ({state: {foo: 'bar'}, events: {}})),
    })<Props>(props => null);

    it('should return the props and HTMLDivElement interface when no element is provided on an `ElementComponentM`', () => {
      type Expected = ExtractProps<typeof ElementComponent>;

      expectTypeOf<Expected>().toEqualTypeOf<
        Props & PropsWithModel<Model> & React.HTMLAttributes<HTMLDivElement>
      >();
    });

    // TODO: Add more tests with a model

    it('should return the props and HTMLButtonElement when a `button` element is provided on an `ElementComponentM`', () => {
      type Expected = ExtractProps<typeof ElementComponent, 'button'>;

      expectTypeOf<Expected>().toEqualTypeOf<
        Props & PropsWithModel<Model> & React.ButtonHTMLAttributes<HTMLButtonElement>
      >();
    });

    it('should return only the props when `never` is provided on an `ElementComponentM', () => {
      type Expected = ExtractProps<typeof ElementComponent, never>;

      expectTypeOf<Expected>().toEqualTypeOf<Props & PropsWithModel<Model>>();
    });

    it('should return only props on a `ComponentM`', () => {
      const Component = createContainer()({
        modelHook: createModelHook({})((): Model => ({state: {foo: 'bar'}, events: {}})),
      })<Props>(props => null);
      type Expected = ExtractProps<typeof Component>;

      expectTypeOf<Expected>().toEqualTypeOf<Props & PropsWithModel<Model>>();
    });

    it('should return props of a class component', () => {
      class Component extends React.Component<Props> {}
      type Expected = ExtractProps<typeof Component>;

      expectTypeOf<Expected>().toEqualTypeOf<Props>();
    });

    describe('when passed `as={NonModelComponent}`', () => {
      it('should type the `model` prop as `Model | undefined`', () => {
        const NonModelComponent = createComponent('div')({
          Component() {
            return <div />;
          },
        });

        // no expectation. I can't get to the parameter of an overloaded function with a generic
        ElementComponent({
          foo: 'bar',
          as: NonModelComponent,
          model: {state: {foo: 'bar'}, events: {}}, // `model` should be `Model | undefined`
        });
      });

      it('should type the `model` prop as `Model2 | undefined`');
    });

    describe('when passed `as={ModelComponent}`', () => {
      it('should type the `model` prop as `Model2 | undefined`', () => {
        type Model2 = {
          state: {
            bar: string;
          };
          events: {};
        };
        const ModelComponent = createSubcomponent('div')({
          modelHook: createModelHook({})((): Model2 => ({state: {bar: 'bar'}, events: {}})),
        })<Props>(props => null);

        // no expectation. I can't get to the parameter of an overloaded function with a generic
        ElementComponent({
          foo: 'bar',
          as: ModelComponent,
          model: {state: {bar: ''}, events: {}}, // `model` should be `Model2 | undefined`
        });
      });
    });
  });

  // These are unit specific tests for model components when using the `as` prop. Failures here can
  // indicate something wrong with `PropsWithModel`, but if all other tests pass, these tests should
  // be suspect. Check other tests to make sure the type of `model` is not `unknown` which will
  // allow any model to be passed. Thus the previous tests will pass with false positives.
  describe('PropsWithModel', () => {
    type Model1 = 'foo';
    type Model2 = 'bar';
    type ModelComponent = ElementComponentM<'div', {}, Model2>;

    it('should return `Model1` if no component is passed', () => {
      type Expected = PropsWithModel<Model1>['model'];

      expectTypeOf<Expected>().toEqualTypeOf<Model1 | undefined>();
    });

    it('should return `Model1` if the passed component is not an `ElementComponentM`', () => {
      type Expected = PropsWithModel<Model1, ElementComponent<'div', {}>>['model'];

      expectTypeOf<Expected>().toEqualTypeOf<Model1 | undefined>();
    });

    it('should return `Model2` if the passed component is an `ElementComponentM`', () => {
      type Expected = PropsWithModel<Model1, ModelComponent>['model'];

      expectTypeOf<Expected>().toEqualTypeOf<Model2 | undefined>();
    });
  });
});
