// @ts-check
import {RuleTester} from 'eslint';
import {describe, it} from 'vitest';

import rule from './enforce-cssvar-system-tokens.js';

RuleTester.describe = describe;
RuleTester.it = it;

const tester = new RuleTester({
  languageOptions: {ecmaVersion: 2022, sourceType: 'module'},
});

tester.run('enforce-cssvar-system-tokens', rule, {
  valid: [
    {
      code: `
        const myStyles = createStyles({
          color: cssVar(system.color.primary),
        });
      `,
    },
    {
      code: `
        const myStyles = createStyles({
          gap: cssVar(system.space.x4),
          padding: cssVar(system.space.x2),
        });
      `,
    },
    {
      // system used outside of createStyles is fine
      code: `
        const token = system.color.primary;
      `,
    },
    {
      code: `
        const styles = createStyles({
          [\`@media screen and (max-width: \${cssVar(system.breakpoints.md)})\`]: {
            width: '100%',
          },
        });
      `,
    },
  ],
  invalid: [
    {
      code: `
        const myStyles = createStyles({
          color: system.color.primary,
        });
      `,
      errors: [
        {
          message:
            'System tokens must be wrapped in cssVar() inside createStyles. Use cssVar(system.x.y) instead of system.x.y directly.',
        },
      ],
    },
    {
      code: `
        const myStyles = createStyles({
          gap: system.space.x4,
          padding: system.space.x2,
        });
      `,
      errors: [
        {
          message:
            'System tokens must be wrapped in cssVar() inside createStyles. Use cssVar(system.x.y) instead of system.x.y directly.',
        },
        {
          message:
            'System tokens must be wrapped in cssVar() inside createStyles. Use cssVar(system.x.y) instead of system.x.y directly.',
        },
      ],
    },
    {
      code: `
        const myStyles = createStyles({
          width: system.breakpoints.md,
        });
      `,
      errors: [
        {
          message:
            'System tokens must be wrapped in cssVar() inside createStyles. Use cssVar(system.x.y) instead of system.x.y directly.',
        },
      ],
    },
    {
      code: `
        const styles = createStyles({
          [\`@media screen and (max-width: \${system.breakpoints.md})\`]: {
            width: '100%',
          },
        });
      `,
      errors: [
        {
          message:
            'System tokens must be wrapped in cssVar() inside createStyles. Use cssVar(system.x.y) instead of system.x.y directly.',
        },
      ],
    },
  ],
});
