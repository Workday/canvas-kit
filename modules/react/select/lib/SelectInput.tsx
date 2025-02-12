import React from 'react';
import {CanvasSystemIcon} from '@workday/design-assets-types';
import {caretDownSmallIcon} from '@workday/canvas-system-icons-web';
import {createStencil, CSProps} from '@workday/canvas-kit-styling';
import {InputGroup, TextInput} from '@workday/canvas-kit-react/text-input';
import {mergeStyles} from '@workday/canvas-kit-react/layout';
import {SystemIcon} from '@workday/canvas-kit-react/icon';

import {useSelectInput} from './hooks/useSelectInput';
import {useSelectModel} from './hooks/useSelectModel';
import {createSubcomponent, ExtractProps} from '@workday/canvas-kit-react/common';
import {system} from '@workday/canvas-tokens-web';

export interface SelectInputProps extends ExtractProps<typeof TextInput>, CSProps {
  /**
   * The Icon to render at the start of the `input`. Use this prop if your options
   * include icons that you would like to render in the `input` when selected.
   * ** Note:An option must be selected in order to render and icon.**
   */
  inputStartIcon?: CanvasSystemIcon;
}

const selectInputStencil = createStencil({
  base: {
    caretColor: 'transparent',
    cursor: 'default',
    '&::selection': {
      backgroundColor: 'transparent',
    },
  },
});

const selectIconsStencil = createStencil({
  base: {
    position: 'absolute',
    pointerEvents: 'none',
  },
});

const hiddenSelectInputStencil = createStencil({
  base: {
    position: 'absolute',
    top: system.space.zero,
    bottom: system.space.zero,
    left: system.space.zero,
    right: system.space.zero,
    opacity: system.opacity.zero,
    cursor: 'default',
    pointerEvents: 'none',
  },
});

export const SelectInput = createSubcomponent(TextInput)({
  modelHook: useSelectModel,
  elemPropsHook: useSelectInput,
})<SelectInputProps>(
  (
    {placeholder = 'Choose an option', inputStartIcon, formInputProps, ...elemProps},
    Element,
    model
  ) => {
    return (
      <InputGroup data-width="ck-formfield-width">
        {inputStartIcon && model.state.selectedIds.length > 0 && (
          <InputGroup.InnerStart data-part="select-start-icon-container" {...selectIconsStencil()}>
            <SystemIcon data-part="select-start-icon" icon={inputStartIcon} />
          </InputGroup.InnerStart>
        )}
        {/* Hidden input to handle ids */}
        <InputGroup.Input
          data-part="select-hidden-input"
          {...formInputProps}
          {...hiddenSelectInputStencil()}
        />
        {/* Visual input */}
        <InputGroup.Input
          as={Element}
          placeholder={placeholder}
          data-part="select-visual-input"
          {...elemProps}
          {...mergeStyles(elemProps, selectInputStencil())}
        />
        <InputGroup.InnerEnd data-part="select-caret-container" {...selectIconsStencil()}>
          <SystemIcon data-part="select-caret-icon" icon={caretDownSmallIcon} />
        </InputGroup.InnerEnd>
      </InputGroup>
    );
  }
);
