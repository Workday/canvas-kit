import * as React from 'react';
import {SystemIcon, SystemIconProps, systemIconStencil} from '@workday/canvas-kit-react/icon';
import {createSubcomponent} from '@workday/canvas-kit-react/common';
import {cssVar} from '@workday/canvas-kit-styling';
import {
  infoIcon,
  exclamationCircleIcon,
  exclamationTriangleIcon,
} from '@workday/canvas-system-icons-web';
import {base} from '@workday/canvas-tokens-web';
import {useInformationHighlightModel, Variant, Emphasis} from '../hooks/modelHook';

export interface IconProps extends SystemIconProps {
  variant?: Variant;
  emphasis?: Emphasis;
}

const iconStyles = {
  informational: {
    low: systemIconStencil({
      accentColor: cssVar(base.blueberry400),
      color: cssVar(base.blueberry400),
      backgroundColor: 'none',
    }),
    high: systemIconStencil({
      accentColor: cssVar(base.frenchVanilla100),
      color: cssVar(base.blueberry400),
      backgroundColor: cssVar(base.blueberry400),
    }),
  },
  caution: {
    low: systemIconStencil({
      accentColor: cssVar(base.blackPepper400),
      color: cssVar(base.blackPepper400),
      backgroundColor: 'none',
    }),
    high: systemIconStencil({
      accentColor: cssVar(base.frenchVanilla100),
      color: cssVar(base.blackPepper400),
      backgroundColor: cssVar(base.blackPepper400),
    }),
  },
  attention: {
    low: systemIconStencil({
      accentColor: cssVar(base.cinnamon500),
      color: cssVar(base.cinnamon500),
      backgroundColor: 'none',
    }),
    high: systemIconStencil({
      accentColor: cssVar(base.frenchVanilla100),
      color: cssVar(base.cinnamon500),
      backgroundColor: cssVar(base.cinnamon500),
    }),
  },
};

const defaultIcons = {
  informational: infoIcon,
  caution: exclamationTriangleIcon,
  attention: exclamationCircleIcon,
};

export const Icon = createSubcomponent('span')({
  displayName: 'Icon',
  modelHook: useInformationHighlightModel,
})(({icon, ...props}: IconProps, Element, model) => {
  return (
    <SystemIcon
      as={Element}
      icon={icon ? icon : defaultIcons[model.state.variant]}
      {...iconStyles[model.state.variant][model.state.emphasis]}
      {...props}
    />
  );
});
