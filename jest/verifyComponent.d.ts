/**
 * Verify aspects of a component such as ref forwarding, element remapping, and extra prop
 * spreading. This is a good litmus test for setting up components correctly. Only use on components
 * that represent an element.
 * @example
 * import { MyComponent, useMyComponentModel } from '...'
 *
 * describe('MyComponent', () => {
 *   verifyComponent(MyComponent, { modelFn: useMyComponentModel })
 *
 *   // other tests
 * })
 */
declare function verifyComponent(
  Component: React.ComponentType<any>,
  {
    modelFn,
    props,
  }: {
    /** Pass in a model hook like `useMyComponentHook`. If defined, it will create a model from this
     * hook and pass it to your component. If your model has required parameters, you can return a function:
     * @example
     * { modelHook: () => useMyComponentModel({foo: 'bar'}) }
     */
    modelFn?: Function;
    /** Any required properties your component needs. Will be forwarded to the component. */
    props?: object;
  }
): void;
