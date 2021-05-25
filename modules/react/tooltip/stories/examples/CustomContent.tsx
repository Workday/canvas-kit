import React from 'react';

import {SecondaryButton} from '@workday/canvas-kit-react/button';
import {Tooltip} from '@workday/canvas-kit-react/tooltip';

export const CustomContent = () => {
  return (
    <React.Fragment>
      <Tooltip
        type="describe"
        title={
          <div>
            This is a <em>custom</em> tooltip with <strong>custom HTML</strong>
          </div>
        }
      >
        <SecondaryButton>Hover Me</SecondaryButton>
      </Tooltip>
    </React.Fragment>
  );
};
