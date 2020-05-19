const eslint = require('eslint');
const rule = require('./restricted-imports');

const ruleTester = new eslint.RuleTester({
  parserOptions: {ecmaVersion: 2015, sourceType: 'module'},
});
ruleTester.run('restricted-imports', rule, {
  valid: [
    "import { ColorSwatch } from '@workday/canvas-kit-react-color-picker'",
    "import '@workday/canvas-kit-css-text-input/index.scss';",
  ],
  invalid: [
    {
      code:
        "import { ColorSwatch } from '@workday/canvas-kit-react-color-picker/lib/parts/ColorSwatch.tsx'",
      errors: [
        {
          message:
            "The /lib directory isn't available in production. Import from '@workday/canvas-kit-react-color-picker'.",
        },
      ],
    },
    {
      code: "import radius from '@workday/canvas-kit-react-core/lib/radius'",
      errors: [
        {
          message:
            "The /lib directory isn't available in production. Import from '@workday/canvas-kit-react-core'.",
        },
      ],
    },
  ],
});
