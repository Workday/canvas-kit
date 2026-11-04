import {
  isSelected,
  useListItemRegister,
  useListItemRovingFocus,
  useListItemSelect,
} from '@workday/canvas-kit-react/collection';
import {composeHooks, createElemPropsHook} from '@workday/canvas-kit-react/common';

import {useSelectionGroupModel} from './useSelectionGroupModel';

const useSelectionGroupItemProps = createElemPropsHook(useSelectionGroupModel)((
  model,
  _ref,
  elemProps: {'data-id'?: string} = {}
) => {
  const name = elemProps['data-id'] || '';

  return {
    role: model.state.mode === 'single' ? 'radio' : 'checkbox',
    'aria-checked': !!name && isSelected(name, model.state),
    type: 'button',
    // A single-select group is a radio group and uses a single roving tab stop. A multi-select
    // group is a checkbox group, where every item is its own tab stop, so the roving tabindex
    // applied by `useListItemRovingFocus` is overridden here.
    ...(model.state.mode === 'multiple' ? {tabIndex: 0} : {}),
  };
});

const useSelectionGroupItemDisabled = createElemPropsHook(useSelectionGroupModel)(({state}) => {
  return {
    // `useListItemRegister` resolves the item's own `disabled` prop and `nonInteractiveIds`, but
    // it doesn't know about the group-level `disabled`. The key is only added when the group is
    // disabled so that an `undefined` doesn't overwrite what `useListItemRegister` resolved. The
    // native `disabled` attribute already conveys the state to assistive technology, so no
    // `aria-disabled` is added alongside it.
    ...(state.disabled ? {disabled: true} : {}),
  };
});

export const useSelectionGroupItem = composeHooks(
  useListItemSelect,
  useListItemRovingFocus,
  useSelectionGroupItemProps,
  useListItemRegister,
  useSelectionGroupItemDisabled
);
