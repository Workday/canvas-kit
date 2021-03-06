import * as React from 'react';
import {
  createComponent,
  styled,
  StyledType,
} from '@workday/canvas-kit-react-common';

import { flex, FlexProps as BaseFlexProps } from "./utils/flex";
import { Box, BoxProps } from './Box';

export interface FlexProps extends BaseFlexProps, BoxProps {
  display?: 'flex' | 'inline-flex';
  children: React.ReactNode;
}

const StyledFlex = styled('div')<StyledType & FlexProps>({
  display: 'flex',
}, flex)

export const Flex = createComponent(Box)({
  displayName: 'Flex',
  Component: ({ children, ...elemProps}: FlexProps, ref, Element) => {
    return (
      <StyledFlex as={Element} ref={ref} {...elemProps}>
        {children}
      </StyledFlex>
    );
  }
});
