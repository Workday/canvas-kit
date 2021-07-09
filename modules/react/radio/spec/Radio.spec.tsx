import * as React from 'react';
import {render, fireEvent} from '@testing-library/react';
import Radio from '../lib/Radio';

describe('Radio', () => {
  const cb = jest.fn();
  afterEach(() => {
    cb.mockReset();
  });

  verifyComponent(Radio, {});

  describe('when rendered', () => {
    it('should render an input with type=radio', () => {
      const {getByRole} = render(<Radio onChange={cb} />);
      expect(getByRole('radio')).toHaveProperty('type', 'radio');
    });

    it('should be unchecked by default', () => {
      const {getByRole} = render(<Radio onChange={cb} />);
      expect(getByRole('radio')).toHaveProperty('checked', false);
    });
  });

  describe('when rendered with an id', () => {
    it('should render a radio input with id', () => {
      const id = 'myRadio';
      const {getByRole} = render(<Radio id={id} onChange={cb} />);
      expect(getByRole('radio')).toHaveAttribute('id', id);
    });
  });

  describe('when rendered with a value', () => {
    it('should render a radio input with value', () => {
      const value = 'myRadio';
      const {getByDisplayValue} = render(<Radio value={value} onChange={cb} />);
      expect(getByDisplayValue(value)).toBeDefined();
    });
  });

  describe('when rendered with checked=true', () => {
    it('should render a checked radio input', () => {
      const {getByRole} = render(<Radio checked={true} onChange={cb} />);
      expect(getByRole('radio')).toHaveProperty('checked', true);
    });
  });

  describe('when rendered with disabled attribute', () => {
    it('should render a disabled radio input', () => {
      const {getByRole} = render(<Radio disabled={true} onChange={cb} />);
      expect(getByRole('radio')).toHaveProperty('disabled', true);
    });
  });

  describe('when rendered without an id', () => {
    it('should create a unique id for each instance', async () => {
      const {getByLabelText} = render(
        <form>
          <Radio checked={true} onChange={cb} disabled={false} label="label1" />;
          <Radio onChange={cb} disabled={false} label="label2" />;
        </form>
      );

      const id1 = getByLabelText('label1').getAttribute('id');
      const id2 = getByLabelText('label2').getAttribute('id');

      expect(id1).not.toEqual(id2);
    });

    it('should keep the same unique id if re-rendered', () => {
      const {getByRole, rerender} = render(<Radio checked={false} onChange={cb} />);

      const uniqueId = getByRole('radio').getAttribute('id');
      expect(getByRole('radio')).toHaveProperty('id', uniqueId);

      rerender(<Radio checked={true} onChange={cb} />);

      expect(getByRole('radio')).toHaveProperty('checked');
      expect(getByRole('radio')).toHaveProperty('id', uniqueId);
    });
  });

  describe('when clicked', () => {
    it('should call a callback function', () => {
      const {getByRole} = render(<Radio onChange={cb} />);
      fireEvent.click(getByRole('radio'));
      expect(cb).toHaveBeenCalledTimes(1);
    });
  });
});
