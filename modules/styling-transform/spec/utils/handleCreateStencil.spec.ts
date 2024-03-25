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

  it('should handle dynamic key with stencil variables', () => {
    const program = createProgramFromSource(`
    import {createStencil} from '@workday/canvas-kit-styling';
    const buttonStencil = createStencil({
      vars: {
        color: ''
      },
      base: {
        [color]: 'red'
      }
    })
  `);

    const result = transform(program, 'test.ts', withDefaultContext(program.getTypeChecker()));

    expect(result).toContain('styles: "--css-button-color:red;"');
  });
  it('should not parse variables in the base styles if the value is an empty string', () => {
    const program = createProgramFromSource(`
    import {createStencil} from '@workday/canvas-kit-styling';

    const buttonStencil = createStencil({
      vars: {
        color: ''
      },
      base: {
        [color]: 'red'
      }
      base: {padding: 12}
    })
  `);

    const result = transform(program, 'test.ts', withDefaultContext(program.getTypeChecker()));

    expect(result).toContain('styles: "--css-button-color:red;"');
  });

  it('should handle dynamic key with stencil variables for nested key', () => {
    const program = createProgramFromSource(`
    import {createStencil} from '@workday/canvas-kit-styling';
    const systemIconStencil = createStencil({
      vars: {
        size: '2rem',
      },
      base: {}
    });
    const buttonStencil = createStencil({
      base: {
        [systemIconStencil.vars.size]: '1rem',
      }
    })
  `);

    const result = transform(program, 'test.ts', withDefaultContext(program.getTypeChecker()));

    expect(result).toContain('styles: "--css-system-icon-size:1rem;"');
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

  describe('extended stencil', () => {
    const program = createProgramFromSource(`
      import {createStencil} from '@workday/canvas-kit-styling';

      const baseStencil = createStencil({
        vars: {
          color: 'red',
        },
        base: {
          padding: 5
        },
        modifiers: {
          position: {
            start: {
              paddingInlineStart: 5
            },
            end: {
              paddingInlineEnd: 5
            }
          },
          size: {
            large: {
              padding: 15
            },
          },
        },
        compound: [
          {
            modifiers: {size: 'large', position: 'start'},
            styles: {
              paddingInlineStart: 10
            }
          }
        ],
      });

      const extendedStencil = createStencil({
        extends: baseStencil,
        vars: {
          background: 'blue',
        },
        base: {

        },
        modifiers: {
          extra: {
            true: {
              margin: 5
            },
          },
        },
        compound: [
          {
            modifiers: {
              size: 'large',
              position: 'start',
              extra: true
            },
            styles: {
              margin: 10,
              paddingInlineStart: 5
            }
          }
        ],
      });
    `);

    const styles = {};

    transform(program, 'test.ts', withDefaultContext(program.getTypeChecker(), {styles}));

    it('should extract base styles', () => {
      expect(styles['test.css']).toContainEqual(
        compileCSS('.css-base {--css-base-color: red; padding: 5px;}')
      );
    });

    it('should extract a base modifier style', () => {
      expect(styles['test.css']).toContainEqual(
        compileCSS('.css-base--position-start { padding-inline-start: 5px;}')
      );
      expect(styles['test.css']).toContainEqual(
        compileCSS('.css-base--position-end { padding-inline-end: 5px;}')
      );
      expect(styles['test.css']).toContainEqual(
        compileCSS('.css-base--size-large { padding: 15px;}')
      );
    });

    it('should extract a base compound modifier style', () => {
      expect(styles['test.css']).toContainEqual(
        compileCSS('.css-base--size-large.css-base--position-start { padding-inline-start: 10px;}')
      );
    });

    it('should extract an extended base style', () => {
      expect(styles['test.css']).toContainEqual(
        compileCSS('.css-extended { --css-extended-background: blue;}')
      );
    });

    it('should extract an extended modifier style', () => {
      expect(styles['test.css']).toContainEqual(compileCSS('.css-extended--extra { margin: 5px;}'));
    });

    it('should extract an extended compound modifier with base modifier names and extended modifier names', () => {
      expect(styles['test.css']).toContainEqual(
        compileCSS(
          '.css-extended.css-base--size-large.css-base--position-start.css-extended--extra {margin: 10px; padding-inline-start: 5px;}'
        )
      );
    });
  });
});
