import {expectTransformFactory} from './expectTransformFactory';
import transform from '../promoteExpandable';
import {stripIndent} from 'common-tags';

const expectTransform = expectTransformFactory(transform);

describe('Promote Expandable to main package', () => {
  describe('Component package import', () => {
    it('should not transform Expandable from other imports', () => {
      const input = stripIndent`
          import { Expandable } from "@other-package";
        `;

      const expected = stripIndent`
          import { Expandable } from "@other-package";
        `;

      expectTransform(input, expected);
    });

    it('should not transform other labs imports', () => {
      const input = stripIndent`
          import { Select } from "@workday/canvas-kit-labs-react/search-form";
          import { Combobox } from "@workday/canvas-kit-labs-react/combobox";
        `;

      const expected = input;

      expectTransform(input, expected);
    });

    it('should  properly transform labs import for Expandable to react expandable', () => {
      const input = stripIndent`
          import { Expandable } from "@workday/canvas-kit-labs-react/expandable";
        `;

      const expected = stripIndent`
          import { Expandable } from "@workday/canvas-kit-react/expandable";
        `;

      expectTransform(input, expected);
    });

    it('should properly transform labs import for Expandable to react expandable from main packages', () => {
      const input = stripIndent`
          import { Expandable } from "@workday/canvas-kit-labs-react";
        `;

      const expected = stripIndent`
          import { Expandable } from "@workday/canvas-kit-react/expandable";
        `;

      expectTransform(input, expected);
    });

    it('should properly transform named labs import for Expandable only to react expandable', () => {
      const input = stripIndent`
          import { Expandable as CanvasExpandable } from "@workday/canvas-kit-labs-react/expandable";
        `;

      const expected = stripIndent`
            import { Expandable as CanvasExpandable } from "@workday/canvas-kit-react/expandable";
        `;

      expectTransform(input, expected);
    });
  });

  describe('Main package import', () => {
    it('should properly transform main labs import for Expandable to react expandable', () => {
      const input = stripIndent`
          import { Expandable } from "@workday/canvas-kit-labs-react";
        `;

      const expected = stripIndent`
          import { Expandable } from "@workday/canvas-kit-react/expandable";
        `;

      expectTransform(input, expected);
    });

    it('should properly transform named main labs import for Expandable only to react expandable', () => {
      const input = stripIndent`
          import { Expandable as CanvasExpandable } from "@workday/canvas-kit-labs-react";
        `;

      const expected = stripIndent`
          import { Expandable as CanvasExpandable } from "@workday/canvas-kit-react/expandable";
        `;

      expectTransform(input, expected);
    });

    it('should properly transform main labs import for Expandable only to react expandable', () => {
      const input = stripIndent`
          import {Expandable, SearchForm} from "@workday/canvas-kit-labs-react";
        `;

      const expected = stripIndent`
          import { Expandable } from "@workday/canvas-kit-react/expandable";
          import { SearchForm } from "@workday/canvas-kit-labs-react";
        `;

      expectTransform(input, expected);
    });
  });
});
