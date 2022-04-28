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

export interface EndChevronProps extends Omit<SystemIconProps, 'icon'> {
  model?: DisclosureModel;
  /**
   * Icon to display from `@workday/canvas-accent-icons-web`.
   * @default chevronUpIcon
   */
  icon?: CanvasSystemIcon;
}

const StyledIcon = styled(SystemIcon)<{isVisible: boolean} & StyledType>(
  {
    marginLeft: 'auto',
  },
  ({isVisible}) => ({
    transform: !isVisible ? 'rotate(-180deg)' : undefined,
    padding: !isVisible
      ? `${space.xxxs} ${space.xs} ${space.xxxs} ${space.xxxs}`
      : `${space.xxxs} ${space.xxxs} ${space.xxxs} ${space.xs}`,
  })
);

export const EndIcon = createComponent()({
  displayName: 'Expandable.StartIcon',
  Component: ({icon = chevronUpIcon, model, ...elemProps}: EndChevronProps, ref, Element) => {
    const expandableModel = useModelContext(ExpandableModelContext, model);
    const state = expandableModel.state;
    const isVisible = state.visibility === 'visible';
    return (
      <StyledIcon
        as={Element}
        fill={colors.licorice200}
        isVisible={isVisible}
        icon={icon}
        ref={ref}
        {...elemProps}
      />
    );
  },
});
