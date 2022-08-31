import React from 'react';
import {CSSObject} from '@emotion/styled';
import {createComponent, ellipsisStyles, styled} from '@workday/canvas-kit-react/common';
import {Hyperlink} from '@workday/canvas-kit-react/button';
import {OverflowTooltip, OverflowTooltipProps} from '@workday/canvas-kit-react/tooltip';
import {Text} from '@workday/canvas-kit-react/text';

export interface BreadcrumbsLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  /**
   * The href url of the anchor tag
   */
  href: string;
  /**
   * The max-width of the link text
   *
   * @default 350px
   */
  maxWidth?: number;
  /**
   * A handler function for overriding hard-redirects with links
   */
  onAction?: (href: string) => void;
  tooltipProps?: OverflowTooltipProps | {};
}

type StyledLinkProps = Pick<BreadcrumbsLinkProps, 'maxWidth' | 'href'>;

// default max-width for truncating text
const DEFAULT_MAX_WIDTH = 350;

export const truncateStyles = (maxWidth: number = DEFAULT_MAX_WIDTH): CSSObject => ({
  maxWidth,
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
});

const StyledLink = styled(Text.as(Hyperlink))(({maxWidth}: StyledLinkProps) => ({
  maxWidth,
  ...ellipsisStyles,
}));

export const BreadcrumbsLink = createComponent('a')({
  displayName: 'Breadcrumbs.Link',
  Component: ({
    maxWidth,
    onAction,
    onClick,
    href,
    tooltipProps = {},
    children,
    ...props
  }: BreadcrumbsLinkProps) => {
    const handleClick = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
      event.preventDefault();
      // allow an override to the hard redirect
      if (onAction) {
        onAction(href);
      } else {
        // default to hard redirecting
        window.location.href = href;
      }
      // don't block the onClick event if it's provided
      if (onClick) {
        onClick(event);
      }
    };

    return (
      <OverflowTooltip {...tooltipProps}>
        <StyledLink
          typeLevel="subtext.large"
          color="blueberry400"
          maxWidth={maxWidth}
          href={href}
          role="link"
          onClick={handleClick}
          {...props}
        >
          {children}
        </StyledLink>
      </OverflowTooltip>
    );
  },
});
