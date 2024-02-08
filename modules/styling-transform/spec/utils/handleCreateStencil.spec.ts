import ts from 'typescript';

import {findNodes} from '../findNodes';
import {createProgramFromSource} from '../createProgramFromSource';

import {handleCreateStencil} from '../../lib/utils/handleCreateStencil';
import {transform, withDefaultContext} from '../../lib/styleTransform';
import {compileCSS} from '../../lib/utils/createStyleObjectNode';

describe('handleCreateStencil', () => {
  it('should add a variable to the cache when the arguments are strings', () => {
    const program = createProgramFromSource(`
      import {createStencil} from '@workday/canvas-kit-styling';

      const buttonStencil = createStencil({
        base: {
          fontSize: '12px'
        }
      })
    `);

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

    handleCreateStencil(
      node,
      withDefaultContext(program.getTypeChecker(), {
        variables,
      })
    );

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

    const result = transform(program, 'test.ts', withDefaultContext(program.getTypeChecker()));

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

    const result = transform(program, 'test.ts', withDefaultContext(program.getTypeChecker()));

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

    const result = transform(program, 'test.ts', withDefaultContext(program.getTypeChecker()));

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

    const result = transform(program, 'test.ts', withDefaultContext(program.getTypeChecker()));

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

    const result = transform(program, 'test.ts', withDefaultContext(program.getTypeChecker()));

    expect(result).toMatch(/large: { name: "[0-9a-z]+", styles: "padding:20px;" }/);
    expect(result).toMatch(/small: { name: "[0-9a-z]+", styles: "padding:10px;" }/);
  });

  it('should handle parsing modifiers with ObjectLiteralExpressions', () => {
    const program = createProgramFromSource(`
      import {createStencil, px2rem} from '@workday/canvas-kit-styling';

      const buttonStencil = createStencil({
        vars: {
          color: 'red'
        },
        base: {},
        modifiers: {
          size: {
            large: {
              padding: px2rem(5),
            },
            small: {}
          }
        }
      })
    `);

    const styles = {};

    transform(program, 'test.ts', withDefaultContext(program.getTypeChecker(), {styles}));

    expect(styles['test.css']).toContainEqual(compileCSS('.css-button{--css-button-color: red;}'));
    expect(styles['test.css']).toContainEqual(
      compileCSS('.css-button--size-large{padding: 0.3125rem;}')
    );
  });

  it('should add to extracted styles', () => {
    const program = createProgramFromSource(`
      import {createStencil} from '@workday/canvas-kit-styling';

      const buttonStencil = createStencil({
        vars: {
          color: 'red'
        },
        base({color}) {
          return {
            color: color
          }
        },
        modifiers: {
          size: {
            large: {padding: 30},
            small: {padding: 10}
          },
          inverse: {
            true: {
              color: 'while'
            }
          }
        },
        compound: [
          {
            modifiers: { size: 'large', inverse: true},
            styles: { padding: 40 }
          }
        ]
      })
    `);

    const styles = {};
    const sourceFile = program.getSourceFile('test.ts');
    const node = findNodes(sourceFile, 'createStencil', ts.isCallExpression)[0];

    handleCreateStencil(node, withDefaultContext(program.getTypeChecker(), {styles}));

    // base
    expect(styles['test.css']).toContainEqual(
      compileCSS('.css-button{--css-button-color:red;color:var(--css-button-color);}')
    );

    // modifiers
    expect(styles['test.css']).toContainEqual(compileCSS('.css-button--size-large{padding:30px;}'));
    expect(styles['test.css']).toContainEqual(compileCSS('.css-button--size-small{padding:10px;}'));
    expect(styles['test.css']).toContainEqual(compileCSS('.css-button--inverse{color:while;}'));

    // compound
    expect(styles['test.css']).toContainEqual(
      compileCSS('.css-button--size-large.css-button--inverse{padding:40px;}')
    );
  });

  it('should handle string literal keys', () => {
    const program = createProgramFromSource(`
      import {createStencil} from '@workday/canvas-kit-styling';

      const buttonStencil = createStencil({
        vars: {
          color: 'red'
        },
        base({color}) {
          return {
            color: color
          }
        },
        modifiers: {
          size: {
            'title.large': {fontSize: '--title-large'},
            'title.small': {fontSize: '--title-small'}
          },
        }
      })
    `);

    const styles = {};
    const sourceFile = program.getSourceFile('test.ts');
    const node = findNodes(sourceFile, 'createStencil', ts.isCallExpression)[0];

    handleCreateStencil(node, withDefaultContext(program.getTypeChecker(), {styles}));

    // base
    expect(styles['test.css']).toContainEqual(
      compileCSS('.css-button{--css-button-color:red;color:var(--css-button-color);}')
    );

    // modifiers
    expect(styles['test.css']).toContainEqual(
      compileCSS('.css-button--size-title-large{font-size:var(--title-large);}')
    );
    expect(styles['test.css']).toContainEqual(
      compileCSS('.css-button--size-title-small{font-size:var(--title-small);}')
    );
  });
});
