import {createComponent, forwardFitTokens} from '@workday/canvas-kit-react/common';
import {SystemIcon, systemIconStencil} from '@workday/canvas-kit-react/icon';
import {calc, createStencil, handleCsProp, px2rem} from '@workday/canvas-kit-styling';
import {extLinkIcon} from '@workday/canvas-system-icons-web';

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
      minWidth: calc.subtract(forwardFitTokens.system.size.xxs, px2rem(1)),
      marginInlineStart: calc.subtract(forwardFitTokens.system.gap.xs, px2rem(2)),
      '& > svg': {
        minWidth: forwardFitTokens.system.size.xxs,
        minHeight: forwardFitTokens.system.size.xxs,
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
