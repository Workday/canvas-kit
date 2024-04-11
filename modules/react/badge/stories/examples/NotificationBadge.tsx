import * as React from 'react';
import {CountBadge} from '@workday/canvas-kit-react/badge';
import {SecondaryButton, TertiaryButton} from '@workday/canvas-kit-react/button';
import {accessibleHide} from '@workday/canvas-kit-react/common';
import {createStyles, cssVar} from '@workday/canvas-kit-styling';
import {notificationsIcon} from '@workday/canvas-system-icons-web';
import {base, system} from '@workday/canvas-tokens-web';

function negate(value: string, fallback?: string) {
  return `calc(${cssVar(value, fallback)} * -1)`;
}

const container = createStyles({
  display: 'flex',
  flexDirection: 'column',
  gap: system.space.x4,
});

const controls = createStyles({
  borderBottom: `solid 1px ${cssVar(base.soap400)}`,
  display: 'flex',
  gap: system.space.x1,
  padding: system.space.x1,
});

const notificationContainerStyles = createStyles({
  position: 'relative',
});

const countBadgeStyles = createStyles({
  position: 'absolute',
  top: negate(system.space.x4),
  insetInlineEnd: negate(system.space.x1),
});

const accessibleHideStyles = createStyles(accessibleHide);

export function NotificationBadge() {
  const [count, setCount] = React.useState(4);

  return (
    <div className={container}>
      <div className={controls}>
        <TertiaryButton size="small" onClick={() => setCount(count + 1)}>
          Add Notification
        </TertiaryButton>
        <TertiaryButton size="small" onClick={() => setCount(0)}>
          Clear
        </TertiaryButton>
      </div>
      <div>
        <span className={notificationContainerStyles}>
          <SecondaryButton
            aria-label={`Alerts ${count} new notifications`}
            size="medium"
            icon={notificationsIcon}
          />
          {!!count && (
            <CountBadge count={count} limit={100} aria-hidden="true" cs={countBadgeStyles} />
          )}
          <div className={accessibleHideStyles} role="status" aria-live="polite" aria-atomic="true">
            New notifications
          </div>
        </span>
      </div>
    </div>
  );
}
