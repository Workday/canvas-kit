import React from 'react';
import {createComponent} from '@workday/canvas-kit-react/common';
import {space} from '@workday/canvas-kit-react/tokens';
import {Box} from '@workday/canvas-kit-react/layout';
import {BasePill, BasePillProps} from './BasePill';
import {CanvasSystemIcon} from '@workday/design-assets-types';

export interface InteractivePillProps extends BasePillProps {
  /**
   * The icon of the Button.
   * Note: not displayed at `small` size
   */
  icon?: CanvasSystemIcon;
  count?: number;
}

export const InteractivePill = createComponent('span')({
  displayName: 'InteractivePill',
  Component: (
    {children, variant, icon, count, ...elemProps}: InteractivePillProps,
    ref,
    Element
  ) => {
    return (
      <BasePill padding="zero" variant="interactive" ref={ref} as={Element} {...elemProps}>
        {icon && <BasePill.Icon padding="0 4px" icon={icon} />}
        <BasePill.Avatar />
        <Box as="span" paddingInlineStart={!icon || !count ? '8px' : undefined}>
          {children}
        </Box>

        {count && <BasePill.Count marginInlineStart="xxs">{count}</BasePill.Count>}
      </BasePill>
    );
  },
});
