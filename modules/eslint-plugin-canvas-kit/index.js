import enforceCanvasBreakpoints from './rules/enforce-canvas-breakpoints.js';
import enforceCssvarSystemTokens from './rules/enforce-cssvar-system-tokens.js';
import enforceDesignTokens from './rules/enforce-design-tokens.js';
import noInlineStyles from './rules/no-inline-styles.js';

const rules = {
  'enforce-canvas-breakpoints': enforceCanvasBreakpoints,
  'enforce-cssvar-system-tokens': enforceCssvarSystemTokens,
  'enforce-design-tokens': enforceDesignTokens,
  'no-inline-styles': noInlineStyles,
};

const plugin = {
  configs: {},
  rules,
};

plugin.configs.recommended = {
  plugins: {'canvas-kit': plugin},
  rules: {
    'canvas-kit/enforce-canvas-breakpoints': 'error',
    'canvas-kit/enforce-cssvar-system-tokens': 'error',
    'canvas-kit/enforce-design-tokens': 'error',
    'canvas-kit/no-inline-styles': 'error',
  },
};

export default plugin;
