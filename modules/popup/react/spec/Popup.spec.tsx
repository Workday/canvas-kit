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
});
