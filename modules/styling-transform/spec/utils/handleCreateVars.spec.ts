import ts from 'typescript';

import {findNodes} from '../findNodes';
import {createProgramFromSource} from '../createProgramFromSource';

import {handleCreateVars} from '../../lib/utils/handleCreateVars';

describe.only('handleCreateVars', () => {
  it('should add a variable to the cache when the arguments are strings', () => {
    const program = createProgramFromSource(`
      const vars = createVars('color', 'background')
    `);

    const sourceFile = program.getSourceFile('test.ts');
    const vars: Record<string, string> = {};

    const node = findNodes(sourceFile, 'createVars', ts.isCallExpression)[0];

    handleCreateVars(node, program.getTypeChecker(), 'css', vars);

    expect(vars).toHaveProperty('vars-color', '--css-vars-color');
    expect(vars).toHaveProperty('vars-background', '--css-vars-background');
  });

  it('should return transformed ', () => {
    const program = createProgramFromSource(`
      const vars = createVars('color')
    `);

    const sourceFile = program.getSourceFile('test.ts');
    const vars: Record<string, string> = {};

    const node = findNodes(sourceFile, 'createVars', ts.isCallExpression)[0];

    handleCreateVars(node, program.getTypeChecker(), 'css', vars);

    expect(vars).toHaveProperty('vars-color', '--css-vars-color');
  });
});
