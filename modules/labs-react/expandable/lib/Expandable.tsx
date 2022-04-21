import React from 'react';

import {createComponent, useDefaultModel} from '@workday/canvas-kit-react/common';

import {
  DisclosureModel,
  useDisclosureModel,
  DisclosureModelConfig,
} from '@workday/canvas-kit-react/disclosure';
import {ExpandableContent} from './ExpandableContent';
import {ExpandableTarget} from './ExpandableTarget';
import {StartChevron} from './StartChevron';
import {EndChevron} from './EndChevron';
import {Avatar} from '@workday/canvas-kit-react';
import {Title} from './Title';

export const ExpandableModelContext = React.createContext<DisclosureModel>({} as any);

export interface ExpandableProps extends DisclosureModelConfig {
  model?: DisclosureModel;
  children: React.ReactNode;
}

const ExpandableAvatar = <Avatar as="div" />;

export const Expandable = createComponent()({
  displayName: 'Expandable',
  Component: ({children, model, ...config}: ExpandableProps) => {
    const value = useDefaultModel(model, config, useDisclosureModel);

    return (
      <ExpandableModelContext.Provider value={value}>{children}</ExpandableModelContext.Provider>
    );
  },
  subComponents: {
    Target: ExpandableTarget,
    Content: ExpandableContent,
    StartChevron: StartChevron,
    EndChevron: EndChevron,
    Avatar: ExpandableAvatar,
    Title: Title,
    // MultiLineTitle,
  },
});
