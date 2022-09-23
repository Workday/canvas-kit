import {expectTransformFactory} from './expectTransformFactory';
import transform from '../promoteComponentStatesTable';
import {stripIndent} from 'common-tags';

const expectTransform = expectTransformFactory(transform);

describe('renameIconRefs', () => {
  it('should replace default export with a named export for react package', () => {
    const input = stripIndent`
      import { ComponentStatesTable, permutateProps, useTheme } from '@workday/canvas-kit-labs-react/common';
    `;

    const expected = stripIndent`
      import { ComponentStatesTable, permutateProps } from "@workday/canvas-kit-react/common";
    `;

    expectTransform(input, expected);
  });
});
