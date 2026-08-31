// https://github.com/vitest-dev/vitest/issues/4043
// @vitest-environment node
import {focusRing} from '@workday/canvas-kit-react/common';
import {
  createProgramFromSource,
  findNodes,
  transform,
  withDefaultContext,
} from '@workday/canvas-kit-styling-transform/testing';

import {handleFocusRing} from '../handleFocusRing';

describe('handleFocusRing', () => {
  it('should rewrite focusRing with no arguments', () => {
    const program = createProgramFromSource(`
      focusRing()
    `);

    const sourceFile = program.getSourceFile('test.ts')!;
    const node = findNodes(sourceFile, 'focusRing')![0];

    const result = handleFocusRing(node, withDefaultContext(program.getTypeChecker()));

    expect(result).toEqual(focusRing());
  });

  it('should rewrite focusRing with arguments', () => {
    const program = createProgramFromSource(`
      focusRing({
        width: 10,
        separation: 1,
        innerColor: myVars.boxShadowInner,
        outerColor: 'red'
      })
    `);

    const sourceFile = program.getSourceFile('test.ts')!;
    const node = findNodes(sourceFile, 'focusRing')![0];

    const result = handleFocusRing(
      node,
      withDefaultContext(program.getTypeChecker(), {
        names: {'myVars.boxShadowInner': '--foo-bar'},
      })
    );

    expect(result).toEqual(
      focusRing({
        width: 10,
        separation: 1,
        innerColor: '--foo-bar',
        outerColor: 'red',
      })
    );
  });

  it('should wrap CSS vars with fallbacks', () => {
    const program = createProgramFromSource(`
      import {createStyles} from '@workday/canvas-kit-styling';

      const myStyles = createStyles({
        ...focusRing({
          width: 10,
          separation: 1,
          innerColor: '--foo-bar',
          outerColor: 'red'
        })
      })
    `);

    const result = transform(
      program,
      'test.ts',
      withDefaultContext(program.getTypeChecker(), {
        names: {
          '--foo-bar': 'red',
        },
        objectTransforms: [handleFocusRing],
      })
    );

    expect(result).toContain('var(--foo-bar, red)');
  });
});
