import React from 'react';

import {PrimaryButton} from '@workday/canvas-kit-react/button';
import {CanvasProvider, sanaCanvasProviderTheme} from '@workday/canvas-kit-react/common';
import {FormField} from '@workday/canvas-kit-react/form-field';
import {Menu} from '@workday/canvas-kit-react/menu';
import {Popup, useCloseOnOutsideClick, usePopupModel} from '@workday/canvas-kit-react/popup';
import {TextInput} from '@workday/canvas-kit-react/text-input';

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
                <Menu.List role="listbox">
                  <Menu.Option data-id="selected">Option 1</Menu.Option>
                  <Menu.Option>Option 2</Menu.Option>
                  <Menu.Option>Option 3</Menu.Option>
                </Menu.List>
              </Menu>
              <PrimaryButton>Hello World</PrimaryButton>
            </Popup.Body>
            <FormField>
              <FormField.Label>Example text input</FormField.Label>
              <FormField.Field>
                <FormField.Input as={TextInput} />
              </FormField.Field>
            </FormField>
          </Popup.Card>
        </Popup.Popper>
      </Popup>
    </CanvasProvider>
  );
};
