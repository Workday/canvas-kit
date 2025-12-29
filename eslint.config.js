import emotionPlugin from '@emotion/eslint-plugin';
import js from '@eslint/js';
import typescriptPlugin from '@typescript-eslint/eslint-plugin';
import typescriptParser from '@typescript-eslint/parser';
import compatPlugin from 'eslint-plugin-compat';
import prettierPlugin from 'eslint-plugin-prettier';
import reactPlugin from 'eslint-plugin-react';
import reactHooksPlugin from 'eslint-plugin-react-hooks';

import workdayCustomRules from './utils/custom-lint-rules/index.js';

export default [
  {
    ignores: [
      '**/node_modules/**',
      '**/dist/**',
      '**/coverage/**',
      'docs/**',
      'jest/**',
      '.storybook/**',
    ],
  },
  {
    files: ['**/*.{ts,tsx,jsx}'],
    languageOptions: {
      parser: typescriptParser,
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
        project: ['./tsconfig.eslint.json', './cypress/tsconfig.json'],
        sourceType: 'module',
      },
      globals: {
        browser: true,
        es6: true,
        node: true,
      },
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
    plugins: {
      '@typescript-eslint': typescriptPlugin,
      react: reactPlugin,
      'react-hooks': reactHooksPlugin,
      prettier: prettierPlugin,
      '@emotion': emotionPlugin,
      compat: compatPlugin,
      'workday-custom-rules': workdayCustomRules,
    },
    rules: {
      'prettier/prettier': 'warn',
      'workday-custom-rules/restricted-imports': 'error',
      'workday-custom-rules/use-ck-slash-imports': 'error',
      '@typescript-eslint/naming-convention': [
        'error',
        {selector: ['class', 'interface'], format: ['PascalCase']},
      ],
      '@typescript-eslint/indent': 'off',
      '@typescript-eslint/member-delimiter-style': 'off',
      '@typescript-eslint/type-annotation-spacing': 'off',
      '@emotion/jsx-import': 'error',
      '@emotion/import-from-emotion': 'error',
      '@emotion/styled-import': 'error',
      '@emotion/syntax-preference': ['error', 'object'],
      '@emotion/pkg-renaming': 'error',
      'arrow-parens': ['off', 'as-needed'],
      'default-case': 'error',
      'dot-notation': 'error',
      'eol-last': 'off',
      eqeqeq: ['error', 'smart'],
      'guard-for-in': 'error',
      'linebreak-style': 'off',
      'new-parens': 'off',
      'newline-per-chained-call': 'off',
      'no-caller': 'error',
      'no-duplicate-imports': 'error',
      'no-debugger': 'error',
      'no-empty': 'error',
      'no-empty-function': 'error',
      'no-eval': 'error',
      'no-extra-semi': 'off',
      'no-fallthrough': 'error',
      'no-irregular-whitespace': 'off',
      'no-multiple-empty-lines': 'off',
      'no-new-wrappers': 'error',
      'no-param-reassign': 'error',
      'no-redeclare': 'off',
      '@typescript-eslint/no-redeclare': ['error'],
      'no-undef-init': 'error',
      'no-unused-expressions': 'off',
      '@typescript-eslint/no-unused-expressions': 'error',
      'no-unused-labels': 'error',
      'no-use-before-define': 'off',
      'no-var': 'error',
      'prefer-const': 'off',
      'space-before-function-paren': 'off',
      'react/jsx-no-bind': 'off',
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'error',
      curly: 'error',
      radix: 'error',
    },
  },
  {
    files: ['**/*.stories.tsx'],
    rules: {
      'react-hooks/rules-of-hooks': 'off',
    },
  },
  {
    files: ['**/*.spec.ts', '**/*.spec.tsx'],
    rules: {
      'no-empty-function': 'off',
    },
  },
  {
    files: ['**/*.js'],
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: 'module',
      globals: {
        console: true,
        process: true,
        __dirname: true,
        __filename: true,
        Buffer: true,
        URL: true,
      },
    },
    plugins: {
      compat: compatPlugin,
      prettier: prettierPlugin,
    },
    rules: {
      'prettier/prettier': 'warn',
      'no-empty': 'error',
      'no-empty-function': 'error',
      'no-var': 'error',
      'prefer-const': 'off',
      curly: 'error',
    },
  },
];
