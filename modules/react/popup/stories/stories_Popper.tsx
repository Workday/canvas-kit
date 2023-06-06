import * as React from 'react';

import {PrimaryButton, SecondaryButton} from '@workday/canvas-kit-react/button';
import {Popper} from '@workday/canvas-kit-react/popup';
import {Card} from '@workday/canvas-kit-react/card';

import {Flex} from '@workday/canvas-kit-react/layout';

export default {
  title: 'Components/Popups/Popper',
  component: Popper,
  parameters: {
    ReadmePath: 'react/popup',
  },
};

export * from './stories_Popper_VisualTesting';

export const PopperStory = () => {
  const [open, setOpen] = React.useState(false);
  const buttonRef = React.useRef<HTMLButtonElement>(null);
  const popupRef = React.useRef<HTMLDivElement>(null);
  const popperInstanceRef = React.useRef(null);

  const onClickButton = () => setOpen(!open);
  const onClose = () => setOpen(false);
  const [big, setBig] = React.useState(false);

  return (
    <div style={{display: 'flex', justifyContent: 'center'}}>
      <PrimaryButton ref={buttonRef} onClick={onClickButton}>
        Toggle Popup
      </PrimaryButton>
      <Popper
        placement="bottom"
        open={open}
        anchorElement={buttonRef.current!}
        ref={popupRef}
        popperInstanceRef={popperInstanceRef}
      >
        <Card>
          <Card.Heading>Popper Example</Card.Heading>
          <Card.Body>
            <p>A card positioned by Popper!</p>
            <div style={big ? {width: 500} : {}}></div>
            <Flex gap="s">
              <SecondaryButton
                onClick={() => {
                  setBig(!big);
                  requestAnimationFrame(() => {
                    popperInstanceRef.current.update();
                  });
                }}
              >
                Toggle size
              </SecondaryButton>
              <SecondaryButton onClick={onClose}>Close</SecondaryButton>
            </Flex>
          </Card.Body>
        </Card>
      </Popper>
    </div>
  );
};

PopperStory.storyName = 'Popper';
