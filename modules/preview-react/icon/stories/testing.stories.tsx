import {searchIcon} from '@workday/canvas-expressive-icons-web';
import {ExpressiveIcon, SystemIcon} from '@workday/canvas-kit-preview-react/icon';
import {ComponentStatesTable, StaticStates} from '@workday/canvas-kit-react/testing';
import {imageIcon} from '@workday/canvas-system-icons-web';
import {system} from '@workday/canvas-tokens-web';

export default {
  title: 'Testing/Preview/Icons',
  component: SystemIcon,
  parameters: {
    chromatic: {
      disable: false,
    },
  },
};

export const SystemIconStates = {
  render: () => (
    <StaticStates>
      <ComponentStatesTable
        rowProps={[
          {
            label: 'Default',
            props: {},
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
        {props => (
          <div style={{display: 'flex', alignItems: 'center', gap: system.gap.md}}>
            <SystemIcon icon={imageIcon} {...props} />
            <SystemIcon icon={imageIcon} size="xl" {...props} />
            <SystemIcon icon={imageIcon} size="lg" {...props} />
            <SystemIcon icon={imageIcon} size="md" {...props} />
            <SystemIcon icon={imageIcon} size="sm" {...props} />
            <SystemIcon icon={imageIcon} size="xs" {...props} />
            <SystemIcon icon={imageIcon} size="xxs" {...props} />
            <SystemIcon icon={imageIcon} {...props} {...props} />
            <SystemIcon icon={imageIcon} color={system.color.fg.success.default} {...props} />
            <SystemIcon
              icon={imageIcon}
              color={system.color.fg.success.default}
              accent={system.color.fg.success.strong}
              {...props}
            />
            <SystemIcon
              icon={imageIcon}
              color={system.color.fg.warning.default}
              accent={system.color.fg.warning.strong}
              background={system.color.surface.warning.default}
              {...props}
            />
            <SystemIcon
              icon={imageIcon}
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
        rowProps={[
          {
            label: 'Default',
            props: {},
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
        {props => (
          <div style={{display: 'flex', alignItems: 'center', gap: system.gap.md}}>
            <ExpressiveIcon icon={searchIcon} {...props} />
            <ExpressiveIcon icon={searchIcon} size="xl" {...props} />
            <ExpressiveIcon icon={searchIcon} size="lg" {...props} />
            <ExpressiveIcon icon={searchIcon} size="md" {...props} />
            <ExpressiveIcon icon={searchIcon} size="sm" {...props} />
            <ExpressiveIcon icon={searchIcon} size="xs" {...props} />
            <ExpressiveIcon icon={searchIcon} color={system.color.fg.success.default} {...props} />
            <ExpressiveIcon
              icon={searchIcon}
              color={system.color.fg.success.default}
              accent={system.color.surface.success.strong}
              {...props}
            />
            <ExpressiveIcon
              icon={searchIcon}
              color={system.color.fg.warning.default}
              accent={system.color.surface.warning.strong}
              {...props}
            />
            <ExpressiveIcon
              icon={searchIcon}
              cs={{
                '&.hover .wd-icon-fill': {
                  fill: system.color.fg.success.default,
                },
                '&.hover .wd-icon-accent': {
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
