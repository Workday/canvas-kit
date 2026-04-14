import ts from 'typescript';

import {transform, withDefaultContext} from '../../lib/styleTransform';
import {handleCreateVars} from '../../lib/utils/handleCreateVars';
import {createProgramFromSource} from '../createProgramFromSource';
import {findNodes} from '../findNodes';

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

    expect(names).toHaveProperty(['myVars.color'], expect.stringMatching(/--color-[a-z0-9]+/));
    expect(names).toHaveProperty(
      ['myVars.backgroundColor'],
      expect.stringMatching(/--backgroundColor-[a-z0-9]+/)
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

    const names = {};

    const result = transform(
      program,
      'test.ts',
      withDefaultContext(program.getTypeChecker(), {
        names,
      })
    );

    expect(result).toContain(
      `const myVars = createVars({ id: "${names['myVars.color'].replace(
        '--color-',
        ''
      )}", args: ["color", "background"] })`
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
    expect(names).toHaveProperty(['myVars.foo.color'], expect.stringMatching(/--color-[a-z0-9]+/));
    expect(names).toHaveProperty(
      ['myVars.foo.backgroundColor'],
      expect.stringMatching(/--backgroundColor-[a-z0-9]+/)
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

    const names = {};

    const result = transform(
      program,
      'test.ts',
      withDefaultContext(program.getTypeChecker(), {
        names,
      })
    );

    expect(result).toContain(
      `foo: createVars({ id: "${names['myVars.foo.color'].replace(
        '--color-',
        ''
      )}", args: ["color"] })`
    );
  });
});
