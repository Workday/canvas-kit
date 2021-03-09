import * as React from 'react';
import {render, fireEvent} from '@testing-library/react';

import Modal from '../lib/Modal';

const renderModal = (props?: any) =>
  render(
    <Modal open={true} handleClose={jest.fn()} heading="Test" {...props}>
      Hello World
    </Modal>
  );

describe('Modal', () => {
  test('should call a callback function', async () => {
    const handleClose = jest.fn();
    const {findByLabelText} = renderModal({handleClose});
    fireEvent.click(await findByLabelText('Close'));
    expect(handleClose).toHaveBeenCalledTimes(1);
  });

  test('Modal should spread extra props', () => {
    const {getByRole} = renderModal({['data-propspread']: 'test'});
    expect(getByRole('dialog').parentElement.parentElement).toHaveAttribute(
      'data-propspread',
      'test'
    );
  });

  test('Modal should forward closeButtonAriaLabel prop to Popup', () => {
    const closeButtonAriaLabel = 'close button aria label';
    const {getByRole} = renderModal({closeButtonAriaLabel});
    expect(getByRole('button')).toHaveAttribute('aria-label', closeButtonAriaLabel);
  });
});
