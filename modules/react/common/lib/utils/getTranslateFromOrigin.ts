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

type Distance =
  | '0'
  | '0.25rem'
  | '0.5rem'
  | '0.75rem'
  | '1rem'
  | '1.5rem'
  | '2rem'
  | '2.5rem'
  | '4rem'
  | '5rem';

/**
 * Gets the x and y distance values needed to translate from a given transform origin to 0,0
 * @param {Object} transformOrigin The origin of the transform (i.e. top left)
 * @param {string} distance The distance to translate (as a canvas spacing value).
 * @returns {Object} An object with the x and y distance values needed to translate.
 * @deprecated
 */
export const getTranslateFromOrigin = (transformOrigin: TransformOrigin, distance: Distance) => {
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
  distance: Distance | (string & {})
) => {
  return {
    x: calc.multiply(distance, translateMap.x[transformOrigin.horizontal]),
    y: calc.multiply(distance, translateMap.y[transformOrigin.vertical]),
  };
};
