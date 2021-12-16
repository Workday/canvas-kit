import {expectTransformFactory} from './expectTransformFactory';
import transform from '../compoundActionBar';
import {stripIndent} from 'common-tags';

const expectTransform = expectTransformFactory(transform);

describe('ActionBar', () => {
  it('should restructure ActionBar usages with props', () => {
    const input = stripIndent`
      import {ActionBar} from '@workday/canvas-kit-react/action-bar'

      <ActionBar fixed="true" />
    `;

    const expected = stripIndent`
      import {ActionBar} from '@workday/canvas-kit-react/action-bar'

      <ActionBar />
    `;

    expectTransform(input, expected);
  });
});
