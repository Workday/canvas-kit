import {render, screen} from '@testing-library/react';
import React from 'react';

import {Popup, usePopupModel} from '@workday/canvas-kit-react/popup';

describe('Popup.CloseIcon', () => {
  verifyComponent(Popup.CloseIcon, {modelFn: usePopupModel});

  it('should have a role of "button"', () => {
    render(<Popup.CloseIcon aria-label="Close" />);

    expect(screen.getByRole('button', {name: 'Close'})).toBeInTheDocument();
  });
});
