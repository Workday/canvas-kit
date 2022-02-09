import * as React from 'react';

import {colors, iconColors, typeColors, space, type} from '@workday/canvas-kit-react/tokens';
import {
  createComponent,
  styled,
  StyledType,
  useModelContext,
  composeHooks,
  createHook,
  useLocalRef,
  useMount,
} from '@workday/canvas-kit-react/common';
import {SystemIcon} from '@workday/canvas-kit-react/icon';
import {OverflowTooltip} from '@workday/canvas-kit-react/tooltip';
import {Box} from '@workday/canvas-kit-labs-react/common';

import {useListRegisterItem} from '../list';
import {useRovingFocus} from '../cursor';
import {MenuModel} from './useMenuModel';
import {MenuModelContext} from './Menu';
import {useSelectionItem} from '../selection';

export interface MenuItemProps<T = unknown> {
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
  model?: MenuModel<T>;
  'aria-disabled'?: boolean;
  /**
   * Use `hasIcon={true}` when the Tab item contains an icon. This instructs the tab item to render
   * children as a flex container to accommodate icons. You will have to use `Tabs.Item.Text` as a
   * child element if this is set to true.
   *
   * @example
   * <Menu.Item hasIcon>
   *   <Menu.Item.Icon icon={someIcon} />
   *   <Menu.Item.Text>Tab Text</Menu.Item.Text>
   * </Menu.Item>
   */
  hasIcon?: boolean;
}

const StyledItem = styled(Box.as('button'))<StyledType & {hasIcon?: boolean}>(
  ({theme}) => {
    return {
      ...type.levels.subtext.large,
      '& > *:not(style) ~ *:not(style)': {
        marginLeft: space.xxs,
      },
      padding: `${space.xxs} ${space.s}`,
      boxSizing: 'border-box',
      cursor: 'pointer',
      color: colors.blackPepper300,
      borderWidth: 0,
      textAlign: 'left',
      transition: 'background-color 80ms, color 80ms',
      '.wd-icon-background ~ .wd-icon-accent, .wd-icon-background ~ .wd-icon-accent2': {
        fill: iconColors.active,
      },
      '&:hover, &[aria-selected=true]': {
        backgroundColor: theme.canvas.palette.primary.lightest,
        color: colors.blackPepper300,
        '.wd-icon-fill, .wd-icon-accent, .wd-icon-accent2': {
          fill: iconColors.hover,
        },
        '.wd-icon-background ~ .wd-icon-accent, .wd-icon-background ~ .wd-icon-accent2': {
          fill: iconColors.active,
        },
      },
      '&:focus': {
        outline: 'none',
        backgroundColor: theme.canvas.palette.primary.main,
        color: typeColors.inverse,
        '.wd-icon-fill, .wd-icon-accent, .wd-icon-accent2': {
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
        '.wd-icon-background ~ .wd-icon-accent, .wd-icon-background ~ .wd-icon-accent2': {
          fill: iconColors.active,
        },
        '&:hover, &[aria-selected=true]': {
          backgroundColor: theme.canvas.palette.primary.lightest,
          '.wd-icon-fill, .wd-icon-accent, .wd-icon-accent2': {
            fill: iconColors.hover,
          },
        },
        '&:focus': {
          '.wd-icon-background ~ .wd-icon-accent, .wd-icon-background ~ .wd-icon-accent2': {
            fill: iconColors.active,
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
          '&:hover, &[aria-selected=true]': {
            '.wd-icon-background ~ .wd-icon-accent, .wd-icon-background ~ .wd-icon-accent2': {
              fill: iconColors.disabled,
            },
          },
        },
      },
    };
  },
  ({hasIcon}) => {
    if (hasIcon) {
      return {
        display: 'flex',
      };
    } else {
      return {};
    }
  }
);

export const MenuItem = createComponent('button')({
  displayName: 'Menu.Item',
  Component: ({model, children, ...elemProps}: MenuItemProps, ref, Element) => {
    const localModel = useModelContext(MenuModelContext, model);

    const props = useMenuItem(localModel, elemProps, ref);

    if ('production' !== process.env.NODE_ENV) {
      // ensure `hasIcon` is used when a child has an icon
      // eslint-disable-next-line react-hooks/rules-of-hooks
      const {elementRef, localRef} = useLocalRef(props.ref);
      props.ref = elementRef;
      // eslint-disable-next-line react-hooks/rules-of-hooks
      useMount(() => {
        if (localRef.current!.querySelector('svg') && !props.hasIcon) {
          console.warn(
            `A Menu.Item with an icon should have the 'hasIcon' prop set to true. This ensures correct rendering`
          );
        }
      });
    }

    return (
      <OverflowTooltip placement="left">
        <StyledItem minHeight={space.xl} as={Element} {...props}>
          {children}
        </StyledItem>
      </OverflowTooltip>
    );
  },
  subComponents: {
    Icon: SystemIcon,
    Text: styled('span')({}),
  },
});

export const useMenuItem = composeHooks(
  createHook((model: MenuModel, _?: React.Ref<any>, elemProps: {name?: string} = {}) => {
    return {
      role: 'menuitem',
    };
  }),
  useSelectionItem,
  useRovingFocus,
  useListRegisterItem
);
