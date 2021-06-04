/**
 * Merge callbacks by returning a function that calls both functions. This is useful for components
 * that need to provide callback functionality, but want to allow additional functionality to be
 * provided
 * @example
 * const MyComponent = ({ myProp, ...elemProps }) => {
 *   return (
 *     <button onClick={mergeCallback(cb, elemProps.onClick)}>Click Me</button>
 *   )
 * }
 * @param elemProps Props passed into a component
 * @param componentProps Props the component provides
 */
export function mergeCallback<T extends Function>(callback1: T, callback2?: Function): T {
  if (callback2) {
    return (((...args: any[]) => {
      callback1.apply(null, args);
      callback2.apply(null, args);
    }) as any) as T;
  } else {
    return callback1;
  }
}
