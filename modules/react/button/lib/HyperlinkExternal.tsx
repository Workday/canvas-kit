import * as React from 'react';
import {colors} from '@workday/canvas-kit-react/tokens';
import {styled, createComponent, StyledType} from '@workday/canvas-kit-react/common';
import {HStack} from '@workday/canvas-kit-labs-react/layout';
import {extLinkIcon} from '@workday/canvas-system-icons-web';
import {SystemIcon, systemIconStyles} from '@workday/canvas-kit-react/icon';
import {Hyperlink, HyperlinkProps} from './Hyperlink';

export interface HyperlinkExternalProps extends HyperlinkProps {
  iconLabel?: string;
}

const Anchor = styled(Hyperlink)<HyperlinkExternalProps & StyledType>({
  '&:not(:hover)': {
    ...systemIconStyles({fill: colors.blueberry400, fillHover: colors.blueberry400}),
  },
  '&:hover': {
    ...systemIconStyles({fill: colors.blueberry500, fillHover: colors.blueberry500}),
  },
  '&:active': {
    ...systemIconStyles({fill: colors.blueberry600, fillHover: colors.blueberry600}),
  },
});

export const HyperlinkExternal = createComponent('a')({
  displayName: 'HyperlinkExternalProps',
  Component: (
    {children, iconLabel = 'Opens link in new window', ...elemProps}: HyperlinkExternalProps,
    ref,
    Element
  ) => (
    <Anchor as={Element} ref={ref} target="_blank" rel="noreferrer" {...elemProps}>
      <HStack spacing="xxxs" display="inline-flex" alignItems="center">
        <span>{children}</span>
        <SystemIcon icon={extLinkIcon} role="img" aria-label={iconLabel} size="1em" />
      </HStack>
    </Anchor>
  ),
});
