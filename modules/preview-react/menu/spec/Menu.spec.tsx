import * as React from 'react';
import {DeprecatedMenu, DeprecatedMenuItem} from '../index';
import {screen, render, fireEvent} from '@testing-library/react';

describe('DeprecatedMenu', () => {
  const cb = jest.fn();

  it('should call the "onClick" event when an item is clicked', () => {
    render(
      <DeprecatedMenu>
        <DeprecatedMenuItem onClick={cb}>Option</DeprecatedMenuItem>
      </DeprecatedMenu>
    );

    fireEvent.click(screen.getByRole('menuitem', {name: 'Option'}));

    expect(cb).toBeCalledTimes(1);
  });

  it('should call the "onSelect" event when an item is clicked', () => {
    render(
      <DeprecatedMenu onSelect={cb}>
        <DeprecatedMenuItem>Option</DeprecatedMenuItem>
      </DeprecatedMenu>
    );

    fireEvent.click(screen.getByRole('menuitem', {name: 'Option'}));

    expect(cb).toBeCalledTimes(1);
  });

  it('should call the "onClose" event when an item is clicked', () => {
    render(
      <DeprecatedMenu onClose={cb}>
        <DeprecatedMenuItem>Option</DeprecatedMenuItem>
      </DeprecatedMenu>
    );

    fireEvent.click(screen.getByRole('menuitem', {name: 'Option'}));

    expect(cb).toBeCalledTimes(1);
  });

  it('should call the "onClose" event when an item is clicked and "shouldClose" is true', () => {
    render(
      <DeprecatedMenu onClose={cb}>
        <DeprecatedMenuItem shouldClose={true}>Option</DeprecatedMenuItem>
      </DeprecatedMenu>
    );

    fireEvent.click(screen.getByRole('menuitem', {name: 'Option'}));

    expect(cb).toBeCalledTimes(1);
  });

  it('should not call the "onClose" event when an item is clicked and "shouldClose" is false', () => {
    render(
      <DeprecatedMenu onClose={cb}>
        <DeprecatedMenuItem shouldClose={false}>Option</DeprecatedMenuItem>
      </DeprecatedMenu>
    );

    fireEvent.click(screen.getByRole('menuitem', {name: 'Option'}));

    expect(cb).not.toHaveBeenCalled();
  });

  it('should not call the "onClose" event when an item is clicked and disabled', () => {
    render(
      <DeprecatedMenu onClose={cb}>
        <DeprecatedMenuItem isDisabled={true}>Option</DeprecatedMenuItem>
      </DeprecatedMenu>
    );

    fireEvent.click(screen.getByRole('menuitem', {name: 'Option'}));

    expect(cb).not.toHaveBeenCalled();
  });

  it('should not call the "onSelect" event when an item is clicked and disabled', () => {
    render(
      <DeprecatedMenu onSelect={cb}>
        <DeprecatedMenuItem isDisabled={true}>Option</DeprecatedMenuItem>
      </DeprecatedMenu>
    );

    fireEvent.click(screen.getByRole('menuitem', {name: 'Option'}));

    expect(cb).not.toHaveBeenCalled();
  });

  it('should render a menu item with children', () => {
    render(
      <DeprecatedMenuItem>
        <em>Option</em>
      </DeprecatedMenuItem>
    );

    expect(screen.getByRole('menuitem', {name: 'Option'})).toContainHTML('<em>Option</em>');
  });

  it('should forward extra DeprecatedMenu props to the element', () => {
    render(<DeprecatedMenu data-propspread="test" />);

    expect(screen.getByRole('menu')).toHaveAttribute('data-propspread', 'test');
  });

  it('should forward extra DeprecatedMenuItem props to the element', () => {
    render(<DeprecatedMenuItem data-propspread="test">Option</DeprecatedMenuItem>);

    expect(screen.getByRole('menuitem', {name: 'Option'})).toHaveAttribute(
      'data-propspread',
      'test'
    );
  });
});

