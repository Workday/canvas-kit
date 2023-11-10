import React from 'react';
// eslint-disable-next-line @emotion/no-vanilla
import {cache, css} from '@emotion/css';
import {serializeStyles, Keyframes, SerializedStyles, CSSObject} from '@emotion/serialize';

import {generateUniqueId} from './uniqueId';
import {slugify} from './slugify';

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
    // @ts-ignore
    result[key] = `--${id}-${slugify(key)}`;
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
  | React.CSSProperties
  | CSToPropsInput[];

export type CsToPropsReturn = {className?: string; style?: React.CSSProperties};
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
   * wish to have styles that are overridden by style props, the `css` prop, or styles added via
   * the `styled` API, use {@link mergeStyles} wherever `elemProps` is used.
   *
   *
   * ```tsx
   * import {mergeStyles} from '@workday/canvas-kit-react/layout';
   *
   * // ...
   *
   * return (
   *   <Element
   *     {...mergeStyles(elemProps, [
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
 * React utility function to apply CSS class names and dynamic CSS variables
 *
 * ```tsx
 * const MyComponent = (props: any) => {
 *   return <div {...handleCsProp(props)} />
 * }
 * ```
 *
 * It will return an object with `className` and `style` attributes. If a `className` is provided to
 * the component, it will merge the class names. If a `style` is provided to the component, it will
 * merge the styles.
 *
 * ```tsx
 * const vars = createVars('background')
 * const styles = createStyles({
 *   color: vars.color
 * })
 * <MyComponent
 *   className="foobar"
 *   style={{ padding: 10 }}
 *   cs={styles}
 * />
 *
 * // Output
 * <div
 *   className="foobar {hashedClassName}"
 *   style="padding: 10px; --{hash}-background: red;"
 * />
 * ```
 */
export function handleCsProp<
  T extends CSProps & {
    className?: string | undefined;

    style?: React.CSSProperties | undefined;
  }
>({cs, style, className, ...props}: T) {
  return {
    ...csToProps([className, cs, style]),
    ...props,
  } as Omit<T, 'cs'>;
}
