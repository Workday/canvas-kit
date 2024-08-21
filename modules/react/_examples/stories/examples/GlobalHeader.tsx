import * as React from 'react';
import {styled, createComponent} from '@workday/canvas-kit-react/common';
import {colors, depth, space, type} from '@workday/canvas-kit-react/tokens';

import {
  notificationsIcon,
  inboxIcon,
  justifyIcon,
  assistantIcon,
} from '@workday/canvas-system-icons-web';

import {TertiaryButton} from '@workday/canvas-kit-react/button';
import {Avatar} from '@workday/canvas-kit-react/avatar';
import {Flex, FlexProps} from '@workday/canvas-kit-react/layout';
import {SearchForm} from '@workday/canvas-kit-labs-react/search-form';
import {Tooltip} from '@workday/canvas-kit-react/tooltip';
import {Combobox} from '@workday/canvas-kit-labs-react/combobox';
import {TextInput} from '@workday/canvas-kit-react/text-input';
import {StyledMenuItem, MenuItemProps} from '@workday/canvas-kit-react/menu';

interface HeaderItemProps extends FlexProps {}

const tasks = ['Request Time Off', 'Create Expense Report'];

const autocompleteResult = (
  textModifier: number,
  disabled: boolean
): React.ReactElement<MenuItemProps> => (
  <StyledMenuItem isDisabled={disabled}>
    Result{' '}
    <span>
      num<span>ber</span>
    </span>{' '}
    {textModifier}
  </StyledMenuItem>
);

const simpleAutoComplete = (count: number, showDisabledItems, total = 5) =>
  Array.apply(null, Array(count))
    .map((_, i) => autocompleteResult(i, showDisabledItems && i === 0))
    .splice(0, total);

export const Basic = () => {
  const [currentText, setCurrentText] = React.useState('');
  const textLength = currentText.length;

  const autocompleteCallback = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setCurrentText(event.target.value);
  };

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
        <Combobox
          autocompleteItems={simpleAutoComplete(textLength, false, 10)}
          onChange={autocompleteCallback}
        >
          <TextInput placeholder="Autocomplete" />
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
