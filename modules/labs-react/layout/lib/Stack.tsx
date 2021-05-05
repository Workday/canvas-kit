import * as React from 'react';
import styled from '@emotion/styled';
import {createComponent, StyledType} from '@workday/canvas-kit-react/common';
import {Box, BoxProps} from '@workday/canvas-kit-labs-react/common';
import {Flex, FlexStyleProps} from './Flex';
import {getValidChildren} from './utils/getValidChildren';
import {stack, StackStyleProps as StackBaseProps} from './utils/stack';

export type StackStyleProps = FlexStyleProps & StackBaseProps;

const StackItem = createComponent('div')({
  displayName: 'Stack.Item',
  Component: ({children, ...elemProps}: BoxProps, ref, Element) => {
    return (
      <Box
        as={Element}
        ref={ref}
        display="inline-block"
        flex="0 0 auto"
        minWidth={0}
        {...elemProps}
      >
        {children}
      </Box>
    );
  },
});

const StyledStack = styled(Flex)<StyledType & StackStyleProps>(stack);

export const Stack = createComponent('div')({
  displayName: 'Stack',
  Component: (
    {children, flexDirection = 'row', shouldWrapChildren = false, ...elemProps}: StackStyleProps,
    ref,
    Element
  ) => {
    const validChildren = getValidChildren(children);
    return (
      <StyledStack as={Element} ref={ref} flexDirection={flexDirection} {...elemProps}>
        {shouldWrapChildren
          ? validChildren.map(child => <StackItem>{child}</StackItem>)
          : validChildren}
      </StyledStack>
    );
  },
  subComponents: {
    Item: StackItem,
  },
});

export type HStackStyleProps = Omit<StackStyleProps, 'flexDirection'> & {
  flexDirection?: 'row' | 'row-reverse';
};

export const HStack = createComponent('div')({
  displayName: 'HStack',
  Component: ({children, flexDirection = 'row', ...elemProps}: HStackStyleProps, ref, Element) => {
    return (
      <Stack
        as={Element}
        ref={ref}
        flexDirection={flexDirection}
        children={children}
        {...elemProps}
      />
    );
  },
});

export type VStackStyleProps = Omit<StackStyleProps, 'flexDirection'> & {
  flexDirection?: 'column' | 'column-reverse';
};

export const VStack = createComponent('div')({
  displayName: 'VStack',
  Component: (
    {children, flexDirection = 'column', ...elemProps}: VStackStyleProps,
    ref,
    Element
  ) => {
    return (
      <Stack as={Element} ref={ref} flexDirection={flexDirection} {...elemProps}>
        {children}
      </Stack>
    );
  },
});
