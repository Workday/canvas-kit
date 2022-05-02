import React from 'react';

import {
  createComponent,
  ExtractProps,
  styled,
  StyledType,
  useModelContext,
} from '@workday/canvas-kit-react/common';
import {colors, space, SystemIcon} from '@workday/canvas-kit-react';
import {chevronDownIcon} from '@workday/canvas-system-icons-web';
import {ExpandableModelContext} from './Expandable';
import {DisclosureModel} from '@workday/canvas-kit-react/disclosure';
import {CanvasSystemIcon} from '@workday/design-assets-types';
import {useExpandableIcon} from './hooks/useExpandableIcon';

export interface StartChevronProps extends Omit<ExtractProps<typeof SystemIcon, never>, 'icon'> {
  model?: DisclosureModel;
  /**
   * Icon to display from `@workday/canvas-accent-icons-web`
   * @default chevronDownIcon
   */
  icon?: CanvasSystemIcon;
}

const StyledIcon = styled(SystemIcon)<{open: boolean} & StyledType>(
  {
    margin: `0 ${space.xxs} 0 0`,
    padding: space.xxxs,
  },
  ({open}) => ({
    transform: !open ? 'rotate(-90deg)' : undefined,
  })
);

export const ExpandableStartIcon = createComponent()({
  displayName: 'Expandable.StartIcon',
  Component: ({icon = chevronDownIcon, model, ...elemProps}: StartChevronProps, ref, Element) => {
    const localModel = useModelContext(ExpandableModelContext, model);
    const props = useExpandableIcon(localModel, elemProps, ref);

    return <StyledIcon as={Element} fill={colors.licorice200} icon={icon} {...props} />;
  },
});
