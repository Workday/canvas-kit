import ts from 'typescript';

import {withDefaultContext} from '../../lib/styleTransform';
import {
  maybeWrapCSSVariables,
  parseObjectToStaticValue,
} from '../../lib/utils/parseObjectToStaticValue';
import {createProgramFromSource} from '../createProgramFromSource';
import {findNodes} from '../findNodes';

describe('maybeWrapCSSVariables', () => {
  it('should wrap a variable with var(variable)', () => {
    const input = '--foo-bar';
    const expected = 'var(--foo-bar)';

    expect(maybeWrapCSSVariables(input, {})).toEqual(expected);
  });

  it('should wrap a variable that has a matching fallback with var(variable, fallback)', () => {
    const input = '--foo-bar';
    const expected = 'var(--foo-bar, red)';

    expect(maybeWrapCSSVariables(input, {'--foo-bar': 'red'})).toEqual(expected);
  });

  it('should add a fallback to a var() wrapper that does not have a specified fallback, but one matches', () => {
    const input = 'var(--foo-bar)';
    const expected = 'var(--foo-bar, red)';

    expect(maybeWrapCSSVariables(input, {'--foo-bar': 'red'})).toEqual(expected);
  });

  it('should leave alone a var wrapper with a fallback specified', () => {
    const input = 'var(--foo-bar, red)';
    const expected = 'var(--foo-bar, red)';

    expect(maybeWrapCSSVariables(input, {})).toEqual(expected);
  });

  it('should leave alone a var wrapper with a fallback specified even with a matching fallback', () => {
    const input = 'var(--foo-bar, red)';
    const expected = 'var(--foo-bar, red)';

    expect(maybeWrapCSSVariables(input, {'--foo-bar': 'blue'})).toEqual(expected);
  });

  it('should add a fallback even to a nested var() wrapper with no specified fallback that has a matching fallback', () => {
    const input = 'var(--some-var, var(--foo-bar))';
    const expected = 'var(--some-var, var(--foo-bar, red))';

    expect(maybeWrapCSSVariables(input, {'--foo-bar': 'red'})).toEqual(expected);
  });

  it('should add var() to variables inside other CSS functions', () => {
    const input = 'calc(--foo-bar)';
    const expected = 'calc(var(--foo-bar))';

    expect(maybeWrapCSSVariables(input, {})).toEqual(expected);
  });

  it('should add var() with matching fallbacks to variables inside other CSS functions', () => {
    const input = 'calc(--foo-bar)';
    const expected = 'calc(var(--foo-bar, red))';

    expect(maybeWrapCSSVariables(input, {'--foo-bar': 'red'})).toEqual(expected);
  });
});

describe('parseObjectToStaticValue', () => {
  it('should return the string value of a StringLiteral', () => {
    const program = createProgramFromSource(`
      const foo = {
        bar: '12px'
      }
    `);

    const sourceFile = program.getSourceFile('test.ts')!;
    const node = findNodes(sourceFile, '', ts.isObjectLiteralExpression)![0];

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

    const sourceFile = program.getSourceFile('test.ts')!;
    const node = findNodes(sourceFile, '', ts.isObjectLiteralExpression)![0];

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

    const sourceFile = program.getSourceFile('test.ts')!;
    const node = findNodes(sourceFile, '', ts.isObjectLiteralExpression)![2];

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

    const sourceFile = program.getSourceFile('test.ts')!;
    const node = findNodes(sourceFile, '', ts.isObjectLiteralExpression)![1];

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

    const sourceFile = program.getSourceFile('test.ts')!;
    const node = findNodes(sourceFile, '', ts.isObjectLiteralExpression)![2];

    expect(parseObjectToStaticValue(node, withDefaultContext(program.getTypeChecker()))).toEqual({
      '&:hover': {
        padding: '12px',
      },
    });
  });

  it('should handle a ShorthandPropertyAssignment when the Identifier is a known name', () => {
    const program = createProgramFromSource(`
      const foo = {
        margin,
      }
    `);

    const sourceFile = program.getSourceFile('test.ts')!;
    const node = findNodes(sourceFile, '', ts.isObjectLiteralExpression)![0];

    expect(
      parseObjectToStaticValue(
        node,
        withDefaultContext(program.getTypeChecker(), {names: {margin: '12px'}})
      )
    ).toEqual({
      margin: '12px',
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

    const sourceFile = program.getSourceFile('test.ts')!;
    const node = findNodes(sourceFile, '', ts.isObjectLiteralExpression)![1];

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

    const sourceFile = program.getSourceFile('test.ts')!;
    const node = findNodes(sourceFile, '', ts.isObjectLiteralExpression)![0];

    expect(
      parseObjectToStaticValue(
        node,
        withDefaultContext(program.getTypeChecker(), {
          names: {
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

    const sourceFile = program.getSourceFile('test.ts')!;
    const node = findNodes(sourceFile, '', ts.isObjectLiteralExpression)![0];

    expect(
      parseObjectToStaticValue(
        node,
        withDefaultContext(program.getTypeChecker(), {
          names: {
            '--fallback': '12px',
          },
        })
      )
    ).toEqual({
      padding: 'var(--foobar, var(--fallback, 12px))',
    });
  });
});
