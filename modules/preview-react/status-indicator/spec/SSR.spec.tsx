import {renderToString} from 'react-dom/server';

import {StatusIndicator} from '@workday/canvas-kit-preview-react/status-indicator';
import {cloudArrowUpIcon} from '@workday/canvas-system-icons-web';

describe('StatusIndicator', () => {
  it('should render on a server without crashing', () => {
    const ssrRender = () =>
      renderToString(
        <StatusIndicator>
          <StatusIndicator.Icon icon={cloudArrowUpIcon} />
          <StatusIndicator.Label>Content</StatusIndicator.Label>
        </StatusIndicator>
      );
    expect(ssrRender).not.toThrow();
  });
});
