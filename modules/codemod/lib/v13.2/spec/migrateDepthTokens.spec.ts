import {stripIndent} from 'common-tags';
import {expectTransformFactory} from '../utils';
import transform from '../migrateDepthTokens';

const expectTransform = expectTransformFactory(transform);

describe('Canvas Kit Tokens > Canvas Tokens v2', () => {
  describe('Depth', () => {
    it('should transform depth token to object with boxShadow property', () => {
      const input = stripIndent`
          import { depth } from "@workday/canvas-kit-react/tokens";

          const newDepth = depth[1];
        `;

      const expected = stripIndent`
          import { system } from "@workday/canvas-tokens-web";
          import { cssVar } from "@workday/canvas-kit-styling";

          const newDepth = {
            boxShadow: cssVar(system.depth[1])
          };
        `;

      expectTransform(input, expected);
    });

    it('should not transform depth token to object with boxShadow property if variables are used', () => {
      const input = stripIndent`
          import { depth } from "@workday/canvas-kit-react/tokens";

          const size = '1';

          const newDepth = depth[size];
        `;

      const expected = stripIndent`
          import { depth } from "@workday/canvas-kit-react/tokens";

          const size = '1';

          const newDepth = depth[size];
        `;

      expectTransform(input, expected);
    });

    it('should transform aliased depth token to object with boxShadow property', () => {
      const input = stripIndent`
          import { depth as canvasDepth } from "@workday/canvas-kit-react/tokens";

          const newDepth = canvasDepth[1];
        `;

      const expected = stripIndent`
          import { system } from "@workday/canvas-tokens-web";
          import { cssVar } from "@workday/canvas-kit-styling";

          const newDepth = {
            boxShadow: cssVar(system.depth[1])
          };
        `;

      expectTransform(input, expected);
    });

    it('should transform depth token boxShadow property to cssVar', () => {
      const input = stripIndent`
          import { depth } from "@workday/canvas-kit-react/tokens";

          const newDepth = depth[1].boxShadow;
        `;

      const expected = stripIndent`
          import { system } from "@workday/canvas-tokens-web";
          import { cssVar } from "@workday/canvas-kit-styling";

          const newDepth = cssVar(system.depth[1]);
        `;

      expectTransform(input, expected);
    });

    it('should transform depth token spread in css object', () => {
      const input = stripIndent`
          import { breakpoints } from "./breakpoints";
          import { depth as canvasDepth } from "@workday/canvas-kit-react/tokens";

          const styles = css({
            ...canvasDepth[2],
            color: 'red',
            [breakpoints.s]: {
              ...canvasDepth[1],
            }
          });
        `;

      const expected = stripIndent`
          import { breakpoints } from "./breakpoints";
          import { cssVar } from "@workday/canvas-kit-styling";
          import { system } from "@workday/canvas-tokens-web";

          const styles = css({
            boxShadow: cssVar(system.depth[2]),
            color: 'red',
          
            [breakpoints.s]: {
              boxShadow: cssVar(system.depth[1])
            }
          });
        `;

      expectTransform(input, expected);
    });

    it('should convert color tokens from canvas-colors-web to base tokens', () => {
      const input = stripIndent`
          import { depth } from "@workday/canvas-depth-web";

          const newDepth = depth[1];
        `;

      const expected = stripIndent`
          import { system } from "@workday/canvas-tokens-web";
          import { cssVar } from "@workday/canvas-kit-styling";
          
          const newDepth = {
            boxShadow: cssVar(system.depth[1])
          };
        `;

      expectTransform(input, expected);
    });

    it('should transform depth token 0 to none boxShadow', () => {
      const input = stripIndent`
          import { depth } from "@workday/canvas-kit-react/tokens";

          const styles = css({
            ...depth[0],
          });
        `;

      const expected = stripIndent`
          import { system } from "@workday/canvas-tokens-web";

          const styles = css({
            boxShadow: "none"
          });
        `;

      expectTransform(input, expected);
    });

    it('should transform depth token 0 to object with none boxShadow', () => {
      const input = stripIndent`
         import { depth } from "@workday/canvas-kit-react/tokens";

         const newDepth = depth[0];
        `;

      const expected = stripIndent`
          const newDepth = {
            boxShadow: "none"
          };
        `;

      expectTransform(input, expected);
    });

    it('should transform depth token in nested css selector', () => {
      const input = stripIndent`
          import { depth as canvasDepth } from "@workday/canvas-kit-react/tokens";

          const styles = css({
            '&:hover': canvasDepth[1]
          });
        `;

      const expected = stripIndent`
          import { system } from "@workday/canvas-tokens-web";
          import { cssVar } from "@workday/canvas-kit-styling";

          const styles = css({
            '&:hover': {
              boxShadow: cssVar(system.depth[1])
            }
          });
        `;

      expectTransform(input, expected);
    });

    it('should transform depth in component props', () => {
      const input = stripIndent`
          import { depth } from "@workday/canvas-kit-react/tokens";
          
          <>
            <Component depth={depth[1]} />
            <OtherComponent css={{...depth[1]}} />
          </>
        `;

      const expected = stripIndent`
          import { cssVar } from "@workday/canvas-kit-styling";
          import { system } from "@workday/canvas-tokens-web";

          <>
            <Component depth={{
              boxShadow: cssVar(system.depth[1])
            }} />
            <OtherComponent css={{
              boxShadow: cssVar(system.depth[1])
            }} />
          </>
        `;

      expectTransform(input, expected);
    });
  });
});
