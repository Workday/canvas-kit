import React from 'react';

import {Menu} from '@workday/canvas-kit-react/menu';
import {BodyText} from '@workday/canvas-kit-react/text';
import {cssVar} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';

export const SelectableMenu = () => {
  const [selected, setSelected] = React.useState('');
  return (
    <Menu onSelect={data => setSelected(data.id)}>
      <Menu.Target>Open Menu</Menu.Target>
      <Menu.Popper>
        <Menu.Card role="listbox">
          <Menu.List as="ul">
            <Menu.Option>First Item</Menu.Option>
            <Menu.Option>Second Item</Menu.Option>
            <Menu.Divider />
            <Menu.Option>Third Item (with a really, really, really long label)</Menu.Option>
            <Menu.Option aria-disabled>Fourth Item</Menu.Option>
          </Menu.List>
        </Menu.Card>
      </Menu.Popper>
      <BodyText size="small" cs={{marginTop: cssVar(system.space.x4)}}>
        Selected: <span data-testid="output">{selected}</span>
      </BodyText>
    </Menu>
  );
};
