import React from 'react';

import {Menu} from '@workday/canvas-kit-react/menu';
import {BodyText} from '@workday/canvas-kit-react/text';

/**
 * The `Menu.Item` renders a `role=menuitem` element, and `aria-selected` is not a valid attribute for
 * the `menuitem` role, so it cannot have a selected state. If you wish your menu to have selectable
 * menu items, use `Menu.Option` instead of `Menu.Item`. This is meant to be used when overriding the
 * default role of the `Menu.List` to `listbox`. This example uses `Menu.Option` to show what the
 * checkmark looks like, but the example is not keyboard or screen reader accessible. There are many
 * other behaviors that need to be composed into the `Menu.Target` and `Menu.List` components and the
 * behaviors depend on many other things. To see a full example of all these behaviors, look at the
 * `<Combobox>` and `<Select>` component source code as examples.
 */

export const SelectableMenu = () => {
  const [selected, setSelected] = React.useState('');
  return (
    <Menu onSelect={data => setSelected(data.id)}>
      <Menu.Target>Open Menu</Menu.Target>
      <Menu.Popper>
        <Menu.Card>
          <Menu.List role="listbox">
            <Menu.Option>First Item</Menu.Option>
            <Menu.Option>Second Item</Menu.Option>
            <Menu.Divider />
            <Menu.Option>Third Item (with a really, really, really long label)</Menu.Option>
            <Menu.Option aria-disabled>Fourth Item</Menu.Option>
          </Menu.List>
        </Menu.Card>
      </Menu.Popper>
      <BodyText size="small" marginTop="s">
        Selected: <span data-testid="output">{selected}</span>
      </BodyText>
    </Menu>
  );
};
