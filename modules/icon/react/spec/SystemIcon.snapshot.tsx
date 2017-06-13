import * as renderer from 'react-test-renderer';
import SystemIcon from '../lib/SystemIcon';
import SystemIconCircle from '../lib/SystemIconCircle';
import * as React from 'react';
import {colors} from '@workday/canvas-kit-react-core';
import {activityStreamIcon} from '@workday/canvas-system-icons-web';

describe('System Icon Snapshots', () => {
  test('renders as expected', () => {
    const component = renderer.create(<SystemIcon icon={activityStreamIcon} />);
    expect(component).toMatchSnapshot();
  });
});

describe('System Icon Circle Snapshots', () => {
  test('renders as expected', () => {
    const component = renderer.create(<SystemIconCircle icon={activityStreamIcon} />);
    expect(component).toMatchSnapshot();
  });
  test('renders as expected with colored background', () => {
    const component = renderer.create(
      <SystemIconCircle icon={activityStreamIcon} background={colors.blueberry400} />
    );
    expect(component).toMatchSnapshot();
  });
});
