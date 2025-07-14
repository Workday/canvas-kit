/**
 * @jest-environment node
 */
import {renderToString} from 'react-dom/server';
import {AiAssistantIngressButton} from '../lib/AiAssistantIngressButton';

describe('AiAssistantIngressButton', () => {
  it('should render on a server without crashing', () => {
    const ssrRender = () =>
      renderToString(<AiAssistantIngressButton aria-label="Show AI Assistant" />);
    expect(ssrRender).not.toThrow();
  });
});
