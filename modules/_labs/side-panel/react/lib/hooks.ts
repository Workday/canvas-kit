import * as React from 'react';

import {useUniqueId} from '@workday/canvas-kit-react-common';
import {SidePanelProps} from './SidePanel';

export interface UseSidePanelProps extends Pick<React.HTMLAttributes<HTMLDivElement>, 'id'> {
  initialExpanded?: boolean;
  sidePanelId?: string;
  labelId?: string;
}

export const useSidePanel = ({
  initialExpanded = true,
  sidePanelId: sidePanelIdParam,
  labelId: labelIdParam,
}: UseSidePanelProps) => {
  const [expanded, setExpanded] = React.useState(initialExpanded);
  const sidePanelId = useUniqueId(sidePanelIdParam);
  const labelId = useUniqueId(labelIdParam);

  const handleClick = () => {
    setExpanded(!expanded);
  };

  const panelProps: Partial<SidePanelProps> = {
    expanded: expanded,
    id: sidePanelId,
    'aria-labelledby': typeof labelId === 'undefined' ? undefined : labelId,
  };

  const labelProps = {
    id: labelId,
  };

  const buttonProps = {
    'aria-controls': sidePanelId,
    'aria-expanded': expanded,
    onClick: handleClick,
  };

  return {
    expanded,
    setExpanded,
    panelProps,
    labelProps,
    buttonProps,
  };
};
