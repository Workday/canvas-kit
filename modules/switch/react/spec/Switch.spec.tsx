import * as React from 'react';
import {mount} from 'enzyme';
import Switch from '../lib/Switch';

describe('Switch', () => {
  const cb = jest.fn();
  afterEach(() => {
    cb.mockReset();
  });

  test('Switch should spread extra props', () => {
    const component = mount(<Switch data-propspread="test" onChange={cb} />);
    const input = component
      .find('input')
      // TODO: Standardize on prop spread location (see #150)
      .getDOMNode();
    expect(input.getAttribute('data-propspread')).toBe('test');
    component.unmount();
  });
});
