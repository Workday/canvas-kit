import * as React from 'react';
import * as renderer from 'react-test-renderer';
import {deprecated_Button as Button} from '../lib/Button';

describe('Button (Secondary) Snapshots', () => {
  test('renders a large, secondary button', () => {
    const component = renderer.create(
      <Button size={Button.Size.Large} variant={Button.Variant.Secondary}>
        Button
      </Button>
    );
    expect(component).toMatchSnapshot();
  });

  test('renders a medium, secondary button', () => {
    const component = renderer.create(
      <Button size={Button.Size.Medium} variant={Button.Variant.Secondary}>
        Button
      </Button>
    );
    expect(component).toMatchSnapshot();
  });

  test('renders a small, secondary button', () => {
    const component = renderer.create(
      <Button size={Button.Size.Small} variant={Button.Variant.Secondary}>
        Button
      </Button>
    );
    expect(component).toMatchSnapshot();
  });
});
