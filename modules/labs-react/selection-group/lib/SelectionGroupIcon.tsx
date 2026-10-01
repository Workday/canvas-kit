import {ExtractProps, createComponent} from '@workday/canvas-kit-react/common';
import {SystemIcon} from '@workday/canvas-kit-react/icon';
import {createStencil, handleCsProp} from '@workday/canvas-kit-styling';
import {
  checkCircleFillIcon,
  checkboxFillIcon,
  circleIcon,
  squareIcon,
} from '@workday/canvas-system-icons-web';

import {SelectionGroupMode} from './hooks/useSelectionGroupModel';

export interface SelectionGroupIconProps
  extends Omit<ExtractProps<typeof SystemIcon, never>, 'icon'> {
  /**
   * The selection mode of the group the item belongs to. A circle is used for `single` and a
   * square for `multiple`, matching the radio and checkbox controls each mode behaves like.
   */
  mode: SelectionGroupMode;
  /**
   * If true, the checked form of the icon is rendered.
   */
  selected: boolean;
}

export const selectionGroupIconStencil = createStencil({
  base: {
    flexShrink: 0,
  },
});

/**
 * The icon is always rendered, in both modes and in both selected states, so items never shift
 * width on selection. The shape communicates the mode and the checkmark communicates selection, so
 * selected state is never conveyed by color alone.
 */
const icons = {
  single: {selected: checkCircleFillIcon, unselected: circleIcon},
  multiple: {selected: checkboxFillIcon, unselected: squareIcon},
} as const;

export const SelectionGroupIcon = createComponent('span')({
  displayName: 'SelectionGroupIcon',
  Component: (
    {mode, selected, size = 'xs', ...elemProps}: SelectionGroupIconProps,
    ref,
    Element
  ) => (
    <SystemIcon
      as={Element}
      ref={ref}
      size={size}
      icon={icons[mode][selected ? 'selected' : 'unselected']}
      {...handleCsProp(elemProps, selectionGroupIconStencil())}
    />
  ),
});
