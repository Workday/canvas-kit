import React from 'react';
import {
  createSubcomponent,
  ExtractProps,
  createContainer,
  Themeable,
} from '@workday/canvas-kit-react/common';
import {Combobox, useComboboxModel} from '@workday/canvas-kit-react/combobox';

import {InputGroup, TextInput} from '@workday/canvas-kit-react/text-input';
import {SystemIcon} from '@workday/canvas-kit-react/icon';
import {caretDownSmallIcon} from '@workday/canvas-system-icons-web';
import {useSelectModel, useSelectOption} from './hooks';
import {useSelectInput} from './hooks/useSelectInput';
import {CanvasSystemIcon} from '@workday/design-assets-types';

export interface SelectInputProps extends ExtractProps<typeof TextInput> {
  /**
   * The Icon to render at the start of the input. Use this prob if your options
   * include icons that you would like to render in the input when selected.
   * An option was must be select in order to render and icon.
   */
  inputStartIcon?: CanvasSystemIcon;
}

/**
 * The SelectInput renders a custom `ComboboxInput` with additional support for keyboard navigation
 * and interaction as defined by [WAI](https://www.w3.org/WAI/ARIA/apg/patterns/combobox/examples/combobox-select-only/).
 * All valid attributes are spread to the underlying `<input>` element.
 */
export const SelectInput = createSubcomponent(TextInput)({
  modelHook: useSelectModel,
  elemPropsHook: useSelectInput,
})<SelectInputProps>(
  ({placeholder = 'Choose an Option', width, inputStartIcon, ...props}, Element, model) => {
    return (
      <InputGroup width={width}>
        {inputStartIcon && model.state.selectedIds.length > 0 && (
          <InputGroup.InnerStart pointerEvents="none">
            <SystemIcon icon={inputStartIcon} />
          </InputGroup.InnerStart>
        )}
        <InputGroup.Input
          width={width}
          as={Element}
          placeholder={placeholder}
          style={{caretColor: 'transparent', cursor: 'default'}}
          {...props}
        ></InputGroup.Input>
        <InputGroup.InnerEnd position="absolute" pointerEvents="none">
          <SystemIcon icon={caretDownSmallIcon} />
        </InputGroup.InnerEnd>
      </InputGroup>
    );
  }
);

/**
 * This renders a `Combobox.Menu.Item` while adding the additional `role="option"` attribute for accessibility.
 */
export const SelectItem = createSubcomponent('li')({
  modelHook: useComboboxModel,
  elemPropsHook: useSelectOption,
  subComponents: {
    Icon: Combobox.Menu.Item.Icon,
  },
})<ExtractProps<typeof Combobox.Menu.Item>>(({children, ...elemProps}, Element) => {
  return <Combobox.Menu.Item {...elemProps}>{children}</Combobox.Menu.Item>;
});

export interface Select2Props extends Themeable, ExtractProps<typeof Combobox> {}

export const Select = createContainer()({
  displayName: 'Select',
  modelHook: useSelectModel,
  subComponents: {
    Input: SelectInput,
    Popup: Combobox.Menu.Popper,
    Card: Combobox.Menu.Card,
    List: Combobox.Menu.List,
    Item: SelectItem,
  },
})<Select2Props>(({children, ...elemProps}, _, model) => {
  return (
    <Combobox model={model} {...elemProps}>
      {children}
    </Combobox>
  );
});

// export interface SelectOption2Props extends ExtractProps<typeof SelectBase.Item> {
//   // This ensures that each option in the select is registered to enable keyboard navigation
//   // selection, and type ahead. Try to match this value to the text value of your option.
//   // If you're rendering states, and an option is `Alabama`, then `data-id` should be
//   // `data-id="Alabama"`. This value is also used to determine if an option is disabled or non interactive.
//   'data-id': string;
// }

// export const SelectOption2 = createComponent('li')({
//   displayName: 'SelectOption',
//   Component: ({children, ...elemProps}: SelectOption2Props, ref, Element) => {
//     return (
//       <SelectBase.Item {...elemProps} ref={ref}>
//         {children}
//       </SelectBase.Item>
//     );
//   },
// });

// interface OptionData {
//   // This allows developers to include arbitrary keys in their
//   // Options data and to utilize those keys in their renderOption
//   // function without encountering TypeScript errors
//   [key: string]: any;
// }
// export interface Option {
//   data?: OptionData;
//   id: string;
//   icon?: CanvasSystemIcon;
//   disabled?: boolean;
// }
// export interface Select2Props extends ExtractProps<typeof TextInput> {
//   options?: (Option | string)[];
// }

// export const Select2 = createComponent(TextInput)({
//   displayName: 'Select2',
//   Component: ({children, options, ...elemProps}: Select2Props, ref, Element) => {
//     const baseOptionsItems: any = [];
//     console.log(options);
//     let normalizedOptions;

//     React.Children.forEach(children, (child, index) => {
//       if (child && typeof child === 'object' && 'props' in child) {
//         const baseOption = {
//           id: child.props['data-id'],
//           ...child.props,
//         };
//         baseOptionsItems.push(baseOption);
//       }
//     });

//     if (options?.length) {
//       normalizedOptions = options.map(option => {
//         let data = {};
//         let disabled, id;

//         if (typeof option === 'string') {
//           disabled = false;
//           id = option;
//         } else {
//           data = option.data || data;
//           disabled = !!option.disabled;
//           id = option.id;
//         }

//         return {
//           ...data,
//           disabled,
//           id,
//         };
//       });
//     }

//     const model = useSelectModel({
//       items: options?.length ? normalizedOptions : baseOptionsItems,
//       nonInteractiveIds: options?.length
//         ? normalizedOptions?.filter(item => item.disabled === true).map(item => item.id)
//         : baseOptionsItems
//             .filter(item => item['aria-disabled'] === true)
//             .map(item => item['data-id']),
//     });

//     console.log('MODEL', model);
//     return (
//       <SelectBase model={model}>
//         <SelectBase.Input id="contact-select" ref={ref} {...elemProps} />
//         <SelectBase.Popup>
//           <SelectBase.Card maxHeight="200px">
//             <SelectBase.List>
//               {item => {
//                 const {children, id, disabled, ...rest} = item;
//                 console.warn(item);
//                 return (
//                   <SelectBase.Item data-id={id} aria-disabled={disabled ? disabled : undefined}>
//                     {id}
//                   </SelectBase.Item>
//                 );
//               }}
//             </SelectBase.List>
//           </SelectBase.Card>
//         </SelectBase.Popup>
//       </SelectBase>
//     );
//   },
// });
