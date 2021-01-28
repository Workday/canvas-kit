// React ssr test template

module.exports = pascalCaseName => `
/**
 * @jest-environment node
 */
import React from 'react';
import {renderToString} from 'react-dom/server';
import {${pascalCaseName}} from '../';

describe('${pascalCaseName}', () => {
  it('should render on a server without crashing', () => {
    const ssrRender = () => renderToString(
      <${pascalCaseName}>
        <${pascalCaseName}.Target>Target</${pascalCaseName}.Target>
        <${pascalCaseName}.Content>Content</${pascalCaseName}.Content>
      </${pascalCaseName}>
    );
    expect(ssrRender).not.toThrow();
  });
});

`;
