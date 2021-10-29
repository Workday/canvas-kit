import * as React from 'react';

import {
  colors,
  commonColors,
  iconColors,
  typeColors,
  space,
  type,
} from '@workday/canvas-kit-react/tokens';
import {
  createComponent,
  styled,
  StyledType,
  useModelContext,
  composeHooks,
  createHook,
} from '@workday/canvas-kit-react/common';

import {useRegisterItem} from '../list';
import {useRovingFocus} from '../cursor';
import {MenuModel} from './useMenuModel';
import {MenuModelContext} from './Menu';

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
  name?: string;
  /**
   * Optionally pass a model directly to this component. Default is to implicitly use the same
   * model as the container component which uses React context. Only use this for advanced use-cases
   */
  model?: MenuModel<unknown>;
  'aria-disabled'?: boolean;
}

const StyledItem = styled('li')<StyledType>({
  ...type.levels.subtext.large,
  padding: `${space.xxs} ${space.s}`,
  height: space.xl,
  boxSizing: 'border-box',
  cursor: 'pointer',
  color: colors.blackPepper300,
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  borderWidth: 0,
  transition: 'background-color 80ms, color 80ms',
  '&:focus': {
    outline: 'none',
    backgroundColor: commonColors.focusBackground,
    color: typeColors.inverse,
    'span .wd-icon-background ~ .wd-icon-accent, .wd-icon-background ~ .wd-icon-accent2': {
      fill: iconColors.active,
    },
    '&:hover': {
      'span .wd-icon-fill, span .wd-icon-accent, span .wd-icon-accent2': {
        fill: iconColors.inverse,
      },
      'span .wd-icon-background ~ .wd-icon-accent, span .wd-icon-background ~ .wd-icon-accent2': {
        fill: iconColors.active,
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
  },
  backgroundColor: 'inherit',
  '&:hover': {
    backgroundColor: commonColors.hoverBackground,
    color: colors.blackPepper300,
    '.wd-icon-fill, .wd-icon-accent, .wd-icon-accent2': {
      fill: iconColors.hover,
    },
  },
  '&[aria-disabled]': {
    color: colors.licorice100,
    cursor: 'default',
    '&:focus': {
      backgroundColor: colors.blueberry200,
      'span .wd-icon-background ~ .wd-icon-accent, .wd-icon-background ~ .wd-icon-accent2': {
        fill: iconColors.disabled,
      },
      '&:hover': {
        'span .wd-icon-background ~ .wd-icon-accent, span .wd-icon-background ~ .wd-icon-accent2': {
          fill: iconColors.disabled,
        },
      },
    },
  },
});

const useMenuItem = composeHooks(
  createHook((model: MenuModel<unknown>, _?: React.Ref<any>, elemProps: {name?: string} = {}) => {
    return {
      role: 'menuitem',
      onClick() {
        model.events.select({id: elemProps.name || ''});
      },
    };
  }),
  useRovingFocus,
  useRegisterItem
);

export const MenuItem = createComponent('button')({
  displayName: 'Menu.Item',
  Component: ({model, children, ...elemProps}: MenuItemProps, ref, Element) => {
    const localModel = useModelContext(MenuModelContext, model);

    const props = useMenuItem(localModel, elemProps, ref);
    console.log('localModel', localModel);

    return (
      <StyledItem as={Element} {...props}>
        {children}
      </StyledItem>
    );
  },
});
