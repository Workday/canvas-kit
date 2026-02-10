import {
  useListItemRegister,
  useOverflowListItemMeasure,
} from '@workday/canvas-kit-react/collection';
import {
  composeHooks,
  createElemPropsHook,
  createSubcomponent,
  useForkRef,
  useLocalRef,
} from '@workday/canvas-kit-react/common';
import {Text, TextProps} from '@workday/canvas-kit-react/text';
import {OverflowTooltip, OverflowTooltipProps} from '@workday/canvas-kit-react/tooltip';
import {createStencil, cssVar, handleCsProp, px2rem} from '@workday/canvas-kit-styling';
import {base, system} from '@workday/canvas-tokens-web';

import {useBreadcrumbsModel} from './hooks/useBreadcrumbsModel';

export interface BreadcrumbsCurrentItemProps extends TextProps {
  maxWidth?: string | number;
  tooltipProps?: OverflowTooltipProps;
}

export const breadcrumbsCurrentItemStencil = createStencil({
  vars: {
    maxWidth: '',
  },
  base: ({maxWidth}) => ({
    // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
    fontFamily: system.fontFamily.default,
    // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
    fontSize: cssVar(system.fontSize.subtext.lg, system.fontSize.subtext.large),
    // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
    fontWeight: system.fontWeight.medium,
    // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
    letterSpacing: cssVar(system.letterSpacing.subtext.lg, base.letterSpacing150),
    // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
    lineHeight: cssVar(system.lineHeight.subtext.lg, system.lineHeight.subtext.large),
    // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
    color: cssVar(system.color.fg.default, system.color.text.default),
    display: 'inline-block',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
    overflow: 'hidden',
    maxWidth,
  }),
});

export const useBreadcrumbsItem = composeHooks(
  createElemPropsHook(useBreadcrumbsModel)((_model: any, ref: any) => {
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
          {...handleCsProp(
            elemProps,
            breadcrumbsCurrentItemStencil({
              maxWidth: typeof maxWidth === 'number' ? px2rem(maxWidth) : maxWidth,
            })
          )}
        >
          {children}
        </Text>
      </OverflowTooltip>
    );
  }
);
