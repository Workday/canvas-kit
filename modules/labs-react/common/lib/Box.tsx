import * as React from 'react';
import styled from '@emotion/styled';
import isPropValid from '@emotion/is-prop-valid';
import {createComponent, StyledType} from '@workday/canvas-kit-react/common';

// style props
import {border, BorderProps} from './utils/border';
import {color, ColorProps} from './utils/color';
import {depth, DepthProps} from './utils/depth';
import {flexItem, FlexItemProps} from './utils/flexItem';
import {layout, LayoutProps} from './utils/layout';
import {position, PositionProps} from './utils/position';
import {space, SpaceProps} from './utils/space';

export type {
  BorderProps,
  ColorProps,
  DepthProps,
  FlexItemProps,
  LayoutProps,
  PositionProps,
  SpaceProps,
};

export type BoxProps = BorderProps &
  ColorProps &
  DepthProps &
  FlexItemProps &
  LayoutProps &
  PositionProps &
  SpaceProps & {
    children?: React.ReactNode;
  };

const omittedProps = ['display', 'color'];

const shouldForwardProp = (prop: string) => {
  return isPropValid(prop) && !omittedProps.includes(prop);
};

const StyledBox = styled('div', {shouldForwardProp})<StyledType & BoxProps>(
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
 *   <Box depth={2} space="m" {...props}>Hello, Card!</Box>
 * );
 *
 */
export const Box = createComponent('div')({
  displayName: 'Box',
  Component: ({children, ...elemProps}: BoxProps, ref, Element) => {
    return (
      <StyledBox as={Element} ref={ref} {...elemProps}>
        {children}
      </StyledBox>
    );
  },
});
