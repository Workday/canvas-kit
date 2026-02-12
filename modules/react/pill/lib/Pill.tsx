import {buttonStencil} from '@workday/canvas-kit-react/button';
import {createContainer, focusRing} from '@workday/canvas-kit-react/common';
import {systemIconStencil} from '@workday/canvas-kit-react/icon';
import {Box, BoxProps, mergeStyles} from '@workday/canvas-kit-react/layout';
import {colorSpace, createStencil, cssVar, px2rem} from '@workday/canvas-kit-styling';
import {base, system} from '@workday/canvas-tokens-web';

import {PillAvatar} from './PillAvatar';
import {PillCount, pillCountStencil} from './PillCount';
import {PillIcon} from './PillIcon';
import {PillIconButton} from './PillIconButton';
import {PillLabel} from './PillLabel';
import {usePillModel} from './usePillModel';

export interface PillProps extends BoxProps {
  /**
   * Defines what kind of pill to render stylistically and its interaction states
   * @default 'default'
   */
  variant?: 'readOnly' | 'removable';
  /**
   * Determines the max width of the pill. If the pill text is longer than the max width,
   * text will be truncated and a tooltip will show the rest of the content when hovered over
   */
  maxWidth?: string | number;
}

export const pillStencil = createStencil({
  extends: buttonStencil,
  vars: {
    maxWidth: '',
  },
  base: ({maxWidth}) => ({
    display: 'initial',
    flexDirection: 'row',
    alignItems: 'center',
    // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
    borderRadius: cssVar(system.shape.sm, system.shape.x1),
    fontFamily: system.fontFamily.default,
    // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
    fontSize: cssVar(system.fontSize.subtext.lg, system.fontSize.subtext.large),
    // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
    letterSpacing: cssVar(system.letterSpacing.subtext.lg, base.letterSpacing150),
    // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
    lineHeight: cssVar(system.lineHeight.subtext.sm, system.lineHeight.subtext.small), // ensure correct line height when there's no elements and just text
    boxShadow: 'none',
    outline: 'none',
    fontWeight: system.fontWeight.medium,
    WebkitFontSmoothing: 'antialiased',
    MozOsxFontSmoothing: 'grayscale',
    width: 'fit-content',
    // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
    padding: `${px2rem(2)} ${cssVar(system.padding.xs, system.space.x2)}`,
    // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
    height: cssVar(system.size.xs, system.space.x6),
    position: 'relative',
    // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
    gap: cssVar(system.gap.xs, system.space.x1),
    maxWidth,
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
    overflow: 'hidden',
    // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
    [buttonStencil.vars.background]: cssVar(
      system.color.surface.alt.strong,
      system.color.bg.alt.default
    ),
    // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
    [buttonStencil.vars.border]: system.color.border.transparent,
    [buttonStencil.vars.label]: system.color.fg.strong,
    [systemIconStencil.vars.color]: 'currentColor',
    [pillCountStencil.vars.borderColor]: 'transparent',

    '&:has(span)': {
      display: 'flex',
      // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
      lineHeight: cssVar(system.lineHeight.subtext.lg, system.lineHeight.subtext.large), // ensure correct line height
    },
    '&:hover, &.hover': {
      // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
      // This is also a new way of introducing hover styles.
      // This is taking the first color value given and darkening with the mixin color.
      [buttonStencil.vars.background]: colorSpace.darken(
        system.color.surface.alt.strong,
        system.color.bg.alt.strong,
        system.color.surface.overlay.mixin,
        system.opacity.surface.hover
      ),
      [buttonStencil.vars.border]: system.color.border.transparent,
      [buttonStencil.vars.label]: system.color.fg.stronger,
      [systemIconStencil.vars.color]: 'currentColor',
      [pillCountStencil.vars.borderColor]: 'transparent',
    },
    '&:active, &.active': {
      // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
      [buttonStencil.vars.background]: colorSpace.darken(
        system.color.surface.alt.strong,
        system.color.bg.alt.stronger,
        system.color.surface.overlay.mixin,
        system.opacity.surface.pressed
      ),
      [buttonStencil.vars.label]: system.color.fg.strong,
      [systemIconStencil.vars.color]: 'currentColor',
      [pillCountStencil.vars.borderColor]: 'transparent',
    },
    '&:focus-visible, &.focus': {
      // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
      [buttonStencil.vars.border]: cssVar(
        system.color.brand.border.primary,
        system.color.border.primary.default
      ),
      [buttonStencil.vars.label]: system.color.fg.strong,
      // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
      borderColor: cssVar(system.color.brand.border.primary, system.color.border.primary.default),
      [systemIconStencil.vars.color]: 'currentColor',

      ...focusRing({
        width: 0,
        // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
        innerColor: cssVar(system.color.brand.border.primary, system.color.border.primary.default),
        // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
        outerColor: cssVar(system.color.brand.border.primary, system.color.border.primary.default),
        separation: 1,
      }),
    },
    '&:disabled, &.disabled': {
      // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
      [buttonStencil.vars.background]: cssVar(
        system.color.surface.alt.strong,
        system.color.bg.alt.default
      ),
      [buttonStencil.vars.label]: system.color.fg.disabled,
      [systemIconStencil.vars.color]: 'currentColor',
      // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
      [pillCountStencil.vars.backgroundColor]: cssVar(
        system.color.surface.alt.strong,
        system.color.bg.alt.strong
      ),
      [pillCountStencil.vars.borderColor]: 'transparent',
    },
  }),
  modifiers: {
    variant: {
      readOnly: {
        border: `${px2rem(1)} solid ${cssVar(system.color.border.default, system.color.border.container)}`,
        cursor: 'default',
        [buttonStencil.vars.background]: system.color.bg.default,
        '&:hover, &.hover': {
          borderColor: cssVar(system.color.border.default, system.color.border.container),
          [buttonStencil.vars.background]: system.color.bg.default,
        },
        '&:focus-visible, &.focus': {
          [buttonStencil.vars.background]: system.color.bg.default,
        },
        '&:active, &.active': {
          [buttonStencil.vars.background]: system.color.bg.default,
        },
        '&:disabled, &.disabled': {
          [buttonStencil.vars.background]: system.color.bg.default,
        },
      },
      removable: {
        '&:focus-visible, &.focus': {
          [buttonStencil.vars.background]: system.color.bg.alt.default,
          [buttonStencil.vars.border]: system.color.border.input.default,
          [buttonStencil.vars.label]: system.color.fg.strong,
          boxShadow: 'none',
        },
        // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
        '&:hover, &.hover': {
          [buttonStencil.vars.background]: colorSpace.darken(
            system.color.surface.alt.strong,
            system.color.bg.alt.strong,
            system.color.surface.overlay.mixin,
            system.opacity.surface.hover
          ),
          [pillCountStencil.vars.backgroundColor]: cssVar(
            system.color.surface.transparent,
            system.color.bg.muted.softer
          ),
        },
        // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
        '&:active, &.active': {
          [buttonStencil.vars.background]: colorSpace.darken(
            system.color.surface.alt.strong,
            system.color.bg.alt.stronger,
            system.color.surface.overlay.mixin,
            system.opacity.surface.pressed
          ),
          [pillCountStencil.vars.backgroundColor]: cssVar(
            system.color.surface.transparent,
            system.color.bg.muted.softer
          ),
        },
        '&:disabled, &.disabled': {
          [buttonStencil.vars.background]: system.color.bg.alt.default,
          [systemIconStencil.vars.color]: 'currentColor',
        },
        cursor: 'default',
        overflow: 'revert', // override BaseButton overflow styles so the click target exists outside the pill for removable
        position: 'relative',
      },
    },
  },
});

