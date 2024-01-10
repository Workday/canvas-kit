import {createProgramFromSource} from '../createProgramFromSource';

import {transform} from '../../lib/styleTransform';

describe('handleCalc', () => {
  it('should handle calc.add on two StringLiteral values', () => {
    const program = createProgramFromSource(`
      import {calc} from '@workday/canvas-kit-styling';

      const styles = { padding: calc.add('20px', '2rem') }
    `);

    const result = transform(program, 'test.ts');

    expect(result).toContain('padding: "calc(20px + 2rem)"');
  });

  it('should handle calc.add with non StringLiterals', () => {
    const program = createProgramFromSource(`
      import {calc} from '@workday/canvas-kit-styling';

      const foo = '20px'

      const styles = { padding: calc.add(foo, '2rem') }
    `);

    const result = transform(program, 'test.ts');

    expect(result).toContain("padding: `calc(${foo} + ${'2rem'})`");
  });
  it('should handle calc.subtract on two StringLiteral values', () => {
    const program = createProgramFromSource(`
      import {calc} from '@workday/canvas-kit-styling';

      const styles = { padding: calc.subtract('20px', '2rem') }
    `);

    const result = transform(program, 'test.ts');

    expect(result).toContain('padding: "calc(20px - 2rem)"');
  });

  it('should handle calc.subtract with non StringLiterals', () => {
    const program = createProgramFromSource(`
      import {calc} from '@workday/canvas-kit-styling';

      const foo = '20px'

      const styles = { padding: calc.subtract(foo, '2rem') }
    `);

    const result = transform(program, 'test.ts');

    expect(result).toContain("padding: `calc(${foo} - ${'2rem'})`");
  });

  it('should handle calc.multiply on two StringLiteral values', () => {
    const program = createProgramFromSource(`
      import {calc} from '@workday/canvas-kit-styling';

      const styles = { padding: calc.multiply('20px', '2rem') }
    `);

    const result = transform(program, 'test.ts');

    expect(result).toContain('padding: "calc(20px * 2rem)"');
  });

  it('should handle calc.multiply with non StringLiterals', () => {
    const program = createProgramFromSource(`
      import {calc} from '@workday/canvas-kit-styling';

      const foo = '20px'

      const styles = { padding: calc.multiply(foo, '2rem') }
    `);

    const result = transform(program, 'test.ts');

    expect(result).toContain("padding: `calc(${foo} * ${'2rem'})`");
  });
  it('should handle calc.divide on two StringLiteral values', () => {
    const program = createProgramFromSource(`
      import {calc} from '@workday/canvas-kit-styling';

      const styles = { padding: calc.divide('20px', '2rem') }
    `);

    const result = transform(program, 'test.ts');

    expect(result).toContain('padding: "calc(20px / 2rem)"');
  });

  it('should handle calc.divide with non StringLiterals', () => {
    const program = createProgramFromSource(`
      import {calc} from '@workday/canvas-kit-styling';

      const foo = '20px'

      const styles = { padding: calc.divide(foo, '2rem') }
    `);

    const result = transform(program, 'test.ts');

    expect(result).toContain("padding: `calc(${foo} / ${'2rem'})`");
  });
  it('should handle calc.negate on two StringLiteral values', () => {
    const program = createProgramFromSource(`
      import {calc} from '@workday/canvas-kit-styling';

      const styles = { padding: calc.negate('20px') }
    `);

    const result = transform(program, 'test.ts');

    expect(result).toContain('padding: "calc(20px * -1)"');
  });

  it('should handle calc.negate with non StringLiterals', () => {
    const program = createProgramFromSource(`
      import {calc} from '@workday/canvas-kit-styling';

      const foo = '20px'

      const styles = { padding: calc.negate(foo) }
    `);

    const result = transform(program, 'test.ts');

    expect(result).toContain('padding: `calc(${foo} * ${"-1"})`');
  });
});
