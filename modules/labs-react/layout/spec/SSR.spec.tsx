/**
 * @jest-environment node
 */
import React from 'react';
import {renderToString} from 'react-dom/server';
import {Flex} from '../';

describe('Flex', () => {
  it('should render on a server without crashing', () => {
    const ssrRender = () => renderToString(<Flex>hello, Flex!</Flex>);
    expect(ssrRender).not.toThrow();
  });
});
