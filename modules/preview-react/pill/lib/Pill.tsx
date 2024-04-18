import React from 'react';
import {CSSObject} from '@emotion/react';

import {BaseButton, buttonColorPropVars} from '@workday/canvas-kit-react/button';
import {
  createContainer,
  focusRing,
  mouseFocusBehavior,
  styled,
  StyledType,
} from '@workday/canvas-kit-react/common';
import {BoxProps, boxStyleFn, Flex} from '@workday/canvas-kit-react/layout';
import {borderRadius, colors, space, type} from '@workday/canvas-kit-react/tokens';
import {handleCsProp, CSProps, px2rem} from '@workday/canvas-kit-styling';

import {usePillModel} from './usePillModel';

import {PillIcon} from './PillIcon';
import {PillIconButton} from './PillIconButton';
import {PillCount} from './PillCount';
import {PillAvatar} from './PillAvatar';
import {PillLabel} from './PillLabel';
import {systemIconStencil} from '@workday/canvas-kit-react/icon';

export interface PillProps extends BoxProps {
  /**
   * Defines what kind of pill to render stylistically and its interaction states
   * @default 'default'
   */
  variant?: 'default' | 'readOnly' | 'removable';
}

const pillBaseStyles: CSSObject = {
  display: 'inline-flex',
  alignItems: 'center',
  borderRadius: borderRadius.m,
  flexShrink: 0,
  ...type.levels.subtext.large,
  color: colors.blackPepper400,
  boxShadow: 'none',
  outline: 'none',
  fontWeight: type.properties.fontWeights.medium,
  WebkitFontSmoothing: 'antialiased',
  MozOsxFontSmoothing: 'grayscale',
  width: 'fit-content',
  padding: `2px ${space.xxs}`,
  height: space.m,
  position: 'relative',
};

const StyledBasePill = styled(BaseButton.as('button'))<StyledType & PillProps>(
  {
    ...pillBaseStyles,
    '&:active, &:active:hover, &:active:focus': {
      'span[data-count="ck-pill-count"]': {
        backgroundColor: colors.soap600,
        border: 'none',
      },
    },

    ...mouseFocusBehavior({
      '&:focus': {
        'span[data-count="ck-pill-count"]': {
          border: 'none',
        },
      },
    }),
    [buttonColorPropVars.default.background]: colors.soap300,
    [buttonColorPropVars.default.border]: colors.licorice200,
    [buttonColorPropVars.default.label]: colors.blackPepper400,
    [systemIconStencil.vars.color]: colors.licorice200,
    button: {
      [systemIconStencil.vars.color]: colors.licorice200,
    },
    '&:focus-visible, &.focus': {
      [buttonColorPropVars.focus.background]: colors.soap300,
      [buttonColorPropVars.focus.border]: colors.blueberry400,
      [buttonColorPropVars.focus.label]: colors.blackPepper400,
      [systemIconStencil.vars.color]: colors.licorice500,
      button: {
        [systemIconStencil.vars.color]: colors.licorice500,
      },
      'span[data-count="ck-pill-count"]': {
        borderTop: `${px2rem(1)} solid ${colors.blueberry400}`,
        borderBottom: `${px2rem(1)} solid ${colors.blueberry400}`,
        borderRight: `${px2rem(1)} solid ${colors.blueberry400}`,
      },
    },
    '&:hover, &.hover': {
      [buttonColorPropVars.hover.background]: colors.soap400,
      [buttonColorPropVars.hover.border]: colors.licorice400,
      [buttonColorPropVars.hover.label]: colors.blackPepper400,
      [systemIconStencil.vars.color]: colors.licorice500,
      button: {
        [systemIconStencil.vars.color]: colors.licorice500,
      },
    },
    '&:active, &.active': {
      [buttonColorPropVars.active.background]: colors.soap500,
      [buttonColorPropVars.active.border]: colors.licorice500,
      [buttonColorPropVars.active.label]: colors.blackPepper400,
      [systemIconStencil.vars.color]: colors.licorice500,
      button: {
        [systemIconStencil.vars.color]: colors.licorice500,
      },
    },
    '&:disabled, &.disabled': {
      [buttonColorPropVars.disabled.background]: colors.soap100,
      [buttonColorPropVars.disabled.border]: colors.licorice100,
      [buttonColorPropVars.disabled.label]: colors.licorice100,
      [buttonColorPropVars.disabled.opacity]: '1',
      [systemIconStencil.vars.color]: colors.licorice100,
      button: {
        [systemIconStencil.vars.color]: colors.licorice100,
      },
    },
  },

  ({variant}) => ({
    '&:focus-visible, &:focus': {
      borderColor: variant === 'removable' ? undefined : colors.blueberry400,
      ...focusRing({
        width: 0,
        inset: 'inner',
        innerColor: colors.blueberry400,
        outerColor: colors.blueberry400,
        separation: 1,
      }),
    },
  }),
  boxStyleFn
);

