import {keyframes, CSSObject} from '@emotion/core';
import canvas from '@workday/canvas-kit-react-core';
import {CanvasTheme, defaultCanvasTheme} from '../theming/index';
import memoize from 'lodash/memoize';

interface FocusRingOptions {
  width?: number;
  separation?: number;
  animate?: boolean;
  inset?: boolean;
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
}: Omit<Required<FocusRingOptions>, 'memoize'>): CSSObject {
  const endingInnerShadow = (inset ? 'inset ' : '') + '0 0 0 ' + separation + 'px ' + innerColor;
  const endingOuterShadow =
    (inset ? 'inset ' : '') + '0 0 0 ' + (width + separation) + 'px ' + outerColor;
  const endingBoxShadow = inset
    ? `${endingOuterShadow}`
    : `${endingInnerShadow}, ${endingOuterShadow}`;

  if (animate) {
    const fadeIn = keyframes({
      '0%': {boxShadow: endingBoxShadow},
      '100%': {boxShadow: endingBoxShadow},
    });

    return {animation: `${fadeIn} 100ms`, boxShadow: endingBoxShadow};
  }

  return {boxShadow: endingBoxShadow};
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
export function focusRing(
  options: FocusRingOptions = {},
  theme: CanvasTheme = defaultCanvasTheme
): CSSObject {
  const {
    width = 2,
    separation = 0,
    animate = true,
    inset = false,
    innerColor = canvas.colors.frenchVanilla100,
    outerColor = theme.palette.common.focusOutline,
    memoize = true,
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
