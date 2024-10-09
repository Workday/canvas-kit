import React from 'react';

import {system} from '@workday/canvas-tokens-web';
import {caretDownSmallIcon, searchIcon} from '@workday/canvas-system-icons-web';

import {
  composeHooks,
  createElemPropsHook,
  createSubcomponent,
  useLocalRef,
} from '@workday/canvas-kit-react/common';
import {createStencil, CSProps, handleCsProp} from '@workday/canvas-kit-styling';
import {InputGroup, TextInput} from '@workday/canvas-kit-react/text-input';
import {SystemIcon} from '@workday/canvas-kit-react/icon';
import {usePopupTarget} from '@workday/canvas-kit-react/popup';
import {
  ListBox,
  useListActiveDescendant,
  useListItemRegister,
  useListItemRovingFocus,
  useListItemSelect,
  useListModel,
} from '@workday/canvas-kit-react/collection';
import {useComboboxListKeyboardHandler, useSetPopupWidth} from '@workday/canvas-kit-react/combobox';
import {Pill} from '@workday/canvas-kit-preview-react/pill';

import {useMultiSelectModel} from './useMultiSelectModel';
import {MultiSelectItem} from './MultiSelectItem';

export const multiSelectStencil = createStencil({
  base: {
    border: `1px solid ${system.color.border.input.default}`,
    display: 'flex',
    flexDirection: 'column',
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

    // @ts-ignore
    '& [data-part="user-input"]': {
      ...system.type.subtext.large,
      backgroundColor: system.color.bg.transparent,
      // padding: system.space.x2, // Compensate for border
      borderRadius: system.shape.x1,

      // Remove the focus ring - it is handled at the container level
      border: 'none',
      boxShadow: 'none',
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
  parts: {
    'user-input': {
      // styles
      // hover container
      '&:hover': {},
    },
    // hover data-part
    '& #:hover': {},
  },
});

export const useMultiSelectInput = composeHooks(
  createElemPropsHook(useMultiSelectModel)((model, ref) => {
    const {elementRef} = useLocalRef<HTMLInputElement>(ref as any);

    const {elementRef: userElementRef, localRef: userLocalRef} = useLocalRef(model.state.targetRef);
    const {elementRef: formElementRef, localRef: formLocalRef} = useLocalRef(
      ref as React.Ref<HTMLInputElement>
    );

    return {
      onKeyDown(event: React.KeyboardEvent) {
        if (
          (event.key === 'Enter' || event.key === 'Space') &&
          model.state.visibility === 'visible'
        ) {
          const id = model.state.cursorId;
          if (id) {
            model.events.select({id});
            // If enter key, prevents the form from being submitted while the select is open. If
            // space key, prevents a space from being entered in the search input
            // event.preventDefault();
          }
        }

        // console.log('key', event.key);
        if (
          (event.key === 'ArrowDown' || event.key === 'ArrowUp') &&
          model.state.visibility === 'hidden'
        ) {
          // prevent navigating vertically on the input
          model.events.show(event);
          event.preventDefault();
        }
      },
      role: 'combobox',
      ref: elementRef,
      'aria-haspopup': 'listbox' as const,
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

const removeItem = <T extends unknown>(id: string, model: ReturnType<typeof useListModel>) => {
  const index = model.state.items.findIndex(item => item.id === model.state.cursorId);
  const nextIndex = index === model.state.items.length - 1 ? index - 1 : index + 1;
  const nextId = model.state.items[nextIndex].id;
  console.log('nextId', id, nextId);
  if (model.state.cursorId === id) {
    // We're removing the currently focused item. Focus next item
    model.events.goTo({id: nextId});

    // // wait for stabilization of state
    // requestAnimationFrame(() => {
    //   document.querySelector<HTMLElement>(`#${model.state.id}-${nextId}`)?.focus();
    // });
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
})(({children, ref, ...elemProps}, Element, model) => {
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
  displayName: 'MultiSelect.Input',
  modelHook: useMultiSelectModel,
  elemPropsHook: useMultiSelectInput,
})<MultiSelectInputProps>(({className, cs, style, disabled, ...elemProps}, Element, model) => {
  return (
    <div {...handleCsProp({className, cs, style}, multiSelectStencil({}))}>
      <InputGroup>
        <InputGroup.Input
          data-part="form-input"
          disabled={disabled}
          tabIndex={-1}
          aria-hidden={true}
        />
        <InputGroup.Input data-part="user-input" as={Element} {...elemProps} />
        <InputGroup.InnerEnd pointerEvents="none">
          <SystemIcon icon={caretDownSmallIcon} />
        </InputGroup.InnerEnd>
      </InputGroup>
      {model.selected.state.items.length ? (
        <>
          <div data-part="separator" />
          <ListBox model={model.selected} as="div" role="listbox" aria-orientation="horizontal">
            {item => <MultiSelectedItem>{item.textValue}</MultiSelectedItem>}
          </ListBox>
        </>
      ) : null}
    </div>
  );
});

export const MultiSelectSearchInput = createSubcomponent(TextInput)({
  displayName: 'MultiSelect.Input',
  modelHook: useMultiSelectModel,
  elemPropsHook: useMultiSelectInput,
})<MultiSelectInputProps>(
  ({className, cs, disabled, 'aria-labelledby': ariaLabelledBy, ...elemProps}, Element, model) => {
    return (
      <div {...handleCsProp({className, cs}, multiSelectStencil({}))}>
        <InputGroup>
          <InputGroup.InnerStart pointerEvents="none" width={system.space.x8}>
            <SystemIcon icon={searchIcon} size={system.space.x4} />
          </InputGroup.InnerStart>
          <InputGroup.Input
            data-part="form-input"
            disabled={disabled}
            tabIndex={-1}
            aria-hidden={true}
            aria-labelledby={ariaLabelledBy}
          />
          <InputGroup.Input data-part="user-input" as={Element} {...elemProps} />
          <InputGroup.InnerEnd width={system.space.x8}>
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
