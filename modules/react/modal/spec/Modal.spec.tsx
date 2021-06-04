import * as React from 'react';
import {render, fireEvent, screen} from '@testing-library/react';

import Modal from '../lib/Modal';

const renderModal = (props?: any) =>
  render(
    <Modal open={true} handleClose={jest.fn()} heading="Test" {...props}>
      Hello World
    </Modal>
  );

describe('Modal', () => {
  test('should call a callback function', () => {
    const handleClose = jest.fn();
    renderModal({handleClose});
    fireEvent.click(screen.getByLabelText('Close'));
    expect(handleClose).toHaveBeenCalledTimes(1);
  });

  test('should spread extra props', () => {
    renderModal({['data-propspread']: 'test'});
    expect(screen.getByRole('dialog').parentElement.parentElement).toHaveAttribute(
      'data-propspread',
      'test'
    );
  });

  test('should forward closeButtonAriaLabel prop to Popup', () => {
    const closeButtonAriaLabel = 'close button aria label';
    renderModal({closeButtonAriaLabel});
    expect(screen.getByRole('button')).toHaveAttribute('aria-label', closeButtonAriaLabel);
  });

  test('should add `data-behavior-click-outside-close=topmost` to stack element', () => {
    renderModal();
    expect(
      screen.getByRole('dialog').closest('[data-behavior-click-outside-close]')
    ).toHaveAttribute('data-behavior-click-outside-close', 'topmost');
  });
});
