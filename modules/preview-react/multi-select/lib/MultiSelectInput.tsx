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
import {
  ListBox,
  useListItemRegister,
  useListItemRovingFocus,
  useListModel,
} from '@workday/canvas-kit-react/collection';
import {useComboboxInput, useComboboxInputConstrained} from '@workday/canvas-kit-react/combobox';
import {Pill} from '@workday/canvas-kit-preview-react/pill';

import {useMultiSelectModel} from './useMultiSelectModel';

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
          const id = model.state.cursorId;
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

const removeItem = <T extends unknown>(id: string, model: ReturnType<typeof useListModel>) => {
  const index = model.state.items.findIndex(item => item.id === model.state.cursorId);
  const nextIndex = index === model.state.items.length - 1 ? index - 1 : index + 1;
  const nextId = model.state.items[nextIndex].id;
  if (model.state.cursorId === id) {
    // We're removing the currently focused item. Focus next item
    model.events.goTo({id: nextId});
  }
};

const useMultiSelectedItem = composeHooks(
  createElemPropsHook(useListModel)((model, ref, elemProps) => {
    return {
      onKeyDown(event: React.KeyboardEvent<HTMLElement>) {
        const id = event.currentTarget.dataset.id || '';
        if (event.key === 'Backspace' || event.key === 'Delete') {
          model.events.select({id});
          removeItem(id, model);
        }
      },
      onClick(event: React.MouseEvent<HTMLElement>) {
        const id = event.currentTarget.dataset.id || '';
        model.events.select({id});
      },
    };
  }),
  useListItemRovingFocus,
  useListItemRegister
);

const MultiSelectedItem = createSubcomponent('span')({
  modelHook: useListModel,
  elemPropsHook: useMultiSelectedItem,
})(({children, ref, ...elemProps}, Element) => {
  return (
    <Pill as={Element} variant="removable">
      {children}
      <Pill.IconButton ref={ref} {...(elemProps as any)} />
    </Pill>
  );
});

export interface MultiSelectInputProps
  extends CSProps,
    Pick<
      React.InputHTMLAttributes<HTMLInputElement>,
      'disabled' | 'className' | 'style' | 'aria-labelledby'
    > {}

export const MultiSelectInput = createSubcomponent(TextInput)({
  modelHook: useMultiSelectModel,
  elemPropsHook: useMultiSelectInput,
})<MultiSelectInputProps>(
  (
    {className, cs, style, 'aria-labelledby': ariaLabelledBy, formInputProps, ...elemProps},
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
            {...elemProps}
          />
          <InputGroup.InnerEnd pointerEvents="none">
            <SystemIcon icon={caretDownSmallIcon} />
          </InputGroup.InnerEnd>
        </InputGroup>
        {model.selected.state.items.length ? (
          <>
            <div data-part="separator" />
            <ListBox
              model={model.selected}
              as="div"
              role="listbox"
              aria-orientation="horizontal"
              aria-labelledby={ariaLabelledBy}
            >
              {item => <MultiSelectedItem>{item.textValue}</MultiSelectedItem>}
            </ListBox>
          </>
        ) : null}
      </div>
    );
  }
);

export const MultiSelectSearchInput = createSubcomponent(TextInput)({
  modelHook: useMultiSelectModel,
  elemPropsHook: useMultiSelectInput,
})<MultiSelectInputProps>(
  (
    {className, cs, style, 'aria-labelledby': ariaLabelledBy, formInputProps, ref, ...elemProps},
    Element,
    model
  ) => {
    return (
      <div {...handleCsProp({className, cs, style}, multiSelectStencil({}))}>
        <InputGroup>
          <InputGroup.InnerStart pointerEvents="none" width={system.space.x8}>
            <SystemIcon icon={searchIcon} size={system.space.x4} />
          </InputGroup.InnerStart>
          <InputGroup.Input data-part="form-input" {...formInputProps} />
          <InputGroup.Input
            data-part="user-input"
            as={Element}
            aria-labelledby={ariaLabelledBy}
            {...elemProps}
          />
          <InputGroup.InnerEnd>
            <InputGroup.ClearButton />
          </InputGroup.InnerEnd>
          <InputGroup.InnerEnd pointerEvents="none">
            <SystemIcon icon={caretDownSmallIcon} />
          </InputGroup.InnerEnd>
        </InputGroup>
        {model.selected.state.items.length ? (
          <>
            <div data-part="separator" />
            <ListBox
              model={model.selected}
              as="div"
              role="listbox"
              aria-orientation="horizontal"
              aria-labelledby={ariaLabelledBy}
            >
              {item => <MultiSelectedItem>{item.textValue}</MultiSelectedItem>}
            </ListBox>
          </>
        ) : null}
      </div>
    );
  }
);
