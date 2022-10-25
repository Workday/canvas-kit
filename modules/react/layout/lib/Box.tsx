import * as React from 'react';
import styled from '@emotion/styled';
import isPropValid from '@emotion/is-prop-valid';
import {createComponent, StyledType, useConstant} from '@workday/canvas-kit-react/common';

// style props
import {background} from './utils/background';
import {border} from './utils/border';
import {color} from './utils/color';
import {depth} from './utils/depth';
import {flexItem} from './utils/flexItem';
import {gridItem} from './utils/gridItem';
import {layout} from './utils/layout';
import {other} from './utils/other';
import {position} from './utils/position';
import {space} from './utils/space';
import {text} from './utils/text';
import {CommonStyleProps} from './utils/styleProps';

/**
 * Box Props
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
export type BoxProps = CommonStyleProps & {
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

/**
 * A function that allows us to call Box styles on an element and reduce the amount of elements in the React Dom tree.
 * Instead of using the `as` in a styled function, you can just call this instead to pass those props to the styled element
 * @example
 * ```
 * import { boxStyleFn } from '@workday/canvas-kit-react/layout';
 * const StyledHeader = styled('h1')(
 *  boxStyleFn,
 *  {
 *    fontWeight: 400,
 *  }
 * )
 *
 * ...
 *
 * <StyledHeader color='red'>Hello World</StyledHeader>
 * ```
 */
export const boxStyleFn = <P extends BoxProps>(props: P) => {
  return [
    {
      boxSizing: 'border-box',
    },
    background,
    border,
    color,
    depth,
    flexItem,
    gridItem,
    layout,
    other,
    position,
    space,
    text,
  ].reduce((result, style) => {
    // @ts-ignore
    const temp = typeof style === 'function' ? style(props) : style;
    // eslint-disable-next-line guard-for-in
    for (const key in temp) {
      // @ts-ignore
      result[key] = temp[key];
    }
    return result;
  }, {});
};

// Meant to be used with elements. The `shouldForwardProps` will remove all style props
const StyledBoxElement = styled('div', {shouldForwardProp})<StyledType & BoxProps>(boxStyleFn);

// Meant to be used with components. There is no `shouldForwardProps` - all props will be forwarded to the component
const StyledBoxComponent = styled('div')<StyledType & BoxProps>(boxStyleFn);

/**
 * `Box` is a primitive component that provides a common, ergonomic API around Canvas design tokens.
 * It is highly flexible, and its primary purpose is to build other components.
 *
 * @example
 * import { Box, BoxProps } from '@workday/canvas-kit-react/layout';
 *
 * interface CardProps extends BoxProps {
 *   // card-specific props
 * }
 *
 * // `Card`'s default values are set using `BoxProps`
 * const Card = (props: CardProps) => (
 *   <Box depth={1} padding="m" borderRadius="l" {...props}>Hello, Card!</Box>
 * );
 *
 */
export const Box = createComponent('div')({
  displayName: 'Box',
  Component: ({children, ...elemProps}: BoxProps, ref, Element) => {
    const BoxComponent = useConstant(() =>
      typeof Element === 'string' ? StyledBoxElement : StyledBoxComponent
    );

    return (
      <BoxComponent as={Element} ref={ref} {...elemProps}>
        {children}
      </BoxComponent>
    );
  },
});
