import {expectTransformFactory} from './expectTransformFactory';
import transform from '../example';
import {stripIndent} from 'common-tags';

const expectTransform = expectTransformFactory(transform);

describe('Example', () => {
  it('should ignore non-canvas-kit imports', () => {
    const input = stripIndent`
      import Example from '@workday/some-other-library'
    `;
    const expected = stripIndent`
      import Example from '@workday/some-other-library'
    `;

    expectTransform(input, expected);
  });
});
