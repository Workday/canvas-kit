// @ts-check
import {createStyledRootsTracker} from './canvas-styled-roots.js';
import {STYLED_CALLEES} from './canvas-tokens-matrix.js';

// system.breakpoints.* tokens
const CANVAS_BREAKPOINT_PIXELS = new Set(['320px', '768px', '1024px', '1440px']);

const BREAKPOINT_PIXELS_PATTERN = /\b\d+px\b/g;

/**
 * Returns the CSS key as a static string when possible.
 * @param {import('estree').Property['key']} key
 * @returns {string | null}
 */
function getStaticKeyName(key) {
  if (key.type === 'Literal' && typeof key.value === 'string') {
    return key.value;
  }

  if (key.type === 'TemplateLiteral' && key.expressions.length === 0) {
    return key.quasis[0]?.value.cooked ?? null;
  }

  return null;
}

/** @type {import('eslint').Rule.RuleModule} */
export default {
  meta: {
    docs: {
      description:
        'Require media query keys inside createStyles, createStencil, createVars, and keyframes to use standard Canvas breakpoint px values.',
    },
    messages: {
      noCustomBreakpoint:
        'Do not use custom hardcoded breakpoint {{pixelValue}} in media queries. Use a standard Canvas breakpoint literal.',
    },
    schema: [],
    type: 'suggestion',
  },

  /** @param {import('eslint').Rule.RuleContext} context */
  create(context) {
    const {collectStyledRoots, isInsideStyledRoot} = createStyledRootsTracker(
      context,
      STYLED_CALLEES
    );

    return {
      Program(programNode) {
        collectStyledRoots(programNode);
      },
      Property(node) {
        if (node.type !== 'Property') {
          return;
        }
        if (!isInsideStyledRoot(/** @type {import('estree').Node} */ (node))) {
          return;
        }

        const keyName = getStaticKeyName(
          /** @type {import('estree').Property['key']} */ (node.key)
        );
        if (!keyName || !keyName.startsWith('@media')) {
          return;
        }

        const matchingBreakpoints = keyName.matchAll(BREAKPOINT_PIXELS_PATTERN);
        for (const breakpointMatch of matchingBreakpoints) {
          const matchingBreakpoint = breakpointMatch[0];
          if (CANVAS_BREAKPOINT_PIXELS.has(matchingBreakpoint)) {
            continue;
          }

          context.report({
            data: {pixelValue: matchingBreakpoint},
            messageId: 'noCustomBreakpoint',
            node: node.key,
          });
        }
      },
    };
  },
};
