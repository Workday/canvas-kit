import {keyframes, CSSObject} from '@emotion/core';
import canvas from '@workday/canvas-kit-react-core';
import {CanvasTheme} from '@workday/canvas-kit-labs-react-core';
import memoize from 'lodash/memoize';

type FocusRingParams = {
  ringWidth: number;
  separationWidth: number;
  animate: boolean;
  inset: boolean;
  innerShadowColor: string;
  outerShadowColor: string;
};

function calculateFocusRing({
  ringWidth,
  separationWidth,
  animate,
  inset,
  innerShadowColor,
  outerShadowColor,
}: FocusRingParams): CSSObject {
  const endingInnerShadow =
    (inset ? 'inset ' : '') + '0 0 0 ' + separationWidth + 'px ' + innerShadowColor;
  const endingOuterShadow =
    (inset ? 'inset ' : '') + '0 0 0 ' + (ringWidth + separationWidth) + 'px ' + outerShadowColor;
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
 * @param ringWidth        Allows the user to specify the thickness in px of the focus ring.
 * @param separationWidth  Allows the user to define the width in px of the whitespace
 *                         that there should be between the component and the focus ring.
 * @param animate          Set property to false to opt out of the standard grow out of the middle animation
 * @param inset            Determines whether or not the focus ring is inset
 * @param innerShadowColor Allows the user to specify the inner shadow color
 * @param outerShadowColor Allows the user to specify the outer shadow color
 *
 * @returns {CSSObject} the css object for the focus ring style
 */
export default function focusRing(
  ringWidth: number = 2,
  separationWidth: number = 0,
  animate: boolean = true,
  inset: boolean = false,
  innerShadowColor: string = canvas.colors.frenchVanilla100,
  outerShadowColor: string = canvas.commonColors.focusOutline,
  memoizeCalculation: boolean = true
): CSSObject {
  const argsToPass: FocusRingParams = {
    ringWidth,
    separationWidth,
    animate,
    inset,
    innerShadowColor,
    outerShadowColor,
  };

  if (memoizeCalculation) {
    return memoizedFocusRing(argsToPass);
  }

  return calculateFocusRing(argsToPass);
}

interface ThemedFocusRingOptions {
  width?: number;
  separation?: number;
  animate?: boolean;
  inset?: boolean;
  innerColor?: string;
  outerColor?: string;
  memoize?: boolean;
}

/**
 * A utility to create a canvas style focus ring around your widget.
 * By default, this mixin will create a 2px focus ring tightly wrapped
 * to the container (no whitespace).
 *
 * @returns {CSSObject} the css object for the focus ring style
 */
export function themedFocusRing(
  theme: CanvasTheme,
  options: ThemedFocusRingOptions = {}
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

  const args: FocusRingParams = {
    ringWidth: width,
    separationWidth: separation,
    innerShadowColor: innerColor,
    outerShadowColor: outerColor,
    animate,
    inset,
  };

  if (memoize) {
    return memoizedFocusRing(args);
  }

  return calculateFocusRing(args);
}
