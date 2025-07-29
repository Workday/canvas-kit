import * as React from 'react';
import {CountBadge} from '@workday/canvas-kit-react/badge';
import {SecondaryButton, TertiaryButton} from '@workday/canvas-kit-react/button';
import {AriaLiveRegion, useUniqueId} from '@workday/canvas-kit-react/common';
import {createStyles, cssVar} from '@workday/canvas-kit-styling';
import {notificationsIcon} from '@workday/canvas-system-icons-web';
import {system} from '@workday/canvas-tokens-web';
import {Tooltip} from '@workday/canvas-kit-react/tooltip';
import {Flex} from '@workday/canvas-kit-react/layout';

function negate(value: string, fallback?: string) {
  return `calc(${cssVar(value, fallback)} * -1)`;
}

const container = createStyles({
  boxSizing: 'border-box',
  flexDirection: 'column',
  gap: system.space.x4,
});

const controls = createStyles({
  boxSizing: 'border-box',
  gap: system.space.x2,
  padding: system.space.x1,
});

const notificationContainerStyles = createStyles({
  boxSizing: 'border-box',
  position: 'relative',
});

const countBadgeStyles = createStyles({
  boxSizing: 'border-box',
  position: 'absolute',
  top: negate(system.space.x1),
  insetInlineEnd: negate(system.space.x1),
});

// Testing notes (Aug. 30, 2024):
// Windows 11
// JAWS 2024 + Chrome / Edge: "New notifications" once, then only the count change "2"
// JAWS 2024 + FF: "New notifications" once, then describes nothing
// NVDA + Chrome / Edge: Consistently describes "{X} New notifications"
// NVDA + FF: Consistently describes count value only "{X}"
// macOS v14.6.1
// VoiceOver + Chrome / Safari: Consistently describes "New notifications {X}"
export const NotificationBadge = () => {
  const [count, setCount] = React.useState(4);
  const badgeID = useUniqueId();

  return (
    <Flex cs={container}>
      <Flex cs={controls}>
        <TertiaryButton size="small" onClick={() => setCount(count + 1)}>
          Add Notification
        </TertiaryButton>
        <TertiaryButton size="small" onClick={() => setCount(0)}>
          Clear
        </TertiaryButton>
      </Flex>
      <Flex>
        <span className={notificationContainerStyles}>
          <Tooltip title="Notifications">
            <SecondaryButton
              size="medium"
              icon={notificationsIcon}
              aria-describedby={!!count ? badgeID : undefined}
            />
          </Tooltip>
          <AriaLiveRegion aria-label={!!count ? 'New notifications' : undefined}>
            {!!count && <CountBadge id={badgeID} count={count} limit={100} cs={countBadgeStyles} />}
          </AriaLiveRegion>
        </span>
      </Flex>
    </Flex>
  );
};
