export type CanvasSpace = {
  zero: '0px';
  xxxs: '4px';
  xxs: '8px';
  xs: '12px';
  s: '16px';
  m: '24px';
  l: '32px';
  xl: '40px';
  xxl: '64px';
  xxxl: '80px';
};

// Writing out `CanvasSpace` is more verbose for us, but nicer for consumers.
// Casting this type as `const` would have the same effect,
// but writing it this way removes the `readonly` in the hint,
// which adds a lot of visual noise and can be confusing for folks.
export const space: CanvasSpace = {
  zero: '0px',
  xxxs: '4px',
  xxs: '8px',
  xs: '12px',
  s: '16px',
  m: '24px',
  l: '32px',
  xl: '40px',
  xxl: '64px',
  xxxl: '80px',
};

export type CanvasSpaceNumbers = {
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

export const spaceNumbers: CanvasSpaceNumbers = {
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

type ValueOf<T> = T[keyof T];

export type CanvasSpaceNumberValue = ValueOf<CanvasSpaceNumbers>;
export type CanvasSpaceValue = ValueOf<CanvasSpace>;
