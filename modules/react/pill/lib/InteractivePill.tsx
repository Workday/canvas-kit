import React from 'react';
import {createComponent} from '@workday/canvas-kit-react/common';
import {space} from '@workday/canvas-kit-react/tokens';
import {Box} from '@workday/canvas-kit-react/layout';
import {BasePill, BasePillProps} from './BasePill';
import {CanvasSystemIcon} from '@workday/design-assets-types';

export interface InteractivePillProps extends BasePillProps {
  iconPosition?: 'start' | 'end';
  /**
   * The icon of the Button.
   * Note: not displayed at `small` size
   */
  icon?: CanvasSystemIcon;
  count?: number;
  countPosition?: 'start' | 'end';
}

export const InteractivePill = createComponent('span')({
  displayName: 'InteractivePill',
  Component: (
    {
      children,
      variant,
      iconPosition = 'start',
      countPosition = 'start',
      icon,
      count,
      ...elemProps
    }: InteractivePillProps,
    ref,
    Element
  ) => {
    return (
      <BasePill padding="zero" variant="interactive" ref={ref} as={Element} {...elemProps}>
        {count && countPosition === 'start' && (
          <BasePill.Count marginInlineEnd="xxs">{count}</BasePill.Count>
        )}
        {icon && iconPosition === 'start' && (
          <BasePill.Icon padding="0 4px" iconPosition={iconPosition} icon={icon} />
        )}
        <Box
          as="span"
          paddingInlineStart={
            (!icon && iconPosition === 'start') || (!count && countPosition === 'start')
              ? '8px'
              : undefined
          }
        >
          {children}
        </Box>
        {icon && iconPosition === 'end' && (
          <BasePill.Icon padding="0 4px" iconPosition={iconPosition} icon={icon} />
        )}
        {count && countPosition === 'end' && (
          <BasePill.Count marginInlineStart="xxs">{count}</BasePill.Count>
        )}
      </BasePill>
    );
  },
});
