import ts from 'typescript';

import {findNodes} from '../findNodes';
import {createProgramFromSource} from '../createProgramFromSource';

import {getErrorMessage} from '../../lib/utils/getErrorMessage';

describe('getErrorMessage', () => {
  it('should return a message with fileName, line, character, and underline the correct characters', () => {
    const program = createProgramFromSource(`
      const foo = {
        bar: baz
      };
    `);

    const sourceFile = program.getSourceFile('test.ts');
    const node = findNodes(sourceFile, 'baz', ts.isIdentifier)[0];

    expect(getErrorMessage(node)).toContain('File: test.ts:2:7');
    expect(getErrorMessage(node)).toContain('const foo = {');
    expect(getErrorMessage(node)).toContain('  bar: baz');
    expect(getErrorMessage(node)).toContain('       ===');
    expect(getErrorMessage(node)).toContain('};');
  });
});
