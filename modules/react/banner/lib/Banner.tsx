/** @jsxRuntime classic */
/** @jsx jsx */
import {jsx} from '@emotion/react';
import * as React from 'react';

import {borderRadius, CSSProperties, space, type} from '@workday/canvas-kit-react/tokens';
import {
  createContainer,
  ExtractProps,
  focusRing,
  hideMouseFocus,
  useIsRTL,
} from '@workday/canvas-kit-react/common';
import {Flex} from '@workday/canvas-kit-react/layout';

import {useBanner, useBannerModel, useThemedPalette} from './hooks';

import {BannerIcon} from './BannerIcon';
import {BannerLabel} from './BannerLabel';
import {BannerActionText} from './BannerActionText';

export interface BannerProps extends ExtractProps<typeof Flex, never> {
  /**
   * Children of the Banner. Should contain a `<Banner.Label>` a <Banner.Icon> and an optional `<Banner.ActionText>`
   */
  children?: React.ReactNode;
}

// Remove color from our type since it is set on the Flex style attribute
const {color: _color, ...typeLevelsSubtextLarge} = type.levels.subtext.large;

const styles: CSSProperties = {
  ...typeLevelsSubtextLarge,
  cursor: 'pointer',
  fontWeight: type.properties.fontWeights.medium,
  textAlign: 'left',
  transition: 'background-color 120ms',
  '&:focus': {
    outline: 'none',
    ...focusRing({separation: 2}),
  },
  ...hideMouseFocus,
};

export const Banner = createContainer('button')({
  displayName: 'Banner',
  modelHook: useBannerModel,
  elemPropsHook: useBanner,
  subComponents: {
    Icon: BannerIcon,
    Label: BannerLabel,
    ActionText: BannerActionText,
  },
})<BannerProps>(({children, ...elemProps}, Element, model) => {
  const palette = useThemedPalette(model.state.hasError ? 'error' : 'alert');
  const themedBackgroundStyles: CSSProperties = {
    '&:hover': {
      backgroundColor: palette.hover,
    },
  };

  const isRTL = useIsRTL();
  const borderBottomLeftRadius = isRTL ? 'borderBottomRightRadius' : 'borderBottomLeftRadius';
  const borderTopLeftRadius = isRTL ? 'borderTopRightRadius' : 'borderTopLeftRadius';
  const borderBottomRightRadius = isRTL ? 'borderBottomLeftRadius' : 'borderBottomRightRadius';
  const borderTopRightRadius = isRTL ? 'borderTopLeftRadius' : 'borderTopRightRadius';

  const borderStyleProps = {
    [borderBottomLeftRadius]: borderRadius.m,
    [borderTopLeftRadius]: borderRadius.m,
    [borderBottomRightRadius]: model.state.isSticky ? 0 : borderRadius.m,
    [borderTopRightRadius]: model.state.isSticky ? 0 : borderRadius.m,
  };

  return (
    <Flex
      as={Element}
      width={model.state.isSticky ? '222px' : '328px'}
      backgroundColor={palette.normal}
      color={palette.contrast}
      padding={`${space.xxs} ${space.s}`}
      border="0"
      display="flex"
      alignItems="center"
      {...borderStyleProps}
      css={[styles, themedBackgroundStyles]}
      {...elemProps}
    >
      {children}
    </Flex>
  );
});
