import * as React from 'react';
import {render, fireEvent} from '@testing-library/react';

import {DeprecatedDrawer, DeprecatedDrawerHeader, DeprecatedDrawerDirection} from '../index';

describe('DeprecatedDrawer', () => {
  test('should call a callback function', async () => {
    const cb = jest.fn();
    const {findByLabelText} = render(
      <DeprecatedDrawerHeader
        closeIconAriaLabel={'Close'}
        title={'Header Title'}
        onClose={cb}
      ></DeprecatedDrawerHeader>
    );

    fireEvent.click(await findByLabelText('Close'));

    expect(cb).toHaveBeenCalledTimes(1);
  });

  test('should not render a close icon button', async () => {
    const {container} = render(<DeprecatedDrawerHeader title={'Header Title'} />);

    expect(container.querySelector('svg')).not.toBeInTheDocument();
  });

  test('DeprecatedDrawer should spread extra props', async () => {
    const {container} = render(
      <DeprecatedDrawer data-id={'1234'} openDirection={DeprecatedDrawerDirection.Right} />
    );

    expect(container.firstChild).toHaveAttribute('data-id', '1234');
  });
});
