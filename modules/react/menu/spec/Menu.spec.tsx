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

  it('should generate CSS-safe IDs with guillemets', async () => {
    const MenuWithGroup = () => <Basic />;

    render(<MenuWithGroup />);

    // Open the menu to render the group
    fireEvent.click(screen.getByText('Open Menu'));

    // Menu.Group uses useUniqueId for its heading ID
    const groupHeading = await screen.findByText('Group Heading');
    const id = groupHeading.id;

    // ID should use guillemets «» not colons :
    // Format should be like «r0» not :r0:
    expect(id).not.toContain(':');
    expect(id).toMatch(/^«.*»$/); // Should start with « and end with »

    // Verify it's a valid CSS selector (the main issue we're fixing)
    expect(() => document.querySelector(`[id="${id}"]`)).not.toThrow();
  });
});
