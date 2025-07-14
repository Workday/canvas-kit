/**
 * @jest-environment node
 */
import React from 'react';
import {renderToString} from 'react-dom/server';
import {AiAssistantButton} from '../';

describe('AiAssistantButton', () => {
  it('should render on a server without crashing', () => {
    const ssrRender = () =>
      renderToString(
        <AiAssistantButton>
          <AiAssistantButton.Target>Target</AiAssistantButton.Target>
          <AiAssistantButton.Content>Content</AiAssistantButton.Content>
        </AiAssistantButton>
      );
    expect(ssrRender).not.toThrow();
  });
});
