import {renderToString} from 'react-dom/server';

import {checkIcon} from '@workday/canvas-system-icons-web';
import {system} from '@workday/canvas-tokens-web';

import {Toast} from '../';

describe('Toast', () => {
  it('should render on a server without crashing', () => {
    const SimpleToast = () => (
      <Toast mode="dialog">
        <Toast.Body>
          <Toast.Icon icon={checkIcon} cs={{color: system.color.fg.success.default}} />
          <Toast.Message>
            Your workbook was successfully processed.
            <Toast.Link href="#href">View more details</Toast.Link>
          </Toast.Message>
        </Toast.Body>
        <Toast.CloseIcon aria-label="Close" />
      </Toast>
    );

    const ssrRender = () => renderToString(<SimpleToast />);

    expect(ssrRender).not.toThrow();
  });
});
