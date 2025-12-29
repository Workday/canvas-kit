import {stripIndent} from 'common-tags';

import transform from '../promoteSegmentedControl';
import {expectTransformFactory} from './expectTransformFactory';

const expectTransform = expectTransformFactory(transform);

describe('Promote SegmentedControl to main package', () => {
  describe('Component package import', () => {
    it('should not transform SegmentedControl from other imports', () => {
      const input = stripIndent`
          import { SegmentedControl } from "@other-package";
        `;

      const expected = stripIndent`
          import { SegmentedControl } from "@other-package";
        `;

      expectTransform(input, expected);
    });

    it('should not transform other preview imports', () => {
      const input = stripIndent`
          import { Avatar } from "@workday/canvas-kit-preview-react/avatar";
          import { Pill } from "@workday/canvas-kit-preview-react/pill";
        `;

      const expected = input;

      expectTransform(input, expected);
    });

    it('should  properly transform preview import for SegmentedControl to react SegmentedControl', () => {
      const input = stripIndent`
          import { SegmentedControl } from "@workday/canvas-kit-preview-react/segmented-control";
        `;

      const expected = stripIndent`
          import { SegmentedControl } from "@workday/canvas-kit-react/segmented-control";
        `;

      expectTransform(input, expected);
    });

    it('should properly transform preview import for SegmentedControl to react SegmentedControl from main packages', () => {
      const input = stripIndent`
          import { SegmentedControl } from "@workday/canvas-kit-preview-react";
        `;

      const expected = stripIndent`
          import { SegmentedControl } from "@workday/canvas-kit-react/segmented-control";
        `;

      expectTransform(input, expected);
    });

    it('should properly transform named preview import for SegmentedControl only to react SegmentedControl', () => {
      const input = stripIndent`
          import { SegmentedControl as CanvasSegmentedControl } from "@workday/canvas-kit-preview-react/segmented-control";
        `;

      const expected = stripIndent`
            import { SegmentedControl as CanvasSegmentedControl } from "@workday/canvas-kit-react/segmented-control";
        `;

      expectTransform(input, expected);
    });
  });

  describe('Main package import', () => {
    it('should properly transform main preview import for SegmentedControl to react SegmentedControl', () => {
      const input = stripIndent`
          import { SegmentedControl } from "@workday/canvas-kit-preview-react";
        `;

      const expected = stripIndent`
          import { SegmentedControl } from "@workday/canvas-kit-react/segmented-control";
        `;

      expectTransform(input, expected);
    });

    it('should properly transform named main preview import for SegmentedControl only to react SegmentedControl', () => {
      const input = stripIndent`
          import { SegmentedControl as CanvasSegmentedControl } from "@workday/canvas-kit-preview-react";
        `;

      const expected = stripIndent`
          import { SegmentedControl as CanvasSegmentedControl } from "@workday/canvas-kit-react/segmented-control";
        `;

      expectTransform(input, expected);
    });

    it('should properly transform main preview import for SegmentedControl only to react SegmentedControl', () => {
      const input = stripIndent`
          import {SegmentedControl, Pill} from "@workday/canvas-kit-preview-react";
        `;

      const expected = stripIndent`
          import { SegmentedControl } from "@workday/canvas-kit-react/segmented-control";
          import { Pill } from "@workday/canvas-kit-preview-react";
        `;

      expectTransform(input, expected);
    });
  });
});
