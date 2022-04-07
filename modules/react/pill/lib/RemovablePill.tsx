import React from 'react';
import {createComponent} from '@workday/canvas-kit-react/common';
import {Box} from '@workday/canvas-kit-react/layout';
import {BasePill, BasePillProps} from './BasePill';
import {CanvasSystemIcon} from '@workday/design-assets-types';
import {AvatarProps} from '@workday/canvas-kit-react/avatar';
import {xSmallIcon} from '@workday/canvas-system-icons-web';
import {BaseButton} from '@workday/canvas-kit-react/button';

export interface RemovablePillProps extends BasePillProps {
  /**
   * The icon of the Button.
   * Note: not displayed at `small` size
   */
  icon?: CanvasSystemIcon;
  avatarProps?: AvatarProps;
  showAvatar?: boolean;
}

export const RemovablePill = createComponent('span')({
  displayName: 'RemovablePill',
  Component: (
    {children, icon = xSmallIcon, avatarProps, showAvatar, ...elemProps}: RemovablePillProps,
    ref,
    Element
  ) => {
    return (
      <BasePill
        padding={!icon && showAvatar ? '8px' : '0px'}
        variant="removable"
        ref={ref}
        as={Element}
        {...elemProps}
      >
        {showAvatar && <BasePill.Avatar {...avatarProps} />}
        <Box
          as="span"
          marginInlineStart={icon || showAvatar ? '4px' : '8px'}
          marginInlineEnd={'8px'}
        >
          {children}
        </Box>
        <button>
          <BasePill.Icon margin="0px 4px" icon={icon} />
        </button>
      </BasePill>
    );
  },
});
