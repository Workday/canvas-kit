import * as React from 'react';
import Popup from '../lib/Popup';
import {mount} from 'enzyme';

describe('Popup', () => {
  const cb = jest.fn();
  afterEach(() => {
    cb.mockReset();
  });

  test('should call a callback function', () => {
    const component = mount(<Popup handleClose={cb}>Hello World</Popup>);
    const popup = component.find('button');
    popup.simulate('click');
    expect(cb.mock.calls.length).toBe(1);
    component.unmount();
  });

  test('Popup should spread extra props', () => {
    const component = mount(<Popup data-propspread="test" />);
    const container = component.at(0).getDOMNode();
    expect(container.getAttribute('data-propspread')).toBe('test');
    component.unmount();
  });
});
