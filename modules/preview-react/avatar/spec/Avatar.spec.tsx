import * as React from 'react';
import {render, waitFor} from '@testing-library/react';
import {Avatar} from '../lib/Avatar';

describe('Avatar', () => {
  it('shoudld show the initials JD given the name is John Doe', () => {
    const screen = render(<Avatar name="John Doe" />);

    expect(screen.getByText('JD')).toBeVisible();
  });
  it('shoudld show the initials J given the name is John', () => {
    const screen = render(<Avatar name="John" />);

    expect(screen.getByText('J')).toBeVisible();
  });

  it('should show the initials JM given the name is John Doe Mee', () => {
    const screen = render(<Avatar name="John Doe Mee" />);

    expect(screen.getByText('JM')).toBeVisible();
  });

  describe('Image loading states and fallback behavior', () => {
    it('should show initials when no url is provided', () => {
      const screen = render(<Avatar name="Jane Smith" />);

      expect(screen.getByText('JS')).toBeVisible();
      expect(screen.queryByRole('presentation')).not.toBeInTheDocument();
    });

    it('should initially show initials when url is provided but image not loaded', () => {
      const screen = render(<Avatar name="John Doe" url="https://picsum.photos/id/237/300/200" />);

      // Before image loads, initials should be visible
      expect(screen.getByText('JD')).toBeVisible();
      waitFor(() => {
        expect(screen.getByRole('presentation')).toBeInTheDocument();
        expect(screen.getByText('JD')).not.toBeInTheDocument();
      });
    });

    it('should show initials if image fails to load', () => {
      const screen = render(
        <Avatar name="Bob Wilson" url="https://example.com/invalid-image.jpg" />
      );
      expect(screen.getByText('BW')).toBeVisible();
    });
  });
});
