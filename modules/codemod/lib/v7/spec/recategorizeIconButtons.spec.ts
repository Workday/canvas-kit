import {expectTransformFactory} from './expectTransformFactory';
import transform from '../recategorizeIconButtons';
import {stripIndent} from 'common-tags';

const expectTransform = expectTransformFactory(transform);

describe('recategorizeIconButtons', () => {
  it('should replace "IconButton" with "TertiaryButton" as default use case', () => {
    const input = `
      import {IconButton} from '@workday/canvas-kit-react/button'

      <IconButton />
    `;

    const expected = `
      import {TertiaryButton} from '@workday/canvas-kit-react/button'

      <TertiaryButton />
    `;

    expectTransform(input, expected);
  });

  it('should replace "IconButton" with "TertiaryButton" if variant "circle" is defined', () => {
    const input = `
      import {IconButton} from '@workday/canvas-kit-react/button'

      <IconButton variant="circle" />
    `;

    const expected = `
      import {TertiaryButton} from '@workday/canvas-kit-react/button'

      <TertiaryButton />
    `;

    expectTransform(input, expected);
  });

  it('should replace "IconButton" with the correct mapping of buttons', () => {
    const input = stripIndent`
        import {IconButton} from '@workday/canvas-kit-react/button';
        <>
            <IconButton variant="circle" />
            <IconButton variant="circleFilled" />
            <IconButton variant="inverse" />
            <IconButton variant="inverseFilled" />
        </>
    `;
    const expected = stripIndent`
        import { TertiaryButton, SecondaryButton } from '@workday/canvas-kit-react/button';
        <>
            <TertiaryButton />
            <SecondaryButton />
            <TertiaryButton variant="inverse" />
            <SecondaryButton variant="inverseFilled" />
        </>
    `;

    expectTransform(input, expected);
  });
});
