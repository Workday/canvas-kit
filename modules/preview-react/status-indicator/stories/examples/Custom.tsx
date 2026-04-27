import React from 'react';

import {StatusIndicator} from '@workday/canvas-kit-preview-react/status-indicator';
import {systemIconStencil} from '@workday/canvas-kit-react/icon';
import {createStyles} from '@workday/canvas-kit-styling';
import {documentSparkleIcon} from '@workday/canvas-system-icons-web';
import {base, system} from '@workday/canvas-tokens-web';

const customStyles = createStyles({
  background: base.blue900,
  [systemIconStencil.vars.color]: system.color.fg.inverse,
  color: system.color.fg.inverse,
});

export const Custom = () => {
  return (
    <StatusIndicator cs={customStyles}>
      <StatusIndicator.Icon icon={documentSparkleIcon} size="xxs" />
      <StatusIndicator.Label>AI Content</StatusIndicator.Label>
    </StatusIndicator>
  );
};
