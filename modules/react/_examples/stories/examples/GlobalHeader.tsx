import * as React from 'react';
import {
  styled,
  composeHooks,
  createComponent,
  createElemPropsHook,
  createSubcomponent,
  ExtractProps,
} from '@workday/canvas-kit-react/common';
import {colors, depth, space, type} from '@workday/canvas-kit-react/tokens';

import {
  notificationsIcon,
  inboxIcon,
  justifyIcon,
  assistantIcon,
  mailIcon,
} from '@workday/canvas-system-icons-web';

import {TertiaryButton} from '@workday/canvas-kit-react/button';
import {Avatar} from '@workday/canvas-kit-react/avatar';
import {Flex, FlexProps} from '@workday/canvas-kit-react/layout';
import {Tooltip} from '@workday/canvas-kit-react/tooltip';
import {Combobox, useComboboxModel, useComboboxInput} from '@workday/canvas-kit-react/combobox';
import {InputGroup, TextInput} from '@workday/canvas-kit-react/text-input';
import {StyledMenuItem, MenuItemProps} from '@workday/canvas-kit-react/menu';
import {SystemIcon} from '@workday/canvas-kit-react/icon';

interface HeaderItemProps extends FlexProps {}

const tasks = ['Request Time Off', 'Create Expense Report'];

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
        <Combobox>
          <InputGroup>
            <InputGroup.InnerStart>
              <SystemIcon icon={mailIcon} />
            </InputGroup.InnerStart>
            <InputGroup.Input as={AutoCompleteInput} />
          </InputGroup>
          <Combobox.Menu.Popper>
            <Combobox.Menu.Card>
              <StyledMenuItem as="span">No Results Found</StyledMenuItem>
            </Combobox.Menu.Card>
          </Combobox.Menu.Popper>
        </Combobox>
      </GlobalHeader.Item>
      <GlobalHeader.Item>
        <Tooltip title="Assistant">
          <TertiaryButton icon={assistantIcon} />
        </Tooltip>
        <Tooltip title="Notifications">
          <TertiaryButton icon={notificationsIcon} />
        </Tooltip>
        <Tooltip title="My Tasks">
          <TertiaryButton icon={inboxIcon} />
        </Tooltip>
        <Tooltip title="Profile">
          <Avatar />
        </Tooltip>
      </GlobalHeader.Item>
    </GlobalHeader>
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
  Component: (props, ref, Element) => <HeaderWrapper ref={ref} as={Element} {...props} />,
  subComponents: {Item: GlobalHeaderItem},
});

const HeaderWrapper = styled('header')({
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
});
