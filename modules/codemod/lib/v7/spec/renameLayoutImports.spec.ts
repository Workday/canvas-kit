import {expectTransformFactory} from './expectTransformFactory';
import transform from '../renameLayoutImports';
import {stripIndent} from 'common-tags';

const expectTransform = expectTransformFactory(transform);

describe('Rename Box, Flex and Stack', () => {
  it.only('should do properly transform labs import for Flex to react layout for Flex', () => {
    const input = "import { Flex } from '@workday/canvas-kit-labs-react/layout'";

    const expected = `import { Flex } from "@workday/canvas-kit-react/layout"`;

    expectTransform(input, expected);
  });
  it.only('should do properly transform multiple imports from labs layout to react layout', () => {
    const input = "import { Flex, Stack } from '@workday/canvas-kit-labs-react/layout'";

    const expected = `import { Flex, Stack } from "@workday/canvas-kit-react/layout"`;

    expectTransform(input, expected);
  });
});
