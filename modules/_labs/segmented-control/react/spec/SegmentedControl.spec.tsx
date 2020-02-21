import * as React from 'react';
import {mount} from 'enzyme';
import {IconButton} from '@workday/canvas-kit-labs-react-button';
import SegmentedControl from '../lib/SegmentedControl';
import {listViewIcon, worksheetsIcon} from '@workday/canvas-system-icons-web';

describe('Segmented Control', () => {
  const cb = jest.fn();
  afterEach(() => {
    cb.mockReset();
  });

  test('renders two buttons as expected', () => {
    const component = mount(
      <SegmentedControl>
        <IconButton icon={listViewIcon} value="list-view" aria-label="List View" onClick={cb} />
        <IconButton icon={worksheetsIcon} value="table-view" aria-label="Table View" />
      </SegmentedControl>
    );
    expect(component.find('button').length).toEqual(2);

    component
      .find('button')
      .at(0)
      .simulate('click');

    expect(cb.mock.calls.length).toBe(1);
  });

  test('renders two buttons with disabled button', () => {
    const component = mount(
      <SegmentedControl onChange={cb}>
        <IconButton icon={listViewIcon} value="list-view" aria-label="List View" disabled={true} />
        <IconButton icon={worksheetsIcon} value="table-view" aria-label="Table View" />
        <span /> {/* ensure random elements don't break anything */}
      </SegmentedControl>
    );

    // clicking on a disabled button shouldn't trigger callback
    component
      .find('button')
      .at(0)
      .simulate('click');

    expect(cb.mock.calls.length).toBe(0);

    // clicking on an active button should trigger callback
    component
      .find('button')
      .at(1)
      .simulate('click');

    expect(cb.mock.calls.length).toBe(1);
    expect(cb.mock.calls[0][0]).toBe('table-view');
  });

  test('behavior when no values are used', () => {
    const component = mount(
      <SegmentedControl onChange={cb}>
        <IconButton icon={listViewIcon} aria-label="List View" />
        <IconButton icon={worksheetsIcon} aria-label="Table View" />
      </SegmentedControl>
    );

    component
      .find('button')
      .at(1)
      .simulate('click');

    expect(cb.mock.calls.length).toBe(1);
    expect(cb.mock.calls[0][0]).toBe(1);
  });
});
