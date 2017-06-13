/// <reference path="../../../../typings.d.ts" />
import * as React from 'react';
import {storiesOf} from '@storybook/react';
import {action} from '@storybook/addon-actions';
import withReadme from 'storybook-readme/with-readme';
import uuid from 'uuid/v4';
import {setupIcon, uploadCloudIcon, userIcon, extLinkIcon} from '@workday/canvas-system-icons-web';
import {InputProviderDecorator} from '../../../../utils/storybook';
import {CanvasSystemIcon} from '@workday/design-assets-types';

import Popper from '@material-ui/core/Popper';
import {Transition} from 'react-transition-group';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import {DropdownButton, ButtonProps, BetaButtonTypes} from '@workday/canvas-kit-react-button';

import Menu from '../lib/Menu';
import MenuItem, {MenuItemProps} from '../lib/MenuItem';

import README from '../README.md';

const FocusableButton = React.forwardRef(
  (props: ButtonProps<BetaButtonTypes>, ref: React.RefObject<HTMLButtonElement>) => (
    <DropdownButton buttonRef={ref} {...props}>
      {props.children}
    </DropdownButton>
  )
);
interface MenuItemProperties {
  text?: string | JSX.Element;
  icon?: CanvasSystemIcon;
  secondaryIcon?: CanvasSystemIcon;
  label?: string;
  isDisabled?: boolean;
  hasDivider?: boolean;
}
const createMenuItems = (hasIcons?: boolean): MenuItemProperties[] => {
  return [
    {
      text: `First Item`,
      icon: hasIcons ? uploadCloudIcon : undefined,
    },
    {
      text: `Second Item with really really really long label`,
      icon: hasIcons ? setupIcon : undefined,
    },
    {
      text: `Third Item (disabled)`,
      icon: hasIcons ? uploadCloudIcon : undefined,
      secondaryIcon: hasIcons ? extLinkIcon : undefined,
      isDisabled: true,
    },
    {
      text: hasIcons ? (
        ''
      ) : (
        <em>
          Fourth Item (<b>with markup</b>)
        </em>
      ),
      icon: hasIcons ? userIcon : undefined,
      label: hasIcons ? `I am a label for screen readers` : undefined,
    },
    {
      text: `Fifth Item (with divider)`,
      icon: hasIcons ? userIcon : undefined,
      hasDivider: true,
    },
  ];
};
const buildItem = (item: MenuItemProperties, index: number) => (
  <MenuItem
    key={index}
    onClick={action(`onClick callback ${index + 1}`)}
    icon={item.icon}
    secondaryIcon={item.secondaryIcon}
    isDisabled={item.isDisabled}
    hasDivider={item.hasDivider}
  >
    {item.text}
  </MenuItem>
);

interface ControlledMenuState {
  isOpen: boolean;
  anchorEl: HTMLElement | null;
  selectedItemIndex: number;
}
class ControlledMenu extends React.Component<{}, ControlledMenuState> {
  private menuId: string;
  private controlButtonId: string;
  private buttonRef: React.RefObject<HTMLButtonElement>;
  state = {
    isOpen: false,
    anchorEl: null,
    selectedItemIndex: 0,
  };
  constructor(props: {} = {}) {
    super(props);
    this.menuId = `menu-controlled-${uuid()}`;
    this.controlButtonId = `${this.menuId}-button`;
    this.buttonRef = React.createRef();
  }
  public render() {
    const {anchorEl, isOpen, selectedItemIndex} = this.state;
    const duration = 250;
    const defaultStyle = {
      transition: `opacity ${duration}ms ease-in`,
      opacity: 0,
    };

    const transitionStyles: {[key: string]: {opacity: number}} = {
      entering: {opacity: 1},
      entered: {opacity: 1},
      exiting: {opacity: 0},
      exited: {opacity: 0},
    };
    return (
      <ClickAwayListener onClickAway={this.handleClose}>
        <>
          <FocusableButton
            onClick={this.handleClick}
            onKeyDown={this.handleKeyDown}
            aria-expanded={!!isOpen}
            aria-haspopup={true}
            aria-controls={this.menuId}
            id={this.controlButtonId}
            ref={this.buttonRef}
          >
            Open Menu
          </FocusableButton>
          <Popper
            transition={true}
            keepMounted={true}
            container={document.querySelector('[data-whatinput]')}
            placement={'bottom-start'}
            open={isOpen}
            anchorEl={anchorEl}
          >
            <Transition in={isOpen} timeout={duration}>
              {state => (
                <div
                  style={{
                    ...defaultStyle,
                    ...transitionStyles[state],
                  }}
                >
                  <Menu
                    initialSelectedItem={selectedItemIndex}
                    isOpen={isOpen}
                    onClose={this.handleClose}
                    id={this.menuId}
                    labeledBy={this.controlButtonId}
                  >
                    {createMenuItems().map(buildItem)}
                  </Menu>
                </div>
              )}
            </Transition>
          </Popper>
        </>
      </ClickAwayListener>
    );
  }
  private handleClick = (event: React.SyntheticEvent<HTMLButtonElement>) => {
    const {currentTarget} = event;
    this.setState({
      anchorEl: currentTarget,
      isOpen: !this.state.isOpen,
      selectedItemIndex: 0,
    });
  };
  private handleClose = () => {
    if (!this.state.isOpen) {
      return;
    }
    this.setState({
      isOpen: false,
    });
    if (this.buttonRef && this.buttonRef.current) {
      this.buttonRef.current.focus();
    }
  };
  private handleKeyDown = (event: React.KeyboardEvent): void => {
    let isShortcut = false;
    let nextSelectedIndex = 0;
    if (event.key === `Spacebar` || event.key === ` ` || event.key === `Enter`) {
      isShortcut = true;
      this.setState({isOpen: !this.state.isOpen});
    } else if (event.key === `ArrowDown`) {
      isShortcut = true;
      this.setState({isOpen: true});
    } else if (event.key === `ArrowUp`) {
      isShortcut = true;
      this.setState({isOpen: true});
      nextSelectedIndex = -1;
    }
    if (isShortcut) {
      this.setState({selectedItemIndex: nextSelectedIndex});
      event.stopPropagation();
      event.preventDefault();
    }
  };
}

