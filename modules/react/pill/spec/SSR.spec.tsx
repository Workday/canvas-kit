/**
 * @jest-environment node
 */
import React from 'react';
import {renderToString} from 'react-dom/server';
import {Pill} from '../';

describe('Pill', () => {
  it('should render on a server without crashing', () => {
    const ssrRender = () =>
      renderToString(
        <Pill>
          <Pill.Target>Target</Pill.Target>
          <Pill.Content>Content</Pill.Content>
        </Pill>
      );
    expect(ssrRender).not.toThrow();
  });
});
