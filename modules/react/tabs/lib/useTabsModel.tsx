import React from 'react';

import {
  defaultGetId,
  useListModel,
  useOverflowListModel,
} from '@workday/canvas-kit-react/collection';
import {createModelHook, slugify, useModalityType} from '@workday/canvas-kit-react/common';
import {useMenuModel} from '@workday/canvas-kit-react/menu';

/**
 * This constant is used as the stable identifier for the overflow button in the tabs collection.
 * It uses a `__` prefix to avoid conflicts with user-provided item IDs.
 */
export const TABS_OVERFLOW_BUTTON_ID = '__tabs-overflow__';

/**
 * The TabsModel extends the [Collection
 * System](/get-started/for-developers/guides/collection-api/). Tabs have tab items and
 * panels. Tabs can be overflowed if there isn't enough room to render and will overflow to a
 * {@link MenuModel} sub-model.
 *
 * ```tsx
 * const model = useTabsModel({
 *   onSelect(data) {
 *     console.log('Selected Tab', data)
 *   }
 * })
 *
 * <Tabs model={model}>{Tabs child components}</Tabs>
 * ```
 */
export const useTabsModel = createModelHook({
  defaultConfig: {
    ...useOverflowListModel.defaultConfig,
    /**
     * Optional id for the whole `Tabs` group. The `aria-controls` of the `Tab.Item` and `id` of the
     * `Tab.Panel` will automatically derived from this id. If not provided, a unique id will be
     * created.
     * @default useUniqueId()
     */
    id: '',
    /**
     * An initially selected tab. This value must match the `name` of the `Tab.Item` component. If
     * not provided, the first tab will be selected.
     */
    initialTab: '',
    /**
     * The default Tabs sub-components only handle rendering of tabs in a horizontal orientation, but
     * the sub-components could be replaced to handle vertical orientations.
     * @default 'horizontal'
     */
    orientation: 'horizontal' as typeof useOverflowListModel.defaultConfig.orientation,
    menuConfig: {} as typeof useMenuModel.TConfig,
  },
  requiredConfig: useOverflowListModel.requiredConfig,
  contextOverride: useOverflowListModel.Context,
})(config => {
  const initialSelectedRef = React.useRef(config.initialTab);
  const getId = config.getId || defaultGetId;
  const modality = useModalityType();

  // When using dynamic items, append a synthetic overflow button item to the
  // items array. This ensures the overflow button is included in the navigation
  // sequence for roving tabindex. The overflow button component will handle
  // conditional rendering (not showing when there are no hidden items).
  // The overflow button is NOT included in itemSizeCache (measured separately
  // via setOverflowTargetSize), so it won't be incorrectly hidden.
  const itemsWithOverflowButton = React.useMemo(() => {
    if (config.items?.length) {
      // Create a synthetic item for the overflow button at the end of the list
      const overflowItem = {id: TABS_OVERFLOW_BUTTON_ID, text: 'More'};
      return [...config.items, overflowItem];
    }
    return config.items;
  }, [config.items]);

  // Track whether the overflow button should be non-interactive based on previous
  // render's hiddenIds. We use a ref because hiddenIds isn't available until after
  // the model is created, but we need to pass nonInteractiveIds to the model config.
  // On first render, assume non-interactive (no overflow calculated yet).
  // On subsequent renders, use the previous hiddenIds.length to determine.
  const prevHiddenIdsLengthRef = React.useRef(0);
  const [, setNonInteractiveTick] = React.useState(0);

  const overflowButtonNonInteractive =
    !!config.items?.length && prevHiddenIdsLengthRef.current === 0;

  // Compute nonInteractiveIds to pass to the model, including overflow button when appropriate
  const nonInteractiveIdsForModel = React.useMemo(() => {
    const baseIds = config.nonInteractiveIds || [];
    if (overflowButtonNonInteractive) {
      return [...baseIds, TABS_OVERFLOW_BUTTON_ID];
    }
    return baseIds;
  }, [config.nonInteractiveIds, overflowButtonNonInteractive]);

  // Stores the ID of a tab that should receive focus after the menu closes.
  // This is used when selecting a tab from the overflow menu - we want focus
  // to go to the newly selected tab, not back to the overflow button.
  const pendingFocusTabIdRef = React.useRef<string | null>(null);
  const pendingFocusRafOuterRef = React.useRef(0);
  const pendingFocusRafInnerRef = React.useRef(0);

  React.useLayoutEffect(() => {
    return () => {
      cancelAnimationFrame(pendingFocusRafOuterRef.current);
      cancelAnimationFrame(pendingFocusRafInnerRef.current);
    };
  }, []);

  const model = useOverflowListModel(
    useOverflowListModel.mergeConfig(config, {
      items: itemsWithOverflowButton,
      getId,
      nonInteractiveIds: nonInteractiveIdsForModel,
      shouldCalculateOverflow: modality !== 'touch',
      orientation: config.orientation || 'horizontal',
      onRegisterItem(data) {
        if (!initialSelectedRef.current) {
          initialSelectedRef.current = data.id;
          events.select({id: initialSelectedRef.current});
        }
      },
      initialSelectedIds: config.initialTab
        ? [config.initialTab]
        : config.items?.length
          ? [getId(config.items![0])]
          : [],
      shouldVirtualize: false,
    })
  );

  // Update the ref after each render so the next render knows the current hiddenIds.length.
  // If hiddenIds.length changed (e.g. overflow just calculated), force a re-render so
  // we pass the correct nonInteractiveIds and the overflow button is not stuck disabled.
  React.useLayoutEffect(() => {
    const nextLen = model.state.hiddenIds.length;
    if (prevHiddenIdsLengthRef.current !== nextLen) {
      prevHiddenIdsLengthRef.current = nextLen;
      setNonInteractiveTick(t => t + 1);
    } else {
      prevHiddenIdsLengthRef.current = nextLen;
    }
  }, [model.state.hiddenIds.length]);

  // When the cursor is on an item that isn't in the DOM, move it to a visible one so the
  // roving tabindex lands on a focusable element. This covers: (1) cursor on a hidden tab when
  // only "More" is visible, and (2) cursor on the overflow button when we widen and it unmounts.
  React.useLayoutEffect(() => {
    const {cursorId, hiddenIds, items} = model.state;
    if (!cursorId) {
      return;
    }
    const currentCursorId = typeof cursorId === 'string' ? cursorId : (cursorId.slice(-1)[0] ?? '');
    const cursorOnHidden = currentCursorId ? hiddenIds.includes(currentCursorId) : false;
    const cursorOnOverflowWhenNoOverflow =
      currentCursorId === TABS_OVERFLOW_BUTTON_ID && hiddenIds.length === 0;
    if (cursorOnHidden) {
      // Move to first visible item (including overflow button when it's the only one visible)
      const firstVisible = items.find(item => !hiddenIds.includes(item.id));
      if (firstVisible) {
        model.events.goTo({id: firstVisible.id});
      }
    } else if (cursorOnOverflowWhenNoOverflow) {
      // Overflow button unmounted; move to selected tab or first tab (not the overflow button)
      const selectedIds = model.state.selectedIds;
      const selectedId =
        selectedIds !== 'all' && Array.isArray(selectedIds) && selectedIds.length
          ? selectedIds[0]
          : undefined;
      const firstVisibleTab = items.find(
        item => item.id !== TABS_OVERFLOW_BUTTON_ID && !hiddenIds.includes(item.id)
      );
      const targetId =
        selectedId && !hiddenIds.includes(selectedId) ? selectedId : firstVisibleTab?.id;
      if (targetId) {
        model.events.goTo({id: targetId});
      }
    }
    // Use field-level deps instead of `model.state` so this does not re-run on every model update.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    model.state.cursorId,
    model.state.hiddenIds,
    model.state.items,
    model.state.selectedIds,
    model.events,
  ]);

  const panels = useListModel();

  const state = {
    ...model.state,
    getId,
    orientation: config.orientation || 'horizontal',
    /**
     * A list of panels. Uses `ListModel`
     */
    panels: panels.state.items,
    /**
     * A React.Ref of the current item index. A ref is used to allow for updating outside the normal
     * React state cycle to ensure accurate index tracking as items are registered within the same
     * state setting phase.
     */
    panelIndexRef: panels.state.indexRef,
  };

  const overflowItems = React.useMemo(
    () =>
      config.items ? config.items.filter(item => state.hiddenIds.includes(getId(item))) : undefined,
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [state.hiddenIds, config.items]
  );

  const events = {
    ...model.events,
    /**
     * This event registers panels with state.panels. Called when a panel is mounted.
     */
    registerPanel: panels.events.registerItem,
    /**
     * This event unregisters panels with state.panels. Called when a panel is unmounted.
     */
    unregisterPanel: panels.events.unregisterItem,
  };

  const mergedMenuConfig = useMenuModel.mergeConfig(config.menuConfig, {
    id: `menu-${model.state.id}`,
    items: overflowItems,
    // `getId`/`getTextValue` aren't callbacks or guards, so `mergeConfig` would let these
    // unconditionally clobber a `menuConfig.getId`/`getTextValue` override. Fall back to the
    // top-level Tabs config only when the caller hasn't set one on `menuConfig` directly.
    getId: config.menuConfig?.getId || getId,
    getTextValue: config.menuConfig?.getTextValue || config.getTextValue,
    nonInteractiveIds: state.nonInteractiveIds.filter(key => !state.hiddenIds.includes(key)),
    onSelect(data) {
      // Store the tab ID to focus after the menu closes and React re-renders
      pendingFocusTabIdRef.current = data.id;

      // Update state: select the tab, move cursor, then close menu
      events.select(data);
      model.events.goTo({id: data.id});
      menu.events.hide();

      // Focus the selected tab AFTER React has re-rendered.
      // Double rAF is required because useReturnFocus restores focus to the overflow
      // button on a single rAF after hide; the second frame runs after that restore.
      pendingFocusRafOuterRef.current = requestAnimationFrame(() => {
        pendingFocusRafInnerRef.current = requestAnimationFrame(() => {
          const tabId = pendingFocusTabIdRef.current;
          if (tabId) {
            const tabElement = document.querySelector<HTMLElement>(
              `[data-focus-id="${slugify(`${model.state.id}-${tabId}`)}"]`
            );
            if (tabElement) {
              tabElement.focus();
            }
            pendingFocusTabIdRef.current = null;
          }
        });
      });
    },
    onShow() {
      // Always select the first item when the menu is opened
      menu.events.goToFirst();
    },
  });

  const menu = useMenuModel(mergedMenuConfig);

  return {
    ...model,
    state,
    events,
    menu,
  };
});
