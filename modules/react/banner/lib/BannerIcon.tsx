import {ExtractProps, createSubcomponent} from '@workday/canvas-kit-react/common';
import {SystemIcon} from '@workday/canvas-kit-react/icon';
import {createStencil, handleCsProp} from '@workday/canvas-kit-styling';
import {system} from '@workday/canvas-tokens-web';
import {CanvasSystemIcon} from '@workday/design-assets-types';

import {useBannerIcon, useBannerModel} from './hooks';

export interface BannerIconProps extends Omit<ExtractProps<typeof SystemIcon, never>, 'icon'> {
  /**
   * Icon to show next to label
   */
  icon?: CanvasSystemIcon;
}

export const bannerIconStencil = createStencil({
  base: {
    marginInlineEnd: system.space.x3,
  },
});

export const BannerIcon = createSubcomponent('span')({
  displayName: 'Banner.Icon',
  modelHook: useBannerModel,
  elemPropsHook: useBannerIcon,
})<BannerIconProps>((elemProps, Element, model) => {
  const {icon, ...iconButtonProps} = elemProps;

  return (
    <SystemIcon
      as={Element}
      data-part={model.state.hasError ? 'exclamation-circle-icon' : 'exclamation-triangle-icon'}
      icon={icon!}
      {...handleCsProp(iconButtonProps, bannerIconStencil())}
    />
  );
});
