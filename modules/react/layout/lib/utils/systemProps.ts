import {
  CanvasBorderRadiusKeys,
  CanvasColor,
  CanvasDepth,
  CanvasSpaceKeys,
  CanvasTypeProperties,
} from '@workday/canvas-kit-react/tokens';

/** @deprecated */
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
 * @deprecated
 */
export type CanvasSystemPropValues = {
  /** @deprecated */
  color: CanvasColor;
  /** @deprecated */
  depth: keyof CanvasDepth;
  /** @deprecated */
  font: keyof CanvasTypeProperties['fontFamilies'];
  /** @deprecated */
  fontSize: keyof CanvasTypeProperties['fontSizes'];
  /** @deprecated */
  fontWeight: keyof CanvasTypeProperties['fontWeights'];
  /** @deprecated */
  shape: CanvasBorderRadiusKeys;
  /** @deprecated */
  space: CanvasSpaceKeys;
};

/**
 * System Prop Values
 * ---
 * These system prop values include Canvas System Prop Values and generic values.
 * @deprecated
 */
export type SystemPropValues = {
  /** @deprecated */
  color: CanvasSystemPropValues['color'] | (string & {});
  /** @deprecated */
  depth: CanvasSystemPropValues['depth'];
  /** @deprecated */
  font: CanvasSystemPropValues['font'] | (string & {});
  /** @deprecated */
  fontSize: CanvasSystemPropValues['fontSize'] | (string & {});
  /** @deprecated */
  fontWeight: CanvasSystemPropValues['fontWeight'] | (string & {});
  /** @deprecated */
  shape: CanvasSystemPropValues['shape'] | number | (string & {});
  /** @deprecated */
  space: CanvasSystemPropValues['space'] | number | (string & {});
};
