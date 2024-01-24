import ts from 'typescript';

import {findNodes} from '../findNodes';
import {createProgramFromSource} from '../createProgramFromSource';

import {handleCreateStencil} from '../../lib/utils/handleCreateStencil';
import {transform} from '../../lib/styleTransform';

describe('handleCreateStencil', () => {
  it('should add a variable to the cache when the arguments are strings', () => {
    const program = createProgramFromSource(`
      import {createStencil} from '@workday/canvas-kit-styling';

      const buttonStencil = createStencil({
        base: {}
      })
    `);

    const sourceFile = program.getSourceFile('test.ts');

    const result = transform(program, 'test.ts');

    expect(result).toContain('}, "button")');
  });

  it('should add a variable to the cache when the arguments are strings', () => {
    const program = createProgramFromSource(`
      import {createStencil} from '@workday/canvas-kit-styling';

      const buttonStencil = createStencil({
        vars: {
          color: 'red'
        }
      })
    `);

    const sourceFile = program.getSourceFile('test.ts');
    const variables: Record<string, string> = {};

    const node = findNodes(sourceFile, 'createStencil', ts.isCallExpression)[0];

    handleCreateStencil(node, {
      checker: program.getTypeChecker(),
      prefix: 'css',
      variables,
      keyframes: {},
    });

    expect(variables).toHaveProperty('button-color', '--css-button-color');
  });

  it('should parse base styles into statically optimized versions', () => {
    const program = createProgramFromSource(`
      import {createStencil} from '@workday/canvas-kit-styling';

      const buttonStencil = createStencil({
        base: {
          padding: 10
        }
      })
    `);

    const result = transform(program, 'test.ts');

    expect(result).toContain('styles: "padding:10px;"');
  });

  it('should handle parsing variables in base styles', () => {
    const program = createProgramFromSource(`
      import {createStencil} from '@workday/canvas-kit-styling';

      const buttonStencil = createStencil({
        vars: {
          color: 'red'
        },
        base: {padding: 12}
      })
    `);

    const result = transform(program, 'test.ts');

    expect(result).toContain('styles: "--css-button-color:red;padding:12px;"');
  });

  it('should handle parsing variables in base styles via an ArrowFunction and ParenthesizedExpression', () => {
    const program = createProgramFromSource(`
      import {createStencil} from '@workday/canvas-kit-styling';

      const buttonStencil = createStencil({
        vars: {
          color: 'red'
        },
        base: ({color}) => ({
          color: color,
          padding: 12
        })
      })
    `);

    const result = transform(program, 'test.ts');

    expect(result).toContain('--css-button-color:red;');
    expect(result).toContain('color:var(--css-button-color);');
    expect(result).toContain('padding:12px;');
  });

  it('should handle parsing variables in base styles via an ArrowFunction and ReturnStatement', () => {
    const program = createProgramFromSource(`
      import {createStencil} from '@workday/canvas-kit-styling';

      const buttonStencil = createStencil({
        vars: {
          color: 'red'
        },
        base: ({color}) => {
          return {
            color: color,
            padding: 12
          }
        }
      })
    `);

    const result = transform(program, 'test.ts');

    expect(result).toContain('--css-button-color:red;');
    expect(result).toContain('color:var(--css-button-color);');
    expect(result).toContain('padding:12px;');
  });

  it('should handle parsing variables in base styles via a MethodDeclaration', () => {
    const program = createProgramFromSource(`
      import {createStencil} from '@workday/canvas-kit-styling';

      const buttonStencil = createStencil({
        vars: {
          color: 'red'
        },
        base({color}) {
          return {
            color: color,
            padding: 12
          }
        }
      })
    `);

    const result = transform(program, 'test.ts');

    expect(result).toContain('--css-button-color:red;');
    expect(result).toContain('color:var(--css-button-color);');
    expect(result).toContain('padding:12px;');
  });

  it('should handle parsing modifiers with ObjectLiteralExpressions', () => {
    const program = createProgramFromSource(`
      import {createStencil} from '@workday/canvas-kit-styling';

      const buttonStencil = createStencil({
        vars: {
          color: 'red'
        },
        base: {},
        modifiers: {
          size: {
            large: {padding: 20},
            small: {padding: 10}
          }
        }
      })
    `);

    const result = transform(program, 'test.ts');

    expect(result).toMatch(/large: { name: "[0-9a-z]+", styles: "padding:20px;" }/);
    expect(result).toMatch(/small: { name: "[0-9a-z]+", styles: "padding:10px;" }/);
  });

  it('should handle parsing modifiers with ObjectLiteralExpressions', () => {
    const program = createProgramFromSource(`
      import {createStencil} from '@workday/canvas-kit-styling';

      const buttonStencil = createStencil({
        vars: {
          color: 'red'
        },
        base: {},
        modifiers: {
          size: {
            large: {},
            small: {}
          }
        },
        compound: [
          {
            modifiers: { size: 'large' },
            styles: { padding: 20 }
          }
        ]
      })
    `);

    const result = transform(program, 'test.ts');

    expect(result).toMatch(/styles: { name: "[0-9a-z]+", styles: "padding:20px;" }/);
  });
});
