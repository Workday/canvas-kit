import * as React from 'react';
import {IconButton} from '../index';
import {activityStreamIcon} from '@workday/canvas-system-icons-web';
import {render, fireEvent} from '@testing-library/react';

describe('Icon Button', () => {
  const cb = jest.fn();
  afterEach(() => {
    cb.mockReset();
  });

  verifyComponent(IconButton, {});

  describe('when rendered', () => {
    it('should render a button', () => {
      const {getByRole} = render(
        <IconButton aria-label="Activity Stream" icon={activityStreamIcon} />
      );
      expect(getByRole('button')).toBeDefined();
    });
  });

  describe('when rendered with an id', () => {
    it('should render a button with id', () => {
      const id = 'myButton';
      const {getByRole} = render(
        <IconButton aria-label="Activity Stream" icon={activityStreamIcon} id={id} />
      );
      expect(getByRole('button')).toHaveAttribute('id', id);
    });
  });

  describe('when rendered with disabled attribute', () => {
    it('should render a disabled button', () => {
      const {getByRole} = render(
        <IconButton aria-label="Activity Stream" icon={activityStreamIcon} disabled={true} />
      );
      expect(getByRole('button')).toHaveProperty('disabled', true);
    });
  });

  describe('when rendered with extra, arbitrary props', () => {
    it('should spread extra props onto the button', () => {
      const attr = 'test';
      const {getByRole} = render(
        <IconButton aria-label="Activity Stream" icon={activityStreamIcon} data-propspread={attr} />
      );
      expect(getByRole('button')).toHaveAttribute('data-propspread', attr);
    });
  });

  describe('when rendered with a button ref', () => {
    it('should set the ref to the checkbox input element', () => {
      const ref = {current: null};

      render(<IconButton aria-label="Activity Stream" icon={activityStreamIcon} ref={ref} />);

      expect(ref.current).not.toBeNull();
      expect(ref.current!.tagName.toLowerCase()).toEqual('button');
    });
  });

  describe('when rendered as an anchor', () => {
    it('should render an anchor link', () => {
      const {getByRole} = render(
        <IconButton
          aria-label="Activity Stream"
          icon={activityStreamIcon}
          as="a"
          href="https://workday.com"
          target="_blank"
        />
      );
      const link = getByRole('link');
      expect(link).toBeDefined();
      expect(link).toHaveAttribute('href', 'https://workday.com');
      expect(link).toHaveAttribute('target', '_blank');
    });
  });

  describe('when clicked', () => {
    it('should call a callback function', () => {
      const {getByRole} = render(
        <IconButton aria-label="Activity Stream" icon={activityStreamIcon} onClick={cb} />
      );
      fireEvent.click(getByRole('button'));
      expect(cb).toHaveBeenCalledTimes(1);
    });
  });

  describe('when toggled', () => {
    test('should call onToggleChange when toggle prop changes', () => {
      const {getByRole, rerender} = render(
        <IconButton
          aria-label="Activity Stream"
          icon={activityStreamIcon}
          toggled={false}
          onToggleChange={cb}
        />
      );

      expect(getByRole('button')).toHaveAttribute('aria-pressed', 'false');
      rerender(
        <IconButton
          aria-label="Activity Stream"
          icon={activityStreamIcon}
          toggled={true}
          onToggleChange={cb}
        />
      );

      expect(getByRole('button')).toHaveAttribute('aria-pressed', 'true');
      expect(cb).toHaveBeenCalledTimes(1);
      expect(cb).toHaveBeenCalledWith(true);
    });
  });
});
