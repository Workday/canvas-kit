import * as React from 'react';
import {screen, render} from '@testing-library/react';

import {TableRow} from '../lib/TableRow';

describe('TableRow', () => {
  it('should apply a custom class', () => {
    const customClassName = 'custom-class-name';
    const testProps = {
      className: customClassName,
    };
    render(<TableRow {...testProps} />);

    expect(screen.getByRole('row')).toHaveClass(customClassName);
  });

  it('should spread extra props', () => {
    render(<TableRow data-propspread="test" />);

    expect(screen.getByRole('row')).toHaveAttribute('data-propspread', 'test');
  });
});
