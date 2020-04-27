import * as React from 'react';
import {render, fireEvent} from '@testing-library/react';
import Popup from '../lib/Popup';

describe('Popup', () => {
  const cb = jest.fn();
  afterEach(() => {
    cb.mockReset();
  });

  describe('when rendered with a heading', () => {
    it('should render popup with heading text', () => {
      const headingText = 'Delete item';
      const {getByRole} = render(
        <Popup heading={headingText}>
          <div>Are you sure you'd like to delete the item titled 'My Item'?</div>

          <button onClick={cb}>Delete</button>
        </Popup>
      );
      expect(getByRole('dialog').querySelector('h3')).toContainHTML(headingText);
    });
  });

  describe('when rendered with a handleClose', () => {
    it('should render popup with a close button', () => {
      const closeButtonAriaLabel = 'close';
      const {getAllByRole} = render(
        <Popup closeLabel={closeButtonAriaLabel} handleClose={cb}>
          <div>Are you sure you'd like to delete the item titled 'My Item'?</div>

          <button onClick={cb}>Delete</button>
        </Popup>
      );

      expect(getAllByRole('button')[0]).toHaveAttribute('aria-label', closeButtonAriaLabel);
    });

    it('should call the handleClose callback when clicked', () => {
      const closeButtonAriaLabel = 'close';
      const {getAllByRole} = render(
        <Popup closeLabel={closeButtonAriaLabel} handleClose={cb}>
          <div>Are you sure you'd like to delete the item titled 'My Item'?</div>

          <button onClick={cb}>Delete</button>
        </Popup>
      );
      fireEvent.click(getAllByRole('button')[0]);

      expect(cb).toHaveBeenCalledTimes(1);
    });
  });

  // describe('when rendered with children', () => {
  //   it('should render a Toast with a message', () => {
  //     const toastMessage = 'Your workbook was successfully processed.';
  //     const {getByTestId} = render(
  //       <Popup icon={checkIcon} data-testid={'myToast'}>
  //         {toastMessage}
  //       </Popup>
  //     );
  //     expect(getByTestId('myToast')).toHaveTextContent(toastMessage);
  //   });
  // });

  // describe('when rendered with a close icon', () => {
  //   it('should call the on close callback', () => {
  //     const toastMessage = 'Your workbook was successfully processed.';
  //     const {container} = render(
  //       <Popup onClose={cb} icon={checkIcon} data-testid={'myToast'}>
  //         {toastMessage}
  //       </Popup>
  //     );
  //     const closeIcon = container.querySelector('[data-close="close"]'); /*? */
  //     fireEvent.click(closeIcon); /*? */
  //     expect(cb).toHaveBeenCalledTimes(1);
  //   });
  // });

  // describe('when rendered with an action', () => {
  //   it('should render an action text', () => {
  //     const toastMessage = 'Your workbook was successfully processed.';
  //     const actionText = 'View more details';
  //     const {container} = render(
  //       <Popup onActionClick={cb} actionText={actionText} onClose={cb} icon={checkIcon}>
  //         {toastMessage}
  //       </Popup>
  //     );

  //     expect(container).toHaveTextContent(actionText);
  //   });

  //   it('should call the onActionClick callback', () => {
  //     const toastMessage = 'Your workbook was successfully processed.';
  //     const actionText = 'View more details';
  //     const onCloseCB = jest.fn();
  //     const {getAllByRole} = render(
  //       <Popup onClose={cb} onActionClick={onCloseCB} actionText={actionText}>
  //         {toastMessage}
  //       </Popup>
  //     );

  //     fireEvent.click(getAllByRole('button')[1]);
  //     expect(onCloseCB).toHaveBeenCalledTimes(1);
  //   });
  // });
});
