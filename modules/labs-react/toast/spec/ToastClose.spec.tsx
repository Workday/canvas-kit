import {fireEvent, render, screen} from '@testing-library/react';
import {Toast} from '../lib/Toast';
import {checkIcon} from '@workday/canvas-system-icons-web';
import {colors} from '@workday/canvas-kit-react/tokens';
import React from 'react';

describe('Toast.Close', () => {
  const cb = jest.fn();

  it('should call the on close callback', () => {
    const toastMessage = 'Your workbook was successfully processed.';
    render(
      <Toast>
        <Toast.Close onClose={cb} />
        <Toast.Content>
          <Toast.Icon icon={checkIcon} iconColor={colors.greenApple400} />
          <Toast.Message>{toastMessage}</Toast.Message>
        </Toast.Content>
      </Toast>
    );
    const closeIcon = screen.getByRole('button', {name: 'Close'});
    fireEvent.click(closeIcon);
    expect(cb).toHaveBeenCalledTimes(1);
  });
});
