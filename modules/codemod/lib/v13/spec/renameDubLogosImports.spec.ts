import {expectTransformFactory} from './expectTransformFactory';
import transformer from '../renameDubLogosImports';
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
    it('should update renamed exports with use of local sources', () => {
      const input = stripIndent`
        import {dubLogoBlue as CanvasDubLogoBlue} from "@workday/canvas-kit-react/common";
        import {dubLogoBlue} from "./my-common";

        <Component logo={dubLogoBlue} />
      `;

      const expected = stripIndent`
        import {dubLogoPrimary as CanvasDubLogoBlue} from "@workday/canvas-kit-react/common";
        import {dubLogoBlue} from "./my-common";

        <Component logo={dubLogoBlue} />
      `;

      expectTransform(input, expected);
    });
  });
});
