import {expectTransformFactory} from './expectTransformFactory';
import transform from '../removeDefaultImports';

const expectTransform = expectTransformFactory(transform);

describe('removeDefaultImports', () => {
  it('should replace default export with a named export', () => {
    const input = `
      import Button from '@workday/canvas-kit-react/button';
    `;

    const expected = `
      import { Button } from '@workday/canvas-kit-react/button';
    `;

    expectTransform(input, expected);
  });

  it('should replace default export with a renamed export', () => {
    const input = `
      import StyledButton from '@workday/canvas-kit-react/button';
    `;

    const expected = `
      import { Button as StyledButton } from '@workday/canvas-kit-react/button';
    `;

    expectTransform(input, expected);
  });
});
