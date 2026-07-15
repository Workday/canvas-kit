import {Hyperlink, HyperlinkProps} from '@workday/canvas-kit-react/button';
import {createComponent} from '@workday/canvas-kit-react/common';
import {OverflowTooltip, OverflowTooltipProps} from '@workday/canvas-kit-react/tooltip';
import {createStencil, handleCsProp, px2rem} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';

export interface BreadcrumbsLinkProps extends HyperlinkProps {
  /**
   * The href url of the anchor tag
   */
  href: string;
  /**
   * The max-width of the link text
   *
   * @default 350px
   */
  maxWidth?: string | number;
  tooltipProps?: OverflowTooltipProps | {};
}

export const breadcrumbsLinkStencil = createStencil({
  vars: {
    maxWidth: '',
  },
  base: ({maxWidth}) => ({
    fontFamily: system.fontFamily.default,
    fontSize: system.legacy.fontSize.subtext.lg,
    fontWeight: system.fontWeight.normal,
    letterSpacing: system.legacy.letterSpacing.subtext.lg,
    lineHeight: system.legacy.lineHeight.subtext.lg,
    color: system.color.fg.default,
    textOverflow: 'ellipsis',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    maxWidth,
    '&:hover, &.hover': {
      color: system.color.fg.strong,
      backgroundColor: system.legacy.color.surface.overlay.hover.default,
      textDecoration: 'underline',
    },
    '&:active, &.active': {
      color: system.color.fg.strong,
      backgroundColor: system.legacy.color.surface.overlay.pressed.default,
    },
  }),
});

export const BreadcrumbsLink = createComponent('a')({
  displayName: 'Breadcrumbs.Link',
  Component: (
    {maxWidth = 350, href, tooltipProps = {}, children, ...elemProps}: BreadcrumbsLinkProps,
    ref,
    Element
  ) => {
    return (
      <OverflowTooltip {...tooltipProps}>
        <Hyperlink
          href={href}
          ref={ref}
          as={Element}
          role="link"
          variant="secondary"
          type="standalone"
          {...handleCsProp(
            elemProps,
            breadcrumbsLinkStencil({
              maxWidth: typeof maxWidth === 'number' ? px2rem(maxWidth) : maxWidth,
            })
          )}
        >
          {children}
        </Hyperlink>
      </OverflowTooltip>
    );
  },
});
