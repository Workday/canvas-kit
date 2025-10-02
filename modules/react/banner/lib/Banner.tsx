import * as React from 'react';

import {createContainer, ExtractProps, focusRing} from '@workday/canvas-kit-react/common';
import {Flex, mergeStyles} from '@workday/canvas-kit-react/layout';

import {useBannerModel} from './hooks';

import {BannerIcon} from './BannerIcon';
import {BannerLabel} from './BannerLabel';
import {BannerActionText} from './BannerActionText';
import {createStencil, px2rem} from '@workday/canvas-kit-styling';
import {brand, system} from '@workday/canvas-tokens-web';
import {systemIconStencil} from '@workday/canvas-kit-react/icon';

export interface BannerProps extends ExtractProps<typeof Flex, never> {
  /**
   * Children of the Banner. Should contain a `<Banner.Label>` a <Banner.Icon> and an optional `<Banner.ActionText>`
   */
  children?: React.ReactNode;
}

export const bannerStencil = createStencil({
  base: {
    ...system.type.subtext.large,
    // TODO: Need to update fontFamily token [#3221](https://github.com/Workday/canvas-kit/issues/3221).
    fontFamily: `${system.fontFamily.default}, Helvetica Neue, Helvetica, Arial, sans-serif`,
    fontWeight: system.fontWeight.medium,
    padding: `${system.space.x2} ${system.space.x4}`,
    border: '0',
    display: 'flex',
    alignItems: 'center',
    textAlign: 'left',
    borderStartStartRadius: system.shape.x1,
    borderStartEndRadius: system.shape.x1,
    borderEndStartRadius: system.shape.x1,
    borderEndEndRadius: system.shape.x1,
    cursor: 'pointer',
    transition: 'background-color 120ms',
    outline: `${system.space.x1} solid transparent`,
    '&:focus-visible, &.focus': {
      outline: `${system.shape.x1} double transparent`,
      ...focusRing({separation: 2}),
    },
  },
  modifiers: {
    hasErrors: {
      true: {
        backgroundColor: brand.error.base,
        color: brand.error.accent,
        '&:hover, &.hover': {
          background: brand.error.dark,
        },
        '& [data-part="exclamation-circle-icon"]': {
          [systemIconStencil.vars.accentColor]: 'currentColor',
          [systemIconStencil.vars.color]: 'currentColor',
          [systemIconStencil.vars.backgroundColor]: 'none',
        },
      },
      false: {
        backgroundColor: brand.alert.base,
        color: brand.alert.accent,
        '&:hover, &.hover': {
          background: brand.alert.dark,
        },
        '& [data-part="exclamation-triangle-icon"]': {
          [systemIconStencil.vars.accentColor]: 'currentColor',
          [systemIconStencil.vars.color]: 'currentColor',
          [systemIconStencil.vars.backgroundColor]: 'none',
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
