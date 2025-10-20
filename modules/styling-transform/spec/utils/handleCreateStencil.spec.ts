import ts from 'typescript';

import {findNodes} from '../findNodes';
import {createProgramFromSource} from '../createProgramFromSource';

import {handleCreateStencil} from '../../lib/utils/handleCreateStencil';
import {transform, withDefaultContext, _reset} from '../../lib/styleTransform';
import {compileCSS} from '../../lib/utils/createStyleObjectNode';

function getFile<K extends string, T extends Record<K, any>>(styles: T, name: string): T[K] | void {
  for (const style in styles) {
    if (style.includes(name)) {
      // @ts-ignore
      return styles[style];
    }
  }
}

describe('handleCreateStencil', () => {
  describe('creating stencils', () => {
    beforeEach(() => {
      _reset();
    });

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

      expect(result).toMatch(/}, "button-[a-z0-9]+"\)/);
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
      const names = {};
      const extractedNames = {};

      const result = transform(
        program,
        'test.ts',
        withDefaultContext(program.getTypeChecker(), {
          names,
          extractedNames,
        })
      );

      expect(names).toHaveProperty(
        ['buttonStencil.vars.color'],
        expect.stringMatching(/--color-button-[a-z0-9]+/)
      );
      expect(extractedNames).toHaveProperty(
        names['buttonStencil.vars.color'],
        '--css-button-color'
      );

      // ID of the variable and the stencil should be the same
      expect(result).toContain(`${names['buttonStencil.vars.color'].replace('--color-', '')}`);
    });

    it('should add box-sizing to all stencils', () => {
      const program = createProgramFromSource(`
        import {createStencil} from '@workday/canvas-kit-styling';

        const buttonStencil = createStencil({
          base: {}
        })
      `);

      const result = transform(program, 'test.ts');

      expect(result).toContain('styles: "box-sizing:border-box;"');
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

      expect(result).toContain('styles: "box-sizing:border-box;padding:10px;"');
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

      const names = {};
      const styles = {};

      const result = transform(
        program,
        'test.ts',
        withDefaultContext(program.getTypeChecker(), {styles, names})
      );

      expect(result).toContain(
        `styles: "${names['buttonStencil.vars.color']}:red;box-sizing:border-box;padding:12px;"`
      );

      expect(styles['test.css']).toContainEqual(
        compileCSS(`.css-button {
          --css-button-color: red;
          box-sizing: border-box;
          padding: 12px;
        }`)
      );
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

      const names = {};
      const styles = {};

      const result = transform(
        program,
        'test.ts',
        withDefaultContext(program.getTypeChecker(), {styles, names})
      );

      expect(result).toContain(
        `styles: "box-sizing:border-box;${names['buttonStencil.vars.color']}:red;"`
      );

      expect(styles['test.css']).toContainEqual(
        compileCSS('.css-button { box-sizing: border-box; --css-button-color: red; }')
      );
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

      const names = {};
      const styles = {};

      const result = transform(
        program,
        'test.ts',
        withDefaultContext(program.getTypeChecker(), {styles, names})
      );

      expect(result).toContain(
        `styles: "box-sizing:border-box;${names['buttonStencil.vars.color']}:red;"`
      );

      expect(styles['test.css']).toContainEqual(
        compileCSS('.css-button { box-sizing: border-box; --css-button-color: red; }')
      );
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

      const names = {};
      const styles = {};

      const result = transform(
        program,
        'test.ts',
        withDefaultContext(program.getTypeChecker(), {styles, names})
      );

      expect(result).toContain(
        `styles: "box-sizing:border-box;${names['systemIconStencil.vars.size']}:1rem;"`
      );

      expect(styles['test.css']).toContainEqual(
        compileCSS('.css-button { box-sizing: border-box; --css-system-icon-size: 1rem; }')
      );
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

      const names = {};
      const styles = {};

      const result = transform(
        program,
        'test.ts',
        withDefaultContext(program.getTypeChecker(), {styles, names})
      );

      expect(result).toContain(
        `${names['buttonStencil.vars.color']}:red;box-sizing:border-box;color:var(${names['buttonStencil.vars.color']});padding:12px;`
      );

      expect(styles['test.css']).toContainEqual(
        compileCSS(`.css-button {
          --css-button-color: red;
          box-sizing: border-box;
          color: var(--css-button-color);
          padding: 12px;
        }`)
      );
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

      const names = {};
      const styles = {};

      const result = transform(
        program,
        'test.ts',
        withDefaultContext(program.getTypeChecker(), {styles, names})
      );

      expect(result).toContain(
        `${names['buttonStencil.vars.color']}:red;box-sizing:border-box;color:var(${names['buttonStencil.vars.color']});padding:12px;`
      );

      expect(styles['test.css']).toContainEqual(
        compileCSS(`.css-button {
          --css-button-color: red;
          box-sizing: border-box;
          color: var(--css-button-color);
          padding: 12px;
        }`)
      );
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

      const names = {};
      const styles = {};

      const result = transform(
        program,
        'test.ts',
        withDefaultContext(program.getTypeChecker(), {styles, names})
      );

      expect(result).toContain(
        `${names['buttonStencil.vars.color']}:red;box-sizing:border-box;color:var(${names['buttonStencil.vars.color']});padding:12px;`
      );

      expect(styles['test.css']).toContainEqual(
        compileCSS(`.css-button {
          --css-button-color: red;
          box-sizing: border-box;
          color: var(--css-button-color);
          padding: 12px;
        }`)
      );
    });

    it('should handle parsing variables in base styles via a MethodDeclaration with a ShorthandPropertyAssignment', () => {
      const program = createProgramFromSource(`
        import {createStencil} from '@workday/canvas-kit-styling';

        const buttonStencil = createStencil({
          vars: {
            color: 'red'
          },
          base({color}) {
            return {
              color,
              padding: 12
            }
          }
        })
      `);

      const names = {};
      const styles = {};

      const result = transform(
        program,
        'test.ts',
        withDefaultContext(program.getTypeChecker(), {styles, names})
      );

      expect(result).toContain(
        `${names['buttonStencil.vars.color']}:red;box-sizing:border-box;color:var(${names['buttonStencil.vars.color']});padding:12px;`
      );

      expect(styles['test.css']).toContainEqual(
        compileCSS(`.css-button {
          --css-button-color: red;
          box-sizing: border-box;
          color: var(--css-button-color);
          padding: 12px;
        }`)
      );
    });

    it('should wrap variable values with var() if necessary', () => {
      const program = createProgramFromSource(`
        import {createStencil} from '@workday/canvas-kit-styling';

        const buttonStencil = createStencil({
          vars: {
            color: '--foo'
          },
          base({color}) {
            return {
              color,
              padding: 12
            }
          }
        })
      `);

      const names = {};
      const styles = {};

      const result = transform(
        program,
        'test.ts',
        withDefaultContext(program.getTypeChecker(), {styles, names})
      );

      expect(result).toContain(
        `${names['buttonStencil.vars.color']}:var(--foo);box-sizing:border-box;color:var(${names['buttonStencil.vars.color']});padding:12px;`
      );

      expect(styles['test.css']).toContainEqual(
        compileCSS(`.css-button {
          --css-button-color: var(--foo);
          box-sizing: border-box;
          color: var(--css-button-color);
          padding: 12px;
        }`)
      );
    });

    it('should handle parsing modifiers with ObjectLiteralExpressions', () => {
      const program = createProgramFromSource(`
        import {createStencil, parentModifier} from '@workday/canvas-kit-styling';

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

        const childStencil = createStencil({
          base: {
            [parentModifier(buttonStencil.modifiers.size.large)]: {
              color: 'blue',
            }
          }
        })
      `);

      const styles = {};
      const names = {};
      const extractedNames = {};

      const result = transform(
        program,
        'test.ts',
        withDefaultContext(program.getTypeChecker(), {styles, names, extractedNames})
      );

      expect(result).toMatch(/large: { name: "[0-9a-z]+", styles: "padding:20px;" }/);
      expect(result).toMatch(/small: { name: "[0-9a-z]+", styles: "padding:10px;" }/);

      // runtime selector
      expect(result).toContain(
        `.${names['buttonStencil.modifiers.size.large'].replace(
          'css-',
          'm'
        )} :where(&){color:blue;}`
      );

      // extracted selector
      expect(getFile(styles, 'test.css')).toContainEqual(
        compileCSS(`
          .css-child {
            box-sizing: border-box;
          }
          .css-button--size-large :where(.css-child) {
            color: blue;
          }
      `)
      );
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

      expect(styles['test.css']).toContainEqual(
        compileCSS('.css-button{--css-button-color: red;box-sizing:border-box;}')
      );
      expect(styles['test.css']).toContainEqual(
        compileCSS('.css-button.size-large{padding: 0.3125rem;}')
      );
    });

    it('should handle modifiers with fallthrough keys', () => {
      const program = createProgramFromSource(`
        import {createStencil, px2rem} from '@workday/canvas-kit-styling';

        const buttonStencil = createStencil({
          vars: {
            padding: ''
          },
          base: {},
          modifiers: {
            padding: {
              large: {
                padding: 40,
              },
              small: {
                padding: 20,
              }
              _: ({ padding }) => ({
                padding
              })
            }
          }
        })
      `);

      const styles = {};
      const names = {};
      const extractedNames = {};

      const result = transform(
        program,
        'test.ts',
        withDefaultContext(program.getTypeChecker(), {styles, names, extractedNames})
      );

      expect(result).toMatch(/base: { name: "[0-9a-z]+", styles: "box-sizing:border-box;" }/);
      expect(result).toMatch(/large: { name: "[0-9a-z]+", styles: "padding:40px;" }/);
      expect(result).toMatch(
        /_: { name: "[0-9a-z]+", styles: "padding:var\(--padding-button-[a-z0-9]+\);" }/
      );

      expect(styles['test.css']).toContainEqual(compileCSS('.css-button{box-sizing:border-box;}'));
      expect(styles['test.css']).toContainEqual(
        compileCSS('.css-button.padding-large{padding: 40px;}')
      );
      expect(styles['test.css']).toContainEqual(
        compileCSS('.css-button.padding{padding: var(--css-button-padding)}')
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
            },
            {
              modifiers: { size: 'small', inverse: true},
              styles: ({color}) => ({ padding: 20, color })
            }
          ]
        })
      `);

      const styles = {};
      const sourceFile = program.getSourceFile('test.ts')!;
      const node = findNodes(sourceFile, 'createStencil', ts.isCallExpression)![0];

      handleCreateStencil(node, withDefaultContext(program.getTypeChecker(), {styles}));

      // base
      expect(styles['test.css']).toContainEqual(
        compileCSS(
          '.css-button{--css-button-color:red;box-sizing:border-box;color:var(--css-button-color);}'
        )
      );

      // modifiers
      expect(styles['test.css']).toContainEqual(
        compileCSS('.css-button.size-large{padding:30px;}')
      );
      expect(styles['test.css']).toContainEqual(
        compileCSS('.css-button.size-small{padding:10px;}')
      );
      expect(styles['test.css']).toContainEqual(compileCSS('.css-button.inverse{color:while;}'));

      // compound
      expect(styles['test.css']).toContainEqual(
        compileCSS('.css-button.size-large.inverse{padding:40px;}')
      );
      // compound function wrapper
      expect(styles['test.css']).toContainEqual(
        compileCSS('.css-button.size-small.inverse{padding:20px;color:var(--css-button-color);}')
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
      const sourceFile = program.getSourceFile('test.ts')!;
      const node = findNodes(sourceFile, 'createStencil', ts.isCallExpression)![0];

      handleCreateStencil(node, withDefaultContext(program.getTypeChecker(), {styles}));

      // base
      expect(styles['test.css']).toContainEqual(
        compileCSS(
          '.css-button{--css-button-color:red;box-sizing:border-box;color:var(--css-button-color);}'
        )
      );

      // modifiers
      expect(styles['test.css']).toContainEqual(
        compileCSS('.css-button.size-title-large{font-size:var(--title-large);}')
      );
      expect(styles['test.css']).toContainEqual(
        compileCSS('.css-button.size-title-small{font-size:var(--title-small);}')
      );
    });

    it('should handle the "label" var name, making it safe for Emotion', () => {
      const program = createProgramFromSource(`
        import {createStencil} from '@workday/canvas-kit-styling';

        const buttonStencil = createStencil({
          vars: {
            label: 'red'
          },
          base({label}) {
            return {
              color: label
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
      const sourceFile = program.getSourceFile('test.ts')!;
      const node = findNodes(sourceFile, 'createStencil', ts.isCallExpression)![0];

      handleCreateStencil(node, withDefaultContext(program.getTypeChecker(), {styles}));

      // base
      expect(styles['test.css']).toContainEqual(
        compileCSS(
          '.css-button{--css-button-label:red;box-sizing:border-box;color:var(--css-button-label);}'
        )
      );

      // modifiers
      expect(styles['test.css']).toContainEqual(
        compileCSS('.css-button.size-title-large{font-size:var(--title-large);}')
      );
      expect(styles['test.css']).toContainEqual(
        compileCSS('.css-button.size-title-small{font-size:var(--title-small);}')
      );
    });
  });

  describe('when importing variables from another stencil', () => {
    let program: ts.Program;
    const names = {};
    const styles = {};
    let result = '';

    beforeAll(() => {
      program = createProgramFromSource([
        {
          filename: 'test.ts',
          source: `
          import {createStencil} from '@workday/canvas-kit-styling';
          import {baseStencil} from './base';

          const extendedStencil = createStencil({
            base: {
              [baseStencil.vars.color]: 'blue'
            },
          })
        `,
        },
        {
          filename: 'base.ts',
          source: `
          import {createStencil} from '@workday/canvas-kit-styling';

          export const baseStencil = createStencil({
            vars: {
              color: 'red',
            },
            base: {},
          });
        `,
        },
      ]);

      result = transform(
        program,
        'test.ts',
        withDefaultContext(program.getTypeChecker(), {styles, names})
      );
    });

    it('should apply the correct variable name to the styles', () => {
      expect(result).toMatch(
        `styles: "box-sizing:border-box;${names['baseStencil.vars.color']}:blue;`
      );
    });

    it('should inject the correct variable name to the CSS output', () => {
      expect(getFile(styles, 'test.css')).toContainEqual(
        compileCSS('.css-extended { box-sizing:border-box;--css-base-color: blue; }')
      );
    });
  });

  describe('when referencing modifiers from another stencil', () => {
    it('should resolve the CSS class name', () => {
      const program = createProgramFromSource(`
        import {createStencil} from '@workday/canvas-kit-styling';

        const containerStencil = createStencil({
          base: {},
          modifiers: {
            size: {
              large: {},
              small: {}
            }
          }
        });

        const childStencil = createStencil({
          base: {
            [\`.\${containerStencil.modifiers.size.large\} &\`]: {
              padding: 10
            }
          }
        })
      `);

      const names = {};
      const styles = {};

      const result = transform(
        program,
        'test.ts',
        withDefaultContext(program.getTypeChecker(), {styles, names})
      );

      expect(result).toContain(
        `styles: "box-sizing:border-box;.${names['containerStencil.modifiers.size.large']} &{padding:10px;}`
      );

      expect(getFile(styles, 'test.css')).toContainEqual(
        compileCSS(`
          .css-child {box-sizing: border-box; }
          .css-container--size-large .css-child { padding: 10px; }
        `)
      );
    });
  });

  describe('when importing from a stencil that was extended from another stencil', () => {
    let program: ts.Program;
    const names = {};
    const styles = {};
    let result = '';

    beforeAll(() => {
      program = createProgramFromSource([
        {
          filename: 'test.ts',
          source: `
            import {createStencil} from '@workday/canvas-kit-styling';
            import {extendedStencil} from './extended';

            const finalStencil = createStencil({
              base: {
                [extendedStencil.vars.color]: 'purple',
              },
            })
          `,
        },
        {
          filename: 'extended.ts',
          source: `
            import {createStencil} from '@workday/canvas-kit-styling';

            import {baseStencil} from './base';

            export const extendedStencil = createStencil({
              extends: baseStencil,
              vars: {
                extendedColor: 'blue'
              },
              base({color}) {
                return {
                  [color]: 'purple',
                }
              }
            })
          `,
        },
        {
          filename: 'base.ts',
          source: `
            import {createStencil} from '@workday/canvas-kit-styling';

            export const baseStencil = createStencil({
              vars: {
                color: 'red',
              },
              base: {
                padding: 5
              },
            });
          `,
        },
      ]);

      result = transform(
        program,
        'test.ts',
        withDefaultContext(program.getTypeChecker(), {styles, names})
      );
    });

    it('should apply the correct variable name to the styles', () => {
      expect(result).toContain(
        `styles: "box-sizing:border-box;${names['baseStencil.vars.color']}:purple;`
      );
    });

    it('should inject the correct variable name to the CSS output', () => {
      expect(getFile(styles, 'test.css')).toContainEqual(
        compileCSS('.css-final { box-sizing:border-box;--css-base-color: purple; }')
      );
    });

    it('when a preprocessed file is transformed should apply the correct variable name to the styles', () => {
      result = transform(
        program,
        'extended.ts',
        withDefaultContext(program.getTypeChecker(), {styles, names})
      );

      expect(result).toContain(
        `styles: "${names['extendedStencil.vars.extendedColor']}:blue;box-sizing:border-box;${names['baseStencil.vars.color']}:purple;`
      );
    });

    it('should inject the correct variable name to the CSS output', () => {
      getFile(styles, 'extended.css');
      expect(getFile(styles, 'extended.css')).toContainEqual(
        compileCSS(
          '.css-extended { --css-extended-extended-color: blue; box-sizing:border-box; --css-base-color: purple; }'
        )
      );
    });
  });

  it('should handle CSS variables imported from a stencil that was extended from another stencil', () => {
    _reset();
    const names = {};
    const styles = {};
    const program = createProgramFromSource([
      {
        filename: 'test.ts',
        source: `
          import {createStencil} from '@workday/canvas-kit-styling';
          import {extendedStencil} from './extended';

          const finalStencil = createStencil({
            base: {
              [extendedStencil.vars.color]: 'purple',
            },
          })
        `,
      },
      {
        filename: 'extended.ts',
        source: `
          import {createStencil} from '@workday/canvas-kit-styling';

          import {baseStencil} from './base';

          export const extendedStencil = createStencil({
            extends: baseStencil,
            vars: {
              extendedColor: 'blue'
            },
            base({color}) {
              return {
                [color]: 'blue'
              }
            }
          })
        `,
      },
      {
        filename: 'base.ts',
        source: `
          import {createStencil} from '@workday/canvas-kit-styling';

          export const baseStencil = createStencil({
            vars: {
              color: 'red',
            },
            base: {
              padding: 5
            },
          });
        `,
      },
    ]);

    const result = transform(
      program,
      'test.ts',
      withDefaultContext(program.getTypeChecker(), {styles, names})
    );

    expect(result).toContain(
      `styles: "box-sizing:border-box;${names['baseStencil.vars.color']}:purple;"`
    );

    expect(getFile(styles, 'test.css')).toContainEqual(
      compileCSS('.css-final {box-sizing:border-box;--css-base-color: purple;}')
    );
  });

  it('should use the correct prefix in extended stencils when the base stencil is from another prefix', () => {
    _reset();
    const names = {};
    const styles = {};
    const program = createProgramFromSource([
      {
        filename: 'test.ts',
        source: `
          import {createStencil} from '@workday/canvas-kit-styling';

          import {baseStencil} from './base';

          export const extendedStencil = createStencil({
            extends: baseStencil,
            vars: {
              extendedColor: 'blue'
            },
            base({color}) {
              return {
                [color]: 'blue'
              }
            }
          })
        `,
      },
      {
        filename: 'base.ts',
        source: `
          import {createStencil} from '@workday/canvas-kit-styling';

          export const baseStencil = createStencil({
            vars: {
              color: 'red',
            },
            base: {
              padding: 5
            },
          });

          const test = createStencil({
            vars: {
              foo: 'bar'
            }
          }, 'base-base')
        `,
      },
    ]);

    const result = transform(
      program,
      'test.ts',
      withDefaultContext(program.getTypeChecker(), {
        styles,
        names,
        getPrefix: p => (p.includes('base') ? 'base' : 'css'),
      })
    );

    expect(result).toContain(
      `styles: "${names['extendedStencil.vars.extendedColor']}:blue;box-sizing:border-box;${names['baseStencil.vars.color']}:blue;"`
    );

    expect(getFile(styles, 'test.css')).toContainEqual(
      compileCSS(
        '.css-extended {--css-extended-extended-color:blue;box-sizing:border-box;--base-base-color:blue;}'
      )
    );
  });

  describe('extended stencil', () => {
    let program: ts.Program;
    const styles = {};

    beforeAll(() => {
      _reset();
      program = createProgramFromSource(`
        import {createStencil} from '@workday/canvas-kit-styling';

        const baseStencil = createStencil({
          vars: {
            color: 'red',
          },
          base: {
            padding: 5
          },
          modifiers: {
            iconPosition: {
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
              modifiers: {size: 'large', iconPosition: 'start'},
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
            iconPosition: {
              start: {
                paddingInlineState: 0
              },
              end: {
                paddingInlineEnd: 0
              }
            },
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
                iconPosition: 'start',
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

      transform(program, 'test.ts', withDefaultContext(program.getTypeChecker(), {styles}));
    });

    it('should extract base styles', () => {
      expect(styles['test.css']).toContainEqual(
        compileCSS('.css-base {--css-base-color: red; box-sizing:border-box; padding: 5px;}')
      );
    });

    it('should extract a base modifier style', () => {
      expect(styles['test.css']).toContainEqual(
        compileCSS('.css-base.icon-position-start { padding-inline-start: 5px;}')
      );
      expect(styles['test.css']).toContainEqual(
        compileCSS('.css-base.icon-position-end { padding-inline-end: 5px;}')
      );
      expect(styles['test.css']).toContainEqual(
        compileCSS('.css-base.size-large { padding: 15px;}')
      );
    });

    it('should extract a base compound modifier style', () => {
      expect(styles['test.css']).toContainEqual(
        compileCSS('.css-base.size-large.icon-position-start { padding-inline-start: 10px;}')
      );
    });

    it('should extract an extended base style', () => {
      expect(styles['test.css']).toContainEqual(
        compileCSS('.css-extended { --css-extended-background: blue; box-sizing:border-box; }')
      );
    });

    it('should extract an extended modifier style', () => {
      expect(styles['test.css']).toContainEqual(compileCSS('.css-extended.extra { margin: 5px;}'));
    });

    it('should extract an extended compound modifier with base modifier names and extended modifier names', () => {
      expect(styles['test.css']).toContainEqual(
        compileCSS(
          '.css-extended.size-large.icon-position-start.extra {margin: 10px; padding-inline-start: 5px;}'
        )
      );
    });
  });

  describe('extending a stencil from another file', () => {
    let program: ts.Program;
    const styles = {};

    beforeAll(() => {
      program = createProgramFromSource([
        {
          filename: 'test.ts',
          source: `
            import {createStencil} from '@workday/canvas-kit-styling';
            import {baseStencil} from './base';

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
                    iconPosition: 'start',
                    extra: true
                  },
                  styles: {
                    margin: 10,
                    paddingInlineStart: 5
                  }
                }
              ],
            })
          `,
        },
        {
          filename: 'base.ts',
          source: `
            import {createStencil} from '@workday/canvas-kit-styling';

            export const baseStencil = createStencil({
              vars: {
                color: 'red',
              },
              base: {
                padding: 5
              },
              modifiers: {
                iconPosition: {
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
                  modifiers: {size: 'large', iconPosition: 'start'},
                  styles: {
                    paddingInlineStart: 10
                  }
                }
              ],
            });
          `,
        },
      ]);

      transform(program, 'test.ts', withDefaultContext(program.getTypeChecker(), {styles}));
    });

    it('should extract base styles', () => {
      expect(getFile(styles, 'base.css')).toContainEqual(
        compileCSS('.css-base {--css-base-color: red; box-sizing:border-box; padding: 5px;}')
      );
    });

    it('should extract a base modifier style', () => {
      expect(getFile(styles, 'base.css')).toContainEqual(
        compileCSS('.css-base.icon-position-start { padding-inline-start: 5px;}')
      );
      expect(getFile(styles, 'base.css')).toContainEqual(
        compileCSS('.css-base.icon-position-end { padding-inline-end: 5px;}')
      );
      expect(getFile(styles, 'base.css')).toContainEqual(
        compileCSS('.css-base.size-large { padding: 15px;}')
      );
    });

    it('should extract a base compound modifier style', () => {
      expect(getFile(styles, 'base.css')).toContainEqual(
        compileCSS('.css-base.size-large.icon-position-start { padding-inline-start: 10px;}')
      );
    });

    it('should extract an extended base style', () => {
      expect(getFile(styles, 'test.css')).toContainEqual(
        compileCSS('.css-extended { --css-extended-background: blue; box-sizing:border-box; }')
      );
    });

    it('should extract an extended modifier style', () => {
      expect(getFile(styles, 'test.css')).toContainEqual(
        compileCSS('.css-extended.extra { margin: 5px;}')
      );
    });

    it('should extract an extended compound modifier with base modifier names and extended modifier names', () => {
      expect(getFile(styles, 'test.css')).toContainEqual(
        compileCSS(
          '.css-extended.size-large.icon-position-start.extra {margin: 10px; padding-inline-start: 5px;}'
        )
      );
    });
  });
});
