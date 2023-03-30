import {expectTransformFactory} from './expectTransformFactory';
import transform from '../promoteUseThemedRing';
import {stripIndent} from 'common-tags';

const expectTransform = expectTransformFactory(transform);

describe('Promote useThemedRing to main package', () => {
  describe('Component package import', () => {
    it('should not transform useThemedRing from other imports', () => {
      const input = stripIndent`
          import { useThemedRing } from "@other-package";
        `;

      const expected = stripIndent`
          import { useThemedRing } from "@other-package";
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

    it('should  properly transform labs import for useThemedRing to react common', () => {
      const input = stripIndent`
          import { useThemedRing } from "@workday/canvas-kit-labs-react/common";
        `;

      const expected = stripIndent`
          import { useThemedRing } from "@workday/canvas-kit-react/common";
        `;

      expectTransform(input, expected);
    });

    it('should  properly transform labs import for useThemedRing to react useThemedRing from main packages', () => {
      const input = stripIndent`
          import { useThemedRing } from "@workday/canvas-kit-labs-react";
        `;

      const expected = stripIndent`
          import { useThemedRing } from "@workday/canvas-kit-react/common";
        `;

      expectTransform(input, expected);
    });

    it('should properly transform named labs import for useThemedRing only to react useThemedRing', () => {
      const input = stripIndent`
          import { useThemedRing as CanvasuseThemedRing } from "@workday/canvas-kit-labs-react/common";
        `;

      const expected = stripIndent`
            import { useThemedRing as CanvasuseThemedRing } from "@workday/canvas-kit-react/common";
        `;

      expectTransform(input, expected);
    });
  });

  describe('Main package import', () => {
    it('should properly transform main labs import for useThemedRing to react useThemedRing', () => {
      const input = stripIndent`
          import { useThemedRing } from "@workday/canvas-kit-labs-react";
        `;

      const expected = stripIndent`
          import { useThemedRing } from "@workday/canvas-kit-react/common";
        `;

      expectTransform(input, expected);
    });

    it('should properly transform main labs import for useThemedRing only to react useThemedRing', () => {
      const input = stripIndent`
          import {useThemedRing, SearchForm} from "@workday/canvas-kit-labs-react";
        `;

      const expected = stripIndent`
          import { useThemedRing } from "@workday/canvas-kit-react/common";
          import { SearchForm } from "@workday/canvas-kit-labs-react";
        `;

      expectTransform(input, expected);
    });
  });
});
