export enum BreakpointKey {
  zero = 'zero',
  s = 's',
  m = 'm',
  l = 'l',
  xl = 'xl',
}

export type BreakpointFnParam = BreakpointKey | keyof typeof BreakpointKey;

export type CanvasBreakpoints = {
  /**
   * ### Zero Breakpoint
   *
   * This breakpoint is useful when you need to set a media query `min-width` below small.
   *
   * @example
   * ```ts
   * import { useTheme } from '@workday/canvas-kit-react/common';
   * import { space } from '@workday/canvas-kit-react/tokens';
   *
   * const theme = useTheme();
   * const { values } = theme.canvas.breakpoints;
   * const styles = {
   *   [`@media (min-width: ${values.zero}px)`]: {
   *     padding: space.xxs,
   *   },
   * }
   * ```
   */
  zero: 0;
  /**
   * ### Small Breakpoint
   *
   * The small breakpoint provides the `min-width` for mobile devices, such as phones and tablets.
   * This size ranges from a min-width of 320px to a max-width of 767px.
   *
   * @example
   * ```ts
   * import { useTheme } from '@workday/canvas-kit-react/common';
   * import { space } from '@workday/canvas-kit-react/tokens';
   *
   * const theme = useTheme();
   * const { values } = theme.canvas.breakpoints;
   * const styles = {
   *   [`@media (min-width: ${values.s}px)`]: {
   *     padding: space.xs,
   *   },
   * }
   * ```
   */
  s: 320;
  /**
   * ### Medium Breakpoint
   *
   * The medium breakpoint is the min-width for intended for medium screens, such as laptops.
   * This size ranges from a min-width of 768px to a max-width of 1023px.
   *
   * @example
   * ```ts
   * import { useTheme } from '@workday/canvas-kit-react/common';
   * import { space } from '@workday/canvas-kit-react/tokens';
   *
   * const theme = useTheme();
   * const { values } = theme.canvas.breakpoints;
   * const styles = {
   *   [`@media (min-width: ${values.m}px)`]: {
   *     padding: space.s,
   *   },
   * }
   * ```
   */
  m: 768;
  /**
   * ### Large Breakpoint
   *
   * The large breakpoint is the min-width for intended for large screens, such as desktops.
   * This size ranges from a min-width of 1024px to a max-width of 1439px.
   *
   * @example
   * ```ts
   * import { useTheme } from '@workday/canvas-kit-react/common';
   * import { space } from '@workday/canvas-kit-react/tokens';
   *
   * const theme = useTheme();
   * const { values } = theme.canvas.breakpoints;
   * const styles = {
   *   [`@media (min-width: ${values.m}px)`]: {
   *     padding: space.s,
   *   },
   * }
   * ```
   */
  l: 1024;
  /**
   * ### Extra-Large Breakpoint
   *
   * The large breakpoint is the min-width for intended for extra-large screens, such as wide monitors and TVs.
   * This size has a min-width of 1440px and no max-width.
   *
   * @example
   * ```ts
   * import { useTheme } from '@workday/canvas-kit-react/common';
   * import { space } from '@workday/canvas-kit-react/tokens';
   *
   * const theme = useTheme();
   * const { values } = theme.canvas.breakpoints;
   * const styles = {
   *   [`@media (min-width: ${values.m}px)`]: {
   *     padding: space.s
   *   },
   * }
   * ```
   */
  xl: 1440;
};

export const breakpointKeys = ['zero', 's', 'm', 'l', 'xl'] as const;

/**
 * ### Theme Breakpoint Values
 *
 * Breakpoints are used by media queries to conditionally apply or modify styles based on the viewport width.
 * This allows the UI to be responsive to various screen sizes. This object provides five breakpoint values
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
export const breakpoints: CanvasBreakpoints = {
  zero: 0,
  s: 320,
  m: 768,
  l: 1024,
  xl: 1440,
};

const step = 0.5;

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
export function up(key: BreakpointFnParam) {
  const value = typeof breakpoints[key as BreakpointKey] === 'number' ? breakpoints[key] : key;
  return `@media (min-width: ${value}px)`;
}

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
export function down(endKey: BreakpointFnParam) {
  const endIndex = breakpointKeys.indexOf(endKey as BreakpointKey) + 1;
  const upperbound = breakpoints[breakpointKeys[endIndex]];
  if (endIndex === breakpointKeys.length) {
    // xl down applies to all sizes
    return up(BreakpointKey.zero);
  }

  const value = typeof upperbound === 'number' && endIndex > 0 ? upperbound : 0;
  return `@media (max-width: ${value - step}px)`;
}

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
export function between(start: BreakpointFnParam, end: BreakpointFnParam) {
  const endIndex = breakpointKeys.indexOf(end) + 1;

  if (endIndex === breakpointKeys.length) {
    return up(start);
  }

  return (
    `@media (min-width: ${breakpoints[start]}px) and ` +
    `(max-width: ${breakpoints[breakpointKeys[endIndex]] - step}px)`
  );
}

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
export function only(key: BreakpointFnParam) {
  return between(key, key);
}
