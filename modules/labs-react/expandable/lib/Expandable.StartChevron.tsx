import React from 'react';

import {createComponent, styled, useModelContext} from '@workday/canvas-kit-react/common';
import {colors, space, SystemIcon} from '@workday/canvas-kit-react';
import {chevronDownSmallIcon} from '@workday/canvas-system-icons-web';
import {ExpandableModelContext} from './Expandable';
import {DisclosureModel} from '@workday/canvas-kit-react/disclosure';

export interface StartChevronProps {
  model?: DisclosureModel;
}

const StyledIcon = styled(SystemIcon)<{isVisible: boolean}>(
  {
    padding: space.xxxs,
  },
  ({isVisible}) => ({
    transform: !isVisible ? 'rotate(-90deg)' : undefined,
  })
);

export const StartChevron = createComponent()({
  displayName: 'Expandable.StartChevron',
  Component: ({model, ...elemProps}: StartChevronProps, ref) => {
    const expandableModel = useModelContext(ExpandableModelContext, model);
    const state = expandableModel.state;
    const isVisible = state.visibility === 'visible';

    return (
      <StyledIcon
        fill={colors.licorice200}
        isVisible={isVisible}
        icon={chevronDownSmallIcon}
        ref={ref}
        {...elemProps}
      />
    );
  },
});
