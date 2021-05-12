import {space as canvasSpace} from '@workday/canvas-kit-react/tokens';

export type Spacing = keyof typeof canvasSpace;

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

const margin = (value: Spacing) => ({margin: canvasSpace[value] || value});

const marginX = (value: Spacing) => ({
  marginLeft: canvasSpace[value], // || value,
  marginRight: canvasSpace[value], // || value
});
const marginY = (value: Spacing) => ({
  marginBottom: canvasSpace[value], // || value,
  marginTop: canvasSpace[value], // || value
});
const marginT = (value: Spacing) => ({
  marginTop: canvasSpace[value], // || value
});
const marginR = (value: Spacing) => ({
  marginRight: canvasSpace[value], // || value
});
const marginB = (value: Spacing) => ({
  marginBottom: canvasSpace[value], // || value
});
const marginL = (value: Spacing) => ({
  marginLeft: canvasSpace[value], // || value
});
const padding = (value: Spacing) => ({padding: canvasSpace[value]}); // || value });
const paddingX = (value: Spacing) => ({
  paddingLeft: canvasSpace[value], // || value,
  paddingRight: canvasSpace[value], // || value
});
const paddingY = (value: Spacing) => ({
  paddingBottom: canvasSpace[value], // || value,
  paddingTop: canvasSpace[value], // || value
});
const paddingT = (value: Spacing) => ({
  paddingTop: canvasSpace[value], // || value
});
const paddingR = (value: Spacing) => ({
  paddingRight: canvasSpace[value], // || value
});
const paddingB = (value: Spacing) => ({
  paddingBottom: canvasSpace[value], // || value
});
const paddingL = (value: Spacing) => ({
  paddingLeft: canvasSpace[value], // || value
});

export const space = {
  margin,
  m: margin, // helpful alias for margin
  marginX,
  mx: marginX, // helpful alias for  marginX
  marginY,
  my: marginY, // helpful alias for  marginY
  marginT,
  mt: marginT, // helpful alias for  marginT
  marginR,
  mr: marginR, // helpful alias for  marginR
  marginB,
  mb: marginB, // helpful alias for  marginB
  marginL,
  ml: marginL, // helpful alias for  marginL
  padding,
  p: padding, // helpful alias for padding
  paddingX,
  px: paddingX, // helpful alias for  paddingX
  paddingY,
  py: paddingY, // helpful alias for  paddingY
  paddingT,
  pt: paddingT, // helpful alias for  paddingT
  paddingR,
  pr: paddingR, // helpful alias for  paddingR
  paddingB,
  pb: paddingB, // helpful alias for  paddingB
  paddingL,
  pl: paddingL, // helpful alias for  paddingL
};
