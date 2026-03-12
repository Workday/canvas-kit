import * as React from 'react';

import {ExtractProps, createContainer, focusRing} from '@workday/canvas-kit-react/common';
import {systemIconStencil} from '@workday/canvas-kit-react/icon';
import {Flex, mergeStyles} from '@workday/canvas-kit-react/layout';
import {colorSpace, createStencil, cssVar, px2rem} from '@workday/canvas-kit-styling';
import {base, brand, system} from '@workday/canvas-tokens-web';

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
    // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
    lineHeight: cssVar(system.lineHeight.subtext.lg, system.lineHeight.subtext.large),
    // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
    fontSize: cssVar(system.fontSize.subtext.lg, system.fontSize.subtext.large),
    // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
    letterSpacing: cssVar(system.letterSpacing.subtext.lg, base.letterSpacing150),
    // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
    padding: `${cssVar(system.padding.xs, system.space.x2)} ${cssVar(system.padding.md, system.space.x4)}`,
    border: '0',
    display: 'flex',
    alignItems: 'center',
    textAlign: 'left',
    // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
    borderStartStartRadius: cssVar(system.shape.sm, system.shape.x1),
    // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
    borderStartEndRadius: cssVar(system.shape.sm, system.shape.x1),
    // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
    borderEndStartRadius: cssVar(system.shape.sm, system.shape.x1),
    // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
    borderEndEndRadius: cssVar(system.shape.sm, system.shape.x1),
    cursor: 'pointer',
    transition: 'background-color 120ms',
    // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
    outline: `${cssVar(system.gap.xs, system.space.x1)} solid transparent`,
    '&:focus-visible, &.focus': {
      // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
      outline: `${cssVar(system.gap.xs, system.shape.x1)} double transparent`,
      ...focusRing({separation: 2}),
    },
  },
  modifiers: {
    hasErrors: {
      true: {
        // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
        backgroundColor: cssVar(system.color.brand.accent.critical, brand.error.base),
        // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
        color: cssVar(system.color.fg.inverse, brand.error.accent),
        // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
        '&:hover, &.hover': {
          background: colorSpace.darken(
            system.color.brand.accent.critical,
            brand.error.dark,
            system.color.surface.overlay.mixin,
            system.opacity.surface.hover
          ),
        },
        '& [data-part="exclamation-circle-icon"]': {
          // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
          [systemIconStencil.vars.accentColor]: cssVar(
            system.color.brand.accent.critical,
            'currentColor'
          ),
          // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
          [systemIconStencil.vars.color]: cssVar(system.color.fg.inverse, 'currentColor'),
          // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
          [systemIconStencil.vars.backgroundColor]: cssVar(system.color.fg.inverse, 'none'),
        },
      },
      false: {
        // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
        backgroundColor: cssVar(system.color.brand.accent.caution, brand.alert.base),
        color: brand.alert.accent,
        // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
        '&:hover, &.hover': {
          background: colorSpace.darken(
            system.color.brand.accent.caution,
            brand.alert.dark,
            system.color.surface.overlay.mixin,
            system.opacity.surface.hover
          ),
        },
        '& [data-part="exclamation-triangle-icon"]': {
          // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
          [systemIconStencil.vars.accentColor]: cssVar(system.color.fg.inverse, 'currentColor'),
          // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
          [systemIconStencil.vars.color]: cssVar(
            system.color.brand.fg.caution.strong,
            'currentColor'
          ),
          // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
          [systemIconStencil.vars.backgroundColor]: cssVar(
            system.color.brand.fg.caution.strong,
            'none'
          ),
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
