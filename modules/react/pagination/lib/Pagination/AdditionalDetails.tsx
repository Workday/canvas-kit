import * as React from 'react';
import {type, typeColors} from '@workday/canvas-kit-react/tokens';
import {accessibleHide, styled} from '@workday/canvas-kit-react/common';

import {PaginationModel} from './types';
import {Flex, FlexProps} from '@workday/canvas-kit-labs-react/layout';
import {useLiveRegion} from './common/useLiveRegion';

export interface AdditionalDetailsProps extends FlexProps {
  children: (model: PaginationModel) => React.ReactNode | React.ReactNode;
  model: PaginationModel;
  shouldAnnounceToScreenReader?: boolean;
  shouldHideDetails?: boolean;
}

const StyledAdditionalDetails = styled(Flex)<Pick<AdditionalDetailsProps, 'shouldHideDetails'>>(
  ({shouldHideDetails}) => {
    const styles = {
      ...type.levels.subtext.medium,
      color: typeColors.hint,
    };
    if (shouldHideDetails) {
      return {
        ...styles,
        ...accessibleHide,
      };
    } else {
      return {
        ...styles,
      };
    }
  }
);

export const AdditionalDetails = ({
  model,
  children,
  shouldAnnounceToScreenReader,
  shouldHideDetails = false,
  ...elemProps
}: AdditionalDetailsProps) => {
  const liveRegionProps = useLiveRegion({shouldAnnounceToScreenReader});

  return (
    <StyledAdditionalDetails
      marginTop={shouldHideDetails ? 'zero' : 'xs'}
      {...liveRegionProps}
      {...elemProps}
    >
      {typeof children === 'function' ? children(model) : children}
    </StyledAdditionalDetails>
  );
};
