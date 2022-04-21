import React from 'react';

import {createComponent, styled, useModelContext} from '@workday/canvas-kit-react/common';
import {space, SystemIcon} from '@workday/canvas-kit-react';
import {chevronUpSmallIcon} from '@workday/canvas-system-icons-web';
import {ExpandableModelContext} from './Expandable';
import {DisclosureModel} from '@workday/canvas-kit-react/disclosure';

export interface EndChevronProps {
  model?: DisclosureModel;
}

const StyledIcon = styled(SystemIcon)<{isVisible: boolean}>(
  {
    padding: space.xxs,
  },
  ({isVisible}) => ({
    transform: !isVisible ? 'rotate(-180deg)' : undefined,
  })
);

export const EndChevron = createComponent()({
  displayName: 'Expandable.EndChevron',
  Component: ({model, ...elemProps}: EndChevronProps) => {
    const expandableModel = useModelContext(ExpandableModelContext, model);
    const state = expandableModel.state;
    const isVisible = state.visibility === 'visible';

    return <StyledIcon isVisible={isVisible} icon={chevronUpSmallIcon} {...elemProps} />;
  },
});
