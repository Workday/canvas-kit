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
import {system} from '@workday/canvas-tokens-web';
import {calc, createStyles, px2rem} from '@workday/canvas-kit-styling';
import {
  notificationsIcon,
  inboxIcon,
  justifyIcon,
  assistantIcon,
  searchIcon,
} from '@workday/canvas-system-icons-web';

import {SecondaryButton, TertiaryButton} from '@workday/canvas-kit-react/button';
import {Avatar} from '@workday/canvas-kit-preview-react/avatar';
import {Flex, FlexProps} from '@workday/canvas-kit-react/layout';
import {LoadReturn} from '@workday/canvas-kit-react/collection';
import {Tooltip} from '@workday/canvas-kit-react/tooltip';
import {
  Combobox,
  useComboboxModel,
  useComboboxInput,
  useComboboxLoader,
} from '@workday/canvas-kit-react/combobox';
import {InputGroup, TextInput} from '@workday/canvas-kit-react/text-input';
import {StyledMenuItem} from '@workday/canvas-kit-react/menu';
import {SystemIcon} from '@workday/canvas-kit-react/icon';
import {CountBadge} from '@workday/canvas-kit-react/badge';

interface GlobalHeaderProps extends FlexProps {
  notifications: number;
}
interface LiveCountBadgeProps extends FlexProps {
  cnt: number;
}

const tasks = ['Request Time Off', 'Create Expense Report', 'Change Benefits'];

const styleOverrides = {
  headerWrapper: createStyles({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    boxSizing: 'border-box',
    ...system.type.subtext.large,
    WebkitFontSmoothing: 'antialiased',
    MozOsxFontSmoothing: 'grayscale',
    backgroundColor: system.color.bg.default,
    padding: system.space.x1,
  }),
  flexItems: createStyles({
    gap: system.space.x4,
    alignItems: 'center',
    marginX: system.space.x3,
  }),
  inputGroupInner: createStyles({
    marginLeft: '1rem',
    width: px2rem(20),
    transition: 'opacity 100ms ease',
  }),
  comboboxContainer: createStyles({
    margin: 'auto',
    width: '100%',
    maxWidth: calc.multiply(system.space.x20, 6),
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
    color: system.color.fg.strong,
  }),
  notificationContainerStyles: createStyles({
    boxSizing: 'border-box',
    position: 'relative',
  }),
  countBadgeStyles: createStyles({
    boxSizing: 'border-box',
    position: 'absolute',
    top: calc.negate(system.space.x1),
    insetInlineEnd: calc.negate(system.space.x1),
  }),
  actionButtonStyles: createStyles({
    gap: system.space.x4,
    margin: system.space.x4,
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
    <header>
      <GlobalHeader notifications={notifications} />
      <Flex cs={styleOverrides.actionButtonStyles}>
        <SecondaryButton onClick={handleAdd}>Add notification</SecondaryButton>
        <TertiaryButton onClick={handleClear}>Clear</TertiaryButton>
      </Flex>
    </header>
  );
};

export const GlobalHeader = createComponent('div')({
  displayName: 'GlobalHeader',
  Component: ({notifications, ...props}: GlobalHeaderProps) => (
    <div className={styleOverrides.headerWrapper}>
      <Flex cs={styleOverrides.flexItems}>
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
      </Flex>
      <Flex cs={styleOverrides.flexItems}>
        <Autocomplete aria-label="Search Workday" />
      </Flex>
      <Flex cs={styleOverrides.flexItems}>
        <Tooltip title="Assistant">
          <TertiaryButton icon={assistantIcon} />
        </Tooltip>

        <NotificationLiveBadge cnt={notifications} />

        <Tooltip title="My Tasks">
          <TertiaryButton icon={inboxIcon} />
        </Tooltip>
        <Tooltip title="Profile">
          <Avatar name="Logan McNeil" isDecorative />
        </Tooltip>
      </Flex>
    </div>
  ),
});

const Autocomplete = createComponent('div')({
  displayName: 'Autocomplete',
  Component: props => {
    const [searchText, setSearchText] = React.useState('');

    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
      setSearchText(e.target.value);
    }

    const {model, loader} = useComboboxLoader(
      {
        // You can start with any number that makes sense.
        total: 0,

        // Pick whatever number makes sense for your API
        pageSize: 20,

        // A load function that will be called by the loader. You must return a promise that returns
        // an object like `{items: [], total: 0}`. The `items` will be merged into the loader's cache
        async load({pageNumber, pageSize, filter}) {
          return new Promise<LoadReturn<string>>(resolve => {
            // simulate a server response by resolving after a period of time
            setTimeout(() => {
              // simulate paging and filtering based on pre-computed items
              const start = (pageNumber - 1) * pageSize;
              const end = start + pageSize;
              const filteredTasks = tasks.filter(i => {
                if (searchText.trim() === '' || typeof searchText !== 'string') {
                  return true;
                }
                return i.toLowerCase().includes(searchText.trim().toLowerCase());
              });

              const total = filteredTasks.length;
              const items = filteredTasks.slice(start, end);

              resolve({
                items,
                total,
              });
            }, 300);
          });
        },
        onShow() {
          // The `shouldLoad` cancels while the combobox menu is hidden, so let's load when it is
          // visible
          loader.load();
        },
      },
      useComboboxModel
    );

    return (
      <Combobox model={model}>
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
            {model.state.items.length === 0 ? (
              <StyledMenuItem as="span">No Results Found</StyledMenuItem>
            ) : (
              model.state.items.length > 0 && (
                <Combobox.Menu.List maxHeight={px2rem(200)}>
                  {item => <Combobox.Menu.Item>{item}</Combobox.Menu.Item>}
                </Combobox.Menu.List>
              )
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
