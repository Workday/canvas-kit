import * as renderer from 'react-test-renderer';
import IconButton from '../lib/IconButton';
import * as React from 'react';
import {activityStreamIcon} from '@workday/canvas-system-icons-web';

describe('Icon Button Snapshots', () => {
  test('renders as expected', () => {
    const component = renderer.create(
      <IconButton aria-label="Hello">
        <svg>Hello</svg>
      </IconButton>
    );
    expect(component).toMatchSnapshot();
  });

  test('renders a small icon button', () => {
    const component = renderer.create(
      <IconButton
        size={IconButton.Size.Small}
        icon={activityStreamIcon}
        aria-label="Activity Stream"
      />
    );
    expect(component).toMatchSnapshot();
  });

  test('renders a medium icon button', () => {
    const component = renderer.create(
      <IconButton
        size={IconButton.Size.Medium}
        icon={activityStreamIcon}
        aria-label="Activity Stream"
      />
    );
    expect(component).toMatchSnapshot();
  });

  test('renders an icon button, toggled', () => {
    const component = renderer.create(
      <IconButton toggled={true} icon={activityStreamIcon} aria-label="Activity Stream" />
    );
    expect(component).toMatchSnapshot();
  });

  test('renders various icon types', () => {
    const component = renderer.create(
      <>
        <IconButton
          icon={activityStreamIcon}
          variant={IconButton.Variant.Square}
          aria-label="Activity Stream"
        />
        <IconButton
          icon={activityStreamIcon}
          variant={IconButton.Variant.SquareFilled}
          aria-label="Activity Stream"
        />
        <IconButton
          icon={activityStreamIcon}
          variant={IconButton.Variant.Plain}
          aria-label="Activity Stream"
        />
        <IconButton
          icon={activityStreamIcon}
          variant={IconButton.Variant.Circle}
          aria-label="Activity Stream"
        />
        <IconButton
          icon={activityStreamIcon}
          variant={IconButton.Variant.CircleFilled}
          aria-label="Activity Stream"
        />
        <div style={{background: '#000'}}>
          <IconButton
            icon={activityStreamIcon}
            variant={IconButton.Variant.Inverse}
            aria-label="Activity Stream"
          />
          <IconButton
            icon={activityStreamIcon}
            variant={IconButton.Variant.InverseFilled}
            aria-label="Activity Stream"
          />
        </div>
      </>
    );
    expect(component).toMatchSnapshot();
  });
});
