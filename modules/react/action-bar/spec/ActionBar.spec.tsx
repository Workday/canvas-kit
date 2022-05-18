import * as React from 'react';
import ActionBar from '../index';
import {render} from '@testing-library/react';

describe('ActionBar', () => {
  it('should spread extra props to containing element', () => {
    const {container} = render(<ActionBar data-propspread="test" />);

    // ActionBar doesn't have a semantic element, so we'll use `container`
    expect(container.firstChild).toHaveAttribute('data-propspread', 'test');
  });
});
