import {stripIndent} from 'common-tags';

import transform from '../promotePill';
import {expectTransformFactory} from './expectTransformFactory';

const expectTransform = expectTransformFactory(transform);

describe('Promote Pill to main package', () => {
  describe('Component package import', () => {
    it('should not transform Pill from other imports', () => {
      const input = stripIndent`
          import { Pill } from "@other-package";
        `;

      const expected = stripIndent`
          import { Pill } from "@other-package";
        `;

      expectTransform(input, expected);
    });

    it('should not transform other preview imports', () => {
      const input = stripIndent`
          import { Avatar } from "@workday/canvas-kit-preview-react/avatar";
          import { MultiSelect } from "@workday/canvas-kit-preview-react/multi-select";
        `;

      const expected = input;

      expectTransform(input, expected);
    });

    it('should properly transform preview import for Pill to react Pill', () => {
      const input = stripIndent`
          import { Pill } from "@workday/canvas-kit-preview-react/pill";
        `;

      const expected = stripIndent`
          import { Pill } from "@workday/canvas-kit-react/pill";
        `;

      expectTransform(input, expected);
    });

    it('should properly transform preview import for Pill to react Pill from main packages', () => {
      const input = stripIndent`
          import { Pill } from "@workday/canvas-kit-preview-react";
        `;

      const expected = stripIndent`
          import { Pill } from "@workday/canvas-kit-react/pill";
        `;

      expectTransform(input, expected);
    });

    it('should properly transform named preview import for Pill only to react Pill', () => {
      const input = stripIndent`
          import { Pill as CanvasPill } from "@workday/canvas-kit-preview-react/pill";
        `;

      const expected = stripIndent`
          import { Pill as CanvasPill } from "@workday/canvas-kit-react/pill";
        `;

      expectTransform(input, expected);
    });
  });

  describe('Main package import', () => {
    it('should properly transform main preview import for Pill to react Pill', () => {
      const input = stripIndent`
          import { Pill } from "@workday/canvas-kit-preview-react";
        `;

      const expected = stripIndent`
          import { Pill } from "@workday/canvas-kit-react/pill";
        `;

      expectTransform(input, expected);
    });

    it('should properly transform named main preview import for Pill only to react Pill', () => {
      const input = stripIndent`
          import { Pill as CanvasPill } from "@workday/canvas-kit-preview-react";
        `;

      const expected = stripIndent`
          import { Pill as CanvasPill } from "@workday/canvas-kit-react/pill";
        `;

      expectTransform(input, expected);
    });

    it('should properly transform main preview import for Pill only to react Pill', () => {
      const input = stripIndent`
          import {Pill, Avatar} from "@workday/canvas-kit-preview-react";
        `;

      const expected = stripIndent`
          import { Pill } from "@workday/canvas-kit-react/pill";
          import { Avatar } from "@workday/canvas-kit-preview-react";
        `;

      expectTransform(input, expected);
    });
  });
});
