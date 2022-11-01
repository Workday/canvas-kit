import {expectTransformFactory} from './expectTransformFactory';
import transform from '../promoteComponentsToTesting';
import {stripIndent} from 'common-tags';

const expectTransform = expectTransformFactory(transform);

describe('promoteComponentsToTesting', () => {
  it('should move all intended imports from labs to testing', () => {
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

  it('should move intended imports to testing and keep those that shoudl stay', () => {
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

  it('should move common specifiers to testing', () => {
    const input = stripIndent`
      import { StaticStates, convertToStaticStates } from "@workday/canvas-kit-react/common";
    `;

    const expected = stripIndent`
      import { StaticStates, convertToStaticStates } from "@workday/canvas-kit-react/testing";
    `;

    expectTransform(input, expected);
  });

  it('should handle multiple imports', () => {
    const input = stripIndent`
      import { StaticStates, convertToStaticStates, createModelHook } from "@workday/canvas-kit-react/common";
      import { ComponentStatesTable, permutateProps, useThemedRing } from "@workday/canvas-kit-labs-react/common";
    `;

    const expected = stripIndent`
    import { StaticStates, convertToStaticStates, ComponentStatesTable, permutateProps } from "@workday/canvas-kit-react/testing";
    import { createModelHook } from "@workday/canvas-kit-react/common";
    import { useThemedRing } from "@workday/canvas-kit-labs-react/common";
    `;

    expectTransform(input, expected);
  });
});
