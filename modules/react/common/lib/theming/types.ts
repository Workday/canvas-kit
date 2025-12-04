import {CanvasBreakpoints, BreakpointFnParam} from './breakpoints';

/**
 * A single palette within a Canvas theme
 */

export type CanvasThemePalette = {
  lightest: string;
  lighter: string;
  light: string;
  main: string;
  dark: string;
  darkest: string;
  contrast: string;
};

type CanvasThemeCommonPalette = {
  focusOutline: string;
  alertInner: string;
  alertOuter: string;
  errorInner: string;
};

/**
 * Direction of page content for internationalization
 * @deprecated ⚠️ `ContentDirection` is deprecated. Use the `:dir()` CSS pseudo-class selector and CSS logical properties instead. For more information, see [MDN :dir()](https://developer.mozilla.org/en-US/docs/Web/CSS/:dir) and [CSS Logical Properties](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_logical_properties_and_values).
 */
export enum ContentDirection {
  LTR = 'ltr',
  RTL = 'rtl',
}

/**
 * The format of a Canvas theme for components that support it.
 * @deprecated ⚠️ `CanvasTheme` is deprecated. In previous versions of Canvas Kit, we allowed teams to pass a theme object, this supported [Emotion's theming](https://emotion.sh/docs/theming). Now that we're shifting to a global theming approach based on CSS variables, we advise to no longer using the theme prop. For more information, view our [Theming Docs](https://workday.github.io/canvas-kit/?path=/docs/features-theming-overview--docs#-preferred-approach-v14).
 */
