import React from 'react';
import {createComponent} from '@workday/canvas-kit-react/common';
import {space} from '@workday/canvas-kit-react/tokens';
import {Box} from '@workday/canvas-kit-react/layout';
import {BasePill, BasePillProps} from './BasePill';
import {CanvasSystemIcon} from '@workday/design-assets-types';
import {AvatarProps} from '@workday/canvas-kit-react/avatar';
import {OverflowTooltip} from '@workday/canvas-kit-react/tooltip';

export interface InteractivePillProps extends BasePillProps {
  /**
   * The icon of the Button.
   * Note: not displayed at `small` size
   */
  icon?: CanvasSystemIcon;
  count?: number;
  avatarProps?: AvatarProps;
  showAvatar?: boolean;
}

export const InteractivePill = createComponent('span')({
  displayName: 'InteractivePill',
  Component: (
    {children, icon, count, avatarProps, showAvatar, ...elemProps}: InteractivePillProps,
    ref,
    Element
  ) => {
    return (
      <BasePill
        padding={!icon && showAvatar ? '8px' : '0px'}
        variant="interactive"
        ref={ref}
        as={Element}
        {...elemProps}
      >
        {icon && <BasePill.Icon margin="0px 4px" icon={icon} />}
        {showAvatar && <BasePill.Avatar {...avatarProps} />}
        <OverflowTooltip>
          <Box
            as="span"
            marginInlineStart={icon || showAvatar ? '4px' : '8px'}
            marginInlineEnd={count ? '4px' : '8px'}
            style={{whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis'}}
          >
            {children}
          </Box>
        </OverflowTooltip>

        {count && <BasePill.Count marginInlineStart="xxxs">{count}</BasePill.Count>}
      </BasePill>
    );
  },
});
