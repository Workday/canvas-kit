import {stripIndent} from 'common-tags';
import {expectTransformFactory} from './expectTransformFactory';
import transform from '../migrateColorTokens';

const expectTransform = expectTransformFactory(transform);

describe('Canvas Kit Tokens > Canvas Tokens v3', () => {
  it('should skip files that do not have a colors import', () => {
    const input = stripIndent`
      import {ColorTokens} from '../examples/Color';

      export default {
        component: ColorTokens,
        title: 'Visual Tests/Base Tokens',
      };

      export const Colors = {
        parameters: {
          chromatic: {disableSnapshot: false},
        },
      };
    `;

    const expected = stripIndent`
      import {ColorTokens} from '../examples/Color';

      export default {
        component: ColorTokens,
        title: 'Visual Tests/Base Tokens',
      };

      export const Colors = {
        parameters: {
          chromatic: {disableSnapshot: false},
        },
      };
    `;

    expectTransform(input, expected);
  });

  it('should not transform tokens from other imports', () => {
    const input = stripIndent`
        import { colors, depth } from "@other-package";

        const color = colors.blueberry400;
        const styles = {color: colors.pomegranate600};
      `;

    const expected = stripIndent`
        import { colors, depth } from "@other-package";

        const color = colors.blueberry400;
        const styles = {color: colors.pomegranate600};
      `;

    expectTransform(input, expected);
  });

  it('should not transform tokens from other base imports', () => {
    const input = stripIndent`
        import { base } from "@other-package";

        const color = base.blueberry400;
        const styles = {color: base.pomegranate600};
      `;

    const expected = stripIndent`
        import { base } from "@other-package";

        const color = base.blueberry400;
        const styles = {color: base.pomegranate600};
      `;

    expectTransform(input, expected);
  });

  describe('colors', () => {
    it('should convert color tokens to base tokens', () => {
      const input = stripIndent`
          import { colors } from "@workday/canvas-kit-react/tokens";

          const color = colors.blueberry400;
        `;

      const expected = stripIndent`
          import { base } from "@workday/canvas-tokens-web";
          import { cssVar } from "@workday/canvas-kit-styling";

          const color = cssVar(base.blue600);
        `;

      expectTransform(input, expected);
    });

    it('should convert base tokens to new base tokens', () => {
      const input = stripIndent`
          import { base } from "@workday/canvas-tokens-web";
          import { cssVar } from "@workday/canvas-kit-styling";

          const color = cssVar(base.blueberry400);
        `;

      const expected = stripIndent`
          import { base } from "@workday/canvas-tokens-web";
          import { cssVar } from "@workday/canvas-kit-styling";

          const color = cssVar(base.blue600);
        `;

      expectTransform(input, expected);
    });

    it('should convert color tokens to base tokens', () => {
      const input = stripIndent`
          import { colors } from "@workday/canvas-kit-react/tokens";

          const color = colors.blueberry400;
          const color2 = colors.pomegranate600;
        `;

      const expected = stripIndent`
          import { base } from "@workday/canvas-tokens-web";
          import { cssVar } from "@workday/canvas-kit-styling";

          const color = cssVar(base.blue600);
          const color2 = cssVar(base.red800);
        `;

      expectTransform(input, expected);
    });

    it('should convert base tokens to new base tokens', () => {
      const input = stripIndent`
          import { base } from "@workday/canvas-tokens-web";
          import { cssVar } from "@workday/canvas-kit-styling";

          const color = cssVar(base.blueberry400);
          const color2 = base.pomegranate600;
        `;

      const expected = stripIndent`
          import { base } from "@workday/canvas-tokens-web";
          import { cssVar } from "@workday/canvas-kit-styling";

          const color = cssVar(base.blue600);
          const color2 = base.red800;
        `;

      expectTransform(input, expected);
    });

    it('should transform color tokens in createStyles', () => {
      const input = stripIndent`
          import { createStyles } from "@workday/canvas-kit-styling";
          import { colors } from "@workday/canvas-kit-react/tokens";

          const styles = createStyles({
            background: colors.frenchVanilla100,
            color: colors.blueberry400,
            svg: {
              fill: colors.pomegranate600
            }
          });
        `;

      const expected = stripIndent`
          import { createStyles } from "@workday/canvas-kit-styling";
          import { base, system } from "@workday/canvas-tokens-web";

          const styles = createStyles({
            background: system.color.bg.default,
            color: system.color.fg.primary.default,
            svg: {
              fill: base.red800
            }
          });
      `;

      expectTransform(input, expected);
    });

    it('should transform base tokens in createStyles', () => {
      const input = stripIndent`
          import { createStyles } from "@workday/canvas-kit-styling";
          import { base } from "@workday/canvas-tokens-web";

          const styles = createStyles({
            background: base.frenchVanilla100,
            color: base.blueberry400,
            svg: {
              fill: base.pomegranate600
            }
          });
        `;

      const expected = stripIndent`
          import { createStyles } from "@workday/canvas-kit-styling";
          import { base, system } from "@workday/canvas-tokens-web";

          const styles = createStyles({
            background: system.color.bg.default,
            color: system.color.fg.primary.default,
            svg: {
              fill: base.red800
            }
          });
      `;

      expectTransform(input, expected);
    });

    it('should transform color tokens in createStencil', () => {
      const input = stripIndent`
          import { createStencil } from "@workday/canvas-kit-styling";
          import { colors } from "@workday/canvas-kit-react/tokens";

          const styles = createStencil({
            base: {
              background: colors.frenchVanilla100,
              color: colors.blueberry400,
              svg: {
                fill: colors.blueberry400
              }
            }
          });
        `;

      const expected = stripIndent`
          import { createStencil } from "@workday/canvas-kit-styling";
          import { system } from "@workday/canvas-tokens-web";

          const styles = createStencil({
            base: {
              background: system.color.bg.default,
              color: system.color.fg.primary.default,

              svg: {
                fill: system.color.fg.primary.default
              }
            }
          });
        `;

      expectTransform(input, expected);
    });

    it('should transform base tokens in createStencil', () => {
      const input = stripIndent`
          import { createStencil } from "@workday/canvas-kit-styling";
          import { base } from "@workday/canvas-tokens-web";

          const styles = createStencil({
            base: {
              background: base.frenchVanilla100,
              color: base.blueberry400,
              svg: {
                fill: base.blueberry400
              }
            }
          });
        `;

      const expected = stripIndent`
          import { createStencil } from "@workday/canvas-kit-styling";
          import { system } from "@workday/canvas-tokens-web";

          const styles = createStencil({
            base: {
              background: system.color.bg.default,
              color: system.color.fg.primary.default,

              svg: {
                fill: system.color.fg.primary.default
              }
            }
          });
        `;

      expectTransform(input, expected);
    });

    it('should transform color tokens in css', () => {
      const input = stripIndent`
          import { colors } from "@workday/canvas-kit-react/tokens";

          const styles = css({
            background: colors.frenchVanilla100,
            color: colors.blueberry400,
            border: \`1px solid \${colors.blueberry400}\`,
            borderInline: \`5px solid \${darken(colors.blueberry400)}\`,
            svg: {
              fill: props.isSelected
                ? colors.blueberry400
                : colors.frenchVanilla100,
            }
          });
        `;

      const expected = stripIndent`
          import { cssVar } from "@workday/canvas-kit-styling";
          import { system } from "@workday/canvas-tokens-web";

          const styles = css({
            background: cssVar(system.color.bg.default),
            color: cssVar(system.color.fg.primary.default),
            border: \`1px solid \${cssVar(system.color.border.primary.default)}\`,
            borderInline: \`5px solid \${darken(system.color.border.primary.default)}\`,
            svg: {
              fill: props.isSelected ? cssVar(system.color.fg.primary.default) : cssVar(system.color.fg.inverse)
            }
          });
        `;

      expectTransform(input, expected);
    });

    it('should transform base tokens in css', () => {
      const input = stripIndent`
          import { cssVar } from "@workday/canvas-kit-styling";
          import { base } from "@workday/canvas-tokens-web";

          const styles = css({
            display: error ? 'block' : 'none',
            margin: 0,
            padding: '0 0',
            opacity: \`\${opacity}\`,
            background: cssVar(base.frenchVanilla100),
            color: cssVar(base.blueberry400),
            border: \`1px solid \${cssVar(base.blueberry400)}\`,
            borderInlineStartColor: error ? base.cinnamon500 : 'black',
            svg: {
              fill: props.isSelected
                ? cssVar(base.blueberry400)
                : cssVar(base.frenchVanilla100),
            }
          });
        `;

      const expected = stripIndent`
          import { cssVar } from "@workday/canvas-kit-styling";
          import { system } from "@workday/canvas-tokens-web";

          const styles = css({
            display: error ? 'block' : 'none',
            margin: 0,
            padding: '0 0',
            opacity: \`\${opacity}\`,
            background: cssVar(system.color.bg.default),
            color: cssVar(system.color.fg.primary.default),
            border: \`1px solid \${cssVar(system.color.border.primary.default)}\`,
            borderInlineStartColor: error ? cssVar(system.color.border.critical.default) : 'black',
            svg: {
              fill: props.isSelected ? cssVar(system.color.fg.primary.default) : cssVar(system.color.fg.inverse)
            }
          });
        `;

      expectTransform(input, expected);
    });

    it('should transform color tokens in other objects', () => {
      const input = stripIndent`
          import { colors } from "@workday/canvas-kit-react/tokens";

          const styles = {
            color: toggled ? colors.blueberry400 : colors.blackPepper300,
            default: {
              background: toggled ? colors.blueberry400 : colors.soap200,
            }
          };
        `;

      const expected = stripIndent`
          import { cssVar } from "@workday/canvas-kit-styling";
          import { system } from "@workday/canvas-tokens-web";

          const styles = {
            color: toggled ? cssVar(system.color.fg.primary.default) : cssVar(system.color.fg.default),
            default: {
              background: toggled ? cssVar(system.color.bg.primary.default) : cssVar(system.color.bg.alt.soft)
            }
          };
        `;

      expectTransform(input, expected);
    });

    it('should transform base tokens in other objects', () => {
      const input = stripIndent`
          import { base } from "@workday/canvas-tokens-web";

          const styles = {
            color: toggled ? base.blueberry400 : base.blackPepper300,
            default: {
              background: toggled ? base.blueberry400 : base.soap200,
            }
          };
        `;

      const expected = stripIndent`
          import { system } from "@workday/canvas-tokens-web";

          import { cssVar } from "@workday/canvas-kit-styling";

          const styles = {
            color: toggled ? cssVar(system.color.fg.primary.default) : cssVar(system.color.fg.default),
            default: {
              background: toggled ? cssVar(system.color.bg.primary.default) : cssVar(system.color.bg.alt.soft)
            }
          };
        `;

      expectTransform(input, expected);
    });
  });
});
