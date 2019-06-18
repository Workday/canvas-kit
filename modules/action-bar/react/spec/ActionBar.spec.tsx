import * as React from 'react';
import {mount} from 'enzyme';
import ActionBar from '../index';

describe(' Action Toolbar', () => {
  const cb = jest.fn();
  afterEach(() => {
    cb.mockReset();
  });

  test('render a action bar with id', () => {
    const component = mount(<ActionBar id="myActionBar">Button Label</ActionBar>);
    expect(component.find(ActionBar).props().id).toBe('myActionBar');
    component.unmount();
  });
});
