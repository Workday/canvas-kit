import ts from 'typescript';

import {findNodes} from '../findNodes';
import {createProgramFromSource} from '../createProgramFromSource';

import {parseObjectToStaticValue} from '../../lib/utils/parseObjectToStaticValue';

describe('parseObjectToStaticValue', () => {
  it('should return the string value of a StringLiteral', () => {
    const program = createProgramFromSource(`
      const foo = {
        bar: '12px'
      }
    `);

    const sourceFile = program.getSourceFile('test.ts');
    const node = findNodes(sourceFile, '', ts.isObjectLiteralExpression)[0];

    expect(parseObjectToStaticValue(node, program.getTypeChecker())).toEqual({
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

    expect(parseObjectToStaticValue(node, program.getTypeChecker())).toEqual({
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

    expect(parseObjectToStaticValue(node, program.getTypeChecker())).toEqual({
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

    expect(parseObjectToStaticValue(node, program.getTypeChecker())).toEqual({
      '&:hover': {
        padding: '12px',
      },
    });
  });

  it('should return the result of the spread operator with a "focusRing" call', () => {
    const program = createProgramFromSource(`
      const styles = {
        ...focusRing({
          width: 2,
          separation: 2,
          innerColor: cssVar(myVars.boxShadowInner, cssVar('--test-fallback-inner', '#fff')),
          outerColor: cssVar(
            myVars.boxShadowOuter,
            cssVar('--test-fallback-outer', 'rgba(0,92,184,1)')
          )
        })
      }
    `);

    const sourceFile = program.getSourceFile('test.ts');
    const node = findNodes(sourceFile, '', ts.isObjectLiteralExpression)[0];

    expect(
      parseObjectToStaticValue(node, program.getTypeChecker(), 'css', {
        'my-vars-boxShadowInner': '--css-my-vars-boxShadowInner',
        'my-vars-boxShadowOuter': '--css-my-vars-boxShadowOuter',
      })
    ).toEqual({
      boxShadow:
        '0 0 0 2px var(--css-my-vars-boxShadowInner, var(--test-fallback-inner, #fff)), 0 0 0 calc(2px + 2px) var(--css-my-vars-boxShadowOuter, var(--test-fallback-outer, rgba(0,92,184,1)))',
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

    expect(parseObjectToStaticValue(node, program.getTypeChecker())).toEqual({
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
      parseObjectToStaticValue(node, program.getTypeChecker(), 'css', {
        '--fallback': '12px',
      })
    ).toEqual({
      padding: 'var(--fallback, 12px)',
    });
  });
});
