import {IconPositions} from '@workday/canvas-kit-react/button';
import {ExtractProps, createSubcomponent} from '@workday/canvas-kit-react/common';
import {SystemIcon, systemIconStencil} from '@workday/canvas-kit-react/icon';
import {mergeStyles} from '@workday/canvas-kit-react/layout';
import {createStencil} from '@workday/canvas-kit-styling';
import {CanvasSystemIcon, chevronUpIcon} from '@workday/canvas-system-icons-web';
import {component, system} from '@workday/canvas-tokens-web';

import {useExpandableIcon} from './hooks/useExpandableIcon';
import {useExpandableModel} from './hooks/useExpandableModel';

export interface ExpandableIconProps extends Omit<ExtractProps<typeof SystemIcon, never>, 'icon'> {
  /**
   * Icon to display from `@workday/canvas-system-icons-web`
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
    padding: system.legacy.padding.xxs,
    [systemIconStencil.vars.color]: system.color.fg.default,
    [systemIconStencil.vars.size]: component.legacy.systemIcon.size.md,
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
        paddingInlineEnd: system.legacy.padding.sm,
      },
    },
    {
      modifiers: {position: 'end', isExpanded: true},
      styles: {
        marginInlineStart: 'auto',
        paddingInlineStart: system.legacy.padding.sm,
      },
    },
    {
      modifiers: {position: 'start', isExpanded: false},
      styles: {
        marginInlineEnd: system.legacy.padding.xs,
        transform: 'rotate(90deg)',
        ':dir(rtl)': {
          transform: 'rotate(-90deg)',
        },
      },
    },
    {
      modifiers: {position: 'start', isExpanded: true},
      styles: {
        marginInlineEnd: system.legacy.padding.xs,
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
