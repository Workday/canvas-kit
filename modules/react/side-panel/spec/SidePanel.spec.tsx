import * as React from 'react';
import {mount} from 'enzyme';

import SidePanel from '../lib/SidePanel';

declare global {
  interface Window {
    resizeBy: (x: number, y: number) => void;
  }
}
const map: {[key: string]: any} = {};
window.addEventListener = jest.fn((event, callback) => {
  map[event] = callback;
});
window.removeEventListener = jest.fn((event, callback) => {
  if (map[event] && map[event] === callback) {
    delete map[event];
  }
});
window.dispatchEvent = (event: Event) => {
  if (map[event.type]) {
    map[event.type]();
  }

  // TODO: not totally accurate
  return false;
};

window.resizeBy = (x: number, y: number) => {
  // @ts-ignore
  window.innerWidth = x;
  // @ts-ignore
  window.innerHeight = y;
  window.dispatchEvent(new Event('resize'));
};

// @ts-ignore
window.requestAnimationFrame = cbFn => cbFn();

describe('SidePanel', () => {
  const cb = jest.fn();
  beforeEach(() => {
    window.resizeBy(1280, 1024);
  });
  afterEach(() => {
    cb.mockReset();
  });

  test('should call a callback function onToggleClick', () => {
    const component = mount(
      <SidePanel open={true} onToggleClick={cb}>
        Hello World
      </SidePanel>
    );
    const toggleButton = component.find('button');
    toggleButton.simulate('click');
    expect(cb.mock.calls.length).toBe(1);
    component.unmount();
  });

  test('should call onBreakpointChange when below the breakpoint and side panel is open', () => {
    const mockFunction = jest.fn();
    const component = mount(
      <SidePanel breakpoint={1000} onBreakpointChange={mockFunction} open={true} onToggleClick={cb}>
        Hello World
      </SidePanel>
    );
    window.resizeBy(10, 10);
    expect(mockFunction).toHaveBeenCalledTimes(1);
    component.unmount();
  });

  test('should call onBreakpointChange when above the breakpoint and side panel is closed', () => {
    const mockFunction = jest.fn();
    const component = mount(
      <SidePanel breakpoint={800} onBreakpointChange={mockFunction} open={false} onToggleClick={cb}>
        Hello World
      </SidePanel>
    );
    window.resizeBy(1000, 10);
    expect(mockFunction).toHaveBeenCalledTimes(1);
    component.unmount();
  });

  test('SidePanel should spread extra props', () => {
    const component = mount(<SidePanel open={true} data-propspread="test" />);
    const container = component.at(0).getDOMNode();
    expect(container.getAttribute('data-propspread')).toBe('test');
    component.unmount();
  });
});
