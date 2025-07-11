import {StatusIndicator} from '@workday/canvas-kit-preview-react/status-indicator';
import {base} from '@workday/canvas-tokens-web';
import {sparkleSingleSmallIcon} from '@workday/canvas-system-icons-web';
import {systemIconStencil} from '@workday/canvas-kit-react/icon';

export const AIIndicator = () => {
  return (
    <>
      <StatusIndicator
        className="sb-unstyled indicator"
        cs={{
          background: base.extendedDragonFruit400,
          color: base.frenchVanilla100,
          [systemIconStencil.vars.color]: base.frenchVanilla100,
        }}
      >
        <StatusIndicator.Icon icon={sparkleSingleSmallIcon} />
        <StatusIndicator.Label>AI Content</StatusIndicator.Label>
      </StatusIndicator>
    </>
  );
};
