import React, {Fragment} from 'react';
import styled from 'react-emotion';
import uuid from 'uuid/v4';
import {MenuItemProps} from './MenuItem';
import {Card} from '@workday/canvas-kit-react-card';
import {commonColors, spacing, borderRadius} from '@workday/canvas-kit-react-core';
import {hideMouseFocus, GrowthBehavior} from '@workday/canvas-kit-react-common';

export interface MenuProps extends GrowthBehavior, React.HTMLAttributes<HTMLUListElement> {
  children?: React.ReactElement<MenuItemProps> | React.ReactElement<MenuItemProps>[];
  isOpen?: boolean;
  width?: number | string;
  onSelect?: () => void;
  onClose?: () => void;
  initialSelectedItem?: number;
  id?: string;
  labeledBy?: string;
}

export interface MenuState {
  selectedItemIndex: number;
}

const minWidth = 100;

const List = styled('ul')({
  background: commonColors.background,
  minWidth: `${minWidth}px`,
  borderRadius: borderRadius.m,
  padding: 0,
  margin: `${spacing.xxs} 0`,
  '&:focus': {
    outline: 'none',
  },
  ...hideMouseFocus,
});

export default class Menu extends React.Component<MenuProps, MenuState> {
  static defaultProps = {
    isOpen: true,
    id: `menu-${uuid()}`,
  };

  private menuRef: React.RefObject<HTMLUListElement>;
  private firstCharacters: string[];

  constructor(props: MenuProps) {
    super(props);
    this.menuRef = React.createRef();
  }

  // We track the active menu item by index so we can avoid setting a bunch of refs
  // for doing things like selecting an item by first character (or really calling .focus() at all)
  // It allows us to use the activedescendant design pattern
  // https://www.w3.org/TR/wai-aria-practices/examples/menu-button/menu-button-actions-active-descendant.html
  state = {
    selectedItemIndex: 0,
  };

  componentDidUpdate(prevProps: MenuProps) {
    if (this.props.children !== prevProps.children) {
      this.setFirstCharacters();
      this.setInitialSelectedItem();
    }
    if (this.props.isOpen && !prevProps.isOpen && this.menuRef.current) {
      this.menuRef.current.focus();
      this.setInitialSelectedItem();
    }
  }

  componentDidMount() {
    this.setFirstCharacters();
    this.setInitialSelectedItem();
  }

  public render() {
    // TODO: Standardize on prop spread location (see #150)
    const {
      children,
      id,
      isOpen,
      labeledBy,
      grow,
      width,
      onSelect,
      onClose,
      initialSelectedItem,
      ...elemProps
    } = this.props;
    const {selectedItemIndex} = this.state;
    const cardWidth = grow ? '100%' : width;

    return (
      <Card
        style={{display: 'inline-block', minWidth: minWidth + 2}}
        padding={spacing.zero}
        width={cardWidth}
      >
        <List
          role="menu"
          tabIndex={0}
          id={id}
          aria-labelledby={labeledBy}
          aria-activedescendant={`${id}-${selectedItemIndex}`}
          onKeyDown={this.handleKeyboardShortcuts}
          innerRef={this.menuRef}
          {...elemProps}
        >
          {React.Children.map(children, (menuItem: React.ReactElement<MenuItemProps>, index) => {
            const itemId = `${id}-${index}`;
            return (
              <Fragment key={itemId}>
                {React.cloneElement(menuItem, {
                  onClick: (event: React.MouseEvent) => this.handleClick(event, menuItem.props),
                  id: itemId,
                  isFocused: selectedItemIndex === index,
                })}
              </Fragment>
            );
          })}
        </List>
      </Card>
    );
  }

  public getNormalizedItemIndex = (index: number | undefined): number => {
    const itemCount = React.Children.count(this.props.children);
    const firstItem = 0;
    const lastItem = itemCount - 1;
    if (!index) {
      return firstItem;
    }
    return index < 0 ? firstItem : index >= itemCount ? lastItem : index;
  };

  public setNormalizedItemIndex = (index: number | undefined): void => {
    this.setState({selectedItemIndex: this.getNormalizedItemIndex(index)});
  };

