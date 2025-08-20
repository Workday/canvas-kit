import * as React from 'react';
import {render, fireEvent} from '@testing-library/react';
import {Avatar} from '../lib/Avatar';
import {createStencil, cssVar} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';
import {systemIconStencil} from '../../icon';

describe('Avatar', () => {
  it('should render a button element', () => {
    const screen = render(<Avatar data-testid="test" />);
    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  it('should forward extra attributes to the container', () => {
    const {getByRole} = render(<Avatar id="myAvatar" />);
    expect(getByRole('button')).toHaveAttribute('id', 'myAvatar');
  });

  it('should set the aria-label of the button with the altText prop', () => {
    const screen = render(<Avatar altText="My alt text" />);
    expect(screen.getByRole('button')).toHaveAttribute('aria-label', 'My alt text');
  });

  it('should set the url of the image when passed the url prop', () => {
    const screen = render(<Avatar url="https://example.com/image.png" altText="My alt text" />);
    expect(screen.getByRole('img')).toHaveAttribute('src', 'https://example.com/image.png');
    expect(screen.getByRole('img')).toHaveAttribute('alt', 'My alt text');
  });

  it('should forward ref to the button element', () => {
    const ref = React.createRef<HTMLButtonElement>();
    const screen = render(<Avatar ref={ref} />);
    expect(ref.current).toEqual(screen.getByRole('button'));
  });

  it('should call onClick callback when clicked', () => {
    const fn = jest.fn();
    const screen = render(<Avatar onClick={fn} />);
    fireEvent.click(screen.getByRole('button'));
    expect(fn).toBeCalled();
  });

  it('should render a div when as prop is specified', () => {
    const screen = render(<Avatar as="div" data-testid="test" />);
    expect(screen.getByTestId('test').tagName.toLowerCase()).toEqual('div');
  });

  it('should apply the variant class when variant prop is specified', () => {
    const {container} = render(<Avatar variant="dark" />);
    expect(container.firstChild).toHaveStyle(`backgroundColor: system.color.bg.primary.default}`);
  });

  it('should apply the size class when size prop is specified', () => {
    const {container} = render(<Avatar size="40px" />);
    expect(container.firstChild).toHaveStyle(
      `width: calc.multiply(40px, 0.625); height: calc.multiply(40px, 0.625)}`
    );
  });

  it('should set the background color when background prop is specified', () => {
    const customGreenAvatarStencil = createStencil({
      base: {
        backgroundColor: system.color.static.green.default,
        ['[data-part="avatar-icon"]']: {
          [systemIconStencil.vars.color]: system.color.static.green.softer,
        },
      },
    });

    const {container} = render(<Avatar {...customGreenAvatarStencil()} />);
    expect(container.firstChild).toHaveStyle(
      `background: ${cssVar(system.color.static.green.default)}`
    );
  });

  it('should set the object fit of the image when objectFit prop is specified', () => {
    const {container} = render(<Avatar url="https://example.com/image.png" objectFit="cover" />);
    expect(container.querySelector('[data-part="avatar-image"]')).toHaveStyle('object-fit: cover');
  });

  it('should hide the icon when the image is loaded', () => {
    const screen = render(<Avatar url="https://example.com/image.png" />);
    fireEvent.load(screen.getByRole('img'));
    expect(screen.queryByRole('img')).toHaveStyle('opacity: 1');
  });

  it('should show the icon when the image is not loaded', () => {
    const {container} = render(<Avatar url="https://example.com/image.png" />);
    expect(container.querySelector('svg')).toBeInTheDocument();
  });
});
