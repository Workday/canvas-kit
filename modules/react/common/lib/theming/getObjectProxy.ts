/* eslint-disable compat/compat */
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
