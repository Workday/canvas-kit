import React from 'react';

import {
  createComponent,
  focusRing,
  styled,
  useDefaultModel,
  useModelContext,
  mergeProps,
} from '@workday/canvas-kit-react/common';

import {SystemIcon, SystemIconProps} from '@workday/canvas-kit-react/icon';
import {PillModelContext} from './Pill';
import {PillModel} from './usePillModel';
import {xSmallIcon} from '@workday/canvas-system-icons-web';
import {CanvasSystemIcon} from '@workday/design-assets-types';
import {colors} from '@workday/canvas-kit-react/tokens';
import {BaseButton} from '@workday/canvas-kit-react/button';

export interface PillIconProps extends Omit<SystemIconProps, 'icon'> {
  model?: PillModel;
  icon?: CanvasSystemIcon;
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

      focusRing: focusRing({width: 0, innerColor: 'transparent', outerColor: 'transparent'}),
    },
    disabled: {
      icon: colors.licorice200,
    },
  };
};

const StyledHitTarget = styled('span')({
  height: 24,

  position: 'absolute',
  right: '4px',
  left: '4px',
  margin: '0 !important',
  borderRadius: '4px',
  '&:focus': {
    ...focusRing({outerColor: 'transparent', separation: 0}),
  },
});

export const PillIconButton = createComponent('button')({
  displayName: 'Pill.IconButton',
  Component: ({size, model, icon = xSmallIcon, ...elemProps}: PillIconProps, ref, Element) => {
    const {state} = useModelContext(PillModelContext, model);
    const props = mergeProps(
      {onClick: state.onDelete, style: {position: 'relative' as const}},
      elemProps
    );
    return (
      <BaseButton
        borderRadius="s"
        height={32}
        width={32}
        padding="zero"
        marginInlineEnd={'-14px !important'}
        paddingInlineEnd={'4px'}
        marginInlineStart="-4px !important"
        colors={getIconColors()}
        tabIndex={-1}
        {...props}
      >
        <StyledHitTarget tabIndex={0} />
        <SystemIcon icon={icon} ref={ref} size={20} />
      </BaseButton>
    );
  },
});
