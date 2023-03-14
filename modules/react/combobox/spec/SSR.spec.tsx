
/**
 * @jest-environment node
 */
import React from 'react';
import {renderToString} from 'react-dom/server';
import {Combobox} from '../';

describe('Combobox', () => {
  it('should render on a server without crashing', () => {
    const ssrRender = () => renderToString(
      <Combobox>
        <Combobox.Target>Target</Combobox.Target>
        <Combobox.Content>Content</Combobox.Content>
      </Combobox>
    );
    expect(ssrRender).not.toThrow();
  });
});

