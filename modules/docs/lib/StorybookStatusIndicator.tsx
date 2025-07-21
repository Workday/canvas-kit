import {StatusIndicator} from '@workday/canvas-kit-preview-react/status-indicator';
import {system} from '@workday/canvas-tokens-web';
import {sparkleSingleSmallIcon} from '@workday/canvas-system-icons-web';
import {createStencil} from '@workday/canvas-kit-styling';
import {systemIconStencil} from '@workday/canvas-kit-react/icon';

const storybookStatusIndicatorStencil = createStencil({
  base: {
    borderRadius: system.shape.round,
    padding: `${system.space.zero} ${system.space.x2}`,
    [systemIconStencil.vars.color]: 'currentColor',
  },
  modifiers: {
    type: {
      ai: {
        background: system.color.bg.ai.default,
        color: system.color.fg.ai,
      },
      deprecated: {
        background: system.color.static.amber.soft,
        color: system.color.static.amber.stronger,
      },
    },
  },
});

const content = {
  ai: {
    icon: sparkleSingleSmallIcon,
    label: 'AI Content',
  },
  deprecated: {
    icon: undefined,
    label: 'Deprecated',
  },
};

export const StorybookStatusIndicator = ({type}: {type: 'ai' | 'deprecated'}) => {
  const {icon, label} = content[type];
  return (
    <StatusIndicator
      className="sb-unstyled cnvs-title-status-indicator"
      cs={storybookStatusIndicatorStencil({type})}
    >
      {icon && <StatusIndicator.Icon icon={icon} />}
      <StatusIndicator.Label>{label}</StatusIndicator.Label>
    </StatusIndicator>
  );
};
