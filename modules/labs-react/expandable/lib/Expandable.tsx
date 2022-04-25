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
import {space} from '@workday/canvas-kit-react/tokens';
import {Flex, FlexProps} from '@workday/canvas-kit-react/layout';

export const ExpandableModelContext = React.createContext<DisclosureModel>({} as any);

export interface ExpandableProps extends DisclosureModelConfig, FlexProps {
  model?: DisclosureModel;
  children: React.ReactNode;
}

export const Expandable = createComponent('div')({
  displayName: 'Expandable',
  Component: ({children, model, ...elemProps}: ExpandableProps, Element) => {
    const config = elemProps as DisclosureModelConfig;
    const value = useDefaultModel(model, config, useDisclosureModel);
    const flexProps = elemProps as FlexProps;
    return (
      <ExpandableModelContext.Provider value={value}>
        <Flex {...flexProps} flexDirection={'column'} padding={space.xxs}>
          {children}
        </Flex>
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
