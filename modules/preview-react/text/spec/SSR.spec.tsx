/**
 * @jest-environment node
 */
import React from 'react';
import {renderToString} from 'react-dom/server';
import {Label, Text, TypeBodyLevel, TypeHeadingLevel, TypeSubtextLevel, TypeTitleLevel} from '../';

describe('Text', () => {
  it('should render Label on a server without crashing', () => {
    const ssrRender = () => renderToString(<Label>text</Label>);
    expect(ssrRender).not.toThrow();
  });

  it('should render Text on a server without crashing', () => {
    const ssrRender = () => renderToString(<Text>text</Text>);
    expect(ssrRender).not.toThrow();
  });

  it('should render TypeBodyLevel on a server without crashing', () => {
    const ssrRender = () => renderToString(<TypeBodyLevel size="small">text</TypeBodyLevel>);
    expect(ssrRender).not.toThrow();
  });

  it('should render TypeHeadingLevel on a server without crashing', () => {
    const ssrRender = () => renderToString(<TypeHeadingLevel size="small">text</TypeHeadingLevel>);
    expect(ssrRender).not.toThrow();
  });

  it('should render TypeSubtextLevel on a server without crashing', () => {
    const ssrRender = () => renderToString(<TypeSubtextLevel size="small">text</TypeSubtextLevel>);
    expect(ssrRender).not.toThrow();
  });

  it('should render TypeTitleLevel on a server without crashing', () => {
    const ssrRender = () => renderToString(<TypeTitleLevel size="small">text</TypeTitleLevel>);
    expect(ssrRender).not.toThrow();
  });
});
