import * as React from 'react';
import * as renderer from 'react-test-renderer';
import {beta_Button as Button} from '../lib/Button';
import {editIcon} from '@workday/canvas-system-icons-web';

describe('Button (Secondary) Snapshots (beta)', () => {
  test('renders a large, secondary button', () => {
    const component = renderer.create(
      <Button buttonSize={Button.Sizes.Large} buttonType={Button.Types.Secondary}>
        Button
      </Button>
    );
    expect(component).toMatchSnapshot();
  });

  test('renders a large, secondary button with an icon', () => {
    const component = renderer.create(
      <Button buttonSize={Button.Sizes.Large} buttonType={Button.Types.Secondary} icon={editIcon}>
        Button
      </Button>
    );
    expect(component).toMatchSnapshot();
  });

  test('renders a large, secondary button with a data label', () => {
    const component = renderer.create(
      <Button
        buttonSize={Button.Sizes.Large}
        buttonType={Button.Types.Secondary}
        dataLabel={'1:00'}
      >
        Button
      </Button>
    );
    expect(component).toMatchSnapshot();
  });

  test('renders a large, secondary button with an icon and a data label', () => {
    const component = renderer.create(
      <Button
        buttonSize={Button.Sizes.Large}
        buttonType={Button.Types.Secondary}
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
      <Button buttonSize={Button.Sizes.Medium} buttonType={Button.Types.Secondary}>
        Button
      </Button>
    );
    expect(component).toMatchSnapshot();
  });

  test('renders a medium, secondary button with an icon', () => {
    const component = renderer.create(
      <Button buttonSize={Button.Sizes.Medium} buttonType={Button.Types.Secondary} icon={editIcon}>
        Button
      </Button>
    );
    expect(component).toMatchSnapshot();
  });

  test('renders a medium, secondary button with a data label', () => {
    const component = renderer.create(
      <Button
        buttonSize={Button.Sizes.Medium}
        buttonType={Button.Types.Secondary}
        dataLabel={'1:00'}
      >
        Button
      </Button>
    );
    expect(component).toMatchSnapshot();
  });

  test('renders a medium, secondary button with an icon and a data label', () => {
    const component = renderer.create(
      <Button
        buttonSize={Button.Sizes.Medium}
        buttonType={Button.Types.Secondary}
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
      <Button buttonSize={Button.Sizes.Small} buttonType={Button.Types.Secondary}>
        Button
      </Button>
    );
    expect(component).toMatchSnapshot();
  });

  test('renders a large, growing secondary button', () => {
    const component = renderer.create(
      <Button grow={true} buttonSize={Button.Sizes.Large} buttonType={Button.Types.Secondary}>
        Button
      </Button>
    );
    expect(component).toMatchSnapshot();
  });
});
