import React from 'react';

import {PrimaryButton} from '@workday/canvas-kit-react/button';
import {useUniqueId} from '@workday/canvas-kit-react/common';
import {FormField} from '@workday/canvas-kit-react/form-field';
import {Flex} from '@workday/canvas-kit-react/layout';
import {
  Popup,
  useCloseOnEscape,
  useCloseOnOutsideClick,
  useFocusRedirect,
  useInitialFocus,
  usePopupModel,
  useReturnFocus,
} from '@workday/canvas-kit-react/popup';
import {Text} from '@workday/canvas-kit-react/text';
import {TextInput} from '@workday/canvas-kit-react/text-input';
import {createStyles, px2rem} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';

const cardStyles = createStyles({
  width: px2rem(400),
});

const bodyStyles = createStyles({
  marginBlock: '0',
});

const columnStyles = createStyles({
  gap: system.gap.md,
  alignItems: 'flex-start',
});

const InitialFocusOnButton = () => {
  const messageId = useUniqueId();
  const initialFocusRef = React.useRef(null);
  const model = usePopupModel({
    initialFocusRef,
  });

  useCloseOnOutsideClick(model);
  useCloseOnEscape(model);
  useInitialFocus(model);
  useReturnFocus(model);
  useFocusRedirect(model);

  return (
    <Popup model={model}>
      <Popup.Target>Initial focus: OK button</Popup.Target>
      <Popup.Popper placement={'bottom'}>
        <Popup.Card cs={cardStyles} aria-describedby={messageId}>
          <Popup.Heading>Confirmation</Popup.Heading>
          <Popup.Body>
            <Text cs={bodyStyles} id={messageId}>
              Your message has been sent!
            </Text>
          </Popup.Body>
          <Popup.ButtonGroup>
            <Popup.CloseButton as={PrimaryButton} ref={initialFocusRef}>
              OK
            </Popup.CloseButton>
          </Popup.ButtonGroup>
        </Popup.Card>
      </Popup.Popper>
    </Popup>
  );
};

const InitialFocusOnTextInput = () => {
  const descriptionId = useUniqueId();
  const initialFocusRef = React.useRef<HTMLInputElement>(null);
  const model = usePopupModel({
    initialFocusRef,
  });

  useCloseOnOutsideClick(model);
  useCloseOnEscape(model);
  useInitialFocus(model);
  useReturnFocus(model);
  useFocusRedirect(model);

  return (
    <Popup model={model}>
      <Popup.Target>Initial focus: text input</Popup.Target>
      <Popup.Popper placement={'bottom'}>
        <Popup.Card cs={cardStyles} aria-describedby={descriptionId}>
          <Popup.Heading>Quick reply</Popup.Heading>
          <Popup.Body>
            <FormField>
              <FormField.Label>Message</FormField.Label>
              <FormField.Input as={TextInput} ref={initialFocusRef} />
            </FormField>
          </Popup.Body>
          <Popup.ButtonGroup>
            <Popup.CloseButton>Cancel</Popup.CloseButton>
            <Popup.CloseButton as={PrimaryButton}>Send</Popup.CloseButton>
          </Popup.ButtonGroup>
        </Popup.Card>
      </Popup.Popper>
    </Popup>
  );
};

const InitialFocusOnHeading = () => {
  const headingFocusRef = React.useRef<HTMLHeadingElement>(null);
  const model = usePopupModel({
    initialFocusRef: headingFocusRef,
  });

  useCloseOnOutsideClick(model);
  useCloseOnEscape(model);
  useInitialFocus(model);
  useReturnFocus(model);
  useFocusRedirect(model);

  return (
    <Popup model={model}>
      <Popup.Target>Initial focus: heading</Popup.Target>
      <Popup.Popper placement={'bottom'}>
        <Popup.Card cs={cardStyles}>
          <Popup.Heading ref={headingFocusRef} tabIndex={-1}>
            Important notice
          </Popup.Heading>
          <Popup.Body>
            <Text cs={bodyStyles}>Review the summary below before continuing.</Text>
          </Popup.Body>
          <Popup.ButtonGroup>
            <Popup.CloseButton as={PrimaryButton}>Continue</Popup.CloseButton>
          </Popup.ButtonGroup>
        </Popup.Card>
      </Popup.Popper>
    </Popup>
  );
};

export const InitialFocus = () => {
  return (
    <Flex cs={columnStyles}>
      <InitialFocusOnButton />
      <InitialFocusOnTextInput />
      <InitialFocusOnHeading />
    </Flex>
  );
};
