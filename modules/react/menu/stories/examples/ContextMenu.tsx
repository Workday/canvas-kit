import React from 'react';

import {Menu} from '@workday/canvas-kit-react/menu';
import {BodyText} from '@workday/canvas-kit-react/text';
import {cssVar} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';

export const ContextMenu = () => {
  const [selected, setSelected] = React.useState('');
  return (
    <Menu onSelect={data => setSelected(data.id)}>
      <Menu.TargetContext>Right-click to Open Menu</Menu.TargetContext>
      <Menu.Popper>
        <Menu.Card>
          <Menu.List>
            <Menu.Item>First Item</Menu.Item>
            <Menu.Item>Second Item</Menu.Item>
            <Menu.Item>Third Item (with a really, really, really long label)</Menu.Item>
            <Menu.Item>Fourth Item</Menu.Item>
          </Menu.List>
        </Menu.Card>
      </Menu.Popper>
      <BodyText size="small" cs={{marginTop: cssVar(system.space.x4)}}>
        Selected: <span data-testid="output">{selected}</span>
      </BodyText>
    </Menu>
  );
};
