import * as React from 'react';
import {
  Button,
  DeleteButton,
  DropdownButton,
  HighlightButton,
  OutlineButton,
  TextButton,
  deprecated_Button as DeprecatedButton,
} from '../index';
import {render, fireEvent} from '@testing-library/react';

const map: any = {
  Button: Button,
  'Delete Button': DeleteButton,
  'Dropdown Button': DropdownButton,
  'Highlight Button': HighlightButton,
  'Outline Button': OutlineButton,
  'Text Button': TextButton,
  'Deprecated Button': DeprecatedButton,
};
Object.keys(map).forEach(buttonName => {
  const ButtonComponent = map[buttonName];

  describe(buttonName, () => {
    const cb = jest.fn();
    afterEach(() => {
      cb.mockReset();
    });

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
        const ref = React.createRef<HTMLButtonElement>();

        render(<ButtonComponent buttonRef={ref} />);

        expect(ref.current).not.toBeNull();
        expect(ref.current!.tagName.toLowerCase()).toEqual('button');
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
