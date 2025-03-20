import {SystemIcon} from '@workday/canvas-kit-react/icon';
import {createSubcomponent, ExtractProps} from '@workday/canvas-kit-react/common';
import {
  infoIcon,
  exclamationCircleIcon,
  exclamationTriangleIcon,
} from '@workday/canvas-system-icons-web';
import {useInformationHighlightModel} from '../hooks/useInformationHighlightModel';

export interface IconProps extends Partial<ExtractProps<typeof SystemIcon, never>> {}
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
      data-part="information-highlight-icon"
      {...props}
    />
  );
});
