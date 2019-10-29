import * as React from 'react';
import {render, fireEvent} from '@testing-library/react';

import {Panel, PanelHeader, PanelDirection} from '../index';

describe('Panel', () => {
  test('should call a callback function', async () => {
    const cb = jest.fn();
    const {findByLabelText} = render(
      <Panel
        header={<PanelHeader iconLabel={'Close'} title={'Header Title'} onClose={cb}></PanelHeader>}
      >
        Hello World
      </Panel>
    );

    fireEvent.click(await findByLabelText('Close'));

    expect(cb).toHaveBeenCalledTimes(1);
  });

  test('Modal should spread extra props', async () => {
    const {container} = render(<Panel data-id={'1234'} openDirection={PanelDirection.Right} />);

    expect(container.firstChild).toHaveAttribute('data-id', '1234');
  });
});
