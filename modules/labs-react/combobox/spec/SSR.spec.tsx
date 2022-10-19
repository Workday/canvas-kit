/**
 * @jest-environment node
 */
import React from 'react';
import {renderToString} from 'react-dom/server';
import {Combobox} from '../lib/Combobox';
import {DeprecatedMenuItem} from '@workday/canvas-kit-preview-react/menu';
import {TextInput} from '@workday/canvas-kit-react/text-input';

describe('InputProvider', () => {
  it('should render on a server without crashing', () => {
    const autocompleteItems = [<DeprecatedMenuItem>test</DeprecatedMenuItem>];
    const ssrRender = () =>
      renderToString(
        <Combobox autocompleteItems={autocompleteItems}>
          <TextInput />
        </Combobox>
      );
    expect(ssrRender).not.toThrow();
  });
});
