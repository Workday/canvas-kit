import ts from 'typescript';

import {findNodes} from '../findNodes';
import {createProgramFromSource} from '../createProgramFromSource';

import {parseNodeToStaticValue} from '../../lib/utils/parseNodeToStaticValue';

describe('parseNodeToStaticValue', () => {
  it('should return the string value of a StringLiteral', () => {
    const program = createProgramFromSource(`
      'foo'
    `);

    const sourceFile = program.getSourceFile('test.ts');
    const node = findNodes(sourceFile, '', ts.isStringLiteral)[0];

    expect(parseNodeToStaticValue(node, program.getTypeChecker())).toEqual('foo');
  });

  it('should return the string value of a NumericLiteral', () => {
    const program = createProgramFromSource(`
      12
    `);

    const sourceFile = program.getSourceFile('test.ts');
    const node = findNodes(sourceFile, '', ts.isNumericLiteral)[0];

    expect(parseNodeToStaticValue(node, program.getTypeChecker())).toEqual('12px');
  });

  it('should return the string value of a string Identifier', () => {
    const program = createProgramFromSource(`
      const foo = 'bar';
    `);

    const sourceFile = program.getSourceFile('test.ts');
    const node = findNodes(sourceFile, '', ts.isIdentifier)[0];

    expect(parseNodeToStaticValue(node, program.getTypeChecker())).toEqual('bar');
  });

  it('should return the string value of a numerical Identifier', () => {
    const program = createProgramFromSource(`
      const foo = 12;
    `);

    const sourceFile = program.getSourceFile('test.ts');
    const node = findNodes(sourceFile, '', ts.isIdentifier)[0];

    expect(parseNodeToStaticValue(node, program.getTypeChecker())).toEqual('12px');
  });

  it('should return the string value of a PropertyAccessExpression', () => {
    const program = createProgramFromSource(`
      const foo = { bar: 'baz' } as const;

      foo.bar
    `);

    const sourceFile = program.getSourceFile('test.ts');
    const node = findNodes(sourceFile, '', ts.isPropertyAccessExpression)[0];

    expect(parseNodeToStaticValue(node, program.getTypeChecker())).toEqual('baz');
  });

  it('should return the string value of a PropertyAccessExpression', () => {
    const program = createProgramFromSource(`
      const foo = { bar: {baz: 12} } as const;

      foo.bar.baz
    `);

    const sourceFile = program.getSourceFile('test.ts');
    const node = findNodes(sourceFile, '', ts.isPropertyAccessExpression)[0];

    expect(parseNodeToStaticValue(node, program.getTypeChecker())).toEqual('12px');
  });

  it('should return the string value of a PropertyAccessExpression of a variable', () => {
    const program = createProgramFromSource(`
      foo.bar
    `);

    const sourceFile = program.getSourceFile('test.ts');
    const node = findNodes(sourceFile, '', ts.isPropertyAccessExpression)[0];

    expect(
      parseNodeToStaticValue(node, program.getTypeChecker(), 'css', {
        'foo-bar': '--css-foo-bar',
      })
    ).toEqual('--css-foo-bar');
  });

  it('should return the string value of a ComputedPropertyName of a variable', () => {
    const program = createProgramFromSource(`
      const temp = {
        [foo.bar]: 'baz'
      }
    `);

    const sourceFile = program.getSourceFile('test.ts');
    const node = findNodes(sourceFile, '', ts.isComputedPropertyName)[0];

    expect(
      parseNodeToStaticValue(node, program.getTypeChecker(), 'css', {
        'foo-bar': '--css-foo-bar',
      })
    ).toEqual('--css-foo-bar');
  });

  it('should return the string value of a ComputedPropertyName of a variable', () => {
    const program = createProgramFromSource(`
      const foo = '--bar';

      const temp = {
        [foo]: 'baz'
      }
    `);

    const sourceFile = program.getSourceFile('test.ts');
    const node = findNodes(sourceFile, '', ts.isComputedPropertyName)[0];

    expect(parseNodeToStaticValue(node, program.getTypeChecker())).toEqual('--bar');
  });

  it('should handle the "cssVar" CallExpression with a StringLiteral', () => {
    const program = createProgramFromSource(`
      cssVar('--foo')
    `);

    const sourceFile = program.getSourceFile('test.ts');
    const node = findNodes(sourceFile, '', ts.isCallExpression)[0];

    expect(parseNodeToStaticValue(node, program.getTypeChecker())).toEqual('var(--foo)');
  });

  it('should handle the "cssVar" CallExpression with a variable', () => {
    const program = createProgramFromSource(`
      cssVar(foo.bar)
    `);

    const sourceFile = program.getSourceFile('test.ts');
    const node = findNodes(sourceFile, '', ts.isCallExpression)[0];

    expect(
      parseNodeToStaticValue(node, program.getTypeChecker(), 'css', {
        'foo-bar': '--css-foo-bar',
      })
    ).toEqual('var(--css-foo-bar)');
  });

  it('should handle the "cssVar" CallExpression with a static PropertyExpression', () => {
    const program = createProgramFromSource(`
      const foo = { bar: '--baz' } as const;

      cssVar(foo.bar)
    `);

    const sourceFile = program.getSourceFile('test.ts');
    const node = findNodes(sourceFile, '', ts.isCallExpression)[0];

    expect(parseNodeToStaticValue(node, program.getTypeChecker())).toEqual('var(--baz)');
  });

  it('should handle the "cssVar" CallExpression with a StringLiteral and a StringLiteral fallback', () => {
    const program = createProgramFromSource(`
      cssVar('--foo', '--bar')
    `);

    const sourceFile = program.getSourceFile('test.ts');
    const node = findNodes(sourceFile, '', ts.isCallExpression)[0];

    expect(parseNodeToStaticValue(node, program.getTypeChecker())).toEqual('var(--foo, --bar)');
  });

  it('should handle the "cssVar" CallExpression with automatic fallback variables', () => {
    const program = createProgramFromSource(`
      cssVar('--fallback')
    `);

    const sourceFile = program.getSourceFile('test.ts');
    const node = findNodes(sourceFile, '', ts.isCallExpression)[0];

    expect(
      parseNodeToStaticValue(node, program.getTypeChecker(), 'css', {
        '--fallback': '12px',
      })
    ).toEqual('var(--fallback, 12px)');
  });

  it('should handle the "cssVar" CallExpression with nested automatic fallback variables', () => {
    const program = createProgramFromSource(`
      cssVar('--foo', cssVar('--fallback'))
    `);

    const sourceFile = program.getSourceFile('test.ts');
    const node = findNodes(sourceFile, '', ts.isCallExpression)[0];

    expect(
      parseNodeToStaticValue(node, program.getTypeChecker(), 'css', {
        '--fallback': '12px',
      })
    ).toEqual('var(--foo, var(--fallback, 12px))');
  });

  it('should handle the "cssVar" CallExpression with nested automatic fallback variables', () => {
    const program = createProgramFromSource(`
      cssVar('--foo', cssVar('--fallback'))
    `);

    const sourceFile = program.getSourceFile('test.ts');
    const node = findNodes(sourceFile, '', ts.isCallExpression)[0];

    expect(
      parseNodeToStaticValue(node, program.getTypeChecker(), 'css', {
        '--fallback': '12px',
      })
    ).toEqual('var(--foo, var(--fallback, 12px))');
  });
});
