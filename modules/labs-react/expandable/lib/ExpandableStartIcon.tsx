import React from 'react';

import {
  createComponent,
  styled,
  StyledType,
  useModelContext,
} from '@workday/canvas-kit-react/common';
import {colors, space, SystemIcon, SystemIconProps} from '@workday/canvas-kit-react';
import {chevronDownIcon} from '@workday/canvas-system-icons-web';
import {ExpandableModelContext} from './Expandable';
import {DisclosureModel} from '@workday/canvas-kit-react/disclosure';
import {CanvasSystemIcon} from '@workday/design-assets-types';

export interface StartChevronProps extends Omit<SystemIconProps, 'icon'> {
  model?: DisclosureModel;
  /**
   * Icon to display from `@workday/canvas-accent-icons-web`.
   * @default chevronDownIcon
   */
  icon?: CanvasSystemIcon;
}

const StyledIcon = styled(SystemIcon)<{isVisible: boolean} & StyledType>(
  {
    margin: `0 ${space.xxs} 0 0`,
    padding: space.xxxs,
  },
  ({isVisible}) => ({
    transform: !isVisible ? 'rotate(-90deg)' : undefined,
  })
);

export const StartIcon = createComponent()({
  displayName: 'Expandable.StartIcon',
  Component: ({icon = chevronDownIcon, model, ...elemProps}: StartChevronProps, ref, Element) => {
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
