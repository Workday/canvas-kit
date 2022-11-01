import {expectTransformFactory} from './expectTransformFactory';
import transform from '../promoteBreadcrumbs';
import {stripIndent} from 'common-tags';

const expectTransform = expectTransformFactory(transform);

describe('Rename Box, Flex and Stack', () => {
  describe('Component package import', () => {
    it('should not transform Breadcrumbs from other imports', () => {
      const input = stripIndent`
          import { Breadcrumbs } from "@other-package";
        `;

      const expected = stripIndent`
          import { Breadcrumbs } from "@other-package";
        `;

      expectTransform(input, expected);
    });

    it('should  properly transform preview import for Breadcrumbs to react breadcrumbs', () => {
      const input = stripIndent`
          import { Breadcrumbs } from "@workday/canvas-kit-preview-react/breadcrumbs";
        `;

      const expected = stripIndent`
          import { Breadcrumbs } from "@workday/canvas-kit-react/breadcrumbs";
        `;

      expectTransform(input, expected);
    });

    it('should properly transform named preview import for Breadcrumbs only to react breadcrumbs', () => {
      const input = stripIndent`
          import { Breadcrumbs as CanvasBreadcrumbs } from "@workday/canvas-kit-preview-react/breadcrumbs";
        `;

      const expected = stripIndent`
            import { Breadcrumbs as CanvasBreadcrumbs } from "@workday/canvas-kit-react/breadcrumbs";
        `;

      expectTransform(input, expected);
    });
  });

  describe('Main package import', () => {
    it('should properly transform main preview import for Breadcrumbs to react breadcrumbs', () => {
      const input = stripIndent`
          import { Breadcrumbs } from "@workday/canvas-kit-preview-react";
        `;

      const expected = stripIndent`
          import { Breadcrumbs } from "@workday/canvas-kit-react/breadcrumbs";
        `;

      expectTransform(input, expected);
    });

    it('should properly transform named main preview import for Breadcrumbs only to react breadcrumbs', () => {
      const input = stripIndent`
          import { Breadcrumbs as CanvasBreadcrumbs } from "@workday/canvas-kit-preview-react";
        `;

      const expected = stripIndent`
          import { Breadcrumbs as CanvasBreadcrumbs } from "@workday/canvas-kit-react/breadcrumbs";
        `;

      expectTransform(input, expected);
    });

    it('should properly transform main preview import for Breadcrumbs only to react breadcrumbs', () => {
      const input = stripIndent`
          import {Breadcrumbs, Select} from "@workday/canvas-kit-preview-react";
        `;

      const expected = stripIndent`
          import { Breadcrumbs } from "@workday/canvas-kit-react/breadcrumbs";
          import { Select } from "@workday/canvas-kit-preview-react";
        `;

      expectTransform(input, expected);
    });

    it('should properly transform named preview import for Breadcrumbs only to react breadcrumbs', () => {
      const input = stripIndent`
          import {Breadcrumbs as CanvasBreadcrumbs, Select} from "@workday/canvas-kit-preview-react";
        `;

      const expected = stripIndent`
          import { Breadcrumbs as CanvasBreadcrumbs } from "@workday/canvas-kit-react/breadcrumbs";
          import { Select } from "@workday/canvas-kit-preview-react";
        `;

      expectTransform(input, expected);
    });
  });
});