describe('DeprecatedMenu Accessibility', () => {
  // https://www.w3.org/TR/wai-aria-practices-1.1/examples/menu-button/menu-button-actions-active-descendant.html

  it('should render DeprecatedMenu as [role="menu"]', () => {
    render(<DeprecatedMenu />);

    expect(screen.getByRole('menu')).toBeInTheDocument();
  });

  it('should render the DeprecatedMenuItem as [role="menuitem]', () => {
    render(<DeprecatedMenuItem />);

    expect(screen.getByRole('menuitem')).toBeInTheDocument();
  });

  it('should add [tabIndex=0] to the DeprecatedMenu element', () => {
    render(<DeprecatedMenu />);

    expect(screen.getByRole('menu')).toHaveAttribute('tabIndex', '0');
  });

  it('should add [tabIndex=-1] to the DeprecatedMenuItem element', () => {
    render(<DeprecatedMenuItem />);

    expect(screen.getByRole('menuitem')).toHaveAttribute('tabIndex', '-1');
  });

  it('should not add [aria-disabled] if "isDisabled" is false', () => {
    render(<DeprecatedMenuItem isDisabled={false} />);

    expect(screen.getByRole('menuitem')).not.toHaveAttribute('aria-disabled');
  });

  it('should add [aria-disabled=true] if "isDisabled" is true', () => {
    render(<DeprecatedMenuItem isDisabled={true} />);

    expect(screen.getByRole('menuitem')).toHaveAttribute('aria-disabled', 'true');
  });

  it('should allow overriding the role of the DeprecatedMenuItem', () => {
    render(<DeprecatedMenuItem data-testid="Option" role="option" />);

    expect(screen.getByTestId('Option')).toHaveAttribute('role', 'option');
  });

  it('should have aria-activedescendant pointing to the first item', () => {
    render(
      <DeprecatedMenu>
        <DeprecatedMenuItem>Option</DeprecatedMenuItem>
      </DeprecatedMenu>
    );

    const id = screen.getByRole('menuitem').getAttribute('id');

    expect(screen.getByRole('menu')).toHaveAttribute('aria-activedescendant', id);
  });
});

describe('DeprecatedMenu Keyboard Shortcuts', () => {
  const cb = jest.fn();
  afterEach(() => {
    cb.mockReset();
  });

  it('should select an item by pressing its first letter', () => {
    render(
      <DeprecatedMenu>
        <DeprecatedMenuItem>Alpha</DeprecatedMenuItem>
        <DeprecatedMenuItem>
          <em>
            Bravo Item (<b>with markup</b>)
          </em>
        </DeprecatedMenuItem>
        <DeprecatedMenuItem>
          <em>
            <b>Char</b>
            <i>lie</i>
          </em>
        </DeprecatedMenuItem>
        <DeprecatedMenuItem />
      </DeprecatedMenu>
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
      <DeprecatedMenu>
        <DeprecatedMenuItem isHeader>Beginning</DeprecatedMenuItem>
        <DeprecatedMenuItem>Alpha</DeprecatedMenuItem>
        <DeprecatedMenuItem>Bravo</DeprecatedMenuItem>
        <DeprecatedMenuItem isHeader>End</DeprecatedMenuItem>
      </DeprecatedMenu>
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
      <DeprecatedMenu>
        <DeprecatedMenuItem isHeader>Beginning</DeprecatedMenuItem>
        <DeprecatedMenuItem>Alpha</DeprecatedMenuItem>
        <DeprecatedMenuItem>Bravo</DeprecatedMenuItem>
        <DeprecatedMenuItem isHeader>End</DeprecatedMenuItem>
      </DeprecatedMenu>
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
      <DeprecatedMenu initialSelectedItem={1}>
        <DeprecatedMenuItem isHeader>Beginning</DeprecatedMenuItem>
        <DeprecatedMenuItem>Alpha</DeprecatedMenuItem>
        <DeprecatedMenuItem>Bravo</DeprecatedMenuItem>
        <DeprecatedMenuItem isHeader>End</DeprecatedMenuItem>
      </DeprecatedMenu>
    );

    const firstId = screen.getByRole('menuitem', {name: 'Alpha'}).getAttribute('id');

    fireEvent.keyDown(screen.getByRole('menu'), {key: 'Home'});
    expect(screen.getByRole('menu')).toHaveAttribute('aria-activedescendant', firstId);
  });

  it('should select the last items when End key is pressed', () => {
    render(
      <DeprecatedMenu initialSelectedItem={0}>
        <DeprecatedMenuItem isHeader>Beginning</DeprecatedMenuItem>
        <DeprecatedMenuItem>Alpha</DeprecatedMenuItem>
        <DeprecatedMenuItem>Bravo</DeprecatedMenuItem>
        <DeprecatedMenuItem isHeader>End</DeprecatedMenuItem>
      </DeprecatedMenu>
    );

    const secondId = screen.getByRole('menuitem', {name: 'Bravo'}).getAttribute('id');

    fireEvent.keyDown(screen.getByRole('menu'), {key: 'End'});
    expect(screen.getByRole('menu')).toHaveAttribute('aria-activedescendant', secondId);
  });

  it('should not change selected item when other keys are pressed', () => {
    render(
      <DeprecatedMenu initialSelectedItem={1}>
        <DeprecatedMenuItem>Alpha</DeprecatedMenuItem>
        <DeprecatedMenuItem>Bravo</DeprecatedMenuItem>
      </DeprecatedMenu>
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
      <DeprecatedMenu>
        <DeprecatedMenuItem isHeader>Beginning</DeprecatedMenuItem>
        <DeprecatedMenuItem onClick={one}>Alpha</DeprecatedMenuItem>
        <DeprecatedMenuItem isHeader>Middle</DeprecatedMenuItem>
        <DeprecatedMenuItem isHeader>Center</DeprecatedMenuItem>
        <DeprecatedMenuItem onClick={two}>Bravo</DeprecatedMenuItem>
        <DeprecatedMenuItem onClick={three}>Charlie</DeprecatedMenuItem>
        <DeprecatedMenuItem isHeader>End</DeprecatedMenuItem>
      </DeprecatedMenu>
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
      <DeprecatedMenu onClose={cb}>
        <DeprecatedMenuItem>Alpha</DeprecatedMenuItem>
      </DeprecatedMenu>
    );

    fireEvent.keyDown(screen.getByRole('menu'), {key: 'Tab'});

    expect(cb).toHaveBeenCalled();
  });

  it('should call the "onClose" event when the escape key is pressed', () => {
    render(
      <DeprecatedMenu onClose={cb}>
        <DeprecatedMenuItem>Alpha</DeprecatedMenuItem>
      </DeprecatedMenu>
    );

    fireEvent.keyDown(screen.getByRole('menu'), {key: 'Escape'});

    expect(cb).toHaveBeenCalled();
  });

  it('should call the "onClose" event when the space key is pressed', () => {
    render(
      <DeprecatedMenu onClose={cb}>
        <DeprecatedMenuItem>Alpha</DeprecatedMenuItem>
      </DeprecatedMenu>
    );

    fireEvent.keyDown(screen.getByRole('menu'), {key: ' '});

    expect(cb).toHaveBeenCalled();
  });

  it('should call the "onClose" event when the enter key is pressed', () => {
    render(
      <DeprecatedMenu onClose={cb}>
        <DeprecatedMenuItem>Alpha</DeprecatedMenuItem>
      </DeprecatedMenu>
    );

    fireEvent.keyDown(screen.getByRole('menu'), {key: 'Enter'});

    expect(cb).toHaveBeenCalled();
  });
});

