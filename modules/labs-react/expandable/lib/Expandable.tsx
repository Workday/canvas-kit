import React from 'react';

import {createContainer, ExtractProps} from '@workday/canvas-kit-react/common';

import {ExpandableContent} from './ExpandableContent';
import {ExpandableTarget} from './ExpandableTarget';
import {ExpandableStartIcon} from './ExpandableStartIcon';
import {ExpandableEndIcon} from './ExpandableEndIcon';
import {ExpandableTitle} from './ExpandableTitle';
import {ExpandableAvatar} from './ExpandableAvatar';
import {Flex} from '@workday/canvas-kit-react/layout';
import {useExpandableModel} from './useExpandableModel';

export const ExpandableModelContext = useExpandableModel.Context;

export type ExpandableModelConfig = Partial<typeof useExpandableModel.defaultConfig> &
  typeof useExpandableModel.requiredConfig;

export interface ExpandableProps extends ExpandableModelConfig, ExtractProps<typeof Flex, never> {
  /**
   * The children of the `Expandable` container. This should contain `Expandable.Target` and
   * `Expandable.Container`
   */
  children?: React.ReactNode;
}

export const Expandable = createContainer('div')({
  modelHook: useExpandableModel,
  subComponents: {
    Target: ExpandableTarget,
    Content: ExpandableContent,
    StartIcon: ExpandableStartIcon,
    EndIcon: ExpandableEndIcon,
    Avatar: ExpandableAvatar,
    Title: ExpandableTitle,
  },
})<ExpandableProps>(({children, ...elementProps}, Element) => (
  <Flex as={Element} flexDirection={'column'} padding={'xxs'} {...elementProps}>
    {children}
  </Flex>
));
