import * as React from 'react';
import GlobalHeader from '../lib/GlobalHeader';
import {shallow} from 'enzyme';
import Header from '../lib/Header';
import {SearchBar} from '../lib/parts/SearchBar';
import {DubLogoTitle} from '../lib/parts';
import {HeaderTheme, HeaderVariant} from '../lib/shared/types';

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

    test('Passes props to Header correctly', () => {
      const propsHeader1 = {
        brand: <div>Brand</div>,
        menuToggle: <div>MenuToggle</div>,
        onMenuClick: jest.fn(),
        leftSlot: <SearchBar onSubmit={jest.fn()} />,
        isCollapsed: true,
      };
      const propsHeader2 = {
        menuToggle: 'abcde',
        isCollapsed: false,
        themeColor: HeaderTheme.White,
      };
      const defaultProps = {
        brand: <DubLogoTitle />,
        variant: HeaderVariant.Global,
        children: undefined,
      };

      const childPropsHeader1 = shallow(<GlobalHeader {...propsHeader1} />)
        .find(Header)
        .props();
      const childPropsHeader2 = shallow(<GlobalHeader {...propsHeader2} />)
        .find(Header)
        .props();

      expect(childPropsHeader1).toEqual({...defaultProps, ...propsHeader1});
      expect(childPropsHeader2).toEqual({...defaultProps, ...propsHeader2});
    });
  });
});
