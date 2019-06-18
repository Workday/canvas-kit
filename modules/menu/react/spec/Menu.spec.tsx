import * as React from 'react';
import Menu, {MenuItem} from '../index';
import {mount} from 'enzyme';

describe('Menu', () => {
  const cb = jest.fn();
  afterEach(() => {
    cb.mockReset();
  });

  test('should call a callback function when item is clicked', () => {
    const component = mount(
      <Menu>
        <MenuItem onClick={cb} />
      </Menu>
    );
    const item = component.find('li');
    item.simulate('click');
    expect(cb.mock.calls.length).toBe(1);
    component.unmount();
  });

  test('should call on select function when item is clicked', () => {
    const component = mount(
      <Menu onSelect={cb}>
        <MenuItem />
      </Menu>
    );
    const item = component.find('li');
    item.simulate('click');
    expect(cb.mock.calls.length).toBe(1);
    component.unmount();
  });

  test('should call on close function when item is clicked', () => {
    const component = mount(
      <Menu onClose={cb}>
        <MenuItem />
      </Menu>
    );
    const item = component.find('li');
    item.simulate('click');
    expect(cb.mock.calls.length).toBe(1);
    component.unmount();
  });

  test('should not call a callback function when disabled', () => {
    const component = mount(
      <Menu>
        <MenuItem onClick={cb} isDisabled={true} />
      </Menu>
    );
    const item = component.find('li');
    item.simulate('click');
    expect(cb.mock.calls.length).toBe(0);
    component.unmount();
  });

  test('should not call a callback function when none is passed in', () => {
    const component = mount(<MenuItem />);
    const item = component.find('li');
    item.simulate('click');
    expect(cb.mock.calls.length).toBe(0);
    component.unmount();
  });

  test('should not call on select function when disabled', () => {
    const component = mount(
      <Menu onSelect={cb}>
        <MenuItem isDisabled={true} />
      </Menu>
    );
    const item = component.find('li');
    item.simulate('click');
    expect(cb.mock.calls.length).toBe(0);
    component.unmount();
  });

  test('should not call on close function when disabled', () => {
    const component = mount(
      <Menu onClose={cb}>
        <MenuItem isDisabled={true} />
      </Menu>
    );
    const item = component.find('li');
    item.simulate('click');
    expect(cb.mock.calls.length).toBe(0);
    component.unmount();
  });

  test('menu item should render children correctly', () => {
    const labelText: JSX.Element = <em>Menu Label</em>;
    const component = mount(<MenuItem>{labelText}</MenuItem>);
    expect(component.find('span').getDOMNode().innerHTML).toEqual(
      mount(labelText).getDOMNode().outerHTML
    );
    component.unmount();
  });
});

describe('Menu Accessibility', () => {
  // https://www.w3.org/TR/wai-aria-practices-1.1/examples/menu-button/menu-button-actions-active-descendant.html
  const cb = jest.fn();
  afterEach(() => {
    cb.mockReset();
  });

  test('menu should be using <ul> tag', () => {
    const id: string = 'myId';
    const component = mount(<Menu id={id} />);
    const menuElement = component.getDOMNode().querySelector(`#${id}`);
    expect(menuElement).not.toBeNull();
    if (menuElement) {
      expect(menuElement.tagName.toLowerCase()).toEqual('ul');
    }
    component.unmount();
  });

  test('menu should be using <li> tag', () => {
    const component = mount(<MenuItem id="myId" />);
    expect(component.getDOMNode().tagName.toLowerCase()).toEqual('li');
    component.unmount();
  });

  test('menu should have tabIndex set', () => {
    const component = mount(<Menu />);
    expect(
      component
        .find('ul')
        .getDOMNode()
        .getAttribute('tabIndex')
    ).toEqual('0');
    component.unmount();
  });

  test('menu item should have tabIndex set', () => {
    const component = mount(<MenuItem />);
    expect(
      component
        .find('li')
        .getDOMNode()
        .getAttribute('tabIndex')
    ).toEqual('-1');
    component.unmount();
  });

  test('enabled menu item should NOT have aria-disabled attribute set', () => {
    const component = mount(<MenuItem isDisabled={false} />);
    expect(
      component
        .find('li')
        .getDOMNode()
        .getAttribute('aria-disabled')
    ).toEqual('false');
    component.unmount();
  });

  test('disabled menu item should have aria-disabled attribute set', () => {
    const component = mount(<MenuItem isDisabled={true} />);
    expect(
      component
        .find('li')
        .getDOMNode()
        .getAttribute('aria-disabled')
    ).toEqual('true');
    component.unmount();
  });

  test('labeledBy menu should have aria-labelledby set', () => {
    const label: string = 'myLabel';
    const component = mount(<Menu labeledBy={label} />);
    expect(
      component
        .find('ul')
        .getDOMNode()
        .getAttribute('aria-labelledby')
    ).toEqual(label);
    component.unmount();
  });

  test('menu should have aria-activedescendant set', () => {
    const id: string = 'myId';
    const component = mount(
      <Menu id={id}>
        <MenuItem />
      </Menu>
    );
    expect(
      component
        .find('ul')
        .getDOMNode()
        .getAttribute('aria-activedescendant')
    ).toEqual(`${id}-0`);
    component.unmount();
  });

  test('menu item should inherit id from menu', () => {
    const id: string = 'myId';
    const component = mount(
      <Menu id={id}>
        <MenuItem />
      </Menu>
    );
    expect(
      component
        .find('li')
        .getDOMNode()
        .getAttribute('id')
    ).toEqual(`${id}-0`);
    component.unmount();
  });
});

