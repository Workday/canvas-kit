import * as React from 'react';
import GlobalHeader from '../lib/GlobalHeader';
import {shallow, mount} from 'enzyme';

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

describe('GlobalHeader', () => {
  const cb = jest.fn();
  beforeEach(() => {
    window.resizeBy(1280, 1024);
  });

  afterEach(() => {
    cb.mockReset();
  });

  describe('How GlobalHeader children render', () => {
    beforeEach(() => {
      window.resizeBy(1280, 1024);
    });

    test('Renders non-React child elements as is', () => {
      const text = 'not a react element';
      const wrapper = shallow<GlobalHeader>(<GlobalHeader>{text}</GlobalHeader>);

      expect(wrapper.contains(text));
    });

    test('Renders a div element as is', () => {
      const wrapper = shallow<GlobalHeader>(
        <GlobalHeader>
          <div>Test</div>
        </GlobalHeader>
      );
      expect(
        wrapper
          .find('div')
          .first()
          .contains('Test')
      ).toBeTruthy();
    });
  });

  test('getScreenSize should call onBreakpointChange event handler with current screen size', () => {
    jest.useFakeTimers();

    const largeBreakpoint = 30
    const mockFunction = jest.fn();
    mount<GlobalHeader>(<GlobalHeader breakpoint={largeBreakpoint} onBreakpointChange={mockFunction} />);

    window.resizeBy(25, 25);
    expect(mockFunction).toHaveBeenCalledTimes(1);
    expect(mockFunction).toHaveBeenCalledWith('md');
    mockFunction.mockReset();

    jest.runAllTimers();

    window.resizeBy(35, 35);
    expect(mockFunction).toHaveBeenCalledTimes(1);
    expect(mockFunction).toHaveBeenCalledWith('lg');
  });
});
