import * as React from 'react';
import * as renderer from 'react-test-renderer';
import Button from '../lib/Button';
import {editIcon} from '@workday/canvas-system-icons-web';

describe('Button (Outline) Snapshots', () => {
  test('renders a large, outline primary button', () => {
    const component = renderer.create(
      <Button size={Button.Size.Large} variant={Button.Variant.OutlinePrimary}>
        Button
      </Button>
    );
    expect(component).toMatchSnapshot();
  });

  test('renders a large, outline primary button with an icon', () => {
    const component = renderer.create(
      <Button size={Button.Size.Large} variant={Button.Variant.OutlinePrimary} icon={editIcon}>
        Button
      </Button>
    );
    expect(component).toMatchSnapshot();
  });

  test('renders a large, outline primary button with a data label', () => {
    const component = renderer.create(
      <Button size={Button.Size.Large} variant={Button.Variant.OutlinePrimary} dataLabel={'1:00'}>
        Button
      </Button>
    );
    expect(component).toMatchSnapshot();
  });

  test('renders a large, outline primary button with an icon and data label', () => {
    const component = renderer.create(
      <Button
        size={Button.Size.Large}
        variant={Button.Variant.OutlinePrimary}
        icon={editIcon}
        dataLabel={'1:00'}
      >
        Button
      </Button>
    );
    expect(component).toMatchSnapshot();
  });

  test('renders a large, outline secondary button', () => {
    const component = renderer.create(
      <Button size={Button.Size.Large} variant={Button.Variant.OutlineSecondary}>
        Button
      </Button>
    );
    expect(component).toMatchSnapshot();
  });

  test('renders a large, outline secondary button with an icon', () => {
    const component = renderer.create(
      <Button size={Button.Size.Large} variant={Button.Variant.OutlineSecondary} icon={editIcon}>
        Button
      </Button>
    );
    expect(component).toMatchSnapshot();
  });

  test('renders a large, outline secondary button with a data label', () => {
    const component = renderer.create(
      <Button size={Button.Size.Large} variant={Button.Variant.OutlineSecondary} dataLabel={'1:00'}>
        Button
      </Button>
    );
    expect(component).toMatchSnapshot();
  });

  test('renders a large, outline secondary button with an icon and data label', () => {
    const component = renderer.create(
      <Button
        size={Button.Size.Large}
        variant={Button.Variant.OutlineSecondary}
        icon={editIcon}
        dataLabel={'1:00'}
      >
        Button
      </Button>
    );
    expect(component).toMatchSnapshot();
  });

  test('renders a large, outline inverse button', () => {
    const component = renderer.create(
      <Button size={Button.Size.Large} variant={Button.Variant.OutlineInverse}>
        Button
      </Button>
    );
    expect(component).toMatchSnapshot();
  });

  test('renders a large, outline inverse button with an icon', () => {
    const component = renderer.create(
      <Button size={Button.Size.Large} variant={Button.Variant.OutlineInverse} icon={editIcon}>
        Button
      </Button>
    );
    expect(component).toMatchSnapshot();
  });

  test('renders a large, outline inverse button with a data label', () => {
    const component = renderer.create(
      <Button size={Button.Size.Large} variant={Button.Variant.OutlineInverse} dataLabel={'1:00'}>
        Button
      </Button>
    );
    expect(component).toMatchSnapshot();
  });

  test('renders a large, outline inverse button with an icon and data label', () => {
    const component = renderer.create(
      <Button
        size={Button.Size.Large}
        variant={Button.Variant.OutlineInverse}
        icon={editIcon}
        dataLabel={'1:00'}
      >
        Button
      </Button>
    );
    expect(component).toMatchSnapshot();
  });

  test('renders a medium, outline primary button', () => {
    const component = renderer.create(
      <Button size={Button.Size.Medium} variant={Button.Variant.OutlinePrimary}>
        Button
      </Button>
    );
    expect(component).toMatchSnapshot();
  });

  test('renders a medium, outline primary button with an icon', () => {
    const component = renderer.create(
      <Button size={Button.Size.Medium} variant={Button.Variant.OutlinePrimary} icon={editIcon}>
        Button
      </Button>
    );
    expect(component).toMatchSnapshot();
  });

  test('renders a medium, outline primary button with a data label', () => {
    const component = renderer.create(
      <Button size={Button.Size.Medium} variant={Button.Variant.OutlinePrimary} dataLabel={'1:00'}>
        Button
      </Button>
    );
    expect(component).toMatchSnapshot();
  });

  test('renders a medium, outline primary button with an icon and a data label', () => {
    const component = renderer.create(
      <Button
        size={Button.Size.Medium}
        variant={Button.Variant.OutlinePrimary}
        icon={editIcon}
        dataLabel={'1:00'}
      >
        Button
      </Button>
    );
    expect(component).toMatchSnapshot();
  });

  test('renders a medium, outline secondary button', () => {
    const component = renderer.create(
      <Button size={Button.Size.Medium} variant={Button.Variant.OutlineSecondary}>
        Button
      </Button>
    );
    expect(component).toMatchSnapshot();
  });

  test('renders a medium, outline secondary button with an icon', () => {
    const component = renderer.create(
      <Button size={Button.Size.Medium} variant={Button.Variant.OutlineSecondary} icon={editIcon}>
        Button
      </Button>
    );
    expect(component).toMatchSnapshot();
  });

  test('renders a medium, outline secondary button with a data label', () => {
    const component = renderer.create(
      <Button
        size={Button.Size.Medium}
        variant={Button.Variant.OutlineSecondary}
        dataLabel={'1:00'}
      >
        Button
      </Button>
    );
    expect(component).toMatchSnapshot();
  });

  test('renders a medium, outline secondary button with an icon and a data label', () => {
    const component = renderer.create(
      <Button
        size={Button.Size.Medium}
        variant={Button.Variant.OutlineSecondary}
        icon={editIcon}
        dataLabel={'1:00'}
      >
        Button
      </Button>
    );
    expect(component).toMatchSnapshot();
  });

  test('renders a medium, outline inverse button', () => {
    const component = renderer.create(
      <Button size={Button.Size.Medium} variant={Button.Variant.OutlineInverse}>
        Button
      </Button>
    );
    expect(component).toMatchSnapshot();
  });

  test('renders a medium, outline inverse button with an icon', () => {
    const component = renderer.create(
      <Button size={Button.Size.Medium} variant={Button.Variant.OutlineInverse} icon={editIcon}>
        Button
      </Button>
    );
    expect(component).toMatchSnapshot();
  });

  test('renders a medium, outline inverse button with a data label', () => {
    const component = renderer.create(
      <Button size={Button.Size.Medium} variant={Button.Variant.OutlineInverse} dataLabel={'1:00'}>
        Button
      </Button>
    );
    expect(component).toMatchSnapshot();
  });

  test('renders a medium, outline inverse button with an icon and a data label', () => {
    const component = renderer.create(
      <Button
        size={Button.Size.Medium}
        variant={Button.Variant.OutlineInverse}
        icon={editIcon}
        dataLabel={'1:00'}
      >
        Button
      </Button>
    );
    expect(component).toMatchSnapshot();
  });

  test('renders a small, outline primary button', () => {
    const component = renderer.create(
      <Button size={Button.Size.Small} variant={Button.Variant.OutlinePrimary}>
        Button
      </Button>
    );
    expect(component).toMatchSnapshot();
  });

  test('renders a small, outline secondary button', () => {
    const component = renderer.create(
      <Button size={Button.Size.Small} variant={Button.Variant.OutlineSecondary}>
        Button
      </Button>
    );
    expect(component).toMatchSnapshot();
  });

  test('renders a small, outline inverse button', () => {
    const component = renderer.create(
      <Button size={Button.Size.Small} variant={Button.Variant.OutlineInverse}>
        Button
      </Button>
    );
    expect(component).toMatchSnapshot();
  });

  test('renders a large, growing outline primary button', () => {
    const component = renderer.create(
      <Button grow={true} size={Button.Size.Large} variant={Button.Variant.OutlinePrimary}>
        Button
      </Button>
    );
    expect(component).toMatchSnapshot();
  });
});
