import React from 'react';

import {TextInput} from '@workday/canvas-kit-react/text-input';
import {FormField} from '@workday/canvas-kit-react/form-field';
import {SecondaryButton, TertiaryButton} from '@workday/canvas-kit-react/button';
import {Flex} from '@workday/canvas-kit-react/layout';
import {
  Popup,
  useCloseOnOutsideClick,
  useCloseOnEscape,
  usePopupModel,
  useInitialFocus,
  useReturnFocus,
} from '@workday/canvas-kit-react/popup';

export const ReturnFocusTest = () => {
  const model = usePopupModel();

  useCloseOnOutsideClick(model);
  useCloseOnEscape(model);
  useInitialFocus(model);
  useReturnFocus(model);

  return (
    <div
      style={{width: 400, height: 400, overflow: 'scroll', padding: 4}}
      data-testid="scroll-area"
    >
      <div style={{width: 950}}>
        <p style={{marginBottom: 400}}>Scroll down</p>
        <p>Scroll right and click on the button</p>
        <Popup model={model}>
          <FormField id="return-focus-text-input" cs={{marginLeft: 400}}>
            <FormField.Label>Name</FormField.Label>
            <FormField.Input as={TextInput} />
          </FormField>
          <Flex style={{marginBottom: 400, marginLeft: 410}}>
            <SecondaryButton id="return-focus-button-tabindex" tabIndex={-1}>
              Button with TabIndex=-1
            </SecondaryButton>
            <Popup.Target data-testid="target">Open Popup</Popup.Target>
          </Flex>
          <Popup.Popper>
            <Popup.Card>
              <Popup.CloseIcon aria-label="Close" />
              <Popup.Body>
                <p>The "Open Popup" button should not receive focus if:</p>
                <ul>
                  <li>You click on the input</li>
                  <li>
                    You scroll the container so that less than half of the "Open Popup" is showing
                  </li>
                  <li>
                    <TertiaryButton
                      data-testid="focus-text-input-link"
                      onClick={() => {
                        model.events.hide();
                        document.getElementById('input-return-focus-text-input').focus();
                      }}
                    >
                      You click this link
                    </TertiaryButton>
                  </li>
                </ul>
              </Popup.Body>
            </Popup.Card>
          </Popup.Popper>
        </Popup>
      </div>
    </div>
  );
};
