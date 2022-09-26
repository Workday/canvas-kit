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
});
