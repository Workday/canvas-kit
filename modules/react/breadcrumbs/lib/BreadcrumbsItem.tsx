import * as React from 'react';
import {
  composeHooks,
  createSubcomponent,
  createElemPropsHook,
  useIsRTL,
} from '@workday/canvas-kit-react/common';
import {
  useListItemRegister,
  useOverflowListItemMeasure,
} from '@workday/canvas-kit-react/collection';
import {Flex, FlexProps} from '@workday/canvas-kit-react/layout';
import {SystemIcon} from '@workday/canvas-kit-react/icon';
import {chevronRightSmallIcon} from '@workday/canvas-system-icons-web';
import {colors, space} from '@workday/canvas-kit-react/tokens';
import {useBreadcrumbsModel} from './hooks/useBreadcrumbsModel';
import {BreadcrumbsLink} from './BreadcrumbsLink';

export interface BreadcrumbsItemProps extends FlexProps {
  /**
   * The contents of the action item. This will be the accessible name of the action for screen readers.
   *
   * ```tsx
   * <Breadcrumbs.Item>First Action</Breadcrumbs.Item>
   * ```
   */
  children: React.ReactNode;
  /**
   * The identifier of the action. This identifier will be used for correct overflow behavior.
   * If this property is not provided, it will default to a string representation
   * of the the zero-based index of the Item when it was initialized.
   */
  'data-id'?: string;
}

export const useBreadcrumbsItem = composeHooks(
  useOverflowListItemMeasure,
  createElemPropsHook(useBreadcrumbsModel)(
    (
      {state},
      _,
      elemProps: {
        'data-id'?: string;
        item?: {id: string};
      } = {}
    ) => {
      const [localId] = React.useState(elemProps['data-id'] || elemProps.item?.id || '');

      return {
        inert: state.nonInteractiveIds.includes(localId) ? '' : undefined,
        disabled: undefined,
      };
    }
  ),
  useListItemRegister
);

export const BreadcrumbsItem = createSubcomponent('li')({
  displayName: 'Breadcrumbs.Item',
  modelHook: useBreadcrumbsModel,
  elemPropsHook: useBreadcrumbsItem,
  subComponents: {
    Link: BreadcrumbsLink,
  },
})<BreadcrumbsItemProps>(({children, ...elemProps}, Element) => {
  return (
    <Flex as={Element} alignItems="center" whiteSpace="nowrap" {...elemProps}>
      {children}
      <SystemIcon
        icon={chevronRightSmallIcon}
        color={colors.licorice200}
        colorHover={colors.licorice200}
        size={20}
        height={space.l}
        width={space.l}
        shouldMirror={useIsRTL()}
        styles={{justifyContent: 'center', alignItems: 'center', display: 'inline-flex'}}
        aria-hidden
      />
    </Flex>
  );
});
