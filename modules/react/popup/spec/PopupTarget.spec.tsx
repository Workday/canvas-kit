import React from 'react';
import {screen, render} from '@testing-library/react';
import {Popup, usePopupModel} from '@workday/canvas-kit-react/popup';

describe('Popup.Target', () => {
  verifyComponent(Popup.Target, {modelFn: usePopupModel});

  it('should have a role of "button"', () => {
    render(
      <Popup>
        <Popup.Target>Open</Popup.Target>
      </Popup>
    );

    expect(screen.getByRole('button', {name: 'Open'})).toBeInTheDocument();
  });
});

// TODO... Fix the way the ref works here... The usePopupTarget hook uses `state.targetRef`, but needs to forward the ref properly
