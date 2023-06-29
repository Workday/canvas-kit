/**
 * @jest-environment node
 */
import React from 'react';
import {renderToString} from 'react-dom/server';
import {Flex, Grid, Box} from '../';
const context = describe;
describe('Layout Components', () => {
  context('Flex Component', () => {
    it('should render on a server without crashing', () => {
      const ssrRender = () => renderToString(<Flex>Hello, Flex!</Flex>);
      expect(ssrRender).not.toThrow();
    });
  });
  context('Grid Component', () => {
    it('should render on a server without crashing', () => {
      const ssrRender = () => renderToString(<Grid gridGap="s">Hello, Grid!</Grid>);
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
