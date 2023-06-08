import * as React from 'react';
import {render, fireEvent} from '@testing-library/react';
import {RadioGroup} from '@workday/canvas-kit-labs-react/radio';

describe('RadioInput', () => {
  const cb = jest.fn();
  afterEach(() => {
    cb.mockReset();
  });
  describe('when rendered', () => {
    it('should render an input with type=radio', () => {
      const {getAllByRole} = render(
        <RadioGroup>
          <RadioGroup.Label.Input value="email"></RadioGroup.Label.Input>
          <RadioGroup.Label.Input value="phone"></RadioGroup.Label.Input>
        </RadioGroup>
      );
      expect(getAllByRole('radio')[0]).toHaveProperty('type', 'radio');
    });

    it('should be unchecked by default', () => {
      const {getAllByRole} = render(
        <RadioGroup>
          <RadioGroup.Label.Input value="email"></RadioGroup.Label.Input>
          <RadioGroup.Label.Input value="phone"></RadioGroup.Label.Input>
        </RadioGroup>
      );
      expect(getAllByRole('radio')[1]).toHaveProperty('checked', false);
    });
  });

  describe('when rendered with an id', () => {
    it('should render a radio input with id', () => {
      const id = 'myRadio';
      const {getAllByRole} = render(
        <RadioGroup>
          <RadioGroup.Label.Input id={id} value="email"></RadioGroup.Label.Input>
          <RadioGroup.Label.Input value="email"></RadioGroup.Label.Input>
        </RadioGroup>
      );
      expect(getAllByRole('radio')[0]).toHaveAttribute('id', id);
    });
  });

  describe('when rendered with a value', () => {
    it('should render a radio input with value', () => {
      const value1 = 'myRadio1';
      const value2 = 'myRadio2';
      const {getByDisplayValue} = render(
        <RadioGroup>
          <RadioGroup.Label.Input value={value1}></RadioGroup.Label.Input>
          <RadioGroup.Label.Input value={value2}></RadioGroup.Label.Input>
        </RadioGroup>
      );
      expect(getByDisplayValue(value1)).toBeDefined();
      expect(getByDisplayValue(value2)).toBeDefined();
    });
  });

  describe('when rendered with checked=true', () => {
    it('should render a checked radio input', () => {
      const {getAllByRole} = render(
        <RadioGroup>
          <RadioGroup.Label.Input value="email" checked={true}></RadioGroup.Label.Input>
          <RadioGroup.Label.Input value="email" checked={false}></RadioGroup.Label.Input>
        </RadioGroup>
      );
      expect(getAllByRole('radio')[0]).toHaveProperty('checked', true);
    });
  });

  describe('when rendered with disabled attribute', () => {
    it('should render a disabled radio input', () => {
      const {getAllByRole} = render(
        <RadioGroup>
          <RadioGroup.Label.Input value="email" disabled={true}></RadioGroup.Label.Input>
          <RadioGroup.Label.Input value="phone" disabled={false}></RadioGroup.Label.Input>
        </RadioGroup>
      );
      expect(getAllByRole('radio')[0]).toHaveProperty('disabled', true);
    });
  });

  describe('when rendered without an id', () => {
    it('should create a unique id for each instance', async () => {
      const {getByLabelText} = render(
        <form>
          <RadioGroup>
            <RadioGroup.Label>
              <RadioGroup.Label.Input value="email"></RadioGroup.Label.Input>
              <RadioGroup.Label.Text>Email</RadioGroup.Label.Text>
            </RadioGroup.Label>
            <RadioGroup.Label>
              <RadioGroup.Label.Input value="phone"></RadioGroup.Label.Input>
              <RadioGroup.Label.Text>Phone</RadioGroup.Label.Text>
            </RadioGroup.Label>
          </RadioGroup>
        </form>
      );

      const id1 = getByLabelText('Email').getAttribute('id');
      const id2 = getByLabelText('Phone').getAttribute('id');

      expect(id1).not.toEqual(id2);
    });

    it('should keep the same unique id if re-rendered', () => {
      const RadioTest = isChecked => {
        return (
          <RadioGroup>
            <RadioGroup.Label>
              <RadioGroup.Label.Input checked={isChecked} value="email"></RadioGroup.Label.Input>
              <RadioGroup.Label.Text>Email</RadioGroup.Label.Text>
            </RadioGroup.Label>
            <RadioGroup.Label>
              <RadioGroup.Label.Input checked={false} value="email"></RadioGroup.Label.Input>
              <RadioGroup.Label.Text>Email</RadioGroup.Label.Text>
            </RadioGroup.Label>
          </RadioGroup>
        );
      };
      const {getAllByRole, rerender} = render(<RadioTest isChecked={false} />);

      const uniqueId = getAllByRole('radio')[0].getAttribute('id');
      expect(getAllByRole('radio')[0]).toHaveProperty('id', uniqueId);

      rerender(<RadioTest isChecked={true} />);

      expect(getAllByRole('radio')[0]).toHaveProperty('checked');
      expect(getAllByRole('radio')[0]).toHaveProperty('id', uniqueId);
    });
  });
});
