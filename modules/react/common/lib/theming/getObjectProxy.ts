/**
 * The functions gets a new object proxy. This is used for theme to ensure regardless of a partial theme object
 * there will be a fallback theme object so that properties aren't undefined regardless of the `target` object.
 * This function will also handle nested properties.
 * @param target Any custom theme object
 * @param fallback A fallback theme object
 */
/* eslint-disable compat/compat  */ // TODO: Revisit eslint rules that are no longer needed now that we don't support IE11
export function getObjectProxy<T extends {}>(target: unknown, fallback: T): T {
  return new Proxy(target as any, {
    get(target, prop: keyof T) {
      if (typeof fallback[prop] === 'object' && typeof target[prop] === 'object') {
        return getObjectProxy(target[prop] || {}, fallback[prop]);
      } else if (target[prop] !== undefined) {
        return target[prop];
      } else {
        return fallback[prop];
      }
    },
    ownKeys(target) {
      return Object.keys(fallback);
    },
  }) as T;
}
