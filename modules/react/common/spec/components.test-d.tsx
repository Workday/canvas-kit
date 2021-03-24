import React from 'react';
import {expectTypeOf} from 'expect-type';

import {createComponent, ElementComponent} from '../lib/utils/components';

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
