const lint = require('eslint');
const ckSlashImportRule = require('./use-ck-slash-imports');

const slashImportRuleTester = new lint.RuleTester({
  parserOptions: {ecmaVersion: 2015, sourceType: 'module'},
});
slashImportRuleTester.run('use-ck-slash-imports', ckSlashImportRule, {
  valid: [
    "import {ColorSwatch} from '@workday/canvas-kit-react/color-picker'",
    "import {Toast} from '@workday/canvas-kit-react/toast'",
    "import {SidePanel} from '@workday/canvas-kit-preview-react/side-panel'",
    "import {styled} from '@workday/canvas-kit-react/common'",
    "import {Specifications} from '@workday/canvas-kit-docs'",
    "import {v5} from '@workday/canvas-kit-codemod'",
    "import {PopupStack} from '@workday/canvas-kit-popup-stack'",
  ],
  invalid: [
    {
      code: "import { Card, PrimaryButton } from '@workday/canvas-kit-react'",
      errors: [
        {
          message:
            'Import Card and PrimaryButton from their Canvas Kit subdirectories instead of @workday/canvas-kit-react',
        },
      ],
    },
    {
      code: "import { SidePanel } from '@workday/canvas-kit-preview-react'",
      errors: [
        {
          message:
            'Import SidePanel from its Canvas Kit subdirectory instead of @workday/canvas-kit-preview-react',
        },
      ],
    },
    {
      code: "import { Toast, useToastModel, ToastProps } from '@workday/canvas-kit-labs-react'",
      errors: [
        {
          message:
            'Import Toast, useToastModel, and ToastProps from their Canvas Kit subdirectories instead of @workday/canvas-kit-labs-react',
        },
      ],
    },
  ],
});
