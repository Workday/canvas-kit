import React from 'react';

import {
  Popup,
  useCloseOnEscape,
  useCloseOnOutsideClick,
  useInitialFocus,
  usePopupModel,
  useReturnFocus,
} from '@workday/canvas-kit-react/popup';
import {px2rem} from '@workday/canvas-kit-styling';

interface MyTargetProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
}

const MyTarget = React.forwardRef<HTMLButtonElement, MyTargetProps>(({label, ...props}, ref) => {
  return (
    <button {...props} ref={ref}>
      {label}
    </button>
  );
});

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
        <Popup.Card cs={{minWidth: px2rem(320)}}>
          <Popup.CloseIcon aria-label="Close" />
          <Popup.Heading>Popup</Popup.Heading>
          <Popup.Body>Contents</Popup.Body>
        </Popup.Card>
      </Popup.Popper>
    </Popup>
  );
};
