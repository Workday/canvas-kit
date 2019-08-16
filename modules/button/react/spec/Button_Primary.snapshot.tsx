import * as React from 'react';
import * as renderer from 'react-test-renderer';
import Button from '../lib/Button';

describe('Button (Primary) Snapshots', () => {
  test('renders a large, primary button', () => {
    const component = renderer.create(
      <Button buttonSize={Button.Size.Large} buttonType={Button.Type.Primary}>
        Button
      </Button>
    );
    expect(component).toMatchSnapshot();
  });

  test('renders a medium, primary button', () => {
    const component = renderer.create(
      <Button buttonSize={Button.Size.Medium} buttonType={Button.Type.Primary}>
        Button
      </Button>
    );
    expect(component).toMatchSnapshot();
  });

  test('renders a small, primary button', () => {
    const component = renderer.create(
      <Button buttonSize={Button.Size.Small} buttonType={Button.Type.Primary}>
        Button
      </Button>
    );
    expect(component).toMatchSnapshot();
  });
});
