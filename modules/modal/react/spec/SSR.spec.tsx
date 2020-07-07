/**
 * @jest-environment node
 */
import React from 'react';
import {renderToString} from 'react-dom/server';
import Modal from '../';

describe('Modal', () => {
  it('should render on a server without crashing', () => {
    const ssrRender = () => renderToString(<Modal open={true} heading="test" />);
    expect(ssrRender).not.toThrow();
  });
});
