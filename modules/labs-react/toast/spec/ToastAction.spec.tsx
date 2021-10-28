import {fireEvent, render, screen} from '@testing-library/react';
import {Toast} from '../lib/Toast';
import {checkIcon} from '@workday/canvas-system-icons-web';
import {colors} from '@workday/canvas-kit-react/tokens';
import React from 'react';

describe('Toast.Action', () => {
  const cb = jest.fn();

  it('should render an action text', () => {
    const toastMessage = 'Your workbook was successfully processed.';
    const actionText = 'View more details';
    render(
      <Toast mode="interactive">
        <Toast.Content>
          <Toast.Icon icon={checkIcon} iconColor={colors.greenApple400} />
          <Toast.Message>
            {toastMessage}
            <Toast.Action onClick={cb}>{actionText}</Toast.Action>
          </Toast.Message>
        </Toast.Content>
      </Toast>
    );

    expect(screen.getByRole('dialog')).toHaveTextContent(actionText);
  });

  it('should call the onActionClick callback', () => {
    const toastMessage = 'Your workbook was successfully processed.';
    const actionText = 'View more details';

    render(
      <Toast mode="interactive">
        <Toast.Content>
          <Toast.Icon icon={checkIcon} iconColor={colors.greenApple400} />
          <Toast.Message>
            {toastMessage}
            <Toast.Action onClick={cb}>{actionText}</Toast.Action>
          </Toast.Message>
        </Toast.Content>
      </Toast>
    );

    fireEvent.click(screen.getByRole('button', {name: actionText}));
    expect(cb).toHaveBeenCalledTimes(1);
  });
});
