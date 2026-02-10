import {CanvasSpaceValues} from '@workday/canvas-kit-react/tokens';
import {calc} from '@workday/canvas-kit-styling';

import {TransformOrigin} from '../types';

type translateMapType = {
  x: {[key in TransformOrigin['horizontal']]: number};
  y: {[key in TransformOrigin['vertical']]: number};
};

const translateMap: translateMapType = {
  y: {
    top: -1,
    center: 0,
    bottom: 1,
  },
  x: {
    left: -1,
    center: 0,
    right: 1,
  },
};

/**
 * Gets the x and y distance values needed to translate from a given transform origin to 0,0
 * @param {Object} transformOrigin The origin of the transform (i.e. top left)
 * @param {string} distance The distance to translate (as a canvas spacing value).
 * @returns {Object} An object with the x and y distance values needed to translate.
 * @deprecated
 */

export const getTranslateFromOrigin = (
  transformOrigin: TransformOrigin,
  distance: CanvasSpaceValues
) => {
  const calculatedDistance = parseFloat(distance) * 16;
  return {
    x: translateMap.x[transformOrigin.horizontal] * calculatedDistance,
    y: translateMap.y[transformOrigin.vertical] * calculatedDistance,
  };
};

/**
 * Gets the x and y distance values needed to translate from a given transform origin to 0,0
 * @param {Object} transformOrigin The origin of the transform (i.e. top left)
 * @param {string} distance The distance to translate (as a canvas spacing value).
 * @returns {Object} An object with the x and y distance string values needed to translate.
 */
export const getTransformOrigin = (
  transformOrigin: TransformOrigin,
  distance: CanvasSpaceValues | (string & {})
) => {
  return {
    x: calc.multiply(distance, translateMap.x[transformOrigin.horizontal]),
    y: calc.multiply(distance, translateMap.y[transformOrigin.vertical]),
  };
};
