import {transform} from '../styleParser';
import {createProgramFromSource} from './createProgramFromSource';

describe('styleParser', () => {
  it('should parse simple objects with string values', () => {
    const program = createProgramFromSource(`
      const styles = cs({
        fontSize: '12px'
      })
    `);

    const result = transform(program, 'test.ts'); //?

    expect(result).toContain('font-size:12px;');
  });

  it('should parse simple objects with numeric values', () => {
    const program = createProgramFromSource(`
      const styles = cs({
        fontSize: 12
      })
    `);

    const result = transform(program, 'test.ts'); //?

    expect(result).toContain('font-size:12px;');
  });

  it('should return an Emotion-optimized object', () => {
    const program = createProgramFromSource(`
      const styles = cs({
        fontSize: 12
      })
    `);

    const result = transform(program, 'test.ts'); //?

    expect(result).toMatch(/{ name: "[a-z0-9]+", styles: "font-size:12px;" }/);
  });

  it('should handle nested selectors', () => {
    const program = createProgramFromSource(`
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
      const fontSize = 12;

      const styles = cs({
        fontSize: fontSize
      })
    `);

    const result = transform(program, 'test.ts'); //?

    expect(result).toContain('font-size:12px;');
  });

  it('should parse properties that are identifiers, turning styles into a template string', () => {
    const program = createProgramFromSource(`
      let fontSize = 12;

      const styles = cs({
        fontSize: fontSize
      })
    `);

    const result = transform(program, 'test.ts'); //?

    expect(result).toContain('`font-size:${$toString(fontSize)};`');
  });

  it('should parse properties that are PropertyAssignment, extracting static types', () => {
    const program = createProgramFromSource(`
      const fontSize = 12;

      const styles = cs({
        fontSize: fontSize
      })
    `);

    const result = transform(program, 'test.ts'); //?

    expect(result).toContain('font-size:12px;');
  });

  it('should parse properties that are PropertyAssignment, turning non-static styles into a template string', () => {
    const program = createProgramFromSource(`
      let fontSize = 12;

      const styles = cs({
        fontSize: fontSize
      })
    `);

    const result = transform(program, 'test.ts'); //?

    expect(result).toContain('`font-size:${$toString(fontSize)};`');
  });

  it('should handle spread operator that resolves to a type', () => {
    const program = createProgramFromSource(`
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

  it('should handle PropertyAccessExpressions that are not statically resolvable', () => {
    const program = createProgramFromSource(`
    const space = {
      small: 12
    }

    const styles = cs({
      padding: space.small
    })
  `);

    const result = transform(program, 'test.ts'); //?

    expect(result).toContain('`padding:${$toString(space.small)};`');
  });

  it('should handle nested PropertyAccessExpressions that are not statically resolvable', () => {
    const program = createProgramFromSource(`
    const space = {
      padding: {
        small: 12
      }
    }

    const styles = cs({
      padding: space.padding.small
    })
  `);

    const result = transform(program, 'test.ts'); //?

    expect(result).toContain('`padding:${$toString(space.padding.small)};`');
  });

  it('should handle cssVar call expressions referencing static variables', () => {
    const program = createProgramFromSource(`
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
      const myVars = createVars('color');
      const styles = cs({
        backgroundColor: cssVar(myVars.color)
      })
    `);

    const result = transform(program, 'test.ts'); //?

    expect(result).toContain('`background-color:var(${myVars.color});`');
  });

  it('should handle cssVar call expressions referencing nested variables', () => {
    const program = createProgramFromSource(`
      const myVars = {
        colors: createVars('background')
      };

      const styles = cs({
        backgroundColor: cssVar(myVars.colors.background)
      })
    `);

    const result = transform(program, 'test.ts'); //?

    expect(result).toContain('`background-color:var(${myVars.colors.background});`');
  });

  it('should handle ComputedPropertyName that are static', () => {
    const program = createProgramFromSource(`
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
});
