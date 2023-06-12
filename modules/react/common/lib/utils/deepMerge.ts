const isObject = (obj: any): boolean => obj && typeof obj === 'object';
export function deepMerge<T, S>(target: T, source: S): T & S {
  if (!isObject(target) || !isObject(source)) {
    return source as T & S;
  }

  Object.keys(source).forEach(key => {
    const targetValue = target[key as keyof T];
    const sourceValue = source[key as keyof S];

    if (Array.isArray(targetValue) && Array.isArray(sourceValue)) {
      (target as any)[key] = targetValue.concat(sourceValue);
    } else if (isObject(targetValue) && isObject(sourceValue)) {
      (target as any)[key] = deepMerge(Object.assign({}, targetValue), sourceValue);
    } else {
      (target as any)[key] = sourceValue;
    }
  });

  return target as T & S;
}
