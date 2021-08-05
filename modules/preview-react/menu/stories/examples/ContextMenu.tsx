import React from 'react';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import {Popper} from '@workday/canvas-kit-react/popup';
import {Menu, MenuItem} from '@workday/canvas-kit-preview-react/menu';

export const ContextMenu = () => {
  const [isOpen, setOpened] = React.useState<boolean | undefined>();
  const [anchorEl, setAnchorEl] = React.useState<HTMLElement | null>();
  const [selectedItemIndex, setSelectedItemIndex] = React.useState<number>();

  const handleOpen = () => {
    setOpened(!isOpen);
  };

  const handleContext = (event: React.MouseEvent<HTMLElement>) => {
    const {currentTarget} = event;

    setAnchorEl(currentTarget);
    setOpened(!isOpen);
    setSelectedItemIndex(0);

    event.preventDefault();
  };

  const handleClose = () => {
    if (!isOpen) {
      return;
    }

    setOpened(false);
  };

  return (
    <ClickAwayListener onClickAway={handleClose}>
      <div>
        <div onContextMenu={handleContext}>Right click on this text.</div>
        <Popper placement={'bottom-start'} open={isOpen} anchorElement={anchorEl}>
          <div style={{opacity: isOpen ? 1 : 0, display: isOpen ? `initial` : `none`}}>
            <Menu initialSelectedItem={selectedItemIndex} isOpen={isOpen} onClose={handleClose}>
              <MenuItem>First menu item</MenuItem>
              <MenuItem>Second menu item</MenuItem>
            </Menu>
          </div>
        </Popper>
      </div>
    </ClickAwayListener>
  );
};
