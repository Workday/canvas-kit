import * as React from 'react';

import {useUniqueId} from '@workday/canvas-kit-react/common';

export interface UseSidePanelProps {
  initialExpanded?: boolean;
  panelId?: string;
  labelId?: string;
}

export interface PanelProps {
  expanded: boolean;
  id: string;
  'aria-labelledby': string;
  touched: boolean;
}

export interface LabelProps {
  id: string;
}

export interface ControlProps {
  'aria-controls': string;
  'aria-expanded': boolean;
  'aria-labelledby': string;
  onClick: () => void;
}

export const useSidePanel = (config?: UseSidePanelProps) => {
  const [touched, setTouched] = React.useState(false);
  const configParams = config
    ? config
    : {
        initialExpanded: true,
        panelId: undefined,
        labelId: undefined,
      };

  const {initialExpanded = true, panelId: panelIdParam, labelId: labelIdParam} = configParams;

  const [expanded, setExpanded] = React.useState(initialExpanded);
  const panelId = useUniqueId(panelIdParam);
  const labelId = useUniqueId(labelIdParam);

  // This prevents keyframes animations from rendering prematurely
  const handleSetTouched = () => {
    if (touched === false) {
      setTouched(true);
    }
  };

  const handleClick = () => {
    handleSetExpanded(!expanded);
  };

  const handleSetExpanded = (newExpandedState: boolean) => {
    handleSetTouched();
    setExpanded(newExpandedState);
  };

  const panelProps: PanelProps = {
    expanded: expanded,
    id: panelId,
    'aria-labelledby': labelId,
    touched,
  };

  const labelProps: LabelProps = {
    id: labelId,
  };

  const controlProps: ControlProps = {
    'aria-controls': panelId,
    'aria-expanded': expanded,
    'aria-labelledby': labelId,
    onClick: handleClick,
  };

  return {
    expanded,
    setExpanded: handleSetExpanded,
    panelProps,
    labelProps,
    controlProps,
  };
};
