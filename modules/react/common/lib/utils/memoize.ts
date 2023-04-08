/**
 * Simple memoize function. It takes a function and a resolver function to generate a
 * cache key
 */
export function memoize<T extends (...args: any[]) => any>(
  func: T,
  resolver: (...args: Parameters<T>) => string
): T {
  const cache = new Map<string, ReturnType<T>>();

  return function(...args: Parameters<T>): ReturnType<T> {
    const key = resolver(...args);

    if (cache.has(key)) {
      return cache.get(key)!;
    }

    const result = func(...args);
    cache.set(key, result);

    return result;
  } as T;
}
