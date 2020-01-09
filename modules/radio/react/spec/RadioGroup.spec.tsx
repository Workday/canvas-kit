import * as React from 'react';
import {render, fireEvent, getByLabelText, getByDisplayValue} from '@testing-library/react';
import {Radio, RadioGroup} from '../index';
import ReactDOMServer from 'react-dom/server';
import {axe} from 'jest-axe';
import FormField from '@workday/canvas-kit-react-form-field';

describe('Radio Group', () => {
  const cb = jest.fn();
  afterEach(() => {
    cb.mockReset();
  });

  describe('when rendered', () => {
    describe('with an id', () => {
      test('should render a radio group with a name', () => {
        const id = 'myRadio';
        const {getByTestId} = render(
          <RadioGroup name="contact" data-testid="radiogroup">
            <Radio id="1" value="email" label="E-mail" />
            <Radio id="2" value="phone" label="Phone" />
          </RadioGroup>
        );
        expect(getByTestId('radiogroup')).toHaveAttribute('name');
      });
    });

    describe('with a value', () => {
      test('should render a selected radio that matches that value of a string', async () => {
        const {getByLabelText} = render(
          <RadioGroup name="contact" value="phone">
            <Radio id="1" value="email" label="E-mail" />
            <Radio id="2" value="phone" label="Phone" />
          </RadioGroup>
        );

        const phoneRadio = await getByLabelText('Phone'); /*? */
        expect(phoneRadio).toHaveProperty('checked', true);
      });
    });
  });
});
