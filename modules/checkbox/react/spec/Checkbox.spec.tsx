import * as React from 'react';
import {mount} from 'enzyme';
import Checkbox from '../lib/Checkbox';

describe('Checkbox', () => {
  const cb = jest.fn();
  afterEach(() => {
    cb.mockReset();
  });

  test('render an checkbox input with id', () => {
    const component = mount(<Checkbox id="myCheckbox" onChange={cb} />);
    expect(component.find('input').props().id).toBe('myCheckbox');
    component.unmount();
  });

  test('render an checkbox input with value', () => {
    const component = mount(<Checkbox value="myCheckbox" onChange={cb} />);
    expect(component.find('input').props().value).toBe('myCheckbox');
    component.unmount();
  });

  test('render an checked checkbox input', () => {
    const component = mount(<Checkbox checked={true} onChange={cb} />);
    expect(component.find('input').props().checked).toBe(true);
    component.unmount();
  });

  test('render an disabled checkbox input', () => {
    const component = mount(<Checkbox disabled={true} onChange={cb} />);
    expect(component.find('input').props().disabled).toBe(true);
    component.unmount();
  });

  test('should call a callback function', () => {
    const component = mount(<Checkbox onChange={cb} />);
    const input = component.find('input');
    input.simulate('change');

    expect(cb.mock.calls.length).toBe(1);
    component.unmount();
  });
});
