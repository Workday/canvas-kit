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
import {useInformationHighlightModel, Variant} from './modelHook';

const defaultIconStyles = {
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

const defaultIcons = {
  informational: infoIcon,
  caution: exclamationTriangleIcon,
  attention: exclamationCircleIcon,
};

export interface IconProps extends SystemIconProps {
  /**
   * Variant is used to determine if one of the three provided themes will be used for the icon
   * 'informational' is the default blue theme with a lowercase letter i in a circle for the icon
   * 'caution' is orange, with an exclamation point in a triangle
   * 'attention' is red with an exclamation point in a circle
   */
  variant: Variant;
}

export const Icon = createSubcomponent('span')({
  /** `InformationHighlight.Icon` renders {@link SystemIcon} under the hood. It's used as a decorative
   * element to visually support the {@link InformationHighlight.Heading} or
   * {@link InformationHighlight.Body} text. The accent color and general color of the icon can be
   * customized to fit any color palette being used for the Information Highlight
   *
   *
   * ```tsx
   * <InformationHighlight.Icon icon={uploadCloudIcon} color:{cssVar(base.blueberry400)}
   *   accent:{cssVar(base.frenchVanilla100)} />
   * ```
   */
  displayName: 'Icon',
  modelHook: useInformationHighlightModel,
})(({icon, accent, color, ...props}: IconProps, Element, model) => {
  return (
    <SystemIcon
      as={Element}
      icon={icon ? icon : defaultIcons[model.state.variant]}
      accent={accent ? accent : defaultIconStyles[model.state.variant].accent}
      color={color ? color : defaultIconStyles[model.state.variant].color}
      background={color ? color : defaultIconStyles[model.state.variant].background}
      {...props}
    />
  );
});
