/** @jsxRuntime classic */
/** @jsx jsx */
import {jsx} from '@emotion/react';
import * as React from 'react';
import styled from '@emotion/styled';
import isPropValid from '@emotion/is-prop-valid';
import {createComponent, useTheme, useConstant, StyledType} from '@workday/canvas-kit-react/common';

// style props
import {border, BorderStyleProps} from './utils/border';
import {color, ColorStyleProps} from './utils/color';
import {depth, DepthStyleProps} from './utils/depth';
import {flexItem, FlexItemStyleProps} from './utils/flexItem';
import {layout, LayoutStyleProps} from './utils/layout';
import {other, OtherStyleProps} from './utils/other';
import {position, PositionStyleProps} from './utils/position';
import {space, SpaceStyleProps} from './utils/space';
import {pseudo, PseudoStyleProps} from './utils/pseudo';
// cx function
import {cxFn, CXStyleProps} from './utils/cx';

export type BoxProps = BorderStyleProps &
  ColorStyleProps &
  DepthStyleProps &
  FlexItemStyleProps &
  LayoutStyleProps &
  OtherStyleProps &
  PositionStyleProps &
  SpaceStyleProps &
  PseudoStyleProps & {
    children?: React.ReactNode;
    cx?: CXStyleProps;
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
  other,
  position,
  space,
  pseudo
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
  other,
  position,
  space,
  pseudo
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
 *   <Box depth={2} padding="m" borderRadius="l" {...props}>Hello, Card!</Box>
 * );
 *
 */
export const Box = createComponent('div')({
  displayName: 'Box',
  Component: ({children, cx, ...elemProps}: BoxProps, ref, Element) => {
    const BoxComponent = useConstant(() =>
      typeof Element === 'string' ? StyledBoxElement : StyledBoxComponent
    );
    const theme = useTheme();
    const isRTL = theme.canvas.direction === 'rtl';
    const cxStyles = cxFn(cx || {}, isRTL);

    return (
      <BoxComponent as={Element} ref={ref} css={cxStyles} {...elemProps}>
        {children}
      </BoxComponent>
    );
  },
});
