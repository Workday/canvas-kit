import React from 'react';
import {Tooltip} from '@workday/canvas-kit-react-tooltip';
import {Card} from '@workday/canvas-kit-react-card';
import {Placement} from '@workday/canvas-kit-react-popup';

export const Placements = () => {
  const placementStyles = {
    display: 'flex',
    justifyContent: 'space-around',
  };

  const createPlacement = (placement: string, index) => {
    return (
      <Tooltip title="Add" placement={placement as Placement} key={index}>
        <Card
          style={{
            display: 'flex',
            width: 80,
            height: 80,
            justifyContent: 'space-around',
            alignItems: 'center',
          }}
        >
          {placement}
        </Card>
      </Tooltip>
    );
  };

  return (
    <div
      style={{
        padding: 100, // give enough room for the tooltips to fit around their targets
        display: 'grid',
        gridTemplateColumns: '80px 320px 80px',
        gridTemplateRows: '80px 320px 80px',
      }}
    >
      <div />
      <div style={{...placementStyles, flexDirection: 'row'}}>
        {['top-start', 'top', 'top-end'].map(createPlacement)}
      </div>
      <div />
      <div style={{...placementStyles, flexDirection: 'column'}}>
        {['left-start', 'left', 'left-end'].map(createPlacement)}
      </div>
      <div />
      <div style={{...placementStyles, flexDirection: 'column'}}>
        {['right-start', 'right', 'right-end'].map(createPlacement)}
      </div>
      <div />
      <div style={{...placementStyles, flexDirection: 'row'}}>
        {['bottom-start', 'bottom', 'bottom-end'].map(createPlacement)}
      </div>
      <div />
    </div>
  );
};
