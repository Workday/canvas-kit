import {cssVar} from '@workday/canvas-kit-styling';
import {
  createProgramFromSource,
  findNodes,
  withDefaultContext,
} from '@workday/canvas-kit-styling-transform/testing';

import {handleCssVar} from '../../lib/utils/handleCssVar';

describe('handleCssVar', () => {
  it('should rewrite cssVar expressions with a single string literal argument', () => {
    const program = createProgramFromSource(`
      cssVar('--some-var')
    `);

    const sourceFile = program.getSourceFile('test.ts');
    const node = findNodes(sourceFile, 'cssVar')[0];

    const result = handleCssVar(node, withDefaultContext(program.getTypeChecker()));

    expect(result).toEqual(cssVar('--some-var'));
  });

  it('should rewrite cssVar expressions with a single identifier argument', () => {
    const program = createProgramFromSource(`
      const someVar = '--some-var'

      cssVar(someVar)
    `);

    const sourceFile = program.getSourceFile('test.ts');
    const node = findNodes(sourceFile, 'cssVar')[0];

    const result = handleCssVar(node, withDefaultContext(program.getTypeChecker()));

    expect(result).toEqual(cssVar('--some-var'));
  });

  it('should rewrite cssVar expression with two string literals', () => {
    const program = createProgramFromSource(`
      cssVar('--some-var', '--fallback')
    `);

    const sourceFile = program.getSourceFile('test.ts');
    const node = findNodes(sourceFile, 'cssVar')[0];

    const result = handleCssVar(node, withDefaultContext(program.getTypeChecker()));

    expect(result).toEqual(cssVar('--some-var', '--fallback'));
  });

  it('should rewrite cssVar nested expressions', () => {
    const program = createProgramFromSource(`
      cssVar('--some-var', cssVar('--fallback', 'red'))
    `);

    const sourceFile = program.getSourceFile('test.ts');
    const node = findNodes(sourceFile, 'cssVar')[0];

    const result = handleCssVar(node, withDefaultContext(program.getTypeChecker()));

    expect(result).toEqual(cssVar('--some-var', cssVar('--fallback', 'red')));
  });

  it('should automatically insert fallbacks', () => {
    const program = createProgramFromSource(`
      cssVar('--some-var'))
    `);

    const sourceFile = program.getSourceFile('test.ts');
    const node = findNodes(sourceFile, 'cssVar')[0];

    const result = handleCssVar(
      node,
      withDefaultContext(program.getTypeChecker(), {
        variables: {'--some-var': 'red'},
      })
    );

    expect(result).toEqual(cssVar('--some-var', 'red'));
  });
});
