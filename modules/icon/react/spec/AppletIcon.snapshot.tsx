import * as renderer from 'react-test-renderer';
import AppletIcon from '../lib/AppletIcon';
import * as React from 'react';
import {benefitsIcon} from '@workday/canvas-applet-icons-web';

describe('Applet Icon Snapshots', () => {
  test('renders as expected', () => {
    const component = renderer.create(<AppletIcon icon={benefitsIcon} />);
    expect(component).toMatchSnapshot();
  });
});
