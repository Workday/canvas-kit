const eslint = require('eslint');
const rule = require('./no-invalid-banana-imports');

const ruleTester = new eslint.RuleTester({
  parserOptions: {ecmaVersion: 2015, sourceType: 'module'},
});
ruleTester.run('no-invalid-banana-imports', rule, {
  valid: ["import { ColorSwatch } from '@workday/canvas-kit-react-color-picker'"],
  invalid: [
    {
      code:
        "import { ColorSwatch } from '@workday/canvas-kit-react-color-picker/lib/parts/ColorSwatch.tsx'",
      errors: [
        {
          message:
            "Only second level path imports are allowed. Prefer to import from '@workday/canvas-kit-react-color-picker'.",
        },
      ],
    },
  ],
});
