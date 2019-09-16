// import * as React from 'react';
// import {render} from '@testing-library/react';

// import Modal from '../lib/Modal';

// describe('Modal', () => {
//   test.only('should call a callback function', async () => {
//     const cb = jest.fn();
//     const {findByRole, findByLabelText} = render(
//       <Modal open={true} handleClose={cb} heading="Test">
//         Hello World
//       </Modal>
//     );

//     const button = await findByLabelText('Close');
//     button.click();
//     expect(cb).toHaveBeenCalledTimes(1);
//   });
// });

import * as React from 'react';
import Modal from '../lib/Modal';
import {mount} from 'enzyme';

describe('Modal', () => {
  const cb = jest.fn();
  afterEach(() => {
    cb.mockReset();
  });

  test('should call a callback function', () => {
    const component = mount(
      <Modal open={true} handleClose={cb} heading="Test">
        Hello World
      </Modal>
    );
    const modal = component.find('button');
    modal.simulate('click');
    expect(cb.mock.calls.length).toBe(1);
    component.unmount();
  });

  test('Modal should spread extra props', () => {
    const component = mount(<Modal heading="Test" open={true} data-propspread="test" />);
    const container = component.at(0).getDOMNode();
    expect(container.getAttribute('data-propspread')).toBe('test');
    component.unmount();
  });
});
