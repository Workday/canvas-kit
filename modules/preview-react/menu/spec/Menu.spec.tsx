import * as React from 'react';
import Menu, {MenuItem} from '../index';
import {screen, render, fireEvent} from '@testing-library/react';

describe('Menu', () => {
  const cb = jest.fn();

  it('should call the "onClick" event when an item is clicked', () => {
    render(
      <Menu>
        <MenuItem onClick={cb}>Option</MenuItem>
      </Menu>
    );

    fireEvent.click(screen.getByRole('menuitem', {name: 'Option'}));

    expect(cb).toBeCalledTimes(1);
  });

  it('should call the "onSelect" event when an item is clicked', () => {
    render(
      <Menu onSelect={cb}>
        <MenuItem>Option</MenuItem>
      </Menu>
    );

    fireEvent.click(screen.getByRole('menuitem', {name: 'Option'}));

    expect(cb).toBeCalledTimes(1);
  });

  it('should call the "onClose" event when an item is clicked', () => {
    render(
      <Menu onClose={cb}>
        <MenuItem>Option</MenuItem>
      </Menu>
    );

    fireEvent.click(screen.getByRole('menuitem', {name: 'Option'}));

    expect(cb).toBeCalledTimes(1);
  });

  it('should call the "onClose" event when an item is clicked and "shouldClose" is true', () => {
    render(
      <Menu onClose={cb}>
        <MenuItem shouldClose={true}>Option</MenuItem>
      </Menu>
    );

    fireEvent.click(screen.getByRole('menuitem', {name: 'Option'}));

    expect(cb).toBeCalledTimes(1);
  });

  it('should not call the "onClose" event when an item is clicked and "shouldClose" is false', () => {
    render(
      <Menu onClose={cb}>
        <MenuItem shouldClose={false}>Option</MenuItem>
      </Menu>
    );

    fireEvent.click(screen.getByRole('menuitem', {name: 'Option'}));

    expect(cb).not.toHaveBeenCalled();
  });

  it('should not call the "onClose" event when an item is clicked and disabled', () => {
    render(
      <Menu onClose={cb}>
        <MenuItem isDisabled={true}>Option</MenuItem>
      </Menu>
    );

    fireEvent.click(screen.getByRole('menuitem', {name: 'Option'}));

    expect(cb).not.toHaveBeenCalled();
  });

  it('should not call the "onSelect" event when an item is clicked and disabled', () => {
    render(
      <Menu onSelect={cb}>
        <MenuItem isDisabled={true}>Option</MenuItem>
      </Menu>
    );

    fireEvent.click(screen.getByRole('menuitem', {name: 'Option'}));

    expect(cb).not.toHaveBeenCalled();
  });

  it('should render a menu item with children', () => {
    render(
      <MenuItem>
        <em>Option</em>
      </MenuItem>
    );

    expect(screen.getByRole('menuitem', {name: 'Option'})).toContainHTML('<em>Option</em>');
  });

  it('should forward extra Menu props to the element', () => {
    render(<Menu data-propspread="test" />);

    expect(screen.getByRole('menu')).toHaveAttribute('data-propspread', 'test');
  });

  it('should forward extra MenuItem props to the element', () => {
    render(<MenuItem data-propspread="test">Option</MenuItem>);

    expect(screen.getByRole('menuitem', {name: 'Option'})).toHaveAttribute(
      'data-propspread',
      'test'
    );
  });
});

describe('Menu Accessibility', () => {
  // https://www.w3.org/TR/wai-aria-practices-1.1/examples/menu-button/menu-button-actions-active-descendant.html

  it('should render Menu as [role="menu"]', () => {
    render(<Menu />);

    expect(screen.getByRole('menu')).toBeInTheDocument();
  });

  it('should render the MenuItem as [role="menuitem]', () => {
    render(<MenuItem />);

    expect(screen.getByRole('menuitem')).toBeInTheDocument();
  });

  it('should add [tabIndex=0] to the Menu element', () => {
    render(<Menu />);

    expect(screen.getByRole('menu')).toHaveAttribute('tabIndex', '0');
  });

  it('should add [tabIndex=-1] to the MenuItem element', () => {
    render(<MenuItem />);

    expect(screen.getByRole('menuitem')).toHaveAttribute('tabIndex', '-1');
  });

  it('should not add [aria-disabled] if "isDisabled" is false', () => {
    render(<MenuItem isDisabled={false} />);

    expect(screen.getByRole('menuitem')).not.toHaveAttribute('aria-disabled');
  });

  it('should add [aria-disabled=true] if "isDisabled" is true', () => {
    render(<MenuItem isDisabled={true} />);

    expect(screen.getByRole('menuitem')).toHaveAttribute('aria-disabled', 'true');
  });

  it('should allow overriding the role of the MenuItem', () => {
    render(<MenuItem data-testid="Option" role="option" />);

    expect(screen.getByTestId('Option')).toHaveAttribute('role', 'option');
  });

  it('should have aria-activedescendant pointing to the first item', () => {
    render(
      <Menu>
        <MenuItem>Option</MenuItem>
      </Menu>
    );

    const id = screen.getByRole('menuitem').getAttribute('id');

    expect(screen.getByRole('menu')).toHaveAttribute('aria-activedescendant', id);
  });
});

