import {createSubcomponent, ExtractProps} from '@workday/canvas-kit-react/common';
import {chevronUpIcon} from '@workday/canvas-system-icons-web';
import {CanvasSystemIcon} from '@workday/design-assets-types';
import {useExpandableIcon} from './hooks/useExpandableIcon';
import {SystemIcon, systemIconStencil} from '@workday/canvas-kit-react/icon';
import {IconPositions} from '@workday/canvas-kit-react/button';
import {useExpandableModel} from './hooks/useExpandableModel';
import {createStencil, px2rem} from '@workday/canvas-kit-styling';
import {mergeStyles} from '@workday/canvas-kit-react/layout';
import {system} from '@workday/canvas-tokens-web';

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
    height: system.space.x8,
    width: system.space.x8,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  modifiers: {
    isExpanded: {
      true: {},
      false: {},
    },
    position: {
      start: {},
      end: {
        display: 'flex',
        justifyContent: 'flex-start',
        flex: 1,
      },
      only: {},
    },
  },
  compound: [
    {
      modifiers: {position: 'end', isExpanded: false},
      styles: {
        transform: 'rotate(180deg)',
      },
    },
    {
      modifiers: {position: 'end', isExpanded: true},
      styles: {
        justifyContent: 'flex-end',
      },
    },
    {
      modifiers: {position: 'start', isExpanded: false},
      styles: {
        transform: 'rotate(90deg)',
        ':dir(rtl)': {
          transform: 'rotate(-90deg)',
        },
      },
    },
    {
      modifiers: {position: 'start', isExpanded: true},
      styles: {
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
      size={px2rem(20)}
      {...mergeStyles(
        elementProps,
        expandableIconStencil({position: iconPosition, isExpanded: visible})
      )}
    />
  );
});
