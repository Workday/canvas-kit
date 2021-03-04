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

    expect(mergeProps(target, source)).toEqual({foo: 'baz'});
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

  it('should not overwrite a callback with undefined', () => {
    const targetSpy = jest.fn();
    const target = {
      onClick: targetSpy,
    };
    const source = {
      onClick: undefined,
    };

    const mergedProps = mergeProps(target, source);
    mergedProps.onClick({event: 'foo'});
    expect(targetSpy).toBeCalled();
    expect(targetSpy).toHaveBeenCalledWith({event: 'foo'});
  });
});
