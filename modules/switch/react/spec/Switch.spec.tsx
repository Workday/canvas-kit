import * as React from 'react';
import {mount} from 'enzyme';
import Switch from '../lib/Switch';

describe('Switch', () => {
  const cb = jest.fn();
  afterEach(() => {
    cb.mockReset();
  });

  test('Switch should spread extra props', () => {
    const component = mount(<Switch data-propspread="test" onChange={cb} />);
    const input = component
      .find('input')
      // TODO: Standardize on prop spread location (see #150)
      .getDOMNode();
    expect(input.getAttribute('data-propspread')).toBe('test');
    component.unmount();
  });

  test('Switch creates a unique id for each instance', async () => {
    const fragment = mount(
      <form>
        <Switch checked={true} onChange={jest.fn()} disabled={false} />;
        <Switch onChange={jest.fn()} disabled={false} />;
      </form>
    );

    const id1 = fragment
      .find('input')
      .at(0)
      .getDOMNode()
      .getAttribute('id');

    const id2 = fragment
      .find('input')
      .at(1)
      .getDOMNode()
      .getAttribute('id');

    expect(id1).not.toEqual(id2);
    fragment.unmount();
  });
});
