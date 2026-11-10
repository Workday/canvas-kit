import React from 'react';

import {Modal, useModalModel} from '@workday/canvas-kit-react/modal';

export const DynamicTrigger = () => {
  const model = useModalModel();
  const [showTrigger, setShowTrigger] = React.useState(true);
  const [targetVersion, setTargetVersion] = React.useState(0);

  return (
    <Modal model={model}>
      {showTrigger && <button onClick={() => model.events.show()}>Open modal</button>}
      <button key={targetVersion} ref={model.state.targetRef} onClick={() => model.events.show()}>
        Fallback trigger
      </button>
      <Modal.Overlay>
        <Modal.Card>
          <Modal.Heading>Dynamic trigger</Modal.Heading>
          <button onClick={() => setShowTrigger(false)}>Remove trigger</button>
          <button
            onClick={() => {
              setShowTrigger(false);
              setTargetVersion(version => version + 1);
            }}
          >
            Replace trigger
          </button>
          <Modal.CloseButton>Close</Modal.CloseButton>
        </Modal.Card>
      </Modal.Overlay>
    </Modal>
  );
};
