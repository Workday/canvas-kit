import * as React from 'react';
import * as renderer from 'react-test-renderer';
import TextButton from '../lib/TextButton';
import {editIcon} from '@workday/canvas-system-icons-web';

describe('Button (Text) Snapshots', () => {
  test('renders a large, text button', () => {
    const component = renderer.create(
      <TextButton buttonSize={TextButton.Size.Large} buttonType={TextButton.Type.Default}>
        Button
      </TextButton>
    );
    expect(component).toMatchSnapshot();
  });

  test('renders a large, text button with a left icon', () => {
    const component = renderer.create(
      <TextButton
        buttonSize={TextButton.Size.Large}
        buttonType={TextButton.Type.Default}
        icon={editIcon}
        iconPosition={TextButton.IconPosition.Left}
      >
        Button
      </TextButton>
    );
    expect(component).toMatchSnapshot();
  });

  test('renders a large, text button with a right icon', () => {
    const component = renderer.create(
      <TextButton
        buttonSize={TextButton.Size.Large}
        buttonType={TextButton.Type.Default}
        icon={editIcon}
        iconPosition={TextButton.IconPosition.Right}
      >
        Button
      </TextButton>
    );
    expect(component).toMatchSnapshot();
  });

  test('renders a large, text all caps button', () => {
    const component = renderer.create(
      <TextButton buttonSize={TextButton.Size.Large} buttonType={TextButton.Type.AllCaps}>
        Button
      </TextButton>
    );
    expect(component).toMatchSnapshot();
  });

  test('renders a large, text all caps button with a left icon', () => {
    const component = renderer.create(
      <TextButton
        buttonSize={TextButton.Size.Large}
        buttonType={TextButton.Type.AllCaps}
        icon={editIcon}
        iconPosition={TextButton.IconPosition.Left}
      >
        Button
      </TextButton>
    );
    expect(component).toMatchSnapshot();
  });

  test('renders a large, text all caps button with a right icon', () => {
    const component = renderer.create(
      <TextButton
        buttonSize={TextButton.Size.Large}
        buttonType={TextButton.Type.AllCaps}
        icon={editIcon}
        iconPosition={TextButton.IconPosition.Right}
      >
        Button
      </TextButton>
    );
    expect(component).toMatchSnapshot();
  });

  test('renders a large, text inverse all caps button', () => {
    const component = renderer.create(
      <TextButton buttonSize={TextButton.Size.Large} buttonType={TextButton.Type.InverseAllCaps}>
        Button
      </TextButton>
    );
    expect(component).toMatchSnapshot();
  });

  test('renders a large, text inverse all caps button with a left icon', () => {
    const component = renderer.create(
      <TextButton
        buttonSize={TextButton.Size.Large}
        buttonType={TextButton.Type.InverseAllCaps}
        icon={editIcon}
        iconPosition={TextButton.IconPosition.Left}
      >
        Button
      </TextButton>
    );
    expect(component).toMatchSnapshot();
  });

  test('renders a large, text inverse all caps button with a right icon', () => {
    const component = renderer.create(
      <TextButton
        buttonSize={TextButton.Size.Large}
        buttonType={TextButton.Type.InverseAllCaps}
        icon={editIcon}
        iconPosition={TextButton.IconPosition.Right}
      >
        Button
      </TextButton>
    );
    expect(component).toMatchSnapshot();
  });

  test('renders a large, text inverse button', () => {
    const component = renderer.create(
      <TextButton buttonSize={TextButton.Size.Large} buttonType={TextButton.Type.Inverse}>
        Button
      </TextButton>
    );
    expect(component).toMatchSnapshot();
  });

  test('renders a large, text inverse button with a left icon', () => {
    const component = renderer.create(
      <TextButton
        buttonSize={TextButton.Size.Large}
        buttonType={TextButton.Type.Inverse}
        icon={editIcon}
        iconPosition={TextButton.IconPosition.Left}
      >
        Button
      </TextButton>
    );
    expect(component).toMatchSnapshot();
  });

  test('renders a large, text inverse button with a right icon', () => {
    const component = renderer.create(
      <TextButton
        buttonSize={TextButton.Size.Large}
        buttonType={TextButton.Type.Inverse}
        icon={editIcon}
        iconPosition={TextButton.IconPosition.Right}
      >
        Button
      </TextButton>
    );
    expect(component).toMatchSnapshot();
  });

  test('renders a large, text inverse all caps button', () => {
    const component = renderer.create(
      <TextButton buttonSize={TextButton.Size.Large} buttonType={TextButton.Type.InverseAllCaps}>
        Button
      </TextButton>
    );
    expect(component).toMatchSnapshot();
  });

  test('renders a large, text inverse all caps button with a left icon', () => {
    const component = renderer.create(
      <TextButton
        buttonSize={TextButton.Size.Large}
        buttonType={TextButton.Type.InverseAllCaps}
        icon={editIcon}
        iconPosition={TextButton.IconPosition.Left}
      >
        Button
      </TextButton>
    );
    expect(component).toMatchSnapshot();
  });

  test('renders a large, text inverse all caps button with a right icon', () => {
    const component = renderer.create(
      <TextButton
        buttonSize={TextButton.Size.Large}
        buttonType={TextButton.Type.InverseAllCaps}
        icon={editIcon}
        iconPosition={TextButton.IconPosition.Right}
      >
        Button
      </TextButton>
    );
    expect(component).toMatchSnapshot();
  });

  test('renders a small, text button', () => {
    const component = renderer.create(
      <TextButton buttonSize={TextButton.Size.Small} buttonType={TextButton.Type.Default}>
        Button
      </TextButton>
    );
    expect(component).toMatchSnapshot();
  });

  test('renders a small, text button with a left icon', () => {
    const component = renderer.create(
      <TextButton
        buttonSize={TextButton.Size.Small}
        buttonType={TextButton.Type.Default}
        icon={editIcon}
        iconPosition={TextButton.IconPosition.Left}
      >
        Button
      </TextButton>
    );
    expect(component).toMatchSnapshot();
  });

  test('renders a small, text button with a right icon', () => {
    const component = renderer.create(
      <TextButton
        buttonSize={TextButton.Size.Small}
        buttonType={TextButton.Type.Default}
        icon={editIcon}
        iconPosition={TextButton.IconPosition.Right}
      >
        Button
      </TextButton>
    );
    expect(component).toMatchSnapshot();
  });

  test('renders a small, text button with all caps', () => {
    const component = renderer.create(
      <TextButton buttonSize={TextButton.Size.Small} buttonType={TextButton.Type.AllCaps}>
        Button
      </TextButton>
    );
    expect(component).toMatchSnapshot();
  });

  test('renders a small, text button with all caps with a left icon', () => {
    const component = renderer.create(
      <TextButton
        buttonSize={TextButton.Size.Small}
        buttonType={TextButton.Type.AllCaps}
        icon={editIcon}
        iconPosition={TextButton.IconPosition.Left}
      >
        Button
      </TextButton>
    );
    expect(component).toMatchSnapshot();
  });

  test('renders a small, text button with all caps with a right icon', () => {
    const component = renderer.create(
      <TextButton
        buttonSize={TextButton.Size.Small}
        buttonType={TextButton.Type.AllCaps}
        icon={editIcon}
        iconPosition={TextButton.IconPosition.Right}
      >
        Button
      </TextButton>
    );
    expect(component).toMatchSnapshot();
  });

  test('renders a small, text inverse button', () => {
    const component = renderer.create(
      <TextButton buttonSize={TextButton.Size.Small} buttonType={TextButton.Type.Inverse}>
        Button
      </TextButton>
    );
    expect(component).toMatchSnapshot();
  });

  test('renders a small, text inverse button with all caps', () => {
    const component = renderer.create(
      <TextButton buttonSize={TextButton.Size.Small} buttonType={TextButton.Type.InverseAllCaps}>
        Button
      </TextButton>
    );
    expect(component).toMatchSnapshot();
  });

  test('renders a small, text inverse button with all caps and left icon', () => {
    const component = renderer.create(
      <TextButton
        buttonSize={TextButton.Size.Small}
        buttonType={TextButton.Type.InverseAllCaps}
        icon={editIcon}
        iconPosition={TextButton.IconPosition.Left}
      >
        Button
      </TextButton>
    );
    expect(component).toMatchSnapshot();
  });

  test('renders a small, text inverse button with all caps and right icon', () => {
    const component = renderer.create(
      <TextButton
        buttonSize={TextButton.Size.Small}
        buttonType={TextButton.Type.InverseAllCaps}
        icon={editIcon}
        iconPosition={TextButton.IconPosition.Right}
      >
        Button
      </TextButton>
    );
    expect(component).toMatchSnapshot();
  });

  test('renders a small, text inverse button with a left icon', () => {
    const component = renderer.create(
      <TextButton
        buttonSize={TextButton.Size.Small}
        buttonType={TextButton.Type.Inverse}
        icon={editIcon}
        iconPosition={TextButton.IconPosition.Left}
      >
        Button
      </TextButton>
    );
    expect(component).toMatchSnapshot();
  });

  test('renders a small, text inverse button with a right icon', () => {
    const component = renderer.create(
      <TextButton
        buttonSize={TextButton.Size.Small}
        buttonType={TextButton.Type.Inverse}
        icon={editIcon}
        iconPosition={TextButton.IconPosition.Right}
      >
        Button
      </TextButton>
    );
    expect(component).toMatchSnapshot();
  });
});
