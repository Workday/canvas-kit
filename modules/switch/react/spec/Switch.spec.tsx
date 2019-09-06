import * as React from 'react';
import {mount} from 'enzyme';
import Switch from '../lib/Switch';

describe('Switch', () => {
  test('Switch should spread extra props', () => {
    const component = mount(<Switch data-propspread="test" />);
    const input = component
      .find('input')
      // TODO: Standardize on prop spread location (see #150)
      .getDOMNode();
    expect(input.getAttribute('data-propspread')).toBe('test');
    component.unmount();
  });
});
