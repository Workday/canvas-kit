import * as React from 'react';
import {mount} from 'enzyme';
import StatusIndicator from '../lib/StatusIndicator';

describe('StatusIndicator', () => {
  test('Card should spread extra props', () => {
    const component = mount(
      <StatusIndicator label="test" type={StatusIndicator.Type.Gray} data-propspread="test" />
    );
    const container = component.at(0).getDOMNode();
    expect(container.getAttribute('data-propspread')).toBe('test');
    component.unmount();
  });
});
