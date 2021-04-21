import * as React from 'react';
import styled from '@emotion/styled';
import {createComponent, StyledType} from '@workday/canvas-kit-react/common';
import {Flex, FlexProps} from './Flex';
import {getValidChildren} from './utils/getValidChildren';
import {stack, StackProps as StackBaseProps} from './utils/stack';

export type StackProps = StyledType & FlexProps & StackBaseProps;

const StyledStack = styled(Flex)<StackProps>(stack);

export const Stack = createComponent('div')<StackProps>({
  displayName: 'Stack',
  Component: ({children, ...elemProps}: StackProps, ref, Element) => {
    const validChildren = getValidChildren(children);
    return (
      <StyledStack as={Element} ref={ref} {...elemProps}>
        {validChildren}
      </StyledStack>
    );
  },
});

export type HStackProps = Omit<StackProps, 'direction'> & {
  direction?: 'row' | 'row-reverse';
};

export const HStack = createComponent(Stack)<HStackProps>({
  displayName: 'HStack',
  Component: ({children, direction = 'row', ...elemProps}: HStackProps, ref, Element) => {
    return (
      <Stack as={Element} ref={ref} direction={direction} {...elemProps}>
        {children}
      </Stack>
    );
  },
});

export type VStackProps = Omit<StackProps, 'direction'> & {
  direction?: 'column' | 'column-reverse';
};

export const VStack = createComponent(Stack)<VStackProps>({
  displayName: 'VStack',
  Component: ({children, direction = 'column', ...elemProps}: VStackProps, ref, Element) => {
    return (
      <Stack as={Element} ref={ref} direction={direction} {...elemProps}>
        {children}
      </Stack>
    );
  },
});
