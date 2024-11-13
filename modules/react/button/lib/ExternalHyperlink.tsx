import React from 'react';

import {createComponent} from '@workday/canvas-kit-react/common';
import {SystemIcon} from '@workday/canvas-kit-react/icon';
import {calc, createStencil, createStyles, handleCsProp, px2rem} from '@workday/canvas-kit-styling';

import {extLinkIcon} from '@workday/canvas-system-icons-web';
import {system} from '@workday/canvas-tokens-web';

import {hyperlinkStencil, HyperlinkProps} from './Hyperlink';

export interface ExternalHyperlinkProps extends HyperlinkProps {
  /**
   * Informs a screen reader user the link will open in a new window. It is read after the link text.
   * This value will need to be translated.
   * @default 'Opens link in new window'
   */
  iconLabel?: string;
}

const iconSize = '1em';
const minIconSize = system.space.x4;

const externalHyperlinkStencil = createStencil({
  extends: hyperlinkStencil,
  base: {
    display: 'inline-flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
});

const externalHyperlinkIconStyles = createStyles({
  width: calc.subtract(iconSize, px2rem(1)),
  minWidth: calc.subtract(minIconSize, px2rem(1)),
  marginInlineStart: px2rem(2),
  '& svg': {
    minWidth: minIconSize,
    minHeight: minIconSize,
  },
});

/**
 * `ExternalHyperlink`s also have an `inverse` variant. Use this variant when you need to place the
 * link on a dark or colorful background such as `blueberry400`.
 */
export const ExternalHyperlink = createComponent('a')({
  displayName: 'ExternalHyperlink',
  Component: (
    {
      variant,
      children,
      iconLabel = 'Opens link in new window',
      ...elemProps
    }: ExternalHyperlinkProps,
    ref,
    Element
  ) => (
    <Element
      ref={ref}
      target="_blank"
      rel="noreferrer"
      {...handleCsProp(elemProps, externalHyperlinkStencil({variant}))}
    >
      <span>{children}</span>
      <SystemIcon
        icon={extLinkIcon}
        role="img"
        aria-label={iconLabel}
        size={iconSize}
        color="currentColor"
        cs={externalHyperlinkIconStyles}
      />
    </Element>
  ),
});
