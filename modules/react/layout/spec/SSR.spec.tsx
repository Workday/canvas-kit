/**
 * @jest-environment node
 */
import React from 'react';
import {renderToString} from 'react-dom/server';
import {Flex, Stack, Box} from '../';
const context = describe;
describe('Layout Components', () => {
  context('Flex Component', () => {
    it('should render on a server without crashing', () => {
      const ssrRender = () => renderToString(<Flex>Hello, Flex!</Flex>);
      expect(ssrRender).not.toThrow();
    });
  });
  context('Stack Component', () => {
    it('should render on a server without crashing', () => {
      const ssrRender = () => renderToString(<Stack spacing="s">Hello, Stack!</Stack>);
      expect(ssrRender).not.toThrow();
    });
  });
});

describe('Box', () => {
  it('should render on a server without crashing', () => {
    const ssrRender = () => renderToString(<Box>Hello, Box!</Box>);
    expect(ssrRender).not.toThrow();
  });
});
