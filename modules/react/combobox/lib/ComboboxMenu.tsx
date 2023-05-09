import React from 'react';

import {createSubcomponent} from '@workday/canvas-kit-react/common';
import {Menu} from '@workday/canvas-kit-react/menu';

import {useComboboxModel} from './useComboboxModel';
import {ComboboxMenuList} from './ComboboxMenuList';
import {ComboboxMenuItem} from './ComboboxMenuItem';
import {ComboboxCard} from './ComboboxCard';

export interface ComboboxMenuProps {
  /**
   * Children of the ComboboxMenu.
   */
  children: React.ReactNode;
}

export const ComboboxMenu = createSubcomponent()({
  modelHook: useComboboxModel,
  subComponents: {
    /**
     * The "Popper" of a combobox menu. The popper will appear around the
     * {@link ComboboxInput Combobox.Input}. It renders a `div` element that is portalled to the
     * `document.body` which is controlled by the {@link PopupStack}. The `PopupStack` is not part
     * of React. This means no extra props given to this component will be forwarded to the `div`
     * element, but the `ref` will be forwarded.
     */
    Popper: Menu.Popper,
    /**
     * The combobox menu list follows the Collections API. A list can either contain static items or
     * a render prop and `items` to the model.
     *
     * ```tsx
     * const MyComponent = () => {
     *   const model = useComboboxModel({
     *     items: ['First Item', 'Second Item']
     *   })
     *
     *   return (
     *     <Combobox model={model}>
     *       // other combobox subcomponents
     *       <Combobox.List>
     *         {(item) => <Combobox.Item>{item}</Combobox.Item>}
     *       </Combobox.List>
     *     </Combobox>
     *   )
     * }
     * ```
     */
    List: ComboboxMenuList,
    /**
     * A combobox item has an optional `data-id` prop that identifies the item in the combobox
     * menu list and will be passed to the optional `onSelect` callback of the combobox model. A
     * combobox item can contain any HTML.
     */
    Item: ComboboxMenuItem,
    /**
     * The combobox card is a non-semantic element used to give the dropdown menu its distinct visual
     * cue that the dropdown menu is floating above other content. A combobox card usually contains a
     * menu list, but can also contain other elements like a header or footer.
     */
    Card: ComboboxCard,
    Divider: Menu.Divider,
  },
})<ComboboxMenuProps>(({children}, _, model) => {
  return <Menu model={model}>{children}</Menu>;
});
