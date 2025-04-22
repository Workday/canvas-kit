import {Modal, useModalModel} from '@workday/canvas-kit-react/modal';
import {DeleteButton} from '@workday/canvas-kit-react/button';
import {
  Popup,
  useCloseOnOutsideClick,
  useCloseOnEscape,
  usePopupModel,
} from '@workday/canvas-kit-react/popup';
import {Flex} from '@workday/canvas-kit-react/layout';

export const ModalWithPopup = () => {
  const modal = useModalModel();
  const popup = usePopupModel();

  const handleDelete = () => {
    console.log('Delete Item');
  };

  useCloseOnOutsideClick(popup);
  useCloseOnEscape(popup);

  return (
    <>
      <Modal model={modal}>
        <Modal.Target as={DeleteButton}>Delete Item</Modal.Target>
        <Modal.Overlay>
          <Modal.Card>
            <Modal.CloseIcon aria-label="Close" />
            <Modal.Heading>Delete Item</Modal.Heading>
            <Modal.Body>
              <p>Are you sure you want to delete the item?</p>
              <Popup model={popup}>
                <Flex gap="s">
                  <Popup.Target as={DeleteButton}>Yes, Delete</Popup.Target>
                  <Popup.CloseButton>Cancel</Popup.CloseButton>
                </Flex>
                <Popup.Popper>
                  <Popup.Card>
                    <Popup.CloseIcon aria-label="Close" />
                    <Popup.Heading>Really Delete Item</Popup.Heading>
                    <Popup.Body>
                      <p>Are you sure you'd like to delete the item titled 'My Item'?</p>
                      <Flex gap="s">
                        <Popup.CloseButton
                          as={DeleteButton}
                          onClick={event => {
                            modal.events.hide(event);
                            handleDelete();
                          }}
                        >
                          Yes, Really Delete
                        </Popup.CloseButton>
                        <Popup.CloseButton>Cancel</Popup.CloseButton>
                      </Flex>
                    </Popup.Body>
                  </Popup.Card>
                </Popup.Popper>
              </Popup>
            </Modal.Body>
          </Modal.Card>
        </Modal.Overlay>
      </Modal>
    </>
  );
};
