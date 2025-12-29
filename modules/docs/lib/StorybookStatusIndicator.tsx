import {
  StatusIndicator,
  type StatusIndicatorVariant,
} from '@workday/canvas-kit-preview-react/status-indicator';
import {systemIconStencil} from '@workday/canvas-kit-react/icon';
import {createStencil} from '@workday/canvas-kit-styling';
import {sparkleSingleSmallIcon} from '@workday/canvas-system-icons-web';
import {system} from '@workday/canvas-tokens-web';

const storybookStatusIndicatorStencil = createStencil({
  base: {
    borderRadius: system.shape.round,
    padding: `${system.space.zero} ${system.space.x2}`,
    [systemIconStencil.vars.color]: 'currentColor',
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
  new: {
    icon: undefined,
    label: 'New',
  },
};

export const StorybookStatusIndicator = ({type}: {type: 'ai' | 'deprecated' | 'new'}) => {
  const {icon, label} = content[type];
  const variantMapping = {
    ai: 'ai',
    deprecated: 'caution',
    new: 'positive',
  };
  console.log(variantMapping[type]);
  return (
    <StatusIndicator
      className="sb-unstyled cnvs-title-status-indicator"
      cs={storybookStatusIndicatorStencil({type})}
      variant={variantMapping[type] as StatusIndicatorVariant}
      emphasis="low"
    >
      {icon && <StatusIndicator.Icon icon={icon} />}
      <StatusIndicator.Label>{label}</StatusIndicator.Label>
    </StatusIndicator>
  );
};
