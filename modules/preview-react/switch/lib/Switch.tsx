import * as React from 'react';

import {ErrorType, createComponent, focusRing, useUniqueId} from '@workday/canvas-kit-react/common';
import {SystemIcon, systemIconStencil} from '@workday/canvas-kit-react/icon';
import {
  CSProps,
  calc,
  createStencil,
  cssVar,
  handleCsProp,
  px2rem,
} from '@workday/canvas-kit-styling';
import {checkSmallIcon, xSmallIcon} from '@workday/canvas-system-icons-web';
import {base, brand, system} from '@workday/canvas-tokens-web';

export interface SwitchProps extends CSProps {
  /**
   * If true, set the Switch to the on state.
   * @default false
   */
  checked?: boolean;
  /**
   * If true, set the Switch to the disabled state.
   * @default false
   */
  disabled?: boolean;
  /**
   * The HTML `id` of the underlying checkbox input element.
   * @default A uniquely generated id
   */
  id?: string;
  /**
   * The function called when the Switch state changes.
   */
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  /**
   * The value of the Switch.
   */
  value?: string;
  /**
   * The type of error associated with the Switch (if applicable).
   */
  error?: ErrorType;
}

const switchContainerStencil = createStencil({
  base: {
    position: 'relative',
    // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
    marginTop: cssVar(system.gap.xs, system.space.x1),
    // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
    height: cssVar(base.size225, calc.add(system.space.x4, system.space.half)),
    // This value is in the spec and there is no token for this size.
    // calc() does not work inside of cssVar() as the first value.
    width: '2.125rem',
  },
});

const SwitchContainer = createComponent('div')({
  displayName: 'SwitchContainer',
  Component: ({children, ...elemProps}, ref, Element) => {
    return (
      <Element ref={ref} {...handleCsProp(elemProps, switchContainerStencil())}>
        {children}
      </Element>
    );
  },
});

const switchInputStencil = createStencil({
  base: {
    display: 'flex',
    position: 'absolute',
    // This allows for the input to be the same size as the clickable area for the Switch
    margin: 0,
    // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
    height: cssVar(base.size225, calc.add(system.space.x4, system.space.half)),
    // This value is in the spec and there is no token for this size.
    // calc() does not work inside of cssVar() as the first value.
    width: '2.125rem',
    // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
    borderRadius: cssVar(system.shape.full, system.shape.round),
    opacity: '0',
    cursor: 'pointer',
    // This is used in "High Contrast Mode" to show an outline on the Switch background.
    '& ~ div:first-of-type': {
      outlineOffset: px2rem(2),
    },
    '&:checked, &.checked': {
      '& ~ div:first-of-type': {
        // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
        backgroundColor: cssVar(system.color.brand.accent.primary, brand.primary.base),
      },
      '&:disabled, &.disabled': {
        '& ~ div:first-of-type': {
          opacity: system.opacity.disabled,
        },
      },
    },
    '&:disabled, &.disabled': {
      cursor: 'not-allowed',
      '& ~ div:first-of-type': {
        opacity: system.opacity.disabled,
      },
    },
    '&:focus-visible, &:focus, &.focus': {
      outline: 'none',
      '& ~ div:first-of-type': {
        // This is used in "High Contrast Mode" to show an outline on the Switch background.
        outline: `${px2rem(1)} solid transparent`,
        ...focusRing({separation: 2, animate: false}),
      },
    },
  },
  modifiers: {
    error: {
      error: {
        '& ~ div:first-of-type': {
          // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
          boxShadow: `
              0 0 0 ${px2rem(2)} ${cssVar(system.color.focus.inverse, base.neutral0)},
              0 0 0 ${system.space.x1} ${cssVar(system.color.brand.focus.critical, brand.common.errorInner)},
              0 0 0 ${px2rem(5)} transparent`,
        },
      },
      caution: {
        '& ~ div:first-of-type': {
          // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
          boxShadow: `
          0 0 0 ${px2rem(2)} ${cssVar(system.color.focus.inverse, base.neutral0)},
          0 0 0 ${system.space.x1} ${cssVar(system.color.brand.focus.caution.inner, brand.common.alertInner)},
          0 0 0 ${px2rem(5)} ${cssVar(system.color.brand.border.caution, brand.common.alertOuter)}`,
        },
      },
    },
  },
});

const SwitchInput = createComponent('input')<SwitchProps>({
  displayName: 'SwitchInput',
  Component: ({error, ...elemProps}, ref, Element) => {
    return <Element ref={ref} {...handleCsProp(elemProps, switchInputStencil({error}))} />;
  },
});

