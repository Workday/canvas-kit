import * as React from 'react';
import * as renderer from 'react-test-renderer';
import {beta_Button as Button} from '../lib/Button';
import {editIcon} from '@workday/canvas-system-icons-web';

describe('Button (Highlight) Snapshots', () => {
  test('renders a large, highlight button with an icon', () => {
    const component = renderer.create(
      <Button size={Button.Size.Large} variant={Button.Variant.Highlight} icon={editIcon}>
        Button
      </Button>
    );
    expect(component).toMatchSnapshot();
  });

  test('renders a large, highlight button with a data label', () => {
    const component = renderer.create(
      <Button size={Button.Size.Large} variant={Button.Variant.Highlight} dataLabel={'1:00'}>
        Button
      </Button>
    );
    expect(component).toMatchSnapshot();
  });

  test('renders a large, highlight button with an icon and data label', () => {
    const component = renderer.create(
      <Button
        size={Button.Size.Large}
        variant={Button.Variant.Highlight}
        icon={editIcon}
        dataLabel={'1:00'}
      >
        Button
      </Button>
    );
    expect(component).toMatchSnapshot();
  });

  test('renders a medium, highlight button with an icon', () => {
    const component = renderer.create(
      <Button size={Button.Size.Medium} variant={Button.Variant.Highlight} icon={editIcon}>
        Button
      </Button>
    );
    expect(component).toMatchSnapshot();
  });

  test('renders a medium, highlight button with an icon and a data label', () => {
    const component = renderer.create(
      <Button
        size={Button.Size.Medium}
        variant={Button.Variant.Highlight}
        icon={editIcon}
        dataLabel={'1:00'}
      >
        Button
      </Button>
    );
    expect(component).toMatchSnapshot();
  });

  test('renders a large, highlight button with an icon', () => {
    const component = renderer.create(
      <Button
        grow={true}
        size={Button.Size.Large}
        variant={Button.Variant.Highlight}
        icon={editIcon}
      >
        Button
      </Button>
    );
    expect(component).toMatchSnapshot();
  });
});
