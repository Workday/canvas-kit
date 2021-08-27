import * as React from 'react';

import {useUniqueId} from '@workday/canvas-kit-react/common';
/**
 * The optional config options for the `useSidePanel` hook
 */
export interface UseSidePanelProps {
  /**
   * sets the initial expanded state for the side panel
   * @default true
   */
  initialExpanded?: boolean;
  /**
   * sets the `id` for the panel
   * @default `uuid`-generated string
   */
  panelId?: string;
  /**
   * sets the `id` for the label
   * @default `uuid`-generated string
   */
  labelId?: string;
}

/**
 * The `panelProps` provided by the `useSidePanel` hook
 */
export interface PanelProps {
  /**
   * the expand / collasped state
   */
  expanded: boolean;
  /**
   * the accessible `id`
   * - this will either be a `uuid`-generated value or the `panelId` provided in the config
   */
  id: string;
  /**
   * the accessible label `id`
   * - this will either be a `uuid`-generated value or the `labelId` provided in the config
   */
  'aria-labelledby': string;
  /**
   * an internally-set boolean
   * - this prevents unintentional keyframe animations on the initial render
   */
  touched: boolean;
}

export interface LabelProps {
  /**
   * the accessible `id`
   * - this will either be a `uuid`-generated value or the `labelId` provided in the config
   */
  id: string;
}

export interface ControlProps {
  /**
   * the accessible `id` that connects the panel to this control
   * - this will either be a `uuid`-generated value or the `panelId` provided in the config
   */
  'aria-controls': string;
  /**
   * the accessible attribute that describes the expanded state of the panel
   * - this is set by the `expanded` state in the `useSidePanel` hook
   */
  'aria-expanded': boolean;
  /**
   * the accessible label `id`
   * - this will either be a `uuid`-generated value or the `labelId` provided in the config
   */
  'aria-labelledby': string;
  /**
   * the handler function for toggling the expanded / collapsed state
   */
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