export interface CanvasTheme {
  palette: {
    common: CanvasThemeCommonPalette;
    primary: CanvasThemePalette;
    error: CanvasThemePalette;
    alert: CanvasThemePalette;
    success: CanvasThemePalette;
    neutral: CanvasThemePalette;
  };
  /**
   * ### Theme Breakpoints
   *
   * Breakpoints are used by media queries to conditionally apply or modify styles based on the viewport width.
   * This allows the UI to be responsive to various screen sizes.
   *
   * This breakpoints object contains `values` and several helper functions: `up`, `down`, `between`, and `only`.
   * You can find more detailed information by inspecting individual values and functions.
   */
  breakpoints: {
    /**
     * ### Breakpoint Values
     *
     * This object provides five breakpoint values
     * that correspond to the min-widths of our standard screen sizes.
     *
     * - `zero`: 0
     * - `s`: 320
     * - `m`: 768
     * - `l`: 1024
     * - `xl`: 1440
     *
     * And these are our standard screen size ranges:
     *
     * - `small` (320px - 767px) Used for mobile-sized screens
     * - `medium` (768px - 1023px) Used for tablet-sized screens
     * - `large` - (1024px - 1439px) Used for laptop and small desktop screens
     * - `extra-large` (≥1440px) Used for very large screens
     *
     * Note: Some applications may only require a subset of screen sizes and not use all breakpoints.
     *
     */
    values: CanvasBreakpoints;
    /**
     * ### Up
     *
     * _Returns a media query above the `min-width` for the range of a given breakpoint_
     *
     * Given a `start` breakpoint key ("zero", "s", "m", "l", "xl"),
     * this function returns a media query (string) using a `min-width`.
     *
     * @example
     * ```ts
     * import { useTheme } from '@workday/canvas-kit-react/common';
     * import { space } from '@workday/canvas-kit-react/tokens';
     *
     * const theme = useTheme();
     * const { up } = theme.canvas.breakpoints;
     * const mediaQuery = up('l'); // Returns '@media (min-width: 1024px)'
     * const styles = {
     *   [mediaQuery]: {
     *     padding: space.m,
     *   }
     * };
     * ```
     */
    up: (key: BreakpointFnParam) => string;
    /**
     * ### Down
     *
     * _Returns a media query below the `max-width` for the range of a given breakpoint_
     *
     * Given an `end` breakpoint key ("zero", "s", "m", "l", "xl"),
     * this function returns a media query (string) using a `max-width`.
     *
     * Note: This function subtracts `0.5px` from the next breakpoint value to prevent collisions.
     * For example, `breakpoints.values.s`, has a `min-width` of `320px`, and the `max-width` is `767.5px`).
     *
     * If the `xl` breakpoint is provided, this function returns a media query with only a `min-width` of `0`,
     * as seen in the second example below.
     *
     * @example
     * ```ts
     * import { useTheme } from '@workday/canvas-kit-react/common';
     * import { space } from '@workday/canvas-kit-react/tokens';
     *
     * const theme = useTheme();
     * const { down } = theme.canvas.breakpoints;
     * const mediaQuery = down('m'); // Returns '@media (max-width: 1023.5px)'
     * const styles = {
     *   [mediaQuery]: {
     *     padding: space.m,
     *   }
     * };
     * ```
     *
     * This example uses the `xl` breakpoint and only adds a `min-width` of `0` to the media query.
     * @example
     * ```ts
     * import { useTheme } from '@workday/canvas-kit-react/common';
     * import { space } from '@workday/canvas-kit-react/tokens';
     *
     * const theme = useTheme();
     * const { down } = theme.canvas.breakpoints;
     * const mediaQuery = down('xl'); // Returns '@media (min-width: 0)'
     * const styles = {
     *   [mediaQuery]: {
     *     padding: space.m,
     *   }
     * };
     * ```
     */
    down: (key: BreakpointFnParam) => string;
    /**
     * ### Between
     *
     * _Returns a media query between two given breakpoints_
     *
     * Given `start` and `end` breakpoint keys ("zero", "s", "m", "l", "xl"),
     * this function returns a media query (string) using a min-width and max-width.
     *
     * Note: This function subtracts `0.5px` from the next breakpoint value to prevent collisions.
     * For example, `breakpoints.values.s`, has a `min-width` of `320px`, and the `max-width` is `767.5px`).
     *
     * If the `xl` breakpoint is provided, this function returns a media query with only a `min-width`,
     * as seen in the second example below.
     *
     * @example
     * ```ts
     * import { useTheme } from '@workday/canvas-kit-react/common';
     * import { space } from '@workday/canvas-kit-react/tokens';
     *
     * const theme = useTheme();
     * const { between } = theme.canvas.breakpoints;
     * // Returns '@media (min-width: 320px) and (max-width: 1023.5px)'
     * const mediaQuery = between('s', 'm');
     * const styles = {
     *   [mediaQuery]: {
     *     padding: space.s,
     *   }
     * };
     * ```
     *
     * This example uses `xl` as the `end` breakpoint and only adds a min-width to the media query.
     * @example
     * ```ts
     * import { useTheme } from '@workday/canvas-kit-react/common';
     * import { space } from '@workday/canvas-kit-react/tokens';
     *
     * const theme = useTheme();
     * const { between } = theme.canvas.breakpoints;
     * const mediaQuery = between('m', 'xl'); // Returns '@media (min-width: 768px)'
     * const styles = {
     *   [mediaQuery]: {
     *     padding: space.s,
     *   }
     * };
     * ```
     */
    between: (start: BreakpointFnParam, end: BreakpointFnParam) => string;
    /**
     * ### Only
     *
     * _Returns a media query with a `min-width` and `max-width` for a given breakpoint_
     *
     * Given a breakpoint key ("zero", "s", "m", "l", "xl"),
     * this function returns a media query (string) using a `min-width` and `max-width`.
     *
     * Note: This function subtracts `0.5px` from the next breakpoint value to prevent collisions.
     * For example, `breakpoints.values.s`, has a `min-width` of `320px`, and the `max-width` is `767.5px`).
     *
     * If the `xl` breakpoint is provided, this function returns a media query with only a `min-width` of `1440px`,
     * as seen in the second example below.
     *
     * @example
     * ```ts
     * import { useTheme } from '@workday/canvas-kit-react/common';
     * import { space } from '@workday/canvas-kit-react/tokens';
     *
     * const theme = useTheme();
     * const { only } = theme.canvas.breakpoints;
     * const mediaQuery = only('s'); // Returns '@media (min-width: 320px) and (max-width: 767.5px)'
     * const styles = {
     *   [mediaQuery]: {
     *     padding: space.s,
     *   }
     * };
     * ```
     *
     * This example uses the `xl` breakpoint and only adds a `min-width` of `1440px` to the media query.
     * @example
     * ```ts
     * import { useTheme } from '@workday/canvas-kit-react/common';
     * import { space } from '@workday/canvas-kit-react/tokens';
     *
     * const theme = useTheme();
     * const { only } = theme.canvas.breakpoints;
     * const mediaQuery = only('xl'); // Returns '@media (min-width: 1440px)'
     * const styles = {
     *   [mediaQuery]: {
     *     padding: space.s,
     *   }
     * };
     * ```
     */
    only: (key: BreakpointFnParam) => string;
  };
  direction: ContentDirection;
}

