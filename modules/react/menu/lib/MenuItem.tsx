import * as React from 'react';

import {
  colors,
  iconColors,
  commonColors,
  typeColors,
  space,
  type,
} from '@workday/canvas-kit-react/tokens';
import {
  createSubcomponent,
  styled,
  StyledType,
  composeHooks,
  createElemPropsHook,
  useLocalRef,
} from '@workday/canvas-kit-react/common';
import {SystemIcon} from '@workday/canvas-kit-react/icon';
import {OverflowTooltip} from '@workday/canvas-kit-react/tooltip';
import {Box} from '@workday/canvas-kit-react/layout';
import {
  useListItemRegister,
  useListItemRovingFocus,
  useListItemSelect,
} from '@workday/canvas-kit-react/collection';

import {useMenuModel} from './useMenuModel';
import {CanvasSystemIcon} from '@workday/design-assets-types';

export interface MenuItemProps {
  /**
   * Optionally pass index to menu item. This should be done if `Menu.Item` components were created
   * via a `Array::map` function. This index will ensure keyboard navigation works even if items are
   * inserted out of order.
   */
  index?: number;
  /**
   * The label text of the MenuItem.
   */
  children: React.ReactNode;
  /**
   * The name of the menu item. This name will be used in the `onSelect` callback in the model. If
   * this property is not provided, it will default to a string representation of the the zero-based
   * index of the Tab when it was initialized.
   */
  'data-id'?: string;
  'aria-disabled'?: boolean;
}

export interface StyledMenuItemProps {
  /**
   * The function called when the DeprecatedMenuItem is clicked. If the item is a child of the DeprecatedMenu component, this callback will be decorated with the onSelect and onClose DeprecatedMenu callbacks. This callback will not fire if the item is disabled (see below).
   */
  onClick?: (event: React.MouseEvent) => void;
  /**
   * The unique id for the DeprecatedMenuItem used for ARIA attributes. If the item is a child of the `DeprecatedMenu` component, this property will be generated and overridden.
   */
  id?: string;
  /**
   * The icon of the DeprecatedMenuItem. This icon is displayed before what you supplied for the children.
   */
  icon?: CanvasSystemIcon;
  /**
   * The secondary icon of the DeprecatedMenuItem. This icon is displayed after what you supplied for the children.
   */
  secondaryIcon?: CanvasSystemIcon;
  /**
   * If true, render a top border on the DeprecatedMenuItem.
   * @default false
   */
  hasDivider?: boolean;
  /**
   * If true, render a header to group data, this menu item will not be intractable.
   * @default false
   */
  isHeader?: boolean;
  /**
   * If true, set the DeprecatedMenuItem to the disabled state so it is not clickable.
   * @default false
   */
  isDisabled?: boolean;
  /**
   * If true, set the DeprecatedMenuItem to be the currently selected item. If the item is a child of the DeprecatedMenu component, this property will be generated and overridden.
   * @default false
   */
  isFocused?: boolean;
  /**
   * The role of the DeprecatedMenuItem. Use this to override the role of the item (e.g. you can use this element as an option in a Combobox).
   * @default menuItem
   */
  role?: string;
  /**
   * If true, allow the onClose DeprecatedMenu callback to be fired after the DeprecatedMenuItem has been clicked.
   * @default true
   */
  shouldClose?: boolean;
}

