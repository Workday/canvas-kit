/**
 * @jest-environment node
 */
import React from 'react';
import {renderToString} from 'react-dom/server';
import {DeprecatedHeader, DeprecatedGlobalHeader} from '../';

describe('Deprecated Header', () => {
  it('should render on a server without crashing', () => {
    const ssrRender = () => renderToString(<DeprecatedHeader />);
    expect(ssrRender).not.toThrow();
  });
});

describe('Deprecated Global Header', () => {
  it('should render on a server without crashing', () => {
    const ssrRender = () => renderToString(<DeprecatedGlobalHeader />);
    expect(ssrRender).not.toThrow();
  });
});
