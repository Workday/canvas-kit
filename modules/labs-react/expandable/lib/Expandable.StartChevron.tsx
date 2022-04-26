import React from 'react';

import {
  createComponent,
  styled,
  StyledType,
  useIsRTL,
  useModelContext,
} from '@workday/canvas-kit-react/common';
import {colors, space, SystemIcon, SystemIconProps} from '@workday/canvas-kit-react';
import {chevronDownIcon} from '@workday/canvas-system-icons-web';
import {ExpandableModelContext} from './Expandable';
import {DisclosureModel} from '@workday/canvas-kit-react/disclosure';

export interface StartChevronProps extends Omit<SystemIconProps, 'icon'> {
  model?: DisclosureModel;
}

const StyledIcon = styled(SystemIcon)<{isVisible: boolean} & StyledType>(
  {
    padding: space.xxxs,
  },
  ({isVisible}) => ({
    transform: !isVisible ? 'rotate(-90deg)' : undefined,
  })
);

export const StartChevron = createComponent()({
  displayName: 'Expandable.StartChevron',
  Component: ({model, ...elemProps}: StartChevronProps, ref, Element) => {
    const expandableModel = useModelContext(ExpandableModelContext, model);
    const state = expandableModel.state;
    const isVisible = state.visibility === 'visible';

    const isRTL = useIsRTL();
    const margin = isRTL ? 'marginLeft' : 'marginRight';

    return (
      <StyledIcon
        as={Element}
        fill={colors.licorice200}
        isVisible={isVisible}
        icon={chevronDownIcon}
        ref={ref}
        style={{[margin]: space.xxs}}
        {...elemProps}
      />
    );
  },
});
