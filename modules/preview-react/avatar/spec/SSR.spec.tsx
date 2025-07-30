/**
 * @jest-environment node
 */
import React from 'react';
import {renderToString} from 'react-dom/server';
import {Avatar} from '../';

describe('Avatar', () => {
  it('should render on a server without crashing', () => {
    const ssrRender = () =>
      renderToString(
        <Avatar>
          <Avatar.Target>Target</Avatar.Target>
          <Avatar.Content>Content</Avatar.Content>
        </Avatar>
      );
    expect(ssrRender).not.toThrow();
  });
});
