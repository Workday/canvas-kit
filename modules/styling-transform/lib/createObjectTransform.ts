import {ObjectTransform} from './utils/types';

/**
 * Object transforms take an AST node that represents a style object and turn it into a
 * `NestedStyleObject` or return `void`. If an object transform returns an object, transformation
 * parsing stops on that node. If `void` is returned, processing continues using
 * `parseObjectToStaticValue`. These transforms are useful if you have custom utility functions
 * that are not statically parsable by the static styling transformer.
 */
export function createObjectTransform(transformFn: ObjectTransform): ObjectTransform {
  return transformFn;
}
