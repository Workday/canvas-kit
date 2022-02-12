import * as React from 'react';

import {MenuItemProps} from './MenuItem';
import {Card} from '@workday/canvas-kit-react/card';
import {borderRadius, commonColors, space, type} from '@workday/canvas-kit-react/tokens';
import {
  createComponent,
  ElementComponent,
  ExtractProps,
  hideMouseFocus,
  GrowthBehavior,
  styled,
  useUniqueId,
  StyledType,
} from '@workday/canvas-kit-react/common';

export interface MenuProps extends GrowthBehavior, ExtractProps<typeof Card, never> {
  /**
   * The MenuItem children of the Menu (must be at least one). Also accepts other components which share the same interface as `MenuItem`.
   */
  children?: React.ReactElement<MenuItemProps> | React.ReactElement<MenuItemProps>[];
  /**
   * If true, set the Menu to the open state. Useful for showing and hiding the Menu from a parent component such as a menu button.
   * @default true
   */
  isOpen?: boolean;
  /**
   * The width of the Menu. If no value is provided, the Menu will collapse around its content.
   */
  width?: number | string;
  /**
   * The function called when a menu item is selected.
   */
  onSelect?: () => void;
  /**
   * The function called when the Menu should close. This is called after a menu item is selected or if the escape shortcut key is used. This will not fire if the menu item sets `shouldClose` to false.
   */
  onClose?: () => void;
  /**
   * The zero-based index of the menu item which should initially receive focus.
   */
  initialSelectedItem?: number;
  /**
   * The unique id of the Menu used for ARIA and HTML `id` attributes.
   */
  id?: string;
  /**
   * The HTML `id` of the element that labels the Menu. Often used with menu buttons.
   */
  'aria-labelledby'?: string;
}

export interface MenuState {
  selectedItemIndex: number;
}

const List = (styled('ul')<MenuProps & StyledType>({
  ...type.levels.subtext.large,
  '&:focus': {
    outline: 'none',
  },
  ...hideMouseFocus,
}) as unknown) as ElementComponent<'ul', MenuProps>;

