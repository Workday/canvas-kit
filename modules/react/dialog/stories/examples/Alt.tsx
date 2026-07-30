import React from 'react';

import {SecondaryButton} from '@workday/canvas-kit-react/button';
import {Dialog} from '@workday/canvas-kit-react/dialog';
import {createStyles, px2rem} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';

const altBackgroundStyles = createStyles({
  background: system.color.bg.alt.default,
  padding: system.padding.xl,
  borderRadius: system.shape.md,
  minHeight: px2rem(400),
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

export const Alt = () => {
  return (
    <div className={altBackgroundStyles}>
      <Dialog>
        <Dialog.Target as={SecondaryButton}>Open Dialog</Dialog.Target>
        <Dialog.Popper>
          <Dialog.Card variant="alt">
            <Dialog.CloseIcon aria-label="Close" />
            <Dialog.Heading>Dialog with Alt Variant</Dialog.Heading>
            <Dialog.Body>
              This dialog uses the alt variant for proper contrast on colored backgrounds.
            </Dialog.Body>
            <Dialog.ButtonGroup>
              <Dialog.CloseButton as={SecondaryButton}>Cancel</Dialog.CloseButton>
              <Dialog.CloseButton>OK</Dialog.CloseButton>
            </Dialog.ButtonGroup>
          </Dialog.Card>
        </Dialog.Popper>
      </Dialog>
    </div>
  );
};
