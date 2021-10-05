import * as React from 'react';
import DeprecatedGlobalHeader from '../lib/GlobalHeader';
import {shallow} from 'enzyme';
import DeprecatedHeader from '../lib/Header';
import {SearchForm} from '@workday/canvas-kit-labs-react/search-form';
import {DeprecatedDubLogoTitle} from '../lib/parts';
import {DeprecatedHeaderTheme, DeprecatedHeaderVariant} from '../lib/shared/types';

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

describe('DeprecatedGlobalHeader', () => {
  const cb = jest.fn();
  beforeEach(() => {
    window.resizeBy(1280, 1024);
  });

  afterEach(() => {
    cb.mockReset();
  });

  describe('How DeprecatedGlobalHeader children render', () => {
    beforeEach(() => {
      window.resizeBy(1280, 1024);
    });

    test('Renders non-React child elements as is', () => {
      const text = 'not a react element';
      const wrapper = shallow<DeprecatedGlobalHeader>(
        <DeprecatedGlobalHeader>{text}</DeprecatedGlobalHeader>
      );

      expect(wrapper.contains(text));
    });

    test('Renders a div element as is', () => {
      const wrapper = shallow<DeprecatedGlobalHeader>(
        <DeprecatedGlobalHeader>
          <div>Test</div>
        </DeprecatedGlobalHeader>
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
        leftSlot: <SearchForm onSubmit={jest.fn()} />,
        isCollapsed: true,
      };
      const propsHeader2 = {
        menuToggle: 'abcde',
        isCollapsed: false,
        themeColor: DeprecatedHeaderTheme.White,
      };
      const defaultProps = {
        brand: <DeprecatedDubLogoTitle />,
        variant: DeprecatedHeaderVariant.Global,
        children: undefined,
      };

      const childPropsHeader1 = shallow(<DeprecatedGlobalHeader {...propsHeader1} />)
        .find(DeprecatedHeader)
        .props();
      const childPropsHeader2 = shallow(<DeprecatedGlobalHeader {...propsHeader2} />)
        .find(DeprecatedHeader)
        .props();

      expect(childPropsHeader1).toEqual({...defaultProps, ...propsHeader1});
      expect(childPropsHeader2).toEqual({...defaultProps, ...propsHeader2});
    });
  });
});
