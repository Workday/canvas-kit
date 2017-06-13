import * as React from 'react';
import * as renderer from 'react-test-renderer';
import Button from '../lib/Button';

describe('Button (Secondary) Snapshots', () => {
  test('renders a large, secondary button', () => {
    const component = renderer.create(
      <Button buttonSize={Button.Sizes.Large} buttonType={Button.Types.Secondary}>
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

  test('renders a small, secondary button', () => {
    const component = renderer.create(
      <Button buttonSize={Button.Sizes.Small} buttonType={Button.Types.Secondary}>
        Button
      </Button>
    );
    expect(component).toMatchSnapshot();
  });
});
