import ts from 'typescript';

import {findNodes} from '../findNodes';
import {createProgramFromSource} from '../createProgramFromSource';

import {parseObjectToStaticValue} from '../../lib/utils/parseObjectToStaticValue';
import {withDefaultContext} from '../../lib/styleTransform';

describe('parseObjectToStaticValue', () => {
  it('should return the string value of a StringLiteral', () => {
    const program = createProgramFromSource(`
      const foo = {
        bar: '12px'
      }
    `);

    const sourceFile = program.getSourceFile('test.ts');
    const node = findNodes(sourceFile, '', ts.isObjectLiteralExpression)[0];

    expect(parseObjectToStaticValue(node, withDefaultContext(program.getTypeChecker()))).toEqual({
      bar: '12px',
    });
  });

  it('should return the nested value of an ObjectLiteralExpression', () => {
    const program = createProgramFromSource(`
      const foo = {
        '&:hover': {
          padding: '12px'
        }
      }
    `);

    const sourceFile = program.getSourceFile('test.ts');
    const node = findNodes(sourceFile, '', ts.isObjectLiteralExpression)[0];

    expect(parseObjectToStaticValue(node, withDefaultContext(program.getTypeChecker()))).toEqual({
      '&:hover': {
        padding: '12px',
      },
    });
  });

  it('should return the nested value of a SpreadAssignment', () => {
    const program = createProgramFromSource(`
      const foo = {
        '&:hover': {
          padding: '12px'
        }
      }

      const bar = { ...foo }
    `);

    const sourceFile = program.getSourceFile('test.ts');
    const node = findNodes(sourceFile, '', ts.isObjectLiteralExpression)[2];

    expect(parseObjectToStaticValue(node, withDefaultContext(program.getTypeChecker()))).toEqual({
      '&:hover': {
        padding: '12px',
      },
    });
  });

  it('should wrap SpreadAssignment in var() wrappers if necessary', () => {
    const program = createProgramFromSource(`
      const foo = {
        color: '--var-color'
      } as const

      const bar = { ...foo }
    `);

    const sourceFile = program.getSourceFile('test.ts');
    const node = findNodes(sourceFile, '', ts.isObjectLiteralExpression)[1];

    expect(parseObjectToStaticValue(node, withDefaultContext(program.getTypeChecker()))).toEqual({
      color: 'var(--var-color)',
    });
  });

  it('should return the nested value of a SpreadAssignment', () => {
    const program = createProgramFromSource(`
      const foo = {
        '&:hover': {
          padding: '12px'
        }
      }

      const bar = { ...foo }
    `);

    const sourceFile = program.getSourceFile('test.ts');
    const node = findNodes(sourceFile, '', ts.isObjectLiteralExpression)[2];

    expect(parseObjectToStaticValue(node, withDefaultContext(program.getTypeChecker()))).toEqual({
      '&:hover': {
        padding: '12px',
      },
    });
  });

  it('should return the result of the spread operator with a call expression that can return a statically analyzed return', () => {
    const program = createProgramFromSource(`
      const makeFontSize = <T extends string>(input: T): { fontSize: T} => {
        return {
          fontSize: input
        }
      }

      const styles = {
        ...makeFontSize('12px')
      }
    `);

    const sourceFile = program.getSourceFile('test.ts');
    const node = findNodes(sourceFile, '', ts.isObjectLiteralExpression)[1];

    expect(parseObjectToStaticValue(node, withDefaultContext(program.getTypeChecker()))).toEqual({
      fontSize: '12px',
    });
  });

  it('should handle fallback variables automatically for StringLiteral', () => {
    const program = createProgramFromSource(`
      const styles = {
        padding: '--fallback'
      }
    `);

    const sourceFile = program.getSourceFile('test.ts');
    const node = findNodes(sourceFile, '', ts.isObjectLiteralExpression)[0];

    expect(
      parseObjectToStaticValue(
        node,
        withDefaultContext(program.getTypeChecker(), {
          variables: {
            '--fallback': '12px',
          },
        })
      )
    ).toEqual({
      padding: 'var(--fallback, 12px)',
    });
  });

  it('should handle nested fallbacks fallback variables automatically for StringLiteral', () => {
    const program = createProgramFromSource(`
      const styles = {
        padding: \`var(${'--foobar'}, ${'--fallback'})\`
      }
    `);

    const sourceFile = program.getSourceFile('test.ts');
    const node = findNodes(sourceFile, '', ts.isObjectLiteralExpression)[0];

    expect(
      parseObjectToStaticValue(
        node,
        withDefaultContext(program.getTypeChecker(), {
          variables: {
            '--fallback': '12px',
          },
        })
      )
    ).toEqual({
      padding: 'var(--foobar, var(--fallback, 12px))',
    });
  });
});
