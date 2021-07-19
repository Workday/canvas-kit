import React from 'react';
import {screen, render} from '@testing-library/react';
import {Popup, usePopupModel} from '@workday/canvas-kit-react/popup';

describe('Popup.CloseButton', () => {
  verifyComponent(Popup.CloseButton, {modelFn: usePopupModel});

  it('should have a role of "button"', () => {
    render(<Popup.CloseButton>Close</Popup.CloseButton>);

    expect(screen.getByRole('button', {name: 'Close'})).toBeInTheDocument();
  });
});
