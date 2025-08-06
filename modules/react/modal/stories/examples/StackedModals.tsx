import {Modal, useModalModel} from '@workday/canvas-kit-react/modal';
import {DeleteButton} from '@workday/canvas-kit-react/button';
import {Flex} from '@workday/canvas-kit-react/layout';

export const StackedModals = () => {
  const model = useModalModel();

  const handleDelete = () => {
    console.log('Delete Item');
  };

  return (
    <Modal model={model}>
      <Modal.Target as={DeleteButton}>Delete Item</Modal.Target>
      <Modal.Overlay>
        <Modal.Card>
          <Modal.CloseIcon aria-label="Close" />
          <Modal.Heading>Delete Item</Modal.Heading>
          <Modal.Body>
            <p>Are you sure you want to delete the item?</p>
            <Flex gap="s">
              <Modal>
                <Modal.Target as={DeleteButton}>Yes, Delete</Modal.Target>
                <Modal.Overlay>
                  <Modal.Card>
                    <Modal.CloseIcon aria-label="Close" />
                    <Modal.Heading>Really Delete Item</Modal.Heading>
                    <Modal.Body>
                      <p>
                        Are you <em>really</em> sure you want to delete the item?
                      </p>
                      <Flex gap="s">
                        <Modal.CloseButton
                          as={DeleteButton}
                          onClick={event => {
                            model.events.hide(event);
                            handleDelete();
                          }}
                        >
                          Yes, Really Delete
                        </Modal.CloseButton>
                        <Modal.CloseButton>Cancel</Modal.CloseButton>
                      </Flex>
                    </Modal.Body>
                  </Modal.Card>
                </Modal.Overlay>
              </Modal>
              <Modal.CloseButton>Cancel</Modal.CloseButton>
            </Flex>
          </Modal.Body>
        </Modal.Card>
      </Modal.Overlay>
    </Modal>
  );
};
