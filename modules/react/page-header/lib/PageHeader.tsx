import * as React from 'react';
import styled from '@emotion/styled';
import {colors, gradients, space, type} from '@workday/canvas-kit-react/tokens';
import {IconButton, IconButtonProps} from '@workday/canvas-kit-react/button';

/**
 * ### Deprecated Page Header Props
 *
 * As of Canvas Kit v6, PageHeader is being deprecated
 * in favor of the Header provided by UI-Platform.
 * It will be completely removed in v7. Please see the
 * [migration guide](https://workday.github.io/canvas-kit/?path=/story/welcome-migration-guides-v5-0--page#component-promotions)
 * for more information.
 */
export interface PageHeaderProps {
  /**
   * The text of the PageHeader title.
   */
  title: string;
  /**
   * If true, center the PageHeader content and make the PageHeader responsive in all three breakpoints. Enable this for PageHeaders in non-product pages.
   * @default false
   */
  capWidth?: boolean;
  /**
   * The breakpoint (in `px`) at which the PageHeader's container spacing increases from size `s` to size `xl`.
   * @default 768
   */
  breakpoint?: number;
}

const Header = styled('header')({
  height: 84,
  backgroundImage: gradients.blueberry,
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
    padding: `0 ${space.s}`,
  },
  ({breakpoint}) => ({
    [`@media (min-width: ${breakpoint}px)`]: {
      padding: `0 ${space.xl}`,
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
  ...type.levels.heading.medium,
  color: colors.frenchVanilla100,
  padding: `${space.xs} 0`,
  margin: 0,
  whiteSpace: 'nowrap',
});

const IconList = styled('div')({
  display: 'flex',
  marginLeft: space.l,

  '> *:not(:last-child)': {
    marginRight: space.xxs,
  },
});

/**
 * ### Deprecated Page Header
 *
 * As of Canvas Kit v6, this component is being deprecated
 * in favor of the Header provided by UI-Platform.
 * It will be completely removed in v7. Please see the
 * [migration guide](https://workday.github.io/canvas-kit/?path=/story/welcome-migration-guides-v5-0--page#component-promotions)
 * for more information.
 */
export default class PageHeader extends React.Component<PageHeaderProps> {
  componentDidMount() {
    console.warn(
      `This component is being deprecated and will be removed in Canvas Kit V7.\n
      Please migrate to the Header component provided by UI-Platform. For more information, please see the V6 migration guide:\n
      https://workday.github.io/canvas-kit/?path=/story/welcome-migration-guides-v5-0--page#component-promotions
      `
    );
  }

  private renderChildren(children: React.ReactNode): React.ReactNode {
    return React.Children.map(children, child => {
      if (!React.isValidElement(child)) {
        return child;
      }

      if (child.type === IconButton) {
        return React.cloneElement(child as React.ReactElement<IconButtonProps>, {
          variant: 'inverse',
        });
      }

      return child;
    });
  }

  public render() {
    // TODO: Standardize on prop spread location (see #150)
    const {title = '', breakpoint = 768, capWidth = false, children, ...elemProps} = this.props;

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
