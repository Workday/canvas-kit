import {Combobox} from '@workday/canvas-kit-react/combobox';
import {useSelectModel} from './hooks/useSelectModel';
import {ExtractProps, createContainer} from '@workday/canvas-kit-react/common';
import {SelectInput} from './SelectInput';
import {SelectCard} from './SelectCard';
import {SelectItem} from './SelectItem';

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
