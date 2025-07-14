import {
  buttonColors,
  chartingColorOffsets,
  chartingColors,
  colors,
  commonColors,
  gradients,
  iconColors,
  inputColors,
  statusColors,
  typeColors,
} from '@workday/canvas-colors-web';

import {
  borderRadius,
  CanvasBorderRadius,
  CanvasBorderRadiusKeys,
  CanvasBorderRadiusValues,
} from './lib/radius';
import {BrandingColor, CanvasColor} from './lib/colors.types';
import {depth, CanvasDepth, CanvasDepthValues} from './lib/depth';
import {
  space,
  CanvasSpace,
  CanvasSpaceKeys,
  CanvasSpaceValues,
  CanvasSpaceNumberValues,
  CanvasSpaceNumbers,
  spaceNumbers,
} from './lib/space';
import {
  type,
  fontFamily,
  monoFontFamily,
  CanvasType,
  CanvasTypeProperties,
  CanvasTypeVariants,
  CanvasTypeHierarchy,
} from './lib/type';
import {CSSProperties} from './lib/types';

export const canvas = {
  /**
   * @deprecated Use brand or system color tokens from `@workday/canvas-tokens-web` instead. View Docs [here](https://workday.github.io/canvas-tokens/?path=/docs/docs-getting-started--docs).
   */
  buttonColors,
  /**
   * @deprecated Use system color tokens from `@workday/canvas-tokens-web` instead. View Docs [here](https://workday.github.io/canvas-tokens/?path=/docs/docs-getting-started--docs).
   */
  chartingColorOffsets,
  /**
   * @deprecated Use system color tokens from `@workday/canvas-tokens-web` instead. View Docs [here](https://workday.github.io/canvas-tokens/?path=/docs/docs-getting-started--docs).
   */
  chartingColors,
  /**
   * @deprecated Use system color tokens from `@workday/canvas-tokens-web` instead. View Docs [here](https://workday.github.io/canvas-tokens/?path=/docs/docs-getting-started--docs).
   */
  colors,
  /**
   * @deprecated Use system color tokens from `@workday/canvas-tokens-web` instead. View Docs [here](https://workday.github.io/canvas-tokens/?path=/docs/docs-getting-started--docs).
   * @see
   * | Old Token      | New Token      |
   * |----------------|---------------------|
   * | `commonColors.background`      | `system.color.bg.default`               |
   * | `commonColors.backgroundAlt`   | `system.color.bg.alt.default`           |
   * | `commonColors.focusOutline`    | `system.color.border.primary.default`   |
   * | `commonColors.focusBackground` | `system.color.bg.primary.default`       |
   * | `commonColors.hoverBackground` | `system.color.bg.alt.strong`            |
   * | `commonColors.divider`         | `system.color.border.divider`           |
   */
  commonColors,
  /**
   * @deprecated Use system depth tokens from `@workday/canvas-tokens-web` instead. View Docs [here](https://workday.github.io/canvas-tokens/?path=/docs/docs-getting-started--docs).
   * @see
   * | Old Token      | New Token      |
   * |----------------|---------------------|
   * | `depth[0]`     | `{boxShadow: 'none'}`   |
   * | `depth[1]`     | `{boxShadow: system.depth[1]}`   |
   * | `depth[2]`     | `{boxShadow: system.depth[2]}`   |
   * | `depth[3]`     | `{boxShadow: system.depth[3]}`   |
   * | `depth[4]`     | `{boxShadow: system.depth[4]}`   |
   * | `depth[5]`     | `{boxShadow: system.depth[5]}`   |
   * | `depth[6]`     | `{boxShadow: system.depth[6]}`   |
   */
  depth,
  /**
   * @deprecated Use system color tokens from `@workday/canvas-tokens-web` instead. View Docs [here](https://workday.github.io/canvas-tokens/?path=/docs/docs-getting-started--docs).
   */
  fontFamily,
  /**
   * @deprecated Use system color tokens from `@workday/canvas-tokens-web` instead. View Docs [here](https://workday.github.io/canvas-tokens/?path=/docs/docs-getting-started--docs).
   */
  gradients,
  /**
   * @deprecated Use system color tokens from `@workday/canvas-tokens-web` instead. View Docs [here](https://workday.github.io/canvas-tokens/?path=/docs/docs-getting-started--docs).
   * @see
   * | Old Token      | New Token      |
   * |----------------|---------------------|
   * | `iconColors.active`   | `system.color.fg.primary.default`   |
   * | `iconColors.disabled` | `system.color.fg.disabled.default`   |
   * | `iconColors.hover`    | `system.color.fg.muted.stronger`   |
   * | `iconColors.inverse`  | `system.color.fg.inverse`   |
   * | `iconColors.standard` | `system.color.fg.muted.soft`   |
   */
  iconColors,
  /**
   * @deprecated Use system color tokens from `@workday/canvas-tokens-web` instead. View Docs [here](https://workday.github.io/canvas-tokens/?path=/docs/docs-getting-started--docs).
   * @see
   * | Old Token      | New Token      |
   * |----------------|---------------------|
   * | `inputColors.background` | `system.color.bg.default` |
   * | `inputColors.border` | `system.color.border.input.default` |
   * | `inputColors.placeholder` | `system.color.fg.muted.default` |
   * | `inputColors.text` | `system.color.fg.default` |
   * | `inputColors.icon` | `system.color.fg.muted.soft` |
   * | `inputColors.iconHover` | `system.color.fg.muted.stronger` |
   * | `inputColors.selectionControlFill` | `system.color.bg.primary.default` |
   * | `inputColors.hoverBorder` | `system.color.border.input.strong` |
   * | `inputColors.focusBorder` | `system.color.border.primary.default` |
   * | `inputColors.disabled.background` | `system.color.bg.alt.softer` |
   * | `inputColors.disabled.border` | `system.color.border.input.disabled` |
   * | `inputColors.disabled.text` | `system.color.fg.disabled` |
   * | `inputColors.disabled.icon` | `system.color.fg.disabled` |
   * | `inputColors.error.border` | `system.color.border.critical.default` |
   * | `inputColors.error.message` | `base.blackPepper100` |
   * | `inputColors.error.icon` | `system.color.fg.critical.default` |
   * | `inputColors.alert.border` | `system.color.border.caution.default` |
   * | `inputColors.alert.message` | `base.blackPepper100` |
   * | `inputColors.alert.icon` | `base.cantaloupe500` |
   */
  inputColors,
  /**
   * @deprecated Use system color tokens from `@workday/canvas-tokens-web` instead. View Docs [here](https://workday.github.io/canvas-tokens/?path=/docs/docs-getting-started--docs).
   */
  monoFontFamily,
  /**
   * @deprecated Use system space tokens from `@workday/canvas-tokens-web` instead. Check new values column for the new tokens. View Docs [here](https://workday.github.io/canvas-tokens/?path=/docs/docs-getting-started--docs).
   * @example
   * ```ts
   * // before
   * import { space } from '@workday/canvas-kit-react/tokens';
   * const space = space.zero;
   *
   * // now
   * import { system } from '@workday/canvas-tokens-web';
   * import { cssVar } from '@workday/canvas-kit-styling';
   * const space = cssVar(system.space.zero);
   * ```
   */
  space,
  /**
   * @deprecated Use system color tokens from `@workday/canvas-tokens-web` instead. View Docs [here](https://workday.github.io/canvas-tokens/?path=/docs/docs-getting-started--docs).
   * @see
   * | Old Property            | Tokens for foreground (text and icons)     | Tokens for border                          |
   * |-------------------------|-------------------------------------|---------------------------------------|
   * | `statusColors.active`   | `system.color.fg.primary.default`   | `system.color.border.primary.default` |
   * | `statusColors.success`  | `system.color.fg.success.default`   | none                                  |
   * | `statusColors.warning`  | `system.color.fg.caution.default`   | `system.color.border.caution.default` |
   * | `statusColors.error`    | `system.color.fg.critical.default`  | `system.color.border.critical.default`|
   */
  statusColors,
  /**
   * @deprecated Use system type tokens from `@workday/canvas-tokens-web` instead. View Docs [here](https://workday.github.io/canvas-tokens/?path=/docs/docs-getting-started--docs).
   * @see {@link } for values mapping table
   * @example
   * ```ts
   * // before
   * import { type } from '@workday/canvas-kit-react/tokens';
   * const styles = css({
   *   ...type.levels.body.large,
   *   fontWeight: type.properties.fontWeights.bold,
   *   color: type.variants.error,
   * })
   *
   * // now
   * import { system } from '@workday/canvas-tokens-web';
   * import { createStyles } from '@workday/canvas-kit-styling';
   * const styles = createStyles({
   *   ...system.type.body.large,
   *   fontWeight: system.fontWeight.bold,
   *   color: system.color.fg.critical.default,
   * })
   * ```
   */
  type,
  /**
   * @deprecated Use system color tokens from `@workday/canvas-tokens-web` instead. View Docs [here](https://workday.github.io/canvas-tokens/?path=/docs/docs-getting-started--docs).
   * @see
   * | Old Property                        | Tokens for text                   |
   * |-------------------------------------|-----------------------------------|
   * | `typeColors.body`                   | `system.color.fg.default`         |
   * | `typeColors.heading`                | `system.color.fg.strong`          |
   * | `typeColors.hint`                   | `system.color.fg.muted.default`   |
   * | `typeColors.inverse`                | `system.color.fg.inverse`         |
   * | `typeColors.label`                  | `system.color.fg.default`         |
   * | `typeColors.link`                   | `system.color.fg.primary.default` |
   * | `typeColors.selectHighlight`        | `system.color.fg.primary.default` |
   * | `typeColors.selectHighlightInverse` | `system.color.fg.inverse`         |
   */
  typeColors,
};

