import React, {useState} from 'react';
import {
  styled,
  createComponent,
  dubLogoBlue,
  AccessibleHide,
  AriaLiveRegion,
  useUniqueId,
} from '@workday/canvas-kit-react/common';
import {
  notificationsIcon,
  inboxIcon,
  justifyIcon,
  assistantIcon,
  userIcon,
} from '@workday/canvas-system-icons-web';
import {colors, depth, space, type} from '@workday/canvas-kit-react/tokens';
import {SecondaryButton, TertiaryButton} from '@workday/canvas-kit-react/button';
import {Flex, FlexProps} from '@workday/canvas-kit-react/layout';
import {SearchForm} from '@workday/canvas-kit-labs-react/search-form';
import {Tooltip} from '@workday/canvas-kit-react/tooltip';
import {CountBadge} from '@workday/canvas-kit-react/badge';

interface HeaderItemProps extends FlexProps {}

const MyTasksLiveBadge = ({cnt}) => {
  // use tooltip to assign name,
  // use AriaLiveRegion inside button,
  // assign name to live region referencing the button,
  // use BadgeCount inside live region,
  // use AccessibleHide to create invisible word "new" after badge
  // use aria-describedby on button, referencing live region container to set description
  // :( isn't working at all in Safari
  // :( isn't working well in Firefox
  const badgeID = useUniqueId();
  const myTasksID = useUniqueId();

  return (
    <Tooltip title="My Tasks">
      <TertiaryButton icon={inboxIcon} id={myTasksID} aria-describedby={badgeID}>
        <AriaLiveRegion id={badgeID} aria-labelledby={myTasksID}>
          <CountBadge count={cnt} />
          <AccessibleHide>New</AccessibleHide>
        </AriaLiveRegion>
      </TertiaryButton>
    </Tooltip>
  );
};

// use AriaLiveRegion around the button,
// use Tooltip to assign the name of the button,
// make sure Tooltip title string includes count value
// Chrome + VO => Announces name "notifications X new" and innerText 'X'
// Safari + VO => Works nicely :) announces button name
const NotificationsLiveBadge = ({cnt}) => (
  <AriaLiveRegion>
    <Tooltip title={`Notifications ${cnt} new`}>
      <TertiaryButton icon={notificationsIcon}>
        <CountBadge count={cnt} />
      </TertiaryButton>
    </Tooltip>
  </AriaLiveRegion>
);

const MainContent = ({onAddTask, onAddNotification}) => (
  <Flex padding={space.s} gap={space.s} as="main">
    <SecondaryButton onClick={onAddTask}>Add an item to My Tasks</SecondaryButton>
    <SecondaryButton onClick={onAddNotification}>Add a Notification</SecondaryButton>
  </Flex>
);

export const GlobalHeaderWithLiveBadge = () => {
  const [counter, setCounter] = useState(0);
  const [notifications, setNotifications] = useState(0);

  const handleClick = () => {
    setCounter(prev => prev + 1);
  };

  const handleAddNotification = () => {
    setNotifications(prev => prev + 1);
  };

  return (
    <>
      <GlobalHeader>
        <GlobalHeader.Item>
          <Tooltip title="Menu">
            <TertiaryButton icon={justifyIcon} />
          </Tooltip>
          <Tooltip title="Workday Home">
            <TertiaryButton>
              <WorkdayLogo dangerouslySetInnerHTML={{__html: dubLogoBlue}} />
            </TertiaryButton>
          </Tooltip>
        </GlobalHeader.Item>
        <GlobalHeader.Item margin="auto" width="100%" maxWidth={`calc(${space.xxxl} * 6)`}>
          <SearchForm onSubmit={() => 1} />
        </GlobalHeader.Item>
        <GlobalHeader.Item>
          <Tooltip title="Workday Assistant">
            <TertiaryButton icon={assistantIcon} />
          </Tooltip>
          <NotificationsLiveBadge cnt={notifications} />
          <MyTasksLiveBadge cnt={counter} />
          <Tooltip title="Profile">
            <TertiaryButton icon={userIcon} />
          </Tooltip>
        </GlobalHeader.Item>
      </GlobalHeader>
      <MainContent onAddTask={handleClick} onAddNotification={handleAddNotification} />
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

const WorkdayLogo = styled('span')({lineHeight: 0});
