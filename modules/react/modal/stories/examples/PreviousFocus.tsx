import {Modal, useModalModel} from '@workday/canvas-kit-react/modal';

export const PreviousFocus = ({autoFocus = false}: {autoFocus?: boolean}) => {
  const model = useModalModel();

  return (
    <Modal model={model}>
      <button onClick={() => model.events.show()}>First trigger</button>
      <button onClick={() => model.events.show()}>Second trigger</button>
      <Modal.Overlay>
        <Modal.Card>
          <Modal.Heading>Previous focus</Modal.Heading>
          <label>
            Note <input autoFocus={autoFocus} />
          </label>
          <Modal.CloseButton>Close</Modal.CloseButton>
        </Modal.Card>
      </Modal.Overlay>
    </Modal>
  );
};
