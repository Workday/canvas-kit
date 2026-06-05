// @vitest-environment node
import {handleWithCornerShape} from '../lib/utils/handleWithCornerShape';
import {createProgramFromSource, transform} from '../testing';

describe('handleWithCornerShape', () => {
  it('should transform createStencil spreads via styleTransformer', () => {
    const program = createProgramFromSource(`
      import {createStencil, withCornerShape} from '@workday/canvas-kit-styling';

      export const cardStencil = createStencil({
        base: {
          ...withCornerShape('24px'),
          border: '1px solid red',
        },
      });
    `);

    const result = transform(program, 'test.ts', {
      objectTransforms: [handleWithCornerShape],
    });

    expect(result).toContain('border-radius:24px');
    expect(result).toContain('corner-shape:superellipse(1.1)');
  });
});
