import * as React from 'react';
import {createElemPropsHook} from '@workday/canvas-kit-react/common';
import {useActionBarModel} from './useActionBarModel';

/**
 * useActionBarButtonProps hook makes the first item as a PrimaryButton component
 * and sets onClick function as a passed function in an item object
 */
export const useActionBarButtonProps = createElemPropsHook(useActionBarModel)(
  (
    {state},
    _,
    elemProps: {
      'data-id'?: string;
      item?: {onClick: React.ReactEventHandler};
    } = {}
  ) => {
    const name = elemProps['data-id'] || '';
    const index = state.items.map(item => item.id).indexOf(name);

    const onClick = (event: React.MouseEvent<HTMLElement>) => {
      if (elemProps.item?.onClick) {
        return elemProps.item.onClick(event);
      }
    };

    return {
      isPrimary: index === 0,
      onClick,
    };
  }
);
