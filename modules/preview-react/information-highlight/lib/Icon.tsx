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
    color: cssVar(base.blueberry400),
  },
  caution: {
    color: cssVar(base.blackPepper400),
  },
  attention: {
    color: cssVar(base.cinnamon500),
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
})(({icon, ...props}: IconProps, Element) => {
  return (
    <SystemIcon
      as={Element}
      icon={icon ? icon : defaultIcons[props.variant]}
      {...iconStyles[props.variant]}
      {...props}
    />
  );
});
