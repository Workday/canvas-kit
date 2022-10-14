/**
 * @jest-environment node
 */
import React from 'react';
import {renderToString} from 'react-dom/server';
import {Breadcrumbs} from '../';

describe('Breadcrumbs', () => {
  it('should render on a server without crashing', () => {
    const ssrRender = () =>
      renderToString(
        <Breadcrumbs aria-label="Breadcrumbs">
          <Breadcrumbs.List>
            <Breadcrumbs.Item>Item</Breadcrumbs.Item>
          </Breadcrumbs.List>
        </Breadcrumbs>
      );
    expect(ssrRender).not.toThrow();
  });
});
