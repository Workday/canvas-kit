import React from 'react';

import {
  createComponent,
  styled,
  StyledType,
  useModelContext,
} from '@workday/canvas-kit-react/common';
import {colors, space, SystemIcon, SystemIconProps} from '@workday/canvas-kit-react';
import {chevronUpSmallIcon} from '@workday/canvas-system-icons-web';
import {ExpandableModelContext} from './Expandable';
import {DisclosureModel} from '@workday/canvas-kit-react/disclosure';

export interface EndChevronProps extends Omit<SystemIconProps, 'icon'> {
  model?: DisclosureModel;
}

const StyledIcon = styled(SystemIcon)<{isVisible: boolean} & StyledType>(
  {
    padding: space.xxxs,
    marginLeft: 'auto',
  },
  ({isVisible}) => ({
    transform: !isVisible ? 'rotate(-180deg)' : undefined,
    paddingRight: !isVisible ? space.xs : space.xxxs,
    paddingLeft: !isVisible ? space.xxxs : space.xs,
  })
);

export const EndChevron = createComponent()({
  displayName: 'Expandable.EndChevron',
  Component: ({model, ...elemProps}: EndChevronProps, ref, Element) => {
    const expandableModel = useModelContext(ExpandableModelContext, model);
    const state = expandableModel.state;
    const isVisible = state.visibility === 'visible';
    return (
      <StyledIcon
        as={Element}
        fill={colors.licorice200}
        isVisible={isVisible}
        icon={chevronUpSmallIcon}
        ref={ref}
        {...elemProps}
      />
    );
  },
});
