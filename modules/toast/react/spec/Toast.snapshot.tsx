import * as React from 'react';
import {mount} from 'enzyme';
import Toast from '../lib/Toast';
import * as renderer from 'react-test-renderer';
import {checkIcon} from '@workday/canvas-system-icons-web';

describe('Toast Snapshots', () => {
  test('renders as expected', () => {
    const component = renderer.create(<Toast>Your data has been updated.</Toast>);
    expect(component).toMatchSnapshot();
  });
  test('renders with a close button', () => {
    const component = renderer.create(
      <Toast onClose={jest.fn()}>Your data has been updated.</Toast>
    );
    expect(component).toMatchSnapshot();
  });
  test('renders with an icon', () => {
    const component = renderer.create(
      <Toast icon={checkIcon} onClose={jest.fn()}>
        Success
      </Toast>
    );
    expect(component).toMatchSnapshot();
  });
  test('renders with an action link', () => {
    const component = renderer.create(
      <Toast actionText={'View More'} onActionClick={jest.fn()} onClose={jest.fn()}>
        Process failed.
      </Toast>
    );
    expect(component).toMatchSnapshot();
  });

  test('Toast should spread extra props', () => {
    const component = mount(<Toast data-propspread="test">Message</Toast>);
    const container = component.at(0).getDOMNode();
    expect(container.getAttribute('data-propspread')).toBe('test');
    component.unmount();
  });
});
