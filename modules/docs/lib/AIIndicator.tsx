import {StatusIndicator} from '@workday/canvas-kit-preview-react/status-indicator';
import {system} from '@workday/canvas-tokens-web';
import {sparkleSingleSmallIcon} from '@workday/canvas-system-icons-web';
import {systemIconStencil} from '@workday/canvas-kit-react/icon';

export const AIIndicator = () => {
  return (
    <>
      <StatusIndicator
        className="sb-unstyled indicator"
        cs={{
          background: system.color.bg.ai.default,
          color: system.color.fg.ai,
          [systemIconStencil.vars.color]: system.color.fg.ai,
        }}
      >
        <StatusIndicator.Icon icon={sparkleSingleSmallIcon} />
        <StatusIndicator.Label>AI Content</StatusIndicator.Label>
      </StatusIndicator>
    </>
  );
};
