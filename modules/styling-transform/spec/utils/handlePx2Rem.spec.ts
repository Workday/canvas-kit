import {px2rem} from '@workday/canvas-kit-styling';
import {
  createProgramFromSource,
  findNodes,
  withDefaultContext,
} from '@workday/canvas-kit-styling-transform/testing';

import {handlePx2Rem} from '../../lib/utils/handlePx2Rem';

describe('handlePx2Rem', () => {
  it('should handle px2rem without a base', () => {
    const program = createProgramFromSource(`
      px2rem(20)
    `);

    const sourceFile = program.getSourceFile('test.ts');
    const node = findNodes(sourceFile, 'px2rem')[0];

    const result = handlePx2Rem(node, withDefaultContext(program.getTypeChecker()));

    expect(result).toEqual(px2rem(20));
  });

  it('should handle px2rem with a base', () => {
    const program = createProgramFromSource(`
      px2rem(20, 10)
    `);

    const sourceFile = program.getSourceFile('test.ts');
    const node = findNodes(sourceFile, 'px2rem')[0];

    const result = handlePx2Rem(node, withDefaultContext(program.getTypeChecker()));

    expect(result).toEqual(px2rem(20, 10));
  });
});
