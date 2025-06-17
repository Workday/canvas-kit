import styled from '@emotion/styled';
import {createComponent, StyledType} from '@workday/canvas-kit-react/common';
import {Box, BoxProps} from './Box';

import {flex, FlexStyleProps} from './utils/flex';

export type FlexProps = Omit<BoxProps, 'display'> & FlexStyleProps;

const StyledFlex = styled(Box)<StyledType & FlexProps>(
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
 * ```tsx
 * import { Flex, FlexProps } from '@workday/canvas-kit-react/layout';
 *
 * interface CardProps extends FlexProps {
 *   // card-specific props
 * }
 *
 * // `Card`'s default values are set using `FlexProps`
 * const Card = (props: CardProps) => (
 *   <Flex flexDirection="column" alignItems="flex-start" depth={1} space="m" {...props}>
 *     <h1>Hello, Card!</h1>
 *     <p>This card uses flexbox to set its layout.</p>
 *   </Flex>
 * );
 * ```
 */
export const Flex = createComponent('div')({
  displayName: 'Flex',
  Component: ({children, ...elemProps}: FlexProps, ref, Element) => {
    return (
      <StyledFlex as={Element} ref={ref} {...elemProps}>
        {children}
      </StyledFlex>
    );
  },
  subComponents: {
    Item: Box,
  },
});
