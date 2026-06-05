import {CSSObjectWithVars} from './cs';

export const CORNER_SHAPE = 'superellipse(1.1)';

/** Returns borderRadius + cornerShape in the correct declaration order. */
export function withCornerShape(borderRadius: string | number): CSSObjectWithVars {
  return {
    borderRadius,
    cornerShape: CORNER_SHAPE,
  };
}
