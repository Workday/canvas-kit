// @ts-check
import {RuleTester} from 'eslint';
import {describe, it} from 'vitest';

import rule from '../rules/no-inline-styles.js';

RuleTester.describe = describe;
RuleTester.it = it;

const tester = new RuleTester({
  languageOptions: {
    ecmaVersion: 2022,
    parserOptions: {ecmaFeatures: {jsx: true}},
    sourceType: 'module',
  },
});

tester.run('no-inline-styles', rule, {
  valid: [
    {
      // className is fine
      code: `<div className={styles.foo} />`,
    },
    {
      // style prop with no value (unusual but valid JSX)
      code: `<div style />`,
    },
  ],
  invalid: [
    {
      code: `<div style="color: red" />`,
      errors: [
        {
          message:
            'Inline styles are not allowed. Use createStyles from @workday/canvas-kit-styling instead.',
        },
      ],
    },
    {
      code: `<div style={{ color: 'red' }} />`,
      errors: [
        {
          message:
            'Inline styles are not allowed. Use createStyles from @workday/canvas-kit-styling instead.',
        },
      ],
    },
    {
      code: `<Button style={buttonStyles} />`,
      errors: [
        {
          message:
            'Inline styles are not allowed. Use createStyles from @workday/canvas-kit-styling instead.',
        },
      ],
    },
    {
      code: `
        const el = <span style={computedStyle} />;
      `,
      errors: [
        {
          message:
            'Inline styles are not allowed. Use createStyles from @workday/canvas-kit-styling instead.',
        },
      ],
    },
  ],
});
