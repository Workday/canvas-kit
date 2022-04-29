import React from 'react';

import {
  createComponent,
  styled,
  StyledType,
  useModelContext,
} from '@workday/canvas-kit-react/common';
import {colors, space, SystemIcon, SystemIconProps} from '@workday/canvas-kit-react';
import {chevronUpIcon} from '@workday/canvas-system-icons-web';
import {ExpandableModelContext} from './Expandable';
import {DisclosureModel} from '@workday/canvas-kit-react/disclosure';
import {CanvasSystemIcon} from '@workday/design-assets-types';
import {useExpandableIcon} from './hooks/useExpandableIcon';

export interface EndChevronProps extends Omit<SystemIconProps, 'icon'> {
  model?: DisclosureModel;
  /**
   * Icon to display from `@workday/canvas-accent-icons-web`.
   * @default chevronUpIcon
   */
  icon?: CanvasSystemIcon;
}

const StyledIcon = styled(SystemIcon)<{open: boolean} & StyledType>(
  {
    marginLeft: 'auto',
  },
  ({open}) => ({
    transform: !open ? 'rotate(-180deg)' : undefined,
    padding: !open
      ? `${space.xxxs} ${space.xs} ${space.xxxs} ${space.xxxs}`
      : `${space.xxxs} ${space.xxxs} ${space.xxxs} ${space.xs}`,
  })
);

export const EndIcon = createComponent()({
  displayName: 'Expandable.StartIcon',
  Component: ({icon = chevronUpIcon, model, ...elemProps}: EndChevronProps, ref, Element) => {
    const localModel = useModelContext(ExpandableModelContext, model);
    const props = useExpandableIcon(localModel, elemProps);
    return <StyledIcon as={Element} fill={colors.licorice200} icon={icon} ref={ref} {...props} />;
  },
});
