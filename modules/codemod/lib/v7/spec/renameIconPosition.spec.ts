import {expectTransformFactory} from './expectTransformFactory';
import transform from '../renameIconPosition';
import {stripIndent} from 'common-tags';

const expectTransform = expectTransformFactory(transform);

describe('Button Icon Position', () => {
  it('should rename left to start for SecondaryButton', () => {
    const input = stripIndent`
      import {SecondaryButton} from '@workday/canvas-kit-react/button'

      <SecondaryButton onClick={() => {}} iconPosition="left">Primary</SecondaryButton>
    `;

    const expected = stripIndent`
      import {SecondaryButton} from '@workday/canvas-kit-react/button'

      <SecondaryButton onClick={() => {}} iconPosition="start">Primary</SecondaryButton>
    `;

    expectTransform(input, expected);
  });

  it('should rename left to start for PrimaryButton', () => {
    const input = stripIndent`
      import {PrimaryButton} from '@workday/canvas-kit-react/button'

      <PrimaryButton onClick={() => {}} iconPosition="left">Primary</PrimaryButton>
    `;

    const expected = stripIndent`
      import {PrimaryButton} from '@workday/canvas-kit-react/button'

      <PrimaryButton onClick={() => {}} iconPosition="start">Primary</PrimaryButton>
    `;

    expectTransform(input, expected);
  });

  it('should rename right to end for PrimaryButton', () => {
    const input = stripIndent`
      import {SecondaryButton} from '@workday/canvas-kit-react/button'

      <SecondaryButton onClick={() => {}} iconPosition="right">Primary</SecondaryButton>
    `;

    const expected = stripIndent`
      import {SecondaryButton} from '@workday/canvas-kit-react/button'

      <SecondaryButton onClick={() => {}} iconPosition="end">Primary</SecondaryButton>
    `;

    expectTransform(input, expected);
  });

  it('should rename right to end for SecondaryButton', () => {
    const input = stripIndent`
      import {SecondaryButton} from '@workday/canvas-kit-react/button'

      <SecondaryButton onClick={() => {}} iconPosition="right">Primary</SecondaryButton>
    `;

    const expected = stripIndent`
      import {SecondaryButton} from '@workday/canvas-kit-react/button'

      <SecondaryButton onClick={() => {}} iconPosition="end">Primary</SecondaryButton>
    `;

    expectTransform(input, expected);
  });
});
