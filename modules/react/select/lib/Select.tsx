import React from 'react';
import {CanvasSystemIcon} from '@workday/design-assets-types';
import {caretDownSmallIcon} from '@workday/canvas-system-icons-web';
import {Combobox} from '@workday/canvas-kit-react/combobox';
import {createStencil, createStyles, CSProps, px2rem} from '@workday/canvas-kit-styling';
import {InputGroup, TextInput} from '@workday/canvas-kit-react/text-input';
import {mergeStyles} from '@workday/canvas-kit-react/layout';
import {SystemIcon} from '@workday/canvas-kit-react/icon';
import {useSelectCard} from './hooks/useSelectCard';
import {useSelectInput} from './hooks/useSelectInput';
import {useSelectModel} from './hooks/useSelectModel';
import {createSubcomponent, ExtractProps, createContainer} from '@workday/canvas-kit-react/common';
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
    {placeholder = 'Choose an option', inputStartIcon, formInputProps, width, ...elemProps},
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
        <InputGroup.InnerEnd data-part="select-caret-container">
          <SystemIcon data-part="select-caret-icon" icon={caretDownSmallIcon} />
        </InputGroup.InnerEnd>
      </InputGroup>
    );
  }
);

export const SelectItem = createSubcomponent('li')({
  modelHook: useSelectModel,
  subComponents: {
    Icon: Combobox.Menu.Item.Icon,
  },
})<ExtractProps<typeof Combobox.Menu.Item>>(({children, ...elemProps}, Element, _model) => {
  return (
    <Combobox.Menu.Item as={Element} {...elemProps}>
      {children}
    </Combobox.Menu.Item>
  );
});

const selectCardStyles = createStyles({
  maxHeight: px2rem(300),
});

export const SelectCard = createSubcomponent('div')({
  modelHook: useSelectModel,
  elemPropsHook: useSelectCard,
})<ExtractProps<typeof Combobox.Menu.Card>>(({children, ...elemProps}, Element) => {
  return (
    <Combobox.Menu.Card as={Element} {...mergeStyles(elemProps, selectCardStyles)}>
      {children}
    </Combobox.Menu.Card>
  );
});

export interface SelectProps extends ExtractProps<typeof Combobox> {}
/**
 * Use `Select` to allow users to choose an option from a list or type characters to select a matching option.
 *
 * **Note: `Select` must wrap `FormField` and `FormField` must wrap all `Select` children to ensure proper accessibility. **
 *
 * ```tsx
 * <Select items={options}>
 *  <FormField label="Your Label">
 *    <Select.Input onChange={e => handleChange(e)} id="contact-select" />
 *    <Select.Popper>
 *      <Select.Card>
 *        <Select.List>
 *          {item => <Select.Item>{item.id}</Select.Item>}
 *        </Select.List>
 *      </Select.Card>
 *      </Select.Popper>
 *    </FormField>
 * </Select>
 * ```
 */
export const Select = createContainer()({
  displayName: 'Select',
  modelHook: useSelectModel,
  subComponents: {
    /**
     * `Select.Input` renders a {@link ComboboxMenu Combobox.Input} that handles keyboard navigation and interaction defined by [WAI](https://www.w3.org/WAI/ARIA/apg/patterns/combobox/examples/combobox-select-only/).
     * This component can either be [controlled or uncontrolled](https://react.dev/learn/sharing-state-between-components#controlled-and-uncontrolled-components).
     *
     * ```tsx
     * <Select items={options}>
     *   <FormField label="Contact">
     *     <Select.Input onChange={(event) => handleChange(event)}>
     *     ...
     *   </FormField>
     * </Select>
     * ```
     */
    Input: SelectInput,
    /**
     * `Select.Popper` renders a {@link ComboboxPopper Combobox.Menu.Popper}. You have access to all `Popper` props.
     *
     * ```tsx
     * <Select items={options}>
     *  <FormField label="Your Label">
     *    <Select.Input onChange={(event) => handleChange(event)}>
     *    <Select.Popper>
     *    ...
     *    </Select.Popper>
     *  </FormField>
     * </Select>
     * ```
     */
    Popper: Combobox.Menu.Popper,
    /**
     * `Select.Card` renders a {@link ComboboxCard Combobox.Card}. You have access to all `Card` props.
     *
     * **Note: The card will be the width of its corresponding `Select.Input`**.
     *
     * ```tsx
     * <Select items={options}>
     *  <FormField label="Your Label">
     *    <Select.Input onChange={(event) => handleChange(event)}>
     *    <Select.Popper>
     *      <Select.Card>
     *        ...
     *      </Select.Card>
     *    </Select.Popper>
     *  </FormField>
     * </Select>
     * ```
     */
    Card: SelectCard,
    /**
     * `Select.List` renders a {@link ComboboxMenuList Combobox.Menu.List}. You have access to all `ListBox` props.
     *
     * ```tsx
     * <Select items={options}>
     *  <FormField label="Your Label">
     *    <Select.Input onChange={(event) => handleChange(event)}>
     *    <Select.Popper>
     *      <Select.Card>
     *        <Select.List>
     *          {(item) => <Select.Item>{item}</Select.Item>}
     *        </Select.List
     *      </Select.Card>
     *    </Select.Popper>
     *  </FormField>
     * </Select>
     * ```
     */
    List: Combobox.Menu.List,
    /**
     * `Select.Item` renders a {@link ComboboxMenuItem Combobox.Menu.Item} with aria role of `option`. You can optionally render a `Icon`.
     *
     * ```tsx
     * <Select items={options}>
     *  <FormField label="Your Label">
     *    <Select.Input onChange={(event) => handleChange(event)}>
     *      <Select.Popper>
     *        <Select.Card>
     *          <Select.List>
     *            {(item) => <Select.Item><Select.Item.Icon icon={icon} />{item}</Select.Item>}
     *          </Select.List
     *        </Select.Card>
     *      </Select.Popper>
     *  </FormField>
     * </Select>
     * ```
     */
    Item: SelectItem,
  },
})<SelectProps>(({children, ...elemProps}, _, model) => {
  return (
    <Combobox model={model} {...elemProps}>
      {children}
    </Combobox>
  );
});
