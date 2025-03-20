import {Modal} from '@workday/canvas-kit-react/modal';
import {DeleteButton} from '@workday/canvas-kit-react/button';
import {Flex} from '@workday/canvas-kit-react/layout';

export const IframeTest = () => {
  return (
    <Modal>
      <Modal.Target as={DeleteButton}>Delete Item</Modal.Target>
      <Modal.Overlay>
        <Modal.Card>
          <Modal.CloseIcon aria-label="Close" />
          <Modal.Heading>Delete Item</Modal.Heading>
          <Modal.Body>
            <p>Are you sure you want to delete the item?</p>
            <Flex gap="s">
              <Modal.CloseButton as={DeleteButton}>Delete</Modal.CloseButton>
              <Modal.CloseButton>Cancel</Modal.CloseButton>
            </Flex>
            <iframe
              role="iframe"
              srcDoc="<html><body>Hello, <b>world</b>.<button>iframe button 1</button><button data-testid='button2'>iframe button 2</button></body></html>"
            />
          </Modal.Body>
        </Modal.Card>
      </Modal.Overlay>
    </Modal>
  );
};
