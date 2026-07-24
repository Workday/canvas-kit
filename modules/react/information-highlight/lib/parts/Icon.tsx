import {ExtractProps, createSubcomponent} from '@workday/canvas-kit-react/common';
import {SystemIcon} from '@workday/canvas-kit-react/icon';
import {
  exclamationCircleIcon,
  exclamationTriangleIcon,
  infoIcon,
  layersIcon,
} from '@workday/canvas-system-icons-web';

import {useInformationHighlightModel} from '../hooks/useInformationHighlightModel';

export interface IconProps extends Partial<ExtractProps<typeof SystemIcon, never>> {}
const defaultIcons = {
  default: layersIcon,
  informational: infoIcon,
  caution: exclamationTriangleIcon,
  critical: exclamationCircleIcon,
};

export const Icon = createSubcomponent('span')({
  displayName: 'Icon',
  modelHook: useInformationHighlightModel,
})(({icon, size = 'md', ...props}: IconProps, Element, model) => {
  return (
    <SystemIcon
      as={Element}
      icon={icon ? icon : defaultIcons[model.state.variant]}
      size={size}
      data-part="information-highlight-icon"
      {...props}
    />
  );
});
