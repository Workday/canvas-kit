import React from 'react';

import {SecondaryButton, DeleteButton} from '@workday/canvas-kit-react/button';
import {
  Popup,
  usePopupModel,
  useInitialFocus,
  useCloseOnOutsideClick,
  useCloseOnEscape,
  useReturnFocus,
  usePopupCloseButton,
  Popper,
} from '@workday/canvas-kit-react/popup';
import {HStack} from '@workday/canvas-kit-labs-react/layout';
import {Box} from '@workday/canvas-kit-labs-react/common';

interface OpenPopupProps {
  onClose(): void;
  targetRef: React.RefObject<HTMLButtonElement>;
}

const OpenPopup = ({onClose, targetRef}: OpenPopupProps) => {
  const model = usePopupModel({
    // Behaviors check visibility. Since that is controlled externally, we'll initialize visible
    initialVisibility: 'visible',
    // The target isn't handled directly by this model, so we'll manually set a ref to return focus
    returnFocusRef: targetRef,
    onHide: onClose,
  });

  const closeProps = usePopupCloseButton(model);

  useCloseOnOutsideClick(model);
  useCloseOnEscape(model);
  useInitialFocus(model);
  useReturnFocus(model);

  return (
    <Popper anchorElement={targetRef} ref={model.state.stackRef}>
      <Popup.Card model={model} width={400} padding="s">
        <Popup.CloseIcon model={model} aria-label="Close" />
        <Popup.Heading model={model}>Delete Item</Popup.Heading>
        <Popup.Body>
          <Box as="p" marginBottom="m">
            Are you sure you'd like to delete the item titled 'My Item'?
          </Box>

          <HStack spacing="s">
            <DeleteButton {...closeProps}>Delete</DeleteButton>
            <SecondaryButton {...closeProps}>Cancel</SecondaryButton>
          </HStack>
        </Popup.Body>
      </Popup.Card>
    </Popper>
  );
};

export const ManualControl = () => {
  const targetRef = React.useRef<HTMLButtonElement>(null);
  const [visible, setVisible] = React.useState(false);

  return (
    <>
      <DeleteButton
        ref={targetRef}
        onClick={() => {
          setVisible(true);
        }}
      >
        Delete Item
      </DeleteButton>
      {visible ? (
        <OpenPopup
          onClose={() => {
            setVisible(false);
          }}
          targetRef={targetRef}
        />
      ) : null}
    </>
  );
};