export const Menu = createComponent('ul')({
  displayName: 'Menu',
  Component: ({
    children,
    isOpen = true,
    onSelect,
    onClose,
    grow,
    initialSelectedItem,
    id: _id,
    width,
    ...elemProps
  }: MenuProps) => {
    const id = _id ?? useUniqueId();
    const animateId = React.useRef<number>();
    const menuRef = React.useRef<HTMLUListElement>(null);
    const firstCharacters = React.useRef<string[]>([]);

    const getInitialSelectedItem = React.useCallback((): number => {
      let selected = initialSelectedItem || 0;
      selected = selected < 0 ? React.Children.count(children) + selected : selected;
      if (selected < 0) {
        selected = 0;
      } else if (selected > React.Children.count(children) - 1) {
        selected = React.Children.count(children) - 1;
      }

      return selected;
    }, [children, initialSelectedItem]);

    const setInitialSelectedItem = React.useCallback(() => {
      const selected = getInitialSelectedItem();
      setSelectedItemIndex(selected);
    }, [getInitialSelectedItem]);

    // We track the active menu item by index so we can avoid setting a bunch of refs
    // for doing things like selecting an item by first character (or really calling .focus() at all)
    // It allows us to use the activedescendant design pattern
    // https://www.w3.org/TR/wai-aria-practices/examples/menu-button/menu-button-actions-active-descendant.html
    const [selectedItemIndex, setSelectedItemIndex] = React.useState(getInitialSelectedItem());

    React.useEffect(() => {
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

      const firstCharacterMap = React.Children.map(children, child => {
        return getFirstCharacter(child);
      });

      firstCharacters.current = firstCharacterMap ?? [];

      setInitialSelectedItem();
    }, [children, setInitialSelectedItem]);

    React.useEffect(() => {
      setInitialSelectedItem();
    }, [isOpen, setInitialSelectedItem]);

    React.useEffect(() => {
      animateId.current = requestAnimationFrame(() => {
        if (isOpen && menuRef.current) {
          menuRef.current.focus();
        }
      });
      return () => {
        if (animateId.current) {
          cancelAnimationFrame(animateId.current);
        }
      };
    }, [isOpen]);

    const cardWidth = grow ? '100%' : width;

    const getNormalizedItemIndex = (index: number | undefined): number => {
      const itemCount = React.Children.count(children);
      const firstItem = 0;
      const lastItem = itemCount - 1;
      if (!index) {
        return firstItem;
      }
      return index < 0 ? firstItem : index >= itemCount ? lastItem : index;
    };

    const setNormalizedItemIndex = (index: number | undefined): void => {
      setSelectedItemIndex(getNormalizedItemIndex(index));
    };

    const handleKeyboardShortcuts = (event: React.KeyboardEvent): void => {
      if (event.ctrlKey || event.altKey || event.metaKey) {
        return;
      }
      const menuItems = React.Children.toArray(children);
      let nextSelectedIndex = 0;
      let isShortcut = false;
      const itemCount = menuItems.length;
      const firstItem = 0;
      const lastItem = itemCount - 1;

      if (event.key.length === 1 && event.key.match(/\S/)) {
        let start = selectedItemIndex + 1;
        let searchIndex;
        if (start === menuItems.length) {
          start = 0;
        }
        searchIndex = getIndexFirstChars(start, event.key.toLowerCase());
        if (searchIndex === -1) {
          searchIndex = getIndexFirstChars(0, event.key.toLowerCase(), start);
        }
        if (searchIndex > -1) {
          isShortcut = true;
          nextSelectedIndex = searchIndex;
        }
      } else {
        switch (event.key) {
          case 'ArrowUp':
          case 'ArrowDown':
          case 'Down': // IE/Edge specific value
          case 'Up': // IE/Edge specific value
            const direction = event.key === 'ArrowUp' ? -1 : 1;
            isShortcut = true;
            const nextIndex = selectedItemIndex + direction;
            nextSelectedIndex =
              nextIndex < 0 ? lastItem : nextIndex >= itemCount ? firstItem : nextIndex;
            break;

          case 'Home':
          case 'End':
            const skipTo = event.key === 'Home' ? firstItem : lastItem;
            isShortcut = true;
            nextSelectedIndex = skipTo;
            break;

          case 'Tab':
            if (onClose) {
              onClose();
            }
            break;

          case 'Escape':
          case 'Esc': // IE/Edge specific value
            isShortcut = true;
            if (onClose) {
              onClose();
            }
            break;

          case 'Spacebar':
          case ' ':
          case 'Enter':
            nextSelectedIndex = selectedItemIndex;
            const child = menuItems[selectedItemIndex] as React.ReactElement<MenuItemProps>;
            handleClick(event, child.props);
            isShortcut = true;
            break;

          default:
        }
      }
      if (isShortcut) {
        setNormalizedItemIndex(nextSelectedIndex);
        event.stopPropagation();
        event.preventDefault();
      }
    };

    const handleClick = (
      event: React.MouseEvent | React.KeyboardEvent,
      menuItemProps: MenuItemProps
    ): void => {
      /* istanbul ignore next line for coverage */
      if (menuItemProps.isDisabled) {
        // You should only hit this point if you are using a custom MenuItem implementation.
        return;
      }
      if (menuItemProps.onClick) {
        menuItemProps.onClick(event as React.MouseEvent);
      }
      if (onSelect) {
        onSelect();
      }
      if (onClose) {
        if (menuItemProps.shouldClose !== false) {
          onClose();
        }
      }
    };

    const getIndexFirstChars = (
      startIndex: number,
      character: string,
      lastIndex: number = firstCharacters.current?.length ?? 0
    ) => {
      for (let i = startIndex; i < lastIndex; i++) {
        if (character === firstCharacters.current?.[i]) {
          return i;
        }
      }
      return -1;
    };

    return (
      <Card
        as={List}
        padding={`${space.xxs} 0`}
        margin={space.zero}
        width={cardWidth}
        display="inline-block"
        background={commonColors.background}
        borderRadius={borderRadius.m}
        role="menu"
        tabIndex={0}
        id={id}
        aria-activedescendant={`${id}-${selectedItemIndex}`}
        onKeyDown={handleKeyboardShortcuts}
        ref={menuRef}
        {...elemProps}
      >
        {React.Children.map(children, (menuItem, index) => {
          if (!React.isValidElement(menuItem)) {
            return;
          }
          const itemId = `${id}-${index}`;
          return (
            <React.Fragment key={itemId}>
              {React.cloneElement(menuItem, {
                onClick: (event: React.MouseEvent) => handleClick(event, menuItem.props),
                id: itemId,
                isFocused: selectedItemIndex === index,
              })}
            </React.Fragment>
          );
        })}
      </Card>
    );
  },
});

export default Menu;
