import React from 'react';

import {createComponent, useDefaultModel} from '@workday/canvas-kit-react/common';

import {
  DisclosureModel,
  useDisclosureModel,
  DisclosureModelConfig,
} from '@workday/canvas-kit-react/disclosure';
import {ExpandableContent} from './ExpandableContent';
import {ExpandableHeading} from './ExpandableHeading';
import {ExpandableButton} from './ExpandableButton';

export const ExpandableModelContext = React.createContext<DisclosureModel>({} as any);

export interface ExpandableProps extends DisclosureModelConfig {
  model?: DisclosureModel;
  children: React.ReactNode;
}

export const Expandable = createComponent()({
  displayName: 'Expandable',
  Component: ({children, model, ...config}: ExpandableProps) => {
    const value = useDefaultModel(model, config, useDisclosureModel);

    return (
      <ExpandableModelContext.Provider value={value}>{children}</ExpandableModelContext.Provider>
    );
  },
  subComponents: {
    Heading: ExpandableHeading,
    Button: ExpandableButton,
    Content: ExpandableContent,
  },
});

{
  /* <>
<h1>
  <button aria-expanded={true} aria-controls={"content"}>
    <SystemIcon />
    <Avatar />
    Title
  </button>
</h1>
<div id="content">Content</div>
</> */
}
