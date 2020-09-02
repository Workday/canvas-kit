import * as React from 'react';
import Avatar from '../lib/Avatar';
import {render, fireEvent} from '@testing-library/react';

describe('Avatar', () => {
  it('should render a button element', () => {
    const screen = render(<Avatar data-testid="test" />);

    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  it('should forward extra attributes to the container', () => {
    const screen = render(<Avatar id="myAvatar" />);

    expect(screen.getByRole('button')).toHaveAttribute('id', 'myAvatar');
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
});
