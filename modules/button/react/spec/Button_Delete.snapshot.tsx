import * as React from 'react';
import * as renderer from 'react-test-renderer';
import Button from '../lib/Button';

describe('Button (Delete) Snapshots', () => {
  test('renders a large, delete button', () => {
    const component = renderer.create(
      <Button buttonSize={Button.Size.Large} buttonType={Button.Type.Delete}>
        Button
      </Button>
    );
    expect(component).toMatchSnapshot();
  });

  test('renders a medium, delete button', () => {
    const component = renderer.create(
      <Button buttonSize={Button.Size.Medium} buttonType={Button.Type.Delete}>
        Button
      </Button>
    );
    expect(component).toMatchSnapshot();
  });

  test('renders a small, delete button', () => {
    const component = renderer.create(
      <Button buttonSize={Button.Size.Small} buttonType={Button.Type.Delete}>
        Button
      </Button>
    );
    expect(component).toMatchSnapshot();
  });
});
