'use strict';

import {defineInlineTest} from 'jscodeshift/dist/testUtils';
import transformer from '..';
const context = describe;

describe('Canvas Kit Space Codemod', () => {
  context('when importing from named export statements', () => {
    // it should ignore non-canvas-kit imports
    let input = `import { spacing } from "@workday/some-shared-library"`;
    let expected = `import { spacing } from "@workday/some-shared-library"`;

    defineInlineTest(
      transformer,
      {},
      input,
      expected,
      'it should ignore imports from non-canvas-kit imports'
    );

    // it should properly transform spacing to space
    input = `import { spacing } from "@workday/canvas-kit-react/core"`;
    expected = `import { space } from "@workday/canvas-kit-react/core";`;

    defineInlineTest(
      transformer,
      {},
      input,
      expected,
      'it should properly transform spacing to space'
    );

    // it should properly transform spacingNumbers to spaceNumbers
    input = `import { spacingNumbers } from "@workday/canvas-kit-react/core"`;
    expected = `import { spaceNumbers } from "@workday/canvas-kit-react/core";`;

    defineInlineTest(
      transformer,
      {},
      input,
      expected,
      'it should properly transform spacingNumbers to spaceNumbers'
    );

    // it should handle importing spacing and spacingNumbers
    input = `import { spacing, spacingNumbers } from "@workday/canvas-kit-react/core"`;
    expected = `import { space, spaceNumbers } from "@workday/canvas-kit-react/core";`;

    defineInlineTest(
      transformer,
      {},
      input,
      expected,
      'it should handle importing spacing and spacingNumbers'
    );

    // it should not muck up other imports from canvas-kit core
    input = `import { colors, commonColors, type, typeColors, spacing, spacingNumbers } from "@workday/canvas-kit-react/core"`;
    expected = `import { colors, commonColors, type, typeColors, space, spaceNumbers } from "@workday/canvas-kit-react/core";`;

    defineInlineTest(
      transformer,
      {},
      input,
      expected,
      'it should not muck up other imports from canvas-kit core'
    );
  });
});
