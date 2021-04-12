import {expectTransformFactory} from './expectTransformFactory';
import transformer from '../renameCoreImports';
const context = describe;

const expectTransform = expectTransformFactory(transformer);

describe('Canvas Kit Core Imports Codemod', () => {
  context('when importing from canvas-kit-react/core', () => {
    it('should do properly transform core to tokens', () => {
      const input = `import { colors } from "@workday/canvas-kit-react/core";`;
      const expected = `import { colors } from "@workday/canvas-kit-react/tokens";`;

      expectTransform(input, expected);
    });
  });

  context('when importing from canvas-kit-labs-react/core', () => {
    it('should do properly transform core to tokens', () => {
      const input = `import { type } from "@workday/canvas-kit-labs-react/core";`;
      const expected = `import { type } from "@workday/canvas-kit-labs-react/tokens";`;

      expectTransform(input, expected);
    });

    it('should do properly transform type default import to a named import', () => {
      const input = `import type, { colors } from "@workday/canvas-kit-labs-react/core";`;
      const expected = `import { type, colors } from "@workday/canvas-kit-labs-react/tokens";`;

      expectTransform(input, expected);
    });
  });
});
