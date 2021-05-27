import React from 'react';
import {screen, render} from '@testing-library/react';
import {Popup, usePopupModel} from '@workday/canvas-kit-react/popup';

describe('Popup.Target', () => {
  verifyComponent(Popup.Target, {modelFn: usePopupModel});

  it('should have a role of "button"', () => {
    render(<Popup.Target>Open</Popup.Target>);

    expect(screen.getByRole('button', {name: 'Open'})).toBeInTheDocument();
  });
});
