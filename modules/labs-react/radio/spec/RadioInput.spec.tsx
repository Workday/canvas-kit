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
      const {getByRole} = render(<RadioGroup.Input value="email"></RadioGroup.Input>);
      expect(getByRole('radio')).toHaveProperty('type', 'radio');
    });

    it('should be unchecked by default', () => {
      const {getByRole} = render(<RadioGroup.Input value="email"></RadioGroup.Input>);
      expect(getByRole('radio')).toHaveProperty('checked', false);
    });
  });

  describe('when rendered with an id', () => {
    it('should render a radio input with id', () => {
      const id = 'myRadio';
      const {getByRole} = render(<RadioGroup.Input id={id} value="email"></RadioGroup.Input>);
      expect(getByRole('radio')).toHaveAttribute('id', id);
    });
  });

  describe('when rendered with a value', () => {
    it('should render a radio input with value', () => {
      const value = 'myRadio';
      const {getByDisplayValue} = render(<RadioGroup.Input value={value}></RadioGroup.Input>);
      expect(getByDisplayValue(value)).toBeDefined();
    });
  });

  describe('when rendered with checked=true', () => {
    it('should render a checked radio input', () => {
      const {getByRole} = render(
        <RadioGroup.Input value="email" checked={true}></RadioGroup.Input>
      );
      expect(getByRole('radio')).toHaveProperty('checked', true);
    });
  });

  describe('when rendered with disabled attribute', () => {
    it('should render a disabled radio input', () => {
      const {getByRole} = render(
        <RadioGroup.Input value="email" disabled={true}></RadioGroup.Input>
      );
      expect(getByRole('radio')).toHaveProperty('disabled', true);
    });
  });

  describe('when rendered without an id', () => {
    it('should create a unique id for each instance', async () => {
      const {getByLabelText} = render(
        <form>
          <RadioGroup.Button>
            <RadioGroup.Input value="email"></RadioGroup.Input>
            <RadioGroup.Label>Email</RadioGroup.Label>
          </RadioGroup.Button>
          <RadioGroup.Button>
            <RadioGroup.Input value="phone"></RadioGroup.Input>
            <RadioGroup.Label>Phone</RadioGroup.Label>
          </RadioGroup.Button>
        </form>
      );

      const id1 = getByLabelText('Email').getAttribute('id');
      const id2 = getByLabelText('Phone').getAttribute('id');

      expect(id1).not.toEqual(id2);
    });

    it('should keep the same unique id if re-rendered', () => {
      const RadioTest = isChecked => {
        return (
          <RadioGroup.Button>
            <RadioGroup.Input checked={isChecked} value="email"></RadioGroup.Input>
            <RadioGroup.Label>Email</RadioGroup.Label>
          </RadioGroup.Button>
        );
      };
      const {getByRole, rerender} = render(<RadioTest isChecked={false} />);

      const uniqueId = getByRole('radio').getAttribute('id');
      expect(getByRole('radio')).toHaveProperty('id', uniqueId);

      rerender(<RadioTest isChecked={true} />);

      expect(getByRole('radio')).toHaveProperty('checked');
      expect(getByRole('radio')).toHaveProperty('id', uniqueId);
    });
  });

  //TODO: fix test after fixing radio group callback issue

  //   describe('when clicked', () => {
  //     it('should call a callback function', () => {
  //       const {getByRole} = render(
  //         <RadioGroup.Button>
  //           <RadioGroup.Input onChange={cb} value="email"></RadioGroup.Input>
  //           <RadioGroup.Label>Email</RadioGroup.Label>
  //         </RadioGroup.Button>
  //       );
  //       fireEvent.click(getByRole('radio'));
  //       expect(cb).toHaveBeenCalledTimes(1);
  //     });
  //   });
});
