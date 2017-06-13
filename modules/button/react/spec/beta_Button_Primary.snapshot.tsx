import * as React from 'react';
import * as renderer from 'react-test-renderer';
import {beta_Button as Button} from '../lib/Button';
import {editIcon} from '@workday/canvas-system-icons-web';

describe('Button (Primary) Snapshots (beta)', () => {
  test('renders a large, primary button', () => {
    const component = renderer.create(
      <Button buttonSize={Button.Sizes.Large} buttonType={Button.Types.Primary}>
        Button
      </Button>
    );
    expect(component).toMatchSnapshot();
  });

  test('renders a large, primary button with an icon', () => {
    const component = renderer.create(
      <Button buttonSize={Button.Sizes.Large} buttonType={Button.Types.Primary} icon={editIcon}>
        Button
      </Button>
    );
    expect(component).toMatchSnapshot();
  });

  test('renders a large, primary button with a data label', () => {
    const component = renderer.create(
      <Button buttonSize={Button.Sizes.Large} buttonType={Button.Types.Primary} dataLabel={'1:00'}>
        Button
      </Button>
    );
    expect(component).toMatchSnapshot();
  });

  test('renders a large, primary button with an icon and a data label', () => {
    const component = renderer.create(
      <Button
        buttonSize={Button.Sizes.Large}
        buttonType={Button.Types.Primary}
        icon={editIcon}
        dataLabel={'1:00'}
      >
        Button
      </Button>
    );
    expect(component).toMatchSnapshot();
  });

  test('renders a medium, primary button', () => {
    const component = renderer.create(
      <Button buttonSize={Button.Sizes.Medium} buttonType={Button.Types.Primary}>
        Button
      </Button>
    );
    expect(component).toMatchSnapshot();
  });

  test('renders a medium, primary button with an icon', () => {
    const component = renderer.create(
      <Button buttonSize={Button.Sizes.Medium} buttonType={Button.Types.Primary} icon={editIcon}>
        Button
      </Button>
    );
    expect(component).toMatchSnapshot();
  });

  test('renders a medium, primary button with a data label', () => {
    const component = renderer.create(
      <Button buttonSize={Button.Sizes.Medium} buttonType={Button.Types.Primary} dataLabel={'1:00'}>
        Button
      </Button>
    );
    expect(component).toMatchSnapshot();
  });

  test('renders a medium, primary button with an icon and a data label', () => {
    const component = renderer.create(
      <Button
        buttonSize={Button.Sizes.Medium}
        buttonType={Button.Types.Primary}
        icon={editIcon}
        dataLabel={'1:00'}
      >
        Button
      </Button>
    );
    expect(component).toMatchSnapshot();
  });

  test('renders a small, primary button', () => {
    const component = renderer.create(
      <Button buttonSize={Button.Sizes.Small} buttonType={Button.Types.Primary}>
        Button
      </Button>
    );
    expect(component).toMatchSnapshot();
  });

  test('renders a large, growing primary button', () => {
    const component = renderer.create(
      <Button grow={true} buttonSize={Button.Sizes.Large} buttonType={Button.Types.Primary}>
        Button
      </Button>
    );
    expect(component).toMatchSnapshot();
  });
});
