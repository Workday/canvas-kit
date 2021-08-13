import * as React from 'react';
import {createComponent, useModelContext} from '@workday/canvas-kit-react/common';
import {Box, BoxProps} from '@workday/canvas-kit-labs-react/common';

import {SidePanelModel, SidePanelModelContext, useSidePanelLabel} from './hooks';

export interface SidePanelLabelProps extends BoxProps {
  /**
   * Optionally pass a model directly to this component. Default is to implicitly use the same
   * model as the container component which uses React context. Only use this for advanced use-cases
   */
  model?: SidePanelModel;
}

export const SidePanelLabel = createComponent(Box)({
  displayName: 'SidePanel.Label',
  Component: ({model, children, ...elemProps}: SidePanelLabelProps, ref, Element) => {
    const localModel = useModelContext(SidePanelModelContext, model);
    const props = useSidePanelLabel(localModel, elemProps, ref);

    return (
      <Element ref={ref} {...props}>
        {children}
      </Element>
    );
  },
});
