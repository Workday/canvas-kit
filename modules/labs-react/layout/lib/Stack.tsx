import * as React from 'react';
import styled from '@emotion/styled';
import {createComponent, StyledType} from '@workday/canvas-kit-react/common';
import {Flex, FlexProps} from './Flex';
import {getValidChildren} from './utils/getValidChildren';
import {stack, StackProps as StackBaseProps} from './utils/stack';

export type StackProps = StyledType & FlexProps & StackBaseProps;

const StackItem = createComponent('div')({
  displayName: 'Stack.Item',
  Component: ({children, ...elemProps}: FlexProps, ref, Element) => {
    return (
      <Flex
        as={Element}
        ref={ref}
        display="inline-block"
        flex="0 0 auto"
        minWidth={0}
        {...elemProps}
      >
        {children}
      </Flex>
    );
  },
});

const StyledStack = styled(Flex)<StackProps>(stack);

export const Stack = createComponent('div')<StackProps>({
  displayName: 'Stack',
  Component: ({children, shouldWrapChildren = false, ...elemProps}: StackProps, ref, Element) => {
    const validChildren = getValidChildren(children);
    return (
      <StyledStack as={Element} ref={ref} {...elemProps}>
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

export type HStackProps = Omit<StackProps, 'direction'> & {
  direction?: 'row' | 'row-reverse';
};

export const HStack = createComponent(Stack)<HStackProps>({
  displayName: 'HStack',
  Component: ({children, direction = 'row', ...elemProps}: HStackProps, ref, Element) => {
    return (
      <Stack as={Element} ref={ref} direction={direction} children={children} {...elemProps} />
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
