import * as React from 'react';
import {type, space, typeColors} from '@workday/canvas-kit-react/tokens';
import {
  accessibleHide,
  styled,
  StyledType,
  createComponent,
} from '@workday/canvas-kit-react/common';

import {PaginationModel} from './types';
import {Flex, FlexProps} from '@workday/canvas-kit-react/layout';
import {useLiveRegion} from './common/useLiveRegion';

export interface AdditionalDetailsProps extends Omit<FlexProps, 'children'> {
  children: (model: PaginationModel) => React.ReactNode | React.ReactNode;
  model: PaginationModel;
  shouldAnnounceToScreenReader?: boolean;
  shouldHideDetails?: boolean;
}

const StyledAdditionalDetails = styled(Flex)<
  StyledType & Pick<AdditionalDetailsProps, 'shouldHideDetails'>
>(({shouldHideDetails}) => {
  if (shouldHideDetails) {
    return {
      ...accessibleHide,
      marginTop: space.zero,
    };
  } else {
    return {
      marginTop: space.xs,
    };
  }
});

export const AdditionalDetails = createComponent('div')({
  displayName: 'Pagination.AdditionalDetails',
  Component({model, children, shouldAnnounceToScreenReader, ...elemProps}: AdditionalDetailsProps) {
    const liveRegionProps = useLiveRegion({shouldAnnounceToScreenReader});

    return (
      <StyledAdditionalDetails
        {...type.levels.subtext.medium}
        color={typeColors.hint}
        {...liveRegionProps}
        {...elemProps}
      >
        {typeof children === 'function' ? children(model) : children}
      </StyledAdditionalDetails>
    );
  },
});
