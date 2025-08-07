/**
 * @jest-environment node
 */
import React from 'react';
import {renderToString} from 'react-dom/server';
import {Avatar} from '../';

describe('Avatar', () => {
  it('should render on a server without crashing', () => {
    const ssrRender = () => renderToString(<Avatar name="John Doe"></Avatar>);
    expect(ssrRender).not.toThrow();
  });
});