export const StyledMenuItem = styled(Box.as('button'))<StyledType & StyledMenuItemProps>(
  ({theme}) => {
    return {
      ...type.levels.subtext.large,
      '& > *:not(style) ~ *:not(style)': {
        marginLeft: space.xxs,
      },
      display: 'block',
      width: '100%',
      padding: `${space.xxs} ${space.s}`,
      boxSizing: 'border-box',
      cursor: 'pointer',
      color: colors.blackPepper300,
      borderWidth: 0,
      textAlign: 'left',
      transition: 'background-color 80ms, color 80ms',
      '&:hover, &[aria-selected=true]': {
        backgroundColor: theme.canvas.palette.primary.lightest,
        color: colors.blackPepper300,
        '.wd-icon-fill, .wd-icon-accent, .wd-icon-accent2': {
          fill: iconColors.hover,
        },
        '.wd-icon-background ~ .wd-icon-accent, .wd-icon-background ~ .wd-icon-accent2': {
          fill: iconColors.hover,
        },
      },
      '&:focus': {
        outline: 'none',
        backgroundColor: theme.canvas.palette.primary.main,
        color: typeColors.inverse,
        '.wd-icon-fill, .wd-icon-accent, .wd-icon-accent2': {
          fill: iconColors.inverse,
        },
        '*:hover .wd-icon-fill': {
          fill: iconColors.inverse,
        },
        '.wd-icon-background ~ .wd-icon-accent, .wd-icon-background ~ .wd-icon-accent2': {
          fill: iconColors.inverse,
        },
      },
      // We want the focus styles no matter what
      [`[data-whatinput]`]: {
        backgroundColor: 'inherit',
        color: colors.blackPepper300,
        '&:hover, &[aria-selected=true]': {
          backgroundColor: theme.canvas.palette.primary.lightest,
          '.wd-icon-fill, .wd-icon-accent, .wd-icon-accent2': {
            fill: iconColors.hover,
          },
        },
        '&:focus': {
          '.wd-icon-background ~ .wd-icon-accent, .wd-icon-background ~ .wd-icon-accent2': {
            fill: iconColors.hover,
          },
        },
      },
      backgroundColor: 'inherit',
      '&:disabled, &[aria-disabled]': {
        color: colors.licorice100,
        cursor: 'default',
        '.wd-icon-fill, .wd-icon-accent, .wd-icon-accent2': {
          fill: iconColors.disabled,
        },
        '&:focus': {
          backgroundColor: colors.blueberry200,
          '.wd-icon-background ~ .wd-icon-accent, .wd-icon-background ~ .wd-icon-accent2': {
            fill: iconColors.disabled,
          },
        },
        '&:hover, &[aria-selected=true]': {
          '.wd-icon-background ~ .wd-icon-accent, .wd-icon-background ~ .wd-icon-accent2': {
            fill: iconColors.disabled,
          },
          '*:hover .wd-icon-fill': {
            fill: iconColors.disabled,
          },
        },
      },
    };
  },
  ({children}) => {
    if (typeof children === 'string') {
      return {};
    } else {
      return {
        display: 'flex',
      };
    }
  },
  ({isFocused, isDisabled}) => {
    if (!isFocused && !isDisabled) {
      return {
        backgroundColor: 'inherit',
        '&:hover': {
          backgroundColor: commonColors.hoverBackground,
          color: colors.blackPepper300,
          '.wd-icon-fill, .wd-icon-accent, .wd-icon-accent2': {
            fill: iconColors.hover,
          },
        },
      };
    } else if (isDisabled && !isFocused) {
      return {
        color: colors.licorice100,
        cursor: 'default',
      };
    } else {
      // Is focused or focused and disabled
      return {
        backgroundColor: isDisabled ? colors.blueberry200 : commonColors.focusBackground,
        color: typeColors.inverse,
        'span .wd-icon-background ~ .wd-icon-accent, .wd-icon-background ~ .wd-icon-accent2': {
          fill: isDisabled ? iconColors.disabled : iconColors.active,
        },
        '&:hover': {
          'span .wd-icon-fill, span .wd-icon-accent, span .wd-icon-accent2': {
            fill: iconColors.inverse,
          },
          'span .wd-icon-background ~ .wd-icon-accent, span .wd-icon-background ~ .wd-icon-accent2': {
            fill: isDisabled ? iconColors.disabled : iconColors.active,
          },
          'span .wd-icon-background': {
            fill: iconColors.inverse,
          },
        },
        [`[data-whatinput='mouse'] &,
          [data-whatinput='touch'] &,
          [data-whatinput='pointer'] &`]: {
          backgroundColor: 'inherit',
          color: colors.blackPepper300,
          'span .wd-icon-background ~ .wd-icon-accent, span .wd-icon-background ~ .wd-icon-accent2': {
            fill: iconColors.standard,
          },
          '&:hover': {
            backgroundColor: commonColors.hoverBackground,
            'span .wd-icon-fill, span .wd-icon-accent, span .wd-icon-accent2': {
              fill: iconColors.hover,
            },
          },
          '.wd-icon-fill, .wd-icon-accent, .wd-icon-accent2': {
            fill: iconColors.standard,
          },
        },
      };
    }
  }
);

export const useMenuItem = composeHooks(
  createElemPropsHook(useMenuModel)(
    (model, ref, elemProps: {'data-id': string} = {'data-id': ''}) => {
      const {localRef, elementRef} = useLocalRef(ref);
      const id = elemProps['data-id'];

      // focus on the item with the cursor
      React.useLayoutEffect(() => {
        if (model.state.mode === 'single') {
          if (model.state.cursorId === id) {
            // delay focus changes to allow PopperJS to position
            requestAnimationFrame(() => {
              localRef.current.focus();
            });
          }
        }
        // We only need to run when the ID has changed. If the static API is used, the first time
        // this is run, the id will be blank
        // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [id]);

      return {
        ref: elementRef,
        role: 'menuitem',
        onClick:
          model.state.mode === 'single'
            ? (event: React.SyntheticEvent) => {
                model.events.hide(event);
              }
            : undefined,
      };
    }
  ),
  useListItemSelect,
  useListItemRovingFocus,
  useListItemRegister
);

export const MenuItem = createSubcomponent('button')({
  displayName: 'Menu.Item',
  modelHook: useMenuModel,
  elemPropsHook: useMenuItem,
  subComponents: {
    Icon: SystemIcon,
    Text: styled('span')({flexGrow: 1, alignSelf: 'center'}),
  },
})<MenuItemProps>(({children, ...elemProps}, Element) => {
  return (
    <OverflowTooltip placement="left">
      <StyledMenuItem minHeight={space.xl} as={Element} {...elemProps}>
        {children}
      </StyledMenuItem>
    </OverflowTooltip>
  );
});
