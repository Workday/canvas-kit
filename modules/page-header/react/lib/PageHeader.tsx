import * as React from 'react';
import styled from '@emotion/styled';
import {colors, spacing, type} from '@workday/canvas-kit-react-core';
import {IconButton, IconButtonProps} from '@workday/canvas-kit-react-button';

export interface PageHeaderProps {
  title: string;
  capWidth: boolean;
  breakpoint?: number;
}

const Header = styled('header')({
  height: 84,
  backgroundImage: colors.gradients.blueberry,
  color: colors.frenchVanilla100,
  WebkitFontSmoothing: 'antialiased',
  MozOsxFontSmoothing: 'grayscale',
});

const Container = styled('div')<Pick<PageHeaderProps, 'breakpoint' | 'capWidth'>>(
  {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: '100%',
    overflow: 'hidden',
    padding: `0 ${spacing.s}`,
  },
  ({breakpoint}) => ({
    [`@media (min-width: ${breakpoint}px)`]: {
      padding: `0 ${spacing.xl}`,
    },
  }),
  ({capWidth}) =>
    capWidth && {
      boxSizing: 'border-box',
      margin: '0 auto',
      width: '100%',
      maxWidth: 1440,
    }
);

const Title = styled('h2')({
  ...type.h1,
  color: colors.frenchVanilla100,
  padding: `${spacing.xs} 0`,
  margin: 0,
  'white-space': 'nowrap',
});

const IconList = styled('div')({
  display: 'flex',
  marginLeft: spacing.l,

  '> *:not(:last-child)': {
    marginRight: spacing.xxs,
  },
});

export default class PageHeader extends React.Component<PageHeaderProps> {
  static defaultProps = {
    title: '',
    capWidth: false,
    breakpoint: 768,
  };

  private renderChildren(children: React.ReactNode): React.ReactNode {
    return React.Children.map(children, child => {
      if (!React.isValidElement(child)) {
        return child;
      }

      if (child.type === IconButton) {
        return React.cloneElement(child as React.ReactElement<IconButtonProps>, {
          variant: IconButton.Variant.Inverse,
        });
      }

      return child;
    });
  }

  public render() {
    // TODO: Standardize on prop spread location (see #150)
    const {title, children, breakpoint, capWidth, ...elemProps} = this.props;

    return (
      <Header>
        <Container breakpoint={breakpoint} capWidth={capWidth} {...elemProps}>
          <Title>{title}</Title>
          <IconList>{this.renderChildren(children)}</IconList>
        </Container>
      </Header>
    );
  }
}
