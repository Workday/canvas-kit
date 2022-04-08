import React from 'react';
import {createComponent, focusRing, styled} from '@workday/canvas-kit-react/common';
import {Box} from '@workday/canvas-kit-react/layout';
import {BasePill, BasePillProps} from './BasePill';
import {CanvasSystemIcon} from '@workday/design-assets-types';
import {AvatarProps} from '@workday/canvas-kit-react/avatar';
import {xSmallIcon} from '@workday/canvas-system-icons-web';
import {OverflowTooltip} from '@workday/canvas-kit-react/tooltip';
import {colors, borderRadius} from '@workday/canvas-kit-react/tokens';

export interface RemovablePillProps extends BasePillProps {
  /**
   * The icon of the Button.
   * Note: not displayed at `small` size
   */
  icon?: CanvasSystemIcon;
  avatarProps?: AvatarProps;
  showAvatar?: boolean;
}

const StyledRemoveContainer = styled('button')({
  height: 20,
  width: 28,
  outline: 'none',
  background: 'none',
  border: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: borderRadius.s,
  cursor: 'pointer',
  '&:focus': {
    ...focusRing(),
  },
});

export const RemovablePill = createComponent('span')({
  displayName: 'RemovablePill',
  Component: (
    {children, icon = xSmallIcon, avatarProps, showAvatar, ...elemProps}: RemovablePillProps,
    ref,
    Element
  ) => {
    return (
      <BasePill
        paddingInlineStart={showAvatar ? '8px' : '0px'}
        variant="removable"
        backgroundColor={colors.soap300}
        ref={ref}
        as={Element}
        {...elemProps}
      >
        {showAvatar && <BasePill.Avatar {...avatarProps} />}
        <OverflowTooltip>
          <Box
            as="span"
            marginInlineStart={showAvatar ? '4px' : '8px'}
            marginInlineEnd={'4px'}
            style={{whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis'}}
          >
            {children}
          </Box>
        </OverflowTooltip>
        <StyledRemoveContainer>
          <BasePill.Icon margin="0px 4px" icon={icon} />
        </StyledRemoveContainer>
      </BasePill>
    );
  },
});
