import {keyframes} from 'react-emotion';
import {CSSObject} from 'create-emotion';
import canvas from '@workday/canvas-kit-react-core';
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
 * By default, this mixin will create a 1px focus ring tightly wrapped
 * to the widget (no whitespace).
 *
 * @param ringWidth        Allows the user to specify the thickness in px of the focus ring.
 * @param separationWidth  Allows the user to define the width in px of the whitespace
 *                         that there should be between the widget and the focus ring.
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
