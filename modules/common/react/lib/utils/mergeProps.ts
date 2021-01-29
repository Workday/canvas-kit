import {mergeCallback} from './mergeCallback';

/**
 * Merges source props into target props, overwriting target props that are also defined on source
 * props. Callback will be merged in such a way that both callbacks will be called.
 */
export function mergeProps<T extends object, S extends object>(
  targetProps: T,
  sourceProps: S
): T & S {
  const returnProps = {...targetProps} as T & S;

  for (const key in sourceProps) {
    if (sourceProps.hasOwnProperty(key)) {
      // @ts-ignore TS complains that key might not be on targetProps, but typeof returns
      // `undefined` in that case, so this is safe
      if (typeof sourceProps[key] === 'function' && typeof targetProps[key] === 'function') {
        // @ts-ignore TS complains that T and S aren't compatible, but this isn't useful for us
        returnProps[key] = mergeCallback(targetProps[key], sourceProps[key]);
      } else if (
        typeof sourceProps[key] === 'undefined' &&
        // @ts-ignore T and S, blah, blah, blah
        typeof targetProps[key] === 'function'
      ) {
        // we don't support removing callbacks via `undefined`, so do nothing here
      } else {
        // @ts-ignore TS has more object constraint complaints that aren't useful here
        returnProps[key] = sourceProps[key];
      }
    }
  }

  return returnProps;
}
