import ts from 'typescript';

import {colorSpace} from '@workday/canvas-kit-styling';
import {
  createProgramFromSource,
  findNodes,
  withDefaultContext,
} from '@workday/canvas-kit-styling-transform/testing';

import {handleColorSpace} from '../../lib/utils/handleColorSpace';

describe('handleColorSpace', () => {
  it('should handle colorSpace.darken', () => {
    const program = createProgramFromSource(`
      colorSpace.darken({
        color: '--cnvs-sys-color-surface-alt-default',
        fallback: '--cnvs-sys-color-bg-alt-soft',
        mixinColor: '--cnvs-sys-color-surface-overlay-mixin',
        mixinValue: '--cnvs-sys-opacity-surface-hover',
      })
    `);

    const sourceFile = program.getSourceFile('test.ts')!;
    const node = findNodes(sourceFile, '', ts.isCallExpression)![0];

    const result = handleColorSpace(node, withDefaultContext(program.getTypeChecker()));

    expect(result).toEqual(
      colorSpace.darken({
        color: '--cnvs-sys-color-surface-alt-default',
        fallback: '--cnvs-sys-color-bg-alt-soft',
        mixinColor: '--cnvs-sys-color-surface-overlay-mixin',
        mixinValue: '--cnvs-sys-opacity-surface-hover',
      })
    );
  });

  it('should handle colorSpace.hover', () => {
    const program = createProgramFromSource(`
      colorSpace.hover({
        color: '--cnvs-sys-color-brand-accent-primary',
        fallback: '--cnvs-brand-primary-base',
        colorType: 'accent',
      })
    `);

    const sourceFile = program.getSourceFile('test.ts')!;
    const node = findNodes(sourceFile, '', ts.isCallExpression)![0];

    const result = handleColorSpace(node, withDefaultContext(program.getTypeChecker()));

    expect(result).toEqual(
      colorSpace.hover({
        color: '--cnvs-sys-color-brand-accent-primary',
        fallback: '--cnvs-brand-primary-base',
        colorType: 'accent',
      })
    );
  });

  it('should handle colorSpace.pressed', () => {
    const program = createProgramFromSource(`
      colorSpace.pressed({
        color: '--cnvs-sys-color-brand-accent-primary',
        fallback: '--cnvs-brand-primary-base',
        colorType: 'accent',
      })
    `);

    const sourceFile = program.getSourceFile('test.ts')!;
    const node = findNodes(sourceFile, '', ts.isCallExpression)![0];

    const result = handleColorSpace(node, withDefaultContext(program.getTypeChecker()));

    expect(result).toEqual(
      colorSpace.pressed({
        color: '--cnvs-sys-color-brand-accent-primary',
        fallback: '--cnvs-brand-primary-base',
        colorType: 'accent',
      })
    );
  });
});
