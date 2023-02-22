import * as React from 'react';
import {render, fireEvent} from '@testing-library/react';
import {renderToString} from 'react-dom/server';
import {RadioGroup} from '@workday/canvas-kit-labs-react/radio';

describe('RadioGroup', () => {
  const cb = jest.fn();
  afterEach(() => {
    cb.mockReset();
  });
  it('should render on a server without crashing', () => {
    const RadioGroupComponent = () => (
      <RadioGroup name="contact" value={'email'}>
        <RadioGroup.Button id="1">
          <RadioGroup.Input value="email" />
          <RadioGroup.Label>Email</RadioGroup.Label>
        </RadioGroup.Button>
        <RadioGroup.Button id="2">
          <RadioGroup.Input value="phone" />
          <RadioGroup.Label>Phone</RadioGroup.Label>
        </RadioGroup.Button>
        <RadioGroup.Button id="3" disabled={true}>
          <RadioGroup.Input value="fax" />
          <RadioGroup.Label>Fax (disabled)</RadioGroup.Label>
        </RadioGroup.Button>
        <RadioGroup.Button id="4">
          <RadioGroup.Input value="mail" />
          <RadioGroup.Label>
            "Mail (US Postal Service aka USPS), a longer than normal label"
          </RadioGroup.Label>
        </RadioGroup.Button>
      </RadioGroup>
    );

    const ssrRender = () => renderToString(<RadioGroupComponent />);

    expect(ssrRender).not.toThrow();
  });

  describe('when rendered with a name', () => {
    it('should render a radio group with a name', () => {
      const {getByTestId} = render(
        <RadioGroup name="contact" data-testid="radiogroup">
          <RadioGroup.Button id="1">
            <RadioGroup.Input value="email"></RadioGroup.Input>
            <RadioGroup.Label>E-mail</RadioGroup.Label>
          </RadioGroup.Button>
          <RadioGroup.Button id="2">
            <RadioGroup.Input value="phone"></RadioGroup.Input>
            <RadioGroup.Label>Phone</RadioGroup.Label>
          </RadioGroup.Button>
        </RadioGroup>
      );
      expect(getByTestId('radiogroup')).toHaveAttribute('name');
    });
  });

  describe('when rendered with a value', () => {
    it('should render a selected radio that matches that value of a string', async () => {
      const {getByLabelText} = render(
        <RadioGroup name="contact" initialValue="phone" data-testid="radiogroup">
          <RadioGroup.Button id="1">
            <RadioGroup.Input value="email"></RadioGroup.Input>
            <RadioGroup.Label>E-mail</RadioGroup.Label>
          </RadioGroup.Button>
          <RadioGroup.Button id="2">
            <RadioGroup.Input value="phone"></RadioGroup.Input>
            <RadioGroup.Label>Phone</RadioGroup.Label>
          </RadioGroup.Button>
        </RadioGroup>
      );

      const phoneRadio = await getByLabelText('Phone');
      expect(phoneRadio).toHaveProperty('checked', true);
    });

    it('should render a selected radio that matches that value of a index', async () => {
      const {getByLabelText} = render(
        <RadioGroup name="contact" data-testid="radiogroup" initialValue={0}>
          <RadioGroup.Button id="1">
            <RadioGroup.Input value="email"></RadioGroup.Input>
            <RadioGroup.Label>E-mail</RadioGroup.Label>
          </RadioGroup.Button>
          <RadioGroup.Button id="2">
            <RadioGroup.Input value="phone"></RadioGroup.Input>
            <RadioGroup.Label>Phone</RadioGroup.Label>
          </RadioGroup.Button>
        </RadioGroup>
      );

      const phoneRadio = await getByLabelText('E-mail');
      expect(phoneRadio).toHaveProperty('checked', true);
    });
  });

  describe('when rendered with extra, arbitrary props', () => {
    it('should spread extra props onto the radio group', () => {
      const attr = 'test';
      const {getByTestId} = render(
        <RadioGroup data-propspread={attr} name="contact" data-testid="radiogroup">
          <RadioGroup.Button id="1">
            <RadioGroup.Input value="email"></RadioGroup.Input>
            <RadioGroup.Label>E-mail</RadioGroup.Label>
          </RadioGroup.Button>
          <RadioGroup.Button id="2">
            <RadioGroup.Input value="phone"></RadioGroup.Input>
            <RadioGroup.Label>Phone</RadioGroup.Label>
          </RadioGroup.Button>
        </RadioGroup>
      );
      expect(getByTestId('radiogroup')).toHaveAttribute('data-propspread', attr);
    });
  });

  describe('when clicked', () => {
    it('should call a  callback function', () => {
      const {getByLabelText} = render(
        <RadioGroup name="contact" data-testid="radiogroup" onChange={cb}>
          <RadioGroup.Button id="1">
            <RadioGroup.Input value="email"></RadioGroup.Input>
            <RadioGroup.Label>E-mail</RadioGroup.Label>
          </RadioGroup.Button>
          <RadioGroup.Button id="2">
            <RadioGroup.Input value="phone"></RadioGroup.Input>
            <RadioGroup.Label>Phone</RadioGroup.Label>
          </RadioGroup.Button>
        </RadioGroup>
      );

      fireEvent.click(getByLabelText('Phone'));

      expect(cb).toHaveBeenCalled();
    });
  });
});
