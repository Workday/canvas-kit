import * as React from 'react';

import {accessibleHide, createComponent} from '@workday/canvas-kit-react/common';
import {FlexProps, mergeStyles} from '@workday/canvas-kit-react/layout';
import {createStencil, px2rem} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';

import {useLiveRegion} from './common/useLiveRegion';
import {PaginationModel} from './types';
import {PaginationContext} from './usePaginationModel';

export interface AdditionalDetailsProps extends Omit<FlexProps, 'children'> {
  children: (model: PaginationModel) => React.ReactNode | React.ReactNode;
  shouldAnnounceToScreenReader?: boolean;
  shouldHideDetails?: boolean;
}

export const paginationAdditionalDetailsStencil = createStencil({
  base: {
    display: 'flex',
    // ...system.legacy.type.subtext.md,
    // components do not support spreading for legacy type token
    fontFamily: system.fontFamily.default,
    fontWeight: system.fontWeight.normal,
    fontSize: system.legacy.fontSize.subtext.md,
    lineHeight: system.legacy.lineHeight.subtext.md,
    letterSpacing: system.legacy.letterSpacing.subtext.md,
    color: system.color.fg.muted.default,
    marginBlockStart: px2rem(12),
  },
  modifiers: {
    shouldHideDetails: {
      true: {
        ...accessibleHide,
        marginBlockStart: '0',
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
