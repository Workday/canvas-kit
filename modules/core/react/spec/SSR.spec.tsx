/**
 * @jest-environment node
 */
import React from 'react';
import {renderToString} from 'react-dom/server';
import InputProvider from '../lib/InputProvider';

describe('InputProvider', () => {
  it('should render on a server without crashing', () => {
    const ssrRender = () => renderToString(<InputProvider />);
    expect(ssrRender).not.toThrow();
  });
});
