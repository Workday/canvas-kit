import React from 'react';
import {render, screen} from '@testing-library/react';

import {Toast} from '../';

describe('Toast.Content', () => {
  it('should render children', () => {
    render(
      <Toast mode="noninteractive" data-testid={'myToastContent'}>
        <Toast.Content>Contents</Toast.Content>
      </Toast>
    );

    expect(screen.getByTestId('myToastContent')).toContainHTML('Contents');
  });
});
