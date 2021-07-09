/// <reference path="../../../../typings.d.ts" />
import * as React from 'react';

import {SecondaryButton, PrimaryButton} from '@workday/canvas-kit-react/button';
import {Popup, Popper, Placement} from '@workday/canvas-kit-react/popup';

export default {
  title: 'Testing/React/Popups/Popper',
};

export const UpdateOptions = () => {
  const [placement, setPlacement] = React.useState<Placement>('bottom');
  const [open, setOpen] = React.useState(false);
  const buttonRef = React.useRef<HTMLButtonElement>(null);
  const popupRef = React.useRef<HTMLDivElement>(null);

  React.useLayoutEffect(() => {
    setOpen(true);
  }, []);

  return (
    <>
      <div>
        <p>
          Changing the placement should update the popper, but not recreate the PopperJS instance
        </p>
        <SecondaryButton onClick={() => setPlacement('top')}>Top</SecondaryButton>
        <SecondaryButton onClick={() => setPlacement('bottom')}>Bottom</SecondaryButton>
        <div>Placement: {placement}</div>
      </div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          height: 400,
          width: 400,
          alignItems: 'center',
        }}
      >
        <PrimaryButton ref={buttonRef}>Target element</PrimaryButton>
        <Popper placement={placement} open={open} anchorElement={buttonRef.current!} ref={popupRef}>
          {({placement}) => {
            return (
              <Popup.Card width={400}>
                <Popup.Heading>{'Positioned Popper element'}</Popup.Heading>
                <Popup.Body>Placement:{placement}</Popup.Body>
              </Popup.Card>
            );
          }}
        </Popper>
      </div>
    </>
  );
};
