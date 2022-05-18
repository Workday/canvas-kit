import * as React from 'react';
import styled from '@emotion/styled';
import isPropValid from '@emotion/is-prop-valid';
import {createComponent, StyledType, useConstant} from '@workday/canvas-kit-react/common';

// style props
import {border, BorderStyleProps} from './utils/border';
import {color, ColorStyleProps} from './utils/color';
import {depth, DepthStyleProps} from './utils/depth';
import {flexItem, FlexItemStyleProps} from './utils/flexItem';
import {layout, LayoutStyleProps} from './utils/layout';
import {position, PositionStyleProps} from './utils/position';
import {space, SpaceStyleProps} from './utils/space';

export type BoxProps = BorderStyleProps &
  ColorStyleProps &
  DepthStyleProps &
  FlexItemStyleProps &
  LayoutStyleProps &
  PositionStyleProps &
  SpaceStyleProps & {
    children?: React.ReactNode;
  };

const omittedProps = ['display', 'color', 'height', 'overflow', 'width', 'border', 'background'];

const shouldForwardProp = (prop: string) => {
  return isPropValid(prop) && !omittedProps.includes(prop);
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
  layout,
  position,
  space
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
  layout,
  position,
  space
);
/**
 * `Box` is a primitive component that provides a common, ergonomic API around Canvas design tokens.
 * It is highly flexible, and its primary purpose is to build other components.
 *
 * @example
 * import { Box, BoxProps } from '@workday/canvas-kit-labs-react/common';
 *
 * interface CardProps extends BoxProps {
 *   // card-specific props
 * }
 *
 * // `Card`'s default values are set using `BoxProps`
 * const Card = (props: CardProps) => (
 *   <Box depth={2} padding="m" borderRadius="l" {...props}>Hello, Card!</Box>
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
