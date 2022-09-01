import React from 'react';
import {CSSObject} from '@emotion/styled';
import {
  styled,
  createElemPropsHook,
  useLocalRef,
  composeHooks,
  createSubcomponent,
  StyledType,
  ellipsisStyles,
  useForkRef,
} from '@workday/canvas-kit-react/common';
import {OverflowTooltip, OverflowTooltipProps} from '@workday/canvas-kit-react/tooltip';
import {
  useListItemRegister,
  useOverflowListItemMeasure,
} from '@workday/canvas-kit-react/collection';
import {useBreadcrumbsModel} from './hooks/useBreadcrumbsModel';
import {Text} from '@workday/canvas-kit-react/text';

// default max-width for truncating text
const DEFAULT_MAX_WIDTH = 350;

export const truncateStyles = (maxWidth: number = DEFAULT_MAX_WIDTH): CSSObject => ({
  display: 'inline-block',
  maxWidth,
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
});

export interface BreadcrumbsCurrentItemProps extends React.HTMLAttributes<HTMLLIElement> {
  /**
   * The max-width of the text
   *
   * @default 350px
   */
  maxWidth?: number;
  tooltipProps?: OverflowTooltipProps;
}

const ListItem = styled(Text.as('li'))<BreadcrumbsCurrentItemProps & StyledType>(
  {
    alignItems: 'center',
    flexDirection: 'column',
  },
  ({maxWidth}: BreadcrumbsCurrentItemProps) => ({
    maxWidth,
    display: 'inline-block',
    ...ellipsisStyles,
  })
);

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
  ({children, tooltipProps = {}, maxWidth, ...elemProps}, Element) => {
    return (
      <OverflowTooltip {...tooltipProps}>
        <ListItem
          as={Element}
          typeLevel="subtext.large"
          maxWidth={maxWidth}
          fontWeight="medium"
          {...elemProps}
        >
          {children}
        </ListItem>
      </OverflowTooltip>
    );
  }
);
