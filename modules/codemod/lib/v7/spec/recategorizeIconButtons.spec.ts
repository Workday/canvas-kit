import {expectTransformFactory} from './expectTransformFactory';
import transform from '../recategorizeIconButtons';

const expectTransform = expectTransformFactory(transform);

describe('recategorizeIconButtons', () => {
  it('should replace "IconButton" variant with "TertiaryButton"', () => {
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
});