/**
 * Indicates a component is themeable with a CanvasTheme
 * @deprecated `Themeable` is deprecated. If you want to theme your application, please use `<CanvasProvider theme={{canvas: {palette: {primary: {main: 'orange'}}}}} />` at the root of your application or use our CSS tokens to change individual component styles as seen in our [Button docs](https://workday.github.io/canvas-kit/?path=/docs/components-buttons--docs#custom-styles).
 */
export interface Themeable {
  theme?: EmotionCanvasTheme;
}

/**
 * For custom themes that do not overwrite every default.
 * @deprecated ⚠️ `RecursivePartial` is deprecated. In previous versions of Canvas Kit, we allowed teams to pass a theme object, this supported [Emotion's theming](https://emotion.sh/docs/theming). Now that we're shifting to a global theming approach based on CSS variables, we advise to no longer using the theme prop. For more information, view our [Theming Docs](https://workday.github.io/canvas-kit/?path=/docs/features-theming-overview--docs#-preferred-approach-v14).
 */
type RecursivePartial<T> = {
  [P in keyof T]?: RecursivePartial<T[P]>;
};

/**
 * @deprecated ⚠️ `PartialCanvasTheme` is deprecated. In previous versions of Canvas Kit, we allowed teams to pass a theme object, this supported [Emotion's theming](https://emotion.sh/docs/theming). Now that we're shifting to a global theming approach based on CSS variables, we advise to no longer using the theme prop. For more information, view our [Theming Docs](https://workday.github.io/canvas-kit/?path=/docs/features-theming-overview--docs#-preferred-approach-v14).
 */
export type PartialCanvasTheme = RecursivePartial<CanvasTheme>;

/**
 * @deprecated ⚠️ `PartialCanvasThemePalette` is deprecated. In previous versions of Canvas Kit, we allowed teams to pass a theme object, this supported [Emotion's theming](https://emotion.sh/docs/theming). Now that we're shifting to a global theming approach based on CSS variables, we advise to no longer using the theme prop. For more information, view our [Theming Docs](https://workday.github.io/canvas-kit/?path=/docs/features-theming-overview--docs#-preferred-approach-v14).
 */
export type PartialCanvasThemePalette = RecursivePartial<CanvasThemePalette>;

/**
 * @deprecated ⚠️ `PartialEmotionCanvasTheme` is deprecated. In previous versions of Canvas Kit, we allowed teams to pass a theme object, this supported [Emotion's theming](https://emotion.sh/docs/theming). Now that we're shifting to a global theming approach based on CSS variables, we advise to no longer using the theme prop. For more information, view our [Theming Docs](https://workday.github.io/canvas-kit/?path=/docs/features-theming-overview--docs#-preferred-approach-v14).
 */
export type PartialEmotionCanvasTheme = {canvas?: PartialCanvasTheme};

declare module '@emotion/react' {
  export interface Theme {
    canvas: CanvasTheme;
  }
}

/**
 * @deprecated ⚠️ `EmotionCanvasTheme` is deprecated. In previous versions of Canvas Kit, we allowed teams to pass a theme object, this supported [Emotion's theming](https://emotion.sh/docs/theming). Now that we're shifting to a global theming approach based on CSS variables, we advise to no longer using the theme prop. For more information, view our [Theming Docs](https://workday.github.io/canvas-kit/?path=/docs/features-theming-overview--docs#-preferred-approach-v14).
 */
export type EmotionCanvasTheme = {canvas: CanvasTheme};
