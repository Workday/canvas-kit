import * as React from 'react';
import {render} from '@testing-library/react';
import ColorPreview from '../lib/ColorPreview';

const id = 'color-preview';
const value = 'eee';

describe('ColorPreview', () => {
  describe('when rendered', () => {
    describe('with a value', () => {
      test('should render ColorPreview with value', () => {
        const {getByTestId} = render(<ColorPreview value={value} data-testid={id} />);
        expect(getByTestId(id)).toHaveValue(value);
      });
    });

    describe('with a value', () => {
      test('should render ColorPreview as readonly', () => {
        const {getByTestId} = render(<ColorPreview value={value} data-testid={id} />);
        expect(getByTestId(id)).toHaveAttribute('readonly');
      });
    });

    describe('with a value', () => {
      test('should render ColorPreview with the value as a background', () => {
        const {container} = render(<ColorPreview value={value} data-testid={id} />);
        expect(container.querySelector('div div input + div')).toHaveStyle(
          'background-color: #eee;'
        );
      });
    });

    describe('with disabled attribute', () => {
      test('should render a disabled ColorPreview', () => {
        const {getByTestId} = render(
          <ColorPreview value={value} disabled={true} data-testid={id} />
        );
        expect(getByTestId(id)).toBeDisabled();
      });
    });

    describe('with an id', () => {
      test('should render a ColorPreview with an id', () => {
        const {getByTestId} = render(<ColorPreview id="my-id" value={value} data-testid={id} />);
        expect(getByTestId(id)).toHaveAttribute('id', 'my-id');
      });
    });

    describe('without a value', () => {
      test('should render a ColorPreview with an id', () => {
        const {getByTestId} = render(<ColorPreview id="my-id" value="eee" data-testid={id} />);
        expect(getByTestId(id)).toHaveAttribute('id', 'my-id');
      });
    });

    describe('with an input ref', () => {
      test('should set the ref to the input element', async () => {
        const ref: React.RefObject<HTMLInputElement> = React.createRef();
        const {findByRole} = render(<ColorPreview value={value} inputRef={ref} />);
        expect(await findByRole('textbox')).toEqual(ref.current);
      });
    });

    describe('with a value that has a hash', () => {
      test('the value is stripped', () => {
        const {getByTestId} = render(<ColorPreview value={'#eee'} data-testid={id} />);
        expect(getByTestId(id)).toHaveValue(value);
      });
    });

    describe('with a value more than 6 characters in length', () => {
      test('the value is stripped', () => {
        const {getByTestId} = render(<ColorPreview value={'123456789'} data-testid={id} />);
        expect(getByTestId(id)).toHaveValue('123456');
      });
    });

    describe('with extra, arbitrary props', () => {
      test('should spread extra props', () => {
        const attr = 'test';
        const {getByTestId} = render(
          <ColorPreview value={value} data-propspread={attr} data-testid={id} />
        );
        expect(getByTestId(id)).toHaveAttribute('data-propspread', attr);
      });
    });
  });
});
