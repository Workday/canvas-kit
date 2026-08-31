import {render, screen} from '@testing-library/react';
import React from 'react';

import {Popup, usePopupModel} from '@workday/canvas-kit-react/popup';

describe('Popup.Card', () => {
  verifyComponent(Popup.Card, {modelFn: usePopupModel});

  it('should have a role of "dialog"', () => {
    render(<Popup.Card />);

    expect(screen.getByRole('dialog')).toBeInTheDocument();
  });
});
