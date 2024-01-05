import * as React from 'react';
import {render} from '@testing-library/react';

import {LoadingSparkles} from '../lib/LoadingSparkles';

describe('LoadingSparkles', () => {
  it('should spread extra props to container', () => {
    const {container} = render(<LoadingSparkles data-propspread="test" />);

    expect(container.firstChild).toHaveAttribute('data-propspread', 'test');
  });
});
