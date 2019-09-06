import * as React from 'react';
import {mount} from 'enzyme';
import LoadingDots from '../lib/LoadingDots';

describe('LoadingDots', () => {
  test('LoadingDots should spread extra props', () => {
    const component = mount(<LoadingDots data-propspread="test" />);
    const container = component.at(0).getDOMNode();
    expect(container.getAttribute('data-propspread')).toBe('test');
    component.unmount();
  });
});
