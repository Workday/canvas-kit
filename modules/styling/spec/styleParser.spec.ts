import ts from 'typescript';

import {transform} from '../parser/styleParser';
import {createProgramFromSource} from './createProgramFromSource';

describe('styleParser', () => {
  it('should parse simple objects with string values', () => {
    const program = createProgramFromSource(`
      import {cs} from '@workday/canvas-kit-styling';

      const styles = cs({
        fontSize: '12px'
      })
    `);

    const result = transform(program, 'test.ts'); //?

    expect(result).toContain('font-size:12px;');
  });

  it('should parse simple objects with numeric values', () => {
    const program = createProgramFromSource(`
      import {cs} from '@workday/canvas-kit-styling';

      const styles = cs({
        fontSize: 12
      })
    `);

    const result = transform(program, 'test.ts'); //?

    expect(result).toContain('font-size:12px;');
  });

  it('should return an Emotion-optimized object', () => {
    const program = createProgramFromSource(`
      import {cs} from '@workday/canvas-kit-styling';

      const styles = cs({
        fontSize: 12
      })
    `);

    const result = transform(program, 'test.ts'); //?

    expect(result).toMatch(/{ name: "[a-z0-9]+", styles: "font-size:12px;" }/);
  });

  it('should handle nested selectors', () => {
    const program = createProgramFromSource(`
      import {cs} from '@workday/canvas-kit-styling';

      const styles = cs({
        '&:hover': {
          backgroundColor: 'red'
        }
      })
    `);

    const result = transform(program, 'test.ts'); //?

    expect(result).toContain('&:hover{background-color:red;}');
  });

  it('should parse properties that are identifiers that have statically extractable types', () => {
    const program = createProgramFromSource(`
      import {cs} from '@workday/canvas-kit-styling';

      const fontSize = 12;

      const styles = cs({
        fontSize: fontSize
      })
    `);

    const result = transform(program, 'test.ts'); //?

    expect(result).toContain('font-size:12px;');
  });

  it('should parse properties that are PropertyAssignment, extracting static types', () => {
    const program = createProgramFromSource(`
      import {cs} from '@workday/canvas-kit-styling';

      const fontSize = 12;

      const styles = cs({
        fontSize: fontSize
      })
    `);

    const result = transform(program, 'test.ts'); //?

    expect(result).toContain('font-size:12px;');
  });

  it('should handle spread operator that resolves to a type', () => {
    const program = createProgramFromSource(`
      import {cs} from '@workday/canvas-kit-styling';

      const spreadProps = {
        fontSize: 12
      } as const

      const styles = cs({
        ...spreadProps
      })
    `);

    const result = transform(program, 'test.ts'); //?

    expect(result).toContain('font-size:12px;');
  });

  it('should handle nested spread operator that resolves to a type', () => {
    const program = createProgramFromSource(`
      import {cs} from '@workday/canvas-kit-styling';

      const nestedSpreadProps = {
        spreadProps: {
          fontSize: 12
        }
      } as const

      const styles = cs({
        ...nestedSpreadProps.spreadProps
      })
    `);

    const result = transform(program, 'test.ts'); //?

    expect(result).toContain('font-size:12px;');
  });

  it('should handle PropertyAccessExpressions that are statically resolvable', () => {
    const program = createProgramFromSource(`
      import {cs} from '@workday/canvas-kit-styling';

    const space = {
      small: 12
    } as const

    const styles = cs({
      padding: space.small
    })
  `);

    const result = transform(program, 'test.ts'); //?

    expect(result).toContain('padding:12px;');
  });

  it('should handle cssVar call expressions referencing static variables', () => {
    const program = createProgramFromSource(`
      import {cs, cssVar} from '@workday/canvas-kit-styling';

      const myVars = {
        color: '--color'
      } as const;

      const styles = cs({
        backgroundColor: cssVar(myVars.color)
      })
    `);

    const result = transform(program, 'test.ts'); //?

    expect(result).toContain('background-color:var(--color);');
  });

  it('should handle cssVar call expressions referencing simple variables', () => {
    const program = createProgramFromSource(`
      import {cs, CsVars, createVars} from '@workday/canvas-kit-styling';

      const myVars = createVars('color');
      const styles = cs({
        backgroundColor: cssVar(myVars.color)
      })
    `);

    const result = transform(program, 'test.ts'); //?

    expect(result).toContain('background-color:var(--css-my-vars-color);');
  });

  it('should handle cssVar call expressions referencing nested variables', () => {
    const program = createProgramFromSource(`
      import {cs, CsVars, createVars} from '@workday/canvas-kit-styling';

      const myVars = {
        colors: createVars('background')
      };

      const styles = cs({
        backgroundColor: cssVar(myVars.colors.background)
      })
    `);

    const result = transform(program, 'test.ts'); //?

    expect(result).toContain('background-color:var(--css-my-vars-colors-background);');
  });

  it('should handle ComputedPropertyName that are static', () => {
    const program = createProgramFromSource(`
      import {cs, CsVars, createVars} from '@workday/canvas-kit-styling';

      const myVars = {
        color: '--color'
      } as const;

      const styles = cs({
        [myVars.color]: 'red'
      })
    `);

    const result = transform(program, 'test.ts'); //?

    expect(result).toContain('--color:red;');
  });

  it('should handle ComputedPropertyName that is a variable created with createVars', () => {
    const program = createProgramFromSource(`
      import {cs, CsVars, createVars} from '@workday/canvas-kit-styling';

      const myVars: {color: string} = createVars('color')

      const styles = cs({
        [myVars.color]: 'red'
      })
    `);

    const result = transform(program, 'test.ts'); //?

    expect(result).toContain('--my-vars-color:red;');
  });

  it('should handle ComputedPropertyName that is a variable created with createVars inside an object', () => {
    const program = createProgramFromSource(`
      import {cs, CsVars, createVars} from '@workday/canvas-kit-styling';

      const myVars = {
        hover: createVars('color')
      }

      const styles = cs({
        [myVars.hover.color]: 'red'
      })
    `);

    const result = transform(program, 'test.ts'); //?

    expect(result).toContain('--my-vars-hover-color:red;');
  });

  it('should handle fallback call expressions referencing static variables', () => {
    const program = createProgramFromSource(`
      import {cs, CsVars, createVars} from '@workday/canvas-kit-styling';

      const myVars = createVars('color')

      const styles = cs({
        backgroundColor: fallback(myVars.color, 'red')
      })
    `);

    const result = transform(program, 'test.ts'); //?

    expect(result).toContain('background-color:var(--css-my-vars-color, red);');
  });

  it('should handle fallback call expressions referencing other variables', () => {
    const program = createProgramFromSource(`
      import {cs, CsVars, createVars} from '@workday/canvas-kit-styling';

      const myVars = createVars('color', 'background')

      const styles = cs({
        backgroundColor: fallback(myVars.color, myVars.background)
      })
    `);

    const result = transform(program, 'test.ts'); //?

    expect(result).toContain(
      'background-color:var(--css-my-vars-color, --css-my-vars-background);'
    );
  });

  it('should handle fallback variables if provided', () => {
    const program = createProgramFromSource(`
      import {cs, CsVars, createVars} from '@workday/canvas-kit-styling';

      const styles = cs({
        backgroundColor: cssVar('--var-1')
      })
    `);

    const result = transform(program, 'test.ts', {'--var-1': 'red'}); //?

    expect(result).toContain('background-color:var(--var-1, red);');
  });

  it('should handle multiple arguments with a string', () => {
    const program = createProgramFromSource(`
      import {cs} from '@workday/canvas-kit-styling';

      const styles = cs('css-12345', {
        backgroundColor: 'red'
      })
    `);

    const result = transform(program, 'test.ts'); //?

    expect(result).toContain('css-12345');
    expect(result).toContain('background-color:red;');
  });

  it.only('should handle template stings in properties', () => {
    const program = createProgramFromSource(`
      import {cs, cssVar} from '@workday/canvas-kit-styling';

      const borderColor = 'red';

      const styles = cs('css-12345', {
        border: \`1px solid \${borderColor}\`
      })
    `);

    const result = transform(program, 'test.ts'); //?

    expect(result).toContain('css-12345');
    expect(result).toContain('border:1px solid red;');
  });

  it.only('should handle template stings using cssVar in properties', () => {
    const program = createProgramFromSource(`
      import {cs, cssVar} from '@workday/canvas-kit-styling';

      const myVars = createVars('borderColor')

      const styles = cs('css-12345', {
        border: \`1px solid \${cssVar(myVars.borderColor)}\`
      })
    `);

    const result = transform(program, 'test.ts'); //?

    expect(result).toContain('css-12345');
    expect(result).toContain('border:1px solid var(--css-my-vars-border-color);');
  });

  it('should handle multiple arguments with an identifier of a type of an object literal', () => {
    const program = createProgramFromSource(`
      import {cs} from '@workday/canvas-kit-styling';

      const obj = {
        color: 'blue'
      } as const

      const styles = cs(obj, {
        backgroundColor: 'red'
      })
    `);

    const result = transform(program, 'test.ts'); //?

    expect(result).toContain('color:blue;');
  });

  it('should handle multiple arguments with an identifier of a type of an object literal', () => {
    const program = createProgramFromSource([
      {
        filename: 'styles.ts',
        source: `
        import {cs, CsVars, createVars} from '@workday/canvas-kit-styling';
      `,
      },
      {
        filename: 'test.ts',
        source: `
          import {cs, CsVars, createVars} from '@workday/canvas-kit-styling';

          const obj = {
            color: 'blue'
          } as const

          const styles = cs(obj, {
            backgroundColor: 'red'
          })
    `,
      },
    ]);

    const result = transform(program, 'test.ts'); //?

    expect(result).toContain('color:blue;');
  });
});
