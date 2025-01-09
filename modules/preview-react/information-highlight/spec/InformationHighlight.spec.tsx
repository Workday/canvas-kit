/**
 * @jest-environment node
 */
import React from 'react';
import {renderToString} from 'react-dom/server';
import {infoIcon} from '@workday/canvas-system-icons-web';
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
});
