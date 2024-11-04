import * as React from 'react';
import {
  composeHooks,
  createContainer,
  createElemPropsHook,
  createModelHook,
  createSubcomponent,
  createSubModelElemPropsHook,
  ExtractProps,
  getTheme,
  styled,
  StyledType,
} from '@workday/canvas-kit-react/common';

import {
  relatedActionsIcon,
  homeIcon,
  gearIcon,
  inboxIcon,
  infoIcon,
  folderCloseIcon,
} from '@workday/canvas-system-icons-web';

import colors, {commonColors} from '@workday/canvas-colors-web';
import {
  defaultGetId,
  useListItemRegister,
  useListRenderItems,
  useOverflowListItemMeasure,
  useOverflowListMeasure,
  useOverflowListModel,
  useOverflowListTarget,
} from '../../../collection';
import {Menu, useMenuModel, useMenuTarget} from '../../../menu';
import {SecondaryButton, SecondaryButtonProps, TertiaryButton} from '../../../button';
import {Flex} from '../../../layout';
import {space} from '../../../tokens';

const sidebarItems = [
  {id: '1', text: 'First Action', icon: homeIcon},
  {id: '2', text: 'Second Action', icon: gearIcon},
  {id: '3', text: 'Third Action', icon: inboxIcon},
  {id: '4', text: 'Fourth Action', icon: infoIcon},
  {id: '5', text: 'Fifth Action', icon: folderCloseIcon},
  {id: '6', text: 'Sixth Action', icon: homeIcon},
  {id: '7', text: 'Seventh Action', icon: gearIcon},
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
    maximumVisible: 4,
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

  // console.log(model.state.orientation);

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

  // console.log('max visible', maximumVisible);
  // console.log('totalSize', totalSize);
  // console.log('hiddenIdsLeng', model.state.hiddenIds);
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
})<SidebarItemProps>((elemProps, Element) => {
  return <Element {...elemProps} />;
});

interface ActionBarOverflowButtonProps extends SecondaryButtonProps {
  'aria-label': string;
}

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
})<ActionBarOverflowButtonProps>((elemProps, Element) => {
  return (
    <SecondaryButton
      as={Element}
      icon={relatedActionsIcon}
      cs={{flex: 0, overflow: 'visible'}}
      {...elemProps}
    />
  );
});

interface SidebarListProps<T = any> extends Omit<ExtractProps<typeof Flex, never>, 'children'> {
  children: ((item: T, index: number) => React.ReactNode) | React.ReactNode;

  overflowButton?: React.ReactNode;
}

const ResponsiveList = styled(Flex)<SidebarListProps & StyledType>(({theme}) => {
  const {canvas: canvasTheme} = getTheme(theme);
  return {
    '> *': {
      flex: '0 0 auto',
      // alignSelf: 'start',
    },
    [canvasTheme.breakpoints.down('s')]: {
      padding: space.s,
      '> *': {
        flex: '0 0 auto',
        // alignSelf: 'start',
      },
    },
  };
});

const useSidebarList = useOverflowListMeasure;

const SidebarList = createSubcomponent('div')({
  displayName: 'Sidebar.List',
  modelHook: useOverflowSidebar,
  elemPropsHook: useSidebarList,
})<SidebarListProps>(({children, overflowButton, ...elemProps}, Element, model) => {
  return (
    <ResponsiveList
      as={Element}
      gap="xs"
      depth={1}
      background={commonColors.background}
      borderTop={`solid 1px ${colors.soap400}`}
      padding={`${space.s} ${space.xl} `}
      position="fixed"
      bottom={0}
      left={0}
      flexDirection="column"
      width="60px"
      alignItems="center"
      right={0}
      {...elemProps}
    >
      {useListRenderItems(model, children)}
      {overflowButton}
    </ResponsiveList>
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

export const SidebarOverflowExample = () => {
  // useTheme is filling in the Canvas theme object if any keys are missing

  const model = useOverflowSidebar({
    items: sidebarItems,
    getId: item => item.id,
    getTextValue: item => item.text,
    maximumVisible: 6,
  });

  return (
    <>
      <div
        style={{
          boxSizing: 'border-box',
          maxHeight: '100%',
          display: 'flex',
          flexDirection: 'row',
          height: '90vh',
        }}
      >
        <Sidebar model={model}>
          <Sidebar.List
            position="relative"
            as="div"
            // minHeight="90vh"
            overflowButton={<Sidebar.OverflowButton aria-label="More actions" />}
          >
            {(item: any, index) => (
              <Sidebar.Item
                icon={item.icon}
                data-id={item.id}
                aria-label={item.text}
                onClick={() => console.log(item.id)}
              ></Sidebar.Item>
            )}
          </Sidebar.List>
          <Sidebar.Menu.Popper>
            <Sidebar.Menu.Card maxWidth={300} maxHeight={200}>
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
        <div style={{border: '1px solid black', width: '60px'}}></div>
      </div>
    </>
  );
};
