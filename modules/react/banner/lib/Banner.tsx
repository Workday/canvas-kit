/** @jsxRuntime classic */
/** @jsx jsx */
import {jsx} from '@emotion/core';
import * as React from 'react';

import {borderRadius, CSSProperties, space, type} from '@workday/canvas-kit-react/tokens';
import {
  createComponent,
  ExtractProps,
  focusRing,
  hideMouseFocus,
  useDefaultModel,
  useIsRTL,
} from '@workday/canvas-kit-react/common';
import {Flex} from '@workday/canvas-kit-react/layout';

import {BannerModel, BannerModelConfig, useBanner, useBannerModel, useThemedPalette} from './hooks';

import {BannerIcon} from './BannerIcon';
import {BannerLabel} from './BannerLabel';
import {BannerActionText} from './BannerActionText';

export const BannerModelContext = React.createContext<BannerModel>({} as any);

export interface BannerProps extends BannerModelConfig, ExtractProps<typeof Flex, never> {
  model?: BannerModel;
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

export const Banner = createComponent('button')({
  displayName: 'Banner',
  Component: ({children, model, ...props}: BannerProps, ref, Element) => {
    const {hasError, isSticky, id, ...elemProps} = props;
    const value = useDefaultModel(model, {hasError, isSticky, id}, useBannerModel);

    const palette = useThemedPalette(hasError ? 'error' : 'alert');
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
      [borderBottomRightRadius]: isSticky ? 0 : borderRadius.m,
      [borderTopRightRadius]: isSticky ? 0 : borderRadius.m,
    };

    const bannerProps = useBanner(value, elemProps, ref);

    return (
      <BannerModelContext.Provider value={value}>
        <Flex
          as={Element}
          width={isSticky ? '222px' : '328px'}
          backgroundColor={palette.normal}
          color={palette.contrast}
          padding={`${space.xxs} ${space.s}`}
          border="0"
          display="flex"
          alignItems="center"
          {...borderStyleProps}
          css={[styles, themedBackgroundStyles]}
          {...bannerProps}
        >
          {children}
        </Flex>
      </BannerModelContext.Provider>
    );
  },
  subComponents: {
    Icon: BannerIcon,
    Label: BannerLabel,
    ActionText: BannerActionText,
  },
});
