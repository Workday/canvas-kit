import * as React from 'react';

import {ErrorType, createComponent, focusRing, useUniqueId} from '@workday/canvas-kit-react/common';
import {calc, createStencil, px2rem} from '@workday/canvas-kit-styling';
import {base, system} from '@workday/canvas-tokens-web';

import {mergeStyles} from '../../layout';

/**
 * @deprecated ⚠️ `SwitchProps` in Main has been deprecated in v15 and will be removed in a future major version. Please use [`Switch` in Preview](https://workday.github.io/canvas-kit/?path=/docs/preview-inputs-switch--docs) instead.
 */
export interface SwitchProps {
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
    height: system.size.xs,
    width: system.size.sm,
  },
});

const SwitchContainer = createComponent('div')({
  displayName: 'SwitchContainer',
  Component: ({children, ...elemProps}, ref, Element) => {
    return (
      <Element ref={ref} {...mergeStyles(elemProps, switchContainerStencil())}>
        {children}
      </Element>
    );
  },
});

const switchInputStencil = createStencil({
  base: {
    display: 'flex',
    position: 'absolute',
    height: system.size.xs,
    width: system.size.sm,
    borderRadius: system.shape.full,
    opacity: '0',
    cursor: 'pointer',
    '&:checked, &.checked': {
      '& ~ div:first-of-type': {
        backgroundColor: system.color.brand.accent.primary,
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
        ...focusRing({separation: 2, animate: false}),
      },
    },
  },
  modifiers: {
    error: {
      error: {
        '& ~ div:first-of-type': {
          boxShadow: `
              0 0 0 ${px2rem(2)} ${system.color.focus.inverse},
              0 0 0 ${system.space.x1} ${system.color.brand.focus.critical},
              0 0 0 ${px2rem(5)} transparent`,
        },
      },
      caution: {
        '& ~ div:first-of-type': {
          boxShadow: `
          0 0 0 ${px2rem(2)} ${system.color.focus.inverse},
          0 0 0 ${system.space.x1} ${system.color.brand.focus.caution.inner},
          0 0 0 ${px2rem(5)} ${system.color.brand.border.caution}`,
        },
      },
    },
  },
});

const SwitchInput = createComponent('input')<SwitchProps>({
  displayName: 'SwitchInput',
  Component: ({error, ...elemProps}, ref, Element) => {
    return <Element ref={ref} {...mergeStyles(elemProps, switchInputStencil({error}))} />;
  },
});

const switchBackgroundStencil = createStencil({
  base: {
    position: 'absolute',
    display: 'flex',
    alignItems: 'center',
    pointerEvents: 'none',
    marginTop: system.gap.xs,
    width: system.size.sm,
    height: system.size.xxxs,
    borderRadius: system.shape.full,
    padding: `0 ${px2rem(2)}`,
    transition: 'background-color 200ms ease',
    backgroundColor: system.color.accent.muted.soft,
  },
});

const SwitchBackground = createComponent('div')({
  displayName: 'SwitchBackground',
  Component: ({children, ...elemProps}, ref, Element) => {
    return (
      <Element ref={ref} {...mergeStyles(elemProps, switchBackgroundStencil())}>
        {children}
      </Element>
    );
  },
});

const switchCircleStencil = createStencil({
  base: {
    width: base.size150,
    height: base.size150,
    borderRadius: system.shape.full,
    boxShadow: system.depth[1],
    transition: 'transform 150ms ease',
    pointerEvents: 'none',
    backgroundColor: system.color.fg.inverse,
    transform: `translateX(${system.space.zero})`,
  },
  modifiers: {
    checked: {
      true: {
        transform: `translateX(${system.size.xxxs})`,
        ':dir(rtl)': {
          transform: `translateX(${calc.negate(system.size.xxxs)})`,
        },
      },
    },
  },
});

const SwitchCircle = createComponent('div')<Pick<SwitchProps, 'checked'>>({
  displayName: 'SwitchCircle',
  Component: ({checked, ...elemProps}, ref, Element) => {
    return <Element ref={ref} {...mergeStyles(elemProps, switchCircleStencil({checked}))} />;
  },
});

/**
 * @deprecated ⚠️ `Switch` in Main has been deprecated in v15 and will be removed in a future major version. Please use [`Switch` in Preview](https://workday.github.io/canvas-kit/?path=/docs/preview-inputs-switch--docs) instead.
 */
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
        </SwitchBackground>
      </SwitchContainer>
    );
  },
  subComponents: {
    ErrorType,
  },
});
