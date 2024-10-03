import * as React from 'react';
import {SystemIcon, SystemIconProps} from '@workday/canvas-kit-react/icon';
import {createSubcomponent} from '@workday/canvas-kit-react/common';
import {cssVar} from '@workday/canvas-kit-styling';
import {
  infoIcon,
  exclamationCircleIcon,
  exclamationTriangleIcon,
} from '@workday/canvas-system-icons-web';
import {base, system} from '@workday/canvas-tokens-web';
import {useInformationHighlightModel} from './modelHook';

type Variant = 'informational' | 'caution' | 'attention';

const iconStyles = {
  informational: {
    accent: system.color.static.white,
    background: cssVar(base.blueberry400),
    color: cssVar(base.blueberry400),
  },
  caution: {
    accent: system.color.static.white,
    background: cssVar(base.cantaloupe400),
    color: cssVar(base.cantaloupe400),
  },
  attention: {
    accent: system.color.static.white,
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
})(({icon, ...props}: IconProps, Element, model) => {
  return (
    <SystemIcon
      as={Element}
      icon={icon ? icon : defaultIcons[model.state.variant]}
      {...iconStyles[model.state.variant]}
      {...props}
    />
  );
});
