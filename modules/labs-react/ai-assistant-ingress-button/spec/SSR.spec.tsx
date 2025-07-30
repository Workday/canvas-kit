/**
 * @jest-environment node
 */
import {renderToString} from 'react-dom/server';
import {AIAssistantIngressButton} from '../lib/AIAssistantIngressButton';

describe('AiAssistantIngressButton', () => {
  it('should render on a server without crashing', () => {
    const ssrRender = () =>
      renderToString(<AIAssistantIngressButton aria-label="Show AI Assistant" />);
    expect(ssrRender).not.toThrow();
  });
});
