import {ESLint} from 'eslint';
import {describe, expect, it} from 'vitest';

import canvasKit from '../index.js';

describe('recommended configuration', () => {
  it('registers and enables every public rule', async () => {
    const eslint = new ESLint({
      overrideConfig: [
        {
          files: ['**/*.jsx'],
          languageOptions: {parserOptions: {ecmaFeatures: {jsx: true}}},
          ...canvasKit.configs.recommended,
        },
      ],
      overrideConfigFile: true,
    });

    const [result] = await eslint.lintText("<div style={{color: 'red'}} />", {
      filePath: 'Component.jsx',
    });

    expect(result.messages).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ruleId: 'canvas-kit/no-inline-styles', severity: 2}),
      ])
    );
    expect(canvasKit.configs.recommended.rules).toEqual({
      'canvas-kit/enforce-canvas-breakpoints': 'error',
      'canvas-kit/enforce-cssvar-system-tokens': 'error',
      'canvas-kit/enforce-design-tokens': 'error',
      'canvas-kit/no-inline-styles': 'error',
    });
  });
});
