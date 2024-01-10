import {transform, _reset} from '../../lib/styleTransform';
import {createProgramFromSource} from '../createProgramFromSource';
import {handleCssVar} from '../../lib/utils/handleCssVar';

describe('handleCssVar', () => {
  beforeEach(() => {
    _reset();
  });

  it('should rewrite cssVar expressions with a single string literal argument to a TemplateExpression', () => {
    const program = createProgramFromSource(`
      import {cssVar} from '@workday/canvas-kit-styling';

      const styles = cssVar('--some-var')
    `);

    const result = transform(program, 'test.ts', {transformers: [handleCssVar]});

    expect(result).toContain("styles = '--some-var'");
  });

  it('should rewrite cssVar expressions with a single identifier argument to a TemplateExpression', () => {
    const program = createProgramFromSource(`
      import {cssVar} from '@workday/canvas-kit-styling';

      const someVar = '--some-var'

      const styles = cssVar(someVar)
    `);

    const result = transform(program, 'test.ts', {transformers: [handleCssVar]});

    expect(result).toContain('styles = someVar');
  });

  it('should rewrite cssVar expression with two string literals to a TemplateExpression', () => {
    const program = createProgramFromSource(`
      import {cssVar} from '@workday/canvas-kit-styling';

      const styles = cssVar('--some-var', '--fallback')
    `);

    const result = transform(program, 'test.ts', {transformers: [handleCssVar]});

    expect(result).toContain("styles = `var(${'--some-var'}, ${'--fallback'})`");
  });

  it('should rewrite cssVar nested expressions to nested TemplateExpressions', () => {
    const program = createProgramFromSource(`
      import {cssVar} from '@workday/canvas-kit-styling';

      const styles = cssVar('--some-var', cssVar('--fallback', 'red'))
    `);

    const result = transform(program, 'test.ts', {transformers: [handleCssVar]});

    expect(result).toContain(
      "styles = `var(${'--some-var'}, ${`var(${'--fallback'}, ${'red'})`})`"
    );
  });
});