  private handleKeyboardShortcuts = (event: React.KeyboardEvent): void => {
    if (event.ctrlKey || event.altKey || event.metaKey) {
      return;
    }
    const children = React.Children.toArray(this.props.children);
    let nextSelectedIndex = 0;
    let isShortcut = false;
    const itemCount = children.length;
    const firstItem = 0;
    const lastItem = itemCount - 1;

    if (event.key.length === 1 && event.key.match(/\S/)) {
      let start = this.state.selectedItemIndex + 1;
      let searchIndex;
      if (start === children.length) {
        start = 0;
      }
      searchIndex = this.getIndexFirstChars(start, event.key.toLowerCase());
      if (searchIndex === -1) {
        searchIndex = this.getIndexFirstChars(0, event.key.toLowerCase(), start);
      }
      if (searchIndex > -1) {
        isShortcut = true;
        nextSelectedIndex = searchIndex;
      }
    } else {
      switch (event.key) {
        case 'ArrowUp':
        case 'ArrowDown':
          const direction = event.key === 'ArrowUp' ? -1 : 1;
          isShortcut = true;
          const nextIndex = this.state.selectedItemIndex + direction;
          nextSelectedIndex =
            nextIndex < 0 ? lastItem : nextIndex >= itemCount ? firstItem : nextIndex;
          break;

        case 'Home':
        case 'End':
          const skipTo = event.key === 'Home' ? firstItem : lastItem;
          isShortcut = true;
          nextSelectedIndex = skipTo;
          break;

        case 'Escape':
          isShortcut = true;
          if (this.props.onClose) {
            this.props.onClose();
          }
          break;

        case 'Spacebar':
        case ' ':
        case 'Enter':
          nextSelectedIndex = this.state.selectedItemIndex;
          const child = children[this.state.selectedItemIndex] as React.ReactElement<MenuItemProps>;
          this.handleClick(event, child.props);
          isShortcut = true;
          break;

        default:
      }
    }
    if (isShortcut) {
      this.setNormalizedItemIndex(nextSelectedIndex);
      event.stopPropagation();
      event.preventDefault();
    }
  };

  private handleClick = (event: React.SyntheticEvent, menuItemProps: MenuItemProps): void => {
    /* istanbul ignore next line for coverage */
    if (menuItemProps.isDisabled) {
      // You should only hit this point if you are using a custom MenuItem implementation.
      return;
    }
    if (menuItemProps.onClick) {
      menuItemProps.onClick(event);
    }
    if (this.props.onSelect) {
      this.props.onSelect();
    }
    if (this.props.onClose) {
      if (menuItemProps.shouldClose) {
        this.props.onClose();
      }
    }
  };

  private getIndexFirstChars = (
    startIndex: number,
    character: string,
    lastIndex: number = this.firstCharacters.length
  ) => {
    for (let i = startIndex; i < lastIndex; i++) {
      if (character === this.firstCharacters[i]) {
        return i;
      }
    }
    return -1;
  };

  private setFirstCharacters = (): void => {
    const getFirstCharacter = (child: React.ReactNode): string => {
      let character = '';
      if (!child || typeof child === 'boolean' || child === {}) {
        character = '';
      } else if (typeof child === 'string' || typeof child === 'number') {
        character = child
          .toString()
          .trim()
          .substring(0, 1)
          .toLowerCase();
      } else if (Array.isArray(child) && child[0]) {
        // TODO test React.ReactNodeArray
        character = getFirstCharacter(child[0]);
      } else if ('props' in child) {
        const {children} = child.props;

        if (Array.isArray(children)) {
          character = getFirstCharacter(children[0]);
        } else {
          character = getFirstCharacter(children);
        }
      }
      return character;
    };

    const firstCharacters = React.Children.map(this.props.children, child => {
      return getFirstCharacter(child);
    });

    this.firstCharacters = firstCharacters;
  };

  private setInitialSelectedItem = () => {
    let selected = this.props.initialSelectedItem || 0;
    selected = selected < 0 ? React.Children.count(this.props.children) + selected : selected;
    if (selected < 0) {
      selected = 0;
    } else if (selected > React.Children.count(this.props.children) - 1) {
      selected = React.Children.count(this.props.children) - 1;
    }
    this.setState({selectedItemIndex: selected});
  };
}
