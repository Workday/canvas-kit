import * as React from 'react';
import PageHeader from '../lib/PageHeader';
import {mount} from 'enzyme';
import {createMatchers} from 'jest-emotion';
import * as emotion from 'emotion';
import {SystemIcon} from '@workday/canvas-kit-react-icon';
import {exportIcon, fullscreenIcon} from '@workday/canvas-system-icons-web';
import {colors} from '@workday/canvas-kit-react-core';

expect.extend(createMatchers(emotion));

describe('Page Header', () => {
  const cb = jest.fn();
  afterEach(() => {
    cb.mockReset();
  });

  test('should render a title', () => {
    const testTitle = 'Page Header Title';
    const component = mount(<PageHeader title={testTitle} />);
    expect(component.find('h2').contains(testTitle));
  });

  test('should have a maxWidth in marketing contexts', () => {
    const component = mount(<PageHeader title="Marketing Context" marketing={true} />);
    expect(component.find('div').first()).toHaveStyleRule('max-width', '1440px');
  });

  test('should set correct SystemIcon color and colorHover props', () => {
    const testColors = {
      color: colors.blackberry100,
      colorHover: colors.cinnamon200,
    };
    const component = mount(
      <PageHeader title="Product Context">
        <a href="#">
          <SystemIcon
            className="icon1"
            icon={exportIcon}
            color={testColors.color}
            colorHover={testColors.colorHover}
          />
        </a>
        <a href="#">
          <SystemIcon className="icon2" icon={fullscreenIcon} />
        </a>
      </PageHeader>
    );
    expect(
      component
        .find(SystemIcon)
        .filter('.icon1')
        .props().color
    ).toBe(colors.frenchVanilla100);
    expect(
      component
        .find(SystemIcon)
        .filter('.icon1')
        .props().colorHover
    ).toBe(colors.blueberry200);
  });
  test('should render a copy of the children', () => {
    const component = mount(
      <PageHeader title="With Children">
        <a href="#">
          <SystemIcon className="icon1" icon={exportIcon} />
        </a>
        <a href="#">
          <SystemIcon className="icon2" icon={fullscreenIcon} />
        </a>
      </PageHeader>
    );

    // Using @ts-ignore because we're 1) invoking a private method on a class and 2) passing stuff in we shouldn't
    // @ts-ignore
    expect(component.instance().renderChildren('string')).toEqual(['string']); // tests !isValidElement branch
    // @ts-ignore
    expect(component.instance().renderChildren(null)).toEqual(null); // tests what happens when no children exist
    expect(
      // @ts-ignore
      component.instance().renderChildren(<SystemIcon className="icon2" icon={fullscreenIcon} />)
    ).toHaveLength(1); // tests handling of SystemIcons
    // @ts-ignore
    expect(component.instance().renderChildren(<PageHeader title="Page Header" />)[0].type).toBe(
      PageHeader
    ); // this should render what was passed in, not an <a> tag
  });
});
