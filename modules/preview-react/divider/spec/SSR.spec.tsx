/**
 * @jest-environment node
 */
import React from 'react';
import {renderToString} from 'react-dom/server';

import {Divider} from '../';

describe('Divider', () => {
  it('should render on a server without crashing', () => {
    const ssrRender = () => renderToString(<Divider />);
    expect(ssrRender).not.toThrow();
  });
});
