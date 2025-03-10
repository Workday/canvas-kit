import ts from 'typescript';

import {findNodes} from '../findNodes';
import {createProgramFromSource} from '../createProgramFromSource';

import {parseNodeToStaticValue} from '../../lib/utils/parseNodeToStaticValue';
import {withDefaultContext} from '../../lib/styleTransform';

describe('parseNodeToStaticValue', () => {
  it('should return the string value of a StringLiteral', () => {
    const program = createProgramFromSource(`
      'foo'
    `);

    const sourceFile = program.getSourceFile('test.ts')!;
    const node = findNodes(sourceFile, '', ts.isStringLiteral)![0];

    expect(parseNodeToStaticValue(node, withDefaultContext(program.getTypeChecker()))).toEqual(
      'foo'
    );
  });

  it('should return the number value of a NumericLiteral', () => {
    const program = createProgramFromSource(`
      12
    `);

    const sourceFile = program.getSourceFile('test.ts')!;
    const node = findNodes(sourceFile, '', ts.isNumericLiteral)![0];

    expect(parseNodeToStaticValue(node, withDefaultContext(program.getTypeChecker()))).toEqual(12);
  });

  it('should return the negative number value of a PrefixUnaryExpression NumericLiteral', () => {
    const program = createProgramFromSource(`
      -12
    `);

    const sourceFile = program.getSourceFile('test.ts')!;
    const node = findNodes(sourceFile, '', ts.isPrefixUnaryExpression)![0];

    expect(parseNodeToStaticValue(node, withDefaultContext(program.getTypeChecker()))).toEqual(-12);
  });

  it('should return the string value of a string Identifier', () => {
    const program = createProgramFromSource(`
      const foo = 'bar';
    `);

    const sourceFile = program.getSourceFile('test.ts')!;
    const node = findNodes(sourceFile, '', ts.isIdentifier)![0];

    expect(parseNodeToStaticValue(node, withDefaultContext(program.getTypeChecker()))).toEqual(
      'bar'
    );
  });

  it('should return the string value of a numerical Identifier', () => {
    const program = createProgramFromSource(`
      const foo = 12;
    `);

    const sourceFile = program.getSourceFile('test.ts')!;
    const node = findNodes(sourceFile, '', ts.isIdentifier)![0];

    expect(parseNodeToStaticValue(node, withDefaultContext(program.getTypeChecker()))).toEqual(12);
  });

  it('should return the string value of a PropertyAccessExpression', () => {
    const program = createProgramFromSource(`
      const foo = { bar: 'baz' } as const;

      foo.bar
    `);

    const sourceFile = program.getSourceFile('test.ts')!;
    const node = findNodes(sourceFile, '', ts.isPropertyAccessExpression)![0];

    expect(parseNodeToStaticValue(node, withDefaultContext(program.getTypeChecker()))).toEqual(
      'baz'
    );
  });

  it('should return the string value of a PropertyAccessExpression', () => {
    const program = createProgramFromSource(`
      const foo = { bar: {baz: 12} } as const;

      foo.bar.baz
    `);

    const sourceFile = program.getSourceFile('test.ts')!;
    const node = findNodes(sourceFile, '', ts.isPropertyAccessExpression)![0];

    expect(parseNodeToStaticValue(node, withDefaultContext(program.getTypeChecker()))).toEqual(12);
  });

  it('should return the string value of a PropertyAccessExpression of a variable', () => {
    const program = createProgramFromSource(`
      foo.bar
    `);

    const sourceFile = program.getSourceFile('test.ts')!;
    const node = findNodes(sourceFile, '', ts.isPropertyAccessExpression)![0];

    expect(
      parseNodeToStaticValue(
        node,
        withDefaultContext(program.getTypeChecker(), {
          names: {
            'foo.bar': '--css-foo-bar',
          },
        })
      )
    ).toEqual('--css-foo-bar');
  });

  it('should return the string value of a ElementAccessExpression', () => {
    const program = createProgramFromSource(`
      const foo = { 1: '12px'} as const;

      foo[1]
    `);

    const sourceFile = program.getSourceFile('test.ts')!;
    const node = findNodes(sourceFile, '', ts.isElementAccessExpression)![0];

    expect(parseNodeToStaticValue(node, withDefaultContext(program.getTypeChecker()))).toEqual(
      '12px'
    );
  });

  it('should return the string value of a ElementAccessExpression', () => {
    const program = createProgramFromSource(`
      const foo = ['12px'] as const;

      foo[0]
    `);

    const sourceFile = program.getSourceFile('test.ts')!;
    const node = findNodes(sourceFile, '', ts.isElementAccessExpression)![0];

    expect(parseNodeToStaticValue(node, withDefaultContext(program.getTypeChecker()))).toEqual(
      '12px'
    );
  });

  it('should return the string value of a ComputedPropertyName of a variable', () => {
    const program = createProgramFromSource(`
      const temp = {
        [foo.bar]: 'baz'
      }
    `);

    const sourceFile = program.getSourceFile('test.ts')!;
    const node = findNodes(sourceFile, '', ts.isComputedPropertyName)![0];

    expect(
      parseNodeToStaticValue(
        node,
        withDefaultContext(program.getTypeChecker(), {
          names: {
            'foo.bar': '--css-foo-bar',
          },
        })
      )
    ).toEqual('--css-foo-bar');
  });

  it('should return the string value of a ComputedPropertyName around a TemplateStringLiteral of a variable', () => {
    const program = createProgramFromSource(`
      const temp = {
        [\`\${foo.bar\}\`]: 'baz'
      }
    `);

    const sourceFile = program.getSourceFile('test.ts')!;
    const node = findNodes(sourceFile, '', ts.isComputedPropertyName)![0];

    expect(
      parseNodeToStaticValue(
        node,
        withDefaultContext(program.getTypeChecker(), {
          names: {
            'foo.bar': '--css-foo-bar',
          },
        })
      )
    ).toEqual('--css-foo-bar');
  });

  it('should return the string value of a ComputedPropertyName of a variable', () => {
    const program = createProgramFromSource(`
      const foo = '--bar';

      const temp = {
        [foo]: 'baz'
      }
    `);

    const sourceFile = program.getSourceFile('test.ts')!;
    const node = findNodes(sourceFile, '', ts.isComputedPropertyName)![0];

    expect(parseNodeToStaticValue(node, withDefaultContext(program.getTypeChecker()))).toEqual(
      '--bar'
    );
  });

  it('should handle keyframes', () => {
    const program = createProgramFromSource(`
      \`\${myAnimation} 1s ease\`
    `);

    const sourceFile = program.getSourceFile('test.ts')!;
    const node = findNodes(sourceFile, '', ts.isTemplateExpression)![0];

    expect(
      parseNodeToStaticValue(
        node,
        withDefaultContext(program.getTypeChecker(), {
          names: {myAnimation: 'animation-abc123'},
        })
      )
    ).toEqual('animation-abc123 1s ease');
  });
});
