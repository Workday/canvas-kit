import React from 'react';

import {createContainer, ExtractProps} from '@workday/canvas-kit-react/common';
import {Flex} from '@workday/canvas-kit-react/layout';

import {ExpandableContent} from './ExpandableContent';
import {ExpandableTarget} from './ExpandableTarget';
import {ExpandableIcon} from './ExpandableIcon';
import {ExpandableTitle} from './ExpandableTitle';
import {ExpandableAvatar} from './ExpandableAvatar';
import {useExpandableModel} from './hooks/useExpandableModel';

export interface ExpandableProps extends ExtractProps<typeof Flex, never> {
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
    Icon: ExpandableIcon,
    Avatar: ExpandableAvatar,
    Title: ExpandableTitle,
  },
})<ExpandableProps>(({children, ...elementProps}, Element) => (
  <Flex as={Element} flexDirection={'column'} padding={'xxs'} {...elementProps}>
    {children}
  </Flex>
));
