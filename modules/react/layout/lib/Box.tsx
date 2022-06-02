import * as React from 'react';
import styled from '@emotion/styled';
import isPropValid from '@emotion/is-prop-valid';
import {createComponent, StyledType, useConstant} from '@workday/canvas-kit-react/common';

// style props
import {border, BorderStyleProps} from './utils/border';
import {color, ColorStyleProps} from './utils/color';
import {depth, DepthStyleProps} from './utils/depth';
import {flexItem, FlexItemStyleProps} from './utils/flexItem';
import {font, FontStyleProps} from './utils/font';
import {layout, LayoutStyleProps} from './utils/layout';
import {other, OtherStyleProps} from './utils/other';
import {position, PositionStyleProps} from './utils/position';
import {space, SpaceStyleProps} from './utils/space';
import {text, TextStyleProps} from './utils/text';

export type BoxProps = BorderStyleProps &
  ColorStyleProps &
  DepthStyleProps &
  FlexItemStyleProps &
  FontStyleProps &
  LayoutStyleProps &
  OtherStyleProps &
  PositionStyleProps &
  SpaceStyleProps &
  TextStyleProps & {
    children?: React.ReactNode;
  };

const omittedProps = ['display', 'color', 'height', 'overflow', 'width', 'border', 'background'];

const shouldForwardProp = (prop: string) => {
  return isPropValid(prop) && !omittedProps.includes(prop);
};

/**
 * A function that allows us to call Box styles on an element and reduce the amount of elements in the React Dom tree.
 * Instead of using the `as` in a styled function, you can just call this instead to pass those props to the styled element
 * @example
 * import { boxStyleFn } from '@workday/canvas-kit-react/layout';
 * const StyledHeader = styled('h1')(
 *  boxStyleFn,
 *  {
 *    fontWeight: 400,
 *  }
 * )
 *
 * ....
 *
 * <StyledHeader color='red'>Hello World</StyledHeader>
 */
export const boxStyleFn = <P extends BoxProps>(props: P) => {
  return [
    {
      boxSizing: 'border-box',
    },
    border,
    color,
    depth,
    flexItem,
    font,
    layout,
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
const StyledBoxElement = styled('div', {shouldForwardProp})<StyledType & BoxProps>(
  {
    boxSizing: 'border-box',
  },
  border,
  color,
  depth,
  flexItem,
  font,
  layout,
  position,
  space,
  text
);

// Meant to be used with components. There is no `shouldForwardProps` - all props will be forwarded to the component
const StyledBoxComponent = styled('div')<StyledType & BoxProps>(
  {
    boxSizing: 'border-box',
  },
  border,
  color,
  depth,
  flexItem,
  font,
  layout,
  other,
  position,
  space,
  text
);

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
