import * as React from 'react';
import {render} from '@testing-library/react';
import FormField, {FormFieldErrorBehavior} from '../lib/FormField';

describe('FormField', () => {
  const cb = jest.fn();
  afterEach(() => {
    cb.mockReset();
  });

  describe('when rendered', () => {
    it('should render an input with a label', () => {
      const label = 'Label';
      const {container} = render(
        <FormField label={label}>
          <input type="text" />
        </FormField>
      );
      expect(container.querySelector('label')).toContainHTML('Label');
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

      expect(container.querySelector('p').innerHTML).toBe('Helpful text goes here.');
    });
  });

  describe('when rendered as required', () => {
    it('should add a required element to the label to indicate that it is required', () => {
      const label = 'Label';
      const {container} = render(
        <FormField label={label} required={true}>
          <input type="text" />
        </FormField>
      );

      expect(container.querySelector('label')).toContainHTML('abbr');
    });
  });

  describe('when rendered with useFieldset set to true', () => {
    it('should render the FormField using a fieldset and a legend instead of a div and a label', () => {
      const label = 'Label';
      const {getByTestId} = render(
        <div data-testid="myForm">
          <FormField useFieldset={true} label={label} required={true}>
            <input type="text" />
          </FormField>
        </div>
      );

      expect(getByTestId('myForm')).toContainHTML('fieldset');
      expect(getByTestId('myForm')).toContainHTML('legend');
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

      expect(container.querySelector('div').getAttribute('data-propspread')).toBe('test');
    });
  });
});
