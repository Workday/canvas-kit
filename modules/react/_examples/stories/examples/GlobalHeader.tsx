import * as React from 'react';
import {
  AccessibleHide,
  AriaLiveRegion,
  composeHooks,
  createComponent,
  createElemPropsHook,
  createSubcomponent,
  ExtractProps,
  useUniqueId,
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
import {StyledMenuItem} from '@workday/canvas-kit-react/menu';
import {SystemIcon} from '@workday/canvas-kit-react/icon';
import {CountBadge} from '@workday/canvas-kit-react/badge';

interface HeaderItemProps extends FlexProps {}
interface LiveCountBadgeProps extends FlexProps {
  cnt: number;
}

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
  menuButtonStyles: createStyles({
    textDecoration: 'none',
    color: colors.blackPepper500,
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
  actionButtonStyles: createStyles({
    gap: space.s,
    margin: space.s,
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
  const [notifications, setNotifications] = React.useState(0);

  function handleAdd() {
    setNotifications(prev => prev + 1);
  }

  function handleClear() {
    setNotifications(0);
  }

  return (
    <>
      <GlobalHeader>
        <GlobalHeader.Item>
          <Tooltip title="Global Navigation" type="describe">
            <TertiaryButton icon={justifyIcon} cs={styleOverrides.menuButtonStyles}>
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
          <Autocomplete aria-label="Search Workday" />
        </GlobalHeader.Item>
        <GlobalHeader.Item>
          <Tooltip title="Assistant">
            <TertiaryButton icon={assistantIcon} />
          </Tooltip>

          <NotificationLiveBadge cnt={notifications} />

          <Tooltip title="My Tasks">
            <TertiaryButton icon={inboxIcon} />
          </Tooltip>
          <Tooltip title="Profile">
            <Avatar />
          </Tooltip>
        </GlobalHeader.Item>
      </GlobalHeader>
      <Flex cs={styleOverrides.actionButtonStyles}>
        <SecondaryButton onClick={handleAdd}>Add notification</SecondaryButton>
        <TertiaryButton onClick={handleClear}>Clear</TertiaryButton>
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
  Component: (props, ref) => (
    <header className={styleOverrides.headerWrapper} ref={ref} {...props} />
  ),
  subComponents: {Item: GlobalHeaderItem},
});

const Autocomplete = createComponent('div')({
  displayName: 'Autocomplete',
  Component: props => {
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
            {...props}
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

const NotificationLiveBadge = createComponent('span')({
  displayName: 'NotificationLiveBadge',
  Component: ({cnt = 0, ...props}: LiveCountBadgeProps) => {
    const btnId = useUniqueId();
    const badgeId = useUniqueId();

    return (
      <Flex cs={styleOverrides.notificationContainerStyles}>
        <Tooltip title="Notifications">
          <TertiaryButton
            id={btnId}
            icon={notificationsIcon}
            aria-describedby={cnt > 0 ? badgeId : undefined}
            {...props}
          />
        </Tooltip>
        <AriaLiveRegion aria-labelledby={btnId}>
          {cnt > 0 && (
            <>
              <CountBadge
                id={badgeId}
                count={cnt}
                limit={100}
                cs={styleOverrides.countBadgeStyles}
              />
              <AccessibleHide>New</AccessibleHide>
            </>
          )}
        </AriaLiveRegion>
      </Flex>
    );
  },
});