/**
 * By default, a `Pill` renders an interactive element that accepts subcomponents. By "interactive"
 * we mean that the Pill container is a focusable element (a `<button>`). All leading elements
 * (icons or avatars) are intended to be descriptive, helping support the label. They should not
 * receive focus.
 *
 * `Pill` is the container component. It also provides a React context model for its subcomponents.
 * Based on the `variant` prop this component will render different styled `Pill`s.
 *
 * Example of read only:
 *
 * ```tsx
 * <Pill variant="readOnly">This is a read only</Pill>
 * ```
 *
 * Example of interactive:
 *
 * ```tsx
 * <Pill onClick={() => console.log('clicked')}>
 *   <Pill.Avatar /> Regina Skeltor
 * </Pill>
 * ```
 *
 * Example of removable:
 *
 * ```tsx
 * <Pill variant="removable">
 *   <Pill.Avatar /> Regina Skeltor
 *   <Pill.IconButton aria-label='Remove user' onClick={() => console.log('clicked')} />
 * </Pill>
 * ```
 *
 * If you set the `Pill` `variant` to `removable`, it will render a `<span>` element. You can then
 * provide a `Pill.IconButton` that acts as the focus target. This creates a smaller, more
 * intentional click target that prevents users from accidentally deleting an item.
 *
 * ```tsx
 * <Pill variant="removable">
 *   Shoes
 *   <Pill.IconButton aria-label='Remove user' onClick={() => console.log('handle remove')} />
 * </Pill>
 * ```
 */
