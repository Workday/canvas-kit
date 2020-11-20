/**
 * @jest-environment node
 */
import React from 'react';
import {renderToString} from 'react-dom/server';
import Expandable from '../';

describe('Expandable', () => {
  it('should render on a server without crashing', () => {
    const ssrRender = () =>
      renderToString(
        <Expandable header="Expandable Container">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
          sit amet blandit leo lobortis eget.
        </Expandable>
      );
    expect(ssrRender).not.toThrow();
  });
});
