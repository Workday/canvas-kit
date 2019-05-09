import * as React from 'react';
import Toggle from '../lib/Toggle';
import * as renderer from 'react-test-renderer';

describe('Toggle Snapshots', () => {
  test('renders as expected', () => {
    const component = renderer.create(
      <Toggle
        checked={false}
        onChange={() => {
          /* foo */
        }}
      />
    );
    expect(component).toMatchSnapshot();
  });
  test('renders toggle on', () => {
    const component = renderer.create(
      <Toggle
        checked={true}
        onChange={() => {
          /* foo */
        }}
      />
    );
    expect(component).toMatchSnapshot();
  });
  test('renders toggle disabled unchecked', () => {
    const component = renderer.create(
      <Toggle
        disabled={true}
        checked={false}
        onChange={() => {
          /* foo */
        }}
      />
    );
    expect(component).toMatchSnapshot();
  });
  test('renders toggle disabled checked', () => {
    const component = renderer.create(
      <Toggle
        disabled={true}
        checked={true}
        onChange={() => {
          /* foo */
        }}
      />
    );
    expect(component).toMatchSnapshot();
  });
  test('renders toggle with name and value', () => {
    const component = renderer.create(
      <Toggle
        value="user"
        disabled={false}
        checked={true}
        onChange={() => {
          /* foo */
        }}
      />
    );
    expect(component).toMatchSnapshot();
  });
  test('renders toggle with id', () => {
    const component = renderer.create(
      <Toggle value="user" id={'123'} disabled={false} checked={true} onChange={jest.fn()} />
    );
    expect(component).toMatchSnapshot();
  });
  test('renders toggle with custom prop', () => {
    const component = renderer.create(
      <Toggle
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
