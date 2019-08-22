import * as React from 'react';
import {mount} from 'enzyme';
import IconButton from '../lib/IconButton';
import IconButtonToggleGroup from '../lib/IconButtonToggleGroup';
import {
  listViewIcon,
  worksheetsIcon,
  deviceTabletIcon,
  percentageIcon,
} from '@workday/canvas-system-icons-web';

describe('Icon Button Toggle', () => {
  const cb = jest.fn();
  afterEach(() => {
    cb.mockReset();
  });

  test('renders two buttons as expected', () => {
    const component = mount(
      <IconButtonToggleGroup>
        <IconButton icon={listViewIcon} value="list-view" aria-label="List View" onClick={cb} />
        <IconButton icon={worksheetsIcon} value="table-view" aria-label="Table View" />
      </IconButtonToggleGroup>
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
      <IconButtonToggleGroup onChange={cb}>
        <IconButton icon={listViewIcon} value="list-view" aria-label="List View" disabled={true} />
        <IconButton icon={worksheetsIcon} value="table-view" aria-label="Table View" />
        <span /> {/* ensure random elements don't break anything */}
      </IconButtonToggleGroup>
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

  test('renders correctly when RTL is true', () => {
    const component = mount(
      <IconButtonToggleGroup isRTL={true}>
        <IconButton icon={listViewIcon} value="list-view" aria-label="List View" />
        <IconButton icon={worksheetsIcon} value="table-view" aria-label="Table View" />
        <IconButton icon={deviceTabletIcon} value="device-view" aria-label="Device View" />
        <IconButton icon={percentageIcon} value="percent-view" aria-label="Percent View" />
      </IconButtonToggleGroup>
    );

    expect(component.find('button').length).toEqual(4);

    expect(
      component
        .find('button')
        .at(0)
        .prop('value')
    ).toEqual('percent-view');
  });

  test('behavior when no values are used', () => {
    const component = mount(
      <IconButtonToggleGroup onChange={cb}>
        <IconButton icon={listViewIcon} aria-label="List View" />
        <IconButton icon={worksheetsIcon} aria-label="Table View" />
      </IconButtonToggleGroup>
    );

    component
      .find('button')
      .at(1)
      .simulate('click');

    expect(cb.mock.calls.length).toBe(1);
    expect(cb.mock.calls[0][0]).toBe(1);
  });
});
