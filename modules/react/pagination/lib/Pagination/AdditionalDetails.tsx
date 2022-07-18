import * as React from 'react';
import {type, typeColors, space} from '@workday/canvas-kit-react/tokens';
import {accessibleHide, styled, StyledType} from '@workday/canvas-kit-react/common';

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
  const styles = {
    ...type.levels.subtext.medium,
    color: typeColors.hint,
  };
  if (shouldHideDetails) {
    return {
      ...styles,
      ...accessibleHide,
      marginTop: space.zero,
    };
  } else {
    return {
      ...styles,
      marginTop: space.xs,
    };
  }
});

export const AdditionalDetails = ({
  model,
  children,
  shouldAnnounceToScreenReader,
  ...elemProps
}: AdditionalDetailsProps) => {
  const liveRegionProps = useLiveRegion({shouldAnnounceToScreenReader});

  return (
    <StyledAdditionalDetails {...liveRegionProps} {...elemProps}>
      {typeof children === 'function' ? children(model) : children}
    </StyledAdditionalDetails>
  );
};
