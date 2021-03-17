import * as React from 'react';
import {mount} from 'enzyme';
import ActionBar from '../index';

describe('ActionBar', () => {
  const cb = jest.fn();
  afterEach(() => {
    cb.mockReset();
  });

  test('render a action bar with id', () => {
    const component = mount(<ActionBar id="myActionBar">Button Label</ActionBar>);
    expect(component.find(ActionBar).props().id).toBe('myActionBar');
    component.unmount();
  });

  test('ActionBar should spread extra props', () => {
    const component = mount(<ActionBar data-propspread="test" />);
    const container = component.at(0).getDOMNode();
    expect(container.getAttribute('data-propspread')).toBe('test');
    component.unmount();
  });
});
