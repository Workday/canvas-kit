import * as React from 'react';
import Modal from '../lib/Modal';
import {mount} from 'enzyme';

describe('Modal', () => {
  const cb = jest.fn();
  afterEach(() => {
    cb.mockReset();
  });

  test('should call a callback function', () => {
    const component = mount(
      <Modal open={true} handleClose={cb}>
        Hello World
      </Modal>
    );
    const modal = component.find('button');
    modal.simulate('click');
    expect(cb.mock.calls.length).toBe(1);
    component.unmount();
  });

  test('Modal should spread extra props', () => {
    const component = mount(<Modal open={true} data-propspread="test" />);
    const container = component.at(0).getDOMNode();
    expect(container.getAttribute('data-propspread')).toBe('test');
    component.unmount();
  });
});
