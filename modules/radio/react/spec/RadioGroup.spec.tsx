import * as React from 'react';
import {render, fireEvent} from '@testing-library/react';
import {Radio, RadioGroup} from '../index';

describe('Radio Group', () => {
  const cb = jest.fn();
  afterEach(() => {
    cb.mockReset();
  });

  describe('when rendered rendered with a name', () => {
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
  describe('when rendered with a value', () => {
    test('should render a selected radio that matches that value of a string', async () => {
      const {getByLabelText} = render(
        <RadioGroup name="contact" value="phone">
          <Radio id="1" value="email" label="E-mail" />
          <Radio id="2" value="phone" label="Phone" />
        </RadioGroup>
      );

      const phoneRadio = await getByLabelText('Phone');
      expect(phoneRadio).toHaveProperty('checked', true);
    });
    test('should render a selected radio that matches that value of a index', async () => {
      const {getByLabelText} = render(
        <RadioGroup name="contact" value={1}>
          <Radio id="1" value="email" label="E-mail" />
          <Radio id="2" value="phone" label="Phone" />
        </RadioGroup>
      );

      const phoneRadio = await getByLabelText('Phone');
      expect(phoneRadio).toHaveProperty('checked', true);
    });
  });
  describe('when rendered with extra, arbitrary props', () => {
    it('should spread extra props onto the radio group', () => {
      const attr = 'test';
      const {getByTestId} = render(
        <RadioGroup data-propspread={attr} name="contact" value={1} data-testid="radiogroup">
          <Radio id="1" value="email" label="E-mail" />
          <Radio id="2" value="phone" label="Phone" />
        </RadioGroup>
      );
      expect(getByTestId('radiogroup')).toHaveAttribute('data-propspread', attr);
    });
  });
  describe('when clicked', () => {
    it('should call a callback function', async () => {
      const mockFunction = jest.fn((value: number) => value);
      mockFunction(1);
      const {getByTestId} = render(
        <RadioGroup data-testid="radiogroup" onChange={mockFunction} name="contact" value={1}>
          <Radio id="1" value="email" label="E-mail" />
          <Radio id="2" value="phone" label="Phone" />
        </RadioGroup>
      );
      fireEvent.click(await getByTestId('radiogroup'));
      expect(mockFunction).toHaveBeenCalledTimes(1);
    });
  });
});
