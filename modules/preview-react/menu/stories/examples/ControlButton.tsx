import React, {useRef} from 'react';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import {Popper} from '@workday/canvas-kit-react/popup';
import {Menu, MenuItem} from '@workday/canvas-kit-preview-react/menu';
import {SecondaryButton} from '@workday/canvas-kit-react/button';
import uuid from 'uuid/v4';

export const ControlButton = () => {
  const [isOpen, setOpened] = React.useState<boolean | undefined>();
  const [anchorEl, setAnchorEl] = React.useState<HTMLElement | null>();
  const [selectedItemIndex, setSelectedItemIndex] = React.useState<number>();

  const menuId = `menu-controlled-${uuid()}`;
  const controlButtonId = `${menuId}-button`;
  const buttonRef = useRef(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const {currentTarget} = event;

    setAnchorEl(currentTarget);
    setOpened(!isOpen);
  };

  const handleKeyDown = (event: React.KeyboardEvent): void => {
    let isShortcut = false;
    let nextSelectedIndex = 0;
    if (event.key === `Spacebar` || event.key === ` ` || event.key === `Enter`) {
      isShortcut = true;
      setOpened(!isOpen);
    } else if (event.key === `ArrowDown`) {
      isShortcut = true;
      setOpened(true);
    } else if (event.key === `ArrowUp`) {
      isShortcut = true;
      setOpened(true);

      nextSelectedIndex = -1;
    }
    if (isShortcut) {
      setSelectedItemIndex(nextSelectedIndex);
      // this.setState({selectedItemIndex: nextSelectedIndex});
      event.stopPropagation();
      event.preventDefault();
    }
  };

  const handleClose = () => {
    if (!isOpen) {
      return;
    }

    setOpened(false);

    if (buttonRef && buttonRef.current) {
      buttonRef.current.focus();
    }
  };

  return (
    <ClickAwayListener onClickAway={handleClose}>
      <div>
        <SecondaryButton
          onClick={handleClick}
          onKeyDown={handleKeyDown}
          aria-expanded={!!isOpen}
          aria-haspopup={true}
          aria-controls={menuId}
          id={controlButtonId}
          ref={buttonRef}
        >
          Open Menu
        </SecondaryButton>
        <Popper placement={'bottom-start'} open={isOpen} anchorElement={anchorEl}>
          <div style={{opacity: isOpen ? 1 : 0, display: isOpen ? `initial` : `none`}}>
            <Menu initialSelectedItem={selectedItemIndex} isOpen={isOpen} onClose={handleClose}>
              <MenuItem>First Item</MenuItem>
              <MenuItem>Second Item</MenuItem>
            </Menu>
          </div>
        </Popper>
      </div>
    </ClickAwayListener>
  );
};
