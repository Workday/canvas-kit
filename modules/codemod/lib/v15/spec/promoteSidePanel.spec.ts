import {stripIndent} from 'common-tags';

import transform from '../promoteSidePanel';
import {expectTransformFactory} from './expectTransformFactory';

const expectTransform = expectTransformFactory(transform);

describe('Promote SidePanel to main package', () => {
  describe('Component package import', () => {
    it('should not transform SidePanel from other imports', () => {
      const input = stripIndent`
          import { SidePanel } from "@other-package";
        `;

      const expected = stripIndent`
          import { SidePanel } from "@other-package";
        `;

      expectTransform(input, expected);
    });

    it('should not transform other labs imports', () => {
      const input = stripIndent`
          import { Avatar } from "@workday/canvas-kit-labs-react/avatar";
          import { Pill } from "@workday/canvas-kit-labs-react/pill";
        `;

      const expected = input;

      expectTransform(input, expected);
    });

    it('should properly transform labs import for SidePanel to react SidePanel', () => {
      const input = stripIndent`
          import { SidePanel } from "@workday/canvas-kit-labs-react/side-panel";
        `;

      const expected = stripIndent`
          import { SidePanel } from "@workday/canvas-kit-react/side-panel";
        `;

      expectTransform(input, expected);
    });

    it('should properly transform labs import for SidePanel to react SidePanel from main packages', () => {
      const input = stripIndent`
          import { SidePanel } from "@workday/canvas-kit-labs-react";
        `;

      const expected = stripIndent`
          import { SidePanel } from "@workday/canvas-kit-react/side-panel";
        `;

      expectTransform(input, expected);
    });

    it('should properly transform named labs import for SidePanel only to react SidePanel', () => {
      const input = stripIndent`
          import { SidePanel as CanvasSidePanel } from "@workday/canvas-kit-labs-react/side-panel";
        `;

      const expected = stripIndent`
          import { SidePanel as CanvasSidePanel } from "@workday/canvas-kit-react/side-panel";
        `;

      expectTransform(input, expected);
    });
  });

  describe('Main package import', () => {
    it('should properly transform main labs import for SidePanel to react SidePanel', () => {
      const input = stripIndent`
          import { SidePanel } from "@workday/canvas-kit-labs-react";
        `;

      const expected = stripIndent`
          import { SidePanel } from "@workday/canvas-kit-react/side-panel";
        `;

      expectTransform(input, expected);
    });

    it('should properly transform named main labs import for SidePanel only to react SidePanel', () => {
      const input = stripIndent`
          import { SidePanel as CanvasSidePanel } from "@workday/canvas-kit-labs-react";
        `;

      const expected = stripIndent`
          import { SidePanel as CanvasSidePanel } from "@workday/canvas-kit-react/side-panel";
        `;

      expectTransform(input, expected);
    });

    it('should properly transform main labs import for SidePanel only to react SidePanel', () => {
      const input = stripIndent`
          import {SidePanel, AIIngressButton} from "@workday/canvas-kit-labs-react";
        `;

      const expected = stripIndent`
          import { SidePanel } from "@workday/canvas-kit-react/side-panel";
          import { AIIngressButton } from "@workday/canvas-kit-labs-react";
        `;

      expectTransform(input, expected);
    });
  });
});
