import ts from 'typescript';

import {findNodes} from '../findNodes';
import {createProgramFromSource} from '../createProgramFromSource';

import {handleCreateVars} from '../../lib/utils/handleCreateVars';

describe('handleCreateVars', () => {
  it('should add a variable to the cache when the arguments are strings', () => {
    const program = createProgramFromSource(`
      const myVars = createVars('color', 'background')
    `);

    const sourceFile = program.getSourceFile('test.ts');
    const vars: Record<string, string> = {};

    const node = findNodes(sourceFile, 'createVars', ts.isCallExpression)[0];

    handleCreateVars(node, program.getTypeChecker(), 'css', vars);

    expect(vars).toHaveProperty('my-color', '--css-my-color');
    expect(vars).toHaveProperty('my-background', '--css-my-background');
  });

  it('should add nested variables to the cache when the arguments are strings', () => {
    const program = createProgramFromSource(`
      const myVars = {
        foo: createVars('color')
      }
    `);

    const sourceFile = program.getSourceFile('test.ts');
    const vars: Record<string, string> = {};

    const node = findNodes(sourceFile, 'createVars', ts.isCallExpression)[0];

    handleCreateVars(node, program.getTypeChecker(), 'css', vars);

    expect(vars).toHaveProperty('my-foo-color', '--css-my-foo-color');
  });
});
