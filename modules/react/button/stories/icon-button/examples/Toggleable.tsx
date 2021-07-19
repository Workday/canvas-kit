import React from 'react';

import {IconButton} from '@workday/canvas-kit-react/button';
import {activityStreamIcon} from '@workday/canvas-system-icons-web';

export const Toggleable = () => {
  const [toggled, setToggled] = React.useState<boolean | undefined>();
  const handleToggle = () => {
    setToggled(!toggled);
  };

  return (
    <IconButton
      icon={activityStreamIcon}
      aria-label="Activity Stream"
      toggled={toggled}
      onClick={handleToggle}
    />
  );
};
