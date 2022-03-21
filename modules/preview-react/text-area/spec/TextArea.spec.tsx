import * as React from 'react';
import {render, fireEvent} from '@testing-library/react';
import {TextArea} from '../lib/TextArea';

const id = 'Test Text Area';
const placeholder = 'Test Text Area';
const value = 'Test Text Area';

describe('Text Area', () => {
  const cb = jest.fn();
  afterEach(() => {
    cb.mockReset();
  });

  describe('when rendered with a placeholder', () => {
    it('should render a text area with placeholder', () => {
      const {getByRole} = render(
        <TextArea orientation="vertical">
          <TextArea.Field onChange={cb} placeholder={placeholder} />
        </TextArea>
      );
      expect(getByRole('textbox')).toHaveAttribute('placeholder', placeholder);
    });
  });

  describe('when rendered with an id', () => {
    it('should render a text area with a id', () => {
      const {getByRole} = render(
        <TextArea orientation="vertical">
          <TextArea.Field id={id} onChange={cb} />
        </TextArea>
      );
      expect(getByRole('textbox')).toHaveAttribute('id', id);
    });
  });

  describe('when rendered with a value', () => {
    it('should render a text area with a value', () => {
      const {getByDisplayValue} = render(
        <TextArea orientation="vertical">
          <TextArea.Field onChange={cb} value={value} />
        </TextArea>
      );
      expect(getByDisplayValue(value)).toBeDefined();
    });
  });

  describe('when rendered with disabled attribute', () => {
    it('should render a disabled text area', () => {
      const {getByRole} = render(
        <TextArea orientation="vertical">
          <TextArea.Field onChange={cb} disabled={true} />
        </TextArea>
      );
      expect(getByRole('textbox')).toBeDisabled();
    });
  });

  describe('when typed into', () => {
    it('should call a callback function', () => {
      const {getByRole} = render(
        <TextArea orientation="vertical">
          <TextArea.Field onChange={cb} />
        </TextArea>
      );
      fireEvent.change(getByRole('textbox'), {target: {value: 'Test'}});
      expect(cb).toHaveBeenCalledTimes(1);
    });
  });

  describe('when typed into with placeholder', () => {
    it('should call a callback function and persist the value', () => {
      const {getByDisplayValue, getByRole} = render(
        <TextArea orientation="vertical">
          <TextArea.Field onChange={cb} placeholder={placeholder} />
        </TextArea>
      );
      fireEvent.change(getByRole('textbox'), {target: {value: 'Test'}});
      expect(cb).toHaveBeenCalledTimes(1);
      expect(getByDisplayValue('Test')).toBeDefined();
    });
  });
});
