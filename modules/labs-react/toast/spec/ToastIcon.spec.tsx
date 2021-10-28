import {render, screen} from '@testing-library/react';
import {Toast} from '../lib/Toast';
import {checkIcon} from '@workday/canvas-system-icons-web';
import {colors} from '@workday/canvas-kit-react/tokens';
import React from 'react';

describe('Toast.Icon', () => {
  it('should render a Toast with an icon', () => {
    const toastMessage = 'Your workbook was successfully processed.';
    render(
      <Toast mode="noninteractive" data-testid={'myToast'}>
        <Toast.Content>
          <Toast.Icon icon={checkIcon} iconColor={colors.greenApple400} />
          <Toast.Message>{toastMessage}</Toast.Message>
        </Toast.Content>
      </Toast>
    );
    expect(screen.getByTestId('myToast')).toContainHTML('svg');
  });
});
