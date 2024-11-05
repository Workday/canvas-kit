import * as React from 'react';
import {
  composeHooks,
  createContainer,
  createElemPropsHook,
  createModelHook,
  createSubcomponent,
  createSubModelElemPropsHook,
  ExtractProps,
} from '@workday/canvas-kit-react/common';

import {
  relatedActionsIcon,
  homeIcon,
  gearIcon,
  userIcon,
  viewTeamIcon,
  linkIcon,
  mediaMylearningIcon,
} from '@workday/canvas-system-icons-web';
import {
  defaultGetId,
  useListItemRegister,
  useListRenderItems,
  useOverflowListItemMeasure,
  useOverflowListMeasure,
  useOverflowListModel,
  useOverflowListTarget,
} from '@workday/canvas-kit-react/collection';
import {Menu, useMenuModel, useMenuTarget} from '@workday/canvas-kit-react/menu';
import {SecondaryButton, TertiaryButton} from '@workday/canvas-kit-react/button';

import {createStyles, CSProps, cssVar, handleCsProp} from '@workday/canvas-kit-styling';
import {Tooltip} from '@workday/canvas-kit-react/tooltip';
import {system} from '@workday/canvas-tokens-web';

const sidebarItems = [
  {id: '1', text: 'Home', icon: homeIcon},
  {id: '2', text: 'Profile', icon: userIcon},
  {id: '3', text: 'My Team', icon: viewTeamIcon},
  {id: '4', text: 'External Links', icon: linkIcon},
  {id: '5', text: 'Saved', icon: mediaMylearningIcon},
  {id: '6', text: 'Settings', icon: gearIcon},
];

const useOverflowSidebar = createModelHook({
  defaultConfig: {
    ...useOverflowListModel.defaultConfig,
    /**
     * Optional id for the whole `ActionBar` group. If not provided, a unique id will be created.
     * @default useUniqueId()
     */
    id: '',

    orientation: 'vertical' as typeof useOverflowListModel.defaultConfig.orientation,
    menuConfig: {} as Partial<typeof useMenuModel.defaultConfig>,
    /**
     * The maximum number of actions that can be visible.
     * Must be greater than 1 and less than items.length.
     * @default 3
     */
    maximumVisible: 3,
  },
  requiredConfig: useOverflowListModel.requiredConfig,
})(config => {
  const getId = config.getId || defaultGetId;

  const items = config.items;

  const model = useOverflowListModel(
    useOverflowListModel.mergeConfig(config, {
      orientation: 'vertical',
      items,
      shouldVirtualize: false,
    })
  );

  let hiddenIds = model.state.hiddenIds;
  let nonInteractiveIds = model.state.nonInteractiveIds;
  const totalSize = model.state.items.length;

  // Only show maximumVisible buttons
  const maximumVisible: number =
    !config.maximumVisible || config.maximumVisible < 1
      ? 3 // should fallback to default value
      : config.maximumVisible > totalSize
      ? totalSize
      : config.maximumVisible;

  if (totalSize - hiddenIds.length >= maximumVisible) {
    hiddenIds = items.slice(maximumVisible, totalSize).map(getId);
  }

  // Always show the first button and make sure it is interactive
  if (totalSize - hiddenIds.length === 0) {
    hiddenIds = items.slice(1, totalSize).map(getId);
  }

  nonInteractiveIds = hiddenIds;

  const state = {
    ...model.state,
    hiddenIds,
    nonInteractiveIds,
    orientation: config.orientation || 'horizontal',
  };

  const overflowItems = React.useMemo(
    () => (items ? items.filter(item => state.hiddenIds.includes(getId(item))) : undefined),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [state.hiddenIds, items]
  );

  const events = {
    ...model.events,
  };

  const menu = useMenuModel(
    useMenuModel.mergeConfig(config.menuConfig as Required<typeof config.menuConfig>, {
      id: `act-bar-menu-${model.state.id}`,
      items: overflowItems,
      nonInteractiveIds: state.nonInteractiveIds.filter(key => !state.hiddenIds.includes(key)),
      onSelect() {
        menu.events.hide();
      },
      onShow() {
        // Always select the first item when the menu is opened
        menu.events.goToFirst();
      },
    })
  );

  return {
    ...model,
    state,
    events,
    menu,
  };
});

interface SidebarItemProps {
  children?: React.ReactNode;
  'data-id'?: string;
}

