import * as React from 'react';
import {screen, render, fireEvent} from '@testing-library/react';
import {checkIcon} from '@workday/canvas-system-icons-web';
import {Toast} from '@workday/canvas-kit-react/toast';

describe('Toast', () => {
  const cb = jest.fn();
  afterEach(() => {
    cb.mockReset();
  });

  describe('when rendered', () => {
    it('should render a Toast with an icon', () => {
      const toastMessage = 'Your workbook was successfully processed.';
      render(
        <Toast icon={checkIcon} data-testid={'myToast'}>
          {toastMessage}
        </Toast>
      );
      expect(screen.getByTestId('myToast')).toContainHTML('svg');
    });
  });

  describe('when rendered with children', () => {
    it('should render a Toast with a message', () => {
      const toastMessage = 'Your workbook was successfully processed.';
      render(
        <Toast icon={checkIcon} data-testid={'myToast'}>
          {toastMessage}
        </Toast>
      );
      expect(screen.getByTestId('myToast')).toHaveTextContent(toastMessage);
    });
  });

  describe('when rendered with a close icon', () => {
    it('should call the on close callback', () => {
      const toastMessage = 'Your workbook was successfully processed.';
      render(
        <Toast onClose={cb} icon={checkIcon} data-testid={'myToast'}>
          {toastMessage}
        </Toast>
      );
      const closeIcon = screen.getByRole('button', {name: 'Close'});
      fireEvent.click(closeIcon);
      expect(cb).toHaveBeenCalledTimes(1);
    });
  });

  describe('when rendered with an action', () => {
    it('should render an action text', () => {
      const toastMessage = 'Your workbook was successfully processed.';
      const actionText = 'View more details';
      render(
        <Toast onActionClick={cb} actionText={actionText} onClose={cb} icon={checkIcon}>
          {toastMessage}
        </Toast>
      );

      expect(screen.getByRole('dialog')).toHaveTextContent(actionText);
    });

    it('should call the onActionClick callback', () => {
      const toastMessage = 'Your workbook was successfully processed.';
      const actionText = 'View more details';
      const onCloseCB = jest.fn();
      render(
        <Toast onClose={cb} onActionClick={onCloseCB} actionText={actionText}>
          {toastMessage}
        </Toast>
      );

      fireEvent.click(screen.getByRole('button', {name: actionText}));
      expect(onCloseCB).toHaveBeenCalledTimes(1);
    });
  });
});
