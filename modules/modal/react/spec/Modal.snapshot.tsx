import * as React from 'react';
import Modal from '../lib/Modal';
import * as renderer from 'react-test-renderer';

describe('Modal Snapshots', () => {
  test('renders as expected', () => {
    const component = renderer.create(<Modal open={true} padding={Modal.Padding.s} />);
    expect(component).toMatchSnapshot();
  });
  test('renders Modal with close icon', () => {
    const component = renderer.create(
      <Modal open={true} handleClose={jest.fn()} padding={Modal.Padding.s} />
    );
    expect(component).toMatchSnapshot();
  });
  test('renders Modal with different padding', () => {
    const component = renderer.create(
      <Modal open={true} handleClose={jest.fn()} padding={Modal.Padding.l} />
    );
    expect(component).toMatchSnapshot();
  });
  test('renders Modal with children elements', () => {
    const component = renderer.create(
      <Modal open={true} handleClose={jest.fn()} padding={Modal.Padding.zero}>
        <span>hello world</span>
      </Modal>
    );
    expect(component).toMatchSnapshot();
  });
  test('renders Modal without close icon', () => {
    const component = renderer.create(
      <Modal open={true} padding={Modal.Padding.zero}>
        <span>hello world</span>
      </Modal>
    );
    expect(component).toMatchSnapshot();
  });
  test('renders Modal with transformOrigin', () => {
    const component = renderer.create(
      <Modal
        open={true}
        transformOrigin={{vertical: 'top', horizontal: 'center'}}
        padding={Modal.Padding.zero}
      >
        <span>hello world</span>
      </Modal>
    );
    expect(component).toMatchSnapshot();
  });

  test('renders Modal with a different width', () => {
    const component = renderer.create(
      <Modal open={true} width={Modal.Width.m}>
        <span>hello world</span>
      </Modal>
    );
    expect(component).toMatchSnapshot();
  });
});
