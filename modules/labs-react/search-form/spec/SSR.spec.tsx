/**
 * @jest-environment node
 */
import React from 'react';
import {renderToString} from 'react-dom/server';

import {SearchForm} from '../lib/SearchForm';

describe('SearchForm', () => {
  it('should render on a server without crashing', () => {
    const handleSubmit = () => {};
    const ssrRender = () => renderToString(<SearchForm onSubmit={handleSubmit} />);
    expect(ssrRender).not.toThrow();
  });
});
