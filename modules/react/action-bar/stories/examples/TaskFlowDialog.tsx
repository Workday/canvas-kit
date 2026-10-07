import * as React from 'react';

import {ActionBar} from '@workday/canvas-kit-react/action-bar';
import {PrimaryButton} from '@workday/canvas-kit-react/button';
import {Dialog} from '@workday/canvas-kit-react/dialog';
import {system} from '@workday/canvas-tokens-web';

const PrimaryDialogTarget = React.forwardRef<
  HTMLButtonElement,
  React.ComponentPropsWithoutRef<typeof Dialog.Target>
>((props, ref) => <Dialog.Target as={PrimaryButton} ref={ref} {...props} />);

PrimaryDialogTarget.displayName = 'PrimaryDialogTarget';

export const TaskFlowDialog = () => {
  return (
    <Dialog>
      <ActionBar>
        <ActionBar.List position="relative" as="section" aria-label="Page actions">
          <ActionBar.Item as={PrimaryDialogTarget}>Create</ActionBar.Item>
          <ActionBar.Item>Cancel</ActionBar.Item>
        </ActionBar.List>
        <Dialog.Popper>
          <Dialog.Card>
            <Dialog.CloseIcon aria-label="Close" />
            <Dialog.Heading cs={{paddingBlockStart: system.padding.md}}>Create</Dialog.Heading>
            <Dialog.Body>Start a new item from this task flow.</Dialog.Body>
            <Dialog.ButtonGroup>
              <Dialog.CloseButton>Done</Dialog.CloseButton>
            </Dialog.ButtonGroup>
          </Dialog.Card>
        </Dialog.Popper>
      </ActionBar>
    </Dialog>
  );
};
