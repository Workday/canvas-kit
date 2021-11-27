/** @jsx jsx */
import {jsx} from '@emotion/core';

import {CSSProperties, space} from '@workday/canvas-kit-react/tokens';
import {ExtractProps, createComponent, useModelContext} from '@workday/canvas-kit-react/common';
import {useThemeRTL} from '@workday/canvas-kit-labs-react/common';
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

const styles: CSSProperties = {
  marginRight: space.xs,
};

export const BannerIcon = createComponent('span')({
  displayName: 'Banner.Icon',
  Component: ({icon = exclamationTriangleIcon, model, ...elemProps}: BannerIconProps, ref) => {
    const {themeRTL} = useThemeRTL();
    const localModel = useModelContext(BannerModelContext, model);

    // SystemIcon is still a class based component so we need to set ref manually.
    const {ref: iconRef, icon: defaultIcon, ...props} = useBannerIcon(localModel, elemProps, ref);

    return (
      <SystemIcon icon={icon ?? defaultIcon} iconRef={iconRef} css={themeRTL(styles)} {...props} />
    );
  },
});
