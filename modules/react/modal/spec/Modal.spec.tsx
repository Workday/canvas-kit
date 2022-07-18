import * as React from 'react';
import {renderToString} from 'react-dom/server';

import {Basic} from '../stories/examples/Basic';

describe('Modal', () => {
  it('should render on a server without crashing', () => {
    const ssrRender = () => renderToString(<Basic />);

    expect(ssrRender).not.toThrow();
  });
});
