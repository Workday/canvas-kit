import * as React from 'react';
import {createComponent, styled, StyledType} from '@workday/canvas-kit-react/common';

// style props
import {color, ColorProps} from './utils/color';
import {depth, DepthProps} from './utils/depth';
import {position, PositionProps} from './utils/position';

export interface BoxProps extends StyledType, ColorProps, DepthProps, PositionProps {
  children: React.ReactNode;
}

const StyledBox = styled('div')<BoxProps>(
  {
    boxSizing: 'border-box',
  },
  depth,
  color,
  position
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
export const Box = createComponent('div')<BoxProps>({
  displayName: 'Box',
  Component: ({children, ...elemProps}: BoxProps, ref, Element) => {
    return (
      <StyledBox as={Element} ref={ref} {...elemProps}>
        {children}
      </StyledBox>
    );
  },
});
