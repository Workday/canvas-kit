import * as React from 'react';

import {CSProps, createStencil, px2rem} from '@workday/canvas-kit-styling';
import {brand, system} from '@workday/canvas-tokens-web';

import {
  createSubcomponent,
  composeHooks,
  createElemPropsHook,
  useLocalRef,
  createComponent,
} from '@workday/canvas-kit-react/common';
import {SystemIcon, SystemIconProps, systemIconStencil} from '@workday/canvas-kit-react/icon';
import {OverflowTooltip} from '@workday/canvas-kit-react/tooltip';
import {mergeStyles} from '@workday/canvas-kit-react/layout';
import {
  isCursor,
  useListItemRegister,
  useListItemRovingFocus,
  useListItemSelect,
} from '@workday/canvas-kit-react/collection';

import {useMenuModel} from './useMenuModel';

export interface MenuItemProps extends CSProps {
  /**
   * Optionally pass index to menu item. This should be done if `Menu.Item` components were created
   * via a `Array::map` function. This index will ensure keyboard navigation works even if items are
   * inserted out of order.
   */
  index?: number;
  /**
   * The label text of the MenuItem.
   */
  children?: React.ReactNode;
  /**
   * The name of the menu item. This name will be used in the `onSelect` callback in the model. If
   * this property is not provided, it will default to a string representation of the the zero-based
   * index of the Tab when it was initialized.
   */
  'data-id'?: string;
  /**
   * `aria-disabled` is used for keyboard and screen reader users to discover disabled content with
   * the keyboard or screen reader caret tool. For more information, see
   * https://www.w3.org/WAI/ARIA/apg/practices/keyboard-interface/#kbd_disabled_controls
   */
  'aria-disabled'?: boolean;
  /**
   * If true, set the StyledMenuItem to the disabled state so it is not clickable.
   * @default false
   * @deprecated Use `aria-disabled` instead
   */
  isDisabled?: boolean;
}

export const menuItemStencil = createStencil({
  parts: {
    text: 'menu-item-text',
    icon: 'menu-item-icon',
    selected: 'menu-item-selected',
  },
  base: ({textPart, iconPart, selectedPart}) => ({
    ...system.type.subtext.large,
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    gap: system.space.x4,
    padding: `${system.space.x2} ${system.space.x4}`,
    boxSizing: 'border-box',
    cursor: 'pointer',
    color: system.color.fg.default,
    borderWidth: 0,
    textAlign: 'start',
    transition: 'background-color 80ms, color 80ms',
    backgroundColor: 'inherit',
    minHeight: system.space.x10,
    overflowWrap: 'anywhere',
    // We want the icon colors to be the same as the text color
    [systemIconStencil.vars.color]: 'currentColor',

    // selected checkmark
    [`& :where(${selectedPart})`]: {
      transition: 'opacity 80ms linear',
      opacity: system.opacity.zero,
    },

    // if the menu item has children we need it to be displayed in flex
    '&:where(:has(span))': {
      display: 'flex',
    },

    // Selected styles
    '&[aria-selected=true]': {
      color: brand.primary.dark,
      backgroundColor: brand.primary.lightest,

      [`& :where(${selectedPart})`]: {
        opacity: system.opacity.full,
      },

      '&:where(.focus, :focus)': {
        [systemIconStencil.vars.color]: brand.primary.accent,
        outline: 'none',
        backgroundColor: brand.primary.base,
        color: systemIconStencil.vars.color,
      },
    },

    // Hover styles
    '&:is(.hover, :hover)': {
      color: system.color.fg.strong,
      backgroundColor: brand.neutral.lightest,
    },

    // Focus styles
    '&:is(.focus, :focus)': {
      color: brand.primary.accent,
      backgroundColor: brand.primary.base,
      outline: `${px2rem(2)} solid transparent`,
      outlineOffset: `-${px2rem(2)}`,
    },

    // Disabled styles
    '&:is(:disabled, [aria-disabled=true])': {
      color: system.color.fg.disabled,
      cursor: 'default',

      '&:where(.hover, :hover, [aria-selected=true])': {
        background: 'none',
      },
      // Focus + Disabled
      '&:where(.focus, :focus)': {
        color: system.color.fg.inverse,
        backgroundColor: brand.primary.light,
      },
    },

    [`& :where(${textPart})`]: {
      flexGrow: 1,
      alignSelf: 'center',
    },

    [`& :where(${iconPart})`]: {
      alignSelf: 'start',
    },
  }),
});

const MenuItemIcon = (elemProps: SystemIconProps) => {
  return <SystemIcon {...menuItemStencil.parts.icon} {...elemProps} />;
};

const MenuItemText = createComponent('span')({
  Component: ({...elemProps}, ref, Element) => {
    return <Element ref={ref} {...menuItemStencil.parts.text} {...elemProps} />;
  },
});

export const StyledMenuItem = createComponent('button')({
  displayName: 'MenuItem',
  Component: ({children, isDisabled, ...elemProps}: MenuItemProps, ref, Element) => {
    return (
      <Element
        ref={ref}
        aria-disabled={isDisabled}
        {...mergeStyles(elemProps, menuItemStencil({}))}
      >
        {typeof children === 'string' ? <MenuItemText>{children}</MenuItemText> : children}
      </Element>
    );
  },
});

export const useMenuItemArrowReturn = createElemPropsHook(useMenuModel)(model => {
  return {
    onKeyDown(event: React.KeyboardEvent) {
      const styles = getComputedStyle(event.currentTarget);
      if (event.key === 'ArrowLeft' && styles.direction === 'ltr' && model.UNSTABLE_parentModel) {
        model.events.hide(event);
      }
    },
  };
});

export const useMenuItemFocus = createElemPropsHook(useMenuModel)(
  (model, ref, elemProps: {'data-id': string} = {'data-id': ''}) => {
    const {localRef, elementRef} = useLocalRef(ref as React.Ref<HTMLElement>);
    const id = elemProps['data-id'];
    // focus on the item with the cursor
    React.useLayoutEffect(() => {
      if (model.state.mode === 'single') {
        if (isCursor(model.state, id)) {
          // delay focus changes to allow PopperJS to position
          requestAnimationFrame(() => {
            localRef.current?.focus();
          });
        }
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [id, localRef, model.state.cursorId, model.state.mode]);
    return {
      ref: elementRef,
      className: isCursor(model.state, elemProps['data-id']) ? 'focus' : undefined,
    };
  }
);

function hideParent(model: ReturnType<typeof useMenuModel>) {
  if (model.UNSTABLE_parentModel) {
    (model.UNSTABLE_parentModel as any).events.hide();
    hideParent(model.UNSTABLE_parentModel as any);
  }
}

export const useMenuItem = composeHooks(
  createElemPropsHook(useMenuModel)(model => {
    return {
      role: 'menuitem',
      onMouseDown(event: React.MouseEvent) {
        model.events.goTo({id: event.currentTarget.getAttribute('data-id')!});
      },
      onClick:
        model.state.mode === 'single'
          ? (event: React.SyntheticEvent) => {
              // only hide if the item isn't disabled
              if (event.currentTarget.getAttribute('aria-disabled') !== 'true') {
                model.events.hide(event);
                hideParent(model);
              }
            }
          : undefined,
    };
  }),
  useMenuItemFocus,
  useMenuItemArrowReturn,
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
      <StyledMenuItem as={Element} {...elemProps}>
        {children}
      </StyledMenuItem>
    </OverflowTooltip>
  );
});
