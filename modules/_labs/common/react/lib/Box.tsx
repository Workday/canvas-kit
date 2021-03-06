import * as React from 'react';
import {
  createComponent,
  styled,
  StyledType,
} from '@workday/canvas-kit-react-common';

import { border, BorderProps } from "./utils/border";
import { color, ColorProps } from "./utils/color";
import { depth, DepthProps } from "./utils/depth";
import { layout, LayoutProps } from "./utils/layout";
import { position, PositionProps } from "./utils/position";
import { space, SpaceProps } from "./utils/space";

export interface BoxProps extends BorderProps, ColorProps, DepthProps, LayoutProps, PositionProps, SpaceProps {
  children: React.ReactNode;
}

const StyledBox = styled('div')<StyledType & BoxProps>({
  boxSizing: 'border-box',
  // border: 'solid 1px'
}, border, color, depth, layout, position, space)

export const Box = createComponent('div')({
  displayName: 'Box',
  Component: ({ children, ...elemProps}: BoxProps, ref, Element) => {
    return (
      <StyledBox as={Element} ref={ref} {...elemProps}>
        {children}
      </StyledBox>
    );
  }
});
