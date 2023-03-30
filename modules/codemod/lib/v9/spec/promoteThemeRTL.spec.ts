import {expectTransformFactory} from './expectTransformFactory';
import transform from '../promoteUseThemeRTL';
import {stripIndent} from 'common-tags';

const expectTransform = expectTransformFactory(transform);

describe('Promote useThemeRTL to main package', () => {
  describe('Component package import', () => {
    it('should not transform useThemeRTL from other imports', () => {
      const input = stripIndent`
          import { useThemeRTL } from "@other-package";
        `;

      const expected = stripIndent`
          import { useThemeRTL } from "@other-package";
        `;

      expectTransform(input, expected);
    });

    it('should not transform other labs imports', () => {
      const input = stripIndent`
          import { Select } from "@workday/canvas-kit-labs-react/search-form";
          import { Expandable } from "@workday/canvas-kit-labs-react/expandable";
        `;

      const expected = input;

      expectTransform(input, expected);
    });

    it('should  properly transform labs import for useThemeRTL to react common', () => {
      const input = stripIndent`
          import { useThemeRTL } from "@workday/canvas-kit-labs-react/common";
        `;

      const expected = stripIndent`
          import { useThemeRTL } from "@workday/canvas-kit-react/common";
        `;

      expectTransform(input, expected);
    });

    it('should  properly transform labs import for useThemeRTL to react useThemeRTL from main packages', () => {
      const input = stripIndent`
          import { useThemeRTL } from "@workday/canvas-kit-labs-react";
        `;

      const expected = stripIndent`
          import { useThemeRTL } from "@workday/canvas-kit-react/common";
        `;

      expectTransform(input, expected);
    });

    it('should properly transform named labs import for useThemeRTL only to react useThemeRTL', () => {
      const input = stripIndent`
          import { useThemeRTL as CanvasuseThemeRTL } from "@workday/canvas-kit-labs-react/common";
        `;

      const expected = stripIndent`
            import { useThemeRTL as CanvasuseThemeRTL } from "@workday/canvas-kit-react/common";
        `;

      expectTransform(input, expected);
    });
  });

  describe('Main package import', () => {
    it('should properly transform main labs import for useThemeRTL to react useThemeRTL', () => {
      const input = stripIndent`
          import { useThemeRTL } from "@workday/canvas-kit-labs-react";
        `;

      const expected = stripIndent`
          import { useThemeRTL } from "@workday/canvas-kit-react/common";
        `;

      expectTransform(input, expected);
    });

    it('should properly transform main labs import for useThemeRTL only to react useThemeRTL', () => {
      const input = stripIndent`
          import {useThemeRTL, SearchForm} from "@workday/canvas-kit-labs-react";
        `;

      const expected = stripIndent`
          import { useThemeRTL } from "@workday/canvas-kit-react/common";
          import { SearchForm } from "@workday/canvas-kit-labs-react";
        `;

      expectTransform(input, expected);
    });
  });
});
