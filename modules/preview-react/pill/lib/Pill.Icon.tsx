import React from 'react';

import {
  createComponent,
  focusRing,
  useDefaultModel,
  useModelContext,
} from '@workday/canvas-kit-react/common';

import {SystemIcon, SystemIconProps} from '@workday/canvas-kit-react/icon';
import {PillModel} from './usePillModel';
import {PillModelContext} from './Pill';
import {BaseButton} from '@workday/canvas-kit-react/button';
import {colors} from '@workday/canvas-kit-react/tokens';

export interface PillIconProps extends SystemIconProps {
  model?: PillModel;
}

const getIconColors = () => {
  return {
    default: {
      icon: colors.licorice200,
    },

    hover: {
      icon: colors.licorice500,
    },
    active: {
      icon: colors.licorice500,
    },
    focus: {
      icon: colors.licorice500,

      focusRing: focusRing({innerColor: colors.blueberry400}),
    },
    disabled: {
      icon: colors.licorice200,
    },
  };
};

export const PillIcon = createComponent('span')({
  displayName: 'Pill.Icon',
  Component: ({size, model, icon, ...elemProps}: PillIconProps, ref, Element) => {
    const {state} = useModelContext(PillModelContext, model);
    console.warn('icon', state.onClick);
    return (
      <>
        {state.onClick && (
          <SystemIcon
            marginInlineStart={'-4px'}
            marginInlineEnd={'4px'}
            ref={ref}
            as={Element}
            size={20}
            icon={icon}
            onClick={state.onDelete ? state.onDelete : undefined}
            {...elemProps}
          />
        )}
        {state.onDelete && (
          <BaseButton
            borderRadius="s"
            height={20}
            width={28}
            padding="zero"
            marginInlineEnd={'-8px'}
            marginInlineStart={'0px'}
            colors={getIconColors()}
            {...elemProps}
          >
            <SystemIcon
              icon={icon}
              ref={ref}
              size={20}
              onClick={state.onDelete ? state.onDelete : undefined}
            />
          </BaseButton>
        )}
      </>
    );
  },
});
