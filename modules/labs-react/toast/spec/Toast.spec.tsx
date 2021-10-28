import React from 'react';
import {render, screen} from '@testing-library/react';

import {Toast} from '../';

describe('Toast', () => {
  it('should render children', () => {
    render(
      <Toast mode="noninteractive" data-testid={'myToast'}>
        Contents
      </Toast>
    );

    expect(screen.getByTestId('myToast')).toContainHTML('Contents');
  });
});
