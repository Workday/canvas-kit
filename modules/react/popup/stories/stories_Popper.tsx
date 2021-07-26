/// <reference path="../../../../typings.d.ts" />
import * as React from 'react';
import withReadme from 'storybook-readme/with-readme';

import {PrimaryButton, SecondaryButton} from '@workday/canvas-kit-react/button';
import {Popper} from '@workday/canvas-kit-react/popup';
import {Card} from '@workday/canvas-kit-react/card';

import README from '../README.md';

export default {
  title: 'Components/Popups/Popper/React',
  component: Popper,
  decorators: [withReadme(README)],
};

export * from './stories_Popper_VisualTesting';

export const PopperStory = () => {
  const [open, setOpen] = React.useState(false);
  const buttonRef = React.useRef<HTMLButtonElement>(null);
  const popupRef = React.useRef<HTMLDivElement>(null);

  const onClickButton = () => setOpen(!open);
  const onClose = () => setOpen(false);

  return (
    <div style={{display: 'flex', justifyContent: 'center'}}>
      <PrimaryButton ref={buttonRef} onClick={onClickButton}>
        Toggle Popup
      </PrimaryButton>
      <Popper placement="bottom" open={open} anchorElement={buttonRef.current!} ref={popupRef}>
        <Card>
          <Card.Heading>Popper Example</Card.Heading>
          <Card.Body>
            <p>A card positioned by Popper!</p>
            <SecondaryButton onClick={onClose}>Close</SecondaryButton>
          </Card.Body>
        </Card>
      </Popper>
    </div>
  );
};

PopperStory.storyName = 'Popper';
