import * as React from 'react';
import {mount} from 'enzyme';
import Expandable from '../lib/Expandable';

describe('Expandable', () => {
  test('Expandable should spread extra props', () => {
    const component = mount(
      <Expandable header="Hello World" data-propspread="test">
        Foo Bar
      </Expandable>
    );
    const container = component.at(0).getDOMNode();
    expect(container.getAttribute('data-propspread')).toBe('test');
    component.unmount();
  });
});
