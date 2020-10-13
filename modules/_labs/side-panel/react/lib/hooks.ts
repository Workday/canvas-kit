import * as React from 'react';

import {useUniqueId} from '@workday/canvas-kit-react-common';
import {SidePanelProps} from './SidePanel';

export interface UseSidePanelProps extends Pick<React.HTMLAttributes<HTMLDivElement>, 'id'> {
  initialExpanded?: boolean;
  panelId?: string;
  labelId?: string;
}

export const useSidePanel = ({
  initialExpanded = true,
  panelId: panelIdParam,
  labelId: labelIdParam,
}: UseSidePanelProps) => {
  const [expanded, setExpanded] = React.useState(initialExpanded);
  const panelId = useUniqueId(panelIdParam);
  const labelId = useUniqueId(labelIdParam);

  const handleClick = () => {
    setExpanded(!expanded);
  };

  const panelProps: Partial<SidePanelProps> = {
    expanded: expanded,
    id: panelId,
    'aria-labelledby': labelId,
  };

  const labelProps = {
    id: labelId,
  };

  const controlProps = {
    'aria-controls': panelId,
    'aria-expanded': expanded,
    'aria-labelledby': labelId,
    onClick: handleClick,
  };

  return {
    expanded,
    setExpanded,
    panelProps,
    labelProps,
    controlProps,
  };
};
