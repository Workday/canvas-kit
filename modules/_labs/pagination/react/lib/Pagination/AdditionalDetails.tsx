/** @jsx jsx */
import * as React from 'react';
import {jsx, css} from '@emotion/core';
import {type, typeColors} from '@workday/canvas-kit-react-core';
import {accessibleHide} from '@workday/canvas-kit-react-common';

import {PaginationModel} from './types';
import {Flex, FlexProps} from './common/Flex';
import {useLiveRegion} from './common/useLiveRegion';

export interface AdditionalDetailsProps extends PaginationModel, FlexProps {
  children: (model: PaginationModel) => React.ReactNode | React.ReactNode;
  shouldHideDetails?: boolean;
}

// Ideally, these styles would be applied directly to a Text component
const textStyles = css({
  ...type.body,
  color: typeColors.hint,
});

export const AdditionalDetails = ({
  state,
  events,
  children,
  shouldHideDetails = false,
  ...elemProps
}: AdditionalDetailsProps) => {
  const liveRegionProps = useLiveRegion();

  const detailStyles = css([textStyles, shouldHideDetails ? accessibleHide : null]);

  return (
    <Flex
      mt={shouldHideDetails ? 'zero' : 'xs'}
      css={detailStyles}
      {...liveRegionProps}
      {...elemProps}
    >
      {typeof children === 'function' ? children({state, events}) : children}
    </Flex>
  );
};
