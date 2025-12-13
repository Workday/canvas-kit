import {expectTransformFactory} from './expectTransformFactory';
import transform from '../promoteInformationHighlight';
import {stripIndent} from 'common-tags';

const expectTransform = expectTransformFactory(transform);

describe('Promote InformationHighlight to main package', () => {
  describe('Component package import', () => {
    it('should not transform InformationHighlight from other imports', () => {
      const input = stripIndent`
          import { InformationHighlight } from "@other-package";
        `;

      const expected = stripIndent`
          import { InformationHighlight } from "@other-package";
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

    it('should properly transform preview import for InformationHighlight to react InformationHighlight', () => {
      const input = stripIndent`
          import { InformationHighlight } from "@workday/canvas-kit-preview-react/information-highlight";
        `;

      const expected = stripIndent`
          import { InformationHighlight } from "@workday/canvas-kit-react/information-highlight";
        `;

      expectTransform(input, expected);
    });

    it('should properly transform preview import for InformationHighlight to react InformationHighlight from main packages', () => {
      const input = stripIndent`
          import { InformationHighlight } from "@workday/canvas-kit-preview-react";
        `;

      const expected = stripIndent`
          import { InformationHighlight } from "@workday/canvas-kit-react/information-highlight";
        `;

      expectTransform(input, expected);
    });

    it('should properly transform named preview import for InformationHighlight only to react InformationHighlight', () => {
      const input = stripIndent`
          import { InformationHighlight as CanvasInformationHighlight } from "@workday/canvas-kit-preview-react/information-highlight";
        `;

      const expected = stripIndent`
            import { InformationHighlight as CanvasInformationHighlight } from "@workday/canvas-kit-react/information-highlight";
        `;

      expectTransform(input, expected);
    });
  });

  describe('Main package import', () => {
    it('should properly transform main preview import for InformationHighlight to react InformationHighlight', () => {
      const input = stripIndent`
          import { InformationHighlight } from "@workday/canvas-kit-preview-react";
        `;

      const expected = stripIndent`
          import { InformationHighlight } from "@workday/canvas-kit-react/information-highlight";
        `;

      expectTransform(input, expected);
    });

    it('should properly transform named main preview import for InformationHighlight only to react InformationHighlight', () => {
      const input = stripIndent`
          import { InformationHighlight as CanvasInformationHighlight } from "@workday/canvas-kit-preview-react";
        `;

      const expected = stripIndent`
          import { InformationHighlight as CanvasInformationHighlight } from "@workday/canvas-kit-react/information-highlight";
        `;

      expectTransform(input, expected);
    });

    it('should properly transform main preview import for InformationHighlight only to react InformationHighlight', () => {
      const input = stripIndent`
          import {InformationHighlight, Pill} from "@workday/canvas-kit-preview-react";
        `;

      const expected = stripIndent`
          import { InformationHighlight } from "@workday/canvas-kit-react/information-highlight";
          import { Pill } from "@workday/canvas-kit-preview-react";
        `;

      expectTransform(input, expected);
    });
  });
});
