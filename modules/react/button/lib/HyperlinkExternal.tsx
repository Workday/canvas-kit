import * as React from 'react';
import {colors} from '@workday/canvas-kit-react/tokens';
import {
  styled,
  createComponent,
  StyledType,
  ElementComponent,
} from '@workday/canvas-kit-react/common';
import {HStack} from '@workday/canvas-kit-labs-react/layout';
import {extLinkIcon} from '@workday/canvas-system-icons-web';
import {SystemIcon, systemIconStyles} from '@workday/canvas-kit-react/icon';
import {Hyperlink, HyperlinkProps} from './Hyperlink';

export interface HyperlinkExternalProps extends HyperlinkProps {
  /**
   * Informs a screen reader user the link will open in a new window. It is read after the link text.
   * This value will need to be translated.
   * @default 'Opens link in new window'
   */
  iconLabel?: string;
}

const iconStyles = {
  ...systemIconStyles({fill: colors.blueberry400, fillHover: colors.blueberry400}),
  '&:hover': {
    ...systemIconStyles({fill: colors.blueberry500, fillHover: colors.blueberry500}),
  },
  '&:active': {
    ...systemIconStyles({fill: colors.blueberry600, fillHover: colors.blueberry600}),
  },
};

const Anchor = (styled(Hyperlink)<HyperlinkExternalProps & StyledType>({
  ...iconStyles,
}) as any) as ElementComponent<'a', HyperlinkExternalProps>;

const StyledSystemIcon = styled(SystemIcon)<StyledType>({
  ...iconStyles,
});

export const HyperlinkExternal = createComponent('a')({
  displayName: 'HyperlinkExternalProps',
  Component: (
    {children, iconLabel = 'Opens link in new window', ...elemProps}: HyperlinkExternalProps,
    ref
  ) => (
    <HStack
      as={Anchor}
      ref={ref}
      target="_blank"
      rel="noreferrer"
      spacing="xxxs"
      display="inline-flex"
      alignItems="center"
      {...elemProps}
    >
      <span>{children}</span>
      <StyledSystemIcon icon={extLinkIcon} role="img" aria-label={iconLabel} size="1em" />
    </HStack>
  ),
});
