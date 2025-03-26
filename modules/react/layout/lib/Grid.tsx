import styled from '@emotion/styled';
import {createComponent, StyledType} from '@workday/canvas-kit-react/common';
import {Box, BoxProps} from './Box';

import {grid, GridStyleProps} from './utils/grid';

export type GridProps = Omit<BoxProps, 'display'> & GridStyleProps;
export type GridItemProps = BoxProps;

const StyledGrid = styled(Box)<StyledType & GridProps>(
  {
    display: 'grid',
  },
  grid
);

const GridItem = createComponent('div')({
  displayName: 'Grid.Item',
  Component: ({children, ...elemProps}: BoxProps, ref, Element) => {
    return (
      <Box as={Element} ref={ref} {...elemProps}>
        {children}
      </Box>
    );
  },
});

/**
 * `Grid` is a two-dimensional layout system for the web. It lets you lay content out in rows and columns.
 * It is highly flexible, and can be used on its own or to build other components.
 * `Grid` is built on top of `Box` and has access to all `BoxProps`.
 *
 * @example
 * ```tsx
 * import { Grid } from '@workday/canvas-kit-react/layout';
 *
 * interface CardProps extends GridProps {
 *   // card-specific props
 * }
 *
 * // `Card`'s default values are set using `GridProps`
 * const Card = (props: CardProps) => (
 *   <Grid gridAutoFlow="row" alignItems="start" depth={1} space="m" {...props}>
 *     <h1>Hello, Card!</h1>
 *     <p>This card uses grid to set its layout.</p>
 *   </Grid>
 * );
 *```
 */
export const Grid = createComponent('div')({
  displayName: 'Grid',
  Component: ({children, ...elemProps}: GridProps, ref, Element) => {
    return (
      <StyledGrid as={Element} ref={ref} {...elemProps}>
        {children}
      </StyledGrid>
    );
  },
  subComponents: {
    /**
     * `<Grid.Item />` is the child specific sub-component to `<Grid/>`. `<Grid.Item />` gets child specific props, whereas `<Grid./>` gets parent container props.
     *
     * @example
     * ```
     * import { Grid } from '@workday/canvas-kit-react/layout';
     * `Grid` is built on top of `Box` so `<Grid.Item />` gets all `BoxProps` as well.
     *
     * interface CardProps extends GridItemStyleProps {
     *   // card-specific props
     * }
     *
     * // `Card`'s default values are set using `GridItemStyleProps`
     * const Card = (props: CardProps) => (
     *   <Grid.Item gridRowStart="1" gridArea="Card" {...props}>
     *     <h1>Hello, Card!</h1>
     *     <p>This card uses grid child specific props to set its layout.</p>
     *   </Grid.Item>
     * );
     *```
     */

    Item: GridItem,
  },
});
