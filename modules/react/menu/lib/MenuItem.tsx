import * as React from 'react';

import {colors, iconColors, typeColors, space, type} from '@workday/canvas-kit-react/tokens';
import {createStencil} from '@workday/canvas-kit-styling';
import {brand, system} from '@workday/canvas-tokens-web';
import {checkIcon} from '@workday/canvas-system-icons-web';

import {
  createSubcomponent,
  styled,
  StyledType,
  composeHooks,
  createElemPropsHook,
  useLocalRef,
  createComponent,
} from '@workday/canvas-kit-react/common';
import {SystemIcon, systemIconStencil} from '@workday/canvas-kit-react/icon';
import {OverflowTooltip} from '@workday/canvas-kit-react/tooltip';
import {Box, mergeStyles} from '@workday/canvas-kit-react/layout';
import {
  useListItemRegister,
  useListItemRovingFocus,
  useListItemSelect,
} from '@workday/canvas-kit-react/collection';

import {useMenuModel} from './useMenuModel';

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

interface StyledMenuProps {
  /**
   * If true, set the StyledMenuItem to the disabled state so it is not clickable.
   * @default false
   */
  isDisabled?: boolean;
}

export const menuItemStencil = createStencil({
  base: {
    ...system.type.subtext.large,
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    gap: space.s,
    padding: `${space.xxs} ${space.s}`,
    boxSizing: 'border-box',
    cursor: 'pointer',
    color: system.color.text.default,
    borderWidth: 0,
    textAlign: 'left',
    transition: 'background-color 80ms, color 80ms',
    backgroundColor: 'inherit',
    minHeight: system.space.x10,

    // selected checkmark
    '& [data-part="menu-item-selected"]': {
      transition: 'opacity 80ms linear',
      opacity: system.opacity.zero,
    },
    '&[aria-selected=true] :where([data-part="menu-item-selected"])': {
      opacity: system.opacity.full,
    },

    // if the menu item has children we need it to be displayed in flex
    '&:has(span)': {
      display: 'flex',
    },

    // Hover styles
    '&:is(.hover, :hover, [aria-selected=true])': {
      [systemIconStencil.vars.color]: system.color.icon.strong,
      backgroundColor: brand.primary.lightest,
    },

    // Focus styles
    '&:is(.focus, :focus)': {
      [systemIconStencil.vars.color]: brand.primary.accent,
      outline: 'none',
      backgroundColor: brand.primary.base,
      color: systemIconStencil.vars.color,
    },

    // Disabled styles
    '&:is(:disabled, [aria-disabled=true])': {
      [systemIconStencil.vars.color]: 'color',
      color: system.color.text.disabled,
      cursor: 'default',

      // Focus + Disabled
      '&:where(.focus, :focus)': {
        backgroundColor: brand.primary.light,
      },
    },

    '& :where([data-part="menu-item-text"])': {
      flexGrow: 1,
      alignSelf: 'center',
    },
  },
});

const MenuItemIcon = styled(SystemIcon)({alignSelf: 'start'});

const MenuItemText = ({children}: React.PropsWithChildren) => {
  return (
    <>
      <span data-part="menu-item-text">{children}</span>
      <SystemIcon icon={checkIcon} data-part="menu-item-selected" />
    </>
  );
};

export const StyledMenuItem = createComponent('button')({
  displayName: 'MenuItem',
  Component: ({children, ...elemProps}, ref, Element) => {
    return (
      <Element ref={ref} {...mergeStyles(elemProps, menuItemStencil())}>
        {typeof children === 'string' ? <MenuItemText>{children}</MenuItemText> : children}
      </Element>
    );
  },
});

export const StyledMenuItemOld = styled(Box.as('button'))<StyledType & StyledMenuProps>(
  ({theme}) => {
    return {
      ...type.levels.subtext.large,
      display: 'grid',
      alignItems: 'center',
      width: '100%',
      gap: space.s,
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
      '&:focus, &.focus': {
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
        '&:focus, &.focus': {
          '.wd-icon-background ~ .wd-icon-accent, .wd-icon-background ~ .wd-icon-accent2': {
            fill: iconColors.hover,
          },
        },
      },
      backgroundColor: 'inherit',
      '&:disabled, &[aria-disabled=true]': {
        color: colors.licorice100,
        cursor: 'default',
        '.wd-icon-fill, .wd-icon-accent, .wd-icon-accent2': {
          fill: iconColors.disabled,
        },
        '&:focus, &.focus': {
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
  }
);

export const useMenuItem = composeHooks(
  createElemPropsHook(useMenuModel)(
    (model, ref, elemProps: {'data-id': string} = {'data-id': ''}) => {
      const {localRef, elementRef} = useLocalRef(ref as React.Ref<HTMLElement>);
      const id = elemProps['data-id'];

      // focus on the item with the cursor
      React.useLayoutEffect(() => {
        if (model.state.mode === 'single') {
          if (model.state.cursorId === id) {
            // delay focus changes to allow PopperJS to position
            requestAnimationFrame(() => {
              localRef.current?.focus();
            });
          }
        }
      }, [id, localRef, model.state.cursorId, model.state.mode]);

      return {
        ref: elementRef,
        role: 'menuitem',
        onClick:
          model.state.mode === 'single'
            ? (event: React.SyntheticEvent) => {
                // only hide if the item isn't disabled
                if (event.currentTarget.getAttribute('aria-disabled') !== 'true') {
                  model.events.hide(event);
                }
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
    Icon: MenuItemIcon,
    Text: MenuItemText,
  },
})<MenuItemProps>(({children, ...elemProps}, Element) => {
  return (
    <OverflowTooltip placement="left">
      {/* <StyledMenuItem minHeight={space.xl} as={Element} {...elemProps}>
        {children}
      </StyledMenuItem> */}
      <StyledMenuItem {...mergeStyles(elemProps, menuItemStencil())}>{children}</StyledMenuItem>
    </OverflowTooltip>
  );
});
