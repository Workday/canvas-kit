import React from 'react';

import {getCursor} from '@workday/canvas-kit-react/collection';
import {useComboboxInput, useComboboxInputConstrained} from '@workday/canvas-kit-react/combobox';
import {
  ErrorType,
  composeHooks,
  createElemPropsHook,
  createSubcomponent,
} from '@workday/canvas-kit-react/common';
import {SystemIcon, systemIconStencil} from '@workday/canvas-kit-react/icon';
import {InputGroup, TextInput, textInputStencil} from '@workday/canvas-kit-react/text-input';
import {CSProps, createStencil, cssVar, handleCsProp, px2rem} from '@workday/canvas-kit-styling';
import {caretDownSmallIcon, searchIcon} from '@workday/canvas-system-icons-web';
import {base, brand, system} from '@workday/canvas-tokens-web';

import {MultiSelectedItemProps} from './MultiSelectedItem';
import {MultiSelectedList} from './MultiSelectedList';
import {useMultiSelectModel} from './useMultiSelectModel';

export const multiSelectInputStencil = createStencil({
  base: {
    // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
    border: `1px solid ${system.color.border.input.default}`,
    display: 'flex',
    flexDirection: 'column',
    // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
    backgroundColor: cssVar(system.color.surface.default, system.color.bg.default),
    // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
    borderRadius: cssVar(system.shape.md, system.shape.x1Half),
    boxSizing: 'border-box',
    // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
    minHeight: cssVar(system.size.md, system.space.x10),
    transition: '0.2s box-shadow, 0.2s border-color',
    margin: 0, // Fix Safari
    [textInputStencil.vars.width]: '100%',

    '&:hover, &.hover': {
      // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
      borderColor: cssVar(system.color.border.input.hover, system.color.border.input.strong),
    },

    '&:has(:focus-visible:not([disabled])), &.focus': {
      // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
      borderColor: cssVar(system.color.brand.border.primary, system.color.border.primary.default),
      boxShadow: `inset 0 0 0 1px ${cssVar(system.color.brand.focus.primary, system.color.border.primary.default)}`,
    },

    '& [data-part="user-input"]': {
      fontFamily: system.fontFamily.default,
      fontSize: cssVar(system.fontSize.subtext.lg, system.fontSize.subtext.large),
      fontWeight: system.fontWeight.normal,
      lineHeight: cssVar(system.lineHeight.subtext.lg, system.lineHeight.subtext.large),
      // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
      backgroundColor: cssVar(
        system.color.surface.transparent,
        system.color.bg.transparent.default
      ),
      // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
      borderRadius: cssVar(system.shape.md, system.shape.x1),

      // collapse the height of the input by the border width so that an empty multi-select
      // is the same height as a `TextInput`
      '&:where([data-part="user-input"], [data-part="form-input"])': {
        height: px2rem(38),
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

    '&:has(:disabled, .disabled) :where([data-part="user-input"])': {
      opacity: system.opacity.disabled,
      [systemIconStencil.vars.color]: system.color.fg.disabled,
    },

    '&:has(:disabled, .disabled)': {
      opacity: system.opacity.disabled,
      [systemIconStencil.vars.color]: system.color.fg.disabled,
    },

    '&:has(:disabled, .disabled) :where([data-part="form-input"])': {
      opacity: system.opacity.zero,
      [systemIconStencil.vars.color]: system.color.fg.disabled,
    },

    '& :where([data-part="form-input"])': {
      position: 'absolute',
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      opacity: system.opacity.zero,
      cursor: 'default',
      pointerEvents: 'none',
    },

    '& :where([data-part="separator"])': {
      // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
      backgroundColor: cssVar(system.color.border.default, system.color.border.divider),
      height: 1,
      // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
      margin: `0 ${cssVar(system.gap.sm, system.space.x2)}`,
    },

    '& :where([data-part="list"])': {
      display: 'flex',
      // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
      gap: cssVar(system.gap.sm, system.space.x2),
      // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
      padding: cssVar(system.padding.xs, system.space.x2),
      flexWrap: 'wrap',
    },
  },
  modifiers: {
    error: {
      error: {
        // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
        borderColor: cssVar(system.color.brand.border.critical, brand.common.errorInner),
        // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
        boxShadow: `inset 0 0 0 ${px2rem(2)} ${cssVar(system.color.brand.focus.critical, brand.common.errorInner)}`,
        // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
        backgroundColor: cssVar(system.color.brand.surface.critical.default, brand.error.lightest),
        '&:has(:hover, :disabled, :focus-visible), &:is(.hover, .disabled, .focus)': {
          // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
          borderColor: cssVar(system.color.brand.border.critical, brand.common.errorInner),
        },
        '&:has(:focus-visible:not([disabled])), &.focus': {
          // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
          borderColor: cssVar(system.color.brand.border.critical, brand.common.errorInner),
          boxShadow: `inset 0 0 0 ${px2rem(2)} ${cssVar(system.color.brand.focus.critical, brand.common.errorInner)}, 0 0 0 2px ${
            // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
            cssVar(
              system.color.focus.inverse,
              cssVar(system.color.border.inverse.default, base.neutral0)
            )
          }, 0 0 0 4px ${cssVar(system.color.brand.border.primary, brand.common.focusOutline)}`,
          outlineOffset: px2rem(2),
        },
      },
      caution: {
        // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
        borderColor: cssVar(system.color.brand.border.caution, brand.common.alertOuter),
        // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
        boxShadow: `inset 0 0 0 ${px2rem(2)} ${cssVar(system.color.brand.focus.caution.inner, brand.common.alertInner)}`,
        // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
        backgroundColor: cssVar(system.color.brand.surface.caution.default, brand.alert.lightest),
        '&:has(:hover, .hover, :disabled, .disabled, :focus-visible:not([disabled])), .focus:not(:has([disabled]))':
          {
            // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
            borderColor: cssVar(system.color.brand.border.caution, brand.common.alertOuter),
          },
        '&:hover, &.hover': {
          // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
          borderColor: cssVar(system.color.brand.border.caution, brand.common.alertOuter),
        },

        '&:has(:focus-visible, .focus):not(:has([disabled]))': {
          // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
          boxShadow: `inset 0 0 0 ${px2rem(2)} ${cssVar(system.color.brand.focus.caution.inner, brand.common.alertInner)},
        0 0 0 2px ${cssVar(system.color.focus.inverse, system.color.border.inverse.default)},
        0 0 0 4px ${cssVar(system.color.brand.border.primary, brand.common.focusOutline)}`,
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
