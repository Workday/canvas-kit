import React from 'react';

import {createComponent, focusRing, styled, StyledType} from '@workday/canvas-kit-react/common';

import {OverflowTooltip} from '@workday/canvas-kit-react/tooltip';
import {Box, BoxProps, HStack} from '@workday/canvas-kit-react/layout';
import {PillAvatar} from './Pill.Avatar';
import {PillIcon} from './Pill.Icon';
import {PillCount} from './Pill.Count';
import {borderRadius, colors, space, type} from '@workday/canvas-kit-react/tokens';
import {AvatarProps} from '@workday/canvas-kit-react/avatar';
import {BasePill} from './BasePill';
import {CanvasSystemIcon} from '@workday/design-assets-types';

export interface PillProps extends BoxProps {
  variant?: 'removable' | 'readOnly' | 'interactive';
  maxWidth?: number;
  icon?: CanvasSystemIcon;
  count?: number;
  avatarProps?: AvatarProps;
  showAvatar?: boolean;
  children: React.ReactNode;
}

export const Pill = createComponent('span')({
  displayName: 'Pill',
  Component: (
    {
      children,
      maxWidth = 200,
      variant = 'interactive',
      showAvatar,
      icon,
      avatarProps,
      count,
      ...elemProps
    }: PillProps,
    ref,
    Element
  ) => {
    return (
      <>
        {variant === 'interactive' && (
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
        )}
        {variant === 'interactive' && (
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
        )}
      </>
    );
  },
  subComponents: {
    Avatar: PillAvatar,
    Count: PillCount,
    Icon: PillIcon,
  },
});
