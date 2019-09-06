import * as React from 'react';
import {mount} from 'enzyme';
import Tooltip from '../lib/Tooltip';

describe('Tooltip', () => {
  test('Tooltip should spread extra props', () => {
    const component = mount(<Tooltip data-propspread="test" />);
    const container = component.at(0).getDOMNode();
    expect(container.getAttribute('data-propspread')).toBe('test');
    component.unmount();
  });
});
