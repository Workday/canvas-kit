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
import {PaginationContext} from './usePaginationModel';

export interface AdditionalDetailsProps extends Omit<FlexProps, 'children'> {
  children: (model: PaginationModel) => React.ReactNode | React.ReactNode;
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
  Component(
    {children, shouldAnnounceToScreenReader, ...elemProps}: AdditionalDetailsProps,
    ref,
    Element
  ) {
    const model = React.useContext(PaginationContext);
    const liveRegionProps = useLiveRegion({shouldAnnounceToScreenReader});

    return (
      <StyledAdditionalDetails
        ref={ref}
        as={Element}
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
