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

  describe('when rendered as required', () => {
    it('should add an asterisk to the label to indicate that it is required', () => {
      const {getByText} = render(
        <TextInput isRequired={true}>
          <TextInput.Label>Test</TextInput.Label>
        </TextInput>
      );

      expect(getByText('*')).toHaveAttribute('aria-hidden', 'true');
    });
  });

  describe('when rendered a hint id', () => {
    it('the input and hint text should have matching ids for accessibility', () => {
      const hintId = 'hintId';
      const hintText = 'Helpful text goes here.';
      const {container} = render(
        <TextInput hintId={hintId}>
          <TextInput.Field />
          <TextInput.Hint>{hintText}</TextInput.Hint>
        </TextInput>
      );

      expect(container.querySelector('p')).toHaveAttribute('id', hintId);
      expect(container.querySelector('input')).toHaveAttribute('aria-describedby', hintId);
    });
  });

  describe('when rendered a input id', () => {
    it('the input and label should have matching ids for accessibility', () => {
      const inputId = 'inputId';
      const {container} = render(
        <TextInput inputId={inputId}>
          <TextInput.Label>Test</TextInput.Label>
          <TextInput.Field />
        </TextInput>
      );

      expect(container.querySelector('label')).toHaveAttribute('for', inputId);
      expect(container.querySelector('input')).toHaveAttribute('id', inputId);
    });
  });

  describe('when rendered with an error', () => {
    it('the input should have aria-invalid for accessibility', () => {
      const {container} = render(
        <TextInput hasError={true}>
          <TextInput.Field />
        </TextInput>
      );
      expect(container.querySelector('input')).toHaveAttribute('aria-invalid', 'true');
    });
  });

  describe('when rendered with no inputId', () => {
    it('the input should have a unique id', () => {
      const {container} = render(
        <TextInput>
          <TextInput.Field />
        </TextInput>
      );
      const uniqueId = container.querySelector('input').getAttribute('id');
      expect(container.querySelector('input')).toHaveAttribute('id', uniqueId);
    });
  });
});
