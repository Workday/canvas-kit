export * from './breakpoints';
/**
 * @deprecated ⚠️ Theme types are deprecated. Use CSS variables from `@workday/canvas-tokens-web` instead.
 * For more information, view our [Theming Docs](https://workday.github.io/canvas-kit/?path=/docs/features-theming-overview--docs#-preferred-approach-v14).
 */
export * from './types';
/**
 * @deprecated ⚠️ `styled` is deprecated. Use `createStyles` or `createStencil` from `@workday/canvas-kit-styling` instead.
 * For more information, view our [Styling Docs](https://workday.github.io/canvas-kit/?path=/docs/styling-basics--docs).
 */
export {default as styled, StyleRewriteFn, filterOutProps} from './styled';
/**
 * @deprecated ⚠️ `defaultCanvasTheme` is deprecated. Use `defaultBranding` from `@workday/canvas-kit-react/common` instead.
 * For more information, view our [Theming Docs](https://workday.github.io/canvas-kit/?path=/docs/features-theming-overview--docs#-preferred-approach-v14).
 */
export * from './theme';
/**
 * @deprecated ⚠️ `useTheme` and `getTheme` are deprecated. Use CSS variables from `@workday/canvas-tokens-web` instead.
 * For more information, view our [Theming Docs](https://workday.github.io/canvas-kit/?path=/docs/features-theming-overview--docs#-preferred-approach-v14).
 */
export * from './useTheme';
/**
 * @deprecated ⚠️ `useThemedRing` is deprecated. Use `brand.common.focusOutline` CSS variable instead.
 * For more information, view our [Theming Docs](https://workday.github.io/canvas-kit/?path=/docs/features-theming-overview--docs#-preferred-approach-v14).
 */
export * from './useThemedRing';
/**
 * @deprecated ⚠️ `useIsRTL` is deprecated. Use `isElementRTL` or the `:dir()` CSS pseudo-class selector instead.
 * For more information, see [MDN :dir()](https://developer.mozilla.org/en-US/docs/Web/CSS/:dir).
 */
export * from './useIsRTL';
/**
 * @deprecated ⚠️ `getObjectProxy` is deprecated. This utility was used for theme object fallbacks and is no longer needed.
 * For more information, view our [Theming Docs](https://workday.github.io/canvas-kit/?path=/docs/features-theming-overview--docs#-preferred-approach-v14).
 */
export * from './getObjectProxy';
/**
 * Accessible Palette Generator
 *
 * Generate WCAG-compliant color palettes from any input color.
 * @example
 * ```tsx
 * import { generateAccessiblePalette } from '@workday/canvas-kit-react/common';
 *
 * const palette = generateAccessiblePalette('#0875E1');
 * const primaryColor = palette.getHex(500);
 * ```
 */
export * from './palette';
