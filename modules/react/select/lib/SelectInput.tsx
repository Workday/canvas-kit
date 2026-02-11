import {ExtractProps, createSubcomponent} from '@workday/canvas-kit-react/common';
import {SystemIcon, systemIconStencil} from '@workday/canvas-kit-react/icon';
import {InputGroup, TextInput} from '@workday/canvas-kit-react/text-input';
import {CSProps, createStencil, cssVar} from '@workday/canvas-kit-styling';
import {caretDownSmallIcon} from '@workday/canvas-system-icons-web';
import {brand, system} from '@workday/canvas-tokens-web';
import {CanvasSystemIcon} from '@workday/design-assets-types';

import {useSelectInput} from './hooks/useSelectInput';
import {useSelectModel} from './hooks/useSelectModel';

export interface SelectInputProps extends ExtractProps<typeof TextInput, never>, CSProps {
  /**
   * The Icon to render at the start of the `input`. Use this prop if your options
   * include icons that you would like to render in the `input` when selected.
   * ** Note:An option must be selected in order to render and icon.**
   */
  inputStartIcon?: CanvasSystemIcon;
}

export const selectInputStencil = createStencil({
  parts: {
    caret: 'select-caret-icon',
    caretContainer: 'select-caret-container',
    startIconContainer: 'select-start-icon-container',
    startIcon: 'select-start-icon',
    endIcon: 'select-end-icon',
    hiddenInput: 'select-hidden-input',
    visualInput: 'select-visual-input',
  },
  base: ({
    hiddenInputPart,
    startIconPart,
    endIconPart,
    visualInputPart,
    caretContainerPart,
    startIconContainerPart,
    caretPart,
  }) => ({
    [hiddenInputPart]: {
      position: 'absolute',
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      opacity: system.opacity.zero,
      cursor: 'default',
      pointerEvents: 'none',
      minWidth: '100%',
      width: '100%',
    },

    [`${startIconPart}, ${endIconPart}, ${caretContainerPart}, ${startIconContainerPart}`]: {
      position: 'absolute',
      pointerEvents: 'none',
    },
    [visualInputPart]: {
      caretColor: 'transparent',
      // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
      backgroundColor: cssVar(system.color.surface.default, system.color.bg.default),
      // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
      color: cssVar(system.color.fg.default, system.color.text.default),
      cursor: 'default',
      '&::placeholder': {
        // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
        color: cssVar(system.color.fg.default, system.color.text.default),
      },
      '&::selection': {
        backgroundColor: 'transparent',
      },
    },
    '&:has(:disabled, .disabled)': {
      [caretPart]: {
        // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
        [systemIconStencil.vars.color]: system.color.fg.disabled,
      },
    },
  }),
  modifiers: {
    error: {
      error: ({visualInputPart}) => ({
        [visualInputPart]: {
          // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
          backgroundColor: cssVar(
            system.color.brand.surface.critical.default,
            brand.error.lightest
          ),
        },
      }),
      caution: ({visualInputPart}) => ({
        [visualInputPart]: {
          // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
          backgroundColor: cssVar(system.color.brand.surface.caution.default, brand.alert.lightest),
        },
      }),
    },
  },
});

export const SelectInput = createSubcomponent(TextInput)({
  modelHook: useSelectModel,
  elemPropsHook: useSelectInput,
})<SelectInputProps>(({inputStartIcon, formInputProps, error, ...elemProps}, Element, model) => {
  return (
    <InputGroup data-width="ck-formfield-width" {...selectInputStencil({error: error})}>
      {inputStartIcon && model.state.selectedIds.length > 0 && (
        <InputGroup.InnerStart {...selectInputStencil.parts.startIconContainer}>
          <SystemIcon {...selectInputStencil.parts.startIcon} icon={inputStartIcon} />
        </InputGroup.InnerStart>
      )}
      {/* Hidden input to handle ids */}
      <InputGroup.Input {...selectInputStencil.parts.hiddenInput} {...formInputProps} />
      {/* Visual input */}
      <InputGroup.Input
        as={Element}
        placeholder="Choose an option"
        error={error}
        {...selectInputStencil.parts.visualInput}
        {...elemProps}
      />
      <InputGroup.InnerEnd {...selectInputStencil.parts.caretContainer}>
        <SystemIcon {...selectInputStencil.parts.caret} icon={caretDownSmallIcon} />
      </InputGroup.InnerEnd>
    </InputGroup>
  );
});
