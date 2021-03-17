/**
 * @jest-environment node
 */
import React from 'react';
import {renderToString} from 'react-dom/server';
import SidePanel from '../';

describe('SidePanel', () => {
  it('should render on a server without crashing', () => {
    const ssrRender = () => renderToString(<SidePanel />);
    expect(ssrRender).not.toThrow();
  });
});
