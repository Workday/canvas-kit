/**
 * @jest-environment node
 */
import React from 'react';
import {renderToString} from 'react-dom/server';
import {ExpandableContainer} from '../';

describe('ExpandableContainer', () => {
  it('should render on a server without crashing', () => {
    const ssrRender = () =>
      renderToString(
        <ExpandableContainer>
          <ExpandableContainer.Target>Target</ExpandableContainer.Target>
          <ExpandableContainer.Content>Content</ExpandableContainer.Content>
        </ExpandableContainer>
      );
    expect(ssrRender).not.toThrow();
  });
});