describe('DeprecatedMenu Initial Selected Item', () => {
  it('should select item when "initialSelectedItem" is passed', () => {
    render(
      <DeprecatedMenu initialSelectedItem={1}>
        <DeprecatedMenuItem>Alpha</DeprecatedMenuItem>
        <DeprecatedMenuItem>Bravo</DeprecatedMenuItem>
      </DeprecatedMenu>
    );

    const secondId = screen.getByRole('menuitem', {name: 'Bravo'}).getAttribute('id');

    expect(screen.getByRole('menu')).toHaveAttribute('aria-activedescendant', secondId);
  });

  it('should select last item when "initialSelectedItem" is greater than number of items', () => {
    render(
      <DeprecatedMenu initialSelectedItem={100}>
        <DeprecatedMenuItem>Alpha</DeprecatedMenuItem>
        <DeprecatedMenuItem>Bravo</DeprecatedMenuItem>
      </DeprecatedMenu>
    );

    const secondId = screen.getByRole('menuitem', {name: 'Bravo'}).getAttribute('id');

    expect(screen.getByRole('menu')).toHaveAttribute('aria-activedescendant', secondId);
  });

  it('should select from end when "initialSelectedItem" is a negative number', () => {
    render(
      <DeprecatedMenu initialSelectedItem={-1}>
        <DeprecatedMenuItem>Alpha</DeprecatedMenuItem>
        <DeprecatedMenuItem>Bravo</DeprecatedMenuItem>
      </DeprecatedMenu>
    );

    const secondId = screen.getByRole('menuitem', {name: 'Bravo'}).getAttribute('id');

    expect(screen.getByRole('menu')).toHaveAttribute('aria-activedescendant', secondId);
  });

  it('should select first item when "initialSelectedItem" is a negative number greater than items', () => {
    render(
      <DeprecatedMenu initialSelectedItem={-100}>
        <DeprecatedMenuItem>Alpha</DeprecatedMenuItem>
        <DeprecatedMenuItem>Bravo</DeprecatedMenuItem>
      </DeprecatedMenu>
    );

    const firstId = screen.getByRole('menuitem', {name: 'Alpha'}).getAttribute('id');

    expect(screen.getByRole('menu')).toHaveAttribute('aria-activedescendant', firstId);
  });

  it('should select correct when headers are used', () => {
    render(
      <DeprecatedMenu initialSelectedItem={1}>
        <DeprecatedMenuItem isHeader>Alpha Header</DeprecatedMenuItem>
        <DeprecatedMenuItem>Alpha</DeprecatedMenuItem>
        <DeprecatedMenuItem isHeader>Bravo Header</DeprecatedMenuItem>
        <DeprecatedMenuItem>Bravo</DeprecatedMenuItem>
      </DeprecatedMenu>
    );

    const secondId = screen.getByRole('menuitem', {name: 'Bravo'}).getAttribute('id');

    expect(screen.getByRole('menu')).toHaveAttribute('aria-activedescendant', secondId);
  });
});
