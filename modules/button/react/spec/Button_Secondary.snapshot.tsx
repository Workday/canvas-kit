import * as React from 'react';
import * as renderer from 'react-test-renderer';
import Button from '../lib/Button';
import {editIcon} from '@workday/canvas-system-icons-web';

describe('Button (Secondary) Snapshots (beta)', () => {
  test('renders a large, secondary button', () => {
    const component = renderer.create(
      <Button size={Button.Size.Large} variant={Button.Variant.Secondary}>
        Button
      </Button>
    );
    expect(component).toMatchSnapshot();
  });

  test('renders a large, secondary button with an icon', () => {
    const component = renderer.create(
      <Button size={Button.Size.Large} variant={Button.Variant.Secondary} icon={editIcon}>
        Button
      </Button>
    );
    expect(component).toMatchSnapshot();
  });

  test('renders a large, secondary button with a data label', () => {
    const component = renderer.create(
      <Button size={Button.Size.Large} variant={Button.Variant.Secondary} dataLabel={'1:00'}>
        Button
      </Button>
    );
    expect(component).toMatchSnapshot();
  });

  test('renders a large, secondary button with an icon and a data label', () => {
    const component = renderer.create(
      <Button
        size={Button.Size.Large}
        variant={Button.Variant.Secondary}
        icon={editIcon}
        dataLabel={'1:00'}
      >
        Button
      </Button>
    );
    expect(component).toMatchSnapshot();
  });

  test('renders a medium, secondary button', () => {
    const component = renderer.create(
      <Button size={Button.Size.Medium} variant={Button.Variant.Secondary}>
        Button
      </Button>
    );
    expect(component).toMatchSnapshot();
  });

  test('renders a medium, secondary button with an icon', () => {
    const component = renderer.create(
      <Button size={Button.Size.Medium} variant={Button.Variant.Secondary} icon={editIcon}>
        Button
      </Button>
    );
    expect(component).toMatchSnapshot();
  });

  test('renders a medium, secondary button with a data label', () => {
    const component = renderer.create(
      <Button size={Button.Size.Medium} variant={Button.Variant.Secondary} dataLabel={'1:00'}>
        Button
      </Button>
    );
    expect(component).toMatchSnapshot();
  });

  test('renders a medium, secondary button with an icon and a data label', () => {
    const component = renderer.create(
      <Button
        size={Button.Size.Medium}
        variant={Button.Variant.Secondary}
        icon={editIcon}
        dataLabel={'1:00'}
      >
        Button
      </Button>
    );
    expect(component).toMatchSnapshot();
  });

  test('renders a small, secondary button', () => {
    const component = renderer.create(
      <Button size={Button.Size.Small} variant={Button.Variant.Secondary}>
        Button
      </Button>
    );
    expect(component).toMatchSnapshot();
  });

  test('renders a large, growing secondary button', () => {
    const component = renderer.create(
      <Button grow={true} size={Button.Size.Large} variant={Button.Variant.Secondary}>
        Button
      </Button>
    );
    expect(component).toMatchSnapshot();
  });
});