export const Pill = createContainer('button')({
  displayName: 'Pill',
  modelHook: usePillModel,
  subComponents: {
    /**
     * This component renders an avatar. It supports all props of the `Avatar` component.
     *
     * ```tsx
     * <Pill variant="removable">
     *   <Pill.Avatar url={avatarUrl} />
     *    <Pill.Label>Regina Skeltor</Pill.Label>
     *   <Pill.IconButton aria-label='Remove user' onClick={() => console.log('handle remove')} />
     * </Pill>
     * ```
     */
    Avatar: PillAvatar,
    /**
     * This component renders its `children` as the count.
     *
     * ```tsx
     * <Pill onClick={() => console.warn('clicked')}>
     *    <Pill.Label>Shoes</Pill.Label>
     *   <Pill.Count>30</Pill.Count>
     * </Pill>
     * ```
     */
    Count: PillCount,
    /**
     * This component renders an `icon`. By default it renders a `plusIcon` but it can be overridden by
     * providing an icon to the `icon` prop. You must provide an `aria-label` for the icon.
     *
     * ```tsx
     * <Pill onClick={() => console.warn('clicked')}>
     *   <Pill.Icon aria-label='Add user' />
     *   <Pill.Label>Regina Skeltor</Pill.Label>
     * </Pill>
     * ```
     */
    Icon: PillIcon,
    /**
     * This component renders a custom icon button. It is only intended to be used with the
     * `removable` variant. By default, it renders a `xSmallIcon` but can be overridden by providing
     * an icon to the `icon` prop.
     *
     * ```tsx
     * <Pill variant="removable">
     *   <Pill.Label>Pink Shirts</Pill.Label>
     *   <Pill.IconButton aria-label='Remove item' onClick={() => console.warn('clicked')} />
     * </Pill>
     * ```
     */
    IconButton: PillIconButton,
    /**
     * This component renders a `<span>` that automatically handles overflow by rendering a tooltip.
     * There's no need to use this component directly since the overflow is handled for you automatically unless you have an icon or other element.
     *
     * ```tsx
     * <Pill variant="readOnly">
     *   <Pill.Label>Read-only</Pill.Label>
     * </Pill>
     * ```
     */
    Label: PillLabel,
  },
})<PillProps>(({variant, maxWidth = 200, children, ...elemProps}, Element, model) => {
  const maxWidthCSSValue = typeof maxWidth === 'number' ? px2rem(maxWidth) : maxWidth;

  const isReadOnly = variant === 'readOnly';

  return variant?.match(/^(readOnly|removable)$/) ? (
    <Box
      as={Element !== 'button' ? Element : 'span'}
      id={isReadOnly ? model.state.id : undefined}
      {...mergeStyles(elemProps, [
        model.state.disabled ? 'disabled' : undefined,
        pillStencil({maxWidth: maxWidthCSSValue, variant}),
      ])}
    >
      {isReadOnly ? <PillLabel>{children}</PillLabel> : children}
    </Box>
  ) : (
    <Element
      disabled={model.state.disabled}
      {...mergeStyles(elemProps, [
        model.state.disabled ? 'disabled' : undefined,
        pillStencil({maxWidth: maxWidthCSSValue}),
      ])}
    >
      {children}
    </Element>
  );
});
