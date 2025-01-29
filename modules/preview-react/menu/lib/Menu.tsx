import * as React from 'react';
import styled from '@emotion/styled';

import {DeprecatedMenuItemProps} from './MenuItem';
import {Card} from '@workday/canvas-kit-react/card';
import {commonColors, space, borderRadius} from '@workday/canvas-kit-react/tokens';
import {GrowthBehavior, generateUniqueId} from '@workday/canvas-kit-react/common';

/**
 * @deprecated ⚠️ `DeprecatedMenuProps` has been deprecated and will be removed in a future major version. Please use [Menu in Main](https://workday.github.io/canvas-kit/?path=/docs/components-popups-menu--basic) instead.
 */
export interface DeprecatedMenuProps
  extends GrowthBehavior,
    React.HTMLAttributes<HTMLUListElement> {
  /**
   * The DeprecatedMenuItem children of the DeprecatedMenu (must be at least one). Also accepts other components which share the same interface as `DeprecatedMenuItem`.
   */
  children?:
    | React.ReactElement<DeprecatedMenuItemProps>
    | React.ReactElement<DeprecatedMenuItemProps>[];
  /**
   * If true, set the DeprecatedMenu to the open state. Useful for showing and hiding the DeprecatedMenu from a parent component such as a menu button.
   * @default true
   */
  isOpen?: boolean;
  /**
   * The width of the DeprecatedMenu. If no value is provided, the DeprecatedMenu will collapse around its content.
   */
  width?: number | string;
  /**
   * The function called when a menu item is selected.
   */
  onSelect?: () => void;
  /**
   * The function called when the DeprecatedMenu should close. This is called after a menu item is selected or if the escape shortcut key is used. This will not fire if the menu item sets `shouldClose` to false.
   */
  onClose?: () => void;
  /**
   * The zero-based index of the menu item which should initially receive focus.
   */
  initialSelectedItem?: number;
  /**
   * The unique id of the DeprecatedMenu used for ARIA and HTML `id` attributes.
   */
  id?: string;
  /**
   * The HTML `id` of the element that labels the DeprecatedMenu. Often used with menu buttons.
   */
  'aria-labelledby'?: string;
}

/**
 *
 * @deprecated ⚠️ `DeprecatedMenuState` has been deprecated and will be removed in a future major version. Please use [Menu in Main](https://workday.github.io/canvas-kit/?path=/docs/components-popups-menu--basic) instead.
 */
export interface DeprecatedMenuState {
  selectedItemIndex: number;
}

const List = styled('ul')({
  background: commonColors.background,
  borderRadius: borderRadius.m,
  padding: 0,
  margin: `${space.xxs} 0`,
  '&:focus-visible, &.focus': {
    outline: 'none',
  },
});

/**
 * `DeprecatedMenu` renders a styled `<ul role="menu">` element within a {@link Card} and follows
 * the [Active Menu
 * pattern](https://www.w3.org/TR/wai-aria-practices/examples/menu-button/menu-button-actions-active-descendant.html)
 * using `aria-activedescendant`.
 *
 * Undocumented props are spread to the underlying `<ul>` element.
 *
 * @deprecated ⚠️ Deprecated Menu has been deprecated and will be removed in a future major version. Please use [Menu in Main](https://workday.github.io/canvas-kit/?path=/docs/components-popups-menu--basic) instead.
 */
export class DeprecatedMenu extends React.Component<DeprecatedMenuProps, DeprecatedMenuState> {
  private id = generateUniqueId();
  private animateId!: number;

  private menuRef: React.RefObject<HTMLUListElement>;
  private firstCharacters!: string[];

  constructor(props: DeprecatedMenuProps) {
    super(props);
    this.menuRef = React.createRef();

    const selected = this.getInitialSelectedItem();

    // We track the active menu item by index so we can avoid setting a bunch of refs
    // for doing things like selecting an item by first character (or really calling .focus() at all)
    // It allows us to use the activedescendant design pattern
    // https://www.w3.org/TR/wai-aria-practices/examples/menu-button/menu-button-actions-active-descendant.html
    this.state = {
      selectedItemIndex: selected,
    };
  }

  componentDidUpdate(prevProps: DeprecatedMenuProps) {
    if (this.props.children !== prevProps.children) {
      this.setFirstCharacters();
      this.setInitialSelectedItem();
    }
    if (this.props.isOpen && !prevProps.isOpen) {
      this.setInitialSelectedItem();
    }
    this.animateId = requestAnimationFrame(() => {
      if (this.props.isOpen && this.menuRef.current) {
        this.menuRef.current.focus();
      }
    });
  }

