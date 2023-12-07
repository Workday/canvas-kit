// eslint-disable-next-line @emotion/no-vanilla
import {cache, css} from '@emotion/css';
import {getRegisteredStyles} from '@emotion/utils';
import {serializeStyles, Keyframes, SerializedStyles, CSSObject} from '@emotion/serialize';
import {Properties} from 'csstype';

import {generateUniqueId} from './uniqueId';

export const createStylesCache: Record<string, boolean> = {};

/**
 * Style properties in a JavaScript camelCase. Everything Emotion allows is also
 * allowed here.
 */
export type StyleProps =
  | undefined
  | boolean
  | number
  | string
  | Keyframes
  | SerializedStyles
  | CSSObject;

function convertProperty<T>(value: T): T {
  // Handle the case where the value is a variable without the `var()` wrapping function. It happens
  // enough that it makes sense to automatically wrap.
  if (typeof value === 'string' && value.startsWith('--')) {
    return `var(${value})` as any as T;
  }
  return value;
}

/**
 * Walks through all the properties and values of a style and converts properties and/or values that
 * need special processing. An example might be using a CSS variable without a `var()` wrapping.
 */
function convertAllProperties<T extends unknown>(obj: T): T {
  if (typeof obj === 'object') {
    const converted = {};
    for (const key in obj) {
      if ((obj as Object).hasOwnProperty(key)) {
        (converted as any)[key] = convertAllProperties(obj[key]);
      }
    }
    return converted as T;
  }
  return convertProperty(obj);
}

export type CS = string | Record<string, string>;

/**
 * CSS variable map type. In developer/dynamic mode, we don't know what the hash is going to be. All
 * variables will look like `--{hash}-{name}`. But the static optimizers generates the name based on
 * the AST, so the `id` will be known. Instead of something like `--abc123-color`, the `ID` is set
 * by the optimizer.
 *
 * For example:
 * ```ts
 * // dynamic
 * const myVars = createVars('color') // type is `Record<'color', string>`
 *
 * // optimizer rewrites the code
 * const myVars = createVars<'color', 'myVars'>('color')
 * // type is now `{color: "--myVars-color"}`
 *
 * myVars.color // type is `--myVars-color`
 * ```
 *
 * This is so optimized variables can be used directly by the static parser downstream. The variable
 * names become statically analyzable.
 */
export type CsVarsMap<T extends string, ID extends string | never> = [ID] extends [never]
  ? Record<T, string>
  : // map type. If the ID is known from the style optimizer, use static keys using string template literals instead of `string`
    {[K in T]: `--${ID}-${K}`};

export type CsVars<T extends string, ID extends string | never> = CsVarsMap<T, ID> & {
  (input: Partial<Record<T, string>>): Record<T, string>;
};

/**
 * Take a CSS Variable name and return a variable property
 *
 * ```ts
 * const myVars = createVars('color')
 *
 * const myStyles = createStyles({
 *   color: cssVar(myVars.color) // color: 'var(--{hash}-color)'
 * })
 * ```
 *
 * It can also support an optional fallback. Fallbacks should only be used if it is reasonable to
 * expect a CSS variable isn't defined.
 * ```ts
 * const myStyles = createStyles({
 *   color: cssVar(myVars.color, 'red') // color: 'var(--{hash}-color, red)'
 * })
 * ```
 *
 * If the project is set up for parsing with fallback files, a fallback will automatically be filled
 * during the parsing phase. This is helpful for cases when CSS variables are expected, but not set
 * in the environment.
 */
export function cssVar(input: string, fallback?: string) {
  return fallback
    ? `var(${input}, ${fallback.startsWith('--') ? `var(${fallback})` : fallback})`
    : `var(${input})`;
}

/**
 * Util function to fix an issue with Emotion by
 * appending `EmotionIssue#3066` to end of css variable
 * See issue: [#3066](https://github.com/emotion-js/emotion/issues/3066)
 */
const makeEmotionSafe = (key: string): string => {
  if (key.endsWith('label')) {
    return `${key}-emotion-safe`;
  }
  return key;
};

