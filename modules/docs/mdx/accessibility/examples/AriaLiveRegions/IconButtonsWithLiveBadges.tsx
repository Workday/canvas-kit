import React from 'react';
import {AccessibleHide, AriaLiveRegion, useUniqueId} from '@workday/canvas-kit-react/common';
import {notificationsIcon, inboxIcon, assistantIcon} from '@workday/canvas-system-icons-web';
import {space} from '@workday/canvas-kit-react/tokens';
import {SecondaryButton, TertiaryButton} from '@workday/canvas-kit-react/button';
import {Flex} from '@workday/canvas-kit-react/layout';
import {Tooltip} from '@workday/canvas-kit-react/tooltip';
import {CountBadge} from '@workday/canvas-kit-react/badge';

const MyTasksLiveBadge = ({cnt}: {cnt: number}) => {
  // use tooltip to assign name,
  // use AriaLiveRegion inside button,
  // assign name to live region referencing the button,
  // use BadgeCount inside live region,
  // use AccessibleHide to create invisible word "new" after badge
  // use aria-describedby on button, referencing live region container to set description
  // Safari + VO => not working at all
  // JAWS 2024 + Chrome / Edge => works as expected :)
  // NVDA + Chrome / Edge => works as expected :)
  // Firefox => isn't announcing description on focus, only announces "X New" live (missing button name)
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
// Safari + VO => Works as expected :)
// JAWS 2024 => Announces full button name twice (previous state, then new state)
// JAWS 2024 + Firefox => Works as expected :)
// NVDA (All Browsers) => Atomic property isn't working, only announcing number change, announces twice
const NotificationsLiveBadge = ({cnt}: {cnt: number}) => (
  <AriaLiveRegion>
    <Tooltip title={`Notifications ${cnt} new`}>
      <TertiaryButton icon={notificationsIcon}>
        <CountBadge count={cnt} />
      </TertiaryButton>
    </Tooltip>
  </AriaLiveRegion>
);

const AssistantLiveBadge = ({cnt}: {cnt: number}) => {
  // use AriaLiveRegion around the button
  // use muted type Tooltip (avoid using aria-label to name button)
  // use AccessibleHide inside of button to compose name
  // Chrome + VO => announces twice
  // Safari + VO => works as expected :)
  const lbl = 'Workday Assistant';

  return (
    <AriaLiveRegion>
      <Tooltip title={lbl} type="muted">
        <TertiaryButton icon={assistantIcon}>
          <AccessibleHide>{lbl}</AccessibleHide>
          <CountBadge count={cnt} />
          <AccessibleHide>New</AccessibleHide>
        </TertiaryButton>
      </Tooltip>
    </AriaLiveRegion>
  );
};

export const IconButtonsWithLiveBadges = () => {
  const [counter, setCounter] = React.useState(0);
  const [notifications, setNotifications] = React.useState(0);
  const [assistant, setAssistant] = React.useState(0);

  const handleAddTask = () => setCounter(prev => prev + 1);
  const handleAddNotification = () => setNotifications(prev => prev + 1);
  const handleAssistant = () => setAssistant(prev => prev + 1);

  return (
    <>
      <Flex padding={space.s} gap={space.s} as="header">
        <AssistantLiveBadge cnt={assistant} />
        <NotificationsLiveBadge cnt={notifications} />
        <MyTasksLiveBadge cnt={counter} />
      </Flex>
      <Flex padding={space.s} gap={space.s} as="main">
        <SecondaryButton onClick={handleAssistant}>Add a Message</SecondaryButton>
        <SecondaryButton onClick={handleAddNotification}>Add a Notification</SecondaryButton>
        <SecondaryButton onClick={handleAddTask}>Add an item to My Tasks</SecondaryButton>
      </Flex>
    </>
  );
};
