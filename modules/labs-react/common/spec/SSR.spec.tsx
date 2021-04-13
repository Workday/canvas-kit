/**
 * @jest-environment node
 */
import * as React from 'react';
import {renderToString} from 'react-dom/server';
import {Box} from '../';

describe('Box', () => {
  it('should render on a server without crashing', () => {
    const ssrRender = () => renderToString(<Box>Hello, Box!</Box>);
    expect(ssrRender).not.toThrow();
  });
});