export {
  /**
   * @deprecated Use brand or system color tokens from `@workday/canvas-tokens-web` instead. View Docs [here](https://workday.github.io/canvas-tokens/?path=/docs/docs-getting-started--docs).
   */
  buttonColors,
  /**
   * @deprecated Use system color tokens from `@workday/canvas-tokens-web` instead. View Docs [here](https://workday.github.io/canvas-tokens/?path=/docs/docs-getting-started--docs).
   */
  chartingColorOffsets,
  /**
   * @deprecated Use system color tokens from `@workday/canvas-tokens-web` instead. View Docs [here](https://workday.github.io/canvas-tokens/?path=/docs/docs-getting-started--docs).
   */
  chartingColors,
  /**
   * @deprecated Use system color tokens from `@workday/canvas-tokens-web` instead. View Docs [here](https://workday.github.io/canvas-tokens/?path=/docs/docs-getting-started--docs).
   * @see
   * | Old Token      | New Token      |
   * |----------------|---------------------|
   * | `commonColors.background`      | `system.color.bg.default`               |
   * | `commonColors.backgroundAlt`   | `system.color.bg.alt.default`           |
   * | `commonColors.focusOutline`    | `system.color.border.primary.default`   |
   * | `commonColors.focusBackground` | `system.color.bg.primary.default`       |
   * | `commonColors.hoverBackground` | `system.color.bg.alt.strong`            |
   * | `commonColors.divider`         | `system.color.border.divider`           |
   */
  commonColors,
  /**
   * @deprecated Use system color tokens from `@workday/canvas-tokens-web` instead. View Docs [here](https://workday.github.io/canvas-tokens/?path=/docs/docs-getting-started--docs).
   * @see
   * | Old Token      | New Token      |
   * |----------------|---------------------|
   * | `iconColors.active`   | `system.color.fg.primary.default`   |
   * | `iconColors.disabled` | `system.color.fg.disabled.default`   |
   * | `iconColors.hover`    | `system.color.fg.muted.stronger`   |
   * | `iconColors.inverse`  | `system.color.fg.inverse`   |
   * | `iconColors.standard` | `system.color.fg.muted.soft`   |
   */
  iconColors,
  /**
   * @deprecated Use system color tokens from `@workday/canvas-tokens-web` instead. View Docs [here](https://workday.github.io/canvas-tokens/?path=/docs/docs-getting-started--docs).
   * @see
   * | Old Token      | New Token      |
   * |----------------|---------------------|
   * | `inputColors.background` | `system.color.bg.default` |
   * | `inputColors.border` | `system.color.border.input.default` |
   * | `inputColors.placeholder` | `system.color.fg.muted.default` |
   * | `inputColors.text` | `system.color.fg.default` |
   * | `inputColors.icon` | `system.color.fg.muted.soft` |
   * | `inputColors.iconHover` | `system.color.fg.muted.stronger` |
   * | `inputColors.selectionControlFill` | `system.color.bg.primary.default` |
   * | `inputColors.hoverBorder` | `system.color.border.input.strong` |
   * | `inputColors.focusBorder` | `system.color.border.primary.default` |
   * | `inputColors.disabled.background` | `system.color.bg.alt.softer` |
   * | `inputColors.disabled.border` | `system.color.border.input.disabled` |
   * | `inputColors.disabled.text` | `system.color.fg.disabled` |
   * | `inputColors.disabled.icon` | `system.color.fg.disabled` |
   * | `inputColors.error.border` | `system.color.border.critical.default` |
   * | `inputColors.error.message` | `base.blackPepper100` |
   * | `inputColors.error.icon` | `system.color.fg.critical.default` |
   * | `inputColors.alert.border` | `system.color.border.caution.default` |
   * | `inputColors.alert.message` | `base.blackPepper100` |
   * | `inputColors.alert.icon` | `base.cantaloupe500` |
   */
  inputColors,
  /**
   * @deprecated Use system color tokens from `@workday/canvas-tokens-web` instead. View Docs [here](https://workday.github.io/canvas-tokens/?path=/docs/docs-getting-started--docs).
   * @see
   * | Old Property            | Tokens for foreground (text and icons)     | Tokens for border                          |
   * |-------------------------|-------------------------------------|---------------------------------------|
   * | `statusColors.active`   | `system.color.fg.primary.default`   | `system.color.border.primary.default` |
   * | `statusColors.success`  | `system.color.fg.success.default`   | none                                  |
   * | `statusColors.warning`  | `system.color.fg.caution.default`   | `system.color.border.caution.default` |
   * | `statusColors.error`    | `system.color.fg.critical.default`  | `system.color.border.critical.default`|
   */
  statusColors,
  /**
   * @deprecated Use system color tokens from `@workday/canvas-tokens-web` instead. View Docs [here](https://workday.github.io/canvas-tokens/?path=/docs/docs-getting-started--docs).
   * @see
   * | Old Property                        | Tokens for text                   |
   * |-------------------------------------|-----------------------------------|
   * | `typeColors.body`                   | `system.color.fg.default`         |
   * | `typeColors.heading`                | `system.color.fg.strong`          |
   * | `typeColors.hint`                   | `system.color.fg.muted.default`   |
   * | `typeColors.inverse`                | `system.color.fg.inverse`         |
   * | `typeColors.label`                  | `system.color.fg.default`         |
   * | `typeColors.link`                   | `system.color.fg.primary.default` |
   * | `typeColors.selectHighlight`        | `system.color.fg.primary.default` |
   * | `typeColors.selectHighlightInverse` | `system.color.fg.inverse`         |
   */
  typeColors,
};
export {
  /**
   * @deprecated
   */
  BrandingColor,
  /**
   * @deprecated Use shape system tokens from `@workday/canvas-tokens-web` instead. View Docs [here](https://workday.github.io/canvas-tokens/?path=/docs/docs-getting-started--docs).
   // TODO: update link
   * @see {@link } for values mapping table
   * @example
   * ```ts
   * // before
   * import { borderRadius } from '@workday/canvas-kit-react/tokens';
   * const borderRadius = borderRadius.zero;
   *
   * // now
   * import { system } from '@workday/canvas-tokens-web';
   * const borderRadius = system.shape.zero;
   * ```
   */
  borderRadius,
  /**
   * @deprecated Use system color tokens from `@workday/canvas-tokens-web` instead. View Docs [here](https://workday.github.io/canvas-tokens/?path=/docs/docs-getting-started--docs).
   // TODO: update link
   * @see {@link } for values mapping table
   * @example
   * ```ts
   * // before
   * import { colors } from '@workday/canvas-kit-react/tokens';
   * const color = cssVar(colors.blueberry400);
   *
   * // now
   * import { system } from '@workday/canvas-tokens-web';
   * import { cssVar } from '@workday/canvas-kit-styling';
   * const color = cssVar(system.color.bg.primary.default);
   * ```
   */
  colors,
  /**
   * @deprecated
   */
  gradients,
  /**
   * @deprecated Use system depth tokens from `@workday/canvas-tokens-web` instead. View Docs [here](https://workday.github.io/canvas-tokens/?path=/docs/docs-getting-started--docs).
   * @see
   * | Old Token      | New Token      |
   * |----------------|---------------------|
   * | `depth[0]`     | `{boxShadow: 'none'}`   |
   * | `depth[1]`     | `{boxShadow: system.depth[1]}`   |
   * | `depth[2]`     | `{boxShadow: system.depth[2]}`   |
   * | `depth[3]`     | `{boxShadow: system.depth[3]}`   |
   * | `depth[4]`     | `{boxShadow: system.depth[4]}`   |
   * | `depth[5]`     | `{boxShadow: system.depth[5]}`   |
   * | `depth[6]`     | `{boxShadow: system.depth[6]}`   |
   * @example
   * ```ts
   * // before
   * import { depth } from '@workday/canvas-kit-react/tokens';
   * const depth = depth[1];
   *
   * // now
   * import { system } from '@workday/canvas-tokens-web';
   * import { cssVar } from '@workday/canvas-kit-styling';
   * const depth = {boxShadow: cssVar(system.depth[1])};
   * ```
   */
  depth,
  /**
   * @deprecated Use system space tokens from `@workday/canvas-tokens-web` instead. Check new values column for the new tokens. View Docs [here](https://workday.github.io/canvas-tokens/?path=/docs/docs-getting-started--docs).
   * @example
   * ```ts
   * // before
   * import { space } from '@workday/canvas-kit-react/tokens';
   * const space = space.zero;
   *
   * // now
   * import { system } from '@workday/canvas-tokens-web';
   * import { cssVar } from '@workday/canvas-kit-styling';
   * const space = cssVar(system.space.zero);
   * ```
   */
  space,
  /**
   * @deprecated Use system space tokens from `@workday/canvas-tokens-web` instead with canvas calc functions. View Docs [here](https://workday.github.io/canvas-tokens/?path=/docs/docs-getting-started--docs).
   // TODO: update link
   * @see {@link } for values mapping table
   */
  spaceNumbers,
  /**
   * @deprecated Use system type tokens from `@workday/canvas-tokens-web` instead. View Docs [here](https://workday.github.io/canvas-tokens/?path=/docs/docs-getting-started--docs).
   * @see {@link } for values mapping table
   * @example
   * ```ts
   * // before
   * import { type } from '@workday/canvas-kit-react/tokens';
   * const styles = css({
   *   ...type.levels.body.large,
   *   fontWeight: type.properties.fontWeights.bold,
   *   color: type.variants.error,
   * })
   *
   * // now
   * import { system } from '@workday/canvas-tokens-web';
   * import { createStyles } from '@workday/canvas-kit-styling';
   * const styles = createStyles({
   *   ...system.type.body.large,
   *   fontWeight: system.fontWeight.bold,
   *   color: system.color.fg.critical.default,
   * })
   * ```
   */
  type,
  /**
   * @deprecated
   */
  fontFamily,
  /**
   * @deprecated
   */
  monoFontFamily,
};

export type {
  /**
   * @deprecated
   */
  CanvasBorderRadius,
  /**
   * @deprecated
   */
  CanvasBorderRadiusKeys,
  /**
   * @deprecated
   */
  CanvasBorderRadiusValues,
  /**
   * @deprecated
   */
  CanvasColor,
  /**
   * @deprecated
   */
  CanvasDepth,
  /**
   * @deprecated
   */
  CanvasDepthValues,
  /**
   * @deprecated
   */
  CanvasSpace,
  /**
   * @deprecated
   */
  CanvasSpaceKeys,
  /**
   * @deprecated
   */
  CanvasSpaceValues,
  /**
   * @deprecated
   */
  CanvasSpaceNumberValues,
  /**
   * @deprecated
   */
  CanvasSpaceNumbers,
  /**
   * @deprecated
   */
  CanvasType,
  /**
   * @deprecated
   */
  CanvasTypeProperties,
  /**
   * @deprecated
   */
  CanvasTypeVariants,
  /**
   * @deprecated
   */
  CanvasTypeHierarchy,
  /**
   * @deprecated
   */
  CSSProperties,
};
