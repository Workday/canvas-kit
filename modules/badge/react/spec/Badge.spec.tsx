import React from 'react';
import {render} from '@testing-library/react';
import {Badge, BadgeProps} from '../index';

describe('Badge', () => {
  const renderBadge = (props = {} as Partial<BadgeProps>) => {
    const badgeProps = {
      'aria-label': props.count ? `${props.count} new notifications` : 'new notifications',
      ...props,
    };
    return render(<Badge {...badgeProps} />);
  };

  it('should default to empty if no count is provided', () => {
    const expected = '';
    const {container} = renderBadge();

    expect(container.textContent).toEqual(expected);
  });

  it('should render the count for numbers under 1000', () => {
    const count = 999;
    const expected = count.toString();
    const {container} = renderBadge({count});

    expect(container.textContent).toEqual(expected);
  });

  it('should render 999+ for numbers 1000 and above', () => {
    const count = 1000;
    const expected = '999+';
    const {container} = renderBadge({count});

    expect(container.textContent).toEqual(expected);
  });
});
