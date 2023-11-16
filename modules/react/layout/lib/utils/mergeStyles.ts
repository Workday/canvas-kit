import {getRegisteredStyles} from '@emotion/utils';
// eslint-disable-next-line @emotion/no-vanilla
import {cache, css} from '@emotion/css';
import {csToProps, CSToPropsInput, createStylesCache} from '@workday/canvas-kit-styling';
import {boxStyleFn} from '../Box';
import {backgroundStyleFnConfigs} from './background';
import {borderStyleFnConfigs} from './border';
import {colorStyleFnConfigs} from './color';
import {depthStyleFnConfigs} from './depth';
import {flexItemStyleFnConfigs} from './flexItem';
import {gridItemStyleFnConfigs} from './gridItem';
import {layoutStyleFnConfigs} from './layout';
import {otherStyleFnConfigs} from './other';
import {positionStyleFnConfigs} from './position';
import {spaceStyleFnConfigs} from './space';
import {CommonStyleProps} from './styleProps';
import {textStyleFnConfigs} from './text';

// get a hash of all the style props for a faster lookup
const stylePropHash = [
  ...backgroundStyleFnConfigs,
  ...borderStyleFnConfigs,
  ...colorStyleFnConfigs,
  ...depthStyleFnConfigs,
  ...flexItemStyleFnConfigs,
  ...gridItemStyleFnConfigs,
  ...layoutStyleFnConfigs,
  ...otherStyleFnConfigs,
  ...positionStyleFnConfigs,
  ...spaceStyleFnConfigs,
  ...textStyleFnConfigs,
].reduce((result, prop) => {
  //@ts-ignore
  result[prop.name] = true;
  return result;
}, {} as Record<string, boolean>);

function isStyleProps(prop: string): boolean {
  return stylePropHash[prop] || false;
}

/**
 * This is an opinionated function that will force style merging with Emotion's runtime APIs,
 * including [styled components](https://emotion.sh/docs/styled) and the [css
 * prop](https://emotion.sh/docs/css-prop). It will also handle style props for as long as those are
 * supported. `mergeStyles` is exported from the layout package since it supports style props
 * defined in the layout packages.
 *
 * It works by detecting styles added via Emotion's runtime APIs and forcing styling merging if use
 * of runtime APIs have been detected. If only `createStyles` were used to style a component, the
 * faster non-runtime styling will be used.
 *
 * You can use `mergeStyles` if you wish to use {@link createStyles} on your own components and want
 * your components to be compatible with Emotion's runtime styling APIs.
 *
 * ```tsx
 * import {createStyles, CSProps} from '@workday/canvas-kit-styling';
 * import {mergeStyles} from '@workday/canvas-kit-react/layout';
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
 *       {...mergeStyles(elemProps, [myStyles])}
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
 * // now everything works. Without `mergeStyles`, the last component would be a red box
 * export default () => (
 *   <>
 *     <MyComponent>Green box</MyComponent>
 *     <StyledMyComponent>Red box</StyledMyComponent>
 *     <StyledMyComponent cs={myOverridingStyles}>Blue box</StyledMyComponent>
 *   </>
 * )
 * ```
 *
 */
export function mergeStyles<T extends {}>(
  allProps: T,
  cs: CSToPropsInput
): Omit<T, 'cs' | keyof CommonStyleProps> {
  const styleProps = {};
  let shouldRuntimeMergeStyles = false;
  // TypeScript can't handle a type where I declare T extends `{className?: string}` for some
  // reason, so we'll do a `as any` any time we check for possible props on `allProps`
  let className = (allProps as any).className || '';

  // separate style props from all other props. `cs` is special and should be forwarded to the
  // `handleCsProp` function.
  const elemProps = Object.keys(allProps).reduce((result, prop) => {
    if (isStyleProps(prop)) {
      shouldRuntimeMergeStyles = true;
      // @ts-ignore
      styleProps[prop] = allProps[prop];
    } else {
      if (prop !== 'cs') {
        // @ts-ignore
        result[prop] = allProps[prop];
      }
    }

    return result;
  }, {});

  // We need to determine if style props have been used. If they have, we need to merge all the CSS
  // classes into a single class name in the order that the class names are listed. This variable
  // will collect the CSS class name created by Emotion if we detect style props.
  let stylePropsClassName = '';

  // We have style props. We need to create style and merge with our `csToProps` to get the correct
  // merging order for styles
  if (shouldRuntimeMergeStyles) {
    const styles = boxStyleFn(styleProps);
    stylePropsClassName = css(styles);
  }

  const returnProps = csToProps([
    cs,
    stylePropsClassName, // if style props are not defined, this will be an empty string, which is fine
    className, // This will come from `styled` components or the `css` prop or if a user manually sets the `className` prop
    (allProps as any).cs, // doesn't matter if `cs` is undefined. csToProps will handle undefined. Thanks anyways, TypeScript
    (allProps as any).style, // doesn't matter if `style` is undefined. csToProps will handle undefined. Thanks anyways, TypeScript
  ]);

  // see if we need to do style merging based off use of Emotion runtime APIs. We do this by testing
  // the Emotion cache for a match to any class names we find, filtering out those created via
  // `createStyles`. If only `createStyles` is detected, there is no reason to merge styles
  (returnProps.className || '').split(' ').forEach(name => {
    if (!createStylesCache[name] && cache.registered[name]) {
      shouldRuntimeMergeStyles = true;
    }
  });

  if (shouldRuntimeMergeStyles) {
    const registeredStyles: string[] = [];

    // We are using the raw `css` instead of `createStyles` because `css` uses style hashing and
    // `createStyles` generates a new ID every time. We could use `createStyles` here, but it
    // would be more wasteful and new styles would be generated each React render cycle. `css` is
    // safe to use inside a render function while `createStyles` should always be used outside the
    // React render cycle.
    className = getRegisteredStyles(
      cache.registered,
      registeredStyles,
      returnProps.className || ''
    );

    className += css(registeredStyles);
  } else {
    className = returnProps.className;
  }

  return {...elemProps, ...returnProps, ...{className}} as any as Omit<
    T,
    'cs' | keyof CommonStyleProps
  >;
}
