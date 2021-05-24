import React from 'react';

import {Button, DeleteButton} from '@workday/canvas-kit-react/button';
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

interface OpenPopupProps {
  onClose(): void;
  targetRef: React.RefObject<HTMLButtonElement>;
}

const OpenPopup = ({onClose, targetRef}: OpenPopupProps) => {
  const model = usePopupModel({
    // Behaviors check visibility. Since that is controlled externally, we'll initialize visible
    initialVisible: true,
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
      <Popup.Card model={model} width={400} padding={Popup.Padding.s}>
        <Popup.CloseIcon model={model} aria-label="Close" />
        <Popup.Heading model={model}>Delete Item</Popup.Heading>
        <Popup.Body>
          <p style={{marginBottom: '24px'}}>
            Are you sure you'd like to delete the item titled 'My Item'?
          </p>

          <DeleteButton style={{marginRight: '16px'}} {...closeProps}>
            Delete
          </DeleteButton>
          <Button {...closeProps}>Cancel</Button>
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
