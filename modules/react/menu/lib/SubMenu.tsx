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

export interface SubmenuProps
  extends MenuModelConfig,
    PropsWithModel<ReturnType<typeof useMenuModel>> {
  /**
   * The contents of the Menu. Can be `Menu` children or any valid elements.
   */
  children: React.ReactNode;
}

export const SubmenuPopper = createSubcomponent('div')({
  modelHook: useMenuModel,
  elemPropsHook: useMenuPopper,
})<ExtractProps<typeof Popper>>(({children, ...elemProps}) => {
  return (
    <Popper placement="right-start" popperOptions={defaultMenuPopperOptions} {...elemProps}>
      {children}
    </Popper>
  );
});

const useIntentTimer = (fn: Function, waitMs: number = 0): {start(): void; clear(): void} => {
  const timer = React.useRef() as React.MutableRefObject<number | undefined>;

  const start = () => {
    timer.current = window.setTimeout(fn, waitMs);
  };

  const clear = () => {
    window.clearTimeout(timer.current);
    timer.current = undefined;
  };

  // be sure to clear our timeout
  React.useEffect(() => {
    return () => {
      window.clearTimeout(timer.current);
    };
  }, [timer]);

  return {
    start,
    clear,
  };
};

export const useSubmenuTargetItem = composeHooks(
  subModelHook(model => (model as any).UNSTABLE_parentModel!, useMenuItemFocus),
  subModelHook(model => (model as any).UNSTABLE_parentModel!, useMenuItemArrowReturn),
  subModelHook(model => (model as any).UNSTABLE_parentModel!, useListItemRovingFocus),
  createElemPropsHook(useMenuModel)((model, ref) => {
    const elementRef = useForkRef(ref, model.state.targetRef);
    return {
      ref: elementRef,
    };
  }),
  subModelHook(model => (model as any).UNSTABLE_parentModel!, useListItemRegister),
  createElemPropsHook(useMenuModel)(model => {
    const currentTargetIdRef = React.useRef<string>();
    const mouseEnterTimer = useIntentTimer(() => {
      model.UNSTABLE_parentModel.events.goTo({id: currentTargetIdRef.current || ''});
      model.events.show(event);
    }, 300);
    return {
      onMouseDown(event: React.MouseEvent) {
        model.UNSTABLE_parentModel.events.goTo({id: event.currentTarget.getAttribute('data-id')!});
      },
      onMouseEnter(event: React.MouseEvent) {
        currentTargetIdRef.current = event.currentTarget.getAttribute('data-id')!;
        mouseEnterTimer.start();
      },
      onMouseLeave() {
        mouseEnterTimer.clear();
      },
      onClick(event: React.MouseEvent) {
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

export const SubmenuTargetItem = createSubcomponent('button')({
  modelHook: useMenuModel,
  elemPropsHook: useSubmenuTargetItem,
})(({children, ...elemProps}, Element) => {
  return (
    <StyledMenuItem as={Element} {...elemProps}>
      {typeof children === 'string' ? <MenuItem.Text>{children}</MenuItem.Text> : children}
      <MenuItem.Icon icon={chevronRightSmallIcon} />
    </StyledMenuItem>
  );
});

/**
 * `Submenu` should be put in place of a `Menu.Item`. It will render a menu item that is the target
 * for the submenu card.
 *
 * ```tsx
 * <Menu.Item>First Item</Menu.Item>
 * <Menu.Submenu>
 *   <Menu.Submenu.TargetItem>Second Item</Menu.Submenu.TargetItem>
 *   <Menu.Submenu.Popper>
 *     <Menu.Submenu.Card>
 *       <Menu.Submenu.List>
 *         <Menu.Submenu.Item data-id="first">First Sub Item</Menu.Submenu.Item>
 *         <Menu.Submenu.Item data-id="second">Second Sub Item</Menu.Submenu.Item>
 *       </Menu.Submenu.List>
 *     </Menu.Submenu.Card>
 *   </Menu.Submenu.Popper>
 * </Menu.Submenu>
 * </Menu.Item>Third Item</Menu.Item>
 * ```
 */
export const Submenu = createSubcomponent()({
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
     * or a render prop and `items`. It is recommended that the `items` comes from a nested
     * JavaScript object.
     */
    List: MenuList,
    /**
     * If the static API is used, a `data-id` prop should be used to identify the item. If you're
     * using the dynamic API, pass a `getId` and  `getTextValue` to the parent `Menu` the model.
     */
    Item: MenuItem,
    /**
     * The `Submenu.TargetItem` is similar to the `Menu.Item`, but represents both the target for
     * the submenu and the item in the menu list. This should only be used once per `<Menu.Submenu>`
     * component.
     */
    TargetItem: SubmenuTargetItem,
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
    Popper: SubmenuPopper,
  },
})<SubmenuProps>(({children, model: _model, ...props}, _Element, parentModel) => {
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
});
