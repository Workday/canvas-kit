import {expectTransformFactory} from './expectTransformFactory';
import transformer from '../renameDubLogos';
import {stripIndent} from 'common-tags';

const expectTransform = expectTransformFactory(transformer);

describe('renameDubLogos', () => {
  describe('when updating imports', () => {
    it('should rename dubLogoBlue to dubLogoPrimary', () => {
      const input = `import {dubLogoBlue} from "@workday/canvas-kit-react/common"`;
      const expected = `import {dubLogoPrimary} from "@workday/canvas-kit-react/common"`;

      expectTransform(input, expected);
    });

    it('should update the import when importing from the main package', () => {
      const input = `import {dubLogoBlue} from "@workday/canvas-kit-react"`;
      const expected = `import {dubLogoPrimary} from "@workday/canvas-kit-react"`;

      expectTransform(input, expected);
    });

    it('should ignore non-canvas-kit imports', () => {
      const input = `import {dubLogoBlue} from "@workday/some-other-library"`;
      const expected = `import {dubLogoBlue} from "@workday/some-other-library"`;

      expectTransform(input, expected);
    });

    it('should update renamed exports', () => {
      const input = stripIndent`
        import {dubLogoBlue as CanvasDubLogoBlue} from "@workday/canvas-kit-react/common";
      `;

      const expected = stripIndent`
        import {dubLogoPrimary as CanvasDubLogoBlue} from "@workday/canvas-kit-react/common";
      `;

      expectTransform(input, expected);
    });

    it('should update named import with multiple named imports', () => {
      const input = stripIndent`
        import {Grid, dubLogoBlue, Text} from "@workday/canvas-kit-react";
      `;

      const expected = stripIndent`
        import {Grid, dubLogoPrimary, Text} from "@workday/canvas-kit-react";
      `;

      expectTransform(input, expected);
    });

    it('should update named import with multiple import statements', () => {
      const input = stripIndent`
        import {Grid, Text} from "@workday/canvas-kit-react";
        import {dubLogoBlue} from "@workday/canvas-kit-react/common";
      `;

      const expected = stripIndent`
        import {Grid, Text} from "@workday/canvas-kit-react";
        import {dubLogoPrimary} from "@workday/canvas-kit-react/common";
      `;

      expectTransform(input, expected);
    });
  });

  describe('when updating usages', () => {
    it.only('should update JSX with attributes unaffected', () => {
      const input = stripIndent`
        import {Grid} from "@workday/canvas-kit-react/layout";
        import {dubLogoBlue} from "@workday/canvas-kit-react/common";
        
        <Grid dangerouslySetInnerHTML={{ __html: dubLogoBlue }} />
        `;

      const expected = stripIndent`
        import {Grid} from "@workday/canvas-kit-react/layout";
        import {dubLogoPrimary} from "@workday/canvas-kit-react/common";

        <Grid dangerouslySetInnerHTML={{ __html: dubLogoPrimary }} />
      `;

      expectTransform(input, expected);
    });

    // it('should update styled components', () => {
    //   const input = stripIndent`
    //     import {LoadingAnimation} from "@workday/canvas-kit-react/loading-animation";

    //     const StyledLoadingAnimation = styled(LoadingAnimation)({ width: space.xxs, height: space.xxs });
    //   `;

    //   const expected = stripIndent`
    //     import {LoadingDots} from "@workday/canvas-kit-react/loading-dots";

    //     const StyledLoadingAnimation = styled(LoadingDots)({ width: space.xxs, height: space.xxs });
    //   `;

    //   expectTransform(input, expected);
    // });

    // it('should not similar update identifiers for non-Canvas styled components', () => {
    //   const input = stripIndent`
    //     import {LoadingAnimation as CanvasLoadingAnimation} from "@workday/canvas-kit-react/loading-animation";
    //     import {LoadingAnimation} from "./LoadingAnimation";

    //     const StyledLoadingAnimation = styled(LoadingAnimation)({ width: space.xxs, height: space.xxs });
    //   `;

    //   const expected = stripIndent`
    //     import {LoadingDots as CanvasLoadingAnimation} from "@workday/canvas-kit-react/loading-dots";
    //     import {LoadingAnimation} from "./LoadingAnimation";

    //     const StyledLoadingAnimation = styled(LoadingAnimation)({ width: space.xxs, height: space.xxs });
    //   `;

    //   expectTransform(input, expected);
    // });
  });
});
