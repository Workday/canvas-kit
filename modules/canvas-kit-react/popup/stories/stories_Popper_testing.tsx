/// <reference path="../../../../typings.d.ts" />
import * as React from 'react';

import {Button} from '@workday/canvas-kit-react-button';
import {Popup, Popper, Placement} from '@workday/canvas-kit-react-popup';

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
        <Button onClick={() => setPlacement('top')}>Top</Button>
        <Button onClick={() => setPlacement('bottom')}>Bottom</Button>
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
        <Button buttonRef={buttonRef} variant={Button.Variant.Primary}>
          Target element
        </Button>
        <Popper placement={placement} open={open} anchorElement={buttonRef.current!} ref={popupRef}>
          {({placement}) => {
            return (
              <Popup width={400} heading={'Positioned Popper element'}>
                Placement: {placement}
              </Popup>
            );
          }}
        </Popper>
      </div>
    </>
  );
};
