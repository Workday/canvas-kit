import ts from 'typescript';

import {findNodes} from '../findNodes';
import {createProgramFromSource} from '../createProgramFromSource';

import {handleCreateVars} from '../../lib/utils/handleCreateVars';
import {withDefaultContext} from '../../lib/styleTransform';

describe('handleCreateVars', () => {
  it('should add a variable to the cache when the arguments are strings', () => {
    const program = createProgramFromSource(`
      const myVars = createVars('color', 'background')
    `);

    const sourceFile = program.getSourceFile('test.ts');
    const variables: Record<string, string> = {};

    const node = findNodes(sourceFile, 'createVars', ts.isCallExpression)[0];

    handleCreateVars(
      node,
      withDefaultContext(program.getTypeChecker(), {
        variables,
      })
    );

    expect(variables).toHaveProperty('my-color', '--css-my-color');
    expect(variables).toHaveProperty('my-background', '--css-my-background');
  });

  it('should add nested variables to the cache when the arguments are strings', () => {
    const program = createProgramFromSource(`
      const myVars = {
        foo: createVars('color')
      }
    `);

    const sourceFile = program.getSourceFile('test.ts');
    const variables: Record<string, string> = {};

    const node = findNodes(sourceFile, 'createVars', ts.isCallExpression)[0];

    handleCreateVars(
      node,
      withDefaultContext(program.getTypeChecker(), {
        variables,
      })
    );

    expect(variables).toHaveProperty('my-foo-color', '--css-my-foo-color');
  });
});
