import {mergeCallback} from './mergeCallback';

export type KeysMatching<T, V> = {[K in keyof T]-?: T[K] extends V ? K : never}[keyof T];
export type RemoveNulls<T> = Omit<T, KeysMatching<T, null>>;

/**
 * MergeProps will merge keys from `U` over `T` except when the value of `T` is `null`.
 *
 * ```ts
 * MergeProps<
 *   {foo: string, bar: string, baz: null},
 *   {foo: string, bar: number, baz: string}
 * > // { foo: string, bar: number, baz: null }
 * ```
 */
export type MergeProps<T, U> = {
  // merge keys from both `T` and `U`
  [K in keyof T | keyof U]: K extends keyof T // test if key is in `T`
    ? K extends keyof U // test if key is also in `U`
      ? T[K] extends null // test if `T[K]` is `null`
        ? null // `K` is in both `T` and `U` and `T[K]` is `null`, so return `null`
        : U[K] // `K` is in both `T` and `U`, but isn't `null` in `T[K]`, so return `U[K]`
      : T[K] // `K` is only in `T`, so return `T[K]`
    : K extends keyof U // K is not in `T`, so test if it is in `U`. This should always match at this point, but there's no "else" in type ternaries
    ? U[K] // K is only in `U`, so return `U[K]`
    : never; // We should never get here, but type ternaries need all paths defined. `never` is usually used in these cases
};

// This file suppresses TS errors that come from merging interfaces of elements that aren't
// determined within components. Element interfaces are determined only when used, so TS errors
// aren't even useful here. Things get complicated when merging interfaces of callbacks.

/**
 * Merges source props into target props, overwriting target props that are also defined on source
 * props. Callback will be merged in such a way that both callbacks will be called. `css` and
 * `style` props will be merged in such a way that source props have the final override.
 *
 * If `targetProps` has a `null` set, it will remove the prop from the `sourceProps`. This allows
 * passing of props from merged hooks to another without passing out to the final element props.
 */
export function mergeProps<const T extends object, const S extends object>(
  targetProps: T,
  sourceProps: S
): RemoveNulls<MergeProps<T, S>> {
  const returnProps = {...targetProps} as MergeProps<T, S>;

  for (const key in sourceProps) {
    if (sourceProps.hasOwnProperty(key)) {
      if (key === 'css' && targetProps.hasOwnProperty('css')) {
        // @ts-ignore
        const css = [].concat(targetProps[key], sourceProps[key]);
        // @ts-ignore
        returnProps[key] = css;
      } else if (key === 'style' && targetProps.hasOwnProperty('style')) {
        // merge style objects
        // @ts-ignore TS complains that key might not be on targetProps, but typeof returns
        returnProps[key] = {...targetProps[key], ...sourceProps[key]};
      } else if (key === 'ref' && sourceProps.hasOwnProperty('ref')) {
        // refs should never be overridden. This doesn't happen normally, but happens with hook
        // composition
        (returnProps as any).ref = (returnProps as any).ref || (sourceProps as any).ref;
      } else if (
        typeof sourceProps[key] === 'function' &&
        // @ts-ignore TS complains that key might not be on targetProps, but typeof returns
        // `undefined` in that case, so this is safe
        typeof targetProps[key] === 'function'
      ) {
        // @ts-ignore TS complains that T and S aren't compatible, but this isn't useful for us
        returnProps[key] = mergeCallback(targetProps[key], sourceProps[key]);
      } else if (
        typeof sourceProps[key] === 'undefined' &&
        // @ts-ignore T and S, blah, blah, blah
        typeof targetProps[key] === 'function'
      ) {
        // we don't support removing callbacks via `undefined`, so do nothing here
        // @ts-ignore Typescript complains that key might not exist in `targetProps` since we're iterating over sourceProps. At runtime this doesn't matter
      } else if (targetProps[key] === null) {
        // target props is trying to disable the prop for whatever reason. Consider `null` a "remove this prop"
      } else if (key === 'className' && targetProps.hasOwnProperty(key)) {
        // @ts-ignore merging class names
        returnProps[key] = `${targetProps[key]} ${sourceProps[key]}`;
      } else {
        // @ts-ignore TS has more object constraint complaints that aren't useful here
        returnProps[key] = sourceProps[key];
      }
    }
  }

  return returnProps;
}
