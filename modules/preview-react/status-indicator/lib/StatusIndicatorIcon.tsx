import {createComponent} from '@workday/canvas-kit-react/common';
import {SystemIcon, SystemIconProps} from '@workday/canvas-kit-react/icon';

export interface StatusIndicatorIconProps extends SystemIconProps {}

export const StatusIndicatorIcon = createComponent('span')({
  displayName: 'StatusIndicatorIcon',
  Component: (elemProps: SystemIconProps, ref, Element) => {
    return <SystemIcon as={Element} ref={ref} size={20} role="img" {...elemProps} />;
  },
});
