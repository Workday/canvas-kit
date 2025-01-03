import * as React from 'react';
import {SystemIcon, SystemIconProps, systemIconStencil} from '@workday/canvas-kit-react/icon';
import {createSubcomponent, ExtractProps} from '@workday/canvas-kit-react/common';
import {createStencil, handleCsProp} from '@workday/canvas-kit-styling';
import {
  infoIcon,
  exclamationCircleIcon,
  exclamationTriangleIcon,
} from '@workday/canvas-system-icons-web';
import {base} from '@workday/canvas-tokens-web';
import {useInformationHighlightModel} from '../hooks/useInformationHighlightModel';

export interface IconProps extends Omit<Partial<ExtractProps<typeof SystemIcon, never>>, 'icon'> {
  icon?: SystemIconProps['icon'];
}

const informationIconStencil = createStencil({
  extends: systemIconStencil,
  base: {},
  modifiers: {
    informational: {
      low: {
        [systemIconStencil.vars.accentColor]: base.blueberry400,
        [systemIconStencil.vars.color]: base.blueberry400,
        [systemIconStencil.vars.backgroundColor]: 'none',
      },
      high: {
        [systemIconStencil.vars.accentColor]: base.frenchVanilla100,
        [systemIconStencil.vars.color]: base.blueberry400,
        [systemIconStencil.vars.backgroundColor]: base.blueberry400,
      },
    },
    caution: {
      low: {
        [systemIconStencil.vars.accentColor]: base.blackPepper400,
        [systemIconStencil.vars.color]: base.blackPepper400,
        [systemIconStencil.vars.backgroundColor]: 'none',
      },
      high: {
        [systemIconStencil.vars.accentColor]: base.frenchVanilla100,
        [systemIconStencil.vars.color]: base.blackPepper400,
        [systemIconStencil.vars.backgroundColor]: base.blackPepper400,
      },
    },
    critical: {
      low: {
        [systemIconStencil.vars.accentColor]: base.cinnamon500,
        [systemIconStencil.vars.color]: base.cinnamon500,
        [systemIconStencil.vars.backgroundColor]: 'none',
      },
      high: {
        [systemIconStencil.vars.accentColor]: base.frenchVanilla100,
        [systemIconStencil.vars.color]: base.cinnamon500,
        [systemIconStencil.vars.backgroundColor]: base.cinnamon500,
      },
    },
  },
});

const defaultIcons = {
  informational: infoIcon,
  caution: exclamationTriangleIcon,
  critical: exclamationCircleIcon,
};

export const Icon = createSubcomponent('span')({
  displayName: 'Icon',
  modelHook: useInformationHighlightModel,
})(({icon, ...props}: IconProps, Element, model) => {
  return (
    <SystemIcon
      as={Element}
      icon={icon ? icon : defaultIcons[model.state.variant]}
      {...handleCsProp(
        props,
        informationIconStencil({[model.state.variant]: model.state.emphasis})
      )}
    />
  );
});
