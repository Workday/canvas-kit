import * as React from 'react';

import {PrimaryButton, SecondaryButton} from '@workday/canvas-kit-react/button';
import {Placement, Popper, Popup} from '@workday/canvas-kit-react/popup';
import {createStyles, px2rem} from '@workday/canvas-kit-styling';

export default {
  title: 'Testing/Popups/Popper',
  component: Popper,
};

const styles = createStyles({
  display: 'flex',
  justifyContent: 'center',
  height: px2rem(400),
  width: px2rem(400),
  alignItems: 'center',
});

export const UpdateOptions = {
  render: () => {
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
          <SecondaryButton onClick={() => setPlacement('left')}>Left</SecondaryButton>
          <div>Placement: {placement}</div>
        </div>
        <div className={styles}>
          <PrimaryButton ref={buttonRef}>Target element</PrimaryButton>
          <Popper
            placement={placement}
            open={open}
            anchorElement={buttonRef.current!}
            ref={popupRef}
          >
            {({placement}) => {
              return (
                <Popup.Card cs={{width: px2rem(400)}}>
                  <Popup.Heading>{'Positioned Popper element'}</Popup.Heading>
                  <Popup.Body>Placement:{placement}</Popup.Body>
                </Popup.Card>
              );
            }}
          </Popper>
        </div>
      </>
    );
  },
};
