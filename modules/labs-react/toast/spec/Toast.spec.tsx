import React from 'react';
import {renderToString} from 'react-dom/server';
import {checkIcon} from '@workday/canvas-system-icons-web';
import {colors} from '@workday/canvas-kit-react';
import {Toast} from '../';

describe('Toast', () => {
  it('should render on a server without crashing', () => {
    const SimpleToast = () => (
      <Toast mode="interactive">
        <Toast.Body>
          <Toast.Icon icon={checkIcon} color={colors.greenApple400} />
          <Toast.Message>
            Your workbook was successfully processed.
            <Toast.Action>View more details</Toast.Action>
          </Toast.Message>
        </Toast.Body>
        <Toast.Close aria-label="Close" />
      </Toast>
    );

    const ssrRender = () => renderToString(<SimpleToast />);

    expect(ssrRender).not.toThrow();
  });
});
