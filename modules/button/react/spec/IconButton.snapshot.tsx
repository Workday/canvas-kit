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
      <IconButton size={IconButton.Size.Small} icon={activityStreamIcon} />
    );
    expect(component).toMatchSnapshot();
  });

  test('renders a medium icon button', () => {
    const component = renderer.create(
      <IconButton size={IconButton.Size.Medium} icon={activityStreamIcon} />
    );
    expect(component).toMatchSnapshot();
  });

  test('renders an icon button, toggled', () => {
    const component = renderer.create(<IconButton toggled={true} icon={activityStreamIcon} />);
    expect(component).toMatchSnapshot();
  });

  test('renders various icon types', () => {
    const component = renderer.create(
      <>
        <IconButton icon={activityStreamIcon} variant={IconButton.Variant.Square} />
        <IconButton icon={activityStreamIcon} variant={IconButton.Variant.SquareFilled} />
        <IconButton icon={activityStreamIcon} variant={IconButton.Variant.Plain} />
        <IconButton icon={activityStreamIcon} variant={IconButton.Variant.Circle} />
        <IconButton icon={activityStreamIcon} variant={IconButton.Variant.CircleFilled} />
        <div style={{background: '#000'}}>
          <IconButton icon={activityStreamIcon} variant={IconButton.Variant.Inverse} />
          <IconButton icon={activityStreamIcon} variant={IconButton.Variant.InverseFilled} />
        </div>
      </>
    );
    expect(component).toMatchSnapshot();
  });
});
