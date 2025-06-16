import React from 'react';
import {ComponentStatesTable, StaticStates} from '@workday/canvas-kit-react/testing';
import {withSnapshotsEnabled} from '../../../../utils/storybook';

import {system, base} from '@workday/canvas-tokens-web';
import {activityStreamIcon} from '@workday/canvas-system-icons-web';
import {SystemIcon} from '@workday/canvas-kit-react/icon';

export default withSnapshotsEnabled({
  title: 'Testing/Icon',
  component: SystemIcon,
});

export const SystemIconStates = () => (
  <StaticStates>
    <ComponentStatesTable
      rowProps={[
        {
          label: 'Default',
          props: {},
        },
        {
          label: 'color',
          props: {color: system.color.fg.critical},
        },
        {
          label: 'color + colorHover',
          props: {color: base.red300, colorHover: base.red600},
        },
        {
          label: 'fill',
          props: {fill: base.purple300},
        },
        {
          label: 'fill + fillHover',
          props: {fill: base.purple300, fillHover: base.purple600},
        },
        {
          label: 'color + colorHover + fill + fillHover',
          props: {
            color: base.red300,
            colorHover: base.red600,
            fill: base.purple300,
            fillHover: base.purple600,
          },
        },
        {
          label: 'accent',
          props: {accent: base.green300},
        },
        {
          label: 'accent + accentHover',
          props: {accent: base.green300, accentHover: base.green600},
        },
        {
          label: 'color + colorHover + accent + accentHover',
          props: {
            color: base.red300,
            colorHover: base.red600,
            accent: base.green300,
            accentHover: base.green600,
          },
        },
        {
          label: 'fillColor + fillHover + accent + accentHover',
          props: {
            fill: base.purple300,
            fillHover: base.purple600,
            accent: base.green300,
            accentHover: base.green600,
          },
        },
        {
          label: 'color + colorHover + fillColor + fillHover + accent + accentHover',
          props: {
            color: base.red300,
            colorHover: base.red600,
            fill: base.purple300,
            fillHover: base.purple600,
            accent: base.green300,
            accentHover: base.green600,
          },
        },
        {
          label: 'background',
          props: {background: base.neutral400},
        },
        {
          label: 'background + backgroundHover',
          props: {background: base.neutral400, backgroundHover: base.neutral600},
        },
      ]}
      columnProps={[
        {
          label: 'Default',
          props: {},
        },
        {
          label: 'Hover',
          props: {className: 'hover'},
        },
      ]}
    >
      {props => <SystemIcon icon={activityStreamIcon} {...props} />}
    </ComponentStatesTable>
  </StaticStates>
);
