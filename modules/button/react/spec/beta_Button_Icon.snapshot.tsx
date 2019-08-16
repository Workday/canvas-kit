import * as React from 'react';
import * as renderer from 'react-test-renderer';
import {IconButton} from '../index';
import {activityStreamIcon} from '@workday/canvas-system-icons-web';

describe('Button (Icon) Snapshots', () => {
  test('renders a default icon button, toggled on', () => {
    const component = renderer.create(<IconButton toggled={true} icon={activityStreamIcon} />);
    expect(component).toMatchSnapshot();
  });

  test('renders a plain icon button', () => {
    const component = renderer.create(
      <IconButton buttonType={IconButton.Type.Plain} icon={activityStreamIcon} />
    );
    expect(component).toMatchSnapshot();
  });

  test('renders a small plain icon button', () => {
    const component = renderer.create(
      <IconButton
        buttonType={IconButton.Type.Plain}
        buttonSize={IconButton.Size.Small}
        icon={activityStreamIcon}
      />
    );
    expect(component).toMatchSnapshot();
  });

  test('renders a medium plain icon button', () => {
    const component = renderer.create(
      <IconButton
        buttonType={IconButton.Type.Plain}
        buttonSize={IconButton.Size.Medium}
        icon={activityStreamIcon}
      />
    );
    expect(component).toMatchSnapshot();
  });

  test('renders a default icon button', () => {
    const component = renderer.create(
      <IconButton buttonType={IconButton.Type.Circle} icon={activityStreamIcon} />
    );
    expect(component).toMatchSnapshot();
  });

  test('renders a small default icon button', () => {
    const component = renderer.create(
      <IconButton
        buttonSize={IconButton.Size.Small}
        buttonType={IconButton.Type.Circle}
        icon={activityStreamIcon}
      />
    );
    expect(component).toMatchSnapshot();
  });

  test('renders a medium default icon button', () => {
    const component = renderer.create(
      <IconButton
        buttonSize={IconButton.Size.Medium}
        buttonType={IconButton.Type.Circle}
        icon={activityStreamIcon}
      />
    );
    expect(component).toMatchSnapshot();
  });

  test('renders a default icon button, toggled on', () => {
    const component = renderer.create(
      <IconButton toggled={true} buttonType={IconButton.Type.Circle} icon={activityStreamIcon} />
    );
    expect(component).toMatchSnapshot();
  });

  test('renders a default icon button, toggled off', () => {
    const component = renderer.create(
      <IconButton toggled={false} buttonType={IconButton.Type.Circle} icon={activityStreamIcon} />
    );
    expect(component).toMatchSnapshot();
  });

  test('renders a filled icon button', () => {
    const component = renderer.create(
      <IconButton buttonType={IconButton.Type.CircleFilled} icon={activityStreamIcon} />
    );
    expect(component).toMatchSnapshot();
  });

  test('renders a small filled icon button', () => {
    const component = renderer.create(
      <IconButton
        buttonSize={IconButton.Size.Small}
        buttonType={IconButton.Type.CircleFilled}
        icon={activityStreamIcon}
      />
    );
    expect(component).toMatchSnapshot();
  });

  test('renders a medium filled icon button', () => {
    const component = renderer.create(
      <IconButton
        buttonSize={IconButton.Size.Medium}
        buttonType={IconButton.Type.CircleFilled}
        icon={activityStreamIcon}
      />
    );
    expect(component).toMatchSnapshot();
  });

  test('renders a filled icon button, toggled on', () => {
    const component = renderer.create(
      <IconButton
        toggled={true}
        buttonType={IconButton.Type.CircleFilled}
        icon={activityStreamIcon}
      />
    );
    expect(component).toMatchSnapshot();
  });

  test('renders a filled icon button, toggled off', () => {
    const component = renderer.create(
      <IconButton
        toggled={false}
        buttonType={IconButton.Type.CircleFilled}
        icon={activityStreamIcon}
      />
    );
    expect(component).toMatchSnapshot();
  });

  test('renders an inverse icon button', () => {
    const component = renderer.create(
      <IconButton buttonType={IconButton.Type.Inverse} icon={activityStreamIcon} />
    );
    expect(component).toMatchSnapshot();
  });

  test('renders a small inverse icon button', () => {
    const component = renderer.create(
      <IconButton
        buttonSize={IconButton.Size.Small}
        buttonType={IconButton.Type.Inverse}
        icon={activityStreamIcon}
      />
    );
    expect(component).toMatchSnapshot();
  });

  test('renders a medium inverse icon button', () => {
    const component = renderer.create(
      <IconButton
        buttonSize={IconButton.Size.Medium}
        buttonType={IconButton.Type.Inverse}
        icon={activityStreamIcon}
      />
    );
    expect(component).toMatchSnapshot();
  });

  test('renders an inverse icon button, toggled on', () => {
    const component = renderer.create(
      <IconButton toggled={true} buttonType={IconButton.Type.Inverse} icon={activityStreamIcon} />
    );
    expect(component).toMatchSnapshot();
  });

  test('renders an inverse icon button, toggled off', () => {
    const component = renderer.create(
      <IconButton toggled={false} buttonType={IconButton.Type.Inverse} icon={activityStreamIcon} />
    );
    expect(component).toMatchSnapshot();
  });

  test('renders an inverse filled icon button', () => {
    const component = renderer.create(
      <IconButton buttonType={IconButton.Type.InverseFilled} icon={activityStreamIcon} />
    );
    expect(component).toMatchSnapshot();
  });

  test('renders a small inverse filled icon button', () => {
    const component = renderer.create(
      <IconButton
        buttonSize={IconButton.Size.Small}
        buttonType={IconButton.Type.InverseFilled}
        icon={activityStreamIcon}
      />
    );
    expect(component).toMatchSnapshot();
  });

  test('renders a medium inverse filled icon button', () => {
    const component = renderer.create(
      <IconButton
        buttonSize={IconButton.Size.Medium}
        buttonType={IconButton.Type.InverseFilled}
        icon={activityStreamIcon}
      />
    );
    expect(component).toMatchSnapshot();
  });

  test('renders an inverse filled icon button, toggled on', () => {
    const component = renderer.create(
      <IconButton
        toggled={true}
        buttonType={IconButton.Type.InverseFilled}
        icon={activityStreamIcon}
      />
    );
    expect(component).toMatchSnapshot();
  });

  test('renders an inverse filled icon button, toggled off', () => {
    const component = renderer.create(
      <IconButton
        toggled={false}
        buttonType={IconButton.Type.InverseFilled}
        icon={activityStreamIcon}
      />
    );
    expect(component).toMatchSnapshot();
  });
});
