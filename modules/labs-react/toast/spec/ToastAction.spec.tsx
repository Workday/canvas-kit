import {fireEvent, render, screen} from '@testing-library/react';
import {Toast} from '../lib/Toast';
import React from 'react';

describe('Toast.Link', () => {
  const cb = jest.fn();

  it('should have a role of "a"', () => {
    render(<Toast.Link href="#href">Link Link</Toast.Link>);

    expect(screen.getByText('Link Link')).toBeInTheDocument();
  });

  it('should call the onLinkClick callback', () => {
    const linkText = 'View more details';

    render(<Toast.Link href="#href">{linkText}</Toast.Link>);

    fireEvent.click(screen.getByText(linkText));
    expect(cb).toHaveBeenCalledTimes(1);
  });
});
