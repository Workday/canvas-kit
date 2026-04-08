import * as expressivePackage from '@workday/canvas-expressive-icons-web';
import {
  ExpressiveIcon,
  ExpressiveIconProps,
  SystemIcon,
  SystemIconProps,
} from '@workday/canvas-kit-react/icon';
import {ComponentStatesTable, StaticStates} from '@workday/canvas-kit-react/testing';
import * as systemPackage from '@workday/canvas-system-icons-web';
import {system} from '@workday/canvas-tokens-web';

export default {
  title: 'Testing/Icons',
  component: SystemIcon,
  parameters: {
    chromatic: {
      disable: false,
    },
  },
};

const {CanvasIconTypes, ...allSystemIcons} = systemPackage;
const {CanvasIconTypes: _, ...allExpressiveIcons} = expressivePackage;

export const SystemIconStates = {
  render: () => (
    <StaticStates>
      <ComponentStatesTable
        rowProps={Object.keys(allSystemIcons).map(icon => ({
          label: icon,
          props: {icon: allSystemIcons[icon as keyof typeof allSystemIcons]},
        }))}
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
        {(props: SystemIconProps) => (
          <div style={{display: 'flex', alignItems: 'center', gap: system.gap.md}}>
            <SystemIcon size="xl" {...props} />
            <SystemIcon size="lg" {...props} />
            <SystemIcon size="md" {...props} />
            <SystemIcon size="sm" {...props} />
            <SystemIcon size="xs" {...props} />
            <SystemIcon size="xxs" {...props} />
            <SystemIcon {...props} />
            <SystemIcon color={system.color.fg.success.default} {...props} />
            <SystemIcon
              color={system.color.fg.success.default}
              accent={system.color.fg.success.strong}
              {...props}
            />
            <SystemIcon
              color={system.color.fg.warning.default}
              accent={system.color.fg.warning.strong}
              background={system.color.surface.warning.default}
              {...props}
            />
            <SystemIcon
              cs={{
                '&.hover .wd-icon-fill': {
                  fill: system.color.fg.success.default,
                },
                '&.hover .wd-icon-accent': {
                  fill: system.color.fg.success.strong,
                },
                '&.hover .wd-icon-background': {
                  fill: system.color.surface.success.default,
                },
              }}
              {...props}
            />
          </div>
        )}
      </ComponentStatesTable>
    </StaticStates>
  ),
};

export const ExpressiveIconStates = {
  render: () => (
    <StaticStates>
      <ComponentStatesTable
        rowProps={Object.keys(allExpressiveIcons).map(icon => ({
          label: icon,
          props: {icon: allExpressiveIcons[icon as keyof typeof allExpressiveIcons]},
        }))}
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
        {(props: ExpressiveIconProps) => (
          <div style={{display: 'flex', alignItems: 'center', gap: system.gap.md}}>
            <ExpressiveIcon size="xl" {...props} />
            <ExpressiveIcon size="lg" {...props} />
            <ExpressiveIcon size="md" {...props} />
            <ExpressiveIcon size="sm" {...props} />
            <ExpressiveIcon size="xs" {...props} />
            <ExpressiveIcon {...props} />
            <ExpressiveIcon color={system.color.fg.success.default} {...props} />
            <ExpressiveIcon
              color={system.color.fg.success.default}
              accent={system.color.surface.success.strong}
              {...props}
            />
            <ExpressiveIcon
              cs={{
                '&.hover .wd-expressive-fill': {
                  fill: system.color.fg.success.default,
                },
                '&.hover .wd-expressive-accent': {
                  fill: system.color.surface.success.strong,
                },
              }}
              {...props}
            />
          </div>
        )}
      </ComponentStatesTable>
    </StaticStates>
  ),
};
