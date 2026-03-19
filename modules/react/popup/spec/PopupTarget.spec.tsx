import {render, screen} from '@testing-library/react';
import React from 'react';

import {Popup, usePopupModel} from '@workday/canvas-kit-react/popup';

describe('Popup.Target', () => {
  verifyComponent(Popup.Target, {modelFn: usePopupModel});

  it('should have a role of "button"', () => {
    render(<Popup.Target>Open</Popup.Target>);

    expect(screen.getByRole('button', {name: 'Open'})).toBeInTheDocument();
  });
});
