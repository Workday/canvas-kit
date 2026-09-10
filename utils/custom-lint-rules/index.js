/**
 * Note: you need to run `yarn add -WD file:./utils/custom-lint-rules` after changes for them to be reflected locally
 */
import enforceCanvasBreakpoints from './enforce-canvas-breakpoints.js';
import enforceCssvarSystemTokens from './enforce-cssvar-system-tokens.js';
import enforceDesignTokens from './enforce-design-tokens.js';
import noInlineStyles from './no-inline-styles.js';
import restrictedImports from './restricted-imports.js';
import useCKSlashImports from './use-ck-slash-imports.js';

export default {
  rules: {
    'enforce-canvas-breakpoints': enforceCanvasBreakpoints,
    'enforce-cssvar-system-tokens': enforceCssvarSystemTokens,
    'enforce-design-tokens': enforceDesignTokens,
    'no-inline-styles': noInlineStyles,
    'restricted-imports': restrictedImports,
    'use-ck-slash-imports': useCKSlashImports,
  },
};
