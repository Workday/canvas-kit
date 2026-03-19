import {render} from '@testing-library/react';
import * as React from 'react';

import {RadioGroup} from '@workday/canvas-kit-preview-react/radio';

describe('RadioInput', () => {
  const cb = vi.fn();
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
});
