import * as React from 'react';
import {
  composeHooks,
  createComponent,
  createElemPropsHook,
  createSubcomponent,
  ExtractProps,
} from '@workday/canvas-kit-react/common';
import {colors, depth, space, type} from '@workday/canvas-kit-react/tokens';
import {system} from '@workday/canvas-tokens-web';
import {createStyles, cssVar, px2rem} from '@workday/canvas-kit-styling';
import {
  notificationsIcon,
  inboxIcon,
  justifyIcon,
  assistantIcon,
  searchIcon,
} from '@workday/canvas-system-icons-web';

import {SecondaryButton, TertiaryButton} from '@workday/canvas-kit-react/button';
import {Avatar} from '@workday/canvas-kit-react/avatar';
import {Flex, FlexProps} from '@workday/canvas-kit-react/layout';
import {Tooltip} from '@workday/canvas-kit-react/tooltip';
import {Combobox, useComboboxModel, useComboboxInput} from '@workday/canvas-kit-react/combobox';
import {InputGroup, TextInput} from '@workday/canvas-kit-react/text-input';
import {StyledMenuItem, MenuItemProps} from '@workday/canvas-kit-react/menu';
import {SystemIcon} from '@workday/canvas-kit-react/icon';
import {CountBadge} from '@workday/canvas-kit-react/badge';

interface HeaderItemProps extends FlexProps {}

const tasks = ['Request Time Off', 'Create Expense Report', 'Change Benefits'];

function negate(value: string, fallback?: string) {
  return `calc(${cssVar(value, fallback)} * -1)`;
}

const styleOverrides = {
  headerWrapper: createStyles({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    boxSizing: 'border-box',
    ...type.levels.subtext.large,
    WebkitFontSmoothing: 'antialiased',
    MozOsxFontSmoothing: 'grayscale',
    backgroundColor: colors.frenchVanilla100,
    ...depth[1],
    padding: space.xxs,
  }),
  inputGroupInner: createStyles({
    marginLeft: '1rem',
    width: px2rem(20),
    transition: 'opacity 100ms ease',
  }),
  comboboxInput: createStyles({
    borderRadius: px2rem(1000),
    width: '20rem',
  }),
  comboboxMenuList: createStyles({
    maxHeight: px2rem(200),
  }),
  notificationContainerStyles: createStyles({
    boxSizing: 'border-box',
    position: 'relative',
  }),
  countBadgeStyles: createStyles({
    boxSizing: 'border-box',
    position: 'absolute',
    top: negate(system.space.x1),
    insetInlineEnd: negate(system.space.x1),
  }),
};

const useAutocompleteInput = composeHooks(
  createElemPropsHook(useComboboxModel)(model => {
    return {
      onKeyPress(event: React.KeyboardEvent) {
        model.events.show(event);
      },
    };
  }),
  useComboboxInput
);

const AutoCompleteInput = createSubcomponent(TextInput)({
  modelHook: useComboboxModel,
  elemPropsHook: useAutocompleteInput,
})<ExtractProps<typeof Combobox.Input, never>>((elemProps, Element) => {
  return <Combobox.Input as={Element} {...elemProps} />;
});

export const Basic = () => {
  return (
    <>
      <GlobalHeader>
        <GlobalHeader.Item>
          <Tooltip title="Global Navigation" type="describe">
            <TertiaryButton aria-label="menu" icon={justifyIcon}>
              MENU
            </TertiaryButton>
          </Tooltip>
          <Tooltip title="Workday Home">
            <TertiaryButton>
              <img src="https://design.workday.com/images/ck-dub-logo-blue.svg" alt="" />
            </TertiaryButton>
          </Tooltip>
        </GlobalHeader.Item>
        <GlobalHeader.Item margin="auto" width="100%" maxWidth={`calc(${space.xxxl} * 6)`}>
          <Autocomplete />
        </GlobalHeader.Item>
        <GlobalHeader.Item>
          <Tooltip title="Assistant">
            <TertiaryButton icon={assistantIcon} />
          </Tooltip>

          <span className={styleOverrides.notificationContainerStyles}>
            <Tooltip title="Notifications">
              <TertiaryButton icon={notificationsIcon} />
            </Tooltip>
            <CountBadge count={3} limit={100} cs={styleOverrides.countBadgeStyles} />
          </span>

          <Tooltip title="My Tasks">
            <TertiaryButton icon={inboxIcon} />
          </Tooltip>
          <Tooltip title="Profile">
            <Avatar />
          </Tooltip>
        </GlobalHeader.Item>
      </GlobalHeader>
      <Flex gap="s" margin="s">
        <SecondaryButton>Add notification</SecondaryButton>
        <TertiaryButton>Clear</TertiaryButton>
      </Flex>
    </>
  );
};

const GlobalHeaderItem = createComponent('div')({
  displayName: 'GlobalHeader.Item',
  Component: ({gap = 's', ...props}: HeaderItemProps, ref) => (
    <Flex gap={gap} alignItems="center" marginX={space.xs} ref={ref} {...props} />
  ),
});

const GlobalHeader = createComponent('header')({
  displayName: 'GlobalHeader',
  Component: (props, ref, Element) => (
    <header className={styleOverrides.headerWrapper} ref={ref} {...props} />
  ),
  subComponents: {Item: GlobalHeaderItem},
});

const Autocomplete = createComponent('div')({
  displayName: 'Autocomplete',
  Component: (props, ref, Element) => {
    const [searchText, setSearchText] = React.useState('');
    const filteredTasks = tasks.filter(i => {
      if (searchText.trim() === '' || typeof searchText !== 'string') {
        return true;
      }
      return i.toLowerCase().includes(searchText.trim().toLowerCase());
    });

    function handleChange(e) {
      setSearchText(e.target.value);
    }

    return (
      <Combobox>
        <InputGroup>
          <InputGroup.InnerStart cs={styleOverrides.inputGroupInner}>
            <SystemIcon icon={searchIcon} />
          </InputGroup.InnerStart>
          <InputGroup.Input
            as={AutoCompleteInput}
            cs={styleOverrides.comboboxInput}
            onChange={handleChange}
            value={searchText}
          />
        </InputGroup>
        <Combobox.Menu.Popper>
          <Combobox.Menu.Card>
            {filteredTasks.length === 0 ? (
              <StyledMenuItem as="span">No Results Found</StyledMenuItem>
            ) : (
              filteredTasks.map(i => (
                <Combobox.Menu.List cs={styleOverrides.comboboxMenuList}>
                  <Combobox.Menu.Item key={i}>{i}</Combobox.Menu.Item>
                </Combobox.Menu.List>
              ))
            )}
          </Combobox.Menu.Card>
        </Combobox.Menu.Popper>
      </Combobox>
    );
  },
});
