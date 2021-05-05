import * as React from 'react';
import styled from '@emotion/styled';
import {createComponent, StyledType} from '@workday/canvas-kit-react/common';
import {Box, BoxProps} from '@workday/canvas-kit-labs-react/common';

import {flex, FlexStyleProps as FlexBaseProps} from './utils/flex';

export type FlexStyleProps = BoxProps & FlexBaseProps;

const StyledFlex = styled(Box)<StyledType & FlexStyleProps>(
  {
    display: 'flex',
  },
  flex
);

/**
 * `Flex` is a low-level layout component that provides a common, ergonomic API for applying CSS flexbox styles.
 * It is highly flexible, and can be used on its own or to build other components.
 * `Flex` is built on top of `Box` and has access to all `BoxProps`.
 *
 * @example
 * import { Flex, FlexStyleProps } from '@workday/canvas-kit-labs-react/layout';
 *
 * interface CardProps extends FlexStyleProps {
 *   // card-specific props
 * }
 *
 * // `Card`'s default values are set using `FlexStyleProps`
 * const Card = (props: CardProps) => (
 *   <Flex flexDirection="column" alignItems="flex-start" depth={2} space="m" {...props}>
 *     <h1>Hello, Card!</h1>
 *     <p>This card uses flexbox to set its layout.</p>
 *   </Flex>
 * );
 *
 */
export const Flex = createComponent('div')({
  displayName: 'Flex',
  Component: ({children, ...elemProps}: FlexStyleProps, ref, Element) => {
    return (
      <StyledFlex as={Element} ref={ref} {...elemProps}>
        {children}
      </StyledFlex>
    );
  },
});
