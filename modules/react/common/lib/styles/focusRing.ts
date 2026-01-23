import {cssVar} from '@workday/canvas-kit-styling';

// Backwards compatible type that works with both styled components and Canvas Kit styling
import {system, brand} from '@workday/canvas-tokens-web';

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
}

function calculateFocusRing({
  width,
  separation,
  inset,
  innerColor,
  outerColor,
}: Required<Omit<FocusRingOptions, 'memoize' | 'inset'>> & Pick<FocusRingOptions, 'inset'>) {
  let boxShadow, innerWidth, outerWidth;
  if (innerColor && innerColor.startsWith('--')) {
    // eslint-disable-next-line no-param-reassign
    innerColor = cssVar(innerColor);
  }
  if (outerColor && outerColor.startsWith('--')) {
    // eslint-disable-next-line no-param-reassign
    outerColor = cssVar(outerColor);
  }

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

  return {boxShadow};
}

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
 * @returns {{boxShadow: string}} the css object for the focus ring style
 */

/**
 * A utility to create a canvas style focus ring around your widget.
 * By default, this mixin will create a 2px focus ring tightly wrapped
 * to the container (no whitespace).
 *
 * @returns {{boxShadow: string}} the css object for the focus ring style
 */
export function focusRing(options: FocusRingOptions = {}) {
  const {
    width = 2,
    separation = 0,
    animate = true,
    // hard code CSS fallbacks for dynamic styles that don't use the static style transform
    innerColor = cssVar(system.color.border.inverse, 'rgba(255,255,255,1)'),
    outerColor = cssVar(brand.common.focusOutline, 'rgba(8,117,225,1)'),
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

  return calculateFocusRing(args);
}
