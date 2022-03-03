import * as React from 'react';
import Banner from '../lib/Banner';
import ReactDOMServer from 'react-dom/server';
import {axe} from 'jest-axe';
import {screen, render} from '@testing-library/react';

describe('Banner', () => {
  it('should spread extra props to button element', () => {
    render(<Banner data-propspread="test" />);

    expect(screen.getByRole('button')).toHaveAttribute('data-propspread', 'test');
  });

  it('should pass axe', async () => {
    const html = ReactDOMServer.renderToString(<Banner />);
    expect(
      await axe(html, {
        rules: {
          region: {enabled: false},
        },
      })
    ).toHaveNoViolations();
  });
});
