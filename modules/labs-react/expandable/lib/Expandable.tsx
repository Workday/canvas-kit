import React from 'react';

import {createComponent, useDefaultModel} from '@workday/canvas-kit-react/common';

import {
  DisclosureModel,
  useDisclosureModel,
  DisclosureModelConfig,
} from '@workday/canvas-kit-react/disclosure';
import {ExpandableContent} from './ExpandableContent';
import {ExpandableTarget} from './ExpandableTarget';
import {StartIcon} from './ExpandableStartIcon';
import {EndIcon} from './ExpandableEndIcon';
import {Title} from './ExpandableTitle';
import {ExpandableAvatar} from './ExpandableAvatar';
import {space} from '@workday/canvas-kit-react/tokens';
import {Flex, FlexProps} from '@workday/canvas-kit-react/layout';

export const ExpandableModelContext = React.createContext<DisclosureModel>({} as any);

export interface ExpandableProps extends DisclosureModelConfig, FlexProps {
  model?: DisclosureModel;
  /**
   * Children of the Expandable container. This should contain Expandable.Target and Expandable.Container
   */
  children: React.ReactNode;
}

export const Expandable = createComponent('div')({
  displayName: 'Expandable',
  Component: ({children, model, ...props}: ExpandableProps, ref) => {
    const config = props as DisclosureModelConfig;
    const value = useDefaultModel(model, config, useDisclosureModel);
    const flexProps = props as FlexProps;
    return (
      <ExpandableModelContext.Provider value={value}>
        <Flex ref={ref} {...flexProps} flexDirection={'column'} padding={space.xxs}>
          {children}
        </Flex>
      </ExpandableModelContext.Provider>
    );
  },
  subComponents: {
    Target: ExpandableTarget,
    Content: ExpandableContent,
    StartIcon: StartIcon,
    EndIcon: EndIcon,
    Avatar: ExpandableAvatar,
    Title: Title,
  },
});
