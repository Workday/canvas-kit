import {render, screen} from '@testing-library/react';
import {Toast} from '../lib/Toast';
import React from 'react';
import {usePopupModel} from '@workday/canvas-kit-react';

describe('Toast.Close', () => {
  verifyComponent(Toast.CloseIcon, {modelFn: usePopupModel});

  it('should have a role of "button"', () => {
    render(<Toast.CloseIcon aria-label="Close" />);
    expect(screen.getByRole('button', {name: 'Close'})).toBeInTheDocument();
  });
});
