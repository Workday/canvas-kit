const prettierConfig = require('./.prettierrc');

module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
    'jest/globals': true,
  },
  extends: [
    // 'eslint:recommended',
    // 'plugin:import/recommended',
    // 'plugin:react/recommended',
    // 'plugin:@typescript-eslint/eslint-recommended',
    // 'plugin:@typescript-eslint/recommended',
    'prettier',
    'prettier/react',
    'prettier/@typescript-eslint',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    project: ['tsconfig.json', 'cypress/tsconfig.json'],
    sourceType: 'module',
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  plugins: [
    '@typescript-eslint',
    '@typescript-eslint/tslint',
    'jest',
    'react',
    'prettier',
    'react-hooks',
  ],
  rules: {
    '@typescript-eslint/class-name-casing': 'error',
    '@typescript-eslint/indent': 'off',
    '@typescript-eslint/interface-name-prefix': 'error',
    '@typescript-eslint/member-delimiter-style': 'off',
    '@typescript-eslint/type-annotation-spacing': 'off',
    'arrow-parens': ['off', 'as-needed'],
    'default-case': 'error',
    'dot-notation': 'error',
    'eol-last': 'off',
    'guard-for-in': 'error',
    'linebreak-style': 'off',
    'new-parens': 'off',
    'newline-per-chained-call': 'off',
    'no-caller': 'error',
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
    'no-undef-init': 'error',
    'no-unused-labels': 'error',
    'no-use-before-define': 'warn', // Decide on this
    'no-var': 'error',
    'prefer-const': 'error',
    'quote-props': 'off',
    'space-before-function-paren': 'off',
    'react/jsx-no-bind': 'warn', // Update
    curly: 'error',
    radix: 'error',
    'prettier/prettier': ['error', prettierConfig],
    // NOTE: Commented out everything below that caused problems. A lot of this is likely included in the stuff above.
    '@typescript-eslint/tslint/config': [
      'error',
      {
        rules: {
          // align: [true, 'parameters', 'arguments', 'statements'],
          'comment-format': [true, 'check-space'],
          // deprecation: true, // turned off for button deprecation
          'jsdoc-format': true,  // eslint-plugin-jsdoc
          // 'jsx-no-string-ref': true,
          // 'jsx-self-close': true,
          'no-duplicate-imports': true,
          'no-duplicate-variable': true,
          // 'no-shadowed-variable': true,
          'no-unused-expression': true,
          'one-line': [true, 'check-catch', 'check-open-brace', 'check-whitespace'],
          'triple-equals': [true, 'allow-null-check'],
          typedef: [true, 'parameter', 'property-declaration'],
          'variable-name': [
            true,
            'ban-keywords',
            'check-format',
            'allow-leading-underscore',
            'allow-pascal-case',
          ],
        },
      },
    ],
  },
};
