import React from 'react';
import {ExtractProps, createSubcomponent} from '@workday/canvas-kit-react/common';
import {SystemIcon} from '@workday/canvas-kit-react/icon';
import {CanvasSystemIcon} from '@workday/design-assets-types';
import {useBannerIcon, useBannerModel} from './hooks';
import {createStyles} from '@workday/canvas-kit-styling';

export interface BannerIconProps extends Omit<ExtractProps<typeof SystemIcon, never>, 'icon'> {
  /**
   * Icon to show next to label
   */
  icon?: CanvasSystemIcon;
}

const systemBannerIconStyles = createStyles({
  marginRight: `system.space.x3`,
});

export const BannerIcon = createSubcomponent('span')({
  displayName: 'Banner.Icon',
  modelHook: useBannerModel,
  elemPropsHook: useBannerIcon,
})<BannerIconProps>((elemProps, Element, model) => {
  const {icon, ...iconButtonProps} = elemProps;

  return <SystemIcon cs={systemBannerIconStyles} as={Element} icon={icon!} {...iconButtonProps} />;
});