class ContextMenu extends React.Component<{}, ControlledMenuState> {
  state = {
    isOpen: false,
    anchorEl: null,
    selectedItemIndex: 0,
  };
  public render() {
    const {anchorEl, isOpen, selectedItemIndex} = this.state;
    return (
      <ClickAwayListener onClickAway={this.handleClose}>
        <>
          <div onContextMenu={this.handleContext}>Right click on this text.</div>
          <Popper
            transition={true}
            keepMounted={true}
            placement={'bottom-start'}
            open={isOpen}
            anchorEl={anchorEl}
          >
            <div style={{opacity: isOpen ? 1 : 0}}>
              <Menu
                initialSelectedItem={selectedItemIndex}
                isOpen={isOpen}
                onClose={this.handleClose}
                width={'500px'}
              >
                {createMenuItems().map(buildItem)}
              </Menu>
            </div>
          </Popper>
        </>
      </ClickAwayListener>
    );
  }
  private handleContext = (event: React.SyntheticEvent<HTMLElement>) => {
    const {currentTarget} = event;
    this.setState({
      anchorEl: currentTarget,
      isOpen: !this.state.isOpen,
      selectedItemIndex: 0,
    });
    event.preventDefault();
  };
  private handleClose = () => {
    if (!this.state.isOpen) {
      return;
    }
    this.setState({
      isOpen: false,
    });
  };
}

class CustomMenuItem extends React.Component<MenuItemProps> {
  public render() {
    return (
      <li
        role="menuItem"
        tabIndex={-1}
        onClick={this.props.onClick}
        aria-disabled={!!this.props.isDisabled}
        style={{listStyle: 'none', background: this.props.isFocused ? 'lightblue' : 'white'}}
      >
        {this.props.children}
      </li>
    );
  }
}

storiesOf('Menu', module)
  .addDecorator(InputProviderDecorator)
  .addDecorator(withReadme(README))
  .add('Default', () => (
    <div className="story">
      <Menu grow={true} onSelect={action(`onSelect menu`)}>
        {createMenuItems().map(buildItem)}
      </Menu>
    </div>
  ))
  .add('With Icons', () => (
    <div className="story">
      <Menu width={250}>{createMenuItems(true).map(buildItem)}</Menu>
    </div>
  ))
  .add('With Control Button', () => {
    return (
      <div className="story">
        <ControlledMenu />
      </div>
    );
  })
  .add('With Context Menu', () => {
    return (
      <div className="story">
        <ContextMenu />
      </div>
    );
  })
  .add('With Custom Menu Item', () => {
    return (
      <div className="story">
        <Menu id="customMenu">
          <CustomMenuItem id="customMenu-0" onClick={action(`custom callback 1`)}>
            First
          </CustomMenuItem>
          <CustomMenuItem id="customMenu-1" onClick={action(`custom callback 2`)} isDisabled={true}>
            Second
          </CustomMenuItem>
        </Menu>
      </div>
    );
  });
