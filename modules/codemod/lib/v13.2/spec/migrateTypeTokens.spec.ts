import {stripIndent} from 'common-tags';
import {expectTransformFactory} from '../utils';
import transform from '../migrateTypeTokens';

const expectTransform = expectTransformFactory(transform);

describe('Typography: from /tokens to v2', () => {
  it('should convert font family tokens to system tokens', () => {
    const input = stripIndent`
        import { type } from "@workday/canvas-kit-react/tokens";

        const fontFamily = type.properties.fontFamilies.default;
        const fontFamilyMono = type.properties.fontFamilies.monospace;
      `;

    const expected = stripIndent`
        import { cssVar } from "@workday/canvas-kit-styling";
        import { system } from "@workday/canvas-tokens-web";

        const fontFamily = cssVar(system.fontFamily.default);
        const fontFamilyMono = cssVar(system.fontFamily.mono);
      `;

    expectTransform(input, expected);
  });

  it('should convert font size tokens to system tokens', () => {
    const input = stripIndent`
        import { type } from "@workday/canvas-kit-react/tokens";

        const fontSize = type.properties.fontSizes[10];
      `;

    const expected = stripIndent`
        import { cssVar } from "@workday/canvas-kit-styling";
        import { system } from "@workday/canvas-tokens-web";

        const fontSize = cssVar(system.fontSize.subtext.small);
      `;

    expectTransform(input, expected);
  });

  it('should convert font weight tokens to system tokens', () => {
    const input = stripIndent`
        import { type } from "@workday/canvas-kit-react/tokens";

        const fontWeight = type.properties.fontWeights.regular;
      `;

    const expected = stripIndent`
        import { cssVar } from "@workday/canvas-kit-styling";
        import { system } from "@workday/canvas-tokens-web";

        const fontWeight = cssVar(system.fontWeight.regular);
      `;

    expectTransform(input, expected);
  });

  it('should not convert font weight tokens if variables are used', () => {
    const input = stripIndent`
        import { type } from "@workday/canvas-kit-react/tokens";

        const propertyName = 'fontWeights';
        const size = 'bold';

        const fontWeight = type.properties.fontWeights.regular;
        const fontWeight2 = type.properties[propertyName][size];
      `;

    const expected = stripIndent`
        import { type } from "@workday/canvas-kit-react/tokens";

        import { cssVar } from "@workday/canvas-kit-styling";
        import { system } from "@workday/canvas-tokens-web";

        const propertyName = 'fontWeights';
        const size = 'bold';

        const fontWeight = cssVar(system.fontWeight.regular);
        const fontWeight2 = type.properties[propertyName][size];
      `;

    expectTransform(input, expected);
  });

  describe('levels', () => {
    it('should convert type levels to system token objects', () => {
      const input = stripIndent`
          import { type } from "@workday/canvas-kit-react/tokens";

          const styles = type.levels.subtext.small;
        `;

      const expected = stripIndent`
          import { cssVar } from "@workday/canvas-kit-styling";
          import { system } from "@workday/canvas-tokens-web";
          
          const styles = {
            fontFamily: cssVar(system.fontFamily.default),
            fontSize: cssVar(system.fontSize.subtext.small),
            lineHeight: cssVar(system.lineHeight.subtext.small),
            fontWeight: cssVar(system.fontWeight.regular),
            color: cssVar(system.color.fg.default)
          };
        `;

      expectTransform(input, expected);
    });

    it('should handle aliased type level imports', () => {
      const input = stripIndent`
          import { type as canvasType } from "@workday/canvas-kit-react/tokens";

          const styles = canvasType.levels.subtext.small;
        `;

      const expected = stripIndent`
          import { cssVar } from "@workday/canvas-kit-styling";
          import { system } from "@workday/canvas-tokens-web";
          
          const styles = {
            fontFamily: cssVar(system.fontFamily.default),
            fontSize: cssVar(system.fontSize.subtext.small),
            lineHeight: cssVar(system.lineHeight.subtext.small),
            fontWeight: cssVar(system.fontWeight.regular),
            color: cssVar(system.color.fg.default)
          };
        `;

      expectTransform(input, expected);
    });

    it('should convert individual type level properties', () => {
      const input = stripIndent`
          import { type } from "@workday/canvas-kit-react/tokens";

          const color = type.levels.subtext.small.color;
          const fontSize = type.levels.subtext.small.fontSize;
        `;

      const expected = stripIndent`
          import { cssVar } from "@workday/canvas-kit-styling";
          import { system } from "@workday/canvas-tokens-web";

          const color = cssVar(system.color.fg.default);
          const fontSize = cssVar(system.fontSize.subtext.small);
        `;

      expectTransform(input, expected);
    });

    it('should transform type levels to object with system color', () => {
      const input = stripIndent`
          import { breakpoints } from "./breakpoints";
          import { type } from "@workday/canvas-kit-react/tokens";

          const styles = css({
            ...type.levels.subtext.small,

            p: {
              fontSize: type.levels.subtext.small.fontSize,
            },

            [breakpoints.s]: {
              width: '100%',
            }
          });
        `;

      const expected = stripIndent`
          import { breakpoints } from "./breakpoints";
          import { system } from "@workday/canvas-tokens-web";
          import { cssVar } from "@workday/canvas-kit-styling";

          const styles = css({
            fontFamily: cssVar(system.fontFamily.default),
            fontSize: cssVar(system.fontSize.subtext.small),
            lineHeight: cssVar(system.lineHeight.subtext.small),
            fontWeight: cssVar(system.fontWeight.regular),
            color: cssVar(system.color.fg.default),

            p: {
              fontSize: cssVar(system.fontSize.subtext.small),
            },

            [breakpoints.s]: {
              width: '100%',
            }
          });
        `;

      expectTransform(input, expected);
    });
  });
});
