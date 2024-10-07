/**
 * @jest-environment node
 */
import React from 'react';
import {renderToString} from 'react-dom/server';
import {Select} from '../';

const options = [
  {label: 'E-mail', value: 'email'},
  {label: 'Phone', value: 'phone'},
];

describe('Select', () => {
  it('should render on a server without crashing', () => {
    const ssrRender = () => renderToString(<Select options={options} />);
    expect(ssrRender).not.toThrow();
  });
});
