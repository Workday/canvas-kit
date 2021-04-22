import * as React from 'react';
import styled from '@emotion/styled';
import {createComponent, StyledType} from '@workday/canvas-kit-react/common';
import {Box, BoxProps} from '@workday/canvas-kit-labs-react/common';

import {flex, FlexProps as FlexBaseProps} from './utils/flex';

export type FlexProps = StyledType & BoxProps & FlexBaseProps;

const StyledFlex = styled(Box)<FlexProps>(
  {
    display: 'flex',
  },
  flex
);

export const Flex = createComponent(Box)<FlexProps>({
  displayName: 'Flex',
  Component: ({children, ...elemProps}: FlexProps, ref, Element) => {
    return (
      <StyledFlex as={Element} ref={ref} {...elemProps}>
        {children}
      </StyledFlex>
    );
  },
});
