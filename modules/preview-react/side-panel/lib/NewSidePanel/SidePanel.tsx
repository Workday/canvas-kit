/** @jsx jsx */
import * as React from 'react';
import {jsx} from '@emotion/core';
import {createComponent, useDefaultModel} from '@workday/canvas-kit-react/common';
import {Box, BoxProps} from '@workday/canvas-kit-labs-react/common';

import {SidePanelConfig, useSidePanelModel, SidePanelModel, SidePanelModelContext} from './hooks';
import {SidePanelLabel} from './SidePanelLabel';
import {SidePanelToggleButton} from './SidePanelToggleButton';

import {useSidePanel} from './hooks/useSidePanel';

export interface SidePanelProps extends SidePanelConfig, BoxProps {
  model?: SidePanelModel;
  children?: React.ReactNode;
}

export const NewSidePanel = createComponent('section')({
  displayName: 'SidePanel',
  // This is a little odd as `config` props and `elemProps` should technically be divided here.
  // Maybe we could provide a nice helper to do this?
  Component: ({children, model, ...elemProps}: SidePanelProps, ref, Element) => {
    const localModel = useDefaultModel(model, elemProps, useSidePanelModel);
    const width =
      localModel.state.expanded === 'expanded'
        ? localModel.state.expandedWidth
        : localModel.state.collapsedWidth;

    // A bit odd, but it makes sense to have a behavior hook for the SidePanel element.
    const sidePanelProps = useSidePanel(localModel, elemProps, ref);

    return (
      <SidePanelModelContext.Provider value={localModel}>
        <Box
          as={Element}
          backgroundColor="soap100"
          height="100%"
          position="relative"
          overflow="hidden"
          width={width}
          maxWidth={width}
          {...sidePanelProps}
        >
          {children}
        </Box>
      </SidePanelModelContext.Provider>
    );
  },
  subComponents: {
    Label: SidePanelLabel,
    ToggleButton: SidePanelToggleButton,
  },
});
