/**
 * @jest-environment node
 */
import React from 'react';
import {renderToString} from 'react-dom/server';

import {SelectionGroup} from '../';

describe('SelectionGroup', () => {
  it('should render on a server without crashing', () => {
    const ssrRender = () =>
      renderToString(
        <SelectionGroup mode="single">
          <SelectionGroup.List aria-label="Options">
            <SelectionGroup.Item data-id="option-a">Option A</SelectionGroup.Item>
            <SelectionGroup.Item data-id="option-b">Option B</SelectionGroup.Item>
          </SelectionGroup.List>
        </SelectionGroup>
      );
    expect(ssrRender).not.toThrow();
  });
});
