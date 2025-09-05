import * as React from 'react';
import {render} from '@testing-library/react';
import {Skeleton} from '../lib/Skeleton';

describe('Skeleton', () => {
  it('should render', () => {
    const screen = render(
      <Skeleton>
        <span>Hello</span>
      </Skeleton>
    );

    expect(screen.container).toHaveTextContent('Hello');
  });

  it('Skeleton should spread extra props', () => {
    const screen = render(<Skeleton data-propspread="test" />);
    expect(screen.container.firstChild).toHaveAttribute('data-propspread', 'test');
  });

  describe('Accessibility', () => {
    it('should add aria-hidden to all of the children', () => {
      const screen = render(
        <Skeleton>
          <span data-testid="span">Hello</span>
        </Skeleton>
      );

      expect(screen.getByTestId('span').parentElement).toHaveAttribute('aria-hidden', 'true');
    });

    it('should have a text element with the loading label', () => {
      const screen = render(
        <Skeleton>
          <span data-testid="span">Hello</span>
        </Skeleton>
      );

      expect(screen.container).toHaveTextContent('Loading');
    });

    it('should have a text element with a custom loading label', () => {
      const screen = render(
        <Skeleton aria-label="Loading items">
          <span data-testid="span">Hello</span>
        </Skeleton>
      );

      expect(screen.container).toHaveTextContent('Loading items');
    });
  });
});
