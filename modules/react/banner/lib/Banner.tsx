import * as React from 'react';

import {ExtractProps, createContainer, focusRing} from '@workday/canvas-kit-react/common';
import {systemIconStencil} from '@workday/canvas-kit-react/icon';
import {Flex, mergeStyles} from '@workday/canvas-kit-react/layout';
import {colorSpace, createStencil, cssVar, px2rem} from '@workday/canvas-kit-styling';
import {brand, system} from '@workday/canvas-tokens-web';

import {BannerActionText} from './BannerActionText';
import {BannerIcon} from './BannerIcon';
import {BannerLabel} from './BannerLabel';
import {useBannerModel} from './hooks';

export interface BannerProps extends ExtractProps<typeof Flex, never> {
  /**
   * Children of the Banner. Should contain a `<Banner.Label>` a <Banner.Icon> and an optional `<Banner.ActionText>`
   */
  children?: React.ReactNode;
}

export const bannerStencil = createStencil({
  base: {
    // TODO: Need to update fontFamily token [#3221](https://github.com/Workday/canvas-kit/issues/3221).
    fontFamily: `${system.fontFamily.default}, Helvetica Neue, Helvetica, Arial, sans-serif`,
    fontWeight: system.fontWeight.medium,
    lineHeight: system.lineHeight.subtext.lg,
    fontSize: system.fontSize.subtext.lg,
    letterSpacing: system.letterSpacing.subtext.lg,
    padding: `${system.padding.xs} ${system.padding.md}`,
    border: '0',
    display: 'flex',
    alignItems: 'center',
    textAlign: 'left',
    borderStartStartRadius: system.shape.sm,
    borderStartEndRadius: system.shape.sm,
    borderEndStartRadius: system.shape.sm,
    borderEndEndRadius: system.shape.sm,
    cursor: 'pointer',
    transition: 'background-color 120ms',
    outline: `${system.gap.xs} solid transparent`,
    '&:focus-visible, &.focus': {
      outline: `${system.gap.xs} double transparent`,
      ...focusRing({separation: 2}),
    },
  },
  modifiers: {
    hasErrors: {
      true: {
        backgroundColor: system.color.brand.accent.critical,
        color: system.color.fg.inverse,
        '&:hover, &.hover': {
          background: colorSpace.darken({
            color: system.color.brand.accent.critical,
            fallback: brand.error.dark,
            mixinColor: system.color.surface.overlay.mixin,
            mixinValue: system.opacity.surface.hover,
          }),
        },
        '& [data-part="exclamation-circle-icon"]': {
          [systemIconStencil.vars.accentColor]: system.color.brand.accent.critical,
          [systemIconStencil.vars.color]: system.color.fg.inverse,
          [systemIconStencil.vars.backgroundColor]: system.color.fg.inverse,
        },
      },
      false: {
        backgroundColor: system.color.brand.accent.caution,
        color: system.color.fg.inverse,
        '&:hover, &.hover': {
          background: colorSpace.darken({
            color: system.color.brand.accent.caution,
            fallback: brand.alert.dark,
            mixinColor: system.color.surface.overlay.mixin,
            mixinValue: system.opacity.surface.hover,
          }),
        },
        '& [data-part="exclamation-triangle-icon"]': {
          [systemIconStencil.vars.accentColor]: cssVar(system.color.fg.inverse, 'currentColor'),
          [systemIconStencil.vars.color]: system.color.brand.fg.caution.strong,

          [systemIconStencil.vars.backgroundColor]: system.color.brand.fg.caution.strong,
        },
      },
    },
    isSticky: {
      true: {
        width: px2rem(222),
        borderStartEndRadius: 0,
        borderEndEndRadius: 0,
      },
      false: {
        width: px2rem(328),
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
     * `Banner.Label` is a div element with flex styles. This component will get an id that will be used for
     * the aria-describedby on the top level `<button>`.
     *
     * ```tsx
     * <Banner.Label>3 Warnings</Banner.Label>
     * ```
     */
    Label: BannerLabel,
    /**
     * `Banner.ActionText` is a span element. This component will get an id that will be used
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
  return (
    <Element
      {...mergeStyles(
        elemProps,
        bannerStencil({hasErrors: model.state.hasError, isSticky: model.state.isSticky})
      )}
    >
      {children}
    </Element>
  );
});
