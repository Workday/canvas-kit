import React from 'react';

import {Modal} from '@workday/canvas-kit-react/modal';

interface MyTargetProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
}

const MyTarget = ({label, ...props}: MyTargetProps) => {
  return <button {...props}>{label}</button>;
};

export const CustomTarget = () => {
  return (
    <Modal>
      <Modal.Target as={MyTarget} label="Open" />
      <Modal.Overlay>
        <Modal.Card>
          <Modal.CloseIcon aria-label="Close" />
          <Modal.Heading>Modal Heading</Modal.Heading>
          <Modal.Body>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec semper facilisis dolor
            quis facilisis. Aenean tempor eget quam et semper. Nam malesuada rhoncus euismod.
            Quisque vel urna feugiat, dictum risus sed, pulvinar nulla. Sed gravida, elit non
            iaculis blandit, ligula tortor posuere mauris, vitae cursus turpis nunc non arcu.
          </Modal.Body>
        </Modal.Card>
      </Modal.Overlay>
    </Modal>
  );
};
