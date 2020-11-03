/// <reference path="../../../../../typings.d.ts" />
/** @jsx jsx */
import {CSSObject, jsx} from '@emotion/core';
import * as React from 'react';
import {StaticStates} from '@workday/canvas-kit-labs-react-core';
import {
  ComponentStatesTable,
  permutateProps,
  withSnapshotsEnabled,
} from '../../../../../utils/storybook';
import * as systemIcons from '@workday/canvas-system-icons-web';
import {IconButton} from '../../index';
import {Container, stateTableColumnProps} from './utils';

export default withSnapshotsEnabled({
  title: 'Testing|React/Buttons/Button/Icon Button',
  component: IconButton,
});

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

export const IconButtonStates = () => (
  <React.Fragment>
    {[false, true].map(toggled => (
      <div>
        <h3>Toggled {toggled ? 'On' : 'Off'}</h3>
        <StaticStates>
          <ComponentStatesTable
            rowProps={permutateProps({
              variant: [
                {value: IconButton.Variant.Inverse, label: 'Inverse'},
                {value: IconButton.Variant.InverseFilled, label: 'Inverse Filled'},
                {value: IconButton.Variant.Plain, label: 'Plain'},
                {value: IconButton.Variant.Circle, label: 'Circle'},
                {value: IconButton.Variant.CircleFilled, label: 'Circle Filled'},
                {value: IconButton.Variant.Square, label: 'Square'},
                {value: IconButton.Variant.SquareFilled, label: 'Square Filled'},
              ],
            })}
            columnProps={stateTableColumnProps}
          >
            {props => (
              <Container
                blue={[IconButton.Variant.Inverse, IconButton.Variant.InverseFilled].includes(
                  props.variant
                )}
              >
                <IconButton
                  toggled={toggled}
                  icon={systemIcons.playCircleIcon}
                  aria-label="Play"
                  {...props}
                  onChange={() => {}} // eslint-disable-line no-empty-function
                />
              </Container>
            )}
          </ComponentStatesTable>
        </StaticStates>
      </div>
    ))}
  </React.Fragment>
);

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
