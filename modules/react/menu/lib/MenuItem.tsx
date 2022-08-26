import * as React from 'react';

import {colors, iconColors, typeColors, space, type} from '@workday/canvas-kit-react/tokens';
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

const StyledItem = styled(Box.as('button'))<StyledType>(
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
        '*:hover .wd-icon-fill': {
          fill: `${iconColors.inverse}`,
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
      <StyledItem minHeight={space.xl} as={Element} {...elemProps}>
        {children}
      </StyledItem>
    </OverflowTooltip>
  );
});
