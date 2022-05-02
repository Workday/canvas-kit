import React from 'react';

import {
  createComponent,
  ExtractProps,
  styled,
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

const StyledIcon = styled(SystemIcon)<{visible: boolean}>(
  {
    margin: `0 ${space.xxs} 0 0`,
    padding: space.xxxs,
  },
  ({visible}) => ({
    transform: !visible ? 'rotate(-90deg)' : undefined,
  })
);

export const ExpandableStartIcon = createComponent('span')({
  displayName: 'Expandable.StartIcon',
  Component: ({icon = chevronDownIcon, model, ...elemProps}: StartChevronProps, ref) => {
    const localModel = useModelContext(ExpandableModelContext, model);
    const props = useExpandableIcon(localModel, elemProps, ref);

    return <StyledIcon fill={colors.licorice200} icon={icon} {...props} />;
  },
});
