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
          props: {color: system.color.fg.critical.default},
        },
        {
          label: 'color + colorHover',
          props: {
            color: system.color.fg.critical.default,
            colorHover: system.color.static.red.strong,
          },
        },
        {
          label: 'fill',
          props: {fill: system.color.fg.primary.default},
        },
        {
          label: 'fill + fillHover',
          props: {fill: system.color.fg.primary.default, fillHover: system.color.fg.primary.strong},
        },
        {
          label: 'color + colorHover + fill + fillHover',
          props: {
            color: system.color.fg.primary.default,
            colorHover: system.color.fg.primary.strong,
            fill: system.color.fg.muted.default,
            fillHover: system.color.fg.muted.strong,
          },
        },
        {
          label: 'accent',
          props: {accent: system.color.fg.caution.default},
        },
        {
          label: 'accent + accentHover',
          props: {
            accent: system.color.fg.caution.default,
            accentHover: system.color.fg.caution.strong,
          },
        },
        {
          label: 'color + colorHover + accent + accentHover',
          props: {
            color: system.color.fg.primary.default,
            colorHover: system.color.fg.primary.strong,
            accent: system.color.fg.muted.default,
            accentHover: system.color.fg.muted.strong,
          },
        },
        {
          label: 'fillColor + fillHover + accent + accentHover',
          props: {
            fill: system.color.fg.primary.default,
            fillHover: system.color.fg.primary.strong,
            accent: system.color.fg.caution.default,
            accentHover: system.color.fg.caution.strong,
          },
        },
        {
          label: 'color + colorHover + fillColor + fillHover + accent + accentHover',
          props: {
            color: system.color.fg.primary.default,
            colorHover: system.color.fg.primary.strong,
            fill: system.color.fg.muted.default,
            fillHover: system.color.fg.muted.strong,
            accent: system.color.fg.caution.default,
            accentHover: system.color.fg.caution.strong,
          },
        },
        {
          label: 'background',
          props: {background: system.color.fg.primary.default},
        },
        {
          label: 'background + backgroundHover',
          props: {
            background: system.color.fg.primary.default,
            backgroundHover: system.color.fg.primary.strong,
          },
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
