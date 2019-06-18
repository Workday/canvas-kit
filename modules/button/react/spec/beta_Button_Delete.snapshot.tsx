import * as React from 'react';
import * as renderer from 'react-test-renderer';
import {beta_Button as Button} from '../lib/Button';

describe('Button (Delete) Snapshots (beta)', () => {
  test('renders a large, delete button', () => {
    const component = renderer.create(
      <Button buttonSize={Button.Sizes.Large} buttonType={Button.Types.Delete}>
        Button
      </Button>
    );
    expect(component).toMatchSnapshot();
  });

  test('renders a medium, delete button', () => {
    const component = renderer.create(
      <Button buttonSize={Button.Sizes.Medium} buttonType={Button.Types.Delete}>
        Button
      </Button>
    );
    expect(component).toMatchSnapshot();
  });

  test('renders a small, delete button', () => {
    const component = renderer.create(
      <Button buttonSize={Button.Sizes.Small} buttonType={Button.Types.Delete}>
        Button
      </Button>
    );
    expect(component).toMatchSnapshot();
  });

  test('renders a large, growing delete button', () => {
    const component = renderer.create(
      <Button grow={true} buttonSize={Button.Sizes.Large} buttonType={Button.Types.Delete}>
        Button
      </Button>
    );
    expect(component).toMatchSnapshot();
  });
});
