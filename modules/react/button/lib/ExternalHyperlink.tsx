import {createComponent} from '@workday/canvas-kit-react/common';
import {SystemIcon, systemIconStencil} from '@workday/canvas-kit-react/icon';
import {calc, createStencil, handleCsProp, px2rem} from '@workday/canvas-kit-styling';
import {externalLinkIcon} from '@workday/canvas-system-icons-web';
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
      // This is still going to be `1em` to stay consistent with the font-size of the link.
      [systemIconStencil.vars.size]: '1em',
      width: calc.subtract('1em', px2rem(1)),
      minWidth: calc.subtract(system.legacy.size.xxxs, px2rem(1)),
      marginInlineStart: calc.subtract(system.legacy.gap.xs, px2rem(2)),
      '& > svg': {
        minWidth: system.legacy.size.xxxs,
        minHeight: system.legacy.size.xxxs,
      },
      ':dir(rtl)': {
        transform: 'rotate(270deg)',
      },
    },
  }),
});

/**
 * `ExternalHyperlink`s also have an `inverse` variant. Use this variant when you need to place the
 * link on a dark background such as `system.color.accent.info`.
 */
export const ExternalHyperlink = createComponent('a')({
  displayName: 'ExternalHyperlink',
  Component: (
    {children, iconLabel, variant, type = 'inline', ...elemProps}: ExternalHyperlinkProps,
    ref,
    Element
  ) => (
    <Element
      ref={ref}
      target="_blank"
      rel="noreferrer"
      {...handleCsProp(elemProps, externalHyperlinkStencil({variant, type}))}
    >
      <span data-part="external-hyperlink-children">{children}</span>
      <SystemIcon
        icon={externalLinkIcon}
        role="img"
        aria-label={iconLabel}
        {...externalHyperlinkStencil.parts.externalHyperlinkIcon}
      />
    </Element>
  ),
});
