import React from 'react';

import {createSubcomponent} from '@workday/canvas-kit-react/common';
import {BoxProps, mergeStyles} from '@workday/canvas-kit-react/layout';
import {OverflowTooltip, OverflowTooltipProps} from '@workday/canvas-kit-react/tooltip';

import {usePillModel} from './usePillModel';

import {createStencil} from '@workday/canvas-kit-styling';

export interface PillLabelProps extends BoxProps {
  tooltipProps?: Omit<OverflowTooltipProps, 'children'>;
}

export const pillLabelStencil = createStencil({
  base: {
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    display: 'block',
  },
});

export const PillLabel = createSubcomponent('span')({
  modelHook: usePillModel,
})<PillLabelProps>(({tooltipProps, children, ...elemProps}, Element, model) => {
  return (
    <OverflowTooltip {...tooltipProps}>
      <Element
        data-part="pill-label"
        id={`label-${model.state.id}`}
        {...mergeStyles(elemProps, pillLabelStencil())}
      >
        {children}
      </Element>
    </OverflowTooltip>
  );
});
