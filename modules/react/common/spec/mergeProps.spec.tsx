/** @jsxRuntime classic */
/** @jsx jsx */
import {jsx} from '@emotion/react';
import {render, screen} from '@testing-library/react';
import {expectTypeOf} from 'expect-type';

import {mergeProps} from '../lib/utils';

describe('mergeProps', () => {
  it('should combine target and source', () => {
    const target = {
      foo: 'bar',
    };
    const source = {
      bar: 'baz',
    };

    expect(mergeProps(target, source)).toEqual({foo: 'bar', bar: 'baz'});
  });

  it('should override target props with source props', () => {
    const target = {
      foo: 'bar',
    };
    const source = {
      foo: 'baz',
    };

    const props = mergeProps(target, source);
    expect(props).toEqual({foo: 'baz'});
    expectTypeOf(props).toEqualTypeOf<{foo: string}>();
  });

  it('should override target props types with source props types', () => {
    const target = {
      foo: 'bar',
    };
    const source = {
      foo: 1,
    };

    const props = mergeProps(target, source);
    expect(props).toEqual({foo: 1});
    expectTypeOf(props).toEqualTypeOf<{foo: number}>();
  });

  it('should override source prop when value of that prop is `null`', () => {
    const target = {
      foo: null,
    };
    const source = {
      foo: 'foo',
    };

    const props = mergeProps(target, source); //?
    expect(props).toEqual({foo: null});
    expectTypeOf(props).toEqualTypeOf<{}>();
  });

  it('should call both callbacks of the same keys', () => {
    const targetSpy = jest.fn();
    const sourceSpy = jest.fn();
    const target = {
      onClick: targetSpy,
    };
    const source = {
      onClick: sourceSpy,
    };

    const mergedProps = mergeProps(target, source);
    mergedProps.onClick({event: 'foo'});
    expect(targetSpy).toBeCalled();
    expect(targetSpy).toHaveBeenCalledWith({event: 'foo'});
    expect(sourceSpy).toBeCalled();
    expect(sourceSpy).toHaveBeenCalledWith({event: 'foo'});
  });

  it('should target callback before source callback', () => {
    const executionOrder = [] as number[];
    const targetSpy = jest.fn(() => {
      executionOrder.push(1);
    });
    const sourceSpy = jest.fn(() => {
      executionOrder.push(2);
    });
    const target = {
      onClick: targetSpy,
    };
    const source = {
      onClick: sourceSpy,
    };

    const mergedProps = mergeProps(target, source);
    mergedProps.onClick();
    expect(executionOrder).toEqual([1, 2]); // simple, but effective way to guarantee order
  });

  it('should not overwrite a callback with undefined', () => {
    const targetSpy = jest.fn();
    const target = {
      onClick: targetSpy,
    };
    const source = {};

    const mergedProps = mergeProps(target, source);
    mergedProps.onClick({event: 'foo'});
    expect(targetSpy).toBeCalled();
    expect(targetSpy).toHaveBeenCalledWith({event: 'foo'});
  });

  it('should merge style props, overriding properties of the style object', () => {
    const target = {
      style: {padding: 8, margin: 12},
    };
    const source = {
      style: {padding: 4, fontSize: 16},
    };

    const mergedProps = mergeProps(target, source);
    expect(mergedProps).toEqual({
      style: {
        padding: 4,
        margin: 12,
        fontSize: 16,
      },
    });
  });

  it('should merge css props, overriding properties of the target', () => {
    const target = {
      css: {padding: 8, margin: 12},
    };
    const source = {
      css: {padding: 4, fontSize: 16},
    };

    const mergedProps = mergeProps(target, source);
    render(<div data-testid="test" {...mergedProps} />);

    expect(screen.getByTestId('test')).toHaveStyle({
      padding: '4px',
      margin: '12px',
      fontSize: '16px',
    });
  });
  it('should merge class names', () => {
    const target = {
      className: 'foo',
    };
    const source = {
      className: 'bar',
    };

    const mergedProps = mergeProps(target, source);
    render(<div data-testid="test" {...mergedProps} />);

    expect(screen.getByTestId('test')).toHaveClass('foo bar');
  });
});
