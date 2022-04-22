import React from 'react';

import {createComponent, useDefaultModel} from '@workday/canvas-kit-react/common';

import {
  DisclosureModel,
  useDisclosureModel,
  DisclosureModelConfig,
} from '@workday/canvas-kit-react/disclosure';
import {ExpandableContent} from './Expandable.Content';
import {ExpandableTarget} from './Expandable.Target';
import {StartChevron} from './Expandable.StartChevron';
import {EndChevron} from './Expandable.EndChevron';
import {Title} from './Expandable.Title';
import {ExpandableAvatar} from './Expandable.Avatar';
import {Box} from '../../common';
import {space} from '@workday/canvas-kit-react/tokens';

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
      <ExpandableModelContext.Provider value={value}>
        <Box padding={space.xxs}>{children}</Box>
      </ExpandableModelContext.Provider>
    );
  },
  subComponents: {
    Target: ExpandableTarget,
    Content: ExpandableContent,
    StartChevron: StartChevron,
    EndChevron: EndChevron,
    Avatar: ExpandableAvatar,
    Title: Title,
  },
});
