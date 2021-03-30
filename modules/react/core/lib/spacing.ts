// import spacing, {ICanvasSpace as CanvasSpace, CanvasSpaceValue} from '@workday/canvas-space-web';

type CanvasSpace = {
  zero: 0;
  xxxs: 4;
  xxs: 8;
  xs: 12;
  s: 16;
  m: 24;
  l: 32;
  xl: 40;
  xxl: 64;
  xxxl: 80;
};

type ValueOf<T> = T[keyof T];

type CanvasSpaceValue = ValueOf<CanvasSpace>;

// Writing out `CanvasSpace` is more verbose for us, but nicer for consumers.
// Casting this type as `const` would have the same effect,
// but writing it this way removes the `readonly` in the hint,
// which adds a lot of visual noise and can be confusing for folks.
const space: CanvasSpace = {
  zero: 0,
  xxxs: 4,
  xxs: 8,
  xs: 12,
  s: 16,
  m: 24,
  l: 32,
  xl: 40,
  xxl: 64,
  xxxl: 80,
};

// TODO: Do we need this?
// export interface CanvasSpaceNumber {
//   zero: number;
//   xxxs: number;
//   xxs: number;
//   xs: number;
//   s: number;
//   m: number;
//   l: number;
//   xl: number;
//   xxl: number;
//   xxxl: number;
// }

export {CanvasSpace, CanvasSpaceValue};

export default space;
