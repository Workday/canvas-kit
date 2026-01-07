import {fireEvent, render} from '@testing-library/react';
import * as React from 'react';
import {renderToString} from 'react-dom/server';

import {RadioGroup} from '@workday/canvas-kit-preview-react/radio';

describe('RadioGroup', () => {
  const cb = vi.fn();
  afterEach(() => {
    cb.mockReset();
  });
  it('should render on a server without crashing', () => {
    const RadioGroupComponent = () => (
      <RadioGroup name="contact" value={'email'}>
        <RadioGroup.Label id="1">
          <RadioGroup.Label.Input value="email" />
          <RadioGroup.Label.Text>Email</RadioGroup.Label.Text>
        </RadioGroup.Label>
        <RadioGroup.Label id="2">
          <RadioGroup.Label.Input value="phone" />
          <RadioGroup.Label.Text>Phone</RadioGroup.Label.Text>
        </RadioGroup.Label>
        <RadioGroup.Label id="3" disabled={true}>
          <RadioGroup.Label.Input value="fax" />
          <RadioGroup.Label.Text>Fax (disabled)</RadioGroup.Label.Text>
        </RadioGroup.Label>
        <RadioGroup.Label id="4">
          <RadioGroup.Label.Input value="mail" />
          <RadioGroup.Label.Text>
            "Mail (US Postal Service aka USPS), a longer than normal Text"
          </RadioGroup.Label.Text>
        </RadioGroup.Label>
      </RadioGroup>
    );

    const ssrRender = () => renderToString(<RadioGroupComponent />);

    expect(ssrRender).not.toThrow();
  });

  describe('when rendered with a name', () => {
    it('should render a radio group with a name', () => {
      const {getByRole} = render(
        <RadioGroup name="contact">
          <RadioGroup.Label id="1">
            <RadioGroup.Label.Input value="email"></RadioGroup.Label.Input>
            <RadioGroup.Label.Text>E-mail</RadioGroup.Label.Text>
          </RadioGroup.Label>
          <RadioGroup.Label id="2">
            <RadioGroup.Label.Input value="phone"></RadioGroup.Label.Input>
            <RadioGroup.Label.Text>Phone</RadioGroup.Label.Text>
          </RadioGroup.Label>
        </RadioGroup>
      );
      expect(getByRole('radio', {name: 'E-mail'})).toHaveAttribute('name');
    });
  });

  describe('when rendered with a value', () => {
    it('should render a selected radio that matches that value of a string', async () => {
      const {getByLabelText} = render(
        <RadioGroup name="contact" value="phone" data-testid="radiogroup">
          <RadioGroup.Label id="1">
            <RadioGroup.Label.Input value="email"></RadioGroup.Label.Input>
            <RadioGroup.Label.Text>E-mail</RadioGroup.Label.Text>
          </RadioGroup.Label>
          <RadioGroup.Label id="2">
            <RadioGroup.Label.Input value="phone"></RadioGroup.Label.Input>
            <RadioGroup.Label.Text>Phone</RadioGroup.Label.Text>
          </RadioGroup.Label>
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
        <RadioGroup data-propspread={attr} name="contact" data-testid="radiogroup">
          <RadioGroup.Label id="1">
            <RadioGroup.Label.Input value="email"></RadioGroup.Label.Input>
            <RadioGroup.Label.Text>E-mail</RadioGroup.Label.Text>
          </RadioGroup.Label>
          <RadioGroup.Label id="2">
            <RadioGroup.Label.Input value="phone"></RadioGroup.Label.Input>
            <RadioGroup.Label.Text>Phone</RadioGroup.Label.Text>
          </RadioGroup.Label>
        </RadioGroup>
      );
      expect(getByTestId('radiogroup')).toHaveAttribute('data-propspread', attr);
    });
  });

  describe('when clicked', () => {
    it('should call a  callback function', () => {
      const {getByLabelText} = render(
        <RadioGroup name="contact" data-testid="radiogroup" onChange={cb}>
          <RadioGroup.Label id="1">
            <RadioGroup.Label.Input value="email"></RadioGroup.Label.Input>
            <RadioGroup.Label.Text>E-mail</RadioGroup.Label.Text>
          </RadioGroup.Label>
          <RadioGroup.Label id="2">
            <RadioGroup.Label.Input value="phone"></RadioGroup.Label.Input>
            <RadioGroup.Label.Text>Phone</RadioGroup.Label.Text>
          </RadioGroup.Label>
        </RadioGroup>
      );

      fireEvent.click(getByLabelText('Phone'));

      expect(cb).toHaveBeenCalled();
    });
  });
});
