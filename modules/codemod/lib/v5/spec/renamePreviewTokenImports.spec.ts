import {expectTransformFactory} from './expectTransformFactory';
import transformer from '../renamePreviewTokenImports';
const context = describe;

const expectTransform = expectTransformFactory(transformer);

describe('Canvas Kit Labs and Preview Tokens Imports Codemod', () => {
  context('when importing type tokens from canvas-kit-labs-react/tokens', () => {
    it('should transform labs/tokens to tokens', () => {
      const input = `
        import { type } from "@workday/canvas-kit-labs-react/tokens";
      `;
      const expected = `
        import { type } from "@workday/canvas-kit-react/tokens";
      `;

      expectTransform(input, expected);
    });

    it('should collapse duplicate imports and append the new import to the end of the list', () => {
      const input = `
        import canvas, { space, color } from "@workday/canvas-kit-react/tokens";
        import { type } from "@workday/canvas-kit-labs-react/tokens";
      `;
      const expected = `
        import canvas, { space, color, type } from "@workday/canvas-kit-react/tokens";
      `;

      expectTransform(input, expected);
    });
  });

  context('when importing type tokens from canvas-kit-preview-react/tokens', () => {
    it('should transform preview/tokens to tokens', () => {
      const input = `
        import { type } from "@workday/canvas-kit-preview-react/tokens";
      `;
      const expected = `
        import { type } from "@workday/canvas-kit-react/tokens";
      `;

      expectTransform(input, expected);
    });

    it('should collapse duplicate imports and append the new import to the end of the list', () => {
      const input = `
        import canvas, { space, color } from "@workday/canvas-kit-react/tokens";
        import { type } from "@workday/canvas-kit-preview-react/tokens";
      `;
      const expected = `
        import canvas, { space, color, type } from "@workday/canvas-kit-react/tokens";
      `;

      expectTransform(input, expected);
    });
  });

  context('when importing StaticStates from canvas-kit-labs-react/tokens', () => {
    it('should transform labs/tokens to common', () => {
      const input = `import { StaticStates } from "@workday/canvas-kit-labs-react/tokens";`;
      const expected = `import { StaticStates } from "@workday/canvas-kit-react/common";`;

      expectTransform(input, expected);
    });

    it('should collapse duplicate imports and append the new import to the end of the list', () => {
      const input = `
        import { StaticStates } from "@workday/canvas-kit-labs-react/tokens";
        import { CanvasProvider } from "@workday/canvas-kit-react/common";
      `;
      const expected = `import { CanvasProvider, StaticStates } from "@workday/canvas-kit-react/common";`;

      expectTransform(input, expected);
    });
  });

  context('when importing StaticStates from canvas-kit-preview-react/tokens', () => {
    it('should transform preview/tokens to common', () => {
      const input = `import { StaticStates } from "@workday/canvas-kit-preview-react/tokens";`;
      const expected = `import { StaticStates } from "@workday/canvas-kit-react/common";`;

      expectTransform(input, expected);
    });

    it('should collapse duplicate imports and append the new import to the end of the list', () => {
      const input = `
        import { StaticStates } from "@workday/canvas-kit-preview-react/tokens";
        import { CanvasProvider } from "@workday/canvas-kit-react/common";
      `;
      const expected = `import { CanvasProvider, StaticStates } from "@workday/canvas-kit-react/common";`;

      expectTransform(input, expected);
    });
  });

  context(
    'when importing both type tokens and StaticStates from canvas-kit-preview-react/tokens',
    () => {
      it('should transform tokens to common', () => {
        const input = `
        import { StaticStates, type } from "@workday/canvas-kit-preview-react/tokens";
      `;
        const expected = `
        import { StaticStates } from "@workday/canvas-kit-react/common";
        import { type } from "@workday/canvas-kit-react/tokens";
      `;

        expectTransform(input, expected);
      });

      it('should transform import declarations with local names', () => {
        const input = `
          import { StaticStates as CanvasStaticStates, type as typeTokens } from "@workday/canvas-kit-preview-react/tokens";
        `;
        const expected = `
          import { StaticStates as CanvasStaticStates } from "@workday/canvas-kit-react/common";
          import { type as typeTokens } from "@workday/canvas-kit-react/tokens";
        `;

        expectTransform(input, expected);
      });
    }
  );

  context(
    'when importing both type tokens and StaticStates from canvas-kit-labs-react/tokens',
    () => {
      it('should transform tokens to common', () => {
        const input = `
        import { StaticStates, type } from "@workday/canvas-kit-labs-react/tokens";
      `;
        const expected = `
        import { StaticStates } from "@workday/canvas-kit-react/common";
        import { type } from "@workday/canvas-kit-react/tokens";
      `;

        expectTransform(input, expected);
      });

      it('should transform import declarations with local names', () => {
        const input = `
          import { StaticStates as CanvasStaticStates, type as typeTokens } from "@workday/canvas-kit-labs-react/tokens";
        `;
        const expected = `
          import { StaticStates as CanvasStaticStates } from "@workday/canvas-kit-react/common";
          import { type as typeTokens } from "@workday/canvas-kit-react/tokens";
        `;

        expectTransform(input, expected);
      });
    }
  );
});
