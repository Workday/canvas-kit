import React from 'react';
import {CSSObject} from '@emotion/react';

import {BaseButton} from '@workday/canvas-kit-react/button';
import {
  createContainer,
  focusRing,
  mouseFocusBehavior,
  styled,
  StyledType,
} from '@workday/canvas-kit-react/common';
import {BoxProps, boxStyleFn, HStack, Stack} from '@workday/canvas-kit-react/layout';
import {borderRadius, colors, space, type} from '@workday/canvas-kit-react/tokens';

import {usePillModel} from './usePillModel';

import {PillIcon} from './PillIcon';
import {PillIconButton} from './PillIconButton';
import {PillCount} from './PillCount';
import {PillAvatar} from './PillAvatar';
import {PillLabel} from './PillLabel';

export interface PillProps extends BoxProps {
  /**
   * Defines what kind of pill to render stylistically and its interaction states
   * @default 'default'
   */
  variant?: 'default' | 'readOnly' | 'removable';
}

const getButtonPillColors = () => {
  return {
    default: {
      background: colors.soap300,
      icon: colors.licorice200,
      label: colors.blackPepper400,
      border: colors.licorice200,
    },
    hover: {
      icon: colors.licorice500,
      background: colors.soap400,
      border: colors.licorice400,
    },
    active: {
      icon: colors.licorice500,
      background: colors.soap500,
      border: colors.licorice500,
    },
    focus: {
      icon: colors.licorice500,
      background: colors.soap300,
      border: colors.blueberry400,
      focusRing: focusRing({
        width: 0,
        inset: 'inner',
        innerColor: colors.blueberry400,
        outerColor: colors.blueberry400,
        separation: 1,
      }),
    },
    disabled: {
      icon: colors.licorice100,
      label: colors.licorice100,
      background: colors.soap100,
      border: colors.licorice100,
      opacity: '1',
    },
  };
};

const getRemovablePillColors = (disabled?: boolean) => {
  return {
    default: {
      background: disabled ? colors.soap100 : colors.soap300,
      icon: disabled ? colors.licorice100 : colors.licorice200,
      label: disabled ? colors.licorice100 : colors.blackPepper400,
      border: disabled ? colors.licorice100 : colors.licorice200,
    },
    hover: {
      icon: disabled ? colors.licorice100 : colors.licorice500,
      background: disabled ? colors.soap100 : colors.soap300,
      border: disabled ? colors.licorice100 : colors.licorice200,
      label: disabled ? colors.licorice100 : colors.blackPepper400,
    },
    active: {
      icon: disabled ? colors.licorice100 : colors.licorice500,
      background: disabled ? colors.soap100 : colors.soap500,
      border: disabled ? colors.licorice100 : colors.licorice500,
      label: disabled ? colors.licorice100 : colors.blackPepper400,
    },
    focus: {
      icon: colors.licorice200,
      background: colors.soap300,
      label: colors.blackPepper400,

      focusRing: focusRing({
        width: 0,
        innerColor: 'transparent',
        outerColor: 'transparent',
      }),
    },
    disabled: {},
  };
};

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
    '&:focus': {
      'span[data-count="ck-pill-count"]': {
        borderTop: `1px solid ${colors.blueberry400}`,
        borderBottom: `1px solid ${colors.blueberry400}`,
        borderRight: `1px solid ${colors.blueberry400}`,
      },
    },
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
  },
  ({variant}) => ({
    '&:focus': {
      borderColor: variant === 'removable' ? undefined : colors.blueberry400,
    },
  }),
  boxStyleFn
);

const StyledNonInteractivePill = styled(StyledBasePill)<StyledType>({
  cursor: 'default',
  overflow: 'revert', // override BaseButton overflow styles so the click target exists outside the pill for removable
  position: 'relative',
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
     * #### Usage
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
        <StyledNonInteractivePill
          maxWidth={model.state.maxWidth}
          as={Element !== 'button' ? Element : 'span'}
          border={`1px solid ${colors.licorice200}`}
          id={model.state.id}
          {...elemProps}
        >
          <PillLabel>{elemProps.children}</PillLabel>
        </StyledNonInteractivePill>
      )}
      {variant === 'default' && (
        <StyledBasePill
          colors={getButtonPillColors()}
          as={Element}
          {...elemProps}
          disabled={model.state.disabled}
        >
          <HStack spacing="xxxs" display="inline-flex" alignItems="center">
            {React.Children.map(elemProps.children, (child, index) => {
              if (typeof child === 'string') {
                return <PillLabel key={index}>{child}</PillLabel>;
              }
              return (
                <Stack.Item key={index} display="inline-flex">
                  {child}
                </Stack.Item>
              );
            })}
          </HStack>
        </StyledBasePill>
      )}
      {variant === 'removable' && (
        <StyledNonInteractivePill
          colors={getRemovablePillColors(model.state.disabled)}
          as={Element !== 'button' ? Element : 'span'}
          variant={variant}
          {...elemProps}
        >
          <HStack spacing="xxxs" display="inline-flex" alignItems="center" justifyContent="center">
            {React.Children.map(elemProps.children, (child, index) => {
              if (typeof child === 'string') {
                return <PillLabel key={index}>{child}</PillLabel>;
              }
              return <Stack.Item key={index}>{child}</Stack.Item>;
            })}
          </HStack>
        </StyledNonInteractivePill>
      )}
    </>
  );
});