/**
 * Create temporary CSS variables to use in components. The CSS variable names will
 * be unique at runtime to avoid collisions. The return value is a function and a
 * Map. The function can be used to pass in values from JavaScript. The function will
 * return a map of variable keys to CSS Variable names.
 *
 * ```ts
 * // creates a `color` and `background` CSS variable
 * const myVars = createVars('color', 'background')
 *
 * // 'color' is a typed property. The type is `string`
 * console.log(myVars.color) // `'var(--{hash}-color)'`
 *
 * // 'color' is a typed property. The type is `string?`
 * // The returned object can be assigned to the `style` property of an element
 * console.log(myVars({ color: 'red' })) //  `{'--{hash}-color': 'red'}`
 *
 * const div = document.createElement('div')
 * div.style = myVars({ color: 'red' }) // <div style="--{hash}-color: red;" />
 * ```
 */

export function createVars<T extends string, ID extends string>(input: {
  id: ID;
  args: T[];
}): CsVars<T, ID>;
export function createVars<T extends string>(...args: T[]): CsVars<T, never>;
export function createVars<T extends string, ID extends string>(...args: T[]): CsVars<T, ID> {
  const id = (args[0] as any).id || generateUniqueId(); //?
  // eslint-disable-next-line no-param-reassign
  args = (args[0] as any).args || args;
  const result = (input: Record<T, string>) => {
    const vars = {};
    args.forEach(key => {
      if (input[key]) {
        // @ts-ignore TS complains about `key` not in object `{}`
        vars[result[key]] = input[key];
      }
    });
    return vars;
  };

  args.forEach(key => {
    console.log(key);
    // @ts-ignore
    result[key] = `--${id}-${makeEmotionSafe(key)}`;
  }, {});

  return result as CsVars<T, ID>;
}

type ModifierConfig = Record<string, Record<string, CS>>;

/**
 * Helper type to convert `'true'` into `true` for boolean modifiers which are a pain to type as a
 * prop.
 */
type MaybeBoolean<T> = T extends 'true' ? true : T extends 'false' ? false : T;

type ModifierValues<T extends ModifierConfig> = {
  [P in keyof T]: MaybeBoolean<keyof T[P]>;
};

type ModifierReturn<T extends ModifierConfig> = T &
  ((modifiers: Partial<ModifierValues<T>>) => string);

/**
 * Creates a modifier function that takes in a modifier config and will return a CSS class name that
 * matches the result. Modifiers can be thought as `if` or `switch` statements when conditionally
 * changing the styles of a component based on props. This function can be thought of as a helper
 * function that makes it easier to work with modifiers. Without it, you would have to implement
 * if/switch/ternary for each option.
 *
 * ```tsx
 * const myModifiers = createModifiers({
 *   // a modifier called 'size'
 *   size: {
 *     small: createStyles({ fontSize: 12 }),
 *     medium: createStyles({ fontSize: 14 })
 *   }
 * })
 *
 * // with the modifier function
 * myModifiers({ size: 'medium' }) // returns the medium class name
 *
 * // manually without the function
 * size === 'small' ? myModifiers.size.small : size === 'medium' ? myModifiers.size.medium : ''
 * ```
 */
export function createModifiers<T extends ModifierConfig>(input: T): ModifierReturn<T> {
  const modifierFn = (modifiers: Partial<ModifierValues<T>>) => {
    return Object.keys(modifiers)
      .filter(key => input[key] && (input as any)[key][modifiers[key]])
      .map(key => (input as any)[key][modifiers[key]])
      .join(' ');
  };

  Object.keys(input).forEach(key => {
    // @ts-ignore TypeScript makes it a pain to deal with index types
    modifierFn[key] = input[key];
  });

  return modifierFn as ModifierReturn<T>;
}

function isCsPropsReturn(input: {}): input is CsToPropsReturn {
  return input.hasOwnProperty('style') || input.hasOwnProperty('className');
}

/**
 * All acceptable values of the `cs` prop. It can be a CSS class name, any CSS properties, an object
 * with a `className` and `styles`, or an array of these
 */
