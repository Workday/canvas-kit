import * as React from 'react';
import {
  PrimaryButton,
  SecondaryButton,
  TertiaryButton,
  DeleteButton,
  SecondaryButtonProps as ButtonProps,
} from '@workday/canvas-kit-react/button';
import {render, fireEvent} from '@testing-library/react';
import {ElementComponent} from '@workday/canvas-kit-react/common';

(
  [
    PrimaryButton,
    SecondaryButton,
    TertiaryButton,
    DeleteButton,
    // We need to cast as `any` and cast as a specific button because TS will complain about no call signatures...
  ] as any[]
).forEach((ButtonComponent: ElementComponent<'button', ButtonProps>) => {
  describe(ButtonComponent.displayName!, () => {
    const cb = jest.fn();
    afterEach(() => {
      cb.mockReset();
    });

    verifyComponent(ButtonComponent, {});

    describe('when rendered', () => {
      it('should render a button', () => {
        const {getByRole} = render(<ButtonComponent />);
        expect(getByRole('button')).toBeDefined();
      });
    });

    describe('when rendered with an id', () => {
      it('should render a button with id', () => {
        const id = 'myButton';
        const {getByRole} = render(<ButtonComponent id={id} />);
        expect(getByRole('button')).toHaveAttribute('id', id);
      });
    });

    describe('when rendered with contents', () => {
      it('should render a button with contents', () => {
        const label = 'Button Label';
        const {getByRole} = render(<ButtonComponent>{label}</ButtonComponent>);
        expect(getByRole('button')).toContainHTML(label);
      });
    });

    describe('when rendered with disabled attribute', () => {
      it('should render a disabled button', () => {
        const {getByRole} = render(<ButtonComponent disabled={true} />);
        expect(getByRole('button')).toHaveProperty('disabled', true);
      });
    });

    describe('when rendered with extra, arbitrary props', () => {
      it('should spread extra props onto the button', () => {
        const attr = 'test';
        const {getByRole} = render(<ButtonComponent data-propspread={attr} />);
        expect(getByRole('button')).toHaveAttribute('data-propspread', attr);
      });
    });

    describe('when rendered with a button ref', () => {
      it('should set the ref to the checkbox input element', () => {
        const ref = {current: null as null | HTMLButtonElement};

        render(<ButtonComponent ref={ref} />);

        expect(ref.current).not.toBeNull();
        expect(ref.current!.tagName.toLowerCase()).toEqual('button');
      });
    });

    describe('when rendered as an anchor', () => {
      it('should render an anchor link', () => {
        const {getByRole} = render(
          <ButtonComponent as="a" href="https://workday.com" target="_blank" />
        );
        const link = getByRole('link');
        expect(link).toBeDefined();
        expect(link).toHaveAttribute('href', 'https://workday.com');
        expect(link).toHaveAttribute('target', '_blank');
      });
    });

    describe('when clicked', () => {
      it('should call a callback function', () => {
        const {getByRole} = render(<ButtonComponent onClick={cb} />);
        fireEvent.click(getByRole('button'));
        expect(cb).toHaveBeenCalledTimes(1);
      });
    });
  });
});
