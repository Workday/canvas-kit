import {expectTransformFactory} from './expectTransformFactory';
import transformer from '../moveInputProvider';

const expectTransform = expectTransformFactory(transformer);

describe('Canvas Kit InputProvider Codemod', () => {
  it('should ignore non-canvas-kit imports', () => {
    const input = `import { InputProvider } from 'foo'`;
    const expected = `import { InputProvider } from 'foo'`;

    expectTransform(input, expected);
  });

  it('should properly transform source', () => {
    const input = `import { InputProvider } from "@workday/canvas-kit-react/tokens";`;
    const expected = `import { InputProvider } from "@workday/canvas-kit-react/common";`;

    expectTransform(input, expected);
  });

  it('should properly separate sources for multiple named imports', () => {
    const input = `
      import { colors, InputProvider } from "@workday/canvas-kit-react/tokens";
    `;
    const expected = `
      import { colors } from "@workday/canvas-kit-react/tokens";
      import { InputProvider } from "@workday/canvas-kit-react/common";
    `;

    expectTransform(input, expected);
  });

  it('should properly separate sources for multiple import specifiers', () => {
    const input = `
      import canvas, { colors, InputProvider } from "@workday/canvas-kit-react/tokens";
    `;
    const expected = `
      import canvas, { colors } from "@workday/canvas-kit-react/tokens";
      import { InputProvider } from "@workday/canvas-kit-react/common";
    `;

    expectTransform(input, expected);
  });
});
