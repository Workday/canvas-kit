import * as React from 'react';
import {Modal, useModalModel} from '@workday/canvas-kit-react/modal';
import {Popup, useCloseOnOutsideClick, usePopupModel} from '@workday/canvas-kit-react/popup';
import {Flex} from '@workday/canvas-kit-react/layout';
import {Tooltip} from '@workday/canvas-kit-react/tooltip';
import {createStyles} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';

const flexStyles = createStyles({
  gap: system.space.x4,
});

export const WithTooltips = () => {
  const modal = useModalModel();
  const popup1 = usePopupModel();
  const popup2 = usePopupModel();
  const closeModal = (event: React.MouseEvent) => modal.events.hide(event);

  useCloseOnOutsideClick(popup1);

  return (
    <>
      <Modal model={modal}>
        <Modal.Target>Open Modal</Modal.Target>
        <Modal.Overlay>
          <Modal.Card cs={{width: 'auto'}}>
            <Modal.CloseIcon aria-label="Close" />
            <Modal.Heading>Open Modal</Modal.Heading>
            <Modal.Body>
              <p>Open a hidable and non-hidable popups</p>
              <Flex cs={flexStyles}>
                <Popup.Target model={popup1}>Hidable Popup</Popup.Target>
                <Popup.Target model={popup2}>Non-hidable Popup</Popup.Target>
                <Tooltip title="Not so sure" type="muted">
                  <Popup.CloseButton onClick={closeModal}>Cancel</Popup.CloseButton>
                </Tooltip>
              </Flex>
            </Modal.Body>
          </Modal.Card>
        </Modal.Overlay>
      </Modal>
      <Popup model={popup1}>
        <Popup.Popper>
          <Popup.Card>
            <Popup.CloseIcon aria-label="Close" />
            <Popup.Heading>Hidable Popup</Popup.Heading>
            <Popup.Body>
              <p>Pressing 'OK' will close the modal</p>
              <Tooltip
                placement="left"
                title="Really, Really, Really, Really, Really sure"
                type="muted"
              >
                <Popup.CloseButton onClick={closeModal}>OK</Popup.CloseButton>
              </Tooltip>
            </Popup.Body>
          </Popup.Card>
        </Popup.Popper>
      </Popup>
      <Popup model={popup2}>
        <Popup.Popper>
          <Popup.Card>
            <Popup.CloseIcon aria-label="Close" />
            <Popup.Heading>Non-hidable Popup</Popup.Heading>
            <Popup.Body>
              <p>Pressing 'OK' will close the modal</p>
              <Tooltip
                placement="left"
                title="Really, Really, Really, Really, Really sure"
                type="muted"
              >
                <Popup.CloseButton onClick={closeModal}>OK</Popup.CloseButton>
              </Tooltip>
            </Popup.Body>
          </Popup.Card>
        </Popup.Popper>
      </Popup>
    </>
  );
};
