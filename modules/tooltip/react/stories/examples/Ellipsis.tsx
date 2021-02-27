import React from 'react';

import {Button} from '@workday/canvas-kit-react-button';
import {OverflowTooltip} from '@workday/canvas-kit-react-tooltip';

export const Ellipsis = () => {
  return (
    <React.Fragment>
      <OverflowTooltip>
        <Button>Short Content</Button>
      </OverflowTooltip>
      <OverflowTooltip>
        <Button style={{maxWidth: 200}}>
          Super Mega Ultra Long Content With Max Width On The Button
        </Button>
      </OverflowTooltip>
    </React.Fragment>
  );
};
