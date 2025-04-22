import React from 'react';

import {chevronRightSmallIcon} from '@workday/canvas-system-icons-web';

import {
  composeHooks,
  createElemPropsHook,
  createSubcomponent,
  ExtractProps,
  PropsWithModel,
  subModelHook,
  useForkRef,
} from '@workday/canvas-kit-react/common';

import {useMenuModel} from './useMenuModel';
import {defaultMenuPopperOptions, useMenuPopper} from './MenuPopper';
import {MenuItem, StyledMenuItem, useMenuItemArrowReturn, useMenuItemFocus} from './MenuItem';
import {MenuCard} from './MenuCard';
import {MenuList} from './MenuList';
import {MenuDivider} from './MenuDivider';
import {MenuOption} from './MenuOption';
import {MenuGroup} from './MenuGroup';
import {useListItemRegister, useListItemRovingFocus} from '@workday/canvas-kit-react/collection';
import {Popper} from '@workday/canvas-kit-react/popup';

type MenuModelConfig = (typeof useMenuModel)['TConfig'];

export interface SubMenuProps
  extends MenuModelConfig,
    PropsWithModel<ReturnType<typeof useMenuModel>> {
  /**
   * The contents of the Menu. Can be `Menu` children or any valid elements.
   */
  children: React.ReactNode;
}

export const SubMenuPopper = createSubcomponent('div')({
  modelHook: useMenuModel,
  elemPropsHook: useMenuPopper,
})<ExtractProps<typeof Popper>>(({children, ...elemProps}) => {
  return (
    <Popper placement="right-start" popperOptions={defaultMenuPopperOptions} {...elemProps}>
      {children}
    </Popper>
  );
});

const useSubMenuTargetItem = composeHooks(
  subModelHook(model => (model as any).UNSTABLE_parentModel!, useMenuItemFocus),
  subModelHook(model => (model as any).UNSTABLE_parentModel!, useMenuItemArrowReturn),
  subModelHook(model => (model as any).UNSTABLE_parentModel!, useListItemRovingFocus),
  // useListItemRovingFocus,
  createElemPropsHook(useMenuModel)((model, ref) => {
    const elementRef = useForkRef(ref, model.state.targetRef);
    return {
      ref: elementRef,
    };
  }),
  subModelHook(model => (model as any).UNSTABLE_parentModel!, useListItemRegister),
  // useListItemRegister,
  createElemPropsHook(useMenuModel)(model => {
    return {
      onMouseDown(event: React.MouseEvent) {
        model.UNSTABLE_parentModel!.events.goTo({id: event.currentTarget.getAttribute('data-id')!});
      },
      onClick: (event: React.MouseEvent) => {
        // If we're wrapping a target component that doesn't handle ref forwarding, update the
        // `state.targetRef` manually. This ensures that custom target components don't need to handle
        // ref forwarding since ref forwarding is only really needed to programmatically open popups
        // around a target _before_ a user clicks. In that rare case, ref forwarding is required.
        if (!(model.state.targetRef.current instanceof Element)) {
          (model.state.targetRef as React.MutableRefObject<any>).current = event.currentTarget;
        }
        if (model.state.visibility !== 'hidden') {
          model.events.hide(event);
        } else {
          model.events.show(event);
        }
      },
      'data-has-children': true,
      onKeyDown(event: React.KeyboardEvent) {
        if (model.state.orientation === 'vertical') {
          // eslint-disable-next-line default-case
          switch (event.key) {
            case 'ArrowRight':
            case 'Enter':
            case ' ':
              model.events.show(event);
              break;
          }
        }
      },
    };
  })
);

const SubMenuTargetItem = createSubcomponent('button')({
  modelHook: useMenuModel,
  elemPropsHook: useSubMenuTargetItem,
})(({children, ...elemProps}, Element) => {
  return (
    <StyledMenuItem as={Element} {...elemProps}>
      {typeof children === 'string' ? <MenuItem.Text>{children}</MenuItem.Text> : children}
      <MenuItem.Icon icon={chevronRightSmallIcon} />
    </StyledMenuItem>
  );
});

