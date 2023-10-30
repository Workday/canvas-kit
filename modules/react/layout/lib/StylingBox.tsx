import * as React from 'react';
import isPropValid from '@emotion/is-prop-valid';
import styled from '@emotion/styled';
import {createComponent} from '@workday/canvas-kit-react/common';
import {createStyles, CSProps, handleCsProp} from '@workday/canvas-kit-styling';
// eslint-disable-next-line @emotion/no-vanilla
import {css} from '@emotion/css';

import {boxStyleFn} from './Box';

import {CommonStyleProps} from './utils/styleProps';

/**
 * StylingBox Props
 * ---
 * Common style props + children
 *
 * - background
 * - border
 * - color
 * - depth
 * - flexItem
 * - gridItem
 * - layout
 * - other
 * - position
 * - space
 * - text
 */
export type StylingBoxProps = CommonStyleProps &
  CSProps & {
    children?: React.ReactNode;
  };

const omittedProps = [
  'display',
  'color',
  'height',
  'overflow',
  'width',
  'border',
  'background',
  'fontSize',
  'fontWeight',
  'fontFamily',
  'letterSpacing',
  'lineHeight',
  'textAlign',
  'opacity',
  'textDecoration',
  'textOverflow',
  'textTransform',
  'textShadow',
  'whiteSpace',
  'wordBreak',
];

const shouldForwardProp = (prop: string) => {
  return isPropValid(prop) && !omittedProps.includes(prop);
};

const stylingBoxStyles = createStyles({
  boxSizing: 'border-box',
});

/**
 * This component is needed as long as we support style merging between `@emotion/css` and
 * `@emotion/react` and `@emotion/styled`. As long as the `CacheProvider` is in the
 * `CanvasProvider`, we will need to use `styled` from `@emotion/styled`. What this allows is
 * Emotion reading all the space-delimited `className`s and combine into one CSS class with all CSS
 * properties in the order defined via the `className` order.
 *
 * For example:
 *
 * // without
 * ```html
 * <div class="a b">Hello</div>
 *
 * <style>
 * .a { padding: 4px }
 * .b { paddingRight: 8px }
 * </style>
 * ```
 *
 * // with
 * ```html
 * <div class="c">Hello</div>
 *
 * <style>
 * .a { padding: 4px; }
 * .b { padding-right: 8px; }
 * .c { padding: 4px; padding-right: 8px; }
 * </style>
 * ```
 *
 * You can see from the example that the latter adds a brand new CSS class `c` and merges the styles
 * together. This makes sure if we always display correctly if `createStyles` is combined with
 * Emotion's `styled` component or the `css` prop.
 */
const Box = styled('div')({});

const alwaysForwardProp = (prop: string) => true;

/**
 * `StylingBox` is a primitive component that provides a common, ergonomic API around Canvas design tokens.
 * It is highly flexible, and its primary purpose is to build other components.
 *
 * @example
 * import { StylingBox, StylingBoxProps } from '@workday/canvas-kit-react/layout';
 *
 * interface CardProps extends StylingBoxProps {
 *   // card-specific props
 * }
 *
 * // `Card`'s default values are set using `StylingBoxProps`
 * const Card = (props: CardProps) => (
 *   <StylingBox depth={1} padding="m" borderRadius="l" {...props}>Hello, Card!</StylingBox>
 * );
 *
 */
export const StylingBox = createComponent('div')({
  displayName: 'StylingBox',
  Component: ({children, ...allProps}: StylingBoxProps, ref, Element) => {
    // If the `Element` is a simple element like a `div` or `span`, we want to filter out props so
    // that only valid HTML attributes are passed to the element. Otherwise, we assume the component
    // can also handle props. It's not perfect, but it is almost impossible to know what the
    // component can and cannot handle.
    const shouldForwardPropFn = typeof Element === 'string' ? shouldForwardProp : alwaysForwardProp;

    const styleProps = {};
    let hasStyleProps = false;

    // separate style props from all other props. Both `cs` and `localCs` are special and should be
    // forwarded to the `handleCsProp` function.
    const elemProps = Object.keys(allProps).reduce((result, prop) => {
      if (shouldForwardPropFn(prop) || prop === 'cs') {
        // @ts-ignore
        result[prop] = allProps[prop];
      } else {
        if (prop !== 'cs' && prop !== 'localCs') {
          hasStyleProps = true;
        }
        // @ts-ignore
        styleProps[prop] = allProps[prop];
      }
      return result;
    }, {});

    // We need to determine if style props have been used. If they have, we need to use a styled
    // component which will merge all the CSS classes into a single class name in the order that the
    // class names are listed. See the comments on `Box` for more details.
    let stylePropsClassName = '';
    if (hasStyleProps) {
      const styles = boxStyleFn(styleProps);

      // We are using the raw `css` instead of `createStyles` because `css` uses style hashing and
      // `createStyles` generates a new ID every time. We could use `createStyles` here, but it
      // would be more wasteful and new styles would be generated each React render cycle. `css` is
      // safe to use inside a render method while `createStyles` should always be used outside the
      // React render cycle.
      stylePropsClassName = css(styles);
    }

    // We need to set a merging order for styles here. First, the box's styles, then any `localCs`
    // prop provided by the component. Finally, we consider style props to be a higher precedence
    // than `localCs` props. Finally, the `cs` prop should override even style props.
    const localCs = Array.isArray(allProps.localCs) ? allProps.localCs : [allProps.localCs];
    (elemProps as any).localCs = [stylingBoxStyles, ...localCs, stylePropsClassName];

    return hasStyleProps ? (
      <Box as={Element} ref={ref} {...handleCsProp(elemProps)}>
        {children}
      </Box>
    ) : (
      <Element ref={ref} {...handleCsProp(elemProps)}>
        {children}
      </Element>
    );
  },
});
