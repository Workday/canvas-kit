import {render, screen} from '@testing-library/react';
import {Toast} from '../lib/Toast';
import {ToastMessage} from '../lib/ToastMessage';
import React from 'react';

describe('Toast.Message', () => {
  it('should render a Toast with a message', () => {
    const toastMessage = 'Your workbook was successfully processed.';
    render(
      <Toast mode="noninteractive" data-testid={'myToast'}>
        <Toast.Content>
          <ToastMessage>{toastMessage}</ToastMessage>
        </Toast.Content>
      </Toast>
    );
    expect(screen.getByTestId('myToast')).toHaveTextContent(toastMessage);
  });
});
