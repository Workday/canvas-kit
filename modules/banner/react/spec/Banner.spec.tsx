import * as React from 'react';
import Banner from '../lib/Banner';
import ReactDOMServer from 'react-dom/server';
import {axe} from 'jest-axe';

describe('Banner Accessibility', () => {
  test('Banner should pass axe DOM accessibility guidelines', async () => {
    const html = ReactDOMServer.renderToString(<Banner />);
    expect(await axe(html)).toHaveNoViolations();
  });
});
