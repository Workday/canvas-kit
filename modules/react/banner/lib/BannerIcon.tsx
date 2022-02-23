import React from 'react';
import {space} from '@workday/canvas-kit-react/tokens';
import {
  ExtractProps,
  createComponent,
  useModelContext,
  styled,
} from '@workday/canvas-kit-react/common';
import {SystemIcon} from '@workday/canvas-kit-react/icon';
import {exclamationTriangleIcon} from '@workday/canvas-system-icons-web';
import {CanvasSystemIcon} from '@workday/design-assets-types';

import {BannerModelContext} from './Banner';
import {BannerModel, useBannerIcon} from './hooks';

export interface BannerIconProps extends Omit<ExtractProps<typeof SystemIcon, never>, 'icon'> {
  model?: BannerModel;
  /**
   * Icon to show next to label
   * @default exclamationTriangleIcon or exclamationCircleIcon when hasError is true
   */
  icon?: CanvasSystemIcon;
}

const StyledBannerIcon = styled(SystemIcon)({
  marginRight: space.xs,
});

export const BannerIcon = createComponent('span')({
  displayName: 'Banner.Icon',
  Component: ({icon = exclamationTriangleIcon, model, ...elemProps}: BannerIconProps, ref) => {
    const localModel = useModelContext(BannerModelContext, model);

    // SystemIcon is still a class based component so we need to set ref manually.
    const {ref: iconRef, icon: defaultIcon, ...props} = useBannerIcon(localModel, elemProps, ref);

    return <StyledBannerIcon icon={icon ?? defaultIcon} iconRef={iconRef} {...props} />;
  },
});
