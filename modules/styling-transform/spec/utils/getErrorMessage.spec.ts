import ts from 'typescript';

import {findNodes} from '../findNodes';
import {createProgramFromSource} from '../createProgramFromSource';

import {getErrorMessage} from '../../lib/utils/getErrorMessage';
import {withDefaultContext} from '../../lib/styleTransform';

describe('getErrorMessage', () => {
  it('should return a message with fileName, line, character, and underline the correct characters', () => {
    const program = createProgramFromSource(`
      const foo = {
        bar: baz
      };
    `);

    const sourceFile = program.getSourceFile('test.ts');
    const node = findNodes(sourceFile, 'baz', ts.isIdentifier)[0];

    const ctx = withDefaultContext(program.getTypeChecker(), {});

    expect(getErrorMessage(node, ctx)).toContain('File: test.ts:2:7');
    expect(getErrorMessage(node, ctx)).toContain('const foo = {');
    expect(getErrorMessage(node, ctx)).toContain('  bar: baz');
    expect(getErrorMessage(node, ctx)).toContain('       ===');
    expect(getErrorMessage(node, ctx)).toContain('};');
  });
});