export type CSToPropsInput =
  | undefined
  | CS
  | CsToPropsReturn
  | Properties<string | number>
  | CSToPropsInput[];

export type CsToPropsReturn = {className?: string; style?: Properties<string | number>};
/**
 * A function that takes in a single input, or an array. The type of the input is either:
 *
 * - `string` - it represents a CSS class name
 * - `undefined` - there is no value. This is provided for convenience for developers to not have to
 *   filter out undefined
 * - `{--{hash}-{varName}: {value}}` - a `Map` of CSS variable to values
 * - `{style: ..., className: ...}` an object already returned by another `csToProps` function call
 *   (for nesting)
 * - An array containing any of the above. This will recurse over each entry to produce a single,
 *   reduced `{style: ..., className: ...}` object
 * @param input
 * @returns
 */
export function csToProps(input: CSToPropsInput): CsToPropsReturn {
  // input is a string, so it must only be a class name
  if (typeof input === 'string') {
    return {className: input};
  }

  // input isn't defined, so we'll return an empty object
  if (!input) {
    return {};
  }

  // A nested `csToProps`, we'll simply return with no modification
  if (isCsPropsReturn(input)) {
    return input;
  }

  // At this point, `input` is either an array or a `Record<T, string>`. If it isn't an array, it
  // must be a style object for setting CSS variables. So set the `style` attribute
  if (!Array.isArray(input)) {
    // The input is an object. We'll separate variables from static styles. If static styles are
    // detected here, a dynamic mode should be detected and done for development. The transform
    // should take care of extracting static styles out of a render function and this function
    // should not be run.
    let hasStaticStyles = false;
    const staticStyles: CSSObject = {};
    const cssVars: Record<string, string> = {};
    for (const key in input) {
      if (key.startsWith('--')) {
        cssVars[key] = (input as any)[key];
      } else {
        (staticStyles as any)[key] = (input as any)[key];
        hasStaticStyles = true;
      }
    }

    if (hasStaticStyles) {
      const className = css(staticStyles);
      return {style: cssVars, className};
    }
    return {style: input};
  }

  // An array. it is the only thing left. We iterate and recurse over the array to produce a single
  // object with `style` and `className` attributes to spread on an element
  return input.map(csToProps).reduce((result, val) => {
    return {
      className: [result.className, val.className].filter(v => v).join(' '),
      style: {...result.style, ...val.style},
    };
  }, {} as CsToPropsReturn);
}

export interface CSProps {
  /** The `cs` prop takes in a single value or an array of values. You can pass the CSS class name
   * returned by {@link createStyles}, or the result of {@link createVars} and
   * {@link createModifiers}. If you're extending a component already using `cs`, you can merge that
   * prop in as well. Any style that is passed to the `cs` prop will override style props. If you
   * wish to have styles that are overridden by the `css` prop, or styles added via the `styled`
   * API, use {@link handleCsProp} wherever `elemProps` is used. If your component needs to also
   * handle style props, use {@link mergeStyles} instead.
   *
   *
   * ```tsx
   * import {handleCsProp} from '@workday/canvas-kit-styling';
   * import {mergeStyles} from '@workday/canvas-kit-react/layout';
   *
   * // ...
   *
   * // `handleCsProp` handles compat mode with Emotion's runtime APIs. `mergeStyles` has the same
   * // function signature, but adds support for style props.
   *
   * return (
   *   <Element
   *     {...handleCsProp(elemProps, [
   *       myStyles,
   *       myModifiers({ size: 'medium' }),
   *       myVars({ backgroundColor: 'red' })
   *     ])}
   *   >
   *     {children}
   *   </Element>
   * )
   * ```
   */
  cs?: CSToPropsInput;
}

