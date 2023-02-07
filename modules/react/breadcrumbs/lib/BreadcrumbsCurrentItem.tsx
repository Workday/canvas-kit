import React from 'react';
import {
  createElemPropsHook,
  useLocalRef,
  composeHooks,
  createSubcomponent,
  useForkRef,
} from '@workday/canvas-kit-react/common';
import {OverflowTooltip, OverflowTooltipProps} from '@workday/canvas-kit-react/tooltip';
import {
  useListItemRegister,
  useOverflowListItemMeasure,
} from '@workday/canvas-kit-react/collection';
import {useBreadcrumbsModel} from './hooks/useBreadcrumbsModel';
import {Text, TextProps} from '@workday/canvas-kit-react/text';

export interface BreadcrumbsCurrentItemProps extends TextProps {
  tooltipProps?: OverflowTooltipProps;
}

export const useBreadcrumbsItem = composeHooks(
  createElemPropsHook(useBreadcrumbsModel)((_model: any, ref: any, elemProps) => {
    const {localRef} = useLocalRef(useForkRef(ref));
    let shouldShowTooltip = false;
    const refCurrent = localRef.current;

    if (refCurrent) {
      const {scrollWidth, clientWidth} = refCurrent as {scrollWidth: number; clientWidth: number};
      shouldShowTooltip = scrollWidth > clientWidth;
    }

    return {
      tabIndex: shouldShowTooltip ? 0 : undefined,
      ref: localRef,
    };
  }),
  useOverflowListItemMeasure,
  useListItemRegister
);

export const BreadcrumbsCurrentItem = createSubcomponent('li')({
  displayName: 'Breadcrumbs.Item',
  modelHook: useBreadcrumbsModel,
  elemPropsHook: useBreadcrumbsItem,
})<BreadcrumbsCurrentItemProps>(
  ({children, tooltipProps = {}, maxWidth = '350px', ...elemProps}, Element) => {
    return (
      <OverflowTooltip {...tooltipProps}>
        <Text
          as={Element}
          typeLevel="subtext.large"
          fontWeight="medium"
          display="inline-block"
          maxWidth={maxWidth}
          whiteSpace="nowrap"
          textOverflow="ellipsis"
          overflow="hidden"
          {...elemProps}
        >
          {children}
        </Text>
      </OverflowTooltip>
    );
  }
);
