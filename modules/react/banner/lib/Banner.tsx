import * as React from 'react';

import {borderRadius} from '@workday/canvas-kit-react/tokens';
import {createContainer, ExtractProps, focusRing, useIsRTL} from '@workday/canvas-kit-react/common';
import {Flex} from '@workday/canvas-kit-react/layout';

import {useBannerModel} from './hooks';

import {BannerIcon} from './BannerIcon';
import {BannerLabel} from './BannerLabel';
import {BannerActionText} from './BannerActionText';
import {createStencil, handleCsProp, px2rem} from '@workday/canvas-kit-styling';
import {brand, system} from '@workday/canvas-tokens-web';
export interface BannerProps extends ExtractProps<typeof Flex, never> {
  /**
   * Children of the Banner. Should contain a `<Banner.Label>` a <Banner.Icon> and an optional `<Banner.ActionText>`
   */
  children?: React.ReactNode;
}

export const bannerStencil = createStencil({
  base: {
    ...system.type.subtext.large,
    fontWeight: system.fontWeight.medium,
    padding: `${system.space.x2} ${system.space.x4}`,
    border: '0',
    display: 'flex',
    alignItems: 'center',
    textAlign: 'left',
    cursor: 'pointer',
    transition: 'background-color 120ms',
    outline: `${system.space.x1} solid transparent`,
    '&:focus-visible, &.focus': {
      outline: `${px2rem(4)} double transparent`,
      ...focusRing({separation: 2}),
    },
  },
  modifiers: {
    hasErrors: {
      true: {
        backgroundColor: brand.error.base,
        color: brand.error.accent,
        '&:hover': {
          background: brand.error.dark,
        },
      },
      false: {
        backgroundColor: brand.alert.base,
        '&:hover': {
          background: brand.alert.dark,
        },
      },
    },
  },
});

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
      width={model.state.isSticky ? px2rem(222) : px2rem(328)}
      {...borderStyleProps}
      {...handleCsProp(elemProps, bannerStencil({hasErrors: model.state.hasError as any}))}
    >
      {children}
    </Flex>
  );
});
