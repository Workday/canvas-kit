import * as renderer from 'react-test-renderer';
import SystemIcon from '../lib/SystemIcon';
import * as React from 'react';
import {activityStreamIcon} from '@workday/canvas-system-icons-web';

describe('System Icon Snapshots', () => {
  test('renders as expected', () => {
    const component = renderer.create(<SystemIcon icon={activityStreamIcon} />);
    expect(component).toMatchSnapshot();
  });
});
