import * as React from 'react';
import {Search} from '../lib/parts/Search';
import {mount} from 'enzyme';
import {HeaderTheme} from '../lib/shared/types';

describe('Header Search', () => {
  const cb = jest.fn();
  afterEach(() => {
    cb.mockReset();
  });

  test('Trying to search without a callback should do nothing', () => {
    const mockPreventDefault = jest.fn();
    const mockEvent = {preventDefault: mockPreventDefault};
    const component = mount(<Search rightAlign={true} />);
    component.find('form').simulate('submit', mockEvent);

    expect(mockPreventDefault).toBeCalled();
  });

  test('Searching empty string should do nothing', () => {
    const component = mount(<Search onSearchSubmit={cb} />);

    component.find('form').simulate('submit');
    expect(cb.mock.calls.length).toBe(0);
    component.unmount();
  });

  test('Searching something should call callback', () => {
    const component = mount(<Search value={'hello'} onSearchSubmit={cb} />);

    component.find('form').simulate('submit');
    expect(cb.mock.calls.length).toBe(1);
    component.unmount();
  });

  test('Searching with icon should call callback', () => {
    const component = mount(<Search value={'world'} onSearchSubmit={cb} />);

    component.find('button[type="submit"]').simulate('click');
    expect(cb.mock.calls.length).toBe(1);
    component.unmount();
  });

  test('Collapsed prop should render search icon (without form) until clicked', () => {
    const component = mount(<Search collapse={true} />);

    expect(component.find('form').exists()).toBe(false);

    const openIcon = component.find('span'); // I was having trouble targeting svgs
    openIcon.simulate('click');

    const form = component.find('form');
    expect(form.exists()).toBe(true);

    const closeIcon = form.find('span');
    closeIcon.simulate('click');

    expect(
      component
        .find('form')
        .render()
        .hasClass('search-exit-active')
    ).toBe(true);

    component.unmount();
  });

  test('Focussing input should update state', () => {
    const component = mount(<Search onSearchSubmit={cb} />);

    component.find('input').simulate('focus');
    expect(component.state('focused')).toBe(true);
    component.unmount();
  });

  test('Hovering input should update state', () => {
    const component = mount(<Search onSearchSubmit={cb} />);

    component.find('input').simulate('mouseEnter');
    expect(component.state('hovered')).toBe(true);
    component.find('input').simulate('mouseLeave');
    expect(component.state('hovered')).toBe(false);
    component.unmount();
  });

  test('Hovering and focusing input should update state', () => {
    const component = mount(<Search onSearchSubmit={cb} />);

    component.find('input').simulate('mouseEnter');
    expect(component.state('hovered')).toBe(true);
    component.find('input').simulate('focus');
    expect(component.state('focused')).toBe(true);
    component.unmount();
  });

  test('Focussing input should update state', () => {
    const component = mount(<Search onSearchSubmit={cb} themeColor={HeaderTheme.Blue} />);

    component.find('input').simulate('focus');
    expect(component.state('focused')).toBe(true);
    component.unmount();
  });

  test('Hovering input should update state', () => {
    const component = mount(<Search onSearchSubmit={cb} themeColor={HeaderTheme.Blue} />);

    component.find('input').simulate('mouseEnter');
    expect(component.state('hovered')).toBe(true);
    component.find('input').simulate('mouseLeave');
    expect(component.state('hovered')).toBe(false);
    component.unmount();
  });

  test('Hovering and focusing input should update state', () => {
    const component = mount(<Search onSearchSubmit={cb} themeColor={HeaderTheme.Blue} />);

    component.find('input').simulate('mouseEnter');
    expect(component.state('hovered')).toBe(true);
    component.find('input').simulate('focus');
    expect(component.state('focused')).toBe(true);
    component.unmount();
  });

  test('Input with value', () => {
    const component = mount(<Search value="Hello World" />);
    expect(component.state('value')).toBe('Hello World');
    component.unmount();
  });

  test('Input with changing value', () => {
    const component = mount(<Search value="Hello World" />);
    component.find('input').simulate('change', {target: {value: 'Foo Bar'}});
    expect(component.state('value')).toBe('Foo Bar');
    component.unmount();
  });

  test('Clear Search Input', () => {
    const component = mount(<Search value="Hello World" />);
    component.find('button[type="reset"]').simulate('click');
    expect(component.state('value')).toBe('');
    component.unmount();
  });

  test('Search should spread extra props', () => {
    const component = mount(<Search data-propspread="test" />);
    const container = component.at(0).getDOMNode();
    expect(container.getAttribute('data-propspread')).toBe('test');
    component.unmount();
  });
});
