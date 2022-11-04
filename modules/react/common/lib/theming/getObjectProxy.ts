/* eslint-disable compat/compat */
export function getObjectProxy<T>(target: unknown, fallback: any): T {
  return new Proxy(target as any, {
    get(target, prop) {
      if (typeof fallback[prop] === 'object' && typeof target[prop] === 'object') {
        return getObjectProxy(target[prop] || {}, fallback[prop]);
      } else if (target[prop] !== undefined) {
        return target[prop];
      } else {
        return fallback[prop];
      }
    },
  }) as T;
}
