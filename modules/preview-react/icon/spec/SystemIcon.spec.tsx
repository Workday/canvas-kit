import {renderToString} from 'react-dom/server';

import {sendIcon} from '@workday/canvas-system-icons-web';

import {SystemIcon} from '../lib/SystemIcon';

describe('System Icon', () => {
  it('should render on a server without crashing', () => {
    const ssrRender = () => renderToString(<SystemIcon icon={sendIcon} />);

    expect(ssrRender).not.toThrow();
  });
});
