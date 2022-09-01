const ckSlashImportRule = require('./use-ck-slash-imports');

const slashImportRuleTester = new eslint.RuleTester({
  parserOptions: {ecmaVersion: 2015, sourceType: 'module'},
});
slashImportRuleTester.run('use-ck-slash-imports', ckSlashImportRule, {
  valid: [
    "import { ColorSwatch } from '@workday/canvas-kit-react/color-picker'",
    '@workday/canvas-kit-labs-react/toast',
    '@workday/canvas-kit-preview-react/side-panel',
    '@workday/canvas-kit-react/common',
    '@workday/canvas-kit-docs',
    '@workday/canvas-kit-codemod',
    '@workday/canvas-kit-popup-stack',
  ],
  invalid: [
    {
      code: "import { Card, PrimaryButton } from '@workday/canvas-kit-react'",
      errors: [
        {
          message: '',
        },
      ],
    },
    {
      code: "import { SidePanel } from '@workday/canvas-kit-preview-react'",
      errors: [
        {
          message: '',
        },
      ],
    },
    {
      code: "import { Toast, useToastModel, ToastProps } from '@workday/canvas-kit-labs-react'",
      errors: [
        {
          message: '',
        },
      ],
    },
  ],
});
