import {stripIndent} from 'common-tags';

import transform from '../updateSwitchToPreview';
import {expectTransformFactory} from './expectTransformFactory';

const expectTransform = expectTransformFactory(transform);

describe('Update Switch to preview package', () => {
  describe('Component package import', () => {
    it('should not transform Switch from other imports', () => {
      const input = stripIndent`
          import { Switch } from "@other-package";
        `;

      const expected = stripIndent`
          import { Switch } from "@other-package";
        `;

      expectTransform(input, expected);
    });

    it('should not transform other main imports', () => {
      const input = stripIndent`
          import { Avatar } from "@workday/canvas-kit-react/avatar";
          import { Pill } from "@workday/canvas-kit-react/pill";
        `;

      const expected = input;

      expectTransform(input, expected);
    });

    it('should properly transform main import for Switch to preview Switch', () => {
      const input = stripIndent`
          import { Switch } from "@workday/canvas-kit-react/switch";
        `;

      const expected = stripIndent`
          import { Switch } from "@workday/canvas-kit-preview-react/switch";
        `;

      expectTransform(input, expected);
    });

    it('should properly transform main import for Switch to preview Switch from preview packages', () => {
      const input = stripIndent`
          import { Switch } from "@workday/canvas-kit-react";
        `;

      const expected = stripIndent`
          import { Switch } from "@workday/canvas-kit-preview-react/switch";
        `;

      expectTransform(input, expected);
    });

    it('should properly transform named main import for Switch only to preview react Switch', () => {
      const input = stripIndent`
          import { Switch as CanvasSwitch } from "@workday/canvas-kit-react/switch";
        `;

      const expected = stripIndent`
          import { Switch as CanvasSwitch } from "@workday/canvas-kit-preview-react/switch";
        `;

      expectTransform(input, expected);
    });
  });

  describe('Main package import', () => {
    it('should properly transform main import for Switch to preview Switch', () => {
      const input = stripIndent`
          import { Switch } from "@workday/canvas-kit-react";
        `;

      const expected = stripIndent`
          import { Switch } from "@workday/canvas-kit-preview-react/switch";
        `;

      expectTransform(input, expected);
    });

    it('should properly transform named main import for Switch only to preview react Switch', () => {
      const input = stripIndent`
          import { Switch as CanvasSwitch } from "@workday/canvas-kit-react";
        `;

      const expected = stripIndent`
          import { Switch as CanvasSwitch } from "@workday/canvas-kit-preview-react/switch";
        `;

      expectTransform(input, expected);
    });

    it('should properly transform main import for Switch only to preview react Switch', () => {
      const input = stripIndent`
          import {Switch, Pill} from "@workday/canvas-kit-react";
        `;

      const expected = stripIndent`
          import { Switch } from "@workday/canvas-kit-preview-react/switch";
          import { Pill } from "@workday/canvas-kit-react";
        `;

      expectTransform(input, expected);
    });
  });
});
