import ts from 'typescript';

import {findNodes} from '../findNodes';
import {createProgramFromSource} from '../createProgramFromSource';

import {handleCreateVars} from '../../lib/utils/handleCreateVars';
import {transform, withDefaultContext} from '../../lib/styleTransform';

describe('handleCreateVars', () => {
  it('should add a variable to the cache when the arguments are strings', () => {
    const program = createProgramFromSource(`
      const myVars = createVars('color', 'backgroundColor')
    `);

    const sourceFile = program.getSourceFile('test.ts')!;
    const names = {};
    const extractedNames = {};

    const node = findNodes(sourceFile, 'createVars', ts.isCallExpression)![0];

    handleCreateVars(
      node,
      withDefaultContext(program.getTypeChecker(), {
        names,
        extractedNames,
      })
    );

    expect(names).toHaveProperty(['myVars.color'], expect.stringMatching(/--css-color-[a-z0-9]+/));
    expect(names).toHaveProperty(
      ['myVars.backgroundColor'],
      expect.stringMatching(/--css-background-color-[a-z0-9]+/)
    );

    expect(extractedNames).toHaveProperty(names['myVars.color'], '--css-my-color');
    expect(extractedNames).toHaveProperty(
      names['myVars.backgroundColor'],
      '--css-my-background-color'
    );
  });

  it('should transform variables to use an id and args for static typing of dependencies', () => {
    const program = createProgramFromSource(`
      const myVars = createVars('color', 'background')
    `);

    const result = transform(program, 'test.ts');

    expect(result).toContain(
      'const myVars = createVars({ id: "cnvs-my", args: ["color", "background"] })'
    );
  });

  it('should add nested variables to the cache when the arguments are strings', () => {
    const program = createProgramFromSource(`
      const myVars = {
        foo: createVars('color', 'backgroundColor')
      }
    `);

    const sourceFile = program.getSourceFile('test.ts')!;
    const names = {};
    const extractedNames = {};

    const node = findNodes(sourceFile, 'createVars', ts.isCallExpression)![0];

    handleCreateVars(
      node,
      withDefaultContext(program.getTypeChecker(), {
        names,
        extractedNames,
      })
    );
    expect(names).toHaveProperty(
      ['myVars.foo.color'],
      expect.stringMatching(/--css-color-[a-z0-9]+/)
    );
    expect(names).toHaveProperty(
      ['myVars.foo.backgroundColor'],
      expect.stringMatching(/--css-background-color-[a-z0-9]+/)
    );

    expect(extractedNames).toHaveProperty(names['myVars.foo.color'], '--css-my-foo-color');
    expect(extractedNames).toHaveProperty(
      names['myVars.foo.backgroundColor'],
      '--css-my-foo-background-color'
    );
  });

  it('should transform nested variables to use an id and args for static typing of dependencies', () => {
    const program = createProgramFromSource(`
      const myVars = {
        foo: createVars('color')
      }
    `);

    const result = transform(program, 'test.ts');

    expect(result).toContain('foo: createVars({ id: "cnvs-my-foo", args: ["color"] })');
  });
});
