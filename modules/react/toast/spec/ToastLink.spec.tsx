import React from 'react';
import {render, screen} from '@testing-library/react';
import {Toast} from '../lib/Toast';
import {useToastModel} from '../lib/hooks/useToastModel';

describe('Toast.Link', () => {
  verifyComponent(Toast.CloseIcon, {modelFn: useToastModel});

  it('should have a role of "link"', () => {
    render(<Toast.Link href="#href">Link Link</Toast.Link>);

    expect(screen.getByRole('link')).toBeInTheDocument();
  });
});
