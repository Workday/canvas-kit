/// <reference path="../../../../../typings.d.ts" />
/** @jsx jsx */
import {jsx} from '@emotion/core';
import {StaticStates} from '@workday/canvas-kit-labs-react-core';
import {ComponentStatesTable, withSnapshotsEnabled} from '../../../../../utils/storybook';
import {uploadCloudIcon, extLinkIcon, userIcon} from '@workday/canvas-system-icons-web';
import {Menu, MenuItem, MenuItemProps} from '../index';

// @ts-ignore: Cannot find module error
import testAvatar from './test-avatar.png';
// eslint-disable-next-line no-empty-function
const noop = () => {};

export default withSnapshotsEnabled({
  title: 'Testing|React/Labs/Menu',
  component: Menu,
  parameters: {
    chromatic: {
      diffThreshold: 0.3, // Chrome downsizes images non-deterministically. From testing, 0.28 is the minimum.
    },
  },
});

interface StoryMenuItemProps extends Omit<MenuItemProps, 'role'> {
  text: React.ReactNode;
}

const createMenuItems = (hasIcons?: boolean, isFocused?: boolean): StoryMenuItemProps[] => {
  return [
    {
      text: `First Item`,
      icon: hasIcons ? uploadCloudIcon : undefined,
      isFocused: isFocused,
    },
    {
      text: `Second Item (with a really really really long label)`,
      icon: undefined,
    },
    {
      text: `Third Item (with a really really really long label)`,
      icon: hasIcons ? uploadCloudIcon : undefined,
    },
    {
      text: `Fourth Item (with a really really really long label)`,
      icon: hasIcons ? uploadCloudIcon : undefined,
      secondaryIcon: hasIcons ? extLinkIcon : undefined,
    },
    {
      text: `Fifth Item (disabled)`,
      icon: undefined,
      secondaryIcon: hasIcons ? extLinkIcon : undefined,
      isDisabled: true,
    },
    {
      text: hasIcons ? (
        ''
      ) : (
        <em>
          Sixth Item (<b>with markup</b>)
        </em>
      ),
      icon: hasIcons ? userIcon : undefined,
      'aria-label': hasIcons ? `I am a label for screen readers` : undefined,
    },
    {
      text: `Seventh Item (with divider)`,
      icon: undefined,
      hasDivider: true,
    },
  ];
};
const buildItem = (item: StoryMenuItemProps, index: number) => (
  <MenuItem
    key={index}
    onClick={noop}
    icon={item.icon}
    isFocused={item.isFocused}
    secondaryIcon={item.secondaryIcon}
    isDisabled={item.isDisabled}
    hasDivider={item.hasDivider}
    aria-label={item['aria-label']}
  >
    {item.text}
  </MenuItem>
);

export const MenuItemStates = () => (
  <StaticStates>
    <ComponentStatesTable
      rowProps={[
        {label: 'Default', props: {}},
        {label: 'With Icons', props: {hasIcons: true}},
        {label: 'With Icons and Custom Width', props: {hasIcons: true, width: 200}},
      ]}
      columnProps={[{label: 'Default', props: {}}]}
    >
      {props => <Menu width={props.width}>{createMenuItems(props.hasIcons).map(buildItem)}</Menu>}
    </ComponentStatesTable>
  </StaticStates>
);
