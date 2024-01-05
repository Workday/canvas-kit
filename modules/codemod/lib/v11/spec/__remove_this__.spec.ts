import {expectTransformFactory} from './expectTransformFactory';
import transform from '../__remove_this__';

const expectTransform = expectTransformFactory(transform);

describe('Example Codemod', () => {
  it('should not modify the code', () => {
    const input = "const foo = 'bar';";
    const expected = "const foo = 'bar';";
    expectTransform(input, expected);
  });
});
