import * as React from 'react';
import {render} from '@testing-library/react';

import {DeprecatedLayout} from '../lib/Layout';

describe('DeprecatedLayout', () => {
  it('should spread extra props to the container element', () => {
    const {container} = render(
      <DeprecatedLayout data-propspread="test">
        <DeprecatedLayout.Column />
      </DeprecatedLayout>
    );

    expect(container.firstChild).toHaveAttribute('data-propspread', 'test');
  });
});

describe('Column', () => {
  it('should spread extra props to the container element', () => {
    const {container} = render(<DeprecatedLayout.Column data-propspread="test" />);

    expect(container.firstChild).toHaveAttribute('data-propspread', 'test');
  });
});
