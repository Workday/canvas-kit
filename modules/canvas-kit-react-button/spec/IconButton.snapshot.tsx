import * as renderer from 'react-test-renderer';
import IconButton from '../lib/IconButton';
import * as React from 'react';
import {activityStreamIcon} from '@workday/canvas-system-icons-web';

describe('Icon Button Snapshots', () => {
  test('renders as expected', () => {
    const component = renderer.create(
      <IconButton>
        <svg>Hello</svg>
      </IconButton>
    );
    expect(component).toMatchSnapshot();
  });

  test('renders a small icon button', () => {
    const component = renderer.create(
      <IconButton buttonSize={IconButton.Sizes.Small} icon={activityStreamIcon} />
    );
    expect(component).toMatchSnapshot();
  });

  test('renders a medium icon button', () => {
    const component = renderer.create(
      <IconButton buttonSize={IconButton.Sizes.Medium} icon={activityStreamIcon} />
    );
    expect(component).toMatchSnapshot();
  });

  test('renders an icon button, toggled', () => {
    const component = renderer.create(<IconButton toggled={true} icon={activityStreamIcon} />);
    expect(component).toMatchSnapshot();
  });
});