const StyledNonInteractivePill = styled(StyledBasePill)<StyledType & CSProps>({
  [buttonColorPropVars.default.background]: colors.soap300,
  [buttonColorPropVars.default.border]: colors.licorice200,
  [buttonColorPropVars.default.label]: colors.blackPepper400,

  '&:focus-visible, &.focus': {
    [buttonColorPropVars.focus.background]: colors.soap300,
    [buttonColorPropVars.focus.border]: colors.licorice200,
    [buttonColorPropVars.focus.label]: colors.blackPepper400,
  },

  '&:hover, &.hover': {
    [buttonColorPropVars.hover.background]: colors.soap300,
    [buttonColorPropVars.hover.border]: colors.licorice200,
    [buttonColorPropVars.hover.label]: colors.blackPepper400,
  },

  '&:active, &.active': {
    [buttonColorPropVars.active.background]: colors.soap500,
    [buttonColorPropVars.active.border]: colors.licorice500,
    [buttonColorPropVars.active.label]: colors.blackPepper400,
  },

  '&:disabled, &.disabled': {
    [buttonColorPropVars.disabled.background]: colors.soap100,
    [buttonColorPropVars.disabled.label]: colors.licorice100,
    [buttonColorPropVars.disabled.border]: colors.licorice100,
  },
  cursor: 'default',
  overflow: 'revert', // override BaseButton overflow styles so the click target exists outside the pill for removable
  position: 'relative',
  '&:focus-visibile, &.focus': {
    ...focusRing({
      width: 0,
      innerColor: 'transparent',
      outerColor: 'transparent',
    }),
  },
});

const StyledReadOnlyPill = styled(StyledNonInteractivePill)<StyledType>({
  [buttonColorPropVars.default.background]: 'transparent',
  [buttonColorPropVars.hover.background]: 'transparent',
  [buttonColorPropVars.focus.background]: 'transparent',
  [buttonColorPropVars.active.background]: 'transparent',
  [buttonColorPropVars.disabled.background]: 'transparent',
  border: `${px2rem(1)} solid ${colors.licorice200}`,
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
 *   <Pill.IconButton onClick={() => console.log('clicked')} />
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
 *   <Pill.IconButton onClick={() => console.log('handle remove')} />
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
     *   Regina Skeltor
     *   <Pill.IconButton onClick={() => console.log('handle remove')} />
     * </Pill>
     * ```
     */
    Avatar: PillAvatar,
    /**
     * This component renders its `children` as the count.
     *
     * ```tsx
     * <Pill onClick={() => console.warn('clicked')}>
     *   Shoes
     *   <Pill.Count>30</Pill.Count>
     * </Pill>
     * ```
     */
    Count: PillCount,
    /**
     * This component renders an `icon`. It not be used with the `default` styling – not `readOnly`
     * or `removable` variants. By default it renders a `plusIcon` but it can be overridden by
     * providing an icon to the `icon` prop.
     *
     * ```tsx
     * <Pill onClick={() => console.warn('clicked')}>
     *   <Pill.Icon />
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
     *   Pink Shirts
     *   <Pill.IconButton onClick={() => console.warn('clicked')} />
     * </Pill>
     * ```
     */
    IconButton: PillIconButton,
    /**
     * This component renders a `<span>` that automatically handles overflow by rendering a tooltip.
     * There's no need to use this component directly since the overflow is handled for you automatically.
     *
     * ```tsx
     * <Pill variant="readOnly">
     *   <Pill.Label>Read-only</Pill.Label>
     * </Pill>
     * ```
     */
    Label: PillLabel,
  },
})<PillProps>(({variant = 'default', maxWidth, ...elemProps}, Element, model) => {
  return (
    <>
      {variant === 'readOnly' && (
        <StyledReadOnlyPill
          as={Element !== 'button' ? Element : 'span'}
          id={model.state.id}
          maxWidth={model.state.maxWidth}
          {...elemProps}
        >
          <PillLabel>{elemProps.children}</PillLabel>
        </StyledReadOnlyPill>
      )}
      {variant === 'default' && (
        <StyledBasePill as={Element} {...elemProps} disabled={model.state.disabled}>
          <Flex gap="xxxs" display="inline-flex" alignItems="center">
            {React.Children.map(elemProps.children, (child, index) => {
              if (typeof child === 'string') {
                return <PillLabel key={index}>{child}</PillLabel>;
              }
              return (
                <Flex.Item key={index} display="inline-flex">
                  {child}
                </Flex.Item>
              );
            })}
          </Flex>
        </StyledBasePill>
      )}
      {variant === 'removable' && (
        <StyledNonInteractivePill
          as={Element !== 'button' ? Element : 'span'}
          variant={variant}
          type={undefined}
          {...handleCsProp(elemProps, [model.state.disabled ? 'disabled' : undefined])}
        >
          <Flex gap="xxxs" display="inline-flex" alignItems="center" justifyContent="center">
            {React.Children.map(elemProps.children, (child, index) => {
              if (typeof child === 'string') {
                return <PillLabel key={index}>{child}</PillLabel>;
              }
              return <Flex.Item key={index}>{child}</Flex.Item>;
            })}
          </Flex>
        </StyledNonInteractivePill>
      )}
    </>
  );
});
