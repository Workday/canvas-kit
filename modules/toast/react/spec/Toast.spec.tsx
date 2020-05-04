import * as React from 'react';
import {render, fireEvent} from '@testing-library/react';
import {checkIcon} from '@workday/canvas-system-icons-web';
import Toast from '../lib/Toast';

describe('Toast', () => {
  const cb = jest.fn();
  afterEach(() => {
    cb.mockReset();
  });

  describe('when rendered', () => {
    it('should render a Toast with an icon', () => {
      const toastMessage = 'Your workbook was successfully processed.';
      const {getByTestId} = render(
        <Toast icon={checkIcon} data-testid={'myToast'}>
          {toastMessage}
        </Toast>
      );
      expect(getByTestId('myToast')).toContainHTML('svg');
    });
  });

  describe('when rendered with children', () => {
    it('should render a Toast with a message', () => {
      const toastMessage = 'Your workbook was successfully processed.';
      const {getByTestId} = render(
        <Toast icon={checkIcon} data-testid={'myToast'}>
          {toastMessage}
        </Toast>
      );
      expect(getByTestId('myToast')).toHaveTextContent(toastMessage);
    });
  });

  describe('when rendered with a close icon', () => {
    it('should call the on close callback', () => {
      const toastMessage = 'Your workbook was successfully processed.';
      const {container} = render(
        <Toast onClose={cb} icon={checkIcon} data-testid={'myToast'}>
          {toastMessage}
        </Toast>
      );
      const closeIcon = container.querySelector('[data-close="close"]');
      fireEvent.click(closeIcon);
      expect(cb).toHaveBeenCalledTimes(1);
    });
  });

  describe('when rendered with an action', () => {
    it('should render an action text', () => {
      const toastMessage = 'Your workbook was successfully processed.';
      const actionText = 'View more details';
      const {container} = render(
        <Toast onActionClick={cb} actionText={actionText} onClose={cb} icon={checkIcon}>
          {toastMessage}
        </Toast>
      );

      expect(container).toHaveTextContent(actionText);
    });

    it('should call the onActionClick callback', () => {
      const toastMessage = 'Your workbook was successfully processed.';
      const actionText = 'View more details';
      const onCloseCB = jest.fn();
      const {getAllByRole} = render(
        <Toast onClose={cb} onActionClick={onCloseCB} actionText={actionText}>
          {toastMessage}
        </Toast>
      );

      fireEvent.click(getAllByRole('button')[1]);
      expect(onCloseCB).toHaveBeenCalledTimes(1);
    });
  });
});
