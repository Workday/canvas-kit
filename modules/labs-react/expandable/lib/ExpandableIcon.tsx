import React from 'react';

import {
  createSubcomponent,
  ExtractProps,
  filterOutProps,
  styled,
  StyledType,
} from '@workday/canvas-kit-react/common';
import {chevronUpIcon, chevronDownIcon} from '@workday/canvas-system-icons-web';
import {CanvasSystemIcon} from '@workday/design-assets-types';
import {useExpandableIcon} from './hooks/useExpandableIcon';
import {SystemIcon, systemIconStencil} from '@workday/canvas-kit-react/icon';
import {IconPositions} from '@workday/canvas-kit-react/button';
import {colors, space} from '@workday/canvas-kit-react/tokens';

import {useExpandableModel} from './hooks/useExpandableModel';
import {createStencil} from '@workday/canvas-kit-styling';
import {mergeStyles} from '@workday/canvas-kit-react/layout';

export interface ExpandableIconProps extends Omit<ExtractProps<typeof SystemIcon, never>, 'icon'> {
  /**
   * Icon to display from `@workday/canvas-accent-icons-web`
   * @default chevronUpIcon
   */
  icon?: CanvasSystemIcon;
  /**
   * Button icon positions can either be `start` or `end`.
   * If no value is provided, it defaults to `start`.
   * @default 'start'
   */
  iconPosition?: IconPositions;
}

export const expandableIconStencil = createStencil({
  extends: systemIconStencil,
  base: {
    padding: space.xxxs,
  },
  compound: [
    {
      modifiers: {position: 'end', isExpanded: false},
      styles: {
        marginLeft: 'auto',
        transform: 'rotate(180deg)',
        paddingRight: space.xs, // do I need these padding changes?
      },
    },
    {
      modifiers: {position: 'end', isExpanded: true},
      styles: {
        marginLeft: 'auto',
        paddingLeft: space.xs, // do I need these padding changes?
      },
    },
    {
      modifiers: {position: 'start', isExpanded: false},
      styles: {
        marginRight: space.xxs,
        transform: 'rotate(90deg)',
      },
    },
    {
      modifiers: {position: 'start', isExpanded: true},
      styles: {
        marginRight: space.xxs,
        transform: 'rotate(180deg)',
      },
    },
  ],
});

export const ExpandableIcon = createSubcomponent('span')({
  modelHook: useExpandableModel,
  elemPropsHook: useExpandableIcon,
})<ExpandableIconProps>(({icon, visible, iconPosition = 'start', ...elementProps}, Element) => {
  return (
    <SystemIcon
      as={Element}
      icon={icon || chevronUpIcon}
      {...mergeStyles(
        elementProps,
        expandableIconStencil({position: iconPosition, isExpanded: visible})
      )}
    />
  );
});