describe('Menu Keyboard Shortcuts', () => {
  const cb = jest.fn();
  afterEach(() => {
    cb.mockReset();
  });

  test("should select an item by press it's first letter", () => {
    const id: string = 'myId';
    const component = mount(
      <Menu id={id}>
        <MenuItem>Alpha</MenuItem>
        <MenuItem>
          <em>
            Bravo Item (<b>with markup</b>)
          </em>
        </MenuItem>
        <MenuItem>
          <em>
            <b>Char</b>
            <i>lie</i>
          </em>
        </MenuItem>
        <MenuItem />
      </Menu>
    );
    const item = component.find('ul');
    const b = {keyCode: 66, key: 'b'};
    item.simulate('keydown', b);
    expect(item.getDOMNode().getAttribute('aria-activedescendant')).toEqual(`${id}-1`);
    component.unmount();
  });

  test("should select an item by press it's first letter if it is added later", () => {
    const id: string = 'myId';
    const component = mount(<Menu id={id} />);
    component.setProps({
      children: [<MenuItem key={1}>Alpha</MenuItem>, <MenuItem key={2}>Bravo</MenuItem>],
    });
    const item = component.find('ul');
    const b = {keyCode: 66, key: 'b'};
    item.simulate('keydown', b);
    expect(item.getDOMNode().getAttribute('aria-activedescendant')).toEqual(`${id}-1`);
    component.unmount();
  });

  test('should NOT select an item when no letter matches', () => {
    const id: string = 'myId';
    const component = mount(
      <Menu isOpen={false} initialSelectedItem={1} id={id}>
        <MenuItem>Alpha</MenuItem>
        <MenuItem>Zeta</MenuItem>
      </Menu>
    );
    const item = component.find('ul');
    const b = {keyCode: 66, key: 'b'};
    item.simulate('keydown', b);
    expect(item.getDOMNode().getAttribute('aria-activedescendant')).toEqual(`${id}-1`);
    component.unmount();
  });

  test('should loop around selected items using down arrow', () => {
    const id: string = 'myId';
    const component = mount(
      <Menu isOpen={false} id={id}>
        <MenuItem>Alpha</MenuItem>
        <MenuItem>Bravo</MenuItem>
      </Menu>
    );
    const item = component.find('ul');
    const down = {keyCode: 40, key: 'ArrowDown'};
    item.simulate('keydown', down);
    expect(item.getDOMNode().getAttribute('aria-activedescendant')).toEqual(`${id}-1`);
    item.simulate('keydown', down);
    expect(item.getDOMNode().getAttribute('aria-activedescendant')).toEqual(`${id}-0`);
    component.unmount();
  });

  test('should loop around selected items using up arrow', () => {
    const id: string = 'myId';
    const component = mount(
      <Menu id={id}>
        <MenuItem>Alpha</MenuItem>
        <MenuItem>Bravo</MenuItem>
      </Menu>
    );
    const item = component.find('ul');
    const up = {keyCode: 38, key: 'ArrowUp'};
    item.simulate('keydown', up);
    expect(item.getDOMNode().getAttribute('aria-activedescendant')).toEqual(`${id}-1`);
    item.simulate('keydown', up);
    expect(item.getDOMNode().getAttribute('aria-activedescendant')).toEqual(`${id}-0`);
    component.unmount();
  });

  test('home key and end keys should move you to end and beginning of list', () => {
    const id: string = 'myId';
    const component = mount(
      <Menu id={id}>
        <MenuItem>Alpha</MenuItem>
        <MenuItem>Bravo</MenuItem>
      </Menu>
    );
    const item = component.find('ul');
    const home = {keyCode: 36, key: 'Home'};
    const end = {keyCode: 35, key: 'End'};
    item.simulate('keydown', end);
    expect(item.getDOMNode().getAttribute('aria-activedescendant')).toEqual(`${id}-1`);
    item.simulate('keydown', home);
    expect(item.getDOMNode().getAttribute('aria-activedescendant')).toEqual(`${id}-0`);
    component.unmount();
  });

  test('unbound keys should NOT change selected item', () => {
    const id: string = 'myId';
    const component = mount(
      <Menu id={id} initialSelectedItem={1}>
        <MenuItem>Alpha</MenuItem>
        <MenuItem>Bravo</MenuItem>
      </Menu>
    );
    const item = component.find('ul');
    const meta = {keyCode: 91, key: 'Meta', metaKey: true};
    const left = {keyCode: 37, key: 'ArrowLeft'};
    const right = {keyCode: 39, key: 'ArrowRight'};
    item.simulate('keydown', meta);
    item.simulate('keydown', left);
    item.simulate('keydown', right);
    expect(item.getDOMNode().getAttribute('aria-activedescendant')).toEqual(`${id}-1`);
    component.unmount();
  });

  test('should call on close function escape is pressed', () => {
    const component = mount(
      <Menu onClose={cb}>
        <MenuItem>Alpha</MenuItem>
      </Menu>
    );
    const item = component.find('ul');
    const escape = {keyCode: 27, key: 'Escape'};
    item.simulate('keydown', escape);
    expect(cb.mock.calls.length).toBe(1);
    component.unmount();
  });

  test('should NOT call on close function escape is pressed and no function is set', () => {
    const component = mount(
      <Menu>
        <MenuItem>Alpha</MenuItem>
      </Menu>
    );
    const item = component.find('ul');
    const escape = {keyCode: 27, key: 'Escape'};
    item.simulate('keydown', escape);
    expect(cb.mock.calls.length).toBe(0);
    component.unmount();
  });

  test('should call callback function when enter or space is pressed', () => {
    const component = mount(
      <Menu onClose={cb}>
        <MenuItem>Alpha</MenuItem>
      </Menu>
    );
    const item = component.find('ul');
    const enter = {keyCode: 13, key: 'Enter'};
    const space = {keyCode: 32, key: ' '};
    item.simulate('keydown', enter);
    item.simulate('keydown', space);
    expect(cb.mock.calls.length).toBe(2);
    component.unmount();
  });
});

