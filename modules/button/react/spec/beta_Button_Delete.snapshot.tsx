import * as React from 'react';
import * as renderer from 'react-test-renderer';
import {beta_Button as Button} from '../lib/Button';

describe('Button (Delete) Snapshots (beta)', () => {
  test('renders a large, delete button', () => {
    const component = renderer.create(
      <Button size={Button.Size.Large} buttonType={Button.Type.Delete}>
        Button
      </Button>
    );
    expect(component).toMatchSnapshot();
  });

  test('renders a medium, delete button', () => {
    const component = renderer.create(
      <Button size={Button.Size.Medium} buttonType={Button.Type.Delete}>
        Button
      </Button>
    );
    expect(component).toMatchSnapshot();
  });

  test('renders a small, delete button', () => {
    const component = renderer.create(
      <Button size={Button.Size.Small} buttonType={Button.Type.Delete}>
        Button
      </Button>
    );
    expect(component).toMatchSnapshot();
  });

  test('renders a large, growing delete button', () => {
    const component = renderer.create(
      <Button grow={true} size={Button.Size.Large} buttonType={Button.Type.Delete}>
        Button
      </Button>
    );
    expect(component).toMatchSnapshot();
  });
});
