// @ts-check
import {RuleTester} from 'eslint';
import {describe, it} from 'vitest';

import rule from '../rules/enforce-design-tokens.js';

// Bind Vitest functions to RuleTester so it knows how to generate test blocks
RuleTester.describe = describe;
RuleTester.it = it;

const tester = new RuleTester({
  languageOptions: {ecmaVersion: 2022, sourceType: 'module'},
});

tester.run('enforce-design-tokens', rule, {
  valid: [
    {
      code: `
        const myStyles = createStyles({
          gap: cssVar(system.space.x4),
        });
      `,
    },
    {
      code: `
        const myStyles = createStyles({
          color: 'inherit',
          backgroundColor: 'transparent',
        });
      `,
    },
  ],
  invalid: [
    {
      code: `
        const myStyles = createStyles({
          gap: '42px',
          margin: '1rem',
          height: '100dvh',
          padding: 'var(--cnvs-base-space-x5, 1.25rem)',
        });
      `,
      errors: [
        {
          message:
            "Avoid hardcoded value '42px' in createStyles. Use cssVar(system.space.*) instead.",
        },
        {
          message:
            "Avoid hardcoded value '1rem' in createStyles. Use cssVar(system.space.*) instead.",
        },
        {
          message:
            "Avoid hardcoded value '100dvh' in createStyles. Use cssVar(system.space.*) instead.",
        },
        {
          message:
            "Avoid hardcoded value 'var(--cnvs-base-space-x5, 1.25rem)' in createStyles. Use cssVar(system.space.*) instead.",
        },
      ],
    },

    {
      code: `
        const myStyles = createStyles({
          color: '#000000',
          backgroundColor: '#fff',
          borderColor: 'tomato',
        });
      `,
      errors: [
        {
          message:
            "Avoid hardcoded value '#000000' in createStyles. Use cssVar(system.color.*) instead.",
        },
        {
          message:
            "Avoid hardcoded value '#fff' in createStyles. Use cssVar(system.color.*) instead.",
        },
        {
          message:
            "Avoid hardcoded value 'tomato' in createStyles. Use cssVar(system.color.*) instead.",
        },
      ],
    },

    {
      code: `
        const myStyles = createStyles({
        borderRadius: 'var(--cnvs-base-shape-x4, var(--cnvs-sys-shape-x2))',
        });
      `,
      errors: [
        {
          message:
            "Avoid hardcoded value 'var(--cnvs-base-shape-x4, var(--cnvs-sys-shape-x2))' in createStyles. Use cssVar(system.shape.*) instead.",
        },
      ],
    },
  ],
});
