import * as React from 'react';
import {render} from '@testing-library/react';
import FormField from '../lib/FormField';
import {ErrorType} from '@workday/canvas-kit-react/common';

describe('FormField', () => {
  const cb = jest.fn();
  afterEach(() => {
    cb.mockReset();
  });

  describe('when rendered', () => {
    it('should render a label with text Label', () => {
      const label = 'Label';
      const {getByText} = render(
        <FormField label={label}>
          <input type="text" />
        </FormField>
      );

      expect(getByText('Label')).toContainHTML(label);
    });
  });
  describe('when rendered with hint text', () => {
    it('should render text below the input component', () => {
      const label = 'Label';
      const hintText = 'Helpful text goes here.';
      const {container} = render(
        <FormField hintText={hintText} label={label}>
          <input type="text" />
        </FormField>
      );

      expect(container.querySelector('p')).toContainHTML(hintText);
    });
  });

  describe('when rendered as required', () => {
    it('should add a required element to the label to indicate that it is required', () => {
      const label = 'Label';
      const {getByText} = render(
        <FormField label={label} required={true}>
          <input type="text" />
        </FormField>
      );

      expect(getByText('*')).toHaveAttribute('title', 'required');
    });
  });

  describe('when rendered with useFieldset set to true', () => {
    it('should render the FormField using a fieldset and a legend instead of a div and a label', () => {
      const label = 'Label';
      const {container} = render(
        <FormField useFieldset={true} label={label} required={true}>
          <input type="text" />
        </FormField>
      );

      const fieldset = container.querySelector('fieldset');
      expect(container).toContainElement(fieldset);
      expect(container).toContainHTML('legend');
    });
  });

  describe('when rendered with extra, arbitrary props', () => {
    it('should spread extra props onto the form field', () => {
      const attr = 'test';
      const label = 'Label';
      const {container} = render(
        <FormField label={label} data-propspread={attr}>
          <input type="text" />
        </FormField>
      );

      expect(container.querySelector('div')).toHaveAttribute('data-propspread', 'test');
    });
  });
  describe('when rendered a hint id', () => {
    it('the input and hint text should have matching ids for accessibility', () => {
      const label = 'Label';
      const hintId = 'hintId';
      const hintText = 'Helpful text goes here.';
      const {container} = render(
        <FormField error={ErrorType.Error} hintId={hintId} hintText={hintText} label={label}>
          <input type="text" />
        </FormField>
      );

      expect(container.querySelector('p')).toHaveAttribute('id', hintId);
      expect(container.querySelector('input')).toHaveAttribute('aria-describedby', hintId);
    });
  });

  describe('when rendered a input id', () => {
    it('the input and label should have matching ids for accessibility', () => {
      const label = 'Label';
      const inputId = 'inputId';
      const hintText = 'Helpful text goes here.';
      const {container} = render(
        <FormField inputId={inputId} hintText={hintText} label={label}>
          <input type="text" />
        </FormField>
      );

      expect(container.querySelector('label')).toHaveAttribute('for', inputId);
      expect(container.querySelector('input')).toHaveAttribute('id', inputId);
    });
  });
  describe('when rendered with an error', () => {
    it('the input should have aria-invalid for accessibility', () => {
      const label = 'Label';
      const {container} = render(
        <FormField error={FormField.ErrorType.Error} label={label}>
          <input type="text" />
        </FormField>
      );
      expect(container.querySelector('input')).toHaveAttribute('aria-invalid', 'true');
    });
  });
  describe('when rendered with no inputId', () => {
    it('the input should have a unique id', () => {
      const label = 'Label';
      const {container} = render(
        <FormField error={FormField.ErrorType.Error} label={label}>
          <input type="text" />
        </FormField>
      );
      const uniqueId = container.querySelector('input').getAttribute('id');
      expect(container.querySelector('input')).toHaveAttribute('id', uniqueId);
    });
  });
});
