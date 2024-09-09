import React from 'react';

import {system} from '@workday/canvas-tokens-web';
import {caretDownSmallIcon} from '@workday/canvas-system-icons-web';

import {
  composeHooks,
  createElemPropsHook,
  createSubcomponent,
  useLocalRef,
} from '@workday/canvas-kit-react/common';
import {createStencil, CSProps, handleCsProp} from '@workday/canvas-kit-styling';
import {InputGroup} from '@workday/canvas-kit-react/text-input';
import {SystemIcon} from '@workday/canvas-kit-react/icon';
import {usePopupTarget} from '@workday/canvas-kit-react/popup';
import {useListActiveDescendant} from '@workday/canvas-kit-react/collection';
import {useComboboxListKeyboardHandler, useSetPopupWidth} from '@workday/canvas-kit-react/combobox';

import {useMultiSelectModel} from './useMultiSelectModel';

export const multiSelectStencil = createStencil({
  base: {
    border: `1px solid ${system.color.border.input.default}`,
    display: 'block',
    backgroundColor: system.color.bg.default,
    borderRadius: system.shape.x1,
    boxSizing: 'border-box',
    minHeight: 40,
    transition: '0.2s box-shadow, 0.2s border-color',
    margin: 0, // Fix Safari
    // '&::placeholder': {
    //   color: system.color.fg.strong,
    // },
    '&:hover, &.hover': {
      borderColor: system.color.border.input.strong,
    },
    // '&:focus-visible:not([disabled]), &.focus:not([disabled]), &:focus:not([disabled])': {

    // },
    // '&:disabled': {
    //   backgroundColor: inputColors.disabled.background,
    //   borderColor: inputColors.disabled.border,
    //   color: inputColors.disabled.text,
    //   '&::placeholder': {
    //     color: inputColors.disabled.text,
    //   },
    // },
    '&:focus-within': {
      borderColor: system.color.border.primary.default,
      boxShadow: `inset 0 0 0 1px ${system.color.border.primary.default}`,
    },
    '& [data-slot="input"]': {
      ...system.type.subtext.large,
      backgroundColor: system.color.bg.transparent,
      border: 'none',
      outlineWidth: '0px',
      padding: system.space.x2, // Compensate for border
      borderRadius: system.shape.x1,
    },
  },
});

export const useMultiSelectInput = composeHooks(
  createElemPropsHook(useMultiSelectModel)((model, ref) => {
    const {elementRef} = useLocalRef<HTMLInputElement>(ref as any);

    return {
      role: 'combobox',
      ref: elementRef,
      'aria-haspopup': 'menu' as const,
      // onClick(e: React.MouseEvent) {
      //   console.log('click', model.state.visibility);
      //   if (model.state.visibility === 'hidden') {
      //     model.events.show(e);
      //   } else if (model.state.visibility === 'visible') {
      //     model.events.hide(e);
      //   }
      // },
    };
  }),
  useSetPopupWidth,
  useListActiveDescendant,
  useComboboxListKeyboardHandler,
  usePopupTarget
);

export interface MultiSelectInputProps extends CSProps {}

export const MultiSelectInput = createSubcomponent('input')({
  displayName: 'MultiSelect.Input',
  modelHook: useMultiSelectModel,
  elemPropsHook: useMultiSelectInput,
})<MultiSelectInputProps>(({className, cs, ...elemProps}, Element) => {
  return (
    <InputGroup {...handleCsProp({className, cs}, multiSelectStencil({}))}>
      <InputGroup.Input data-slot="input" as={Element} {...elemProps} />
      <InputGroup.InnerEnd pointerEvents="none" top="0">
        <SystemIcon icon={caretDownSmallIcon} />
      </InputGroup.InnerEnd>
    </InputGroup>
  );
});
