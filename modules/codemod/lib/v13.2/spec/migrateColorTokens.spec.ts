import {stripIndent} from 'common-tags';

import transform from '../migrateColorTokens';
import {expectTransformFactory} from '../utils';

const expectTransform = expectTransformFactory(transform);

describe('Canvas Kit Tokens > Canvas Tokens v2', () => {
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

  describe('colors', () => {
    it('should convert color tokens to base tokens', () => {
      const input = stripIndent`
          import { colors } from "@workday/canvas-kit-react/tokens";

          const color = colors.blueberry400;
        `;

      const expected = stripIndent`
          import { cssVar } from "@workday/canvas-kit-styling";
          import { base } from "@workday/canvas-tokens-web";

          const color = cssVar(base.blueberry400);
        `;

      expectTransform(input, expected);
    });

    it('should not convert color tokens if variables are used', () => {
      const input = stripIndent`
          import { colors } from "@workday/canvas-kit-react/tokens";

          const propertyName = 'blueberry400';
          const color = colors[propertyName];
        `;

      const expected = stripIndent`
          import { colors } from "@workday/canvas-kit-react/tokens";

          const propertyName = 'blueberry400';
          const color = colors[propertyName];
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
          import { cssVar } from "@workday/canvas-kit-styling";
          import { base } from "@workday/canvas-tokens-web";

          const color = cssVar(base.blueberry400);
          const color2 = cssVar(base.pomegranate600);
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
              fill: base.pomegranate600
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

    it('should convert color tokens from canvas-colors-web to base tokens', () => {
      const input = stripIndent`
          import { colors } from "@workday/canvas-colors-web";
          const color = colors.blueberry400;
        `;

      const expected = stripIndent`
          import { cssVar } from "@workday/canvas-kit-styling";
          import { base } from "@workday/canvas-tokens-web";
          const color = cssVar(base.blueberry400);
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
            svg: {
              fill: props.isSelected
                ? colors.blueberry400
                : colors.frenchVanilla100,
            }
          });
        `;

      const expected = stripIndent`
          import { system } from "@workday/canvas-tokens-web";
          import { cssVar } from "@workday/canvas-kit-styling";

          const styles = css({
            background: cssVar(system.color.bg.default),
            color: cssVar(system.color.fg.primary.default),
            border: \`1px solid \${cssVar(system.color.border.primary.default)}\`,
            svg: {
              fill: props.isSelected ? cssVar(system.color.fg.primary.default) : cssVar(system.color.fg.inverse)
            }
          });
        `;

      expectTransform(input, expected);
    });

    it('should not transform objects only color tokens in css', () => {
      const input = stripIndent`
          import { breakpoints } from "./breakpoints";
          import { colors } from "@workday/canvas-kit-react/tokens";

          const styles = {
            background: colors.frenchVanilla100,
            color: colors.blueberry400,
            border: \`1px solid \${colors.blueberry400}\`,
            svg: {
              fill: colors.blueberry400,
            },
            [breakpoints.s]: {
              background: colors.soap200,
            },
            p: {
              textAlign: 'center',
            }
          };
        `;

      const expected = stripIndent`
          import { breakpoints } from "./breakpoints";
          import { system } from "@workday/canvas-tokens-web";
          import { cssVar } from "@workday/canvas-kit-styling";

          const styles = {
            background: cssVar(system.color.bg.default),
            color: cssVar(system.color.fg.primary.default),
            border: \`1px solid \${cssVar(system.color.border.primary.default)}\`,
            svg: {
              fill: cssVar(system.color.fg.primary.default)
            },
            [breakpoints.s]: {
              background: cssVar(system.color.bg.alt.soft)
            },
            p: {
              textAlign: 'center'
            }
          };
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