/**
 * `Menu` is a combination of a popup and a list. It usually has some type of target element that
 * expands/collapses the menu and a `menu` role and and several `menuitem` roles. Focus is managed
 * using [roving tabindex](https://www.w3.org/WAI/ARIA/apg/practices/keyboard-interface/#kbd_roving_tabindex) for maximum
 * compatibility. A `Menu` can have two modes: `single` and `multiple`. This mode determines both
 * how many items can be selected as well as the default behavior when a `menuitem` is clicked. For
 * the `single` mode, selecting a `menuitem` will select and close the menu. For the `multiple`
 * mode, clicking a `menuitem` will toggle selection and will not close the menu.
 *
 * ```tsx
 * <Menu>
 *   <Menu.Target>Open</Menu.Target>
 *   <Menu.Popper>
 *     <Menu.Card>
 *       <Menu.List>
 *         <Menu.Item data-id="first">First Item</Menu.Item>
 *         <Menu.Item data-id="second">Second Item</Menu.Item>
 *       </Menu.List>
 *     </Menu.Card>
 *   </Menu.Popper>
 * </Menu>
 * ```
 */
export const SubMenu = createSubcomponent()({
  modelHook: useMenuModel,
  subComponents: {
    /**
     * The menu card is a non-semantic element used to give the dropdown menu its distinct visual
     * cue that the dropdown menu is floating above other content. A menu card usually contains a
     * menu list, but can also contain other elements like a header or footer.
     */
    Card: MenuCard,
    /**
     * The menu list follows the Collections API. A list can either contain static items
     * or a render prop and `items` to the model.
     *
     * ```tsx
     * const MyComponent = () => {
     *   const model = useMenuModel({
     *     items: [
     *       { id: 'first',  text: 'First Item' },
     *       { id: 'second', text: 'Second Item' },
     *     ]
     *   })
     *
     *   return (
     *     <Menu model={model}>
     *       <Menu.List>
     *         {(item) => <Menu.Item data-id={item.id}>{item.text}</Menu.Item>}
     *       </Menu.List>
     *     </Menu>
     *   )
     * }
     * ```
     */
    List: MenuList,
    /**
     * A `Menu.Item` has an optional `data-id` prop that identifies the item in the `Menu.List` and
     * will be passed to the optional `onSelect` callback of the `Menu` model. A `Menu.Item` can
     * contain any HTML. If more complex HTML is provided, add `data-text` to the `Menu.Item`
     * component if using the static API. If you're using the dynamic API, pass `getTextValue` to
     * the model.
     */
    Item: MenuItem,
    TargetItem: SubMenuTargetItem,
    Group: MenuGroup,
    /**
     * A `Menu.Option` is similar to the `Menu.Item`, but has a `role=option` and works with
     * `aria-activedescendant` and is selectable with a selected checkmark. It adds the
     * `aria-selected="true/false"` attribute. `Menu.Option` requires much more accessibility
     * behavior composed into the `Menu.Target` and `Menu.List` component. The `Combobox` and
     * `Select` components make use of the `Menu.Option`. See those components for a better idea of
     * how behavior is composed.
     */
    Option: MenuOption,
    Divider: MenuDivider,
    /**
     * The "Popper" of a menu. The popper will appear around the {@link MenuTarget Menu.Target}. It
     * renders a `div` element that is portalled to the `document.body` which is controlled by the
     * {@link PopupStack}. The `PopupStack` is not part of React. This means no extra props given to
     * this component will be forwarded to the `div` element, but the `ref` will be forwarded.
     */
    Popper: SubMenuPopper,
  },
})<SubMenuProps>(({children, model: _model, ...props}, _Element, parentModel) => {
  const model = useMenuModel(
    useMenuModel.mergeConfig(props, {
      getId: parentModel.getId,
      getTextValue: parentModel.getTextValue,
      UNSTABLE_parentModel: parentModel,
      mode: parentModel.state.mode,
      orientation: parentModel.state.orientation,
      onSelect(data) {
        parentModel.events.select(data);
      },
      onSelectAll() {
        parentModel.events.selectAll();
      },
    })
  );
  const Context = useMenuModel.Context;
  return <Context.Provider value={model}>{children}</Context.Provider>;
  // return <>{children}</>;
});
