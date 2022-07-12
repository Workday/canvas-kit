import {expectTransformFactory} from './expectTransformFactory';
import transform from '../renameLayoutImports';
import {stripIndent} from 'common-tags';

const expectTransform = expectTransformFactory(transform);

describe('Rename Box, Flex and Stack', () => {
  it('should  properly transform labs import for Flex to react layout', () => {
    const input = stripIndent`
      import { Flex } from "@workday/canvas-kit-labs-react/layout";
    `;

    const expected = stripIndent`
      import { Flex } from "@workday/canvas-kit-react/layout";
    `;

    expectTransform(input, expected);
  });

  it('should properly transform multiple imports from labs layout to react layout', () => {
    const input = stripIndent`
      import { Flex, Stack, HStack } from "@workday/canvas-kit-labs-react/layout";
    `;

    const expected = stripIndent`
      import { Flex, Stack, HStack } from "@workday/canvas-kit-react/layout";
    `;

    expectTransform(input, expected); //
  });

  it('filter out non Box imports and rename package', () => {
    const input = stripIndent`
      import { Box, ComponentStatesTable, permutateProps, useThemeRTL, useThemedRing, ColorStyleProps } from "@workday/canvas-kit-labs-react/common";
    `;
    const expected = stripIndent`
      import { Box, ColorStyleProps } from "@workday/canvas-kit-react/layout";
      import { ComponentStatesTable, permutateProps, useThemeRTL, useThemedRing } from "@workday/canvas-kit-labs-react/common";
    `;

    expectTransform(input, expected);
  });

  it('rename import for box from common to layout', () => {
    const input = stripIndent`
      import { Box } from "@workday/canvas-kit-labs-react/common";
    `;

    const expected = stripIndent`
    import { Box } from "@workday/canvas-kit-react/layout";
    `;

    expectTransform(input, expected);
  });

  it('should add new import', () => {
    const input = stripIndent`
      import { Box, useThemeRTL } from "@workday/canvas-kit-labs-react/common";
    `;

    const expected = stripIndent`
      import { Box } from "@workday/canvas-kit-react/layout";
      import { useThemeRTL } from "@workday/canvas-kit-labs-react/common";
    `;

    expectTransform(input, expected);
  });

  it('rename import for box from common to layout', () => {
    const input = stripIndent`
      import { Box } from "@workday/canvas-kit-labs-react/common";
      import { Layout } from "@workday/canvas-kit-react/layout";
    `;

    const expected = stripIndent`
      import { Layout, Box } from "@workday/canvas-kit-react/layout";
    `;

    expectTransform(input, expected);
  });

  it('should rename imports from main labs package', () => {
    const input = stripIndent`
      import { Box } from "@workday/canvas-kit-labs-react";
    `;

    const expected = stripIndent`
      import { Box } from "@workday/canvas-kit-react/layout";
    `;

    expectTransform(input, expected);
  });

  it('should rename imports from main labs package and remove import', () => {
    const input = stripIndent`
      import { Box, SearchForm } from "@workday/canvas-kit-labs-react";
    `;

    const expected = stripIndent`
      import { Box } from "@workday/canvas-kit-react/layout";
      import { SearchForm } from "@workday/canvas-kit-labs-react";
    `;

    expectTransform(input, expected);
  });
});
