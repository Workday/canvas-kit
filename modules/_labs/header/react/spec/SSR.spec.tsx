/**
 * @jest-environment node
 */
import React from 'react';
import {renderToString} from 'react-dom/server';
import {Header, GlobalHeader} from '../';

describe('Header', () => {
  it('should render on a server without crashing', () => {
    const ssrRender = () => renderToString(<Header />);
    expect(ssrRender).not.toThrow();
  });
});

describe('GlobalHeader', () => {
  it('should render on a server without crashing', () => {
    const ssrRender = () => renderToString(<GlobalHeader />);
    expect(ssrRender).not.toThrow();
  });
});
