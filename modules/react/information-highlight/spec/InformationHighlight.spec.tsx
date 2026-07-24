/**
 * @jest-environment node
 */
import React from 'react';
import {renderToString} from 'react-dom/server';

import {infoIcon, layersIcon} from '@workday/canvas-system-icons-web';

import {InformationHighlight} from '../';

describe('InformationHighlight', () => {
  it('should render on a server without crashing', () => {
    const ssrRender = () =>
      renderToString(
        <InformationHighlight>
          <InformationHighlight.Icon icon={infoIcon} />
          <InformationHighlight.Heading>Content</InformationHighlight.Heading>
          <InformationHighlight.Body>Content</InformationHighlight.Body>
        </InformationHighlight>
      );
    expect(ssrRender).not.toThrow();
  });

  it('should render default variant on a server without crashing', () => {
    const ssrRender = () =>
      renderToString(
        <InformationHighlight variant="default">
          <InformationHighlight.Icon icon={layersIcon} />
          <InformationHighlight.Heading>Content</InformationHighlight.Heading>
          <InformationHighlight.Body>Content</InformationHighlight.Body>
        </InformationHighlight>
      );
    expect(ssrRender).not.toThrow();
  });

  it('should render ctaPlacement end on a server without crashing', () => {
    const ssrRender = () =>
      renderToString(
        <InformationHighlight variant="informational" ctaPlacement="end">
          <InformationHighlight.Icon />
          <InformationHighlight.Heading>Content</InformationHighlight.Heading>
          <InformationHighlight.Body>Content</InformationHighlight.Body>
          <InformationHighlight.Link href="#link">Link</InformationHighlight.Link>
        </InformationHighlight>
      );
    expect(ssrRender).not.toThrow();
  });
});
