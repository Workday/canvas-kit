import React from 'react';

import {
  Popup,
  usePopupModel,
  useCloseOnEscape,
  useCloseOnOutsideClick,
  useInitialFocus,
  useReturnFocus,
} from '@workday/canvas-kit-react/popup';

interface MyTargetProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
}

const MyTarget = ({label, ...props}: MyTargetProps) => {
  return <button {...props}>{label}</button>;
};

export const CustomTarget = () => {
  const model = usePopupModel();

  useCloseOnOutsideClick(model);
  useCloseOnEscape(model);
  useInitialFocus(model);
  useReturnFocus(model);

  return (
    <Popup model={model}>
      <Popup.Target as={MyTarget} label="Open" />
      <Popup.Popper>
        <Popup.Card>
          <Popup.CloseIcon aria-label="Close" />
          <Popup.Heading>Popup</Popup.Heading>
          <Popup.Body>Contents</Popup.Body>
        </Popup.Card>
      </Popup.Popper>
    </Popup>
  );
};
