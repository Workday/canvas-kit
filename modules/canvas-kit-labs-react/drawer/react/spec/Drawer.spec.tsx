import * as React from 'react';
import {render, fireEvent} from '@testing-library/react';

import {Drawer, DrawerHeader, DrawerDirection} from '../index';

describe('Drawer', () => {
  test('should call a callback function', async () => {
    const cb = jest.fn();
    const {findByLabelText} = render(
      <DrawerHeader
        closeIconLabel={'Close'}
        headerText={'Header Title'}
        onClose={cb}
      ></DrawerHeader>
    );

    fireEvent.click(await findByLabelText('Close'));

    expect(cb).toHaveBeenCalledTimes(1);
  });

  test('should not render a close icon button', async () => {
    const {container} = render(<DrawerHeader headerText={'Header Title'} />);

    expect(container.querySelector('svg')).not.toBeInTheDocument();
  });

  test('Drawer should spread extra props', async () => {
    const {container} = render(<Drawer data-id={'1234'} openDirection={DrawerDirection.Right} />);

    expect(container.firstChild).toHaveAttribute('data-id', '1234');
  });
});
