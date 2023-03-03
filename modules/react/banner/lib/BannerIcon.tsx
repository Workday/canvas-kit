import React from 'react';
import {space} from '@workday/canvas-kit-react/tokens';
import {
  ExtractProps,
  createSubcomponent,
  styled,
  StyledType,
} from '@workday/canvas-kit-react/common';
import {SystemIcon} from '@workday/canvas-kit-react/icon';
import {CanvasSystemIcon} from '@workday/design-assets-types';

import {useBannerIcon, useBannerModel} from './hooks';

export interface BannerIconProps extends Omit<ExtractProps<typeof SystemIcon, never>, 'icon'> {
  /**
   * Icon to show next to label
   */
  icon?: CanvasSystemIcon;
}

const StyledBannerIcon = styled(SystemIcon)<StyledType>({
  marginRight: space.xs,
});

export const BannerIcon = createSubcomponent('span')({
  displayName: 'Banner.Icon',
  modelHook: useBannerModel,
  elemPropsHook: useBannerIcon,
})<BannerIconProps>((elemProps, Element, model) => {
  const {icon, ...iconButtonProps} = elemProps;

  return <StyledBannerIcon as={Element} icon={icon!} {...iconButtonProps} />;
});
