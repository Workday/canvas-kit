import {stripIndent} from 'common-tags';

import transform from '../promoteFormField';
import {expectTransformFactory} from './expectTransformFactory';

const expectTransform = expectTransformFactory(transform);

describe('Promote FormField to main package', () => {
  describe('Component package import', () => {
    it('should not transform FormField from other imports', () => {
      const input = stripIndent`
          import { FormField } from "@other-package";
        `;

      const expected = stripIndent`
          import { FormField } from "@other-package";
        `;

      expectTransform(input, expected);
    });

    it('should not transform other preview imports', () => {
      const input = stripIndent`
          import { Pill } from "@workday/canvas-kit-preview-react/pill";
          import { Select } from "@workday/canvas-kit-preview-react/select";
        `;

      const expected = input;

      expectTransform(input, expected);
    });

    it('should  properly transform Preview import for FormField to react FormField', () => {
      const input = stripIndent`
          import { FormField } from "@workday/canvas-kit-preview-react/form-field";
        `;

      const expected = stripIndent`
          import { FormField } from "@workday/canvas-kit-react/form-field";
        `;

      expectTransform(input, expected);
    });

    it('should  properly transform preview import for FormField to react FormField from main packages', () => {
      const input = stripIndent`
          import { FormField } from "@workday/canvas-kit-preview-react";
        `;

      const expected = stripIndent`
          import { FormField } from "@workday/canvas-kit-react/form-field";
        `;

      expectTransform(input, expected);
    });

    it('should properly transform named preview import for FormField only to react FormField', () => {
      const input = stripIndent`
          import { FormField as CanvasFormField } from "@workday/canvas-kit-preview-react/form-field";
        `;

      const expected = stripIndent`
            import { FormField as CanvasFormField } from "@workday/canvas-kit-react/form-field";
        `;

      expectTransform(input, expected);
    });
  });

  describe('Main package import', () => {
    it('should properly transform main preview import for CanvasFormField to react FormField', () => {
      const input = stripIndent`
          import { FormField } from "@workday/canvas-kit-preview-react";
        `;

      const expected = stripIndent`
          import { FormField } from "@workday/canvas-kit-react/form-field";
        `;

      expectTransform(input, expected);
    });

    it('should properly transform main labs import for Toast only to react toast', () => {
      const input = stripIndent`
          import {FormField, Select} from "@workday/canvas-kit-preview-react";
        `;

      const expected = stripIndent`
          import { FormField } from "@workday/canvas-kit-react/form-field";
          import { Select } from "@workday/canvas-kit-preview-react";
        `;

      expectTransform(input, expected);
    });
  });
});
