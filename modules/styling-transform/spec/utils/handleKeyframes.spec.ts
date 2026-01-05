import ts from 'typescript';

import {_reset, transform, withDefaultContext} from '../../lib/styleTransform';
import {handleKeyframes} from '../../lib/utils/handleKeyframes';
import {createProgramFromSource} from '../createProgramFromSource';
import {findNodes} from '../findNodes';

describe('handleKeyframes', () => {
  beforeEach(() => {
    _reset();
  });

  it('should transform TaggedTemplateExpressions', () => {
    const program = createProgramFromSource(`
      import {keyframes} from '@workday/canvas-kit-styling';

      const buttonAnimation = keyframes\`
        from {
          transform: scale(0.85);
        }

        to {
          transform: scale(1.0);
        }
      \`
    `);

    const result = transform(program, 'test.ts', {transformers: [handleKeyframes]});

    expect(result).toMatch(/keyframes\({ name: "[a-z0-9]+"/);
  });

  it('should transform TaggedTemplateExpressions', () => {
    const program = createProgramFromSource(`
      import {keyframes} from '@workday/canvas-kit-styling';

      const buttonAnimation = keyframes\`\`
    `);

    const names = {};
    const sourceFile = program.getSourceFile('test.ts')!;
    const node = findNodes(sourceFile, '', ts.isTaggedTemplateExpression)![0];

    handleKeyframes(
      node,
      withDefaultContext(program.getTypeChecker(), {
        names,
      })
    );

    expect(names).toHaveProperty('buttonAnimation', expect.stringMatching(/animation-[a-z0-9]+/));
  });

  it('should transform CallExpression', () => {
    const program = createProgramFromSource(`
      import {keyframes} from '@workday/canvas-kit-styling';

      const buttonAnimation = keyframes({
        from: {
          transform: 'scale(0.85)'
        },

        to: {
          transform: 'scale(1.0)'
        }
      })
    `);

    const result = transform(program, 'test.ts', {transformers: [handleKeyframes]});

    expect(result).toMatch(/keyframes\({ name: "[a-z0-9]+"/);
  });

  it('should collect styles into a styles object', () => {
    const program = createProgramFromSource(`
      import {keyframes} from '@workday/canvas-kit-styling';

      const buttonAnimation = keyframes({
        from: {
          transform: 'scale(0.85)'
        },

        to: {
          transform: 'scale(1.0)'
        }
      })
    `);

    const styles = {};
    const names = {};
    const sourceFile = program.getSourceFile('test.ts')!;
    const node = findNodes(sourceFile, 'keyframes', ts.isCallExpression)![0];

    handleKeyframes(node, withDefaultContext(program.getTypeChecker(), {styles, names}));

    expect(styles['test.css']).toContainEqual(
      expect.stringMatching(
        /@keyframes animation-[a-z0-9]+\s+{\s+from\s+{\s+transform: scale\(0.85\);\s+}\s+to\s+{\s+transform: scale\(1.0\);\s+}\s+}/
      )
    );
    expect(names).toHaveProperty('buttonAnimation', expect.stringMatching(/animation-[a-z0-9]+/));
  });
});
