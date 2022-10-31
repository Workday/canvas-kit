import * as React from 'react';
import {render} from '@testing-library/react';

import {LoadingDots} from '../lib/LoadingDots';

describe('LoadingDots', () => {
  it('should spread extra props to container', () => {
    const {container} = render(<LoadingDots data-propspread="test" />);

    expect(container.firstChild).toHaveAttribute('data-propspread', 'test');
  });
});
