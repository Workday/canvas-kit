import {PropertyTransform} from './utils/types';

/**
 * A property transform takes a style property node and will return a string. You can use
 * `parseNodeToStaticValue` to help you process properties that might be inputs to a function.
 */
export function createPropertyTransform(transformFn: PropertyTransform): PropertyTransform {
  return transformFn;
}
