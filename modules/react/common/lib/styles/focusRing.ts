import {brand, base} from '@workday/canvas-tokens-web';

/**
 * A utility to create a canvas style focus ring around your widget.
 * By default, this mixin will create a 2px focus ring tightly wrapped
 * to the container (no whitespace).
 */
export function focusRing<
  Width extends number = 2,
  Separation extends number = 2,
  InnerColor extends string = `var(${typeof base.frenchVanilla100})`,
  OuterColor extends string = `var(${typeof brand.common.focusOutline})`,
  Inset extends 'inner' | 'outer' | 'neither' = 'neither'
>(
  options: {
    /**
     * Allows the user to specify the thickness in px of the focus ring.
     */
    width?: Width;
    /**
     * Allows the user to define the width in px of the whitespace
     */
    separation?: Separation;
    /**
     * Allows the user to specify the inner shadow color
     */
    innerColor?: InnerColor;
    /**
     * Allows the user to specify the outer shadow color
     */
    outerColor?: OuterColor;
    /**
     * Determines whether or not the focus ring is inset. Specifies where the ring(s) should be
     * attached.
     * - undefined: Both "inner" and "outer" shadows outside the container.
     * - 'inner': "Inner" shadow inset. "Outer" shadow outside the container.
     * - 'outer': Both "inner" and "outer" shadows inside the container.
     */
    inset?: Inset;
  } = {}
): FocusRingReturn<Width, Separation, InnerColor, OuterColor, Inset> {
  const {
    width = 2,
    separation = 0,
    innerColor = `var(${base.frenchVanilla100})`,
    outerColor = `var(${brand.common.focusOutline})`,
    inset = 'neither',
  } = options;

  let boxShadow;

  switch (inset) {
    case 'outer':
      boxShadow = `inset 0 0 0 ${separation}px ${outerColor}, inset 0 0 0 ${
        width + separation
      }px ${innerColor}`;
      break;

    case 'inner':
      boxShadow = `inset 0 0 0 ${separation}px ${innerColor}, 0 0 0 ${width}px ${outerColor}`;
      break;

    default:
      boxShadow = `0 0 0 ${separation}px ${innerColor}, 0 0 0 ${
        width + separation
      }px ${outerColor}`;
      break;
  }

  return {boxShadow} as FocusRingReturn<Width, Separation, InnerColor, OuterColor, Inset>;
}

/**
 * Helper type to handle adding 2 numbers together. Only supports up to 2 + 2 which is all that we
 * see in the wild.
 */
type Add<T extends number, U extends number> = T extends 1
  ? U extends 1
    ? 2
    : U extends 2
    ? 3
    : never
  : T extends 2
  ? U extends 1
    ? 3
    : U extends 2
    ? 4
    : never
  : never;

/**
 * This type is a bit complicated and essentially duplicates the functionality of the runtime. The purpose
 * is to allow static style extraction of the function. For example:
 *
 * ```ts
 * ...focusRing()
 *
 * // type:
 * {
 *   boxShadow: "0 0 0 2px var(--cnvs-base-palette-french-vanilla-100), 0 0 0 4px var(--cnvs-brand-common-focus-outline)";
 * }
 * ```
 */
export type FocusRingReturn<
  Width extends number = 2,
  Separation extends number = 2,
  InnerColor extends string = `var(${typeof base.frenchVanilla100})`,
  OuterColor extends string = `var(${typeof brand.common.focusOutline})`,
  Inset extends 'inner' | 'outer' | 'neither' = 'neither'
> = Inset extends 'inner'
  ? {
      boxShadow: `inset 0 0 0 ${Separation}px ${OuterColor}, inset 0 0 0 ${Add<
        Width,
        Separation
      >}px ${InnerColor}`;
    }
  : Inset extends 'outer'
  ? {
      boxShadow: `inset 0 0 0 ${Separation}px ${OuterColor}, inset 0 0 0 ${Width}px ${InnerColor}`;
    }
  : {
      boxShadow: `0 0 0 ${Separation}px ${InnerColor}, 0 0 0 ${Add<
        Width,
        Separation
      >}px ${OuterColor}`;
    };