const useSidebarItem = composeHooks(useOverflowListItemMeasure, useListItemRegister);

const SidebarItem = createSubcomponent(TertiaryButton)({
  displayName: 'Sidebar.Item',
  modelHook: useOverflowSidebar,
  elemPropsHook: useSidebarItem,
})<SidebarItemProps>(({...elemProps}, Element) => {
  return <Element {...elemProps} />;
});

const useSidebarOverflowButton = composeHooks(
  createElemPropsHook(useOverflowSidebar)(() => ({
    'aria-haspopup': true,
  })),
  useOverflowListTarget,
  createSubModelElemPropsHook(useOverflowSidebar)(m => m.menu, useMenuTarget)
);

const SidebarOverflowButton = createSubcomponent('button')({
  displayName: 'Sidebar.OverflowButton',
  modelHook: useOverflowSidebar,
  elemPropsHook: useSidebarOverflowButton,
})<ExtractProps<typeof SecondaryButton>>(({...elemProps}, Element) => {
  return (
    <SecondaryButton
      as={Element}
      icon={relatedActionsIcon}
      size="small"
      cs={{flex: 0, overflow: 'visible'}}
      {...elemProps}
    />
  );
});

interface SidebarListProps<T = any> extends CSProps {
  children: ((item: T, index: number) => React.ReactNode) | React.ReactNode;

  overflowButton?: React.ReactNode;
}

const resposiveListStyles = createStyles({
  display: 'flex',
  gap: system.space.x3,
  depth: system.depth[1],
  background: system.color.bg.default,
  border: `solid 1px ${cssVar(system.color.border.container)}`,
  position: 'relative',
  bottom: 0,
  left: 0,
  flexDirection: 'column',
  width: '60px',
  alignItems: 'center',
  right: 0,
  '> *': {
    flex: '0 0 auto',
  },
});

const useSidebarList = useOverflowListMeasure;

const SidebarList = createSubcomponent('div')({
  displayName: 'Sidebar.List',
  modelHook: useOverflowSidebar,
  elemPropsHook: useSidebarList,
})<SidebarListProps>(({children, overflowButton, ...elemProps}, Element, model) => {
  return (
    <Element {...handleCsProp(elemProps, resposiveListStyles)}>
      {useListRenderItems(model, children)}
      {overflowButton}
    </Element>
  );
});

interface SidebarProps {
  /**
   * The contents of the ActionBar. Can be `ActionBar` children or any valid elements.
   */
  children: React.ReactNode;
}

const Sidebar = createContainer()({
  displayName: 'ActionBar',
  modelHook: useOverflowSidebar,
  subComponents: {
    List: SidebarList,
    Item: SidebarItem,
    OverflowButton: SidebarOverflowButton,
    Menu,
  },
})<SidebarProps>(({children}, _, model) => {
  return <Menu model={model.menu}>{children}</Menu>;
});

const containerStyles = createStyles({
  boxSizing: 'border-box',
  maxHeight: '100%',
  display: 'flex',
  flexDirection: 'row',
  height: '90vh',
});

const menuCardStyles = createStyles({
  maxHeight: 200,
  maxWidth: 300,
});

export const OverflowVerticalList = () => {
  // useTheme is filling in the Canvas theme object if any keys are missing

  const model = useOverflowSidebar({
    items: sidebarItems,
    getId: item => item.id,
    getTextValue: item => item.text,
    maximumVisible: 5,
  });

  return (
    <>
      <div className={containerStyles}>
        <Sidebar model={model}>
          <Sidebar.List
            overflowButton={
              <Tooltip title="More Actions">
                <Sidebar.OverflowButton />
              </Tooltip>
            }
          >
            {(item: any, index) => (
              <Tooltip title={item.text}>
                <Sidebar.Item
                  icon={item.icon}
                  data-id={item.id}
                  onClick={() => console.log(item.id)}
                ></Sidebar.Item>
              </Tooltip>
            )}
          </Sidebar.List>
          <Sidebar.Menu.Popper>
            <Sidebar.Menu.Card cs={menuCardStyles}>
              <Sidebar.Menu.List>
                {(item: any) => (
                  <Sidebar.Menu.Item onClick={() => console.log(item.id)}>
                    {item.text}
                  </Sidebar.Menu.Item>
                )}
              </Sidebar.Menu.List>
            </Sidebar.Menu.Card>
          </Sidebar.Menu.Popper>
        </Sidebar>
      </div>
    </>
  );
};
