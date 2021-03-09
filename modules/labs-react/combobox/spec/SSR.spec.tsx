/**
 * @jest-environment node
 */
import React from 'react';
import {renderToString} from 'react-dom/server';
import Combobox from '../lib/Combobox';
import {MenuItem} from '../../../menu/react';
import {TextInput} from '../../../../text-input/react';

describe('InputProvider', () => {
  it('should render on a server without crashing', () => {
    const autocompleteItems = [<MenuItem>test</MenuItem>];
    const ssrRender = () =>
      renderToString(
        <Combobox autocompleteItems={autocompleteItems}>
          <TextInput />
        </Combobox>
      );
    expect(ssrRender).not.toThrow();
  });
});
