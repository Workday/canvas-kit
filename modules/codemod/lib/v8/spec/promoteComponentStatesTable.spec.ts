import {expectTransformFactory} from './expectTransformFactory';
import transform from '../promoteComponentStatesTable';
import {stripIndent} from 'common-tags';

const expectTransform = expectTransformFactory(transform);

describe('renameIconRefs', () => {
  it('should replace default export with a named export for react package', () => {
    const input = stripIndent`
      import { ComponentStatesTable, permutateProps, Props, PropCombination, PropsDeclaration } from "@workday/canvas-kit-labs-react/common";
    `;

    const expected = stripIndent`
      import {
        ComponentStatesTable,
        permutateProps,
        Props,
        PropCombination,
        PropsDeclaration,
      } from "@workday/canvas-kit-react/testing";
    `;

    expectTransform(input, expected);
  });
  it('should rename imports from main labs package', () => {
    const input = stripIndent`
      import { ComponentStatesTable } from "@workday/canvas-kit-labs-react";
    `;

    const expected = stripIndent`
      import { ComponentStatesTable } from "@workday/canvas-kit-react/testing";
    `;

    expectTransform(input, expected);
  });

  it('should rename imports from main labs package and remove import', () => {
    const input = stripIndent`
      import { ComponentStatesTable, SearchForm } from "@workday/canvas-kit-labs-react";
    `;

    const expected = stripIndent`
      import { ComponentStatesTable } from "@workday/canvas-kit-react/testing";
      import { SearchForm } from "@workday/canvas-kit-labs-react";
    `;

    expectTransform(input, expected);
  });

  it('should add new import', () => {
    const input = stripIndent`
      import { ComponentStatesTable, useThemeRTL } from "@workday/canvas-kit-labs-react/common";
    `;

    const expected = stripIndent`
      import { ComponentStatesTable } from "@workday/canvas-kit-react/testing";
      import { useThemeRTL } from "@workday/canvas-kit-labs-react/common";
    `;

    expectTransform(input, expected);
  });
});
