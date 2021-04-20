import * as React from 'react';
import styled from '@emotion/styled';
import isPropValid from '@emotion/is-prop-valid';
import {
  colors,
  depth as depthValues,
  space,
  borderRadius,
  CanvasDepthValue,
  CanvasSpaceValues,
} from '@workday/canvas-kit-react/tokens';
import {StyledType, createComponent} from '@workday/canvas-kit-react/common';

import {CardHeading} from './CardHeading';
import {CardBody} from './CardBody';

export interface CardProps {
  /**
   * The padding of the Card. Imported from `@workday/canvas-kit-react/tokens`.
   * @default space.l
   */
  padding?: CanvasSpaceValues;

  /**
   * The depth of the Card. Imported from `@workday/canvas-kit-react/tokens`.
   * @default depth[2]
   */
  depth?: CanvasDepthValue;

  /**
   * The width of the Card.
   */
  width?: number | string;

  /**
   * The height of the Card.
   */
  height?: number | string;

  /**
   * Children of the Card. Should contain a `<Card.Body>` and an optional `<Card.Heading>`
   */
  children?: React.ReactNode;
}

const Box = styled('div', {
  shouldForwardProp: prop => isPropValid(prop) && prop !== 'width' && prop !== 'height',
})<CardProps & StyledType>(
  {
    backgroundColor: colors.frenchVanilla100,
    border: `1px solid ${colors.soap500}`,
    borderRadius: borderRadius.l,
    boxSizing: 'border-box',
  },
  ({depth}) => depth,
  ({padding}) => ({padding}),
  ({width}) => width && {width},
  ({height}) => height && {height}
);

export const Card = createComponent('div')({
  displayName: 'Card',
  Component: (
    {depth = depthValues[2], children, padding = space.l, ...elemProps}: CardProps,
    ref,
    Element
  ) => {
    return (
      <Box ref={ref} as={Element} depth={depth} padding={padding} {...elemProps}>
        {children}
      </Box>
    );
  },
  subComponents: {
    Heading: CardHeading,
    Body: CardBody,
  },
});
