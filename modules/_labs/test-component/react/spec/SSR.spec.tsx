
/**
 * @jest-environment node
 */
import React from 'react';
import {renderToString} from 'react-dom/server';
import {TestComponent} from '../';

describe('TestComponent', () => {
  it('should render on a server without crashing', () => {
    const ssrRender = () => renderToString(<TestComponent />);
    expect(ssrRender).not.toThrow();
  });
});

