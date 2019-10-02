import * as React from 'react';
import * as renderer from 'react-test-renderer';

import {DubLogoTitle, WorkdayLogoTitle} from '../lib/parts';
import {HeaderTheme} from '../lib/shared/types';

describe('Header Parts Snapshots', () => {
  test('Renders a DubLogoTitle with custom background', () => {
    const tree = renderer.create(<DubLogoTitle title={'test'} bgColor={'pink'} />).toJSON();

    expect(tree).toMatchSnapshot();
  });

  test('Renders a blue-themed WorkdayLogoTitle', () => {
    const tree = renderer
      .create(<WorkdayLogoTitle title={'test'} themeColor={HeaderTheme.Blue} />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
