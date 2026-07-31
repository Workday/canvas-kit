import React from 'react';

import {SecondaryButton} from '@workday/canvas-kit-react/button';
import {CanvasProvider} from '@workday/canvas-kit-react/common';
import {Menu} from '@workday/canvas-kit-react/menu';
import {Popup} from '@workday/canvas-kit-react/popup';

export default {
  title: 'Features/Theming/Simplified Sana Setup',
  parameters: {
    docs: {
      description: {
        story: `
This demonstrates the simplified Sana Canvas setup. When \`data-theme="sana-canvas"\` is set
globally, popups automatically inherit the theme without needing \`sanaCanvasProviderTheme\`.
        `,
      },
    },
  },
};

export const SimplifiedSetup = () => {
  return (
    <CanvasProvider>
      <Popup>
        <Popup.Target as={SecondaryButton}>Open Menu</Popup.Target>
        <Popup.Popper>
          <Menu>
            <Menu.Item>Option 1</Menu.Item>
            <Menu.Item>Option 2</Menu.Item>
            <Menu.Item>Option 3</Menu.Item>
          </Menu>
        </Popup.Popper>
      </Popup>
    </CanvasProvider>
  );
};

SimplifiedSetup.storyName = 'No Theme Prop Needed';
