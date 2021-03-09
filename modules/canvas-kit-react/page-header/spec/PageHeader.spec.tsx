import * as React from 'react';
import PageHeader from '../lib/PageHeader';
import {mount} from 'enzyme';
import {IconButton} from '@workday/canvas-kit-react/button';
import {exportIcon, fullscreenIcon} from '@workday/canvas-system-icons-web';

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

  test('should have a maxWidth in capWidth contexts', () => {
    const component = mount(<PageHeader title="capWidth Context" capWidth={true} />);
    expect(component.find('div').first()).toHaveStyleRule('max-width', '1440px');
  });
  test('should render a copy of the children', () => {
    const component = mount(
      <PageHeader title="With Children">
        <IconButton icon={exportIcon} aria-label="Export" />
        <IconButton icon={fullscreenIcon} aria-label="Fullscreen" />
      </PageHeader>
    );

    // Using @ts-ignore because we're 1) invoking a private method on a class and 2) passing stuff in we shouldn't
    // @ts-ignore
    expect(component.instance().renderChildren('string')).toEqual(['string']); // tests !isValidElement branch
    // @ts-ignore
    expect(component.instance().renderChildren(null)).toEqual(null); // tests what happens when no children exist
    expect(
      component
        .instance()
        // @ts-ignore
        .renderChildren(<IconButton icon={fullscreenIcon} aria-label="Fullscreen" />)
    ).toHaveLength(1); // tests handling of IconButtons
    // @ts-ignore
    expect(component.instance().renderChildren(<PageHeader title="Page Header" />)[0].type).toBe(
      PageHeader
    ); // this should render what was passed in, not an <a> tag
  });

  test('PageHeader should spread extra props', () => {
    const component = mount(<PageHeader title="Page Header" data-propspread="test" />);
    const container = component
      .find('header')
      .childAt(0) // TODO: Standardize on prop spread location (see #150)
      .getDOMNode();
    expect(container.getAttribute('data-propspread')).toBe('test');
    component.unmount();
  });
});
