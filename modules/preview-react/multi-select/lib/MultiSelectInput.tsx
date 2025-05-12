import React from 'react';

import {system} from '@workday/canvas-tokens-web';
import {caretDownSmallIcon, searchIcon} from '@workday/canvas-system-icons-web';

import {
  composeHooks,
  createElemPropsHook,
  createSubcomponent,
} from '@workday/canvas-kit-react/common';
import {createStencil, CSProps, handleCsProp} from '@workday/canvas-kit-styling';
import {InputGroup, TextInput} from '@workday/canvas-kit-react/text-input';
import {SystemIcon} from '@workday/canvas-kit-react/icon';
import {getCursor} from '@workday/canvas-kit-react/collection';
import {useComboboxInput, useComboboxInputConstrained} from '@workday/canvas-kit-react/combobox';

import {useMultiSelectModel} from './useMultiSelectModel';
import {MultiSelectedItemProps} from './MultiSelectedItem';
import {MultiSelectedList} from './MultiSelectedList';

export const multiSelectStencil = createStencil({
  base: {
    border: `1px solid ${system.color.border.input.default}`,
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: system.color.bg.default,
    borderRadius: system.shape.x1,
    boxSizing: 'border-box',
    minHeight: system.space.x10,
    transition: '0.2s box-shadow, 0.2s border-color',
    margin: 0, // Fix Safari

    '&:hover, &.hover': {
      borderColor: system.color.border.input.strong,
    },

    '&:focus-within': {
      borderColor: system.color.border.primary.default,
      boxShadow: `inset 0 0 0 1px ${system.color.border.primary.default}`,
    },

    // @ts-ignore
    '& [data-part="user-input"]': {
      ...system.type.subtext.large,
      backgroundColor: system.color.bg.transparent,
      borderRadius: system.shape.x1,

      // Remove the focus ring - it is handled at the container level
      border: 'none !important',
      boxShadow: 'none !important',
      outlineWidth: '0px',

      '&:where(:not([aria-autocomplete]))': {
        caretColor: 'transparent',
        cursor: 'default',
        '&::selection': {
          backgroundColor: 'transparent',
        },
      },
    },

    '&:has(:disabled, .disabled)': {
      borderColor: system.color.border.input.disabled,
      color: system.color.text.disabled,
    },

    '& :where([data-part="form-input"])': {
      position: 'absolute',
      top: system.space.zero,
      bottom: system.space.zero,
      left: system.space.zero,
      right: system.space.zero,
      opacity: system.opacity.zero,
      cursor: 'default',
      pointerEvents: 'none',
    },

    '& :where([data-part="separator"])': {
      backgroundColor: system.color.border.divider,
      height: 1,
      margin: `${system.space.zero} ${system.space.x2}`,
    },

    '& :where([data-part="list"])': {
      display: 'flex',
      gap: system.space.x2,
      padding: system.space.x2,
      flexWrap: 'wrap',
    },
  },
});

export const useMultiSelectInput = composeHooks(
  createElemPropsHook(useMultiSelectModel)((model, ref) => {
    return {
      onKeyDown(event: React.KeyboardEvent) {
        // Space bar key is hit and menu is open
        if (event.key === ' ' && model.state.visibility === 'visible') {
          const id = getCursor(model.state);
          // There are 2 modes. Search mode and navigation mode. Searching clears the cursor. Using
          // the down arrow enables the cursor and thus navigation mode.
          // - Navigation mode: toggle cursor item
          // - Search mode: enter a space in the search
          if (id) {
            model.events.select({id});
            event.preventDefault();
          }
        }

        if (
          (event.key === 'ArrowDown' || event.key === 'ArrowUp') &&
          model.state.visibility === 'hidden'
        ) {
          // prevent navigating vertically on the input
          model.events.show(event);
          event.preventDefault();
        }
      },
    };
  }),
  useComboboxInputConstrained,
  useComboboxInput
);

export interface MultiSelectInputProps
  extends CSProps,
    Pick<
      React.InputHTMLAttributes<HTMLInputElement>,
      'disabled' | 'className' | 'style' | 'aria-labelledby'
    >,
    Pick<MultiSelectedItemProps, 'removeLabel'> {}

export const MultiSelectInput = createSubcomponent(TextInput)({
  modelHook: useMultiSelectModel,
  elemPropsHook: useMultiSelectInput,
})<MultiSelectInputProps>(
  (
    {
      className,
      cs,
      style,
      'aria-labelledby': ariaLabelledBy,
      removeLabel,
      disabled,
      formInputProps,
      ...elemProps
    },
    Element,
    model
  ) => {
    return (
      <div {...handleCsProp({className, cs, style}, multiSelectStencil({}))}>
        <InputGroup>
          <InputGroup.Input data-part="form-input" {...formInputProps} />
          <InputGroup.Input
            data-part="user-input"
            as={Element}
            aria-labelledby={ariaLabelledBy}
            readOnly
            disabled={disabled}
            {...elemProps}
          />
          <InputGroup.InnerEnd pointerEvents="none">
            <SystemIcon icon={caretDownSmallIcon} />
          </InputGroup.InnerEnd>
        </InputGroup>
        <MultiSelectedList disabled={disabled} removeLabel={removeLabel} />
      </div>
    );
  }
);

export const MultiSelectSearchInput = createSubcomponent(TextInput)({
  modelHook: useMultiSelectModel,
  elemPropsHook: useMultiSelectInput,
})<MultiSelectInputProps>(
  (
    {
      className,
      cs,
      style,
      'aria-labelledby': ariaLabelledBy,
      removeLabel,
      formInputProps,
      ref,
      disabled,
      ...elemProps
    },
    Element,
    model
  ) => {
    return (
      <div {...handleCsProp({className, cs, style}, multiSelectStencil({}))}>
        <InputGroup>
          <InputGroup.InnerStart pointerEvents="none" width={system.space.x8}>
            <SystemIcon icon={searchIcon} size={system.space.x4} />
          </InputGroup.InnerStart>
          <InputGroup.Input
            data-part="form-input"
            placeholder={null as unknown as string} // do not use a placeholder for this input
            {...formInputProps}
          />
          <InputGroup.Input
            data-part="user-input"
            as={Element}
            aria-labelledby={ariaLabelledBy}
            disabled={disabled}
            {...elemProps}
          />
          <InputGroup.InnerEnd width={system.space.x4}>
            <InputGroup.ClearButton />
          </InputGroup.InnerEnd>
          <InputGroup.InnerEnd pointerEvents="none">
            <SystemIcon icon={caretDownSmallIcon} />
          </InputGroup.InnerEnd>
        </InputGroup>
        <MultiSelectedList removeLabel={removeLabel} disabled={disabled} />
      </div>
    );
  }
);
