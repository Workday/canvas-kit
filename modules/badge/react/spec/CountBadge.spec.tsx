import React from 'react';
import {render} from '@testing-library/react';
import {CountBadge, CountBadgeProps} from '../index';
const context = describe;

describe('CountBadge', () => {
  const renderCountBadge = (props = {} as Partial<CountBadgeProps>) => {
    return render(<CountBadge {...props} />);
  };

  context('when the default count is set', () => {
    it('should default to 0 if no count is provided', () => {
      const expected = '0';
      const {container} = renderCountBadge();

      expect(container.textContent).toEqual(expected);
    });
  });

  context('when the default limit is set', () => {
    it('should render the count for numbers under 1000', () => {
      const count = 999;
      const expected = count.toString();
      const {container} = renderCountBadge({count});

      expect(container.textContent).toEqual(expected);
    });

    it('should render 999+ for numbers 1000 and above', () => {
      const count = 1000;
      const expected = '999+';
      const {container} = renderCountBadge({count});

      expect(container.textContent).toEqual(expected);
    });
  });

  context('when a custom limit is set', () => {
    it('should render a formatted number if the count exceeds the limit', () => {
      const count = 100;
      const limit = 100;
      const expected = '99+';
      const {container} = renderCountBadge({count, limit});

      expect(container.textContent).toEqual(expected);
    });
  });
});
