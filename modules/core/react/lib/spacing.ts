import spacing, {
  ICanvasSpacing as CanvasSpacing,
  CanvasSpacingValue,
} from '@workday/canvas-space-web';

export interface CanvasSpacingNumber {
  zero: number;
  xxxs: number;
  xxs: number;
  xs: number;
  s: number;
  m: number;
  l: number;
  xl: number;
  xxl: number;
  xxxl: number;
}

function stripUnit(value: string): number {
  return parseInt(`${value}`.replace('px', ''), 10);
}

export const spacingNumbers: CanvasSpacingNumber = {
  zero: stripUnit(spacing.zero),
  xxxs: stripUnit(spacing.xxxs),
  xxs: stripUnit(spacing.xxs),
  xs: stripUnit(spacing.xs),
  s: stripUnit(spacing.s),
  m: stripUnit(spacing.m),
  l: stripUnit(spacing.l),
  xl: stripUnit(spacing.xl),
  xxl: stripUnit(spacing.xxl),
  xxxl: stripUnit(spacing.xxxl),
};

export {CanvasSpacing, CanvasSpacingValue};

export default spacing;
