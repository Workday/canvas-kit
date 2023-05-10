import React from 'react';

import {createSubcomponent} from '@workday/canvas-kit-react/common';
import {Menu} from '@workday/canvas-kit-react/menu';

import {useComboboxModel} from './useComboboxModel';
import {ComboboxMenuList} from './ComboboxMenuList';
import {ComboboxMenuItem} from './ComboboxMenuItem';
import {ComboboxCard} from './ComboboxCard';

export interface ComboboxMenuProps {
  /**
   * Children of the `Combobox.Menu`.
   */
  children: React.ReactNode;
}

export const ComboboxMenu = createSubcomponent()({
  modelHook: useComboboxModel,
  subComponents: {
    /**
     * The "Popper" of a `Combobox.Menu`. The popper will appear around the
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
     *       <Combobox.Menu.List>
     *         {(item) => <Combobox.Menu.Item>{item}</Combobox.Menu.Item>}
     *       </Combobox.Menu.List>
     *     </Combobox>
     *   )
     * }
     * ```
     */
    List: ComboboxMenuList,
    /**
     * `Combobox.Menu.Item` has an optional `data-id` prop that identifies the item in the
     * `Combobox.Menu.List` and will be passed to the optional `onSelect` callback of the
     * `ComboboxModel`. `Combobox.Menu.Item` can contain any HTML.
     */
    Item: ComboboxMenuItem,
    /**
     * `Combobox.Menu.Card` is a non-semantic element used to give the dropdown menu its distinct visual
     * cue that the dropdown menu is floating above other content. `Combobox.Menu.Card` usually contains a
     * `Combobox.Menu.List`, but it can also contain other elements like a header or footer.
     */
    Card: ComboboxCard,
    Divider: Menu.Divider,
  },
})<ComboboxMenuProps>(({children}, _, model) => {
  return <Menu model={model}>{children}</Menu>;
});
