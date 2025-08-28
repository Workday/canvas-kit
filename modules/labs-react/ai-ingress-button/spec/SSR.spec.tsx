/**
 * @jest-environment node
 */
import {renderToString} from 'react-dom/server';
import {AIIngressButton} from '../lib/AIIngressButton';

describe('AIIngressButton', () => {
  it('should render on a server without crashing', () => {
    const ssrRender = () => renderToString(<AIIngressButton aria-label="Show AI Ingress" />);
    expect(ssrRender).not.toThrow();
  });
});
