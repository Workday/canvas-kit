import React from 'react';
import {screen, render} from '@testing-library/react';
import {Popup, usePopupModel} from '@workday/canvas-kit-react/popup';

describe('Popup.Card', () => {
  verifyComponent(Popup.Card, {modelFn: usePopupModel});

  it('should have a role of "dialog"', () => {
    render(<Popup.Card />);

    expect(screen.getByRole('dialog')).toBeInTheDocument();
  });
});
