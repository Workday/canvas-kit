import {
  createProgramFromSource,
  transform,
  withDefaultContext,
} from '@workday/canvas-kit-styling-transform/testing';

import {_reset} from '../../lib/styleTransform';
import {compileCSS} from '../../lib/utils/createStyleObjectNode';

describe('handleInjectGlobal', () => {
  beforeEach(() => {
    _reset();
  });

  it('should transform an object using injectGlobal', () => {
    const program = createProgramFromSource(`
      import {injectGlobal} from '@workday/canvas-kit-styling';

      injectGlobal({
        '*': {
          padding: 10
        }
      })
    `);

    const result = transform(program, 'test.ts');

    expect(result).toContain('styles: "*{padding:10px;}');
  });

  it('should transform a TemplateString using injectGlobal', () => {
    const program = createProgramFromSource(`
      import {injectGlobal} from '@workday/canvas-kit-styling';

      injectGlobal\`
        * {
          padding: 10px;
        }
      \`
    `);

    const result = transform(program, 'test.ts');

    expect(result).toMatch(
      /injectGlobal\({ name: "[a-z0-9]+", styles: ".+\*.+{.+padding: 10px;.+}/
    );
  });

  it('should add global styles to the compiled CSS from an object', () => {
    const program = createProgramFromSource(`
      import {injectGlobal} from '@workday/canvas-kit-styling';

      injectGlobal({
        '*': {
          padding: 10
        }
      })
    `);

    const styles = {};
    transform(program, 'test.ts', withDefaultContext(program.getTypeChecker(), {styles}));

    expect(styles['test.css']).toContainEqual(compileCSS('* { padding: 10px; }'));
  });

  it('should add global styles to the compiled CSS from a template string', () => {
    const program = createProgramFromSource(`
      import {injectGlobal} from '@workday/canvas-kit-styling';

      injectGlobal\`
        * {
          padding: 10px;
        }
      \`
    `);

    const styles = {};
    transform(program, 'test.ts', withDefaultContext(program.getTypeChecker(), {styles}));

    expect(styles['test.css']).toContainEqual(compileCSS('* { padding: 10px; }'));
  });
});
