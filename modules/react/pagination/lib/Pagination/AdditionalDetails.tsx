import * as React from 'react';
import {accessibleHide, createComponent} from '@workday/canvas-kit-react/common';
import {createStencil} from '@workday/canvas-kit-styling';
import {FlexProps, mergeStyles} from '@workday/canvas-kit-react/layout';
import {system} from '@workday/canvas-tokens-web';

import {PaginationModel} from './types';
import {useLiveRegion} from './common/useLiveRegion';
import {PaginationContext} from './usePaginationModel';

export interface AdditionalDetailsProps extends Omit<FlexProps, 'children'> {
  children: (model: PaginationModel) => React.ReactNode | React.ReactNode;
  shouldAnnounceToScreenReader?: boolean;
  shouldHideDetails?: boolean;
}

export const paginationAdditionalDetailsStencil = createStencil({
  base: {
    display: 'flex',
    ...system.type.subtext.medium,
    color: system.color.text.hint,
    marginBlockStart: system.space.x3,
  },
  modifiers: {
    shouldHideDetails: {
      true: {
        ...accessibleHide,
        marginBlockStart: system.space.zero,
      },
    },
  },
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
      <Element
        ref={ref}
        {...mergeStyles(
          {...liveRegionProps, ...elemProps},
          paginationAdditionalDetailsStencil({shouldHideDetails: elemProps.shouldHideDetails})
        )}
      >
        {typeof children === 'function' ? children(model) : children}
      </Element>
    );
  },
});
