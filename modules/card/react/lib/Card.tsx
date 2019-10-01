import * as React from 'react';
import styled from 'react-emotion';
import {
  colors,
  depth as depthValues,
  type,
  spacing,
  borderRadius,
  CanvasDepthValue,
  CanvasSpacingValue,
} from '@workday/canvas-kit-react-core';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Heading at the top of the card.
   */
  heading?: React.ReactNode;

  /**
   * Heading ID for accessibility. Useful tie to an `aria-labelledby`
   */
  headingId?: string;

  /**
   * Padding of the card.
   */
  padding: CanvasSpacingValue;

  /**
   * Depth of the card.
   */
  depth: CanvasDepthValue;

  /**
   * Width of the card.
   */
  width?: number | string;

  /**
   * Height of the card.
   */
  height?: number | string;
}

const Box = styled('div')<CardProps>(
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

const Header = styled('h3')(type.h3, {
  marginBottom: spacing.m,
});

const Body = styled('div')(type.body);

export default class Card extends React.Component<CardProps> {
  public static defaultProps = {
    depth: depthValues[2],
    padding: spacing.l,
  };

  public render() {
    const {heading, headingId, ...elemProps} = this.props;

    return (
      <Box {...elemProps}>
        {heading && <Header id={headingId}>{heading}</Header>}
        <Body>{this.props.children}</Body>
      </Box>
    );
  }
}
