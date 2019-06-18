import * as React from 'react';
import Switch from '../lib/Switch';
import * as renderer from 'react-test-renderer';

describe('Switch Snapshots', () => {
  test('renders as expected', () => {
    const component = renderer.create(<Switch checked={false} onChange={jest.fn()} />);
    expect(component).toMatchSnapshot();
  });
  test('renders switch on', () => {
    const component = renderer.create(<Switch checked={true} onChange={jest.fn()} />);
    expect(component).toMatchSnapshot();
  });
  test('renders switch disabled unchecked', () => {
    const component = renderer.create(
      <Switch disabled={true} checked={false} onChange={jest.fn()} />
    );
    expect(component).toMatchSnapshot();
  });
  test('renders switch disabled checked', () => {
    const component = renderer.create(
      <Switch disabled={true} checked={true} onChange={jest.fn()} />
    );
    expect(component).toMatchSnapshot();
  });
  test('renders switch with name and value', () => {
    const component = renderer.create(
      <Switch value="user" disabled={false} checked={true} onChange={jest.fn()} />
    );
    expect(component).toMatchSnapshot();
  });
  test('renders switch with id', () => {
    const component = renderer.create(
      <Switch value="user" id={'123'} disabled={false} checked={true} onChange={jest.fn()} />
    );
    expect(component).toMatchSnapshot();
  });
  test('renders a switch with custom prop', () => {
    const component = renderer.create(
      <Switch
        title="hello world"
        value="user"
        id={'123'}
        disabled={false}
        checked={true}
        onChange={jest.fn()}
      />
    );
    expect(component).toMatchSnapshot();
  });
});
