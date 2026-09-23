import {Combobox} from '@workday/canvas-kit-react/combobox';
import {ExtractProps, createContainer} from '@workday/canvas-kit-react/common';

import {SelectCard} from './SelectCard';
import {SelectInput} from './SelectInput';
import {SelectItem} from './SelectItem';
import {useSelectModel} from './hooks/useSelectModel';

export interface SelectProps extends ExtractProps<typeof Combobox> {}
/**
 * Use `Select` to allow users to choose an option from a list or type characters to select a matching option.
 *
 * **Note: Wrap `Select` with `FormField` and compose `FormField.Input as={Select.Input}` so the combobox receives the field label.**
 *
 * ```tsx
 * <FormField>
 *   <FormField.Label>Contact</FormField.Label>
 *   <FormField.Field>
 *     <Select items={options}>
 *       <FormField.Input as={Select.Input} onChange={e => handleChange(e)} />
 *       <Select.Popper>
 *         <Select.Card>
 *           <Select.List>{item => <Select.Item>{item}</Select.Item>}</Select.List>
 *         </Select.Card>
 *       </Select.Popper>
 *     </Select>
 *   </FormField.Field>
 * </FormField>
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
     * Compose it as `FormField.Input as={Select.Input}` so label, required, and error wiring apply.
     *
     * ```tsx
     * <FormField>
     *   <FormField.Label>Contact</FormField.Label>
     *   <FormField.Field>
     *     <Select items={options}>
     *       <FormField.Input as={Select.Input} onChange={event => handleChange(event)} />
     *       ...
     *     </Select>
     *   </FormField.Field>
     * </FormField>
     * ```
     */
    Input: SelectInput,
    /**
     * `Select.Popper` renders a {@link ComboboxPopper Combobox.Menu.Popper}. You have access to all `Popper` props.
     *
     * ```tsx
     * <FormField>
     *   <FormField.Label>Contact</FormField.Label>
     *   <FormField.Field>
     *     <Select items={options}>
     *       <FormField.Input as={Select.Input} onChange={event => handleChange(event)} />
     *       <Select.Popper>...</Select.Popper>
     *     </Select>
     *   </FormField.Field>
     * </FormField>
     * ```
     */
    Popper: Combobox.Menu.Popper,
    /**
     * `Select.Card` renders a {@link ComboboxCard Combobox.Card}. You have access to all `Card` props.
     *
     * **Note: The card will be the width of its corresponding `Select.Input`**.
     *
     * ```tsx
     * <FormField>
     *   <FormField.Label>Contact</FormField.Label>
     *   <FormField.Field>
     *     <Select items={options}>
     *       <FormField.Input as={Select.Input} onChange={event => handleChange(event)} />
     *       <Select.Popper>
     *         <Select.Card>...</Select.Card>
     *       </Select.Popper>
     *     </Select>
     *   </FormField.Field>
     * </FormField>
     * ```
     */
    Card: SelectCard,
    /**
     * `Select.List` renders a {@link ComboboxMenuList Combobox.Menu.List}. You have access to all `ListBox` props.
     *
     * ```tsx
     * <FormField>
     *   <FormField.Label>Contact</FormField.Label>
     *   <FormField.Field>
     *     <Select items={options}>
     *       <FormField.Input as={Select.Input} onChange={event => handleChange(event)} />
     *       <Select.Popper>
     *         <Select.Card>
     *           <Select.List>{item => <Select.Item>{item}</Select.Item>}</Select.List>
     *         </Select.Card>
     *       </Select.Popper>
     *     </Select>
     *   </FormField.Field>
     * </FormField>
     * ```
     */
    List: Combobox.Menu.List,
    /**
     * `Select.Item` renders a {@link ComboboxMenuItem Combobox.Menu.Item} with aria role of `option`. You can optionally render a `Icon`.
     *
     * ```tsx
     * <FormField>
     *   <FormField.Label>Contact</FormField.Label>
     *   <FormField.Field>
     *     <Select items={options}>
     *       <FormField.Input as={Select.Input} onChange={event => handleChange(event)} />
     *       <Select.Popper>
     *         <Select.Card>
     *           <Select.List>
     *             {item => (
     *               <Select.Item>
     *                 <Select.Item.Icon icon={icon} />
     *                 {item}
     *               </Select.Item>
     *             )}
     *           </Select.List>
     *         </Select.Card>
     *       </Select.Popper>
     *     </Select>
     *   </FormField.Field>
     * </FormField>
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
