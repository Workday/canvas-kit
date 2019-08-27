import * as React from 'react';
import {mount} from 'enzyme';
import Switch from '../lib/Switch';

describe('Switch', () => {
  test('Switch should spread extra props', () => {
    const component = mount(<Switch data-propspread="test" />);
    const container = component.at(0).getDOMNode();
    expect(container.getAttribute('data-propspread')).toBe('test');
    component.unmount();
  });
});
