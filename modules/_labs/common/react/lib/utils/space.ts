import {spacing} from '@workday/canvas-kit-react-core';

// zero => 0px
// xxxs" => 4px
// xxs => 8px
// xs => 12px
// s => 16px
// m => 24px
// l => 32px
// xl => 40px
// xxl => 64px
// xxxl => 80px

/**
 * - zero => 0px
 * - xxxs" => 4px
 * - xxs => 8px
 * - xs => 12px
 * - s => 16px
 * - m => 24px
 * - l => 32px
 * - xl => 40px
 * - xxl => 64px
 * - xxxl => 80px
 */
export type Spacing = keyof typeof spacing;

export interface SpaceProps {
  margin?: Spacing;
  m?: Spacing;
  marginX?: Spacing;
  mx?: Spacing;
  marginY?: Spacing;
  my?: Spacing;
  marginT?: Spacing;
  mt?: Spacing;
  marginR?: Spacing;
  mr?: Spacing;
  marginB?: Spacing;
  mb?: Spacing;
  marginL?: Spacing;
  ml?: Spacing;
  /**
   * - zero => 0px
   * - xxxs" => 4px
   * - xxs => 8px
   * - xs => 12px
   * - s => 16px
   * - m => 24px
   * - l => 32px
   * - xl => 40px
   * - xxl => 64px
   * - xxxl => 80px
   */
  padding?: Spacing;
  p?: Spacing;
  paddingX?: Spacing;
  px?: Spacing;
  paddingY?: Spacing;
  py?: Spacing;
  paddingT?: Spacing;
  pt?: Spacing;
  paddingR?: Spacing;
  pr?: Spacing;
  paddingB?: Spacing;
  pb?: Spacing;
  paddingL?: Spacing;
  pl?: Spacing;
}

const margin = (value: Spacing) => ({margin: spacing[value]});
const marginX = (value: Spacing) => ({
  marginLeft: spacing[value],
  marginRight: spacing[value],
});
const marginY = (value: Spacing) => ({
  marginBottom: spacing[value],
  marginTop: spacing[value],
});
const marginT = (value: Spacing) => ({
  marginTop: spacing[value],
});
const marginR = (value: Spacing) => ({
  marginRight: spacing[value],
});
const marginB = (value: Spacing) => ({
  marginBottom: spacing[value],
});
const marginL = (value: Spacing) => ({
  marginLeft: spacing[value],
});
const padding = (value: Spacing) => ({padding: spacing[value]});
const paddingX = (value: Spacing) => ({
  paddingLeft: spacing[value],
  paddingRight: spacing[value],
});
const paddingY = (value: Spacing) => ({
  paddingBottom: spacing[value],
  paddingTop: spacing[value],
});
const paddingT = (value: Spacing) => ({
  paddingTop: spacing[value],
});
const paddingR = (value: Spacing) => ({
  paddingRight: spacing[value],
});
const paddingB = (value: Spacing) => ({
  paddingBottom: spacing[value],
});
const paddingL = (value: Spacing) => ({
  paddingLeft: spacing[value],
});

export const spaceProps = {
  margin,
  m: margin,
  marginX,
  mx: marginX,
  marginY,
  my: marginY,
  marginT,
  mt: marginT,
  marginR,
  mr: marginR,
  marginB,
  mb: marginB,
  marginL,
  ml: marginL,
  padding,
  p: padding,
  paddingX,
  px: paddingX,
  paddingY,
  py: paddingY,
  paddingT,
  pt: paddingT,
  paddingR,
  pr: paddingR,
  paddingB,
  pb: paddingB,
  paddingL,
  pl: paddingL,
};

export function space<P extends SpaceProps>(props: P) {
  let styles = {};
  for (const key in props) {
    if (key in spaceProps) {
      const value = props[key as keyof SpaceProps] as Spacing;
      const styleFn = spaceProps[key as keyof SpaceProps];
      const style = styleFn(value);
      styles = {...styles, ...style};
    }
  }

  return styles;
}
