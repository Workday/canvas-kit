import {createProgramFromSource} from '../createProgramFromSource';

import {transform} from '../../lib/styleTransform';

describe('handlePx2Rem', () => {
  it('should handle px2rem without a base', () => {
    const program = createProgramFromSource(`
      import {px2rem} from '@workday/canvas-kit-styling';

      const styles = { padding: px2rem(20) }
    `);

    const result = transform(program, 'test.ts');

    expect(result).toContain('padding: "1.25rem"');
  });

  it('should handle px2rem with a base', () => {
    const program = createProgramFromSource(`
      import {px2rem} from '@workday/canvas-kit-styling';

      const styles = { padding: px2rem(20, 10) }
    `);

    const result = transform(program, 'test.ts');

    expect(result).toContain('padding: "2rem"');
  });
});
