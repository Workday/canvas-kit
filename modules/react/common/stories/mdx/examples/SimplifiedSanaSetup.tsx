import React from 'react';

import {PrimaryButton, SecondaryButton} from '@workday/canvas-kit-react/button';
import {CanvasProvider, sanaCanvasProviderTheme} from '@workday/canvas-kit-react/common';
import {Menu} from '@workday/canvas-kit-react/menu';
import {Popup, useCloseOnOutsideClick, usePopupModel} from '@workday/canvas-kit-react/popup';

/**
 * Scoped Sana setup for popup parity: `data-theme` themes the in-tree UI, and
 * `sanaCanvasProviderTheme` forwards brand CSS variables onto portaled popups
 * (menus, selects, modals) that render under `document.body`.
 */
export const SimplifiedSetup = () => {
  const myModel = usePopupModel();
  useCloseOnOutsideClick(myModel);
  return (
    <CanvasProvider theme={sanaCanvasProviderTheme} data-theme="sana-canvas">
      <Popup model={myModel}>
        <Popup.Target as={PrimaryButton}>Open Menu</Popup.Target>
        <Popup.Popper>
          <Popup.Card>
            <Popup.Body>
              <Menu initialSelectedIds={['selected']}>
                <Menu.Option id="selected" aria-selected={true}>
                  Option 1
                </Menu.Option>
                <Menu.Item>Option 2</Menu.Item>
                <Menu.Item>Option 3</Menu.Item>
              </Menu>
              <PrimaryButton>Hello World</PrimaryButton>
            </Popup.Body>
          </Popup.Card>
        </Popup.Popper>
      </Popup>
    </CanvasProvider>
  );
};
