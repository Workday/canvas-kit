import * as React from 'react';
import {render, fireEvent} from '@testing-library/react';

import Modal from '../lib/Modal';

describe('Modal', () => {
  test('should call a callback function', async () => {
    const cb = jest.fn();
    const {findByLabelText} = render(
      <Modal open={true} handleClose={cb} heading="Test">
        Hello World
      </Modal>
    );

    fireEvent.click(await findByLabelText('Close'));

    expect(cb).toHaveBeenCalledTimes(1);
  });

  test('Modal should spread extra props', async () => {
    const cb = jest.fn();
    const {getByRole} = render(
      <Modal handleClose={cb} heading="Test" open={true} data-propspread="test" />
    );

    expect(getByRole('dialog').parentElement).toHaveAttribute('data-propspread', 'test');
  });
});
