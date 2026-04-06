import {CanvasSystemIcon} from '@workday/design-assets-types';
import {caretDownSmallIcon} from '@workday/canvas-system-icons-web';
import {createStencil, CSProps} from '@workday/canvas-kit-styling';
import {InputGroup, TextInput} from '@workday/canvas-kit-react/text-input';
import {SystemIcon, systemIconStencil} from '@workday/canvas-kit-react/icon';

import {useSelectInput} from './hooks/useSelectInput';
import {useSelectModel} from './hooks/useSelectModel';
import {createSubcomponent, ExtractProps} from '@workday/canvas-kit-react/common';
import {system, brand} from '@workday/canvas-tokens-web';

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
      top: system.space.zero,
      bottom: system.space.zero,
      left: system.space.zero,
      right: system.space.zero,
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
      backgroundColor: system.color.bg.default,
      color: system.color.text.default,
      cursor: 'default',
      '&::placeholder': {
        color: system.color.text.default,
      },
      '&::selection': {
        backgroundColor: 'transparent',
      },
    },
    '&:has(:disabled, .disabled)': {
      [caretPart]: {
        [systemIconStencil.vars.color]: system.color.fg.disabled,
      },
    },
  }),
  modifiers: {
    error: {
      error: ({visualInputPart}) => ({
        [visualInputPart]: {
          backgroundColor: brand.error.lightest,
        },
      }),
      caution: ({visualInputPart}) => ({
        [visualInputPart]: {
          backgroundColor: brand.alert.lightest,
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
