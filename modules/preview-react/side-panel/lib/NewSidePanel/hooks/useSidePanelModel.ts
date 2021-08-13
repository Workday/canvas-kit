import * as React from 'react';
import {
  Model,
  createEventMap,
  useEventMap,
  ToModelConfig,
  useUniqueId,
} from '@workday/canvas-kit-react/common';

export type SidePanelOrigin = 'start' | 'end';
export type SidePanelTransitionStates = 'collapsed' | 'expanded' | 'collapsing' | 'expanding';

export type SidePanelState = {
  collapsedWidth: number | string;
  expandedWidth: number | string;
  expanded: SidePanelTransitionStates;
  labelId: string;
  origin: SidePanelOrigin;
  panelId: string;
  // touched: boolean;
};

export type SidePanelEvents = {
  collapse(data?: {}): void;
  expand(data?: {}): void;
  toggle(data?: {}): void;
};

const sidePanelEventMap = createEventMap<SidePanelEvents>()({
  guards: {
    shouldCollapse: 'collapse',
    shouldExpand: 'expand',
    shouldToggle: 'toggle',
  },
  callbacks: {
    onCollapse: 'collapse',
    onExpand: 'expand',
    onToggle: 'toggle',
  },
});

export type SidePanelConfig = {
  collapsedWidth?: number | string;
  expandedWidth?: number | string;
  initialExpanded?: boolean;
  labelId?: string;
  id?: string;
  origin?: SidePanelOrigin;
} & Partial<ToModelConfig<SidePanelState, SidePanelEvents, typeof sidePanelEventMap>>;

export type SidePanelModel = Model<SidePanelState, SidePanelEvents>;

export const useSidePanelModel = (config: SidePanelConfig = {}) => {
  const [expanded, setExpanded] = React.useState<SidePanelTransitionStates>(
    config.initialExpanded ? 'expanded' : 'collapsed'
  );

  const state = {
    collapsedWidth: config.collapsedWidth || 64,
    expandedWidth: config.expandedWidth || 320,
    labelId: useUniqueId(config.labelId),
    origin: config.origin || 'start',
    panelId: useUniqueId(config.id),
    expanded,
  };

  const events = useEventMap(sidePanelEventMap, state, config, {
    collapse() {
      setExpanded('collapsed');
    },
    expand() {
      setExpanded('expanded');
    },
    toggle() {
      if (state.expanded === 'expanded') {
        setExpanded('collapsed');
      } else {
        setExpanded('expanded');
      }
    },
  });

  return {state, events};
};

export const SidePanelModelContext = React.createContext({} as SidePanelModel);
