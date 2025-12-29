import ts from 'typescript';

import {getVarName} from '../../lib/utils/getVarName';
import {createProgramFromSource} from '../createProgramFromSource';
import {findNodes} from '../findNodes';

describe('getVarName', () => {
  it('should get the correct CSS variable name of a single VariableDeclaration', () => {
    const program = createProgramFromSource(`
      const foo = 'bar';
    `);

    const sourceFile = program.getSourceFile('test.ts')!;

    const node = findNodes(sourceFile, 'foo', ts.isVariableDeclaration)![0];

    expect(getVarName(node)).toEqual('foo');
  });

  it('should get the correct CSS variable name of a nested PropertyAssignment', () => {
    const program = createProgramFromSource(`
      import React from 'react';
      const foo = {
        bar: {
          baz: '1'
        }
      };
    `);

    const sourceFile = program.getSourceFile('test.ts')!;

    const node = findNodes(sourceFile, 'baz', ts.isPropertyAssignment)![0];

    expect(getVarName(node)).toEqual('foo.bar.baz');
  });

  it('should get the correct CSS variable name of a nested PropertyAssignment with functions', () => {
    const program = createProgramFromSource(`
      import React from 'react';
      const foo = () => ({
        bar: () => ({
          baz: '1'
        })
      });
    `);

    const sourceFile = program.getSourceFile('test.ts')!;

    const node = findNodes(sourceFile, 'baz', ts.isPropertyAssignment)![0];

    expect(getVarName(node)).toEqual('foo.bar.baz');
  });

  it('should get the correct CSS variable name of a nested PropertyAssignment with functions', () => {
    const program = createProgramFromSource(`
      import React from 'react';
      const foo = {
        bar: {
          'baz': '1'
        }
      };
    `);

    const sourceFile = program.getSourceFile('test.ts')!;

    const node = findNodes(sourceFile, 'baz', ts.isPropertyAssignment)![0];

    expect(getVarName(node.name)).toEqual('foo.bar.baz');
  });
});
