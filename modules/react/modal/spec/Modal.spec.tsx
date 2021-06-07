import * as React from 'react';
import {renderToString} from 'react-dom/server';

import {Basic} from '../stories/examples/Basic';

import {render, fireEvent, screen} from '@testing-library/react';

import {Modal} from '../lib/Modal';

describe('Modal', () => {
  it('should render on a server without crashing', () => {
    const ssrRender = () => renderToString(<Basic />);

    expect(ssrRender).not.toThrow();
  });
});
