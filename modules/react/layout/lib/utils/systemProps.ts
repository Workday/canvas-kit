import {
  CanvasBorderRadiusKeys,
  CanvasColor,
  CanvasDepth,
  CanvasSpaceKeys,
  CanvasTypeProperties,
} from '@workday/canvas-kit-react/tokens';

export type SystemPropNames =
  | 'color'
  | 'depth'
  | 'font'
  | 'fontSize'
  | 'fontWeight'
  | 'shape'
  | 'space';

/**
 * Canvas System Prop Values
 * ---
 * These system prop values are restricted to Canvas token values.
 */
export type CanvasSystemPropValues = {
  color: CanvasColor;
  depth: keyof CanvasDepth;
  font: keyof CanvasTypeProperties['fontFamilies'];
  fontSize: keyof CanvasTypeProperties['fontSizes'];
  fontWeight: keyof CanvasTypeProperties['fontWeights'];
  shape: CanvasBorderRadiusKeys;
  space: CanvasSpaceKeys;
};

/**
 * System Prop Values
 * ---
 * These system prop values include Canvas System Prop Values and generic values.
 */
export type SystemPropValues = {
  color: CanvasSystemPropValues['color'] | (string & {});
  depth: CanvasSystemPropValues['depth'];
  font: CanvasSystemPropValues['font'] | (string & {});
  fontSize: CanvasSystemPropValues['fontSize'] | (string & {});
  fontWeight: CanvasSystemPropValues['fontWeight'] | (string & {});
  shape: CanvasSystemPropValues['shape'] | number | (string & {});
  space: CanvasSystemPropValues['space'] | number | (string & {});
};
