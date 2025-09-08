import React from 'react';

import {brand, system} from '@workday/canvas-tokens-web';
import {caretDownSmallIcon, searchIcon} from '@workday/canvas-system-icons-web';

import {
  ErrorType,
  composeHooks,
  createElemPropsHook,
  createSubcomponent,
} from '@workday/canvas-kit-react/common';
import {createStencil, CSProps, handleCsProp, px2rem, calc} from '@workday/canvas-kit-styling';
import {InputGroup, TextInput, textInputStencil} from '@workday/canvas-kit-react/text-input';
import {SystemIcon, systemIconStencil} from '@workday/canvas-kit-react/icon';
import {getCursor} from '@workday/canvas-kit-react/collection';
import {useComboboxInput, useComboboxInputConstrained} from '@workday/canvas-kit-react/combobox';

import {useMultiSelectModel} from './useMultiSelectModel';
import {MultiSelectedItemProps} from './MultiSelectedItem';
import {MultiSelectedList} from './MultiSelectedList';

export const multiSelectInputStencil = createStencil({
  //@ts-ignore Types don't like defining a variable in `base` and using a variable in a nested selector. One or the other is fine, but not both.
  base: {
    border: `1px solid ${system.color.border.input.default}`,
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: system.color.bg.default,
    borderRadius: system.shape.x1Half,
    boxSizing: 'border-box',
    minHeight: system.space.x10,
    transition: '0.2s box-shadow, 0.2s border-color',
    margin: 0, // Fix Safari
    [textInputStencil.vars.width]: '100%',

    '&:hover, &.hover': {
      borderColor: system.color.border.input.strong,
    },

    '&:has(:focus-visible:not([disabled])), &.focus': {
      borderColor: system.color.border.primary.default,
      boxShadow: `inset 0 0 0 1px ${system.color.border.primary.default}`,
    },

    '& [data-part="user-input"]': {
      ...system.type.subtext.large,
      backgroundColor: system.color.bg.transparent.default,
      borderRadius: system.shape.x1,

      // collapse the height of the input by the border width so that an empty multi-select
      // is the same height as a `TextInput`
      '&:where([data-part="user-input"], [data-part="form-input"])': {
        height: calc.subtract(system.space.x10, px2rem(2)),
      },

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
      backgroundColor: system.color.bg.alt.softer,
      [systemIconStencil.vars.color]: system.color.fg.disabled,
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
  modifiers: {
    error: {
      error: {
        borderColor: brand.common.errorInner,
        boxShadow: `inset 0 0 0 ${px2rem(1)} ${brand.common.errorInner}`,
        backgroundColor: brand.error.lightest,
        '&:has(:hover, :disabled, :focus-visible), &:is(.hover, .disabled, .focus)': {
          borderColor: brand.common.errorInner,
        },
        '&:has(:focus-visible:not([disabled])), &.focus': {
          borderColor: brand.common.errorInner,
          boxShadow: `inset 0 0 0 ${px2rem(1)} ${brand.common.errorInner}, 0 0 0 2px ${
            system.color.border.inverse
          }, 0 0 0 4px ${brand.common.focusOutline}`,
          outlineOffset: px2rem(2),
        },
      },
      caution: {
        borderColor: brand.common.alertOuter,
        boxShadow: `inset 0 0 0 ${px2rem(2)} ${brand.common.alertInner}`,
        backgroundColor: brand.alert.lightest,
        '&:has(:hover, .hover, :disabled, .disabled, :focus-visible:not([disabled])), .focus:not(:has([disabled]))':
          {
            borderColor: brand.common.alertOuter,
          },

        '&:has(:focus-visible, .focus):not(:has([disabled]))': {
          boxShadow: `inset 0 0 0 ${px2rem(2)} ${brand.common.alertInner},
        0 0 0 2px ${system.color.border.inverse},
        0 0 0 4px ${brand.common.focusOutline}`,
        },
        outlineOffset: px2rem(2),
      },
    },
  },
});

/** @deprecated use `multiSelectInputStencil` instead. This will be removed in a future version. */
export const multiSelectStencil = multiSelectInputStencil;

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
    Pick<MultiSelectedItemProps, 'removeLabel'> {
  error?: ErrorType;
}

export const MultiSelectInput = createSubcomponent(TextInput)({
  modelHook: useMultiSelectModel,
  elemPropsHook: useMultiSelectInput,
})<MultiSelectInputProps>(
  (
    {
      className,
      cs,
      style,
      error,
      'aria-labelledby': ariaLabelledBy,
      removeLabel,
      disabled,
      formInputProps,
      ...elemProps
    },
    Element
  ) => {
    return (
      <div {...handleCsProp({className, cs, style}, multiSelectInputStencil({error}))}>
        <InputGroup>
          <InputGroup.Input data-part="form-input" {...formInputProps} />
          <InputGroup.Input
            data-part="user-input"
            as={Element}
            aria-labelledby={ariaLabelledBy}
            readOnly
            disabled={disabled}
            error={error}
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
      error,
      ...elemProps
    },
    Element
  ) => {
    return (
      <div {...handleCsProp({className, cs, style}, multiSelectInputStencil({}))}>
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
            error={error}
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
