import {render, screen} from '@testing-library/react';
import React from 'react';

import {Popup, usePopupModel} from '@workday/canvas-kit-react/popup';

describe('Popup.Heading', () => {
  verifyComponent(Popup.Heading, {modelFn: usePopupModel});

  it('should have a role of "heading"', () => {
    render(<Popup.Heading>Heading</Popup.Heading>);

    expect(screen.getByRole('heading')).toBeInTheDocument();
  });
});
