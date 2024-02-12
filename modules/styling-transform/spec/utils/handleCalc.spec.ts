import ts from 'typescript';

import {calc} from '@workday/canvas-kit-styling';
import {
  createProgramFromSource,
  findNodes,
  withDefaultContext,
} from '@workday/canvas-kit-styling-transform/testing';

import {handleCalc} from '../../lib/utils/handleCalc';

describe('handleCalc', () => {
  it('should handle calc.add on two StringLiteral values', () => {
    const program = createProgramFromSource(`
      calc.add('20px', '2rem')
    `);

    const sourceFile = program.getSourceFile('test.ts');
    const node = findNodes(sourceFile, '', ts.isCallExpression)[0];

    const result = handleCalc(node, withDefaultContext(program.getTypeChecker()));

    expect(result).toEqual(calc.add('20px', '2rem'));
  });

  it('should handle calc.add with non StringLiterals', () => {
    const program = createProgramFromSource(`
      const foo = '20px'

      calc.add(foo, '2rem')
    `);

    const sourceFile = program.getSourceFile('test.ts');
    const node = findNodes(sourceFile, '', ts.isCallExpression)[0];

    const result = handleCalc(node, withDefaultContext(program.getTypeChecker()));

    expect(result).toEqual(calc.add('20px', '2rem'));
  });

  it('should handle calc.add with non variables', () => {
    const program = createProgramFromSource(`
      calc.add(myVars.foo, '2rem')
    `);

    const sourceFile = program.getSourceFile('test.ts');
    const node = findNodes(sourceFile, '', ts.isCallExpression)[0];

    const result = handleCalc(
      node,
      withDefaultContext(program.getTypeChecker(), {
        variables: {'my-foo': '--foo'},
      })
    );

    expect(result).toEqual(calc.add('--foo', '2rem'));
  });

  it('should handle calc.subtract on two StringLiteral values', () => {
    const program = createProgramFromSource(`
      calc.subtract('20px', '2rem')
    `);

    const sourceFile = program.getSourceFile('test.ts');
    const node = findNodes(sourceFile, '', ts.isCallExpression)[0];

    const result = handleCalc(node, withDefaultContext(program.getTypeChecker()));

    expect(result).toEqual(calc.subtract('20px', '2rem'));
  });

  it('should handle calc.subtract with non StringLiterals', () => {
    const program = createProgramFromSource(`
      const foo = '20px'

      calc.subtract(foo, '2rem')
    `);

    const sourceFile = program.getSourceFile('test.ts');
    const node = findNodes(sourceFile, '', ts.isCallExpression)[0];

    const result = handleCalc(node, withDefaultContext(program.getTypeChecker()));

    expect(result).toEqual(calc.subtract('20px', '2rem'));
  });

  it('should handle calc.subtract with non variables', () => {
    const program = createProgramFromSource(`
      calc.subtract(myVars.foo, '2rem')
    `);

    const sourceFile = program.getSourceFile('test.ts');
    const node = findNodes(sourceFile, '', ts.isCallExpression)[0];

    const result = handleCalc(
      node,
      withDefaultContext(program.getTypeChecker(), {
        variables: {'my-foo': '--foo'},
      })
    );

    expect(result).toEqual(calc.subtract('--foo', '2rem'));
  });

  it('should handle calc.multiply on two StringLiteral values', () => {
    const program = createProgramFromSource(`
      calc.multiply('20px', '2')
    `);

    const sourceFile = program.getSourceFile('test.ts');
    const node = findNodes(sourceFile, '', ts.isCallExpression)[0];

    const result = handleCalc(node, withDefaultContext(program.getTypeChecker()));

    expect(result).toEqual(calc.multiply('20px', '2'));
  });

  it('should handle calc.multiply with non StringLiterals', () => {
    const program = createProgramFromSource(`
      const foo = '20px'

      calc.multiply(foo, '2')
    `);

    const sourceFile = program.getSourceFile('test.ts');
    const node = findNodes(sourceFile, '', ts.isCallExpression)[0];

    const result = handleCalc(node, withDefaultContext(program.getTypeChecker()));

    expect(result).toEqual(calc.multiply('20px', '2'));
  });

  it('should handle calc.multiply with non variables', () => {
    const program = createProgramFromSource(`
      calc.multiply(myVars.foo, '2')
    `);

    const sourceFile = program.getSourceFile('test.ts');
    const node = findNodes(sourceFile, '', ts.isCallExpression)[0];

    const result = handleCalc(
      node,
      withDefaultContext(program.getTypeChecker(), {
        variables: {'my-foo': '--foo'},
      })
    );

    expect(result).toEqual(calc.multiply('--foo', '2'));
  });

  it('should handle calc.divide on two StringLiteral values', () => {
    const program = createProgramFromSource(`
      calc.divide('20px', '2')
    `);

    const sourceFile = program.getSourceFile('test.ts');
    const node = findNodes(sourceFile, '', ts.isCallExpression)[0];

    const result = handleCalc(node, withDefaultContext(program.getTypeChecker()));

    expect(result).toEqual(calc.divide('20px', '2'));
  });

  it('should handle calc.divide with non StringLiterals', () => {
    const program = createProgramFromSource(`
      const foo = '20px'

      calc.divide(foo, '2')
    `);

    const sourceFile = program.getSourceFile('test.ts');
    const node = findNodes(sourceFile, '', ts.isCallExpression)[0];

    const result = handleCalc(node, withDefaultContext(program.getTypeChecker()));

    expect(result).toEqual(calc.divide('20px', '2'));
  });

  it('should handle calc.divide with non variables', () => {
    const program = createProgramFromSource(`
      calc.divide(myVars.foo, '2')
    `);

    const sourceFile = program.getSourceFile('test.ts');
    const node = findNodes(sourceFile, '', ts.isCallExpression)[0];

    const result = handleCalc(
      node,
      withDefaultContext(program.getTypeChecker(), {
        variables: {'my-foo': '--foo'},
      })
    );

    expect(result).toEqual(calc.divide('--foo', '2'));
  });

  it('should handle calc.negate on two StringLiteral values', () => {
    const program = createProgramFromSource(`
      calc.negate('20px')
    `);

    const sourceFile = program.getSourceFile('test.ts');
    const node = findNodes(sourceFile, '', ts.isCallExpression)[0];

    const result = handleCalc(node, withDefaultContext(program.getTypeChecker()));

    expect(result).toEqual(calc.negate('20px'));
  });

  it('should handle calc.negate with non StringLiterals', () => {
    const program = createProgramFromSource(`
      const foo = '20px'

      calc.negate(foo)
    `);

    const sourceFile = program.getSourceFile('test.ts');
    const node = findNodes(sourceFile, '', ts.isCallExpression)[0];

    const result = handleCalc(node, withDefaultContext(program.getTypeChecker()));

    expect(result).toEqual(calc.negate('20px'));
  });

  it('should handle calc.negate with non variables', () => {
    const program = createProgramFromSource(`
      calc.negate(myVars.foo)
    `);

    const sourceFile = program.getSourceFile('test.ts');
    const node = findNodes(sourceFile, '', ts.isCallExpression)[0];

    const result = handleCalc(
      node,
      withDefaultContext(program.getTypeChecker(), {
        variables: {'my-foo': '--foo'},
      })
    );

    expect(result).toEqual(calc.negate('--foo'));
  });
});
