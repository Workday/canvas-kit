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

  describe('when rendered with extra props', () => {
    it('should render popup with extra props', () => {
      const {getByRole} = render(
        <Popup data-propspread="test" handleClose={cb}>
          <div>Are you sure you'd like to delete the item titled 'My Item'?</div>

          <button onClick={cb}>Delete</button>
        </Popup>
      );

      expect(getByRole('dialog')).toHaveAttribute('data-propspread', 'test');
    });
  });
});
