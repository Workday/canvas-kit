/**
 * @jest-environment node
 */
import React from 'react';
import {renderToString} from 'react-dom/server';
import {Radio} from '../';

describe('Radio', () => {
  it('should render on a server without crashing', () => {
    const ssrRender = () =>
      renderToString(
        <Radio>
          <Radio.Target>Target</Radio.Target>
          <Radio.Content>Content</Radio.Content>
        </Radio>
      );
    expect(ssrRender).not.toThrow();
  });
});
