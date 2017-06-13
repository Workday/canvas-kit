import * as renderer from 'react-test-renderer';
import Icon from '../lib/Icon';
import * as React from 'react';
import {CanvasIconTypes} from '@workday/design-assets-types';
import {shieldIcon} from '@workday/canvas-accent-icons-web';

describe('Applet Icon Snapshots', () => {
  test('renders as expected', () => {
    const component = renderer.create(<Icon src={shieldIcon} type={CanvasIconTypes.Accent} />);
    expect(component).toMatchSnapshot();
  });
});
