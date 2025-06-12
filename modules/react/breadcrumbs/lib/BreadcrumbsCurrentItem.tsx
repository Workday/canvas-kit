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
import {Text, TextProps} from '@workday/canvas-kit-react/text';
import {system} from '@workday/canvas-tokens-web';
import {createStencil, handleCsProp, px2rem} from '@workday/canvas-kit-styling';
import {useBreadcrumbsModel} from './hooks/useBreadcrumbsModel';

export interface BreadcrumbsCurrentItemProps extends TextProps {
  tooltipProps?: OverflowTooltipProps;
}

export const breadcrumbsCurrentItemStencil = createStencil({
  vars: {
    maxWidth: '',
  },
  base: ({maxWidth}) => ({
    ...system.type.subtext.large,
    fontWeight: system.fontWeight.medium,
    color: system.color.text.default,
    display: 'inline-block',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
    overflow: 'hidden',
    maxWidth,
  }),
});

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
