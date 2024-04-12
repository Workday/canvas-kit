import React from 'react';
import {ComponentStatesTable, StaticStates} from '@workday/canvas-kit-react/testing';
import {withSnapshotsEnabled} from '../../../../utils/storybook';

import {base} from '@workday/canvas-tokens-web';
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
          props: {color: base.cinnamon300},
        },
        {
          label: 'color + colorHover',
          props: {color: base.cinnamon300, colorHover: base.cinnamon600},
        },
        {
          label: 'fill',
          props: {fill: base.grapeSoda300},
        },
        {
          label: 'fill + fillHover',
          props: {fill: base.grapeSoda300, fillHover: base.grapeSoda600},
        },
        {
          label: 'color + colorHover + fill + fillHover',
          props: {
            color: base.cinnamon300,
            colorHover: base.cinnamon600,
            fill: base.grapeSoda300,
            fillHover: base.grapeSoda600,
          },
        },
        {
          label: 'accent',
          props: {accent: base.greenApple300},
        },
        {
          label: 'accent + accentHover',
          props: {accent: base.greenApple300, accentHover: base.greenApple600},
        },
        {
          label: 'color + colorHover + accent + accentHover',
          props: {
            color: base.cinnamon300,
            colorHover: base.cinnamon600,
            accent: base.greenApple300,
            accentHover: base.greenApple600,
          },
        },
        {
          label: 'fillColor + fillHover + accent + accentHover',
          props: {
            fill: base.grapeSoda300,
            fillHover: base.grapeSoda600,
            accent: base.greenApple300,
            accentHover: base.greenApple600,
          },
        },
        {
          label: 'color + colorHover + fillColor + fillHover + accent + accentHover',
          props: {
            color: base.cinnamon300,
            colorHover: base.cinnamon600,
            fill: base.grapeSoda300,
            fillHover: base.grapeSoda600,
            accent: base.greenApple300,
            accentHover: base.greenApple600,
          },
        },
        {
          label: 'background',
          props: {background: base.frenchVanilla400},
        },
        {
          label: 'background + backgroundHover',
          props: {background: base.frenchVanilla400, backgroundHover: base.frenchVanilla600},
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
