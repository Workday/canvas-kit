import {cache, css, keyframes as keyframesEmotion} from '@emotion/css';
import {getRegisteredStyles} from '@emotion/utils';
import {serializeStyles, SerializedStyles, CSSObject, Keyframes} from '@emotion/serialize';
import {Properties} from 'csstype';

import {generateUniqueId} from './uniqueId';

export const createStylesCache: Record<string, boolean> = {};

// CSSType doesn't support CSS custom properties
// Extending CSSObject types to support them
type CSSObjectWithVars<T extends CSSObject = CSSObject> = {
  [P in keyof T]?: T[P] | (string & {});
};

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
  | CSSObjectWithVars;

// Casting the types here for internal use only.
// We can remove this when CSSType supports CSS custom properties
type CastStyleProps = Exclude<StyleProps, CSSObjectWithVars> | CSSObject;

/**
 * Wrap all unwrapped CSS Variables. For example, `{padding: '--foo'}` will be replaced with
 * `{padding: 'var(--foo)'}`. It also works on variables in the middle of the property.
 */
function maybeWrapCSSVariables(input: string): string {
  // matches an string starting with `--` that isn't already wrapped in a `var()`. It tries to match
  // any character that isn't a valid separator in CSS
  return input.replace(
    /([a-z]*[ (]*)(--[^\s;,'})]+)/gi,
    (match: string, prefix: string, variable: string) => {
      if (prefix === 'var(') {
        return match;
      }
      return `${prefix}var(${variable})`;
    }
  );
}

function convertProperty<T>(value: T): T {
  // Handle the case where the value is a variable without the `var()` wrapping function. It happens
  // enough that it makes sense to automatically wrap.
  if (typeof value === 'string') {
    return maybeWrapCSSVariables(value) as any as T;
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
    {[K in T]: `--${ID}-${MakeEmotionSafe<K>}`};

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
export function createVars<
  T extends Record<string, string> | Record<string, Record<string, string>>,
  ID extends string = never
>(input: T, id?: ID): DefaultedVars<T, ID>;
export function createVars<
  T extends string | Record<string, string> | Record<string, Record<string, string>>,
  ID extends string
>(...args: T[]): any {
  const arg0 = args[0];
  if (typeof arg0 === 'object' && !(arg0 as any).id) {
    // this is a defaulted var
    return createDefaultedVars(arg0 as any, args[1] as string);
  }
  const id = (args[0] as any).id || generateUniqueId();
  // eslint-disable-next-line no-param-reassign
  args = (args[0] as any).args || args;
  const result = (input: Record<ToString<T>, string>) => {
    const vars = {};
    args.forEach(key => {
      if (input[key as ToString<T>]) {
        // @ts-ignore TS complains about `key` not in object `{}`
        vars[result[key]] = input[key];
      }
    });
    return vars;
  };

  args.forEach(key => {
    // @ts-ignore
    result[key] = `--${id}-${makeEmotionSafe(key)}`;
  }, {});

  return result;
}

type MakeEmotionSafe<T extends string> = T extends `${infer S}label` ? `${S}label-emotion-safe` : T;

// Type to create CSS Variable names based on JS names and ID
type CSSVarName<ID extends string, Name> = `--${ID}-${MakeEmotionSafe<ToString<Name>>}`;

/**
 * For custom themes that do not overwrite every default.
 */
type OptionalVars<T> = {
  [P in keyof T]?: T[P] extends string ? string : OptionalVars<T[P]>; // coerce CSS Variables to a string to allow any overrides in the function
};

type ToString<T> = string & T;

export type DefaultedVarsMap<
  T extends Record<string, string> | Record<string, Record<string, string>>,
  ID extends string | never
> = [ID] extends [never]
  ? T extends Record<string, string>
    ? Record<keyof T, string>
    : {[K in keyof T]: Record<keyof T[K], string>}
  : // map type. If the ID is known from the style optimizer, use static keys using string template literals instead of `string`
    {
      [K in keyof T]: T[K] extends Record<string, string>
        ? DefaultedVarsMap<T[K], `${ID}-${ToString<K>}`> // TypeScript doesn't know K is a string here and will throw an error, so we have to coerce it
        : CSSVarName<ID, K>;
    };

type ExtractValue<T, K> = K extends keyof T
  ? T[K]
  : K extends `${infer K1}-${infer K2}`
  ? K1 extends keyof T
    ? ExtractValue<T[K1], K2>
    : never
  : never;

type DefaultedVars<
  T extends Record<string, string> | Record<string, Record<string, string>>,
  ID extends string
> = DefaultedVarsMap<T, ID> & {
  (input: OptionalVars<T>): Record<string, string>;
  $$defaults: [ID] extends [never] // test if `ID` extends `never`.
    ? Record<string, string> // it does. It means we don't know the ID and`Record<string, string>` is as accurate as we can get
    : T extends Record<string, string> // it does not. ID is a string and we need to test what the structure looks like
    ? {
        [K in keyof T as CSSVarName<ID, K>]: T[K]; // The variables are a simple flat object with string values
      }
    : {[K in FlattenObjectKeys<T> as CSSVarName<ID, K>]: ExtractValue<T, K>};
};

type FlattenObjectKeys<T extends Record<string, any>, K = keyof T> = K extends string
  ? T[K] extends Record<string, any>
    ? `${ToString<K>}-${FlattenObjectKeys<T[ToString<K>]>}`
    : `${ToString<K>}`
  : never;

export function createDefaultedVars<
  T extends Record<string, string> | Record<string, Record<string, string>>,
  ID extends string = never
>(input: T, id?: ID): DefaultedVars<T, ID> {
  const localId = id || generateUniqueId();

  const result: DefaultedVars<{}, string> = input => {
    const vars: Record<string, string> = {};
    // eslint-disable-next-line guard-for-in
    for (const key in input) {
      if (typeof (input as any)[key] === 'string') {
        if ((result as any)[key]) {
          // Don't add an undefined key
          vars[(result as any)[key]] = (input as any)[key];
        }
      }
      if (typeof (input as any)[key] === 'object') {
        for (const subKey in (input as any)[key]) {
          if (typeof (input as any)[key][subKey] === 'string') {
            // Don't add an undefined key
            if ((result as any)[key][subKey]) {
              vars[(result as any)[key][subKey]] = (input as any)[key][subKey];
            }
          }
        }
      }
    }

    return vars;
  };
  result.$$defaults = {};

  // eslint-disable-next-line guard-for-in
  for (const key in input) {
    if (typeof input[key] === 'string') {
      const cssVarName = `--${localId}-${makeEmotionSafe(key)}`;
      (result as any)[key] = cssVarName;
      (result as any).$$defaults[cssVarName] = input[key];
    }
    if (typeof input[key] === 'object') {
      (result as any)[key] = {};
      for (const subKey in input[key]) {
        if (typeof input[key][subKey] === 'string') {
          const cssVarName = `--${localId}-${key}-${makeEmotionSafe(subKey)}`;
          (result as any)[key][subKey] = cssVarName;
          (result as any).$$defaults[cssVarName] = input[key][subKey];
        }
      }
    }
  }

  return result as DefaultedVars<T, ID>;
}

type ModifierConfig = Record<string, Record<string, CS>>;

/**
 * Helper type to convert `'true'` into `true` for boolean modifiers which are a pain to type as a
 * prop.
 */
type MaybeBoolean<T> = T extends 'true' ? boolean : T extends 'false' ? boolean : T;

type ModifierValues<T extends ModifierConfig> = {
  [P in keyof T]: MaybeBoolean<keyof T[P]>;
};

export type ModifierReturn<T extends ModifierConfig> = T &
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
export function createModifiers<M extends ModifierConfig>(input: M): ModifierReturn<M> {
  const modifierFn = (modifiers: Partial<ModifierValues<M>>) => {
    return Object.keys(modifiers)
      .filter(key => input[key] && (input as any)[key][modifiers[key]])
      .map(key => (input as any)[key][modifiers[key]])
      .join(' ');
  };

  Object.keys(input).forEach(key => {
    // @ts-ignore TypeScript makes it a pain to deal with index types
    modifierFn[key] = input[key];
  });

  return modifierFn as ModifierReturn<M>;
}

export type CompoundModifier<M extends ModifierConfig> = {
  modifiers: {[K in keyof M]?: keyof M[K]};
  styles: string;
};

/**
 * Creates a compound modifier function that takes in a modifier config and a compound modifier
 * config and returns a space-delimited list of CSS class names to apply to an element. This
 * function is similar to the {@link createModifiers} function.
 *
 * ```tsx
 * const myModifiers = createModifiers({
 *   size: {large: 'large'},
 *   position: {start: 'start'}
 * })
 *
 * const myCompound = createCompoundModifiers(myModifiers, [
 *   {
 *     modifiers: {
 *       size: 'large',
 *       position: 'start'
 *     },
 *     styles: 'large-start'
 *   }
 * ])
 *
 * myCompound({size: 'large', position: 'start'}) // 'large-start'
 * myCompound({size: 'large'}) // ''
 * ```
 */
export function createCompoundModifiers<M extends ModifierConfig>(
  /**
   * Modifiers created via `createModifiers`. The type will be extracted and applied to your
   * compound modifiers.
   */
  modifiers: ModifierReturn<M>,
  compound: CompoundModifier<M>[]
): ModifierReturn<M> {
  return (modifiers => {
    return compound
      .map(compoundModifier => {
        const match = Object.keys(compoundModifier.modifiers).reduce(
          (result, compoundModifierKey) => {
            return (
              result &&
              compoundModifier.modifiers[compoundModifierKey] === modifiers[compoundModifierKey]
            );
          },
          true
        );
        if (match) {
          return compoundModifier.styles;
        }
        return '';
      })
      .filter(v => v)
      .join(' ');
  }) as ModifierReturn<M>;
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
        return css.call(null, input as CastStyleProps);
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
      const {styles} = serializeStyles([convertedStyles as CastStyleProps]);

      // use `css.call()` instead of `css()` to trick Emotion's babel plugin to not rewrite our code
      // to remove our generated Id for the name:
      // https://github.com/emotion-js/emotion/blob/f3b268f7c52103979402da919c9c0dd3f9e0e189/packages/babel-plugin/src/utils/transform-expression-with-styles.js#L81-L82
      // Without this "fix", anyone using the Emotion babel plugin would get different results than
      // intended when styles are merged.
      const name = generateUniqueId();
      createStylesCache[`${cache.key}-${name}`] = true;
      return css.call(null, {name, styles});
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

type StylesReturn<V extends Record<string, string> | Record<string, Record<string, string>> = {}> =
  | SerializedStyles
  | CSSObjectWithVars
  | ((vars: OptionalVars<V>) => SerializedStyles | CSSObjectWithVars);

export type StencilModifierConfig<
  V extends Record<string, string> | Record<string, Record<string, string>> = {}
> = Record<string, Record<string, StylesReturn<V>>>;

export type StencilCompoundConfig<M> = {
  modifiers: {[K in keyof M]?: MaybeBoolean<keyof M[K]>};
  styles: SerializedStyles | CSSObjectWithVars;
};

type ModifierValuesStencil<M extends StencilModifierConfig> = {
  [P in keyof M]?: MaybeBoolean<keyof M[P]>;
};

export interface StencilConfig<
  M extends Record<string, Record<string, StylesReturn<V>>>,
  V extends Record<string, string> | Record<string, Record<string, string>> = {},
  ID extends string | never = never
> {
  vars?: V;
  /**
   * Base styles. These styles will always be returned when the stencil is called
   */
  base: StylesReturn<V>;
  /**
   * Stencil modifiers. The styles of a modifier are returned if the stencil is called with a
   * modifier key that matches the modifier value. For example:
   *
   * ```tsx
   * const stencil = createStencil({
   *   base: {
   *     padding: 5,
   *   },
   *   modifiers: {
   *     size: {
   *       large: {
   *         padding: 10
   *       }
   *     }
   *   }
   * })
   *
   * stencil({}) // padding is 5px
   * stencil({size: 'large'}) // padding is 10px
   * ```
   */
  modifiers?: M;
  /**
   * Stencil compound modifiers. The styles of a compound modifier are returned only if each modifier
   * matches the specified value. For example:
   *
   * ```tsx
   * const stencil = createStencil({
   *   base: {
   *     padding: 5,
   *   },
   *   modifiers: {
   *     size: {
   *       large: {
   *         padding: 10
   *       }
   *     },
   *     position: {
   *       start: {
   *         paddingInlineStart: 0
   *       }
   *     }
   *   },
   *   compound: [
   *     {
   *       modifiers: {
   *         size: 'large',
   *         position: 'start',
   *       },
   *       styles: {
   *         paddingInlineStart: 5
   *       }
   *     }
   *   ]
   * })
   *
   * stencil({})
   * // {padding: 5px;}
   * stencil({size: 'large'})
   * // {padding: 10px;}
   * stencil({position: 'start' })
   * // {padding: 5px; paddingInlineStart: 0}
   * stencil({size: 'large', position: 'start' })
   * // {padding: 10px; paddingInlineStart: 5px;}
   * ```
   */
  compound?: StencilCompoundConfig<M>[];
  /**
   * Modifiers are optional. If you need a modifier to always be defined, a default modifier value
   * will be used when a modifier is `undefined`
   */
  defaultModifiers?: {[K in keyof M]?: keyof M[K]};
}

type StencilModifierReturn<
  M extends StencilModifierConfig<V>,
  V extends Record<string, string> | Record<string, Record<string, string>>
> = {[K1 in keyof M]: {[K2 in keyof M[K1]]: string}};

export type Stencil<
  M extends StencilModifierConfig<V>,
  V extends Record<string, string> | Record<string, Record<string, string>>,
  ID extends string = never
> = {
  (modifiers?: ModifierValuesStencil<M> & VariableValuesStencil<V>): {
    className: string;
    style?: Record<string, string>;
  };
  vars: DefaultedVars<V, ID>;
  base: string;
  modifiers: StencilModifierReturn<M, V>;
};

type VariableValuesStencil<
  V extends Record<string, string> | Record<string, Record<string, string>>
> = V extends Record<string, string>
  ? {[K in keyof V]?: V[K]}
  : {[K1 in keyof V]?: {[K2 in keyof V[K1]]: string}};

/**
 * Creates a reuseable Stencil for styling elements. It takes vars, base styles, modifiers, and
 * compound modifiers.
 */
export function createStencil<
  M extends StencilModifierConfig<V>,
  V extends Record<string, string> | Record<string, Record<string, string>> = {},
  ID extends string = never
>(config: StencilConfig<M, V, ID>, id?: ID): Stencil<M, V, ID> {
  const {vars, base, modifiers, compound, defaultModifiers} = config;
  const _vars = createDefaultedVars(vars || {}, id);
  const _base = createStyles({
    ..._vars.$$defaults,
    ...(typeof base === 'function' ? base(_vars) : base),
  });

  const _modifiers = modifiers
    ? createModifiers(
        Object.keys(modifiers).reduce((result, key) => {
          // @ts-ignore
          result[key] = Object.keys(modifiers[key]).reduce((result, modifierKey) => {
            const modifier = modifiers[key][modifierKey];
            // @ts-ignore
            result[modifierKey] = createStyles(
              typeof modifier === 'function' ? modifier(_vars) : modifier
            );
            return result;
          }, {});

          return result;
        }, {})
      )
    : () => '';
  const _compound = compound
    ? createCompoundModifiers<{}>(
        // @ts-ignore modifiers are different in a stencil than in createModifiers. The difference is createModifiers expects each value to be a `string` and stencils expects `StyleProps`. Casting is gnarly, so we'll ignore instead
        modifiers,
        compound.map(compoundModifier => {
          return {
            modifiers: compoundModifier.modifiers,
            styles: createStyles(compoundModifier.styles),
          };
        })
      )
    : () => '';

  const stencil: Stencil<M, V, ID> = input => {
    const inputModifiers = {...defaultModifiers, ...input};
    return {
      className: [
        _base,
        modifiers ? _modifiers(inputModifiers) : '',
        compound ? _compound(inputModifiers) : '',
      ]
        .filter(v => v) // filter out empty strings
        .join(' '),
      style: _vars(input || {}),
    };
  };

  stencil.vars = _vars as DefaultedVars<V, ID>;
  stencil.base = _base;
  stencil.modifiers = _modifiers as any as StencilModifierReturn<M, V>;

  return stencil;
}

export function keyframes<ID extends string>(
  ...args: ({name: ID; styles: string} | StyleProps | TemplateStringsArray)[]
): ID {
  return keyframesEmotion(...(args as any)) as ID;
}
