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

const iconGridStyles: CSSObject = {
  display: 'flex',
  flexWrap: 'wrap',
};

const iconCellStyles: CSSObject = {
  margin: '0 10px 10px 0',
  textAlign: 'center',
  width: '75px',

  p: {
    fontSize: '12px',
    margin: '12px 0',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  },
};

export const IconButtonCircleToggleableGrid = () => {
  const [toggled, setToggled] = React.useState(true);

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
    <div css={iconGridStyles}>
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
