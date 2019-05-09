import * as renderer from 'react-test-renderer';
import Svg from '../lib/Svg';
import * as React from 'react';
import {CanvasIconTypes} from '@workday/design-assets-types';
import {shieldIcon} from '@workday/canvas-accent-icons-web';

describe('Applet Icon Snapshots', () => {
  test('renders as expected', () => {
    const component = renderer.create(<Svg src={shieldIcon} type={CanvasIconTypes.Accent} />);
    expect(component).toMatchSnapshot();
  });
});
