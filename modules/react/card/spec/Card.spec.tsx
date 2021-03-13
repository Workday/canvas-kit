import * as React from 'react';
import {mount} from 'enzyme';
import Card from '../lib/Card';

describe('Card', () => {
  test('Card should spread extra props', () => {
    const component = mount(<Card data-propspread="test" />);
    const container = component.at(0).getDOMNode();
    expect(container.getAttribute('data-propspread')).toBe('test');
    component.unmount();
  });
});
