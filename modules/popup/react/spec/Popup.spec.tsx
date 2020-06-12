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
      const {getByRole} = render(
        <Popup closeButtonAriaLabel={closeButtonAriaLabel} handleClose={cb}>
          <div>Are you sure you'd like to delete the item titled 'My Item'?</div>

          <button onClick={cb}>Delete</button>
        </Popup>
      );
      getByRole('dialog').querySelector('[data-close]');
      expect(getByRole('dialog').querySelector('[data-close]')).toHaveAttribute(
        'aria-label',
        closeButtonAriaLabel
      );
    });

    it('should call the handleClose callback when clicked', () => {
      const closeButtonAriaLabel = 'close';
      const {getByRole} = render(
        <Popup closeButtonAriaLabel={closeButtonAriaLabel} handleClose={cb}>
          <div>Are you sure you'd like to delete the item titled 'My Item'?</div>

          <button onClick={cb}>Delete</button>
        </Popup>
      );

      fireEvent.click(getByRole('dialog').querySelector('[data-close]'));

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

  describe('when rendered with a popup ref', () => {
    it('should set the ref to the div element', () => {
      const ref = React.createRef<HTMLDivElement>();

      render(
        <Popup popupRef={ref} data-propspread="test" handleClose={cb}>
          <div>Are you sure you'd like to delete the item titled 'My Item'?</div>

          <button onClick={cb}>Delete</button>
        </Popup>
      );

      expect(ref.current).not.toBeNull();
      expect(ref.current).toHaveAttribute('role', 'dialog');
    });
  });
});
