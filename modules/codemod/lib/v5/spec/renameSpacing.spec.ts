import {expectTransformFactory} from './expectTransformFactory';
import transformer from '../renameSpacing';
const context = describe;

const expectTransform = expectTransformFactory(transformer);

describe('Canvas Kit Spacing Codemod', () => {
  context('when transforming spacing imports', () => {
    context('when transforming named specifiers', () => {
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

  context('when transforming spacing expressions', () => {
    context('when transforming CSS object styles', () => {
      it('should ignore files without canvas-kit imports', () => {
        const input = `
        import { spacing } from "@workday/canvas-space-web";
        
        const styles = {
          padding: spacing.medium,
          margin: spacing.small,
        };`;
        const expected = `
        import { spacing } from "@workday/canvas-space-web";
        
        const styles = {
          padding: spacing.medium,
          margin: spacing.small,
        };`;

        expectTransform(input, expected);
      });

      it('should properly transform spacing to space', () => {
        const input = `
        import { spacing } from "@workday/canvas-kit-react/core";
    
        const styles = {
          height: spacing.xxl,
          margin: \`-\${spacing.xxs} -\${spacing.s} \${spacing.xxs}\`,
          padding: \`0px \${spacing.xs}\`,
          width: \`calc(100% + \${spacing.l})\`,
        }`;

        const expected = `
        import { space } from "@workday/canvas-kit-react/core";
    
        const styles = {
          height: space.xxl,
          margin: \`-\${space.xxs} -\${space.s} \${space.xxs}\`,
          padding: \`0px \${space.xs}\`,
          width: \`calc(100% + \${space.l})\`,
        }`;

        expectTransform(input, expected);
      });

      it('should properly transform spacingNumbers to spaceNumbers', () => {
        const input = `
        import { spacingNumbers } from "@workday/canvas-kit-react/core";
    
        const styles = {
          height: spacingNumbers.xl,
          margin: spacingNumbers.s,
          padding: \`0px \${spacingNumbers.m}px\`,
          width: \`calc(100% + \${spacingNumbers.l}px)\`,
        }`;

        const expected = `
        import { spaceNumbers } from "@workday/canvas-kit-react/core";
    
        const styles = {
          height: spaceNumbers.xl,
          margin: spaceNumbers.s,
          padding: \`0px \${spaceNumbers.m}px\`,
          width: \`calc(100% + \${spaceNumbers.l}px)\`,
        }`;

        expectTransform(input, expected);
      });
    });

    context('when transforming JSX', () => {
      it('should properly transform spacing to space', () => {
        const input = `
        import { spacing } from "@workday/canvas-kit-react/core";
    
        const BlueberryButtonStack = () => {
          return (
            <Stack spacing={spacing.m}>
              <button css={{background: colors.blueberry400, padding: spacing.m}}>
                Click here
              </button>
            </Stack>
          );
        }`;

        const expected = `
        import { space } from "@workday/canvas-kit-react/core";
    
        const BlueberryButtonStack = () => {
          return (
            <Stack spacing={space.m}>
              <button css={{background: colors.blueberry400, padding: space.m}}>
                Click here
              </button>
            </Stack>
          );
        }`;

        expectTransform(input, expected);
      });

      it('should properly transform spacingNumbers to spaceNumbers', () => {
        const input = `
        import { spacingNumbers } from "@workday/canvas-kit-react/core";
    
        const BlueberryButtonStack = () => {
          return (
            <Stack spacing={spacingNumbers.m}>
              <button css={{background: colors.blueberry400, padding: spacingNumbers.m}}>
                Click here
              </button>
            </Stack>
          );
        }`;

        const expected = `
        import { spaceNumbers } from "@workday/canvas-kit-react/core";
    
        const BlueberryButtonStack = () => {
          return (
            <Stack spacing={spaceNumbers.m}>
              <button css={{background: colors.blueberry400, padding: spaceNumbers.m}}>
                Click here
              </button>
            </Stack>
          );
        }`;

        expectTransform(input, expected);
      });
    });
  });

  context('when transforming spacing properties', () => {
    it('should properly transform spacing properties from canvas', () => {
      const input = `
      import canvas, {CanvasSpacing} from '@workday/canvas-kit-react/core';

      const styles = {
        padding: canvas.spacingNumbers.m,
        width: canvas.spacing.s,
      }`;

      const expected = `
      import canvas, {CanvasSpace} from '@workday/canvas-kit-react/core';

      const styles = {
        padding: canvas.spaceNumbers.m,
        width: canvas.space.s,
      }`;

      expectTransform(input, expected);
    });
  });

  context('when transforming spacing type references', () => {
    it('should properly transform CanvasSpacing to CanvasSpace', () => {
      const input = `
      import canvas, { CanvasSpacing } from '@workday/canvas-kit-react/core';

      type Padding = CanvasSpacing[keyof CanvasSpacing];
      `;

      const expected = `
      import canvas, { CanvasSpace } from '@workday/canvas-kit-react/core';

      type Padding = CanvasSpace[keyof CanvasSpace];
      `;

      expectTransform(input, expected);
    });

    it('should properly transform CanvasSpacingNumber to CanvasSpaceNumbers', () => {
      const input = `
      import canvas, { CanvasSpacingNumber } from '@workday/canvas-kit-react/core';

      type Padding = CanvasSpacingNumber[keyof CanvasSpacingNumber];
      `;

      const expected = `
      import canvas, { CanvasSpaceNumbers } from '@workday/canvas-kit-react/core';

      type Padding = CanvasSpaceNumbers[keyof CanvasSpaceNumbers];
      `;

      expectTransform(input, expected);
    });

    it('should properly transform CanvasSpacingValue to CanvasSpaceValues', () => {
      const input = `
      import { CanvasSpacingValue, space } from "@workday/canvas-kit-react/core"
      
      type BoxStyleProps = {
        margin?: CanvasSpacingValue;
      }`;

      const expected = `
      import { CanvasSpaceValues, space } from "@workday/canvas-kit-react/core"
      
      type BoxStyleProps = {
        margin?: CanvasSpaceValues;
      }
      `;

      expectTransform(input, expected);
    });
  });
});
