import * as React from 'react';
import {render} from '@testing-library/react';

import Layout from '../lib/Layout';

describe('Layout', () => {
  it('should spread extra props to the container element', () => {
    const {container} = render(
      <Layout data-propspread="test">
        <Layout.Column />
      </Layout>
    );

    expect(container.firstChild).toHaveAttribute('data-propspread', 'test');
  });
});

describe('Column', () => {
  it('should spread extra props to the container element', () => {
    const {container} = render(<Layout.Column data-propspread="test" />);

    expect(container.firstChild).toHaveAttribute('data-propspread', 'test');
  });
});
