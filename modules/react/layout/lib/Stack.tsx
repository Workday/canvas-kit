import * as React from 'react';
import styled from '@emotion/styled';
import {createComponent, StyledType} from '@workday/canvas-kit-react/common';
import {Box, BoxProps} from './Box';
import {Flex, FlexProps} from './Flex';
import {getValidChildren} from './utils/getValidChildren';
import {stack, StackStyleProps} from './utils/stack';

export type StackProps = FlexProps & StackStyleProps;

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

// prevent `spacing` prop from being passed through to the HTML element
const shouldForwardProp = (prop: string) => {
  return prop !== 'spacing';
};

const StyledStack = styled(Flex, {shouldForwardProp})<StyledType & StackProps>(stack);

export const Stack = createComponent('div')({
  displayName: 'Stack',
  Component: ({children, shouldWrapChildren = false, ...elemProps}: StackProps, ref, Element) => {
    const validChildren = getValidChildren(children);
    return (
      <StyledStack as={Element} ref={ref} flexDirection="row" {...elemProps}>
        {shouldWrapChildren
          ? validChildren.map((child, index) => (
              <StackItem key={child.props.id || index}>{child}</StackItem>
            ))
          : validChildren}
      </StyledStack>
    );
  },
  subComponents: {
    Item: StackItem,
  },
});

export interface HStackProps extends StackProps {
  /**
   * sets the direction for the stack
   * @default "row"
   * */
  flexDirection?: 'row' | 'row-reverse';
}

export const HStack = createComponent('div')({
  displayName: 'HStack',
  Component: ({children, ...elemProps}: HStackProps, ref, Element) => {
    return (
      <Stack as={Element} ref={ref} flexDirection="row" {...elemProps}>
        {children}
      </Stack>
    );
  },
  subComponents: {
    Item: StackItem,
  },
});

export interface VStackProps extends StackProps {
  /**
   * sets the direction for the stack
   * @default "column"
   * */
  flexDirection?: 'column' | 'column-reverse';
}

export const VStack = createComponent('div')({
  displayName: 'VStack',
  Component: ({children, ...elemProps}: VStackProps, ref, Element) => {
    return (
      <Stack as={Element} ref={ref} flexDirection="column" {...elemProps}>
        {children}
      </Stack>
    );
  },
  subComponents: {
    Item: StackItem,
  },
});
