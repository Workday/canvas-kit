import * as React from 'react';
import {createComponent, ErrorType, focusRing, useUniqueId} from '@workday/canvas-kit-react/common';
import {calc, createStencil, px2rem} from '@workday/canvas-kit-styling';
import {brand, system} from '@workday/canvas-tokens-web';
import {mergeStyles} from '../../layout';

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
    height: system.space.x6,
    width: system.space.x8,
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
    height: system.space.x6,
    width: system.space.x8,
    margin: system.space.zero,
    marginLeft: system.space.x1,
    borderRadius: system.shape.round,
    opacity: '0',
    cursor: 'pointer',
    '&:checked, &.checked': {
      '& ~ div:first-of-type': {
        backgroundColor: brand.primary.base,
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
              0 0 0 ${px2rem(2)} ${system.color.border.inverse},
              0 0 0 ${system.space.x1} ${brand.common.errorInner},
              0 0 0 ${px2rem(5)} transparent`,
        },
      },
      caution: {
        '& ~ div:first-of-type': {
          boxShadow: `
          0 0 0 ${px2rem(2)} ${system.color.border.inverse},
          0 0 0 ${system.space.x1} ${brand.common.alertInner},
          0 0 0 ${px2rem(5)} ${brand.common.alertOuter}`,
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
    marginTop: system.space.x1,
    width: system.space.x8,
    height: system.space.x4,
    borderRadius: system.shape.round,
    padding: `${system.space.zero} ${px2rem(2)}`,
    transition: 'background-color 200ms ease',
    backgroundColor: system.color.bg.muted.soft,
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
    width: system.space.x3,
    height: system.space.x3,
    borderRadius: system.shape.round,
    boxShadow: system.depth[1],
    transition: 'transform 150ms ease',
    pointerEvents: 'none',
    backgroundColor: brand.primary.accent,
    transform: `translateX(${system.space.zero})`,
  },
  modifiers: {
    checked: {
      true: {
        transform: `translateX(${system.space.x4})`,
        ':dir(rtl)': {
          transform: `translateX(${calc.negate(system.space.x4)})`,
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