  componentDidMount() {
    console.warn(
      `This component is being deprecated and will be removed in a future major version.\n
      For more information, please see the V8 upgrade guide:\n
      https://workday.github.io/canvas-kit/?path=/docs/guides-upgrade-guides-v8-0--docs#menu-preview
      `
    );

    this.setFirstCharacters();
    this.setInitialSelectedItem();
  }

  componentWillUnmount() {
    cancelAnimationFrame(this.animateId);
  }

  public render() {
    // TODO: Standardize on prop spread location (see #150)
    const {
      id = this.id,
      isOpen = true,
      children,
      'aria-labelledby': ariaLabelledby,
      grow,
      width,
      onSelect,
      onClose,
      initialSelectedItem,
      ...elemProps
    } = this.props;
    const {selectedItemIndex} = this.state;
    const cardWidth = grow ? '100%' : width;
    let interactiveItemIndex: number | null = null;

    return (
      <Card display="inline-block" padding={space.zero} width={cardWidth} depth={3}>
        <Card.Body>
          <List
            role="menu"
            tabIndex={0}
            id={id}
            aria-labelledby={ariaLabelledby}
            aria-activedescendant={`${id}-${selectedItemIndex}`}
            onKeyDown={this.handleKeyboardShortcuts}
            ref={this.menuRef}
            {...elemProps}
          >
            {React.Children.map(children, menuItem => {
              if (!React.isValidElement(menuItem)) {
                return;
              }
              let itemId;
              if (!menuItem.props.isHeader) {
                interactiveItemIndex = (interactiveItemIndex ?? -1) + 1;
                itemId = `${id}-${interactiveItemIndex}`;
              }
              return (
                <React.Fragment key={itemId}>
                  {React.cloneElement(menuItem, {
                    onClick: (event: React.MouseEvent) => this.handleClick(event, menuItem.props),
                    id: itemId,
                    isFocused:
                      selectedItemIndex === interactiveItemIndex && !menuItem.props.isHeader,
                  })}
                </React.Fragment>
              );
            })}
          </List>
        </Card.Body>
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
    const interactiveItems = children.filter(child => {
      return !(child as React.ReactElement<DeprecatedMenuItemProps>)?.props?.isHeader;
    });
    const interactiveItemCount = interactiveItems.length;
    const firstIndex = 0;
    const lastIndex = interactiveItemCount - 1;

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
            nextIndex < 0 ? lastIndex : nextIndex >= interactiveItemCount ? firstIndex : nextIndex;
          break;

        case 'Home':
        case 'End':
          const skipTo = event.key === 'Home' ? firstIndex : lastIndex;
          isShortcut = true;
          nextSelectedIndex = skipTo;
          break;

        case 'Tab':
          if (this.props.onClose) {
            this.props.onClose();
          }
          break;

        case 'Escape':
        case 'Esc': // IE/Edge specific value
          isShortcut = true;
          if (this.props.onClose) {
            this.props.onClose();
          }
          break;

        case 'Spacebar':
        case ' ':
        case 'Enter':
          nextSelectedIndex = this.state.selectedItemIndex;
          const child = interactiveItems[
            this.state.selectedItemIndex
          ] as React.ReactElement<DeprecatedMenuItemProps>;
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

  private handleClick = (
    event: React.MouseEvent | React.KeyboardEvent,
    menuItemProps: DeprecatedMenuItemProps
  ): void => {
    /* istanbul ignore next line for coverage */
    if (menuItemProps.isDisabled) {
      // You should only hit this point if you are using a custom DeprecatedMenuItem implementation.
      return;
    }
    if (menuItemProps.onClick) {
      menuItemProps.onClick(event as React.MouseEvent);
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
      if (!child || typeof child === 'boolean') {
        character = '';
      } else if (typeof child === 'string' || typeof child === 'number') {
        character = child.toString().trim().substring(0, 1).toLowerCase();
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
      if ((child as React.ReactElement<DeprecatedMenuItemProps>)?.props?.isHeader) {
        return;
      }
      return getFirstCharacter(child);
    });

    this.firstCharacters = firstCharacters as string[];
  };

  private getInitialSelectedItem = (): number => {
    let selected = this.props.initialSelectedItem || 0;
    selected = selected < 0 ? React.Children.count(this.props.children) + selected : selected;
    if (selected < 0) {
      selected = 0;
    } else if (selected > React.Children.count(this.props.children) - 1) {
      selected = React.Children.count(this.props.children) - 1;
    }

    return selected;
  };

  private setInitialSelectedItem = () => {
    const selected = this.getInitialSelectedItem();
    this.setState({selectedItemIndex: selected});
  };
}
