// eslint-disable-next-line @emotion/no-vanilla
import {css} from '@emotion/css';
import {CSToPropsInput, handleCsProp} from '@workday/canvas-kit-styling';
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
 * This function has the same signature as {@link handleCsProp} and also calls `handleCsProps`, but
 * adds support for style props. It can be used as a drop-in replacement for `handleCsProps`.
 */
export function mergeStyles<T extends {}>(
  /**
   * All the props to be spread onto an element. The `cs` prop will be removed an reduced to
   * `className` and `style` props which should be safe on every element.
   */
  allProps: T,
  /**
   * Optional local style created by `createStyles`. Using this parameter, you can style your
   * element while supporting proper style merging order.
   */
  localCs?: CSToPropsInput
): Omit<T, 'cs' | keyof CommonStyleProps> {
  const styleProps = {};
  let shouldRuntimeMergeStyles = false;

  // separate style props from all other props. `cs` is special and should be forwarded to the
  // `handleCsProp` function.
  const elemProps = Object.keys(allProps).reduce((result, prop) => {
    if (isStyleProps(prop)) {
      shouldRuntimeMergeStyles = true;
      // @ts-ignore
      styleProps[prop] = allProps[prop];
    } else {
      // @ts-ignore
      result[prop] = allProps[prop];
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

  return handleCsProp(elemProps, [localCs, stylePropsClassName]) as Omit<
    T,
    'cs' | keyof CommonStyleProps
  >;
}
