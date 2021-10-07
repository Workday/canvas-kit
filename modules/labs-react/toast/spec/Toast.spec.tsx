/**
 * @jest-environment node
 */
import React from 'react';
import {render, screen} from '@testing-library/react';
import {checkIcon} from '@workday/canvas-system-icons-web';
import {colors} from '@workday/canvas-kit-react/tokens';

import {Toast} from '../';

describe('Toast', () => {
  const cb = jest.fn();
  afterEach(() => {
    cb.mockReset();
  });

  describe('when rendered', () => {
    it('should render a Toast with an icon', () => {
      const toastMessage = 'Your workbook was successfully processed.';
      render(
        <Toast>
          <Toast.Content>
            <Toast.Icon icon={checkIcon} iconColor={colors.greenApple400} />
            <Toast.Message>{toastMessage}</Toast.Message>
          </Toast.Content>
        </Toast>
      );
      expect(screen.getByTestId('myToast')).toContainHTML('svg');
    });
  });
});
