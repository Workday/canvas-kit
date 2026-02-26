/**
 * For custom themes that do not overwrite every default.
 */
export type RecursivePartial<T> = {
  [P in keyof T]?: RecursivePartial<T[P]>;
};

/**
 * The functions gets a new object proxy. This is used for theme to ensure regardless of a partial theme object
 * there will be a fallback theme object so that properties aren't undefined regardless of the `target` object.
 * This function will also handle nested properties.
 * @param target A partial object with up to the same shape as the `fallback` object
 * @param fallback A fallback object. If a property to be accessed from the proxy is not available on the target object, the fallback object will be used
 * @deprecated ⚠️ `getObjectProxy` is deprecated. This utility was used for theme object fallbacks. Now that we're shifting to a global theming approach based on CSS variables, this is no longer needed. For more information, view our [Theming Docs](https://workday.github.io/canvas-kit/?path=/docs/features-theming-overview--docs#-preferred-approach-v14).
 */
export function getObjectProxy<T extends {}>(
  target: RecursivePartial<T> | undefined,
  fallback: T
): T {
  if (target) {
    return new Proxy(target, {
      get<T>(target: T, prop: string | symbol, receiver: any) {
        if (typeof (fallback as any)[prop] === 'object') {
          // @ts-ignore
          return getObjectProxy(target[prop], (fallback as any)[prop]);
        }
        const targetProp = Reflect.get(target as {}, prop, receiver); //?
        if (targetProp !== undefined) {
          return targetProp;
        }
        return Reflect.get(fallback, prop, receiver);
      },
      getOwnPropertyDescriptor(_target, prop) {
        // the fallback has all the correct properties, so use the fallback for all property
        // descriptors
        return Reflect.getOwnPropertyDescriptor(fallback, prop); //Reflect.getOwnPropertyDescriptor(fallback, prop);
      },
      ownKeys() {
        // the fallback has all the correct properties, so use the fallback for all keys
        return Reflect.ownKeys(fallback);
      },
    }) as T;
  }
  return fallback;
}
