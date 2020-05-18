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
            "Only top-level path imports are allowed. Import from '@workday/canvas-kit-react-color-picker'.",
        },
      ],
    },
    {
      code: "import radius from '@workday/canvas-kit-react-core/lib/radius'",
      errors: [
        {
          message:
            "Only top-level path imports are allowed. Import from '@workday/canvas-kit-react-core'.",
        },
      ],
    },
  ],
});
