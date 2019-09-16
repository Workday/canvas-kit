import * as React from 'react';
import * as renderer from 'react-test-renderer';
import {IconButton} from '../index';
import {activityStreamIcon} from '@workday/canvas-system-icons-web';

describe('Button (Icon) Snapshots', () => {
  test('renders a default icon button, toggled on', () => {
    const component = renderer.create(
      <IconButton toggled={true} icon={activityStreamIcon} aria-label="Activity Stream" />
    );
    expect(component).toMatchSnapshot();
  });

  test('renders a plain icon button', () => {
    const component = renderer.create(
      <IconButton
        variant={IconButton.Variant.Plain}
        icon={activityStreamIcon}
        aria-label="Activity Stream"
      />
    );
    expect(component).toMatchSnapshot();
  });

  test('renders a small plain icon button', () => {
    const component = renderer.create(
      <IconButton
        variant={IconButton.Variant.Plain}
        size={IconButton.Size.Small}
        icon={activityStreamIcon}
        aria-label="Activity Stream"
      />
    );
    expect(component).toMatchSnapshot();
  });

  test('renders a medium plain icon button', () => {
    const component = renderer.create(
      <IconButton
        variant={IconButton.Variant.Plain}
        size={IconButton.Size.Medium}
        icon={activityStreamIcon}
        aria-label="Activity Stream"
      />
    );
    expect(component).toMatchSnapshot();
  });

  test('renders a default icon button', () => {
    const component = renderer.create(
      <IconButton
        variant={IconButton.Variant.Circle}
        icon={activityStreamIcon}
        aria-label="Activity Stream"
      />
    );
    expect(component).toMatchSnapshot();
  });

  test('renders a small default icon button', () => {
    const component = renderer.create(
      <IconButton
        size={IconButton.Size.Small}
        variant={IconButton.Variant.Circle}
        icon={activityStreamIcon}
        aria-label="Activity Stream"
      />
    );
    expect(component).toMatchSnapshot();
  });

  test('renders a medium default icon button', () => {
    const component = renderer.create(
      <IconButton
        size={IconButton.Size.Medium}
        variant={IconButton.Variant.Circle}
        icon={activityStreamIcon}
        aria-label="Activity Stream"
      />
    );
    expect(component).toMatchSnapshot();
  });

  test('renders a default icon button, toggled on', () => {
    const component = renderer.create(
      <IconButton
        toggled={true}
        variant={IconButton.Variant.Circle}
        icon={activityStreamIcon}
        aria-label="Activity Stream"
      />
    );
    expect(component).toMatchSnapshot();
  });

  test('renders a default icon button, toggled off', () => {
    const component = renderer.create(
      <IconButton
        toggled={false}
        variant={IconButton.Variant.Circle}
        icon={activityStreamIcon}
        aria-label="Activity Stream"
      />
    );
    expect(component).toMatchSnapshot();
  });

  test('renders a filled icon button', () => {
    const component = renderer.create(
      <IconButton
        variant={IconButton.Variant.CircleFilled}
        icon={activityStreamIcon}
        aria-label="Activity Stream"
      />
    );
    expect(component).toMatchSnapshot();
  });

  test('renders a small filled icon button', () => {
    const component = renderer.create(
      <IconButton
        size={IconButton.Size.Small}
        variant={IconButton.Variant.CircleFilled}
        icon={activityStreamIcon}
        aria-label="Activity Stream"
      />
    );
    expect(component).toMatchSnapshot();
  });

  test('renders a medium filled icon button', () => {
    const component = renderer.create(
      <IconButton
        size={IconButton.Size.Medium}
        variant={IconButton.Variant.CircleFilled}
        icon={activityStreamIcon}
        aria-label="Activity Stream"
      />
    );
    expect(component).toMatchSnapshot();
  });

  test('renders a filled icon button, toggled on', () => {
    const component = renderer.create(
      <IconButton
        toggled={true}
        variant={IconButton.Variant.CircleFilled}
        icon={activityStreamIcon}
        aria-label="Activity Stream"
      />
    );
    expect(component).toMatchSnapshot();
  });

  test('renders a filled icon button, toggled off', () => {
    const component = renderer.create(
      <IconButton
        toggled={false}
        variant={IconButton.Variant.CircleFilled}
        icon={activityStreamIcon}
        aria-label="Activity Stream"
      />
    );
    expect(component).toMatchSnapshot();
  });

  test('renders an inverse icon button', () => {
    const component = renderer.create(
      <IconButton
        variant={IconButton.Variant.Inverse}
        icon={activityStreamIcon}
        aria-label="Activity Stream"
      />
    );
    expect(component).toMatchSnapshot();
  });

  test('renders a small inverse icon button', () => {
    const component = renderer.create(
      <IconButton
        size={IconButton.Size.Small}
        variant={IconButton.Variant.Inverse}
        icon={activityStreamIcon}
        aria-label="Activity Stream"
      />
    );
    expect(component).toMatchSnapshot();
  });

  test('renders a medium inverse icon button', () => {
    const component = renderer.create(
      <IconButton
        size={IconButton.Size.Medium}
        variant={IconButton.Variant.Inverse}
        icon={activityStreamIcon}
        aria-label="Activity Stream"
      />
    );
    expect(component).toMatchSnapshot();
  });

  test('renders an inverse icon button, toggled on', () => {
    const component = renderer.create(
      <IconButton
        toggled={true}
        variant={IconButton.Variant.Inverse}
        icon={activityStreamIcon}
        aria-label="Activity Stream"
      />
    );
    expect(component).toMatchSnapshot();
  });

  test('renders an inverse icon button, toggled off', () => {
    const component = renderer.create(
      <IconButton
        toggled={false}
        variant={IconButton.Variant.Inverse}
        icon={activityStreamIcon}
        aria-label="Activity Stream"
      />
    );
    expect(component).toMatchSnapshot();
  });

  test('renders an inverse filled icon button', () => {
    const component = renderer.create(
      <IconButton
        variant={IconButton.Variant.InverseFilled}
        icon={activityStreamIcon}
        aria-label="Activity Stream"
      />
    );
    expect(component).toMatchSnapshot();
  });

  test('renders a small inverse filled icon button', () => {
    const component = renderer.create(
      <IconButton
        size={IconButton.Size.Small}
        variant={IconButton.Variant.InverseFilled}
        icon={activityStreamIcon}
        aria-label="Activity Stream"
      />
    );
    expect(component).toMatchSnapshot();
  });

  test('renders a medium inverse filled icon button', () => {
    const component = renderer.create(
      <IconButton
        size={IconButton.Size.Medium}
        variant={IconButton.Variant.InverseFilled}
        icon={activityStreamIcon}
        aria-label="Activity Stream"
      />
    );
    expect(component).toMatchSnapshot();
  });

  test('renders an inverse filled icon button, toggled on', () => {
    const component = renderer.create(
      <IconButton
        toggled={true}
        variant={IconButton.Variant.InverseFilled}
        icon={activityStreamIcon}
        aria-label="Activity Stream"
      />
    );
    expect(component).toMatchSnapshot();
  });

  test('renders an inverse filled icon button, toggled off', () => {
    const component = renderer.create(
      <IconButton
        toggled={false}
        variant={IconButton.Variant.InverseFilled}
        icon={activityStreamIcon}
        aria-label="Activity Stream"
      />
    );
    expect(component).toMatchSnapshot();
  });
});
