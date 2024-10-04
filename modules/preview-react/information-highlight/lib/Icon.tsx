import * as React from 'react';
import {SystemIcon, SystemIconProps} from '@workday/canvas-kit-react/icon';
import {createSubcomponent} from '@workday/canvas-kit-react/common';
import {cssVar} from '@workday/canvas-kit-styling';
import {
  infoIcon,
  exclamationCircleIcon,
  exclamationTriangleIcon,
} from '@workday/canvas-system-icons-web';
import {base} from '@workday/canvas-tokens-web';
import {useInformationHighlightModel} from './modelHook';

type Variant = 'informational' | 'caution' | 'attention';

const iconStyles = {
  informational: {
    accent: cssVar(base.frenchVanilla100),
    background: cssVar(base.blueberry400),
    color: cssVar(base.blueberry400),
  },
  caution: {
    accent: cssVar(base.frenchVanilla100),
    background: cssVar(base.cantaloupe400),
    color: cssVar(base.cantaloupe400),
  },
  attention: {
    accent: cssVar(base.frenchVanilla100),
    background: cssVar(base.cinnamon500),
    color: cssVar(base.cinnamon500),
  },
};

export interface IconProps extends SystemIconProps {
  variant: Variant;
}

const defaultIcons = {
  informational: infoIcon,
  caution: exclamationTriangleIcon,
  attention: exclamationCircleIcon,
};

export const Icon = createSubcomponent('span')({
  displayName: 'Icon',
  modelHook: useInformationHighlightModel,
})(({icon, accent, color, ...props}: IconProps, Element, model) => {
  return (
    <SystemIcon
      as={Element}
      icon={icon ? icon : defaultIcons[model.state.variant]}
      {...iconStyles[model.state.variant]}
      accent={accent ? accent : iconStyles[model.state.variant].accent}
      color={color ? color : iconStyles[model.state.variant].color}
      background={color ? color : iconStyles[model.state.variant].background}
      {...props}
    />
  );
});
