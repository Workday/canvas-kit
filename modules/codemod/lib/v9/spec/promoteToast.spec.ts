import {expectTransformFactory} from './expectTransformFactory';
import transform from '../promoteToast';
import {stripIndent} from 'common-tags';

const expectTransform = expectTransformFactory(transform);

describe('Promote Toast to main package', () => {
  describe('Component package import', () => {
    it('should not transform Toast from other imports', () => {
      const input = stripIndent`
          import { Toast } from "@other-package";
        `;

      const expected = stripIndent`
          import { Toast } from "@other-package";
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

    it('should  properly transform labs import for Toast to react toast', () => {
      const input = stripIndent`
          import { Toast } from "@workday/canvas-kit-labs-react/toast";
        `;

      const expected = stripIndent`
          import { Toast } from "@workday/canvas-kit-react/toast";
        `;

      expectTransform(input, expected);
    });

    it('should properly transform named labs import for Toast only to react toast', () => {
      const input = stripIndent`
          import { Toast as CanvasToast } from "@workday/canvas-kit-labs-react/toast";
        `;

      const expected = stripIndent`
            import { Toast as CanvasToast } from "@workday/canvas-kit-react/toast";
        `;

      expectTransform(input, expected);
    });
  });

  describe('Main package import', () => {
    it('should properly transform main labs import for Toast to react toast', () => {
      const input = stripIndent`
          import { Toast } from "@workday/canvas-kit-labs-react";
        `;

      const expected = stripIndent`
          import { Toast } from "@workday/canvas-kit-react/toast";
        `;

      expectTransform(input, expected);
    });

    it('should properly transform named main labs import for Toast only to react toast', () => {
      const input = stripIndent`
          import { Toast as CanvasToast } from "@workday/canvas-kit-labs-react";
        `;

      const expected = stripIndent`
          import { Toast as CanvasToast } from "@workday/canvas-kit-react/toast";
        `;

      expectTransform(input, expected);
    });

    it('should properly transform main labs import for Toast only to react toast', () => {
      const input = stripIndent`
          import {Toast, SearchForm} from "@workday/canvas-kit-labs-react";
        `;

      const expected = stripIndent`
          import { Toast } from "@workday/canvas-kit-react/toast";
          import { SearchForm } from "@workday/canvas-kit-labs-react";
        `;

      expectTransform(input, expected);
    });
  });
});
