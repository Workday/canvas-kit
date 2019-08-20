import * as React from 'react';
import PageHeader from '../lib/PageHeader';
import {mount} from 'enzyme';
import {createMatchers} from 'jest-emotion';
import * as emotion from 'emotion';
import {IconButton} from '@workday/canvas-kit-react-button';
import {exportIcon, fullscreenIcon} from '@workday/canvas-system-icons-web';

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

  test('should have a maxWidth in capWidth contexts', () => {
    const component = mount(<PageHeader title="capWidth Context" capWidth={true} />);
    expect(component.find('div').first()).toHaveStyleRule('max-width', '1440px');
  });
  test('should render a copy of the children', () => {
    const component = mount(
      <PageHeader title="With Children">
        <IconButton icon={exportIcon} />
        <IconButton icon={fullscreenIcon} />
      </PageHeader>
    );

    // Using @ts-ignore because we're 1) invoking a private method on a class and 2) passing stuff in we shouldn't
    // @ts-ignore
    expect(component.instance().renderChildren('string')).toEqual(['string']); // tests !isValidElement branch
    // @ts-ignore
    expect(component.instance().renderChildren(null)).toEqual(null); // tests what happens when no children exist
    expect(
      // @ts-ignore
      component.instance().renderChildren(<IconButton icon={fullscreenIcon} />)
    ).toHaveLength(1); // tests handling of IconButtons
    // @ts-ignore
    expect(component.instance().renderChildren(<PageHeader title="Page Header" />)[0].type).toBe(
      PageHeader
    ); // this should render what was passed in, not an <a> tag
  });
});
