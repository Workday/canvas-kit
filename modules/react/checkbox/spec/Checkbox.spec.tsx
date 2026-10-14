import {fireEvent, render} from '@testing-library/react';
import * as React from 'react';

import {cssVar} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';

import {Checkbox} from '../lib/Checkbox';

const getMatchingStyleRules = (element: HTMLElement) => {
  const classNames = Array.from(element.classList);
  const rules: string[] = [];

  for (const sheet of document.styleSheets as unknown as Iterable<CSSStyleSheet>) {
    for (const rule of sheet.cssRules as unknown as Iterable<CSSRule>) {
      if (classNames.some(className => rule.cssText.includes(`.${className}`))) {
        rules.push(rule.cssText);
      }
    }
  }

  return rules;
};

describe('Checkbox', () => {
  const cb = vi.fn();
  afterEach(() => {
    cb.mockReset();
  });

  verifyComponent(Checkbox, {});

  describe('when rendered', () => {
    it('should render an input with type=checkbox', () => {
      const {getByRole} = render(<Checkbox onChange={cb} />);
      expect(getByRole('checkbox')).toHaveProperty('type', 'checkbox');
    });

    it('should be unchecked by default', () => {
      const {getByRole} = render(<Checkbox onChange={cb} />);
      expect(getByRole('checkbox')).not.toBeChecked();
    });
  });

  describe('when rendered with an id', () => {
    it('should render a checkbox input with id', () => {
      const id = 'myCheckbox';
      const {getByRole} = render(<Checkbox id={id} onChange={cb} />);
      expect(getByRole('checkbox')).toHaveAttribute('id', id);
    });
  });

  describe('when rendered with a value', () => {
    it('should render a checkbox input with value', () => {
      const value = 'myCheckbox';
      const {getByDisplayValue} = render(<Checkbox value={value} onChange={cb} />);
      expect(getByDisplayValue(value)).toBeDefined();
    });
  });

  describe('when rendered with checked=true', () => {
    it('should render a checked checkbox input', () => {
      const {getByRole} = render(<Checkbox checked={true} onChange={cb} />);
      expect(getByRole('checkbox')).toBeChecked();
    });
  });

  describe('when rendered with indeterminate=true', () => {
    it('should render a partially checked checkbox input', () => {
      const {getByRole} = render(<Checkbox checked={true} indeterminate={true} onChange={cb} />);
      expect(getByRole('checkbox')).toBePartiallyChecked();
    });
  });

  describe('when rendered with disabled attribute', () => {
    it('should render a disabled checkbox input', () => {
      const {getByRole} = render(<Checkbox disabled={true} onChange={cb} />);
      expect(getByRole('checkbox')).toHaveProperty('disabled', true);
    });

    it('should apply disabled opacity on the container', () => {
      const {container} = render(<Checkbox disabled={true} label="I agree" onChange={cb} />);
      const checkboxContainer = container.firstElementChild as HTMLElement;

      expect(getMatchingStyleRules(checkboxContainer)).toEqual(
        expect.arrayContaining([
          expect.stringContaining(`opacity: ${cssVar(system.opacity.disabled)}`),
        ])
      );
    });
  });

  describe('when rendered without an id', () => {
    it('should create a unique id for each instance', async () => {
      const {getByLabelText} = render(
        <form>
          <Checkbox checked={true} onChange={cb} disabled={false} label="label1" />;
          <Checkbox onChange={cb} disabled={false} label="label2" />;
        </form>
      );

      const id1 = getByLabelText('label1').getAttribute('id');
      const id2 = getByLabelText('label2').getAttribute('id');

      expect(id1).not.toEqual(id2);
    });

    it('should keep the same unique id if re-rendered', () => {
      const {getByRole, rerender} = render(<Checkbox checked={false} onChange={cb} />);

      const uniqueId = getByRole('checkbox').getAttribute('id');
      expect(getByRole('checkbox')).toHaveProperty('id', uniqueId);

      rerender(<Checkbox checked={true} onChange={cb} />);

      expect(getByRole('checkbox')).toBeChecked();
      expect(getByRole('checkbox')).toHaveProperty('id', uniqueId);
    });
  });

  describe('when clicked', () => {
    it('should call a callback function', () => {
      const {getByRole} = render(<Checkbox onChange={cb} />);
      fireEvent.click(getByRole('checkbox'));
      expect(cb).toHaveBeenCalledTimes(1);
    });
  });
});
