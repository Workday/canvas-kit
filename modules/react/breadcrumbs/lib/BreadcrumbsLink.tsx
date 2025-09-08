import {createComponent} from '@workday/canvas-kit-react/common';
import {Hyperlink, HyperlinkProps} from '@workday/canvas-kit-react/button';
import {OverflowTooltip, OverflowTooltipProps} from '@workday/canvas-kit-react/tooltip';
import {system} from '@workday/canvas-tokens-web';
import {createStencil, handleCsProp, px2rem} from '@workday/canvas-kit-styling';

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
  maxWidth?: number;
  tooltipProps?: OverflowTooltipProps | {};
}

export const breadcrumbsLinkStencil = createStencil({
  vars: {
    maxWidth: '',
  },
  base: ({maxWidth}) => ({
    ...system.type.subtext.large,
    textOverflow: 'ellipsis',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    maxWidth,
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
          variant="standalone"
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
