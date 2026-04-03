import {renderToString} from 'react-dom/server';

import {inboxTrayIcon} from '@workday/canvas-expressive-icons-web';

import {ExpressiveIcon} from '../lib/ExpressiveIcon';

describe('Expressive Icon', () => {
  it('should render on a server without crashing', () => {
    const ssrRender = () => renderToString(<ExpressiveIcon icon={inboxTrayIcon} />);

    expect(ssrRender).not.toThrow();
  });
});
