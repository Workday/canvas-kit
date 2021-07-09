import React from 'react';
import {screen, render} from '@testing-library/react';
import {Modal, useModalModel} from '@workday/canvas-kit-react/modal';

describe('Modal.Card', () => {
  verifyComponent(Modal.Card, {modelFn: useModalModel});

  it('should have a role of "dialog"', () => {
    render(<Modal.Card />);

    expect(screen.getByRole('dialog')).toBeInTheDocument();
  });
});
