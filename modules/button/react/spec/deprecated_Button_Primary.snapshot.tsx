import * as React from 'react';
import * as renderer from 'react-test-renderer';
import {deprecated_Button as Button} from '../lib/Button';

describe('Button (Primary) Snapshots', () => {
  test('renders a large, primary button', () => {
    const component = renderer.create(
      <Button size={Button.Size.Large} variant={Button.Variant.Primary}>
        Button
      </Button>
    );
    expect(component).toMatchSnapshot();
  });

  test('renders a medium, primary button', () => {
    const component = renderer.create(
      <Button size={Button.Size.Medium} variant={Button.Variant.Primary}>
        Button
      </Button>
    );
    expect(component).toMatchSnapshot();
  });

  test('renders a small, primary button', () => {
    const component = renderer.create(
      <Button size={Button.Size.Small} variant={Button.Variant.Primary}>
        Button
      </Button>
    );
    expect(component).toMatchSnapshot();
  });
});
