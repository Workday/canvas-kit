import React from 'react';
import {render, screen, fireEvent, waitFor} from '@testing-library/react';
import {Basic} from '../stories/examples/Basic';

describe('Menu with RTL queries (verifying useId fix)', () => {
  const BasicMenu = () => {
    return <Basic />;
  };

  it('should work with getByText and fireEvent.click', async () => {
    render(<BasicMenu />);

    // Click the menu target using getByText - this would fail with :r0: IDs
    const target = screen.getByText('Open Menu');
    fireEvent.click(target);

    // Find menu item using getByText
    const firstItem = await screen.findByText('First Item');
    fireEvent.click(firstItem);

    // Verify selection worked
    await waitFor(() => {
      expect(screen.getByTestId('output')).toHaveTextContent('0');
    });
  });

  it('should work with getByRole queries', async () => {
    render(<BasicMenu />);

    // Use role-based query
    const target = screen.getByRole('button', {name: 'Open Menu'});
    fireEvent.click(target);

    // Menu items have menuitem role
    const secondItem = await screen.findByRole('menuitem', {name: 'Second Item'});
    fireEvent.click(secondItem);

    await waitFor(() => {
      expect(screen.getByTestId('output')).toHaveTextContent('1');
    });
  });
});
