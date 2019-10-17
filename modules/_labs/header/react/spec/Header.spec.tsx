import * as React from 'react';
import Header from '../lib/Header';
import {shallow, mount} from 'enzyme';
import {IconButton} from '@workday/canvas-kit-react-button';
import {SystemIcon} from '@workday/canvas-kit-react-icon';
import {activityStreamIcon, justifyIcon} from '@workday/canvas-system-icons-web';

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

describe('Header', () => {
  const cb = jest.fn();
  beforeEach(() => {
    window.resizeBy(1280, 1024);
  });

  afterEach(() => {
    cb.mockReset();
  });

  test('Header should spread extra props', () => {
    const component = mount(<Header data-propspread="test" />);
    const container = component.at(0).getDOMNode();
    expect(container.getAttribute('data-propspread')).toBe('test');
    component.unmount();
  });

  describe('How Header children render', () => {
    beforeEach(() => {
      window.resizeBy(1280, 1024);
    });

    test('Renders non-React child elements as is', () => {
      const text = 'not a react element';
      const wrapper = shallow<Header>(<Header>{text}</Header>);

      expect(wrapper.contains(text));
    });

    test('Renders a div element as is', () => {
      const wrapper = shallow<Header>(
        <Header>
          <div>Test</div>
        </Header>
      );
      expect(
        wrapper
          .find('div')
          .first()
          .contains('Test')
      ).toBeTruthy();
    });

    test('Converts SystemIcons into IconButtons matching theme', () => {
      const theme = Header.Theme.Blue;

      const wrapper = mount<Header>(
        <Header themeColor={theme}>
          <a href="#">
            <SystemIcon icon={activityStreamIcon} />
          </a>
        </Header>
      );
      const renderedIcon = wrapper.find(IconButton).first();

      expect(wrapper.find(IconButton)).toHaveLength(1);
      expect(renderedIcon.props().icon).toBe(activityStreamIcon);
      expect(renderedIcon.props().variant).toBe(IconButton.Variant.Inverse);
      expect(renderedIcon.props().onClick).toBeTruthy();
    });

    test('Renders a child hamburger menu (IconButton) when isCollapsed is true', () => {
      const wrapper = mount<Header>(
        <Header isCollapsed={true}>
          <IconButton icon={activityStreamIcon} aria-label="Activity Stream" />
        </Header>
      );
      const renderedIcon = wrapper.find(IconButton).first();

      expect(renderedIcon.props().icon).toBe(justifyIcon);
    });

    describe('When rendered in collapsed mode', () => {
      test('Calls onMenuClick when the menuToggle does not have an onClick prop', () => {
        const onMenuClick = jest.fn();
        const wrapper = mount<Header>(
          <Header
            isCollapsed={true}
            onMenuClick={onMenuClick}
            menuToggle={<IconButton aria-label="Activity Stream" icon={activityStreamIcon} />}
          />
        );

        wrapper.find('button').simulate('click');

        expect(onMenuClick).toHaveBeenCalled();
      });

      test('Does not overwrite the menuToggle onClick prop when onMenuClick is defined', () => {
        const onMenuClick = jest.fn();
        const onIconClick = jest.fn();
        const wrapper = mount<Header>(
          <Header
            isCollapsed={true}
            onMenuClick={onMenuClick}
            menuToggle={
              <IconButton
                aria-label="Activity Stream"
                icon={activityStreamIcon}
                onClick={onIconClick}
              />
            }
          />
        );

        wrapper.find('button').simulate('click');

        expect(onMenuClick).not.toHaveBeenCalled();
        expect(onIconClick).toHaveBeenCalled();
      });

      test('Does not overwrite the menuToggle onClick prop when onMenuClick is undefined', () => {
        const onIconClick = jest.fn();
        const wrapper = mount<Header>(
          <Header
            isCollapsed={true}
            menuToggle={
              <IconButton
                aria-label="Activity Stream"
                icon={activityStreamIcon}
                onClick={onIconClick}
              />
            }
          />
        );

        wrapper.find('button').simulate('click');

        expect(onIconClick).toHaveBeenCalled();
      });
    });
  });
});