/**
 * Creates CSS styles based on object-style input. It has a side-effect of adding CSS to the page
 * and will return a space-delimitated string of CSS class names meant to be added to an element.
 *
 * It can take a number of inputs of various types. The simplest is object-styles.
 *
 * ```ts
 * const myStyles = createStyles({
 *   backgroundColor: 'red'
 * })
 * ```
 *
 * The `createStyles` function is curried into 2 parts. The first function could be done at build
 * time. The returned function combines CSS class names and will remain as a small runtime.
 *
 * > **Note:** The order of calling `createStyles` is important. Each call will make a single CSS
 * > class selector and will be injected into the document's
 * > [StyleSheetList](https://developer.mozilla.org/en-US/docs/Web/API/StyleSheetList). Style
 * > properties will be merge by the rules of [CSS
 * > specificity](https://developer.mozilla.org/en-US/docs/Web/CSS/Specificity). If two selectors
 * > have the same specificity, the last defined wins. Always make sure that the properties you want
 * > to win are last in your file.
 */
export function createStyles(
  ...args: ({name: string; styles: string} | StyleProps | string)[]
): string {
  return args
    .map(input => {
      if (typeof input === 'string') {
        return input;
      }

      // If we were called with a {name, styles} object, it must be optimized. We'll shortcut here
      if (typeof input === 'object' && input.name) {
        return css.call(null, input);
      }

      const convertedStyles = convertAllProperties(input);

      // We want to call `serializeStyles` directly and ignore the hash generated so we can have
      // more predictable style merging. If 2 different files define the same style properties, the
      // hash will be the same and using the default hash functionality of Emotion will mean the
      // merge order will be unpredictable. For example, `BaseButton` and `TertiaryButton` define
      // different modifiers for padding. The BaseButton's `extraSmall` modifier contains the same
      // styling as TertiaryButton's `large` modifier. Emotion would hash these two declarations as
      // the same hash and only inject the one from `BaseButton`. If `TertiaryButton` defines
      // `padding` in its base styles, and uses the large size modifier, the base padding will
      // override the `TertiaryButton` `large` size modifier because `BaseButton.small` modifier was
      // injected into the document's style sheets before `TertiaryButton.base` styles. This is due
      // to CSS specificity. If everything has the same specificity, last defined wins. More info:
      // https://codesandbox.io/s/stupefied-bartik-9c2jtd?file=/src/App.tsx
      const {styles} = serializeStyles([convertedStyles]);

      // use `css.call()` instead of `css()` to trick Emotion's babel plugin to not rewrite our code
      // to remove our generated Id for the name:
      // https://github.com/emotion-js/emotion/blob/f3b268f7c52103979402da919c9c0dd3f9e0e189/packages/babel-plugin/src/utils/transform-expression-with-styles.js#L81-L82
      // Without this "fix", anyone using the Emotion babel plugin would get different results than
      // intended when styles are merged.
      const name = generateUniqueId();
      createStylesCache[`${cache.key}-${name}`] = true;
      return css.call(null, {name, styles}); //?
    })
    .join(' ');
}

/**
 * This function handles the `cs` prop for you, as well as local styles you want to define. It will
 * force style merging with Emotion's runtime APIs, including [styled
 * components](https://emotion.sh/docs/styled) and the [css prop](https://emotion.sh/docs/css-prop).
 *
 * Runtime style merging works by forcing Emotion's styling merging if use of runtime APIs have been
 * detected. If only `createStyles` were used to style a component, the faster non-runtime styling
 * will be used.
 *
 * You can use `handleCsProp` if you wish to use {@link createStyles} on your own components and want
 * your components to be compatible with Emotion's runtime styling APIs.
 *
 * ```tsx
 * import {createStyles, handleCsProp, CSProps} from '@workday/canvas-kit-styling';
 *
 * interface MyComponentProps extends CSProps {
 *   // other props
 * }
 *
 * const myStyles = createStyles({
 *   background: 'green',
 *   height: 40,
 *   width: 40
 * })
 *
 * const MyComponent = ({children, ...elemProps}: MyComponentProps) => {
 *   return (
 *     <div
 *       {...handleCsProp(elemProps, [myStyles])}
 *     >
 *       {children}
 *     </div>
 *   )
 * }
 *
 * const StyledMyComponent(MyComponent)({
 *   background: 'red'
 * })
 *
 * const myOverridingStyles = createStyles({
 *   background: 'blue'
 * })
 *
 * // now everything works. Without `handleCsProp`, the last component would be a red box
 * export default () => (
 *   <>
 *     <MyComponent>Green box</MyComponent>
 *     <StyledMyComponent>Red box</StyledMyComponent>
 *     <StyledMyComponent cs={myOverridingStyles}>Blue box</StyledMyComponent>
 *   </>
 * )
 * ```
 */
