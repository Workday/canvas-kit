import * as React from 'react';
import {render, fireEvent} from '@testing-library/react';
import {TextInput} from '../lib/TextInput';

const id = 'Test Text Input';
const placeholder = 'Test Text Input';
const value = 'Test Text Input';

describe('Text Input', () => {
  const cb = jest.fn();
  afterEach(() => {
    cb.mockReset();
  });

  describe('when rendered', () => {
    it('should render an input with type=text', () => {
      const {getByRole} = render(
        <TextInput>
          <TextInput.Field onChange={cb}></TextInput.Field>
        </TextInput>
      );
      expect(getByRole('textbox')).toHaveProperty('type', 'text');
    });
  });

  describe('when rendered with a placeholder', () => {
    it('should render a text input with placeholder', () => {
      const {getByRole} = render(
        <TextInput>
          <TextInput.Field onChange={cb} placeholder={placeholder}></TextInput.Field>
        </TextInput>
      );
      expect(getByRole('textbox')).toHaveAttribute('placeholder', placeholder);
    });
  });

  describe('when rendered with an id', () => {
    it('should render a text input with a id', () => {
      const {getByRole} = render(
        <TextInput>
          <TextInput.Field id={id} onChange={cb}></TextInput.Field>
        </TextInput>
      );
      expect(getByRole('textbox')).toHaveAttribute('id', id);
    });
  });

  describe('when rendered with a value', () => {
    it('should render a text input with a value', () => {
      const {getByDisplayValue} = render(
        <TextInput>
          <TextInput.Field onChange={cb} value={value}></TextInput.Field>
        </TextInput>
      );
      expect(getByDisplayValue(value)).toBeDefined();
    });
  });

  describe('when rendered with disabled attribute', () => {
    it('should render a disabled text input', () => {
      const {getByRole} = render(
        <TextInput>
          <TextInput.Field onChange={cb} disabled={true}></TextInput.Field>
        </TextInput>
      );
      expect(getByRole('textbox')).toBeDisabled();
    });
  });

  describe('when typed into', () => {
    it('should call a callback function', () => {
      const {getByRole} = render(
        <TextInput>
          <TextInput.Field onChange={cb}></TextInput.Field>
        </TextInput>
      );
      fireEvent.change(getByRole('textbox'), {target: {value: 'Test'}});
      expect(cb).toHaveBeenCalledTimes(1);
    });
  });
});
