import React from 'react';
import {generateUniqueId} from '@workday/canvas-kit-react/common';
// eslint-disable-next-line @emotion/no-vanilla
import {css} from '@emotion/css';
import type {Keyframes, SerializedStyles, CSSObject} from '@emotion/serialize';

// future placeholder for token replacement
const tokens = {};

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

  function replaceWithToken<T>(value: T): T {
    // Handle the case where the value is a variable without the `var()` wrapping function. A common mistake.
    if (typeof value === 'string' && value.startsWith('--')) {
      return `var(${value})` as any as T;
    }
    return (tokens as any)[value] || value;
  }

// This function current replaces token values like "blueberry400" with a color value
// but it can be used to replace other things if we want or remove it entirely

function replaceAllWithTokens<T extends unknown>(obj: T): T {
  if (typeof obj === 'object') {
    const converted = {};
    for (const key in obj) {
      if ((obj as Object).hasOwnProperty(key)) {
        (converted as any)[key] = replaceAllWithTokens(obj[key]);
      }
    }
    return converted as T;
  }
  return replaceWithToken(obj);
}

export type CS = string | Record<string, string>;

export type CsVarsMap<T extends string, ID extends string | never> = [ID] extends [never]
  ? Record<T, string>
  : {[K in T]: `--${ID}-${K}`};

export type CsVars<T extends string, ID extends string | never> = CsVarsMap<T, ID> & {
  (input: Partial<Record<T, string>>): Record<T, string>;
};

/**
 * Take a CSS Variable name and return a variable property
 *
 * ```ts
 * const myVars = createVars('color')
 *
 * const myStyles = cs({
 *   color: cssVar(myVars.color) // color: 'var(--{hash}-color)'
 * })
 * ```
 *
 * It can also support an optional fallback. Fallbacks should only be used if it is reasonable to
 * expect a CSS variable isn't defined.
 * ```ts
 * const myStyles = cs({
 *   color: cssVar(myVars.color, 'red') // color: 'var(--{hash}-color, red)'
 * })
 * ```
 *
 * If the project is set up for parsing with fallback files, a fallback will automatically be filled
 * during the parsing phase. This is helpful for cases when CSS variables are expected, but not set
 * in the environment.
 */
export function cssVar(input: string, fallback?: string) {
  return fallback ? `var(${input}, ${fallback})` : `var(${input})`;
}

/**
 * Util function to fix an issue with Emotion by
 * appending `EmotionIssue#3066` to end of css variable
 * See issue: [#3066](https://github.com/emotion-js/emotion/issues/3066)
 */
const emotionSafe = (input: string)=> {
  if(input.endsWith('label')){
    return input + 'EmotionFix'
  }
  return input;
}
/**
 * Create temporary CSS variables to use in components. The CSS variable names will
 * be unique at runtime to avoid collisions. The return value is a function and a
 * Map. The function can be used to pass in values from JavaScript. The function will
 * return a map of variable keys to CSS Variable names.
 *
 * ```ts
 * // creates a `color` and `background` variable
 * const myVars = createVars('color', 'background')
 *
 * // 'color' is a typed property. The type is `string`
 * console.log(myValues.color) // `'var(--{hash}-color)'`
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
      if (input[key])  {
        // @ts-ignore TS complains about `key` not in object `{}`
        vars[result[key]] = input[key];
      }
    });
    return vars;
  };

  args.forEach(key => {
    // @ts-ignore
    result[key] = `--${id}-${emotionSafe(key)}`;
  }, {});

  return result as CsVars<T, ID>;
}

type ModifierConfig = Record<string, Record<string, CS>>;

type ModifierValues<T extends ModifierConfig> = {
  [P in keyof T]: keyof T[P];
};

type ModifierReturn<T extends ModifierConfig> = T &
  ((modifiers: Partial<ModifierValues<T>>) => string);

/**
 * Creates a modifier function that takes in a modifier config and will return a CSS class name
 * that matches the result. Modifiers can be thought as `if` or `switch` statements
 *
 * ```tsx
 * const myModifiers = createModifiers({
 *   // a modifier called 'size'
 *   size: {
 *     small: cs({ fontSize: 12 }),
 *     medium: cs({ fontSize: 14 })
 *   }
 * })
 *
 * myModifiers({ size: 'medium' }) // returns the medium class name
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
 * All acceptable values of the `cs` prop.
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
  cs?: CSToPropsInput;
}

/**
 * Creates CSS styles based on object-style input. It has a side-effect of adding CSS to the page
 * and will return a space-delimitated string of CSS class names meant to be added to an element.
 *
 * It can take a number of inputs of various types. The simplest is object-styles.
 *
 * ```ts
 * const myStyles = cs({
 *   backgroundColor: 'red'
 * })
 * ```
 *
 *
 *
 * The cs function is curried into 2 parts. The first function could be done at build time. The
 * returned function combines classnames and will remain as a small runtime.
 */
export function cs(...args: (StyleProps | string)[]): string {
  return args
    .map(input => {
      if (typeof input === 'string') {
        return input;
      }

      const convertedStyles = replaceAllWithTokens(input);

      return css(convertedStyles as any);
    })
    .join(' ');
}

/**
 * React hook to apply CSS class names and dynamic CSS variables
 *
 * ```tsx
 * const MyComponent = (props: any) => {
 *   return <div {...useCs(props)} />
 * }
 * ```
 *
 * It will return an object with `className` and `style` attributes.
 * If a `className` is provided to the component, it will merge the classNames.
 * If a `style` is provided to the component, it will merge the styles.
 *
 * ```tsx
 * const vars = createVars('background')
 * const styles = cs({
 *   color: vars.color
 * })
 * <MyComponent
 *   className="foobar"
 *   style={{ padding: 10 }}
 *   cs={styles}
 *   csVars
 ={vars({background: 'red'})}
 * />
 *
 * // Output
 * <div
 *   className="foobar {hashedClassName}"
 *   style="padding: 10px; --{hash}-background: red;"
 * />
 * ```
 */
export function useCs<
  T extends CSProps & {
    className?: string | undefined;

    style?: React.CSSProperties | undefined;
  }
>({cs, style, className, ...props}: T) {
  return {
    ...csToProps([cs, className, style]),
    ...props,
  } as Omit<T, 'cs' | 'csVars'>;
}
