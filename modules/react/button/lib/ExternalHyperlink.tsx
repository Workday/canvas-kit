import React from 'react';
import {styled, createComponent, StyledType} from '@workday/canvas-kit-react/common';
import {extLinkIcon} from '@workday/canvas-system-icons-web';
import {SystemIcon, systemIconStyles} from '@workday/canvas-kit-react/icon';
import {Hyperlink, HyperlinkProps} from './Hyperlink';

export interface ExternalHyperlinkProps extends HyperlinkProps {
  /**
   * Informs a screen reader user the link will open in a new window. It is read after the link text.
   * This value will need to be translated.
   * @default 'Opens link in new window'
   */
  iconLabel?: string;
}

const iconStyles = {
  ...systemIconStyles({fill: 'currentColor', fillHover: 'currentColor'}),
};

const Anchor = styled(Hyperlink)<ExternalHyperlinkProps & StyledType>({
  ...iconStyles,
  display: 'inline-flex',
  flexDirection: 'row',
  alignItems: 'center',
});

const iconSize = '1em';

const StyledSystemIcon = styled(SystemIcon)<StyledType>({
  ...iconStyles,
  width: `calc(${iconSize} - 1px)`,
  marginLeft: '2px',
});

export const ExternalHyperlink = createComponent('a')({
  displayName: 'ExternalHyperlink',
  Component: (
    {
      children,
      variant,
      iconLabel = 'Opens link in new window',
      ...elemProps
    }: ExternalHyperlinkProps,
    ref
  ) => (
    <Anchor ref={ref} target="_blank" rel="noreferrer" variant={variant} {...elemProps}>
      <span>{children}</span>
      <StyledSystemIcon icon={extLinkIcon} role="img" aria-label={iconLabel} size={iconSize} />
    </Anchor>
  ),
});
