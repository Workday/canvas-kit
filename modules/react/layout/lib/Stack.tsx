import * as React from 'react';
import styled from '@emotion/styled';
import {createComponent, StyledType} from '@workday/canvas-kit-react/common';
import {Box, BoxProps} from './Box';
import {Flex, FlexProps} from './Flex';
import {getValidChildren} from './utils/getValidChildren';
import {stack, StackStyleProps} from './utils/stack';

/**
 * ### ⚠️ Stack has been soft-deprecated and will be removed in v9 ⚠️
 * - If you would like resolve this now, run this codemod: `npx @workday/canvas-kit-codemod softDeprecate/Stack [path]`
 * - You can learn more about the codemod package [here](https://github.com/Workday/canvas-kit/tree/master/modules/codemod)
 * - There is more context [here]() as to why this decision was made
 * @deprecated
 */
export type StackProps = FlexProps & StackStyleProps;

/**
 * ### ⚠️ Stack has been soft-deprecated and will be removed in v9 ⚠️
 * - If you would like resolve this now, run this codemod: `npx @workday/canvas-kit-codemod softDeprecate/Stack [path]`
 * - You can learn more about the codemod package [here](https://github.com/Workday/canvas-kit/tree/master/modules/codemod)
 * - There is more context [here]() as to why this decision was made
 * @deprecated
 */
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

/**
 * ### ⚠️ Stack has been soft-deprecated and will be removed in v9 ⚠️
 * - If you would like resolve this now, run this codemod: `npx @workday/canvas-kit-codemod softDeprecate/Stack [path]`
 * - You can learn more about the codemod package [here](https://github.com/Workday/canvas-kit/tree/master/modules/codemod)
 * - There is more context [here]() as to why this decision was made
 * @deprecated
 */
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

/**
 * ### ⚠️ Stack has been soft-deprecated and will be removed in v9 ⚠️
 * - If you would like resolve this now, run this codemod: `npx @workday/canvas-kit-codemod softDeprecate/Stack [path]`
 * - You can learn more about the codemod package [here](https://github.com/Workday/canvas-kit/tree/master/modules/codemod)
 * - There is more context [here]() as to why this decision was made
 * @deprecated
 */
export interface HStackProps extends StackProps {
  /**
   * sets the direction for the stack
   * @default "row"
   * */
  flexDirection?: 'row' | 'row-reverse';
}

/**
 * ### ⚠️ HStack has been soft-deprecated and will be removed in v9 ⚠️
 * - If you would like resolve this now, run this codemod: `npx @workday/canvas-kit-codemod softDeprecate/Stack [path]`
 * - You can learn more about the codemod package [here](https://github.com/Workday/canvas-kit/tree/master/modules/codemod)
 * - There is more context [here]() as to why this decision was made
 * @deprecated
 */
export const HStack = createComponent('div')({
  displayName: 'HStack',
  Component: ({children, flexDirection = 'row', ...elemProps}: HStackProps, ref, Element) => {
    return (
      <Stack as={Element} ref={ref} flexDirection={flexDirection} {...elemProps}>
        {children}
      </Stack>
    );
  },
  subComponents: {
    Item: StackItem,
  },
});

/**
 * ### ⚠️ Stack has been soft-deprecated and will be removed in v9 ⚠️
 * - If you would like resolve this now, run this codemod: `npx @workday/canvas-kit-codemod softDeprecate/Stack [path]`
 * - You can learn more about the codemod package [here](https://github.com/Workday/canvas-kit/tree/master/modules/codemod)
 * - There is more context [here]() as to why this decision was made
 * @deprecated
 */
export interface VStackProps extends StackProps {
  /**
   * sets the direction for the stack
   * @default "column"
   * */
  flexDirection?: 'column' | 'column-reverse';
}

/**
 * ### ⚠️ VStack has been soft-deprecated and will be removed in v9 ⚠️
 * - If you would like resolve this now, run this codemod: `npx @workday/canvas-kit-codemod softDeprecate/Stack [path]`
 * - You can learn more about the codemod package [here](https://github.com/Workday/canvas-kit/tree/master/modules/codemod)
 * - There is more context [here]() as to why this decision was made
 * @deprecated
 */
export const VStack = createComponent('div')({
  displayName: 'VStack',
  Component: ({children, flexDirection = 'column', ...elemProps}: VStackProps, ref, Element) => {
    return (
      <Stack as={Element} ref={ref} flexDirection={flexDirection} {...elemProps}>
        {children}
      </Stack>
    );
  },
  subComponents: {
    Item: StackItem,
  },
});
