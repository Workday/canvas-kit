import {expectTransformFactory} from './expectTransformFactory';
import transformer from '../';
const context = describe;

const expectTransform = expectTransformFactory(transformer);

describe('Canvas Kit Rename CanvasDepthValue Codemod', () => {
  context('when transforming imports', () => {
    it('should ignore non-canvas-kit imports', () => {
      const input = `import {CanvasDepthValue} from '@workday/some-other-library';`;
      const expected = input;

      expectTransform(input, expected);
    });

    it('should transform named imports from @workday/canvas-kit-react', () => {
      const input = `import {CanvasDepthValue} from '@workday/canvas-kit-react';`;
      const expected = `import {CanvasDepthValues} from '@workday/canvas-kit-react';`;

      expectTransform(input, expected);
    });

    it('should transform named imports from @workday/canvas-kit-react/tokens', () => {
      const input = `import {CanvasDepthValue} from '@workday/canvas-kit-react/tokens';`;
      const expected = `import {CanvasDepthValues} from '@workday/canvas-kit-react/tokens';`;

      expectTransform(input, expected);
    });
  });

  context('when transforming identifiers', () => {
    it('should transform type reference identifiers', () => {
      const input = `
        import {CanvasDepthValue} from '@workday/canvas-kit-react/tokens';

        type CustomDepthValues = CanvasDepthValue;
        interface OtherCustomDepthValues extends CanvasDepthValue {};
      `;
      const expected = `
        import {CanvasDepthValues} from '@workday/canvas-kit-react/tokens';

        type CustomDepthValues = CanvasDepthValues;
        interface OtherCustomDepthValues extends CanvasDepthValues {};
      `;

      expectTransform(input, expected);
    });
  });
});