describe('Menu Initial Selected Item', () => {
  test('positive numbers should select from start', () => {
    const id: string = 'myId';
    const component = mount(
      <Menu initialSelectedItem={1} id={id}>
        <MenuItem />
        <MenuItem />
      </Menu>
    );
    expect(
      component
        .find('ul')
        .getDOMNode()
        .getAttribute('aria-activedescendant')
    ).toEqual(`${id}-1`);
    component.unmount();
  });

  test('numbers greater than children should select last child', () => {
    const id: string = 'myId';
    const component = mount(
      <Menu initialSelectedItem={100} id={id}>
        <MenuItem />
        <MenuItem />
      </Menu>
    );
    expect(
      component
        .find('ul')
        .getDOMNode()
        .getAttribute('aria-activedescendant')
    ).toEqual(`${id}-1`);
    component.unmount();
  });

  test('negative numbers should select from end', () => {
    const id: string = 'myId';
    const component = mount(
      <Menu initialSelectedItem={-1} id={id}>
        <MenuItem />
        <MenuItem />
      </Menu>
    );
    expect(
      component
        .find('ul')
        .getDOMNode()
        .getAttribute('aria-activedescendant')
    ).toEqual(`${id}-1`);
    component.unmount();
  });

  test('|negative numbers| greater than children should select first child', () => {
    const id: string = 'myId';
    const component = mount(
      <Menu initialSelectedItem={-100} id={id}>
        <MenuItem />
        <MenuItem />
      </Menu>
    );
    expect(
      component
        .find('ul')
        .getDOMNode()
        .getAttribute('aria-activedescendant')
    ).toEqual(`${id}-0`);
    component.unmount();
  });

  test('selected item should set correctly when opened', () => {
    const id: string = 'myId';
    const component = mount(
      <Menu isOpen={false} initialSelectedItem={0} id={id}>
        <MenuItem />
        <MenuItem />
      </Menu>
    );
    component.setProps({isOpen: true, initialSelectedItem: 1});
    expect(
      component
        .find('ul')
        .getDOMNode()
        .getAttribute('aria-activedescendant')
    ).toEqual(`${id}-1`);
    component.unmount();
  });
});

describe('Getting Selected Item', () => {
  test('you should not be able to get out of range indexes', () => {
    const id: string = 'myId';
    const component = mount(
      <Menu id={id}>
        <MenuItem />
        <MenuItem />
      </Menu>
    );
    const under = (component.instance() as Menu).getNormalizedItemIndex(-1);
    expect(under).toEqual(0);
    const over = (component.instance() as Menu).getNormalizedItemIndex(100);
    expect(over).toEqual(1);
    component.unmount();
  });
});