describe('Menu Keyboard Shortcuts', () => {
  const cb = jest.fn();
  afterEach(() => {
    cb.mockReset();
  });

  it('should select an item by pressing its first letter', () => {
    render(
      <Menu>
        <MenuItem>Alpha</MenuItem>
        <MenuItem isHeader>Bravo Header</MenuItem>
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

    fireEvent.keyDown(screen.getByRole('menu'), {key: 'b'});

    const secondItem = screen.getByRole('menuitem', {name: 'Bravo Item ( with markup )'});

    expect(screen.getByRole('menu')).toHaveAttribute(
      'aria-activedescendant',
      secondItem.getAttribute('id')
    );
  });

  it('should loop around selected items using the down arrow', () => {
    render(
      <Menu>
        <MenuItem isHeader>Beginning</MenuItem>
        <MenuItem>Alpha</MenuItem>
        <MenuItem>Bravo</MenuItem>
        <MenuItem isHeader>End</MenuItem>
      </Menu>
    );

    const firstId = screen.getByRole('menuitem', {name: 'Alpha'}).getAttribute('id');
    const secondId = screen.getByRole('menuitem', {name: 'Bravo'}).getAttribute('id');

    fireEvent.keyDown(screen.getByRole('menu'), {key: 'ArrowDown'});
    expect(screen.getByRole('menu')).toHaveAttribute('aria-activedescendant', secondId);
    fireEvent.keyDown(screen.getByRole('menu'), {key: 'ArrowDown'});
    expect(screen.getByRole('menu')).toHaveAttribute('aria-activedescendant', firstId);
  });

  it('should loop around selected items using the up arrow', () => {
    render(
      <Menu>
        <MenuItem isHeader>Beginning</MenuItem>
        <MenuItem>Alpha</MenuItem>
        <MenuItem>Bravo</MenuItem>
        <MenuItem isHeader>End</MenuItem>
      </Menu>
    );

    const firstId = screen.getByRole('menuitem', {name: 'Alpha'}).getAttribute('id');
    const secondId = screen.getByRole('menuitem', {name: 'Bravo'}).getAttribute('id');

    fireEvent.keyDown(screen.getByRole('menu'), {key: 'ArrowUp'});
    expect(screen.getByRole('menu')).toHaveAttribute('aria-activedescendant', secondId);
    fireEvent.keyDown(screen.getByRole('menu'), {key: 'ArrowUp'});
    expect(screen.getByRole('menu')).toHaveAttribute('aria-activedescendant', firstId);
  });

  it('should select the first items when Home key is pressed', () => {
    render(
      <Menu initialSelectedItem={1}>
        <MenuItem isHeader>Beginning</MenuItem>
        <MenuItem>Alpha</MenuItem>
        <MenuItem>Bravo</MenuItem>
        <MenuItem isHeader>End</MenuItem>
      </Menu>
    );

    const firstId = screen.getByRole('menuitem', {name: 'Alpha'}).getAttribute('id');

    fireEvent.keyDown(screen.getByRole('menu'), {key: 'Home'});
    expect(screen.getByRole('menu')).toHaveAttribute('aria-activedescendant', firstId);
  });

  it('should select the last items when End key is pressed', () => {
    render(
      <Menu initialSelectedItem={0}>
        <MenuItem isHeader>Beginning</MenuItem>
        <MenuItem>Alpha</MenuItem>
        <MenuItem>Bravo</MenuItem>
        <MenuItem isHeader>End</MenuItem>
      </Menu>
    );

    const secondId = screen.getByRole('menuitem', {name: 'Bravo'}).getAttribute('id');

    fireEvent.keyDown(screen.getByRole('menu'), {key: 'End'});
    expect(screen.getByRole('menu')).toHaveAttribute('aria-activedescendant', secondId);
  });

  it('should not change selected item when other keys are pressed', () => {
    render(
      <Menu initialSelectedItem={1}>
        <MenuItem>Alpha</MenuItem>
        <MenuItem>Bravo</MenuItem>
      </Menu>
    );

    const secondId = screen.getByRole('menuitem', {name: 'Bravo'}).getAttribute('id');

    fireEvent.keyDown(screen.getByRole('menu'), {key: 'Meta'});
    fireEvent.keyDown(screen.getByRole('menu'), {key: 'ArrowLeft'});
    fireEvent.keyDown(screen.getByRole('menu'), {key: 'ArrowRight'});

    expect(screen.getByRole('menu')).toHaveAttribute('aria-activedescendant', secondId);
  });

  it('should call the correct click event when headers are present', () => {
    const one = jest.fn();
    const two = jest.fn();
    const three = jest.fn();
    render(
      <Menu>
        <MenuItem isHeader>Beginning</MenuItem>
        <MenuItem onClick={one}>Alpha</MenuItem>
        <MenuItem isHeader>Middle</MenuItem>
        <MenuItem isHeader>Center</MenuItem>
        <MenuItem onClick={two}>Bravo</MenuItem>
        <MenuItem onClick={three}>Charlie</MenuItem>
        <MenuItem isHeader>End</MenuItem>
      </Menu>
    );

    fireEvent.keyDown(screen.getByRole('menu'), {key: ' '});
    fireEvent.keyDown(screen.getByRole('menu'), {key: 'ArrowDown'});
    fireEvent.keyDown(screen.getByRole('menu'), {key: ' '});
    fireEvent.keyDown(screen.getByRole('menu'), {key: 'ArrowDown'});
    fireEvent.keyDown(screen.getByRole('menu'), {key: ' '});
    fireEvent.keyDown(screen.getByRole('menu'), {key: 'ArrowDown'});
    fireEvent.keyDown(screen.getByRole('menu'), {key: ' '});
    expect(one).toHaveBeenCalledTimes(2);
    expect(two).toHaveBeenCalled();
    expect(three).toHaveBeenCalled();
  });

  it('should call the "onClose" event when the tab key is pressed', () => {
    render(
      <Menu onClose={cb}>
        <MenuItem>Alpha</MenuItem>
      </Menu>
    );

    fireEvent.keyDown(screen.getByRole('menu'), {key: 'Tab'});

    expect(cb).toHaveBeenCalled();
  });

  it('should call the "onClose" event when the escape key is pressed', () => {
    render(
      <Menu onClose={cb}>
        <MenuItem>Alpha</MenuItem>
      </Menu>
    );

    fireEvent.keyDown(screen.getByRole('menu'), {key: 'Escape'});

    expect(cb).toHaveBeenCalled();
  });

  it('should call the "onClose" event when the space key is pressed', () => {
    render(
      <Menu onClose={cb}>
        <MenuItem>Alpha</MenuItem>
      </Menu>
    );

    fireEvent.keyDown(screen.getByRole('menu'), {key: ' '});

    expect(cb).toHaveBeenCalled();
  });

  it('should call the "onClose" event when the enter key is pressed', () => {
    render(
      <Menu onClose={cb}>
        <MenuItem>Alpha</MenuItem>
      </Menu>
    );

    fireEvent.keyDown(screen.getByRole('menu'), {key: 'Enter'});

    expect(cb).toHaveBeenCalled();
  });
});

describe('Menu Initial Selected Item', () => {
  it('should select item when "initialSelectedItem" is passed', () => {
    render(
      <Menu initialSelectedItem={1}>
        <MenuItem>Alpha</MenuItem>
        <MenuItem>Bravo</MenuItem>
      </Menu>
    );

    const secondId = screen.getByRole('menuitem', {name: 'Bravo'}).getAttribute('id');

    expect(screen.getByRole('menu')).toHaveAttribute('aria-activedescendant', secondId);
  });

  it('should select last item when "initialSelectedItem" is greater than number of items', () => {
    render(
      <Menu initialSelectedItem={100}>
        <MenuItem>Alpha</MenuItem>
        <MenuItem>Bravo</MenuItem>
      </Menu>
    );

    const secondId = screen.getByRole('menuitem', {name: 'Bravo'}).getAttribute('id');

    expect(screen.getByRole('menu')).toHaveAttribute('aria-activedescendant', secondId);
  });

  it('should select from end when "initialSelectedItem" is a negative number', () => {
    render(
      <Menu initialSelectedItem={-1}>
        <MenuItem>Alpha</MenuItem>
        <MenuItem>Bravo</MenuItem>
      </Menu>
    );

    const secondId = screen.getByRole('menuitem', {name: 'Bravo'}).getAttribute('id');

    expect(screen.getByRole('menu')).toHaveAttribute('aria-activedescendant', secondId);
  });

  it('should select first item when "initialSelectedItem" is a negative number greater than items', () => {
    render(
      <Menu initialSelectedItem={-100}>
        <MenuItem>Alpha</MenuItem>
        <MenuItem>Bravo</MenuItem>
      </Menu>
    );

    const firstId = screen.getByRole('menuitem', {name: 'Alpha'}).getAttribute('id');

    expect(screen.getByRole('menu')).toHaveAttribute('aria-activedescendant', firstId);
  });

  it('should select correct when headers are used', () => {
    render(
      <Menu initialSelectedItem={1}>
        <MenuItem isHeader>Alpha Header</MenuItem>
        <MenuItem>Alpha</MenuItem>
        <MenuItem isHeader>Bravo Header</MenuItem>
        <MenuItem>Bravo</MenuItem>
      </Menu>
    );

    const secondId = screen.getByRole('menuitem', {name: 'Bravo'}).getAttribute('id');

    expect(screen.getByRole('menu')).toHaveAttribute('aria-activedescendant', secondId);
  });
});
