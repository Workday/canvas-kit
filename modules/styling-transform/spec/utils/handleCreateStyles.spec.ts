import ts from 'typescript';

import {_reset, transform, withDefaultContext} from '../../lib/styleTransform';
import {compileCSS} from '../../lib/utils/createStyleObjectNode';
import {handleCreateStyles} from '../../lib/utils/handleCreateStyles';
import {createProgramFromSource} from '../createProgramFromSource';
import {findNodes} from '../findNodes';

describe('createStyles', () => {
  beforeEach(() => {
    _reset();
  });

  it('should parse string literals, passing them through', () => {
    const program = createProgramFromSource(`
      import {createStyles} from '@workday/canvas-kit-styling';

      const styles = createStyles('my-class')
    `);

    const result = transform(program, 'test.ts');

    expect(result).toContain("createStyles('my-class')");
  });

  it('should parse string type identifiers, passing them through', () => {
    const program = createProgramFromSource(`
      import {createStyles} from '@workday/canvas-kit-styling';

      const myClassName = 'my-class'

      const styles = createStyles(myClassName)
    `);

    const result = transform(program, 'test.ts');

    expect(result).toContain('createStyles(myClassName)');
  });

  it('should parse string styles returned by createStyles, passing through the reference', () => {
    const program = createProgramFromSource(`
      import {createStyles} from '@workday/canvas-kit-styling';

      let myClassName = 'my-class';

      const styles = createStyles(myClassName);
      const styles2 = createStyles(styles);
    `);

    const result = transform(program, 'test.ts');

    expect(result).toContain('createStyles(styles)');
  });

  it('should parse simple objects with string values', () => {
    const program = createProgramFromSource(`
      import {createStyles, px2rem} from '@workday/canvas-kit-styling';

      const styles = createStyles({
        fontSize: px2rem(12)
      })
    `);

    const result = transform(program, 'test.ts');

    expect(result).toContain('font-size:0.75rem;');
  });

  it('should parse simple objects with numeric values', () => {
    const program = createProgramFromSource(`
      import {createStyles} from '@workday/canvas-kit-styling';

      const styles = createStyles({
        fontSize: 12
      })
    `);

    const result = transform(program, 'test.ts');

    expect(result).toContain('font-size:12px;');
  });

  it('should return an Emotion-optimized object', () => {
    const program = createProgramFromSource(`
      import {createStyles} from '@workday/canvas-kit-styling';

      const styles = createStyles({
        fontSize: 12
      })
    `);

    const result = transform(program, 'test.ts');

    expect(result).toMatch(/{ name: "[a-z0-9]+", styles: "font-size:12px;" }/);
  });

  it('should handle nested selectors', () => {
    const program = createProgramFromSource(`
      import {createStyles} from '@workday/canvas-kit-styling';

      const styles = createStyles({
        '&:hover': {
          backgroundColor: 'red'
        }
      })
    `);

    const result = transform(program, 'test.ts');

    expect(result).toContain('&:hover{background-color:red;}');
  });

  it('should handle nested selectors without an &', () => {
    const program = createProgramFromSource(`
      import {createStyles} from '@workday/canvas-kit-styling';

      const styles = createStyles({
        '.wd-icon': {
          backgroundColor: 'red'
        }
      })
    `);

    const result = transform(program, 'test.ts');

    expect(result).toContain('.wd-icon{background-color:red;}');
  });

  it('should parse properties that are identifiers that have statically extractable types', () => {
    const program = createProgramFromSource(`
      import {createStyles} from '@workday/canvas-kit-styling';

      const fontSize = 12;

      const styles = createStyles({
        fontSize: fontSize
      })
    `);

    const result = transform(program, 'test.ts');

    expect(result).toContain('font-size:12px;');
  });

  it('should parse properties that are PropertyAssignment, extracting static types', () => {
    const program = createProgramFromSource(`
      import {createStyles} from '@workday/canvas-kit-styling';

      const fontSize = 12;

      const styles = createStyles({
        fontSize: fontSize
      })
    `);

    const result = transform(program, 'test.ts');

    expect(result).toContain('font-size:12px;');
  });

  it('should handle spread operator that resolves to a type', () => {
    const program = createProgramFromSource(`
      import {createStyles} from '@workday/canvas-kit-styling';

      const spreadProps = {
        fontSize: 12
      } as const

      const styles = createStyles({
        ...spreadProps
      })
    `);

    const result = transform(program, 'test.ts');

    expect(result).toContain('font-size:12px;');
  });

  it('should handle spread operator that resolves to a type', () => {
    const program = createProgramFromSource(`
      import {createStyles} from '@workday/canvas-kit-styling';

      const makeFontSize = <T extends string>(input: T): { fontSize: T} => {
        return {
          fontSize: input
        }
      }

      const styles = createStyles({
        ...makeFontSize('12px')
      })
    `);

    const result = transform(program, 'test.ts');

    expect(result).toContain('font-size:12px;');
  });

  it('should handle nested spread operator that resolves to a type', () => {
    const program = createProgramFromSource(`
      import {createStyles} from '@workday/canvas-kit-styling';

      const nestedSpreadProps = {
        spreadProps: {
          fontSize: 12
        }
      } as const

      const styles = createStyles({
        ...nestedSpreadProps.spreadProps
      })
    `);

    const result = transform(program, 'test.ts');

    expect(result).toContain('font-size:12px;');
  });

  it('should handle PropertyAccessExpressions that are statically resolvable', () => {
    const program = createProgramFromSource(`
      import {createStyles} from '@workday/canvas-kit-styling';

      const space = {
        small: 12
      } as const

      const styles = createStyles({
        padding: space.small
      })
    `);

    const result = transform(program, 'test.ts');

    expect(result).toContain('padding:12px;');
  });

  it('should handle cssVar call expressions referencing static variables', () => {
    const program = createProgramFromSource(`
      import {createStyles, cssVar} from '@workday/canvas-kit-styling';

      const myVars = {
        color: '--color'
      } as const;

      const styles = createStyles({
        backgroundColor: cssVar(myVars.color)
      })
    `);

    const result = transform(program, 'test.ts');

    expect(result).toContain('background-color:var(--color);');
  });

  it('should handle cssVar call expressions referencing simple variables', () => {
    const program = createProgramFromSource(`
      import {createStyles, CsVars, createVars} from '@workday/canvas-kit-styling';

      const myVars = createVars('color');
      const styles = createStyles({
        backgroundColor: cssVar(myVars.color)
      })
    `);

    const names = {};

    const result = transform(
      program,
      'test.ts',
      withDefaultContext(program.getTypeChecker(), {names})
    );

    expect(result).toContain(`background-color:var(${names['myVars.color']});`);
  });

  it('should handle cssVar call expressions referencing nested variables', () => {
    const program = createProgramFromSource(`
      import {createStyles, CsVars, createVars} from '@workday/canvas-kit-styling';

      const myVars = {
        colors: createVars('default', 'background')
      };

      const styles = createStyles({
        backgroundColor: cssVar(myVars.colors.background)
      })
    `);

    const names = {};

    const result = transform(
      program,
      'test.ts',
      withDefaultContext(program.getTypeChecker(), {names})
    );

    expect(result).toContain(`background-color:var(${names['myVars.colors.background']});`);
  });

  it('should handle css vars even without the cssVar call expressions referencing static variables', () => {
    const program = createProgramFromSource(`
      import {createStyles} from '@workday/canvas-kit-styling';

      const myVar = '--color'

      const styles = createStyles({
        backgroundColor: myVar
      })
    `);

    const result = transform(program, 'test.ts');

    expect(result).toContain('background-color:var(--color);');
  });

  it('should handle css vars event without the cssVar call expressions referencing created variables', () => {
    const program = createProgramFromSource(`
      import {createStyles, CsVars, createVars} from '@workday/canvas-kit-styling';

      const myVars = {
        colors: createVars('default', 'background')
      };

      const styles = createStyles({
        backgroundColor: myVars.colors.background
      })
    `);

    const names = {};

    const result = transform(
      program,
      'test.ts',
      withDefaultContext(program.getTypeChecker(), {names})
    );

    expect(result).toContain(`background-color:var(${names['myVars.colors.background']});`);
  });

  it('should handle ComputedPropertyName that are static', () => {
    const program = createProgramFromSource(`
      import {createStyles, CsVars} from '@workday/canvas-kit-styling';

      const myVars = {
        color: '--color'
      } as const;

      const styles = createStyles({
        [myVars.color]: 'red'
      })
    `);

    const result = transform(program, 'test.ts');

    expect(result).toContain('--color:red;');
  });

  it('should handle ComputedPropertyName that is a variable created with createVars', () => {
    const program = createProgramFromSource(`
      import {createStyles, CsVars, createVars} from '@workday/canvas-kit-styling';

      const myVars = createVars('color')

      const styles = createStyles({
        [myVars.color]: 'red'
      })
    `);

    const names = {};

    const result = transform(
      program,
      'test.ts',
      withDefaultContext(program.getTypeChecker(), {names})
    );

    expect(result).toContain(`${names['myVars.color']}:red;`);
  });

  it('should slugify ComputedPropertyName with capital letters that is a variable created with createVars', () => {
    const program = createProgramFromSource(`
      import {createStyles, CsVars, createVars} from '@workday/canvas-kit-styling';

      const myVars = createVars('hoverColor')

      const styles = createStyles({
        [myVars.hoverColor]: 'red'
      })
    `);

    const names = {};

    const result = transform(
      program,
      'test.ts',
      withDefaultContext(program.getTypeChecker(), {names})
    );

    expect(result).toContain(`${names['myVars.hoverColor']}:red;`);
  });

  it('should slugify cssVars with capital letters that is a variable created with createVars', () => {
    const program = createProgramFromSource(`
      import {createStyles, cssVar, createVars} from '@workday/canvas-kit-styling';

      const myVars = createVars('hoverColor')

      const styles = createStyles({
        backgroundColor: cssVar(myVars.hoverColor)
      })
    `);

    const names = {};

    const result = transform(
      program,
      'test.ts',
      withDefaultContext(program.getTypeChecker(), {names})
    );

    expect(result).toContain(`background-color:var(${names['myVars.hoverColor']});`);
  });

  it('should handle ComputedPropertyName that is a variable created with createVars inside an object', () => {
    const program = createProgramFromSource(`
      import {createStyles, cssVar, createVars} from '@workday/canvas-kit-styling';

      const myVars = {
        hover: createVars('color')
      }

      const styles = createStyles({
        [myVars.hover.color]: 'red'
      })
    `);

    const names = {};

    const result = transform(
      program,
      'test.ts',
      withDefaultContext(program.getTypeChecker(), {names})
    );

    expect(result).toContain(`${names['myVars.hover.color']}:red;`);
  });

  it('should handle fallback call expressions referencing static variables', () => {
    const program = createProgramFromSource(`
      import {createStyles, CsVars, createVars} from '@workday/canvas-kit-styling';

      const myVars = createVars('color')

      const styles = createStyles({
        backgroundColor: cssVar(myVars.color, 'red')
      })
    `);

    const names = {};

    const result = transform(
      program,
      'test.ts',
      withDefaultContext(program.getTypeChecker(), {names})
    );

    expect(result).toContain(`background-color:var(${names['myVars.color']}, red);`);
  });

  it('should handle fallback call expressions referencing other variables', () => {
    const program = createProgramFromSource(`
      import {createStyles, CsVars, createVars} from '@workday/canvas-kit-styling';

      const myVars = createVars('color', 'background')

      const styles = createStyles({
        backgroundColor: cssVar(myVars.color, myVars.background)
      })
    `);

    const names = {};

    const result = transform(
      program,
      'test.ts',
      withDefaultContext(program.getTypeChecker(), {names})
    );

    expect(result).toContain(
      `background-color:var(${names['myVars.color']}, var(${names['myVars.background']}));`
    );
  });

  it('should handle fallback variables if provided', () => {
    const program = createProgramFromSource(`
      import {createStyles, cssVar, CsVars, createVars} from '@workday/canvas-kit-styling';

      const styles = createStyles({
        backgroundColor: cssVar('--var-1')
      })
    `);

    const result = transform(program, 'test.ts', {names: {'--var-1': 'red'}});

    expect(result).toContain('background-color:var(--var-1, red);');
  });

  it('should handle fallbackFiles', () => {
    const program = createProgramFromSource(`
      import {createStyles, CsVars, createVars} from '@workday/canvas-kit-styling';


      const styles = createStyles({
        backgroundColor: cssVar('--var-1')
      })
    `);

    const result = transform(program, 'test.ts', {
      fallbackFiles: ['./modules/styling-transform/spec/_variables.css'],
    });

    expect(result).toContain('background-color:var(--var-1, red);');
  });

  it('should handle multiple arguments with a string', () => {
    const program = createProgramFromSource(`
      import {createStyles} from '@workday/canvas-kit-styling';

      const styles = createStyles('css-12345', {
        backgroundColor: 'red'
      })
    `);

    const result = transform(program, 'test.ts');

    expect(result).toContain('css-12345');
    expect(result).toContain('background-color:red;');
  });

  it('should handle template stings in properties', () => {
    const program = createProgramFromSource(`
      import {createStyles, cssVar} from '@workday/canvas-kit-styling';

      const borderColor = 'red';

      const styles = createStyles('css-12345', {
        border: \`1px solid \${borderColor}\`
      })
    `);

    const result = transform(program, 'test.ts');

    expect(result).toContain('css-12345');
    expect(result).toContain('border:1px solid red;');
  });

  it('should handle template stings using cssVar in properties', () => {
    const program = createProgramFromSource(`
      import {createStyles, cssVar} from '@workday/canvas-kit-styling';

      const myVars = createVars('borderColor')

      const styles = createStyles('css-12345', {
        border: \`1px solid \${cssVar(myVars.borderColor)}\`
      })
    `);

    const names = {};

    const result = transform(
      program,
      'test.ts',
      withDefaultContext(program.getTypeChecker(), {names})
    );

    expect(result).toContain('css-12345');
    expect(result).toContain(`border:1px solid var(${names['myVars.borderColor']});`);
  });

  it('should handle template stings with multiple spans', () => {
    const program = createProgramFromSource(`
      import {createStyles, cssVar} from '@workday/canvas-kit-styling';

      const myVars = createVars('boxShadowInner', 'boxShadowOuter')

      const styles = createStyles('css-12345', {
        boxShadow: \`\${cssVar(myVars.boxShadowInner)} 0px 0px 0px 2px, \${cssVar(myVars.boxShadowOuter)} 0px 0px 0px 4px\`
      })
    `);

    const names = {};

    const result = transform(
      program,
      'test.ts',
      withDefaultContext(program.getTypeChecker(), {names})
    );

    expect(result).toContain('css-12345');
    expect(result).toContain(
      `box-shadow:var(${names['myVars.boxShadowInner']}) 0px 0px 0px 2px, var(${names['myVars.boxShadowOuter']}) 0px 0px 0px 4px`
    );
  });

  it('should handle multiple arguments with an identifier of a type of an object literal', () => {
    const program = createProgramFromSource(`
      import {createStyles} from '@workday/canvas-kit-styling';

      const obj = {
        color: 'blue'
      } as const

      const styles = createStyles(obj, {
        backgroundColor: 'red'
      })
    `);

    const result = transform(program, 'test.ts');

    expect(result).toContain('color:blue;');
  });

  it('should output an error with the matching line, character, and underlined text', () => {
    const program = createProgramFromSource(`
      import {createStyles} from '@workday/canvas-kit-styling';

      const color: string = 'red'

      const styles = createStyles({
        backgroundColor: color
      })
    `);

    expect(() => transform(program, 'test.ts')).toThrow(/Unknown type at: "color"/);
    expect(() => transform(program, 'test.ts')).toThrow(/File: test.ts:6:19/);
  });

  it('should collect styles into a styles object', () => {
    const program = createProgramFromSource(`
      import {createStyles} from '@workday/canvas-kit-styling';

      const myComponentStyles = createStyles({
        backgroundColor: 'red',
        '&:hover': {
          background: 'blue'
        }
      })
    `);

    const styles = {};
    const sourceFile = program.getSourceFile('test.ts')!;
    const node = findNodes(sourceFile, 'createStyles', ts.isCallExpression)![0];

    handleCreateStyles(node, withDefaultContext(program.getTypeChecker(), {styles}));

    expect(styles['test.css']).toContainEqual(
      compileCSS(
        '.css-my-component{background-color:red;}.css-my-component:hover{background:blue;}'
      )
    );
  });

  it('should process variable properties from another file if processing is out of order', () => {
    const program = createProgramFromSource([
      {
        filename: 'test.ts',
        source: `
          import {createStyles, createVars} from '@workday/canvas-kit-styling';
          import { sourceVars } from './vars';

          const myStyles = createStyles({
            color: sourceVars.foo
          })
        `,
      },
      {
        filename: 'vars.ts',
        source: `
          import {createVars} from '@workday/canvas-kit-styling';

          export const sourceVars = createVars('foo', 'bar');
        `,
      },
    ]);

    const names = {};

    const result = transform(
      program,
      'test.ts',
      withDefaultContext(program.getTypeChecker(), {names})
    );

    expect(result).toContain(`styles: "color:var(${names['sourceVars.foo']})`);
  });

  it('should process variable keys from another file if processing is out of order', () => {
    const program = createProgramFromSource([
      {
        filename: 'test.ts',
        source: `
          import {createStyles, createVars} from '@workday/canvas-kit-styling';
          import { sourceVars } from './vars';

          const myStyles = createStyles({
            [sourceVars.foo]: 'red'
          })
        `,
      },
      {
        filename: 'vars.ts',
        source: `
          import {createVars} from '@workday/canvas-kit-styling';

          export const sourceVars = createVars('foo', 'bar');
        `,
      },
    ]);

    const names = {};

    const result = transform(
      program,
      'test.ts',
      withDefaultContext(program.getTypeChecker(), {names})
    );

    expect(result).toContain(`styles: "${names['sourceVars.foo']}:red;`);
  });

  it('should process nested variable properties from another file if processing is out of order', () => {
    const program = createProgramFromSource([
      {
        filename: 'test.ts',
        source: `
          import {createStyles, createVars} from '@workday/canvas-kit-styling';
          import { sourceVars } from './vars';

          const myStyles = createStyles({
            color: sourceVars.default.foo
          })
        `,
      },
      {
        filename: 'vars.ts',
        source: `
          import {createVars} from '@workday/canvas-kit-styling';

          export const sourceVars = {default: createVars('foo', 'bar')};
        `,
      },
    ]);

    const names = {};

    const result = transform(
      program,
      'test.ts',
      withDefaultContext(program.getTypeChecker(), {names})
    );

    expect(result).toContain(`styles: "color:var(${names['sourceVars.default.foo']})`);
  });

  it('should process nested variable keys from another file if processing is out of order', () => {
    const program = createProgramFromSource([
      {
        filename: 'test.ts',
        source: `
          import {createStyles, createVars} from '@workday/canvas-kit-styling';
          import { sourceVars } from './vars';

          const myStyles = createStyles({
            [sourceVars.default.foo]: 'red'
          })
        `,
      },
      {
        filename: 'vars.ts',
        source: `
          import {createVars} from '@workday/canvas-kit-styling';

          export const sourceVars = {default: createVars('foo', 'bar')};
        `,
      },
    ]);

    const names = {};

    const result = transform(
      program,
      'test.ts',
      withDefaultContext(program.getTypeChecker(), {names})
    );

    expect(result).toContain(`styles: "${names['sourceVars.default.foo']}:red;`);
  });
});
