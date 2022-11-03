import {expectTransformFactory} from './expectTransformFactory';
import transformer from '../renameLoadingAnimation';
import {stripIndent} from 'common-tags';

const expectTransform = expectTransformFactory(transformer);

describe('renameLoadingAnimation', () => {
  describe('when updating imports', () => {
    it('should rename LoadingAnimation to LoadingDots', () => {
      const input = `import {LoadingAnimation} from "@workday/canvas-kit-react/loading-animation"`;
      const expected = `import {LoadingDots} from "@workday/canvas-kit-react/loading-dots"`;

      expectTransform(input, expected);
    });

    it('should update the import when importing from the main package', () => {
      const input = `import {LoadingAnimation} from "@workday/canvas-kit-react"`;
      const expected = `import {LoadingDots} from "@workday/canvas-kit-react"`;

      expectTransform(input, expected);
    });

    it('should ignore non-canvas-kit imports', () => {
      const input = `import {LoadingAnimation} from "@workday/some-other-library"`;
      const expected = `import {LoadingAnimation} from "@workday/some-other-library"`;

      expectTransform(input, expected);
    });

    it('should update renamed exports', () => {
      const input = stripIndent`
        import {LoadingAnimation as CanvasLoadingAnimation} from "@workday/canvas-kit-react/loading-animation";
      `;

      const expected = stripIndent`
        import {LoadingDots as CanvasLoadingAnimation} from "@workday/canvas-kit-react/loading-dots";
      `;

      expectTransform(input, expected);
    });

    it('should update slash import with LoadingDots', () => {
      const input = stripIndent`
        import {LoadingDots} from "@workday/canvas-kit-react/loading-animation";
      `;

      const expected = stripIndent`
        import {LoadingDots} from "@workday/canvas-kit-react/loading-dots";
      `;

      expectTransform(input, expected);
    });

    it('should update named import with multiple named imports', () => {
      const input = stripIndent`
        import {Grid, LoadingAnimation, Text} from "@workday/canvas-kit-react";
      `;

      const expected = stripIndent`
        import {Grid, LoadingDots, Text} from "@workday/canvas-kit-react";
      `;

      expectTransform(input, expected);
    });

    it('should update named import with multiple import statements', () => {
      const input = stripIndent`
        import {Grid, Text} from "@workday/canvas-kit-react";
        import {LoadingAnimation} from "@workday/canvas-kit-react/loading-animation";
      `;

      const expected = stripIndent`
        import {Grid, Text} from "@workday/canvas-kit-react";
        import {LoadingDots} from "@workday/canvas-kit-react/loading-dots";
      `;

      expectTransform(input, expected);
    });
  });

  describe('when updating usages', () => {
    it('should update JSX usage', () => {
      const input = stripIndent`
        import {LoadingAnimation} from "@workday/canvas-kit-react/loading-animation";

        <LoadingAnimation />
      `;

      const expected = stripIndent`
        import {LoadingDots} from "@workday/canvas-kit-react/loading-dots";

        <LoadingDots />
      `;

      expectTransform(input, expected);
    });

    it('should update JSX with attributes unaffected', () => {
      const input = stripIndent`
        import {LoadingAnimation} from "@workday/canvas-kit-react/loading-animation";

        <LoadingAnimation className='loading-centered' data-some-prop="untouched" />
      `;

      const expected = stripIndent`
        import {LoadingDots} from "@workday/canvas-kit-react/loading-dots";

        <LoadingDots className='loading-centered' data-some-prop="untouched" />
      `;

      expectTransform(input, expected);
    });

    it('should update styled components', () => {
      const input = stripIndent`
        import {LoadingAnimation} from "@workday/canvas-kit-react/loading-animation";

        const StyledLoadingAnimation = styled(LoadingAnimation)({ width: space.xxs, height: space.xxs });
      `;

      const expected = stripIndent`
        import {LoadingDots} from "@workday/canvas-kit-react/loading-dots";

        const StyledLoadingAnimation = styled(LoadingDots)({ width: space.xxs, height: space.xxs });
      `;

      expectTransform(input, expected);
    });

    it('should not similar update identifiers for non-Canvas styled components', () => {
      const input = stripIndent`
        import {LoadingAnimation as CanvasLoadingAnimation} from "@workday/canvas-kit-react/loading-animation";
        import {LoadingAnimation} from "./LoadingAnimation";

        const StyledLoadingAnimation = styled(LoadingAnimation)({ width: space.xxs, height: space.xxs });
      `;

      const expected = stripIndent`
        import {LoadingDots as CanvasLoadingAnimation} from "@workday/canvas-kit-react/loading-dots";
        import {LoadingAnimation} from "./LoadingAnimation";

        const StyledLoadingAnimation = styled(LoadingAnimation)({ width: space.xxs, height: space.xxs });
      `;

      expectTransform(input, expected);
    });
  });
});
