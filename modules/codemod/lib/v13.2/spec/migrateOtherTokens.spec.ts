import {stripIndent} from 'common-tags';
import {expectTransformFactory} from '../utils';
import transform from '../migrateOtherTokens';

const expectTransform = expectTransformFactory(transform);

describe('Canvas Kit Tokens > Canvas Tokens v2', () => {
  describe('Border Radius > Shape', () => {
    it('should convert border radius tokens to shape tokens', () => {
      const input = stripIndent`
          import { borderRadius } from "@workday/canvas-kit-react/tokens";

          const radius = borderRadius.m;
        `;

      const expected = stripIndent`
          import { cssVar } from "@workday/canvas-kit-styling";
          import { system } from "@workday/canvas-tokens-web";

          const radius = cssVar(system.shape.x1);
        `;

      expectTransform(input, expected);
    });
  });

  describe('Space', () => {
    it('should convert all space tokens to system tokens', () => {
      const input = stripIndent`
          import { space } from "@workday/canvas-kit-react/tokens";

          const spacingZero = space.zero;
          const spacingXxxs = space.xxxs;
          const spacingXxs = space.xxs;
          const spacingXs = space.xs;
          const spacingS = space.s;
          const spacingM = space.m;
          const spacingL = space.l;
          const spacingXl = space.xl;
          const spacingXxl = space.xxl;
          const spacingXxxl = space.xxxl;
        `;

      const expected = stripIndent`
          import { cssVar } from "@workday/canvas-kit-styling";
          import { system } from "@workday/canvas-tokens-web";

          const spacingZero = cssVar(system.space.zero);
          const spacingXxxs = cssVar(system.space.x1);
          const spacingXxs = cssVar(system.space.x2);
          const spacingXs = cssVar(system.space.x3);
          const spacingS = cssVar(system.space.x4);
          const spacingM = cssVar(system.space.x6);
          const spacingL = cssVar(system.space.x8);
          const spacingXl = cssVar(system.space.x10);
          const spacingXxl = cssVar(system.space.x16);
          const spacingXxxl = cssVar(system.space.x20);
        `;

      expectTransform(input, expected);
    });

    it('should convert space tokens in css object', () => {
      const input = stripIndent`
        import { space } from "@workday/canvas-kit-react/tokens";

        const styles = css({
          margin: space.m,
          padding: \`\${space.m} \${space.l}\`,
        });
      `;

      const expected = stripIndent`
        import { cssVar } from "@workday/canvas-kit-styling";
        import { system } from "@workday/canvas-tokens-web";

        const styles = css({
          margin: cssVar(system.space.x6),
          padding: \`\${cssVar(system.space.x6)} \${cssVar(system.space.x8)}\`,
        });
      `;

      expectTransform(input, expected);
    });

    it('should convert space tokens in components', () => {
      const input = stripIndent`
      import { space } from "@workday/canvas-kit-react/tokens";

      <Popup model={model}>
        <Popup.Popper>
          <Popup.Card
            bottom={space.l}
            height={82}
            padding={0}
            aria-label={\`Download \${icon ? icon.filename : ''} icons\`}
            css={popupCardStyles}
          >
            {icon && (
              <div css={{display: 'flex', alignItems: 'center', button: {marginRight: space.xxs}}}>
                <IconBG>
                  <IconComponent icon={icon} />
                </IconBG>
              </div>
            )}
          </Popup.Card>
        </Popup.Popper>
    </Popup>
    `;

      const expected = stripIndent`
      import { cssVar } from "@workday/canvas-kit-styling";
      import { system } from "@workday/canvas-tokens-web";

      <Popup model={model}>
        <Popup.Popper>
          <Popup.Card
            bottom={cssVar(system.space.x8)}
            height={82}
            padding={0}
            aria-label={\`Download \${icon ? icon.filename : ''} icons\`}
            css={popupCardStyles}
          >
            {icon && (
              <div css={{display: 'flex', alignItems: 'center', button: {marginRight: cssVar(system.space.x2)}}}>
                <IconBG>
                  <IconComponent icon={icon} />
                </IconBG>
              </div>
            )}
          </Popup.Card>
        </Popup.Popper>
      </Popup>
    `;

      expectTransform(input, expected);
    });

    it('should convert color tokens from canvas-colors-web to base tokens', () => {
      const input = stripIndent`
          import { space } from "@workday/canvas-space-web";

          const spacingZero = space.zero;
        `;

      const expected = stripIndent`
          import { cssVar } from "@workday/canvas-kit-styling";
          import { system } from "@workday/canvas-tokens-web";

          const spacingZero = cssVar(system.space.zero);
        `;

      expectTransform(input, expected);
    });

    it('should handle aliased space token imports', () => {
      const input = stripIndent`
          import { space as canvasSpace } from "@workday/canvas-kit-react/tokens";

          const spacingZero = canvasSpace.zero;
        `;

      const expected = stripIndent`
          import { cssVar } from "@workday/canvas-kit-styling";
          import { system } from "@workday/canvas-tokens-web";

          const spacingZero = cssVar(system.space.zero);
        `;

      expectTransform(input, expected);
    });
  });
});
