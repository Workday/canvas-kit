import React from 'react';

import {SecondaryButton} from '@workday/canvas-kit-react/button';
import {Menu} from '@workday/canvas-kit-react/menu';
import {createStyles, px2rem} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';

const altBackgroundStyles = createStyles({
  background: system.color.bg.alt.default,
  padding: system.padding.xl,
  borderRadius: system.shape.md,
  minHeight: px2rem(300),
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

export const Alt = () => {
  return (
    <div className={altBackgroundStyles}>
      <Menu>
        <Menu.Target as={SecondaryButton}>Open Menu</Menu.Target>
        <Menu.Popper>
          <Menu.Card variant="alt">
            <Menu.List>
              <Menu.Item>First Item</Menu.Item>
              <Menu.Item>Second Item</Menu.Item>
              <Menu.Item>Third Item</Menu.Item>
            </Menu.List>
          </Menu.Card>
        </Menu.Popper>
      </Menu>
    </div>
  );
};
