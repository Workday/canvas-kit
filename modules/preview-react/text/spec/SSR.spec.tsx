/**
 * @jest-environment node
 */
import React from 'react';
import {renderToString} from 'react-dom/server';
import {Text} from '../';

describe('Text', () => {
  it('should render on a server without crashing', () => {
    const ssrRender = () => renderToString(<Text>text</Text>);
    expect(ssrRender).not.toThrow();
  });
});
