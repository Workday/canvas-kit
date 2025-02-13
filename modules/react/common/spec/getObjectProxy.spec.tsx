import {getObjectProxy} from '../lib/theming';

describe('getObjectProxy', () => {
  it('should use fallback property when target is an empty object', () => {
    getObjectProxy({}, {foo: 'bar'}); //?
    getObjectProxy({}, {foo: 'bar'}).hasOwnProperty('foo'); //?
    for (const key in getObjectProxy({}, {foo: 'bar'})) {
      key; //?
    }
    const temp = {...getObjectProxy({}, {foo: 'bar'})}; //?

    expect(getObjectProxy({}, {foo: 'bar'})).toHaveProperty('foo', 'bar');
  });

  it('should use target property when target has such property', () => {
    expect(getObjectProxy({foo: 'foo'}, {foo: 'bar'})).toHaveProperty('foo', 'foo');
  });

  it('should handle nesting fallback properties when target is an empty object', () => {
    expect(getObjectProxy({}, {foo: {bar: 'baz'}})).toHaveProperty('foo.bar', 'baz');
  });
});
