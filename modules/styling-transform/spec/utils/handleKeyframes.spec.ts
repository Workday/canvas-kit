import ts from 'typescript';

import {transform, _reset} from '../../lib/styleTransform';
import {createProgramFromSource} from '../createProgramFromSource';
import {findNodes} from '../findNodes';
import {handleKeyframes} from '../../lib/utils/handleKeyframes';

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

    const keyframes = {};
    const sourceFile = program.getSourceFile('test.ts');
    const node = findNodes(sourceFile, '', ts.isTaggedTemplateExpression)[0];

    handleKeyframes(node, {
      checker: program.getTypeChecker(),
      prefix: 'css',
      variables: {},
      keyframes,
    });

    expect(keyframes).toHaveProperty(
      'buttonAnimation',
      expect.stringMatching(/animation-[a-z0-9]+/)
    );
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
});