export function handleCsProp<
  T extends CSProps & {
    className?: string | undefined;

    style?: Properties<string | number> | undefined;
  }
>(
  /**
   * All the props to be spread onto an element. The `cs` prop will be removed an reduced to
   * `className` and `style` props which should be safe on every element.
   */
  elemProps: T,
  /**
   * Optional local style created by `createStyles`. Using this parameter, you can style your
   * element while supporting proper style merging order.
   */
  localCs?: CSToPropsInput
): Omit<T, 'cs'> {
  const {cs, style, className, ...restProps} = elemProps;
  // We are going to track if any runtime styles are detected
  let shouldRuntimeMergeStyles = false;

  // The order is intentional. The `className` should go first, then the `cs` prop. If we don't do
  // runtime merging, this order doesn't actually matter because the browser doesn't care the order
  // of classes on the element's
  // [classList](https://developer.mozilla.org/en-US/docs/Web/API/Element/classList). But Emotion
  // _does_ care because it uses the `classList` order to determine style merging. Therefore we
  // should always be careful to order class names knowing we need to support runtime merging if
  // runtime styles are detected.
  const returnProps = csToProps([localCs, className, cs]);

  // The following is basically what Emotion does internally to merge styles from different
  // components into a single className. We will do this here for backwards compatibility with
  // runtime style merging. `createStyles` and `@emotion/css` works by creating styles and injecting
  // them immediately into the document. `@emotion/react` and `@emotion/styled` work by injecting
  // styles during the React render cycle. The following links are to source code of
  // `@emotion/styled` and `@emotion/react` respectively that merge styles in a similar manner.
  // - https://github.com/emotion-js/emotion/blob/f3b268f7c52103979402da919c9c0dd3f9e0e189/packages/styled/src/base.js#L120C51-L138
  // - https://github.com/emotion-js/emotion/blob/f3b268f7c52103979402da919c9c0dd3f9e0e189/packages/react/src/emotion-element.js#L102-L116
  (returnProps.className || '').split(' ').forEach(name => {
    // Here we detect if a className is associated with Emotion's cache. Styles created via
    // `createStyles` do not need special runtime merge treatment, but `@emotion/react` and
    // `@emotion/styled` do. The `createStylesCache` tracks all styles injected into the cache via
    // `createStyles`, so those are filtered out.
    if (!createStylesCache[name] && cache.registered[name]) {
      shouldRuntimeMergeStyles = true;
    }
  });

  returnProps.style = {...returnProps.style, ...style};

  // If runtime styles are detected, we need to do extra work to ensure styles merge according to
  // the rules of Emotion's runtime.
  if (shouldRuntimeMergeStyles) {
    const registeredStyles: string[] = [];

    // We are using the raw `css` instead of `createStyles` because `css` uses style hashing and
    // `createStyles` generates a new ID every time. We could use `createStyles` here, but it would
    // be more wasteful and new styles would be generated each React render cycle. `css` is safe to
    // use inside a render function while `createStyles` should always be used outside the React
    // render cycle. The following is `@emotion/utils` and it mutates the passed in
    // `registeredStyles` array. It uses the cache of registered styles and the original className.
    // It returns a string with found registered class names removed.
    returnProps.className = getRegisteredStyles(
      cache.registered,
      registeredStyles,
      returnProps.className || ''
    );

    // The `className` is mutated again, but with a brand new CSS class name of all the merged
    // registered styles. This is how Emotion merges styles from the `css` prop and `styled`
    // components.
    returnProps.className += css(registeredStyles);
  }

  return {
    ...returnProps,
    ...restProps,
  } as Omit<T, 'cs'>;
}
