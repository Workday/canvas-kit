module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  // extends: [
  //   'eslint:recommended',
  //   'plugin:import/recommended',
  //   'plugin:react/recommended',
  //   'plugin:@typescript-eslint/eslint-recommended',
  //   'plugin:@typescript-eslint/recommended',
  //   'prettier',
  //   'prettier/react',
  //   'prettier/@typescript-eslint',
  // ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    project: ['tsconfig.json', 'cypress/tsconfig.json'],
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint', '@typescript-eslint/tslint', 'react', 'prettier', 'react-hooks'],
  rules: {
    '@typescript-eslint/class-name-casing': 'error',
    '@typescript-eslint/indent': 'off',
    '@typescript-eslint/interface-name-prefix': 'error',
    '@typescript-eslint/member-delimiter-style': 'off',
    // '@typescript-eslint/no-param-reassign': 'error',
    // '@typescript-eslint/no-use-before-declare': 'error',
    '@typescript-eslint/type-annotation-spacing': 'off',
    'arrow-parens': ['off', 'as-needed'],
    curly: 'error',
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
    // 'no-empty-functions': 'error',
    'no-eval': 'error',
    'no-extra-semi': 'off',
    'no-fallthrough': 'error',
    'no-irregular-whitespace': 'off',
    'no-multiple-empty-lines': 'off',
    'no-new-wrappers': 'error',
    'no-undef-init': 'error',
    'no-unused-labels': 'error',
    'no-var': 'error',
    'prefer-const': 'error',
    'quote-props': 'off',
    radix: 'error',
    'space-before-function-paren': 'off',
    'prettier/prettier': [
      'error',
      {
        arrowParens: 'avoid',
        bracketSpacing: false,
        jsxBracketSameLine: false,
        printWidth: 100,
        proseWrap: 'always',
        semi: true,
        singleQuote: true,
        tabWidth: 2,
        trailingComma: 'es5',
        useTabs: false,
      },
    ],
    // '@typescript-eslint/tslint/config': [
    //   'error',
    //   {
    //     rulesDirectory: [
    //       '/Users/alex.nicholls/code/design/canvas-kit/node_modules/tslint-react/rules',
    //     ],
    //     rules: {
    //       align: [true, 'parameters', 'arguments', 'statements'],
    //       'comment-format': [true, 'check-space'],
    //       deprecation: true,
    //       'jsdoc-format': true,
    //       'jsx-boolean-value': true,
    //       'jsx-key': true,
    //       'jsx-no-bind': true,
    //       'jsx-no-string-ref': true,
    //       'jsx-self-close': true,
    //       'no-duplicate-imports': true,
    //       'no-duplicate-variable': true,
    //       'no-shadowed-variable': true,
    //       'no-unused-expression': true,
    //       'one-line': [true, 'check-catch', 'check-open-brace', 'check-whitespace'],
    //       'triple-equals': [true, 'allow-null-check'],
    //       typedef: [true, 'parameter', 'property-declaration'],
    //       'variable-name': [
    //         true,
    //         'ban-keywords',
    //         'check-format',
    //         'allow-leading-underscore',
    //         'allow-pascal-case',
    //       ],
    //     },
    //   },
    // ],
  },
};
