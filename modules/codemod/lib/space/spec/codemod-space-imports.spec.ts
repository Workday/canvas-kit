import {expectTransformFactory} from './expectTransformFactory';
import transformer from '../space-imports';
const context = describe;

const expectTransform = expectTransformFactory(transformer);

describe('Canvas Kit Space Imports Codemod', () => {
  context('when importing from named export statements', () => {
    it('should ignore non-canvas-kit imports', () => {
      const input = `import { spacing } from '@workday/canvas-space-web'`;
      const expected = `import { spacing } from '@workday/canvas-space-web'`;

      expectTransform(input, expected);
    });

    it('should properly transform spacing to space', () => {
      const input = `import { spacing } from "@workday/canvas-kit-react/core";`;
      const expected = `import { space } from "@workday/canvas-kit-react/core";`;

      expectTransform(input, expected);
    });

    it('should properly transform spacingNumbers to spaceNumbers', () => {
      const input = `import { spacingNumbers } from "@workday/canvas-kit-react/core";`;
      const expected = `import { spaceNumbers } from "@workday/canvas-kit-react/core";`;

      expectTransform(input, expected);
    });

    it('should handle importing spacing and spacingNumbers', () => {
      const input = `import { spacing, spacingNumbers } from "@workday/canvas-kit-react/core";`;
      const expected = `import { space, spaceNumbers } from "@workday/canvas-kit-react/core";`;

      expectTransform(input, expected);
    });

    it('should not muck up other imports from canvas-kit core', () => {
      const input = `import { colors, commonColors, type, typeColors, spacing, spacingNumbers } from "@workday/canvas-kit-react/core";`;
      const expected = `import { colors, commonColors, type, typeColors, space, spaceNumbers } from "@workday/canvas-kit-react/core";`;

      expectTransform(input, expected);
    });
  });

  context('when importing spacing types', () => {
    it('should ignore non-canvas-kit imports', () => {
      const input = `import { CanvasSpacing } from '@workday/canvas-space-web'`;
      const expected = `import { CanvasSpacing } from '@workday/canvas-space-web'`;

      expectTransform(input, expected);
    });

    it('should properly transform CanvasSpacing to CanvasSpace', () => {
      const input = `import { CanvasSpacing } from "@workday/canvas-kit-react/core";`;
      const expected = `import { CanvasSpace } from "@workday/canvas-kit-react/core";`;

      expectTransform(input, expected);
    });

    it('should properly transform CanvasSpacingValue to CanvasSpaceValues', () => {
      const input = `import { CanvasSpacingValue } from "@workday/canvas-kit-react/core";`;
      const expected = `import { CanvasSpaceValues } from "@workday/canvas-kit-react/core";`;

      expectTransform(input, expected);
    });

    it('should properly transform CanvasSpacingNumber to CanvasSpaceNumbers', () => {
      const input = `import { CanvasSpacingNumber } from "@workday/canvas-kit-react/core";`;
      const expected = `import { CanvasSpaceNumbers } from "@workday/canvas-kit-react/core";`;

      expectTransform(input, expected);
    });
  });
});
