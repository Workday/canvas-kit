/** @jsxRuntime classic */
/** @jsx jsx */
import {jsx} from '@emotion/react';
import * as React from 'react';

import {borderRadius, CSSProperties, space, type} from '@workday/canvas-kit-react/tokens';
import {createContainer, ExtractProps, focusRing, useIsRTL} from '@workday/canvas-kit-react/common';
import {Flex} from '@workday/canvas-kit-react/layout';

import {useBannerModel, useThemedPalette} from './hooks';

import {BannerIcon} from './BannerIcon';
import {BannerLabel} from './BannerLabel';
import {BannerActionText} from './BannerActionText';

export interface BannerProps extends ExtractProps<typeof Flex, never> {
  /**
   * Children of the Banner. Should contain a `<Banner.Label>` a <Banner.Icon> and an optional `<Banner.ActionText>`
   */
  children?: React.ReactNode;
}

const styles: CSSProperties = {
  cursor: 'pointer',
  transition: 'background-color 120ms',
  '&:focus-visible, &.focus': {
    outline: 'none',
    ...focusRing({separation: 2}),
  },
};

/**
 * `Banner` is a container component rendered as a `<button>` element that is responsible for creating
 * a `BannerModel` and sharing it with its subcomponents using React context.
 *
 * ```tsx
 * <Banner
 * 	isSticky={true}
 * 	hasError={true}
 * 	id='custom-banner-id'
 * 	onClick={() => console.log('clicked banner')}
 * >
 *   {Child components}
 * </Banner>
 * ```
 *
 * Alternatively, you may pass in a model using the hoisted model pattern.
 *
 * ```tsx
 * const model = useBannerModel({
 *   isSticky: true,
 *   hasError: true,
 *   id: 'custom-banner-id',
 * });
 *
 * return (
 *   <Banner onClick={() => console.log('clicked banner')} model={model}>
 *     {Child components}
 *   </Banner>
 * );
 * ```
 */
export const Banner = createContainer('button')({
  displayName: 'Banner',
  modelHook: useBannerModel,
  subComponents: {
    /**
     * `Banner.Icon` is a styled {@link SystemIcon}. The icon defaults to exclamationTriangleIcon or
     * exclamationCircleIcon when the model's hasError is true.
     *
     * ```tsx
     * <Banner.Icon />
     * ```
     */
    Icon: BannerIcon,
    /**
     * `Banner.Label` is a styled {@link Flex}. This component will get an id that will be used for
     * the aria-describedby on the top level `<button>`.
     *
     * ```tsx
     * <Banner.Label>3 Warnings</Banner.Label>
     * ```
     */
    Label: BannerLabel,
    /**
     * `Banner.ActionText` is a styled {@link Box}. This component will get an id that will be used
     * for the aria-labelledby on the top level `<button>`. This component will be visually hidden
     * when the model's `isSticky` prop is set to true.
     *
     * ```tsx
     * <Banner.ActionText>Custom call to action</Banner.ActionText>
     * ```
     */
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
      {...type.levels.subtext.large}
      fontWeight="medium"
      textAlign="left"
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
