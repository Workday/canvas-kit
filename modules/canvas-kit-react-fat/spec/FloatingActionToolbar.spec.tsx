import * as React from 'react';
import {mount} from 'enzyme';
import FloatingActionToolbar from '../index';

describe('Floating Action Toolbar', () => {
  const cb = jest.fn();
  afterEach(() => {
    cb.mockReset();
  });

  test('render a FAT with id', () => {
    const component = mount(<FloatingActionToolbar id="myFAT">Button Label</FloatingActionToolbar>);
    expect(component.find(FloatingActionToolbar).props().id).toBe('myFAT');
    component.unmount();
  });
});
