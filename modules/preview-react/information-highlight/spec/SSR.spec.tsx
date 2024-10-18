/**
 * @jest-environment node
 */
import React from 'react';
import {renderToString} from 'react-dom/server';
import {InformationHighlight} from '../index';

describe('InformationHighlight', () => {
  it('should render on a server without crashing', () => {
    const ssrRender = () => renderToString(<InformationHighlight></InformationHighlight>);
    expect(ssrRender).not.toThrow();
  });
});
