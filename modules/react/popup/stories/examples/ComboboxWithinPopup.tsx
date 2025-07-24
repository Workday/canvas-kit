import {FormField} from '@workday/canvas-kit-react/form-field';
import {SecondaryButton} from '@workday/canvas-kit-react/button';
import {Combobox} from '@workday/canvas-kit-react/combobox';
import {
  Popup,
  useCloseOnOutsideClick,
  useCloseOnEscape,
  usePopupModel,
  useInitialFocus,
  useReturnFocus,
} from '@workday/canvas-kit-react/popup';

export const ComboboxWithinPopup = () => {
  const model = usePopupModel();

  useCloseOnOutsideClick(model);
  useCloseOnEscape(model);
  useInitialFocus(model);
  useReturnFocus(model);

  return (
    <Popup model={model}>
      <Popup.Target as={SecondaryButton}>Open Popup</Popup.Target>
      <Popup.Popper>
        <Popup.Card>
          <Popup.CloseIcon aria-label="Close" />
          <Popup.Heading>Popup With Combobox</Popup.Heading>
          <Popup.Body>
            <FormField orientation="vertical">
              <FormField.Label>Choose Your Food</FormField.Label>
              <Combobox items={['Pizza', 'Cheeseburger', 'Fries', 'Hot Dog']}>
                <FormField.Input as={Combobox.Input} />
                <Combobox.Menu.Popper>
                  <Combobox.Menu.Card>
                    <Combobox.Menu.List>
                      {item => <Combobox.Menu.Item>{item}</Combobox.Menu.Item>}
                    </Combobox.Menu.List>
                  </Combobox.Menu.Card>
                </Combobox.Menu.Popper>
              </Combobox>
            </FormField>
          </Popup.Body>
        </Popup.Card>
      </Popup.Popper>
    </Popup>
  );
};
