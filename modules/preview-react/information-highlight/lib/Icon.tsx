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

type Variant = 'emphasis' | 'caution' | 'attention';

const iconStyles = {
  emphasis: {
    accent: cssVar(base.blueberry400),
    fill: cssVar(base.blueberry400),
    background: 'none',
    accentHover: cssVar(base.blueberry400),
    fillHover: cssVar(base.blueberry400),
    backgroundHover: 'none',
  },
  caution: {
    accent: cssVar(base.blackPepper400),
    fill: cssVar(base.blackPepper400),
    background: 'none',
    accentHover: cssVar(base.blackPepper400),
    fillHover: cssVar(base.blackPepper400),
    backgroundHover: 'none',
  },
  attention: {
    accent: cssVar(base.cinnamon500),
    fill: cssVar(base.cinnamon500),
    background: 'none',
    accentHover: cssVar(base.cinnamon500),
    fillHover: cssVar(base.cinnamon500),
    backgroundHover: 'none',
  },
};

export interface IconProps extends SystemIconProps {
  variant: Variant;
}

const defaultIcons = {
  emphasis: infoIcon,
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
