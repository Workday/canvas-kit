import * as React from 'react';
import styled from '@emotion/styled';
import {createComponent, StyledType} from '@workday/canvas-kit-react/common';
import {Box, BoxProps} from '@workday/canvas-kit-labs-react/common';
import {Flex, FlexProps} from './Flex';
import {getValidChildren} from './utils/getValidChildren';
import {stack, StackProps as StackBaseProps} from './utils/stack';

export type StackProps = FlexProps & StackBaseProps;

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

const StyledStack = styled(Flex)<StyledType & StackProps>(stack);

export const Stack = createComponent('div')({
  displayName: 'Stack',
  Component: (
    {children, flexDirection = 'row', shouldWrapChildren = false, ...elemProps}: StackProps,
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

export type HStackProps = Omit<StackProps, 'flexDirection'> & {
  flexDirection?: 'row' | 'row-reverse';
};

export const HStack = createComponent('div')({
  displayName: 'HStack',
  Component: ({children, flexDirection = 'row', ...elemProps}: HStackProps, ref, Element) => {
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

export type VStackProps = Omit<StackProps, 'flexDirection'> & {
  flexDirection?: 'column' | 'column-reverse';
};

export const VStack = createComponent('div')({
  displayName: 'VStack',
  Component: ({children, flexDirection = 'column', ...elemProps}: VStackProps, ref, Element) => {
    return (
      <Stack as={Element} ref={ref} flexDirection={flexDirection} {...elemProps}>
        {children}
      </Stack>
    );
  },
});
