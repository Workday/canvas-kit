/**
 * @jest-environment node
 */
import React from 'react';
import {renderToString} from 'react-dom/server';
import {LabelText, Text, BodyText, Heading, Subtext, Title} from '../';

describe('Text', () => {
  it('should render Label on a server without crashing', () => {
    const ssrRender = () => renderToString(<LabelText>text</LabelText>);
    expect(ssrRender).not.toThrow();
  });

  it('should render Text on a server without crashing', () => {
    const ssrRender = () => renderToString(<Text>text</Text>);
    expect(ssrRender).not.toThrow();
  });

  it('should render BodyText on a server without crashing', () => {
    const ssrRender = () => renderToString(<BodyText size="small">text</BodyText>);
    expect(ssrRender).not.toThrow();
  });

  it('should render Heading on a server without crashing', () => {
    const ssrRender = () => renderToString(<Heading size="small">text</Heading>);
    expect(ssrRender).not.toThrow();
  });

  it('should render Subtext on a server without crashing', () => {
    const ssrRender = () => renderToString(<Subtext size="small">text</Subtext>);
    expect(ssrRender).not.toThrow();
  });

  it('should render Title on a server without crashing', () => {
    const ssrRender = () => renderToString(<Title size="small">text</Title>);
    expect(ssrRender).not.toThrow();
  });
});
