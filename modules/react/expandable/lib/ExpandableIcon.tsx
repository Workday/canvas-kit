import {IconPositions} from '@workday/canvas-kit-react/button';
import {ExtractProps, createSubcomponent} from '@workday/canvas-kit-react/common';
import {SystemIcon, systemIconStencil} from '@workday/canvas-kit-react/icon';
import {mergeStyles} from '@workday/canvas-kit-react/layout';
import {createStencil, cssVar, px2rem} from '@workday/canvas-kit-styling';
import {chevronUpIcon} from '@workday/canvas-system-icons-web';
import {system} from '@workday/canvas-tokens-web';
import {CanvasSystemIcon} from '@workday/design-assets-types';

import {useExpandableIcon} from './hooks/useExpandableIcon';
import {useExpandableModel} from './hooks/useExpandableModel';

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
    // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
    padding: cssVar(system.padding.xxs, system.space.x1),
  },
  modifiers: {
    isExpanded: {
      true: {},
      false: {},
    },
    position: {
      start: {},
      end: {},
      only: {},
    },
  },
  compound: [
    {
      modifiers: {position: 'end', isExpanded: false},
      styles: {
        marginInlineStart: 'auto',
        transform: 'rotate(180deg)',
        // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
        paddingInlineEnd: cssVar(system.padding.sm, system.space.x3),
      },
    },
    {
      modifiers: {position: 'end', isExpanded: true},
      styles: {
        marginInlineStart: 'auto',
        // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
        paddingInlineStart: cssVar(system.padding.sm, system.space.x3),
      },
    },
    {
      modifiers: {position: 'start', isExpanded: false},
      styles: {
        // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
        marginInlineEnd: cssVar(system.padding.xs, system.space.x2),
        transform: 'rotate(90deg)',
        ':dir(rtl)': {
          transform: 'rotate(-90deg)',
        },
      },
    },
    {
      modifiers: {position: 'start', isExpanded: true},
      styles: {
        // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
        marginInlineEnd: cssVar(system.padding.xs, system.space.x2),
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
      size={px2rem(16)}
      {...mergeStyles(
        elementProps,
        expandableIconStencil({position: iconPosition, isExpanded: visible})
      )}
    />
  );
});
