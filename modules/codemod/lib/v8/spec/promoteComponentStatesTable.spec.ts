import {expectTransformFactory} from './expectTransformFactory';
import transform from '../promoteComponentStatesTable';
import {stripIndent} from 'common-tags';

const expectTransform = expectTransformFactory(transform);

describe('renameIconRefs', () => {
  it('should replace default export with a named export for react package', () => {
    const input = stripIndent`
      import { ComponentStatesTable } from '@workday/canvas-kit-labs-react/common';
    `;

    const expected = stripIndent`
      import { ComponentStatesTable } from "@workday/canvas-kit-react/common";
    `;

    expectTransform(input, expected);
  });
  it('should rename imports from main labs package', () => {
    const input = stripIndent`
      import { ComponentStatesTable } from "@workday/canvas-kit-labs-react";
    `;

    const expected = stripIndent`
      import { ComponentStatesTable } from "@workday/canvas-kit-react/common";
    `;

    expectTransform(input, expected);
  });

  it('should rename imports from main labs package and remove import', () => {
    const input = stripIndent`
      import { ComponentStatesTable, SearchForm } from "@workday/canvas-kit-labs-react";
    `;

    const expected = stripIndent`
      import { ComponentStatesTable } from "@workday/canvas-kit-react/common";
      import { SearchForm } from "@workday/canvas-kit-labs-react";
    `;

    expectTransform(input, expected);
  });

  it('should add new import', () => {
    const input = stripIndent`
      import { ComponentStatesTable, useThemeRTL } from "@workday/canvas-kit-labs-react/common";
    `;

    const expected = stripIndent`
      import { ComponentStatesTable } from "@workday/canvas-kit-react/common";
      import { useThemeRTL } from "@workday/canvas-kit-labs-react/common";
    `;

    expectTransform(input, expected);
  });

  it('should add to existing import', () => {
    const input = stripIndent`
      import { ComponentStatesTable } from "@workday/canvas-kit-labs-react/common";
      import { useMountLayout } from "@workday/canvas-kit-react/common";
    `;

    const expected = stripIndent`
      import { useMountLayout, ComponentStatesTable } from "@workday/canvas-kit-react/common";
    `;

    expectTransform(input, expected);
  });
});
