// @ts-check

/**
 * CSS property -> token category groupings used by enforce-design-tokens.
 * Keep this file in sync with the Canvas Kit token migration documentation.
 */

/** @type {Record<string, string>} */
export const V4_SIZE_TOKENS = {
  zero: 'base.size0',
  x1: 'base.size50',
  x2: 'base.size100',
  x3: 'base.size150',
  x4: 'system.size.xxxs',
  x6: 'system.size.xs',
  x8: 'system.size.sm',
  x10: 'system.size.md',
  x16: 'system.size.xxl',
  x20: 'base.size1000',
};

/** @type {Record<string, string>} */
export const V4_GAP_TOKENS = {
  zero: 'system.gap.none',
  x1: 'system.gap.xs',
  x2: 'system.gap.sm',
  x4: 'system.gap.md',
  x6: 'system.gap.lg',
  x8: 'system.gap.xl',
  x16: 'system.gap.xxl',
};

/** @type {Record<string, string>} */
export const V4_PADDING_TOKENS = {
  zero: 'system.padding.none',
  x1: 'system.padding.xxs',
  x2: 'system.padding.xs',
  x3: 'system.padding.sm',
  x4: 'system.padding.md',
  x6: 'system.padding.xl',
  x8: 'system.padding.xxl',
};

/** @type {Record<string, string>} */
export const V4_SHAPE_TOKENS = {
  zero: 'system.shape.none',
  half: 'px2rem(2)',
  x1: 'system.shape.sm',
  x2: 'system.shape.md',
  round: 'system.shape.full',
};

export const SIZE_PROPERTIES = new Set([
  'blockSize',
  'flexBasis',
  'height',
  'inlineSize',
  'maxBlockSize',
  'maxHeight',
  'maxInlineSize',
  'maxWidth',
  'minBlockSize',
  'minHeight',
  'minInlineSize',
  'minWidth',
  'width',
]);

export const GAP_PROPERTIES = new Set([
  'bottom',
  'columnGap',
  'gap',
  'gridGap',
  'inset',
  'insetBlock',
  'insetBlockEnd',
  'insetBlockStart',
  'insetInline',
  'insetInlineEnd',
  'insetInlineStart',
  'left',
  'margin',
  'marginBlock',
  'marginBlockEnd',
  'marginBlockStart',
  'marginBottom',
  'marginInline',
  'marginInlineEnd',
  'marginInlineStart',
  'marginLeft',
  'marginRight',
  'marginTop',
  'right',
  'rowGap',
  'top',
]);

export const PADDING_PROPERTIES = new Set([
  'padding',
  'paddingBlock',
  'paddingBlockEnd',
  'paddingBlockStart',
  'paddingBottom',
  'paddingInline',
  'paddingInlineEnd',
  'paddingInlineStart',
  'paddingLeft',
  'paddingRight',
  'paddingTop',
]);

export const BORDER_RADIUS_PROPERTIES = new Set([
  'borderBottomLeftRadius',
  'borderBottomRightRadius',
  'borderEndEndRadius',
  'borderEndStartRadius',
  'borderRadius',
  'borderStartEndRadius',
  'borderStartStartRadius',
  'borderTopLeftRadius',
  'borderTopRightRadius',
]);

/**
 * Union of size + gap + padding properties. enforce-design-tokens uses this
 * to flag hardcoded pixel/rem values on any spacing-like property without
 * caring about the v4 sub-category.
 */
export const SPACING_PROPERTIES = new Set([
  ...SIZE_PROPERTIES,
  ...GAP_PROPERTIES,
  ...PADDING_PROPERTIES,
]);

/**
 * Call expressions that take a styles object as their first argument. The v4
 * token rule only inspects Properties that live inside one of these calls
 * (directly, via a variable, or via `as const`).
 */
export const STYLED_CALLEES = new Set(['createStencil', 'createStyles', 'createVars', 'keyframes']);

/**
 * Human-readable lists of v4 token names per category, used as suggestions in
 * lint messages. Each category mirrors the Canvas Kit v4 migration guide
 * (https://workday.github.io/canvas-kit/?path=/docs/guides-tokens-migration-mapping-tables-system--docs)
 * EXCEPT for `size`, which intentionally includes `xxs|lg|xl`. Those tokens are
 * exported by @workday/canvas-tokens-web but absent from the migration table
 * because v3 had no equivalent at those raw values; we still allow them as
 * documented v4 surface. `padding` and `shape` mirror the migration table
 * exactly — do NOT add `padding.lg` or `shape.lg|xl|xxl|xxxl` here.
 * @type {Record<'size' | 'gap' | 'padding' | 'shape', string>}
 */
export const CANONICAL_TOKENS_BY_CATEGORY = {
  size: 'xxxs|xxs|xs|sm|md|lg|xl|xxl',
  gap: 'none|xs|sm|md|lg|xl|xxl',
  padding: 'none|xxs|xs|sm|md|xl|xxl',
  shape: 'none|sm|md|full',
};

/**
 * Stable docs URL surfaced via ESLint `meta.docs.url`. Update this constant if
 * the canvas-tokens guide moves to a hosted location.
 */
export const CANVAS_TOKENS_DOCS_URL =
  'https://workday.github.io/canvas-kit/?path=/docs/guides-tokens-migration-mapping-tables-system--docs';
