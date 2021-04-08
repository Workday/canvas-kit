import {expectTransformFactory} from './expectTransformFactory';
import transform from '../renameButtonRefs';

const expectTransform = expectTransformFactory(transform);

describe('recategorizeButtons', () => {
  it('should replace "Button" variant with "SecondaryButton', () => {
    const input = `
      import {Button} from '@workday/canvas-kit-react/button'

      <Button />
    `;

    const expected = `
      import {SecondaryButton} from '@workday/canvas-kit-react/button'

      <SecondaryButton />
    `;

    expectTransform(input, expected);
  });

  it('should replace "Button" with "secondary" variant with "SecondaryButton', () => {
    const input = `
      import {Button} from '@workday/canvas-kit-react/button'

      <Button variant="secondary" />
    `;

    const expected = `
      import {SecondaryButton} from '@workday/canvas-kit-react/button'

      <SecondaryButton />
    `;

    expectTransform(input, expected);
  });

  it('should replace "Button" with "primary" variant with "PrimaryButton', () => {
    const input = `
      import {Button} from '@workday/canvas-kit-react/button'

      <Button variant="primary" />
    `;

    const expected = `
      import {PrimaryButton} from '@workday/canvas-kit-react/button'

      <PrimaryButton />
    `;

    expectTransform(input, expected);
  });

  // TODO: WHAT ARE WE DOING WITH DROPDOWN BUTTON?

  it('should replace "HighlightButton" with "SecondaryButton', () => {
    const input = `
      import {HighlightButton} from '@workday/canvas-kit-react/button'

      <HighlightButton />
    `;

    const expected = `
      import {SecondaryButton} from '@workday/canvas-kit-react/button'

      <SecondaryButton />
    `;

    expectTransform(input, expected);
  });

  it('should replace "OutlineButton" with "SecondaryButton', () => {
    const input = `
      import {OutlineButton} from '@workday/canvas-kit-react/button'

      <OutlineButton />
    `;

    const expected = `
      import {SecondaryButton} from '@workday/canvas-kit-react/button'

      <SecondaryButton />
    `;

    expectTransform(input, expected);
  });

  // TODO: Note to users that if they want the color back, they need to use theming.

  it('should replace primary "OutlineButton" with "SecondaryButton', () => {
    const input = `
      import {OutlineButton} from '@workday/canvas-kit-react/button'

      <OutlineButton variant='primary'/>
    `;

    const expected = `
      import {SecondaryButton} from '@workday/canvas-kit-react/button'

      <SecondaryButton />
    `;

    expectTransform(input, expected);
  });

  it('should replace "TextButton" with "TertiaryButton"', () => {
    const input = `
      import {TextButton} from '@workday/canvas-kit-react/button'

      <TextButton />
    `;

    const expected = `
      import {TertiaryButton} from '@workday/canvas-kit-react/button'

      <TertiaryButton />
    `;

    expectTransform(input, expected);
  });

  it('should replace "DropdownButton" with correct props on "SecondaryButton"', () => {
    const input = `
      import {DropdownButton} from '@workday/canvas-kit-react/button'

      <DropdownButton />
    `;

    const expected = `
      import {SecondaryButton} from '@workday/canvas-kit-react/button'
      import {caretDownIcon} from '@workday/canvas-system-icons-web'

      <SecondaryButton icon="caretDownIcon" iconPosition="right" />
    `;

    expectTransform(input, expected);
  });

  it('should replace Primary "DropdownButton" with correct props on "PrimaryButton"', () => {
    const input = `
      import {DropdownButton} from '@workday/canvas-kit-react/button'

      <DropdownButton variant="primary" />
    `;

    const expected = `
      import {PrimaryButton} from '@workday/canvas-kit-react/button'
      import {caretDownIcon} from '@workday/canvas-system-icons-web'

      <PrimaryButton icon="caretDownIcon" iconPosition="right" />
    `;

    expectTransform(input, expected);
  });
});
