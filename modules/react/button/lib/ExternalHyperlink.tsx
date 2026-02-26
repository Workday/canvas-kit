import {createComponent} from '@workday/canvas-kit-react/common';
import {SystemIcon, systemIconStencil} from '@workday/canvas-kit-react/icon';
import {calc, createStencil, cssVar, handleCsProp, px2rem} from '@workday/canvas-kit-styling';
import {extLinkIcon} from '@workday/canvas-system-icons-web';
import {system} from '@workday/canvas-tokens-web';

import {HyperlinkProps, hyperlinkStencil} from './Hyperlink';

export interface ExternalHyperlinkProps extends HyperlinkProps {
  /**
   * Informs a screen reader user the link will open in a new window. It is read after the link text.
   * This value will need to be translated.
   */
  iconLabel?: string;
}

export const externalHyperlinkStencil = createStencil({
  extends: hyperlinkStencil,
  parts: {
    externalHyperlinkIcon: 'external-hyperlink-icon',
  },
  base: ({externalHyperlinkIconPart}) => ({
    [externalHyperlinkIconPart]: {
      verticalAlign: 'text-top',
      [systemIconStencil.vars.color]: 'currentColor',
      [systemIconStencil.vars.size]: '1em',
      width: calc.subtract('1em', px2rem(1)),
      // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
      minWidth: calc.subtract(cssVar(system.size.xxxs, system.space.x4), px2rem(1)),
      // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
      marginInlineStart: calc.subtract(system.space.x1, px2rem(2)),
      '& > svg': {
        // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
        minWidth: cssVar(system.size.xxxs, system.space.x4),
        // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
        minHeight: cssVar(system.size.xxxs, system.space.x4),
      },
      ':dir(rtl)': {
        transform: 'rotate(270deg)',
      },
    },
  }),
});

/**
 * `ExternalHyperlink`s also have an `inverse` variant. Use this variant when you need to place the
 * link on a dark or colorful background such as `blueberry400`.
 */
export const ExternalHyperlink = createComponent('a')({
  displayName: 'ExternalHyperlink',
  Component: (
    {children, iconLabel, variant, ...elemProps}: ExternalHyperlinkProps,
    ref,
    Element
  ) => (
    <Element
      ref={ref}
      target="_blank"
      rel="noreferrer"
      {...handleCsProp(elemProps, externalHyperlinkStencil({variant}))}
    >
      <span data-part="external-hyperlink-children">{children}</span>
      <SystemIcon
        icon={extLinkIcon}
        role="img"
        aria-label={iconLabel}
        {...externalHyperlinkStencil.parts.externalHyperlinkIcon}
      />
    </Element>
  ),
});