const switchBackgroundStencil = createStencil({
  base: {
    position: 'absolute',
    display: 'flex',
    alignItems: 'center',
    pointerEvents: 'none',
    // This is used in "High Contrast Mode" to show a border on the Switch background.
    border: `${px2rem(1)} solid transparent`,
    // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
    height: cssVar(base.size225, calc.add(system.space.x4, system.space.half)),
    // This value is in the spec and there is no token for this size.
    // calc() does not work inside of cssVar() as the first value.
    width: '2.125rem',
    // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
    borderRadius: cssVar(system.shape.full, system.shape.round),
    padding: `0 ${px2rem(2)}`,
    transition: 'background-color 200ms ease',
    // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
    backgroundColor: cssVar(system.color.accent.muted.soft, system.color.bg.muted.soft),
  },
});

const SwitchBackground = createComponent('div')({
  displayName: 'SwitchBackground',
  Component: ({children, ...elemProps}, ref, Element) => {
    return (
      <Element ref={ref} {...handleCsProp(elemProps, switchBackgroundStencil())}>
        {children}
      </Element>
    );
  },
});

const switchCircleStencil = createStencil({
  base: {
    // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
    width: cssVar(base.size150, system.space.x3),
    // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
    height: cssVar(base.size150, system.space.x3),
    // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
    borderRadius: cssVar(system.shape.full, system.shape.round),
    // This is used in "High Contrast Mode" to show a border on the Switch thumb.
    border: `${px2rem(1)} solid transparent`,
    boxShadow: system.depth[1],
    transition: 'transform 150ms ease',
    pointerEvents: 'none',
    // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
    backgroundColor: cssVar(system.color.fg.inverse, brand.primary.accent),
    transform: 'translateX(0)',
  },
  modifiers: {
    checked: {
      true: {
        transform: `translateX(${px2rem(16)})`,
        ':dir(rtl)': {
          transform: `translateX(${px2rem(-16)})`,
        },
      },
    },
  },
});

const SwitchCircle = createComponent('div')<Pick<SwitchProps, 'checked'> & CSProps>({
  displayName: 'SwitchCircle',
  Component: ({checked, ...elemProps}, ref, Element) => {
    return <Element ref={ref} {...handleCsProp(elemProps, switchCircleStencil({checked}))} />;
  },
});

const switchIconStencil = createStencil({
  base: {
    // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
    [systemIconStencil.vars.color]: cssVar(system.color.fg.inverse, brand.primary.accent),
    // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
    [systemIconStencil.vars.height]: cssVar(system.size.xxs, system.space.x5),
    // TODO (forwardfit token): Revisit token, using v4 token and fallback to v3 token
    [systemIconStencil.vars.width]: cssVar(system.size.xxs, system.space.x5),
    position: 'absolute',
    transition: 'transform 0ms',
    pointerEvents: 'none',
    transform: `translateX(${px2rem(11)})`,
    ':dir(rtl)': {
      transform: `translateX(${px2rem(-11)})`,
    },
  },
  modifiers: {
    checked: {
      true: {
        transform: `translateX(${px2rem(-3)})`,
        ':dir(rtl)': {
          transform: `translateX(${px2rem(3)})`,
        },
      },
    },
  },
});

const SwitchIcon = createComponent('div')<Pick<SwitchProps, 'checked'> & CSProps>({
  displayName: 'SwitchIcon',
  Component: ({checked, ...elemProps}, ref) => {
    return (
      <SystemIcon
        icon={checked ? checkSmallIcon : xSmallIcon}
        ref={ref}
        {...handleCsProp(elemProps, switchIconStencil({checked}))}
      />
    );
  },
});

export const Switch = createComponent('input')({
  displayName: 'Switch',
  Component: (
    {checked = false, id, disabled = false, onChange, value, ...elemProps}: SwitchProps,
    ref,
    Element
  ) => {
    const inputId = useUniqueId(id);
    return (
      <SwitchContainer>
        <SwitchInput
          as={Element}
          checked={checked}
          disabled={disabled}
          id={inputId}
          ref={ref}
          onChange={onChange}
          role="switch"
          type="checkbox"
          value={value}
          {...elemProps}
        />
        <SwitchBackground>
          <SwitchCircle checked={checked} />
          <SwitchIcon checked={checked} />
        </SwitchBackground>
      </SwitchContainer>
    );
  },
  subComponents: {
    ErrorType,
  },
});
