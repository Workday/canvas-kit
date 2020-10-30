/// <reference path="../../../../../typings.d.ts" />
/** @jsx jsx */
import {CSSObject, jsx} from '@emotion/core';
import * as React from 'react';

import * as systemIcons from '@workday/canvas-system-icons-web';
import {IconButton} from '../../index';

export default {
  title: 'Testing|React/Buttons/Button/Icon Button',
  component: IconButton,
};

const iconCellStyles: CSSObject = {
  display: 'inline-block',
  margin: '0 10px 10px 0',
  textAlign: 'center',
  width: '75px',

  p: {
    fontSize: '12px',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  },
};

export const IconButtonCircleGrid = () => {
  const [toggled, setToggled] = React.useState(false);

  const handleToggle = () => {
    setToggled(!toggled);
  };

  // Convert icons into an array
  const iconArray = [];
  for (const icon in systemIcons) {
    if (systemIcons[icon].filename) {
      iconArray.push(systemIcons[icon]);
    }
  }

  return (
    <div>
      <p>All buttons will toggle on/off together.</p>
      {iconArray.map(icon => (
        <div css={iconCellStyles} key={icon.name}>
          <IconButton
            aria-label={icon.name}
            icon={icon}
            toggled={toggled}
            variant={IconButton.Variant.Circle}
            onClick={handleToggle}
          />
          <p title={icon.name}>{icon.name}</p>
        </div>
      ))}
    </div>
  );
};
