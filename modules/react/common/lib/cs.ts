import React from 'react';
import {CommonStyleProps} from '@workday/canvas-kit-react/layout';
// import {colors, space, type} from '@workday/canvas-kit-react/tokens';
import {generateUniqueId} from './utils/useUniqueId';
// eslint-disable-next-line @emotion/no-vanilla
import {css} from '@emotion/css';

export const theme = {
  palette: {
    primary: {
      lightest: 'var(--ck-palette-primary-lightest)',
      light: 'var(--ck-palette-primary-light)',
      main: 'var(--ck-palette-primary-main)',
      dark: 'var(--ck-palette-primary-dark)',
      darkest: 'var(--ck-palette-primary-darkest)',
    },
    alert: {
      lightest: 'var(--ck-palette-alert-lightest)',
      light: 'var(--ck-palette-alert-light)',
      main: 'var(--ck-palette-alert-main)',
      dark: 'var(--ck-palette-alert-dark)',
      darkest: 'var(--ck-palette-alert-darkest)',
    },
    error: {
      lightest: 'var(--ck-palette-error-lightest)',
      light: 'var(--ck-palette-error-light)',
      main: 'var(--ck-palette-error-main)',
      dark: 'var(--ck-palette-error-dark)',
      darkest: 'var(--ck-palette-error-darkest)',
    },
    success: {
      lightest: 'var(--ck-palette-success-lightest)',
      light: 'var(--ck-palette-success-light)',
      main: 'var(--ck-palette-success-main)',
      dark: 'var(--ck-palette-success-dark)',
      darkest: 'var(--ck-palette-success-darkest)',
    },
    neutral: {
      lightest: 'var(--ck-palette-neutral-lightest)',
      light: 'var(--ck-palette-neutral-light)',
      main: 'var(--ck-palette-neutral-main)',
      dark: 'var(--ck-palette-neutral-dark)',
      darkest: 'var(--ck-palette-neutral-darkest)',
    },
    common: {
      focusOutline: '#0875e1',
    },
  },
} as const;

// get all tokens for lookup... We might need to watch for duplicates and separate by key
const tokens = {}; /*{
  ...colors,
  ...space,
  ...type.properties.fontFamilies,
  // etc
};*/

type NestedStyles =
  | string
  | number
  | undefined
  | (CommonStyleProps & {
      [propertyName: string]: NestedStyles;
    });

export interface StyleProps extends CommonStyleProps {
  [propertiesName: string]: NestedStyles;
}

function replaceWithToken<T>(value: T): T {
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

export type CsVars<T extends string> = Record<T, string> & {
  (input: Partial<Record<T, string>>): Record<T, string>;
};

/**
 * Take a CSS Variable name and return a variable property
 *
 * ```ts
 * const myVars = createVars('color')
 *
 * const myStyles = cs({
 *   color: cssVar(myVars.color) // color: var(--{hash}-color)
 * })
 * ```
 */
export function cssVar(input: string) {
  return `var(${input})`;
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
export function createVars<T extends string>(...args: T[]): CsVars<T> {
  const id = generateUniqueId();
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
    result[key] = `--${id}-${key}`;
  }, {});

  return result as CsVars<T>;
}

type ModifierConfig = Record<string, Record<string, CS>>;

type ModifierValues<T extends ModifierConfig> = {
  [P in keyof T]: keyof T[P];
};

type ModifierReturn<T extends ModifierConfig> = T &
  ((modifiers: Partial<ModifierValues<T>>) => string);

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
export function csToProps(
  input: undefined | CS | CsToPropsReturn | (undefined | CS | CsToPropsReturn)[]
): CsToPropsReturn {
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
  cs?: CS | (CS | undefined)[];
}

/**
 * The cs function is curried into 2 parts. The first function could be done at
 * build time. The returned function combines classnames and will remain as a
 * small runtime.
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
    // @ts-ignore // fix this later
    ...csToProps([cs, className, style]),
    ...props,
  } as Omit<T, 'cs' | 'csVars'>;
}

/**
 * Takes in a CSS Variable created by `createVars` and a fallback value and returns `var({input},
 * {fallback})`. This can be used inside `cs` functions to generated fallback values for properties.
 */
export function fallback(input: string, fallbackValue: string) {
  return `var(${input}, ${fallbackValue})`;
}
