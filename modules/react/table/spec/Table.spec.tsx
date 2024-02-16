import * as React from 'react';
import {screen, render} from '@testing-library/react';

import {Table} from '../lib/Table';

describe('Table', () => {
  it('should apply a custom class', () => {
    const customClassName = 'custom-class-name';
    const testProps = {
      className: customClassName,
    };
    render(<Table {...testProps} />);

    expect(screen.getByRole('table')).toHaveClass(customClassName);
  });

  it('should spread extra props', () => {
    render(<Table data-propspread="test" />);

    expect(screen.getByRole('table')).toHaveAttribute('data-propspread', 'test');
  });
});
