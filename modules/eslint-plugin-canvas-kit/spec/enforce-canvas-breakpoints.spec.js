// @ts-check
import tsParser from '@typescript-eslint/parser';
import {RuleTester} from 'eslint';
import {describe, it} from 'vitest';

import rule from '../rules/enforce-canvas-breakpoints.js';

RuleTester.describe = describe;
RuleTester.it = it;

const tester = new RuleTester({
  languageOptions: {ecmaVersion: 2022, sourceType: 'module'},
});

const tsLanguageOptions = /** @type {import('eslint').Linter.LanguageOptions} */ ({
  parser: tsParser,
  ecmaVersion: 2022,
  sourceType: 'module',
});

tester.run('enforce-canvas-breakpoints', rule, {
  valid: [
    {
      code: `
        createStyles({
          '@media screen and (max-width: 768px)': {
            width: '100%',
          },
        });
      `,
    },
    {
      code: `
        createStyles({
          '@media screen and (min-width: 1024px)': {
            width: '100%',
          },
        });
      `,
    },
    {
      code: `
        const styles = {
          '@media screen and (min-width: 1440px)': {
            width: '100%',
          },
        } as const;
        createStyles(styles);
      `,
      languageOptions: tsLanguageOptions,
    },
    {
      code: `
        createStyles({ '@media screen and (max-width: 320px)': {} });
      `,
    },
    {
      code: `
        const mq = '@media screen and (max-width: 768px)';
        const styles = { [mq]: { width: '100%' } };
      `,
    },
  ],
  invalid: [
    {
      code: `
        const styles = {
          '@media screen and (min-width: 333px)': {
            width: '100%',
          },
        } as const;
        createStyles(styles);
      `,
      languageOptions: tsLanguageOptions,
      errors: [
        {
          data: {pixelValue: '333px'},
          messageId: 'noCustomBreakpoint',
        },
      ],
    },
    {
      code: `
        createStyles({
          '@media screen and (min-width: 420px) and (max-width: 1024px)': {
            width: '100%',
          },
        });
      `,
      errors: [
        {
          data: {pixelValue: '420px'},
          messageId: 'noCustomBreakpoint',
        },
      ],
    },
  ],
});
