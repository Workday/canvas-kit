import React from 'react';
import {CSSObject} from '@emotion/styled';
import {
  styled,
  createElemPropsHook,
  useLocalRef,
  composeHooks,
  createSubcomponent,
} from '@workday/canvas-kit-react/common';
import {type} from '@workday/canvas-kit-react/tokens';
import {TooltipContainer} from '@workday/canvas-kit-react/tooltip';
import {Popper} from '@workday/canvas-kit-react/popup';
import {
  useListItemRegister,
  useOverflowListItemMeasure,
} from '@workday/canvas-kit-react/collection';
import {useTruncateTooltip} from './hooks/useTruncateTooltip';
import {useBreadcrumbsModel} from './hooks/useBreadcrumbsModel';

// default max-width for truncating text
const DEFAULT_MAX_WIDTH = 350;

export const truncateStyles = (maxWidth: number = DEFAULT_MAX_WIDTH): CSSObject => ({
  display: 'inline-block',
  maxWidth,
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
  minWidth: '94px',
});

export interface BreadcrumbsCurrentItemProps extends React.HTMLAttributes<HTMLLIElement> {
  /**
   * The max-width of the text
   *
   * @default 350px
   */
  maxWidth?: number;
}

const ListItem = styled('li')(
  {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    textAlign: 'left',
    ...type.levels.subtext.large,
    fontWeight: 500,
  },

  ({maxWidth}: BreadcrumbsCurrentItemProps) => ({
    ...truncateStyles(maxWidth),
  })
);

export const useBreadcrumbsItem = composeHooks(
  createElemPropsHook(useBreadcrumbsModel)((_model: any, ref: any) => {
    const {localRef} = useLocalRef(ref);
    return {ref: localRef};
  }),
  useOverflowListItemMeasure,
  useListItemRegister
);

export const BreadcrumbsCurrentItem = createSubcomponent('li')({
  displayName: 'Breadcrumbs.Item',
  modelHook: useBreadcrumbsModel,
  elemPropsHook: useBreadcrumbsItem,
})<BreadcrumbsCurrentItemProps & {ref?: React.RefObject<HTMLLIElement>}>(
  ({children, maxWidth, ref, ...elemProps}, Element) => {
    const {
      isTooltipOpen,
      openTooltip,
      closeTooltip,
      shouldShowTooltip,
      tooltipProps,
    } = useTruncateTooltip(ref);

    return (
      <>
        <ListItem
          as={Element}
          ref={ref}
          maxWidth={maxWidth}
          onMouseEnter={openTooltip}
          onMouseLeave={closeTooltip}
          onFocus={openTooltip}
          onBlur={closeTooltip}
          {...(shouldShowTooltip && {tabIndex: 0})}
          {...elemProps}
        >
          {children}
        </ListItem>
        <Popper open={isTooltipOpen} anchorElement={ref} placement="top">
          <TooltipContainer {...tooltipProps}>{children}</TooltipContainer>
        </Popper>
      </>
    );
  }
);
