import {fireEvent, render, screen} from '@testing-library/react';
import {Toast} from '../lib/Toast';
import React from 'react';

describe('Toast.Action', () => {
  const cb = jest.fn();

  it('should have a role of "a"', () => {
    render(<Toast.Action href="#href">Action Link</Toast.Action>);

    expect(screen.getByText('Action Link')).toBeInTheDocument();
  });

  it('should call the onActionClick callback', () => {
    const actionText = 'View more details';

    render(<Toast.Action href="#href">{actionText}</Toast.Action>);

    fireEvent.click(screen.getByText(actionText));
    expect(cb).toHaveBeenCalledTimes(1);
  });
});
