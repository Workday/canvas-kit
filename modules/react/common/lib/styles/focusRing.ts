import {keyframes, CSSObject} from '@emotion/core';
import canvas from '@workday/canvas-kit-react/tokens';
import {EmotionCanvasTheme, defaultCanvasTheme} from '../theming/index';
import memoize from 'lodash/memoize';

interface FocusRingOptions {
  width?: number;
  separation?: number;
  animate?: boolean;
  /**
   * Specifies where the ring(s) should be attached.
   * - undefined: Both "inner" and "outer" shadows outside the container.
   * - 'inner': "Inner" shadow inset. "Outer" shadow outside the container.
   * - 'outer': Both "inner" and "outer" shadows inside the container.
   */
  inset?: 'inner' | 'outer';
  innerColor?: string;
  outerColor?: string;
  memoize?: boolean;
}

function calculateFocusRing({
  width,
  separation,
  animate,
  inset,
  innerColor,
  outerColor,
}: Required<Omit<FocusRingOptions, 'memoize' | 'inset'>> &
  Pick<FocusRingOptions, 'inset'>): CSSObject {
  let boxShadow, innerWidth, outerWidth;

  switch (inset) {
    case 'outer':
      innerWidth = width + separation;
      outerWidth = separation;
      boxShadow = `inset 0 0 0 ${outerWidth}px ${outerColor}, inset 0 0 0 ${innerWidth}px ${innerColor}`;
      break;

    case 'inner':
      innerWidth = separation;
      outerWidth = width;
      boxShadow = `inset 0 0 0 ${innerWidth}px ${innerColor}, 0 0 0 ${outerWidth}px ${outerColor}`;
      break;

    default:
      innerWidth = separation;
      outerWidth = width + separation;
      boxShadow = `0 0 0 ${innerWidth}px ${innerColor}, 0 0 0 ${outerWidth}px ${outerColor}`;
      break;
  }

  if (animate) {
    const fadeIn = keyframes({
      '0%': {boxShadow},
      '100%': {boxShadow},
    });

    return {animation: `${fadeIn} 100ms`, boxShadow};
  }

  return {boxShadow};
}

export const memoizedFocusRing = memoize(calculateFocusRing, (...args) => JSON.stringify(args));

/**
 * A utility to create a canvas style focus ring around your widget.
 * By default, this mixin will create a 2px focus ring tightly wrapped
 * to the container (no whitespace).
 *
 * @param width        Allows the user to specify the thickness in px of the focus ring.
 * @param separation  Allows the user to define the width in px of the whitespace
 *                         that there should be between the component and the focus ring.
 * @param animate          Set property to false to opt out of the standard grow out of the middle animation
 * @param inset            Determines whether or not the focus ring is inset
 * @param innerShadowColor Allows the user to specify the inner shadow color
 * @param outerShadowColor Allows the user to specify the outer shadow color
 *
 * @returns {CSSObject} the css object for the focus ring style
 */

/**
 * A utility to create a canvas style focus ring around your widget.
 * By default, this mixin will create a 2px focus ring tightly wrapped
 * to the container (no whitespace).
 *
 * @returns {CSSObject} the css object for the focus ring style
 */
export function focusRing(options: FocusRingOptions = {}, theme?: EmotionCanvasTheme): CSSObject {
  const {
    width = 2,
    separation = 0,
    animate = true,
    innerColor = canvas.colors.frenchVanilla100,
    outerColor = theme && theme.canvas
      ? theme.canvas.palette.common.focusOutline
      : defaultCanvasTheme.palette.common.focusOutline,
    memoize = true,
    inset,
  } = options;

  const args = {
    width: width,
    separation: separation,
    innerColor: innerColor,
    outerColor: outerColor,
    animate,
    inset,
  };

  if (memoize) {
    return memoizedFocusRing(args);
  }

  return calculateFocusRing(args);
}
